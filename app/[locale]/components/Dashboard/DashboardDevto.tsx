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
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body items-center text-center">
          <FaBook className="text-base-content/30 h-12 w-12" />
          <p className="text-base-content/60">No Dev.to articles found</p>
        </div>
      </div>
    );
  }

  const topArticles = getTopArticles(data.articles);
  const recentArticles = data.articles.slice(0, 5);

  return (
    <div className="card bg-base-100 shadow-lg">
      <div className="card-body">
        {/* Enhanced Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-primary-content flex h-10 w-10 items-center justify-center rounded-full">
              <FaBook className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base-content text-xl font-bold">
                Dev.to Articles
              </h3>
              <p className="text-base-content/60 text-sm">
                {totalArticleCount} articles published
              </p>
            </div>
          </div>
        </div>

        {/* Improved Stats Grid */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.hasViewsData && data.totalViews !== null && (
            <div className="bg-secondary text-secondary-content rounded-lg p-4 text-center">
              <div className="mb-1 text-2xl font-bold">
                {formatNumber(data.totalViews)}
              </div>
              <div className="flex items-center justify-center gap-1 text-sm opacity-80">
                <FaEye className="h-3 w-3" />
                Total Views
              </div>
            </div>
          )}
          <div className="bg-accent text-accent-content rounded-lg p-4 text-center">
            <div className="mb-1 text-2xl font-bold">
              {formatNumber(data.totalReactions)}
            </div>
            <div className="flex items-center justify-center gap-1 text-sm opacity-80">
              <FaHeart className="h-3 w-3" />
              Total Reactions
            </div>
          </div>
          <div className="bg-primary text-primary-content rounded-lg p-4 text-center">
            <div className="mb-1 text-2xl font-bold">
              {formatNumber(data.totalComments)}
            </div>
            <div className="flex items-center justify-center gap-1 text-sm opacity-80">
              <FaComment className="h-3 w-3" />
              Total Comments
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
          {/* Top Performing Articles */}
          <div className="xl:col-span-2">
            <h4 className="text-base-content mb-4 flex items-center gap-2 text-lg font-semibold">
              <FaTrophy className="text-warning h-5 w-5" />
              Top 3 Articles
            </h4>
            <div className="space-y-4">
              {topArticles.map((article, index) => (
                <a
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card bg-base-200 hover:bg-base-300 shadow-sm transition-colors duration-200 hover:shadow-md"
                >
                  <div className="card-body p-4">
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
                        <h5 className="text-base-content mb-2 line-clamp-2 font-medium">
                          {article.title}
                        </h5>
                        <p className="text-base-content/70 mb-3 line-clamp-2 text-sm">
                          {article.description}
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-base-content/60 flex items-center gap-1">
                            <FaCalendar className="h-3 w-3" />
                            {formatDate(article.published_at)}
                          </span>
                          <div className="flex items-center gap-3">
                            {data.hasViewsData && (
                              <span className="text-base-content/70 flex items-center gap-1">
                                <FaEye className="h-3 w-3" />
                                {formatNumber(article.page_views_count || 0)}
                              </span>
                            )}
                            <span className="text-base-content/70 flex items-center gap-1">
                              <FaHeart className="h-3 w-3" />
                              {article.public_reactions_count}
                            </span>
                            <span className="text-base-content/70 flex items-center gap-1">
                              <FaComment className="h-3 w-3" />
                              {article.comments_count}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Recent Articles Section */}
            <h4 className="text-base-content mt-8 mb-4 flex items-center gap-2 text-lg font-semibold">
              <FaChartLine className="text-info h-5 w-5" />
              Recent Articles
            </h4>
            <div className="space-y-3">
              {recentArticles.map((article) => (
                <a
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-base-200 hover:bg-base-300 block rounded-lg p-3 transition-colors duration-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="min-w-0 flex-1">
                      <h5 className="text-base-content mb-1 line-clamp-1 font-medium">
                        {article.title}
                      </h5>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-base-content/60">
                          {formatDate(article.published_at)}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-base-content/60 flex items-center gap-1">
                            <FaHeart className="h-3 w-3" />
                            {article.public_reactions_count}
                          </span>
                          <span className="text-base-content/60 flex items-center gap-1">
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

          {/* Popular Tags */}
          <div>
            <h4 className="text-base-content mb-4 flex items-center gap-2 text-lg font-semibold">
              <FaTags className="text-secondary h-5 w-5" />
              Popular Tags
            </h4>
            <div className="flex flex-wrap gap-2">
              {data.topTags.map(({ tag, count }) => (
                <span
                  key={tag}
                  className="badge badge-secondary badge-outline gap-1 text-sm"
                >
                  #{tag}
                  <span className="text-xs opacity-70">({count})</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
