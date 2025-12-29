import HookGrid from "@/components/HookGrid";
import { getAllHooks } from "@/lib/hooks";

export default function Home() {
  const hooks = getAllHooks();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}
      <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                HookHub
              </h1>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Discover cool open source cloud hooks
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <HookGrid hooks={hooks} />
      </main>
    </div>
  );
}
