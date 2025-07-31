export interface DevToData {
  articles: Array<{
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
  }>;
  totalViews: number;
  totalReactions: number;
  totalComments: number;
  topTags: Array<{ tag: string; count: number }>;
}