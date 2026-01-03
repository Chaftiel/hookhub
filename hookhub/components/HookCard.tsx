import { Hook } from "@/types/hook";

interface HookCardProps {
  hook: Hook;
}

const categoryColors: Record<string, string> = {
  "CI/CD": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  Deployment: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  Database: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  Security: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  Notifications: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  Infrastructure: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  Testing: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
  Monitoring: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
};

export default function HookCard({ hook }: HookCardProps) {
  const formatDate = (dateString?: string) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Updated today";
    if (diffDays === 1) return "Updated 1d ago";
    if (diffDays < 30) return `Updated ${diffDays}d ago`;
    if (diffDays < 365) return `Updated ${Math.floor(diffDays/30)}mo ago`;
    return `Updated ${Math.floor(diffDays / 365)}y ago`;
  };

  const formatStars = (stars?: number) => {
    if (!stars) return null;
    if (stars >= 1000) return `${(stars / 1000).toFixed(1)}k`;
    return stars.toString();
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-zinc-200/60 bg-white transition-all hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50 dark:border-zinc-800/60 dark:bg-zinc-900/50 dark:hover:border-zinc-700 dark:hover:shadow-zinc-900/50">
      {/* Content Container */}
      <div className="flex flex-col p-6">
        {/* Header: Category Badge */}
        <span
          className={`mb-4 w-fit rounded-full px-3 py-1 text-xs font-medium transition-transform group-hover:scale-105 ${
            categoryColors[hook.category] || "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300"
          }`}
        >
          {hook.category}
        </span>

        {/* Hook Name */}
        <h3 className="mb-3 text-2xl font-bold tracking-tight text-zinc-900 transition-colors group-hover:text-zinc-700 dark:text-zinc-50 dark:group-hover:text-zinc-200">
          {hook.name}
        </h3>

        {/* Description */}
        <p className="mb-6 flex-grow text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {hook.description}
        </p>

        {/* Metadata */}
        <div className="mb-5 flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-500">
          {hook.stars && (
            <div className="flex items-center gap-1.5">
              <svg
                className="h-3.5 w-3.5 fill-yellow-500 dark:fill-yellow-400"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="font-medium">{formatStars(hook.stars)}</span>
            </div>
          )}
          {hook.language && (
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full bg-zinc-400 dark:bg-zinc-600" />
              <span>{hook.language}</span>
            </div>
          )}
          {hook.lastUpdated && <span>{formatDate(hook.lastUpdated)}</span>}
        </div>

        {/* GitHub Link */}
        <a
          href={hook.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-zinc-800 active:scale-[0.98] dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-50"
        >
          View on GitHub
          <svg
            className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
