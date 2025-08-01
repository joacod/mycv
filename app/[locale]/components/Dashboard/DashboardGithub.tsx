import {
  FaCodeBranch,
  FaStar,
  FaCode,
  FaChartLine,
  FaVuejs,
} from "react-icons/fa";
import {
  SiAstro,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiOracle,
  SiPhp,
  SiGo,
  SiRust,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiGnubash,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";
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
        `https://api.github.com/users/${devInfo.handle}/repos?sort=stars&direction=desc&per_page=100&type=owner`,
        { next: { revalidate: 3600 } },
      ),
      fetch(
        `https://api.github.com/users/${devInfo.handle}/events?per_page=50`,
        { next: { revalidate: 3600 } },
      ),
    ]);

    if (!userResponse.ok || !reposResponse.ok || !eventsResponse.ok) {
      throw new Error("Failed to fetch GitHub data");
    }

    let user, repos, events;
    try {
      [user, repos, events] = await Promise.all([
        userResponse.json(),
        reposResponse.json(),
        eventsResponse.json(),
      ]);
    } catch (parseError) {
      console.error("Error parsing GitHub API response:", parseError);
      throw new Error("Failed to parse GitHub data");
    }

    // Calculate totals and language distribution
    const totalStars = Array.isArray(repos)
      ? repos.reduce((sum: number, repo: any) => {
          // Ensure we're dealing with a valid number
          const stars =
            typeof repo?.stargazers_count === "number"
              ? repo.stargazers_count
              : 0;
          return sum + stars;
        }, 0)
      : 0;
    const totalForks = Array.isArray(repos)
      ? repos.reduce(
          (sum: number, repo: any) => sum + (repo.forks_count || 0),
          0,
        )
      : 0;

    const languages: Record<string, number> = {};
    if (Array.isArray(repos)) {
      repos.forEach((repo: any) => {
        if (repo?.language) {
          languages[repo.language] = (languages[repo.language] || 0) + 1;
        }
      });
    }

    data = {
      user: user || {
        public_repos: 0,
        followers: 0,
        following: 0,
        created_at: new Date().toISOString(),
      },
      repos: Array.isArray(repos) ? repos : [], // Keep all repos for accurate stats
      events: Array.isArray(events)
        ? events
            .filter((event: any) => {
              // Only include code contribution events
              return (
                event?.type &&
                [
                  "PushEvent", // Code commits
                  "CreateEvent", // New branches/tags
                  "PullRequestEvent", // PR actions (open/close/merge)
                  "IssuesEvent", // Issue actions
                  "ReleaseEvent", // New releases
                ].includes(event.type) &&
                // For PRs, only show if you're the author
                (event.type !== "PullRequestEvent" ||
                  event.payload?.pull_request?.user?.login === devInfo.handle)
              );
            })
            .slice(0, 5)
        : [],
      totalStars,
      totalForks,
      languages,
    };
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    data = null;
  }

  const getLanguageIcon = (language: string) => {
    const iconMap: Record<string, React.ReactElement> = {
      JavaScript: <SiJavascript className="h-5 w-5" />,
      TypeScript: <SiTypescript className="h-5 w-5" />,
      Python: <SiPython className="h-5 w-5" />,
      Java: <SiOracle className="h-5 w-5" />,
      PHP: <SiPhp className="h-5 w-5" />,
      Go: <SiGo className="h-5 w-5" />,
      Rust: <SiRust className="h-5 w-5" />,
      "C++": <SiCplusplus className="h-5 w-5" />,
      "C#": <TbBrandCSharp className="h-5 w-5" />,
      HTML: <SiHtml5 className="h-5 w-5" />,
      CSS: <SiCss3 className="h-5 w-5" />,
      Shell: <SiGnubash className="h-5 w-5" />,
      Vue: <FaVuejs className="h-5 w-5" />,
      Astro: <SiAstro className="h-5 w-5" />,
      default: <VscCode className="h-5 w-5" />,
    };
    return iconMap[language] || iconMap.default;
  };

  const getTopLanguages = () => {
    if (!data?.languages) return [];
    const sortedLanguages = Object.entries(data.languages).sort(
      ([, a], [, b]) => b - a,
    );

    // Get top 7 languages
    const topLanguages = sortedLanguages.slice(0, 7);

    // Calculate "Others" count from remaining languages
    const othersCount = sortedLanguages
      .slice(7)
      .reduce((sum, [, count]) => sum + count, 0);

    // Add "Others" if there are remaining languages
    if (othersCount > 0) {
      topLanguages.push(["Others", othersCount]);
    }

    return topLanguages;
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
        const commitCount = event.payload.commits?.length || 1;
        const branchName =
          event.payload.ref?.replace("refs/heads/", "") || "branch";
        return `Pushed ${commitCount} commit${commitCount !== 1 ? "s" : ""} to ${branchName}`;
      case "CreateEvent":
        const refType = event.payload.ref_type;
        const refName = event.payload.ref;
        return `Created ${refType}${refName ? ` ${refName}` : ""}`;
      case "PullRequestEvent":
        const action = event.payload.action;
        const prNumber = event.payload.number;
        if (action === "closed" && event.payload.pull_request?.merged) {
          return `Merged pull request #${prNumber}`;
        }
        return `${action} pull request #${prNumber}`;
      case "IssuesEvent":
        return `${event.payload.action} issue #${event.payload.issue?.number}`;
      case "ReleaseEvent":
        const version =
          event.payload.release?.tag_name ||
          event.payload.release?.name ||
          "new version";
        return `Released ${version}`;
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
        <h3 className="text-xl font-bold">
          GitHub Activity - {devInfo.handle}
        </h3>
        <div className="ml-auto text-sm">
          <span className="bg-base-200 rounded-full px-3 py-1">
            Member since{" "}
            {new Date(data.user.created_at).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="bg-primary rounded-lg p-4 text-center">
          <div className="text-primary-content text-2xl font-bold">
            {data.user.public_repos}
          </div>
          <div className="text-primary-content text-sm opacity-70">
            Repositories
          </div>
        </div>
        <div className="bg-accent rounded-lg p-4 text-center">
          <div className="text-accent-content text-2xl font-bold">
            {data.totalStars}
          </div>
          <div className="text-accent-content text-sm opacity-70">
            Total Stars
          </div>
        </div>
        <div className="bg-secondary rounded-lg p-4 text-center">
          <div className="text-secondary-content text-2xl font-bold">
            {data.user.followers}
          </div>
          <div className="text-secondary-content text-sm opacity-70">
            Followers
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Top Languages */}
        <div>
          <h4 className="mb-3 flex items-center gap-2 font-semibold">
            <FaCode className="h-4 w-4" />
            Top Languages
          </h4>
          <div className="space-y-3">
            {getTopLanguages().map(([language, count]) => (
              <div
                key={language}
                className="bg-base-200 flex items-center gap-3 rounded-lg p-3"
              >
                <div className="text-primary">
                  {language === "Others" ? (
                    <VscCode className="h-5 w-5" />
                  ) : (
                    getLanguageIcon(language)
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{language}</span>
                    <span className="text-sm opacity-70">{count} repos</span>
                  </div>
                  <div className="bg-base-300 mt-1 h-2 w-full rounded-full">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${(count / Math.max(...Object.values(data.languages))) * 100}%`,
                      }}
                    ></div>
                  </div>
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
          <div className="space-y-3">
            {data.events.map((event) => (
              <div key={event.id} className="bg-base-200 rounded-lg p-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-1 text-sm font-medium">
                      {getEventDescription(event)}
                    </div>
                    <div className="mb-2 text-xs opacity-70">
                      <span className="bg-primary text-primary-content rounded px-2 py-1 font-mono">
                        {event.repo.name}
                      </span>
                    </div>
                    <div className="text-xs opacity-50">
                      {formatDate(event.created_at)}
                    </div>
                  </div>
                  <div className="text-primary/60 ml-2">
                    {event.type === "PushEvent" && (
                      <FaCodeBranch className="h-3 w-3" />
                    )}
                    {event.type === "CreateEvent" && (
                      <FaCode className="h-3 w-3" />
                    )}
                    {event.type === "PullRequestEvent" && (
                      <FaCodeBranch className="h-3 w-3" />
                    )}
                  </div>
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
            .sort((a, b) => {
              // Primary: Sort by stars
              if (b.stargazers_count !== a.stargazers_count) {
                return b.stargazers_count - a.stargazers_count;
              }
              // Secondary: Sort by recent activity
              return (
                new Date(b.updated_at).getTime() -
                new Date(a.updated_at).getTime()
              );
            })
            .slice(0, 4)
            .map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-base-200 hover:bg-primary/5 hover:border-primary/20 group rounded-lg border border-transparent p-4 transition-all duration-200 hover:scale-[1.02]"
              >
                <div className="mb-2 flex items-start justify-between">
                  <div className="group-hover:text-primary font-medium transition-colors">
                    {repo.name}
                  </div>
                  {repo.stargazers_count > 0 && (
                    <div className="bg-secondary text-secondary-content flex items-center gap-1 rounded-full px-2 py-1 text-xs">
                      <FaStar className="h-3 w-3" />
                      {repo.stargazers_count}
                    </div>
                  )}
                </div>
                <div className="mb-3 line-clamp-2 text-sm opacity-70">
                  {repo.description || "No description available"}
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    {repo.language && (
                      <span className="bg-accent text-accent-content rounded px-2 py-1">
                        {repo.language}
                      </span>
                    )}
                    <span className="opacity-60">
                      Updated {formatDate(repo.updated_at)}
                    </span>
                  </div>
                  {repo.forks_count > 0 && (
                    <span className="flex items-center gap-1 opacity-60">
                      <FaCodeBranch className="h-3 w-3" />
                      {repo.forks_count}
                    </span>
                  )}
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
