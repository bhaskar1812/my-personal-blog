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
  id: "concurrent-rendering",
  date: "16 Feb 2026",
  dateTime: "2026-02-16",
  title: "React 18's Concurrent Rendering",
  slug: "concurrent-rendering",
  excerpt:
    "Allows React to prioritize and manage rendering tasks more intelligently.",
  content: `
    <h2>Key Benefits</h2>
    <p>React 18 introduces Concurrent Rendering, which allows React to pause, interrupt, or prioritize rendering work to keep user interactions smooth.</p>

    <h2>Improved Responsiveness</h2>
    <p>User input remains fluid in forms with complex validations or heavy rendering tasks.</p>

    <h2>Automatic Batching</h2>
    <p>React batches multiple state updates automatically, reducing unnecessary re-renders.</p>

    <h2>Transitions API</h2>
    <p>The startTransition API allows marking non-urgent updates so React can prioritize critical interactions.</p>

    <h2>Enhanced Suspense</h2>
    <p>Suspense improves async data handling by showing fallback UI during loading states.</p>

    <h2>Streaming Server-Side Rendering</h2>
    <p>HTML is streamed to the client in chunks for faster perceived page load times.</p>

    <h2>Conclusion</h2>
    <p>Concurrent Rendering helps build responsive and efficient web applications under heavy workloads.</p>
  `
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
