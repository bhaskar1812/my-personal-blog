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
  content:
    "&lt;h2&gt;Key Benefits&lt;/h2&gt;" +
    "&lt;p&gt;React 18 introduces Concurrent Rendering, which allows React to pause, interrupt, or prioritize rendering work to keep user interactions smooth and responsive.&lt;/p&gt;" +

    "&lt;h2&gt;Improved Responsiveness&lt;/h2&gt;" +
    "&lt;p&gt;React can keep the UI responsive even during expensive rendering tasks. For example, user input remains fluid in forms with complex validations or heavy state updates.&lt;/p&gt;" +

    "&lt;h2&gt;Automatic Batching&lt;/h2&gt;" +
    "&lt;p&gt;Multiple state updates occurring within the same event loop are automatically batched together, reducing unnecessary re-renders and improving overall application performance.&lt;/p&gt;" +

    "&lt;h2&gt;Transitions API&lt;/h2&gt;" +
    "&lt;p&gt;Using the startTransition API, developers can mark non-urgent updates so React can prioritize more critical interactions. This is useful for background updates such as rendering large lists while users continue interacting with the UI.&lt;/p&gt;" +

    "&lt;h2&gt;Enhanced Suspense&lt;/h2&gt;" +
    "&lt;p&gt;React 18 enhances Suspense for better asynchronous data handling by allowing developers to display fallback content, such as loading indicators, while specific parts of the UI are still loading.&lt;/p&gt;" +

    "&lt;h2&gt;Streaming Server-Side Rendering&lt;/h2&gt;" +
    "&lt;p&gt;With streaming SSR, HTML is sent to the client in chunks. This enables important parts of the page to render earlier while the server continues processing the remaining content, improving perceived load times.&lt;/p&gt;" +

    "&lt;h2&gt;Conclusion&lt;/h2&gt;" +
    "&lt;p&gt;Concurrent Rendering in React 18 helps build more responsive and efficient web applications. By prioritizing user interactions and handling heavy rendering workloads intelligently, it significantly enhances the overall user experience.&lt;/p&gt;"
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
