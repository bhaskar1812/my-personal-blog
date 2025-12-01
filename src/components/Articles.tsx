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
    <div className="space-y-10">
      {posts.map((post, idx) => (
        <div key={idx}>
          <p className="text-gray-400 text-sm">{post.date}</p>
          <h3 className="text-xl font-semibold mt-1">{post.title}</h3>
          <p className="text-gray-400 mt-2">{post.text}</p>
          <a className="text-amber-400 mt-2 inline-block cursor-pointer">
            Read article →
          </a>
        </div>
      ))}
    </div>
  );
}
