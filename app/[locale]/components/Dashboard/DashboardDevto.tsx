import {
  FaBook,
  FaHeart,
  FaComment,
  FaEye,
  FaChartLine,
  FaCalendar,
  FaTrophy,
  FaTags,
} from "react-icons/fa";
import { DevToData } from "@/models/devto";
import { devInfo } from "@/utils/devInfo";

export async function DevToShowcase() {
  let data: DevToData | null = null;
  let totalArticleCount = 0;

  try {
    // Fetch articles from Dev.to API
    const response = await fetch(
      `https://dev.to/api/articles?username=${devInfo.handle}&per_page=50`,
      { next: { revalidate: 3600 } }, // Cache for 1 hour
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Dev.to data");
    }

    const articles = await response.json();
    totalArticleCount = articles.length;

    // Check if page_views_count is available
    const hasViewsData = articles.some(
      (article: any) => article.page_views_count > 0,
    );

    // Calculate totals (only include views if data is available)
    const totalViews = hasViewsData
      ? articles.reduce(
          (sum: number, article: any) => sum + (article.page_views_count || 0),
          0,
        )
      : null;
    const totalReactions = articles.reduce(
      (sum: number, article: any) => sum + article.public_reactions_count,
      0,
    );
    const totalComments = articles.reduce(
      (sum: number, article: any) => sum + article.comments_count,
      0,
    );

    // Calculate top tags
    const tagCounts: Record<string, number> = {};
    articles.forEach((article: any) => {
      article.tag_list.forEach((tag: string) => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });

    const topTags = Object.entries(tagCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 6)
      .map(([tag, count]) => ({ tag, count }));

    data = {
      articles: articles,
      totalViews,
      totalReactions,
      totalComments,
      topTags,
      hasViewsData,
    };
  } catch (error) {
    console.error("Error fetching Dev.to data:", error);
    data = null;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  // Helper function to get top articles based on reactions instead of just views
  const getTopArticles = (articles: any[], count: number = 3) => {
    return articles
      .sort((a, b) => {
        // Primary sort: reactions count
        const aReactions = a.public_reactions_count || 0;
        const bReactions = b.public_reactions_count || 0;
        if (aReactions !== bReactions) return bReactions - aReactions;

        // Secondary sort: views (if available)
        const aViews = a.page_views_count || 0;
        const bViews = b.page_views_count || 0;
        if (aViews !== bViews) return bViews - aViews;

        // Tertiary sort: comments
        return (b.comments_count || 0) - (a.comments_count || 0);
      })
      .slice(0, count);
  };

  if (!data || data.articles.length === 0) {
    return (
      <div className="bg-base-100 rounded-xl p-6 text-center">
        <FaBook className="mx-auto mb-4 h-12 w-12 opacity-30" />
        <p className="opacity-60">No Dev.to articles found</p>
      </div>
    );
  }

  const topArticles = getTopArticles(data.articles);
  // Sort articles by publication date to get the most recent ones
  const recentArticles = data.articles
    .sort(
      (a, b) =>
        new Date(b.published_at).getTime() - new Date(a.published_at).getTime(),
    )
    .slice(0, 5);

  return (
    <div className="bg-base-100 rounded-xl p-6">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="bg-primary/20 flex h-8 w-8 items-center justify-center rounded-full">
          <FaBook className="text-primary h-4 w-4" />
        </div>
        <h3 className="text-xl font-bold">Dev.to Articles</h3>
        <div className="ml-auto text-sm">
          <span className="bg-base-200 rounded-full px-3 py-1">
            {totalArticleCount} articles published
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div
        className={`mb-6 grid grid-cols-1 gap-4 ${data.hasViewsData && data.totalViews !== null ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}
      >
        <div className="bg-accent text-accent-content rounded-lg p-4 text-center">
          <div className="text-2xl font-bold">
            {formatNumber(data.totalReactions)}
          </div>
          <div className="text-sm opacity-70">Total Reactions</div>
        </div>
        <div className="bg-primary text-primary-content rounded-lg p-4 text-center">
          <div className="text-2xl font-bold">
            {formatNumber(data.totalComments)}
          </div>
          <div className="text-sm opacity-70">Total Comments</div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Column 1: Top Articles + Popular Tags */}
        <div>
          {/* Top Performing Articles */}
          <h4 className="mb-3 flex items-center gap-2 font-semibold">
            <FaTrophy className="text-warning h-4 w-4" />
            Top 3 Articles
          </h4>
          <div className="mb-6 space-y-4">
            {topArticles.map((article, index) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-base-200 hover:bg-base-300 block rounded-lg p-4 transition-colors duration-200"
              >
                <div className="flex gap-4">
                  <div className="bg-warning text-warning-content flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold">
                    {index + 1}
                  </div>
                  {article.cover_image && (
                    <img
                      src={article.cover_image}
                      alt={article.title}
                      className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                    />
                  )}
                  <div className="min-w-0 flex-1">
                    <h5 className="mb-2 line-clamp-2 font-medium">
                      {article.title}
                    </h5>
                    <p className="mb-3 line-clamp-2 text-sm opacity-70">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1 opacity-60">
                        <FaCalendar className="h-3 w-3" />
                        {formatDate(article.published_at)}
                      </span>
                      <div className="flex items-center gap-3">
                        {data.hasViewsData && (
                          <span className="flex items-center gap-1 opacity-70">
                            <FaEye className="h-3 w-3" />
                            {formatNumber(article.page_views_count || 0)}
                          </span>
                        )}
                        <span className="flex items-center gap-1 opacity-70">
                          <FaHeart className="h-3 w-3" />
                          {article.public_reactions_count}
                        </span>
                        <span className="flex items-center gap-1 opacity-70">
                          <FaComment className="h-3 w-3" />
                          {article.comments_count}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Popular Tags */}
          <h4 className="mb-3 flex items-center gap-2 font-semibold">
            <FaTags className="h-4 w-4" />
            Popular Tags
          </h4>
          <div className="flex flex-wrap gap-2">
            {data.topTags.map(({ tag, count }) => (
              <span
                key={tag}
                className="bg-primary/10 text-primary inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm"
              >
                #{tag}
                <span className="text-xs opacity-70">({count})</span>
              </span>
            ))}
          </div>
        </div>

        {/* Column 2: Recent Articles */}
        <div>
          <h4 className="mb-3 flex items-center gap-2 font-semibold">
            <FaChartLine className="h-4 w-4" />
            Recent Articles
          </h4>
          <div className="space-y-4">
            {recentArticles.map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-base-200 hover:bg-base-300 block rounded-lg p-4 transition-colors duration-200"
              >
                <div className="flex gap-4">
                  {article.cover_image && (
                    <img
                      src={article.cover_image}
                      alt={article.title}
                      className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                    />
                  )}
                  <div className="min-w-0 flex-1">
                    <h5 className="mb-2 line-clamp-2 font-medium">
                      {article.title}
                    </h5>
                    <p className="mb-3 line-clamp-2 text-sm opacity-70">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1 opacity-60">
                        <FaCalendar className="h-3 w-3" />
                        {formatDate(article.published_at)}
                      </span>
                      <div className="flex items-center gap-3">
                        {data.hasViewsData && (
                          <span className="flex items-center gap-1 opacity-70">
                            <FaEye className="h-3 w-3" />
                            {formatNumber(article.page_views_count || 0)}
                          </span>
                        )}
                        <span className="flex items-center gap-1 opacity-70">
                          <FaHeart className="h-3 w-3" />
                          {article.public_reactions_count}
                        </span>
                        <span className="flex items-center gap-1 opacity-70">
                          <FaComment className="h-3 w-3" />
                          {article.comments_count}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
