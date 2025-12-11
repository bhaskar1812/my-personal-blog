export type Post = {
  id: string;
  date: string; // formatted date for display
  dateTime: string; // ISO date for machine-readable attribute
  title: string;
  slug: string; // optional slug for URL paths
  excerpt: string;
  content: string;
  featuredImagePath?: string | null; // storage path in Supabase
  featuredImageUrl?: string | null; // resolved public URL (derived at fetch time)
};

export const posts: Post[] = [
  {
    id: "how-i-optimized-react-apps",
    date: "27 November 2025",
    dateTime: "2025-11-27",
    title: "How I Optimized React Apps for Performance",
    slug: "how-i-optimized-react-apps",
    excerpt:
      "A practical guide to profiling, code-splitting, caching, and UI performance tuning.",
    content:
      "In this article I walk through concrete steps to profile React apps, use code-splitting, cache resources effectively, and tune UI rendering.\n\nI cover techniques like using the React Profiler, memoization, splitting routes with lazy/Suspense, optimizing large lists with virtualization, and important browser-level caching strategies.",
  },
  {
    id: "my-trip-to-ooty",
    date: "10 August 2025",
    dateTime: "2025-08-10",
    title: "My Trip to Ooty – A Peaceful Tech Detox",
    slug: "my-trip-to-ooty",
    excerpt:
      "A refreshing break and what it taught me about mental clarity and productivity.",
    content:
      "A personal recount of traveling to Ooty, disconnecting from work, and how stepping away helped me return with clearer priorities and better focus. Includes travel notes and small productivity takeaways.",
  },
  {
    id: "understanding-micro-frontends",
    date: "5 July 2025",
    dateTime: "2025-07-05",
    title: "Understanding Micro-frontends",
    slug: "understanding-micro-frontends",
    excerpt:
      "Explaining how large companies scale UI development across teams.",
    content:
      "An overview of micro-frontend patterns, integration strategies, pros and cons, and practical tips for getting started without over-engineering. Topics include composition, shared libraries, routing, and deployment strategies.",
  },
  {
    id: "testing-from-local",
    date: "5 July 2025",
    dateTime: "2025-07-05",
    title: "Testing from local",
    slug: "testing-from-local",
    excerpt:
      "Explaining how large companies scale UI development across teams.",
    content:
      "An overview of micro-frontend patterns, integration strategies, pros and cons, and practical tips for getting started without over-engineering. Topics include composition, shared libraries, routing, and deployment strategies.",
  },
];
