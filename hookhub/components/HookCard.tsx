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
    <div className="group relative flex flex-col rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
      {/* Category Badge */}
      <div className="mb-3">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
            categoryColors[hook.category] || "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300"
          }`}
        >
          {hook.category}
        </span>
      </div>

      {/* Hook Name */}
      <h3 className="mb-2 text-xl font-semibold text-zinc-950 dark:text-zinc-50">
        {hook.name}
      </h3>

      {/* Description */}
      <p className="mb-4 flex-grow text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {hook.description}
      </p>

      {/* GitHub Link */}
      <a
        href={hook.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 inline-flex items-center gap-2 rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
      >
        View on GitHub
        <svg
          className="h-4 w-4"
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

      {/* Metadata */}
      <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-500">
        {hook.stars && (
          <div className="flex items-center gap-1">
            <svg
              className="h-4 w-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>{formatStars(hook.stars)}</span>
          </div>
        )}
        {hook.language && <span>{hook.language}</span>}
        {hook.lastUpdated && <span>{formatDate(hook.lastUpdated)}</span>}
      </div>
    </div>
  );
}
