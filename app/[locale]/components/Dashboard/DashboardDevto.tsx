import {
  FaBook,
  FaHeart,
  FaComment,
  FaEye,
  FaChartLine,
  FaCalendar,
} from "react-icons/fa";
import { DevToData } from "@/models/devto";
import { devInfo } from "@/utils/devInfo";

export async function DevToShowcase() {
  let data: DevToData | null = null;

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

    // Calculate totals
    const totalViews = articles.reduce(
      (sum: number, article: any) => sum + (article.page_views_count || 0),
      0,
    );
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
      .slice(0, 8)
      .map(([tag, count]) => ({ tag, count }));

    data = {
      articles: articles.slice(0, 6), // Show top 6 articles
      totalViews,
      totalReactions,
      totalComments,
      topTags,
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

  if (!data || data.articles.length === 0) {
    return (
      <div className="bg-base-100 rounded-xl p-6 text-center">
        <FaBook className="mx-auto mb-4 h-12 w-12 opacity-30" />
        <p className="opacity-60">No Dev.to articles found</p>
      </div>
    );
  }

  return (
    <div className="bg-base-100 rounded-xl p-6">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="bg-primary/20 flex h-8 w-8 items-center justify-center rounded-full">
          <FaBook className="text-primary h-4 w-4" />
        </div>
        <h3 className="text-xl font-bold">Dev.to Articles</h3>
        <div className="ml-auto text-sm opacity-60">
          {data.articles.length} articles published
        </div>
      </div>

      {/* Stats */}
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg bg-gradient-to-br from-red-500/10 to-red-600/20 p-4 text-center">
          <div className="text-2xl font-bold text-red-600">
            {formatNumber(data.totalViews)}
          </div>
          <div className="flex items-center justify-center gap-1 text-sm opacity-70">
            <FaEye className="h-3 w-3" />
            Total Views
          </div>
        </div>
        <div className="rounded-lg bg-gradient-to-br from-pink-500/10 to-pink-600/20 p-4 text-center">
          <div className="text-2xl font-bold text-pink-600">
            {data.totalReactions}
          </div>
          <div className="flex items-center justify-center gap-1 text-sm opacity-70">
            <FaHeart className="h-3 w-3" />
            Total Reactions
          </div>
        </div>
        <div className="rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-600/20 p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">
            {data.totalComments}
          </div>
          <div className="flex items-center justify-center gap-1 text-sm opacity-70">
            <FaComment className="h-3 w-3" />
            Total Comments
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent Articles */}
        <div className="lg:col-span-2">
          <h4 className="mb-3 flex items-center gap-2 font-semibold">
            <FaChartLine className="h-4 w-4" />
            Recent Articles
          </h4>
          <div className="space-y-4">
            {data.articles.slice(0, 4).map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-base-200 hover:bg-base-300 block rounded-lg p-4 transition-colors"
              >
                <div className="flex gap-4">
                  {article.cover_image && (
                    <img
                      src={article.cover_image || "/placeholder.svg"}
                      alt={article.title}
                      className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                    />
                  )}
                  <div className="min-w-0 flex-1">
                    <h5 className="mb-1 line-clamp-2 font-medium">
                      {article.title}
                    </h5>
                    <p className="mb-2 line-clamp-2 text-sm opacity-70">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1 opacity-60">
                        <FaCalendar className="h-3 w-3" />
                        {formatDate(article.published_at)}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <FaEye className="h-3 w-3" />
                          {formatNumber(article.page_views_count || 0)}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaHeart className="h-3 w-3" />
                          {article.public_reactions_count}
                        </span>
                        <span className="flex items-center gap-1">
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
          <h4 className="mb-3 font-semibold">Popular Tags</h4>
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

          {/* Top Performing Article */}
          {data.articles.length > 0 && (
            <div className="mt-6">
              <h4 className="mb-3 font-semibold">Top Article</h4>
              {(() => {
                const topArticle = data.articles.reduce((prev, current) =>
                  (prev.page_views_count || 0) > (current.page_views_count || 0)
                    ? prev
                    : current,
                );
                return (
                  <a
                    href={topArticle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 border-primary/20 block rounded-lg border bg-gradient-to-r p-4 transition-colors"
                  >
                    <h5 className="mb-2 line-clamp-2 font-medium">
                      {topArticle.title}
                    </h5>
                    <div className="flex items-center justify-between text-sm">
                      <span className="opacity-70">
                        {topArticle.reading_time_minutes} min read
                      </span>
                      <span className="text-primary font-semibold">
                        {formatNumber(topArticle.page_views_count || 0)} views
                      </span>
                    </div>
                  </a>
                );
              })()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
