export function Articles() {
  const posts = [
    {
      date: "27 November 2025",
      title: "How I Optimized React Apps for Performance",
      text: "A practical guide to profiling, code-splitting, caching, and UI performance tuning.",
    },
    {
      date: "10 August 2025",
      title: "My Trip to Ooty – A Peaceful Tech Detox",
      text: "A refreshing break and what it taught me about mental clarity and productivity.",
    },
    {
      date: "5 July 2025",
      title: "Understanding Micro-frontends",
      text: "Explaining how large companies scale UI development across teams.",
    },
  ];

  return (
    <div className="space-y-10 text-left">
      {posts.map((post, idx) => (
        <div
          key={idx}
          className="hover:bg-zinc-100 dark:hover:bg-zinc-800 p-4 rounded-lg transition cursor-pointer"
        >
          <time className="text-zinc-500 relative z-10 order-first mb-3 flex items-center text-sm dark:text-zinc-500 pl-3.5">
            {post.date}
            <span
              className="absolute inset-y-0 left-0 flex items-center"
              aria-hidden="true"
            >
              <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
            </span>
          </time>
          <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {post.text}
          </p>
          <a className="text-amber-400 mt-2 inline-block cursor-pointer">
            Read article →
          </a>
        </div>
      ))}
    </div>
  );
}
