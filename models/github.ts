export interface GitHubData {
  user: {
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
  };
  repos: Array<{
    name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    updated_at: string;
    html_url: string;
  }>;
  events: Array<{
    id: string;
    type: string;
    repo: { name: string };
    created_at: string;
    payload: any;
  }>;
  totalStars: number;
  totalForks: number;
  languages: Record<string, number>;
}