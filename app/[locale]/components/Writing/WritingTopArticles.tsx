import { devInfo } from "@/utils/devInfo";
import {
  FaHeart,
  FaComment,
  FaEye,
  FaCalendar,
  FaTrophy,
} from "react-icons/fa";
import Image from "next/image";

interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  tag_list: string[];
  public_reactions_count: number;
  comments_count: number;
  page_views_count: number;
  reading_time_minutes: number;
  cover_image?: string;
}

export async function WritingTopArticles() {
  let topArticles: Article[] = [];
  let hasViewsData = false;

  try {
    // Fetch more articles to get better "all-time" top 3 selection
    const response = await fetch(
      `https://dev.to/api/articles?username=${devInfo.handle}&per_page=100`,
      { next: { revalidate: 3600 } }, // Cache for 1 hour
    );

    if (response.ok) {
      const articles = await response.json();
      hasViewsData = articles.some(
        (article: Article) => article.page_views_count > 0,
      );

      // Get all-time top 3 articles using comprehensive sorting
      topArticles = articles
        .sort((a: Article, b: Article) => {
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
        .slice(0, 3);
    }
  } catch (error) {
    console.error("Error fetching Dev.to data for Writing section:", error);
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

  if (topArticles.length === 0) {
    return null;
  }

  return (
    <div className="lg:col-span-4">
      <div className="mb-6 flex items-center gap-3">
        <FaTrophy className="text-primary-content/80 h-5 w-5" />
        <h3 className="text-xl font-bold">Top 3 Articles</h3>
      </div>

      <div className="space-y-4">
        {topArticles.map((article, index) => (
          <a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group border-primary-content/20 bg-primary-content/10 hover:border-primary-content/30 hover:bg-primary-content/20 block rounded-lg border p-4 backdrop-blur-sm transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="bg-primary-content/20 text-primary-content flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold">
                {index + 1}
              </div>
              {article.cover_image && (
                <Image
                  src={article.cover_image}
                  alt={article.title}
                  width={48}
                  height={48}
                  className="h-12 w-12 flex-shrink-0 rounded-lg object-cover opacity-90 transition-opacity group-hover:opacity-100"
                />
              )}
              <div className="min-w-0 flex-1">
                <h5 className="group-hover:text-primary-content/90 mb-2 line-clamp-2 text-sm font-medium transition-colors">
                  {article.title}
                </h5>
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 opacity-70">
                    <FaCalendar className="h-3 w-3" />
                    {formatDate(article.published_at)}
                  </span>
                  <div className="flex items-center gap-2 text-xs">
                    {hasViewsData && (
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
  );
}
