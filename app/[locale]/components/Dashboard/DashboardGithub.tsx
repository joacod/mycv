import { FaCodeBranch, FaStar, FaCode, FaChartLine } from "react-icons/fa";
import { GitHubData } from "@/models/github";
import { devInfo } from "@/utils/devInfo";

export async function GitHubShowcase() {
  let data: GitHubData | null = null;

  try {
    // Fetch user info, repos, and recent events in parallel directly from GitHub API
    const [userResponse, reposResponse, eventsResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${devInfo.handle}`, {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }),
      fetch(
        `https://api.github.com/users/${devInfo.handle}/repos?sort=updated&per_page=100`,
        { next: { revalidate: 3600 } },
      ),
      fetch(
        `https://api.github.com/users/${devInfo.handle}/events?per_page=10`,
        { next: { revalidate: 3600 } },
      ),
    ]);

    if (!userResponse.ok || !reposResponse.ok || !eventsResponse.ok) {
      throw new Error("Failed to fetch GitHub data");
    }

    const [user, repos, events] = await Promise.all([
      userResponse.json(),
      reposResponse.json(),
      eventsResponse.json(),
    ]);

    // Calculate totals and language distribution
    const totalStars = repos.reduce(
      (sum: number, repo: any) => sum + repo.stargazers_count,
      0,
    );
    const totalForks = repos.reduce(
      (sum: number, repo: any) => sum + repo.forks_count,
      0,
    );

    const languages: Record<string, number> = {};
    repos.forEach((repo: any) => {
      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1;
      }
    });

    data = {
      user,
      repos: repos.slice(0, 6), // Top 6 repos
      events: events
        .filter((event: any) =>
          ["PushEvent", "CreateEvent", "PullRequestEvent"].includes(event.type),
        )
        .slice(0, 5),
      totalStars,
      totalForks,
      languages,
    };
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    data = null;
  }

  const getTopLanguages = () => {
    if (!data?.languages) return [];
    return Object.entries(data.languages)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const getEventDescription = (event: any) => {
    switch (event.type) {
      case "PushEvent":
        return `Pushed ${event.payload.commits?.length || 1} commit${event.payload.commits?.length !== 1 ? "s" : ""}`;
      case "CreateEvent":
        return `Created ${event.payload.ref_type}`;
      case "PullRequestEvent":
        return `${event.payload.action} pull request`;
      default:
        return "Activity";
    }
  };

  if (!data) {
    return (
      <div className="bg-base-100 rounded-xl p-6 text-center">
        <FaCodeBranch className="mx-auto mb-4 h-12 w-12 opacity-30" />
        <p className="opacity-60">Unable to load GitHub data</p>
      </div>
    );
  }

  return (
    <div className="bg-base-100 rounded-xl p-6">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="bg-primary/20 flex h-8 w-8 items-center justify-center rounded-full">
          <FaCodeBranch className="text-primary h-4 w-4" />
        </div>
        <h3 className="text-xl font-bold">GitHub Activity</h3>
        <div className="ml-auto text-sm opacity-60">
          Member since {new Date(data.user.created_at).getFullYear()}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-600/20 p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">
            {data.user.public_repos}
          </div>
          <div className="text-sm opacity-70">Repositories</div>
        </div>
        <div className="rounded-lg bg-gradient-to-br from-yellow-500/10 to-yellow-600/20 p-4 text-center">
          <div className="text-2xl font-bold text-yellow-600">
            {data.totalStars}
          </div>
          <div className="text-sm opacity-70">Total Stars</div>
        </div>
        <div className="rounded-lg bg-gradient-to-br from-green-500/10 to-green-600/20 p-4 text-center">
          <div className="text-2xl font-bold text-green-600">
            {data.user.followers}
          </div>
          <div className="text-sm opacity-70">Followers</div>
        </div>
        <div className="rounded-lg bg-gradient-to-br from-purple-500/10 to-purple-600/20 p-4 text-center">
          <div className="text-2xl font-bold text-purple-600">
            {data.totalForks}
          </div>
          <div className="text-sm opacity-70">Total Forks</div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Top Languages */}
        <div>
          <h4 className="mb-3 flex items-center gap-2 font-semibold">
            <FaCode className="h-4 w-4" />
            Top Languages
          </h4>
          <div className="space-y-2">
            {getTopLanguages().map(([language, count]) => (
              <div
                key={language}
                className="bg-base-200 flex items-center justify-between rounded-lg p-3"
              >
                <span className="font-medium">{language}</span>
                <div className="flex items-center gap-2">
                  <div className="bg-base-300 h-2 w-16 rounded-full">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{
                        width: `${(count / Math.max(...Object.values(data.languages))) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-sm opacity-70">{count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h4 className="mb-3 flex items-center gap-2 font-semibold">
            <FaChartLine className="h-4 w-4" />
            Recent Activity
          </h4>
          <div className="space-y-2">
            {data.events.map((event) => (
              <div key={event.id} className="bg-base-200 rounded-lg p-3">
                <div className="text-sm font-medium">
                  {getEventDescription(event)}
                </div>
                <div className="truncate text-xs opacity-70">
                  {event.repo.name}
                </div>
                <div className="mt-1 text-xs opacity-50">
                  {formatDate(event.created_at)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Repositories */}
      <div className="mt-6">
        <h4 className="mb-3 flex items-center gap-2 font-semibold">
          <FaStar className="h-4 w-4" />
          Popular Repositories
        </h4>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {data.repos
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 4)
            .map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-base-200 hover:bg-base-300 rounded-lg p-4 transition-colors"
              >
                <div className="mb-1 font-medium">{repo.name}</div>
                <div className="mb-2 line-clamp-2 text-sm opacity-70">
                  {repo.description || "No description available"}
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="opacity-60">{repo.language}</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <FaStar className="h-3 w-3" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCodeBranch className="h-3 w-3" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
