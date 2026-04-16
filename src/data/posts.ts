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
  "id": "concurrent-rendering",
  "date": "16 Feb 2026",
  "dateTime": "2026-02-16",
  "title": "React 18's Concurrent Rendering",
  "slug": "concurrent-rendering",
  "excerpt": "Allows React to prioritize and manage rendering tasks more intelligently.",
  "content": "## Key Benefits\n\nReact 18 introduces Concurrent Rendering, which allows React to pause, interrupt, or prioritize rendering work to keep user interactions smooth and responsive.\n\n## Improved Responsiveness\n\nReact can keep the UI responsive even during expensive rendering tasks. User input remains fluid in forms with complex validations or heavy state updates.\n\n## Automatic Batching\n\nMultiple state updates occurring within the same event loop are automatically batched together, reducing unnecessary re-renders and improving overall performance.\n\n## Transitions API\n\nThe `startTransition` API allows developers to mark non-urgent updates so React can prioritize critical interactions. This is useful for background updates such as rendering large lists while users continue interacting with the UI.\n\n## Enhanced Suspense\n\nReact 18 enhances Suspense for better asynchronous data handling by allowing developers to display fallback content while specific parts of the UI are still loading.\n\n## Streaming Server-Side Rendering\n\nStreaming SSR sends HTML to the client in chunks, enabling important parts of the page to render earlier while the server continues processing the remaining content.\n\n## Real-World Use Cases\n\n- **Dashboards**: Maintain responsive real-time dashboards despite frequent data updates.\n- **Interactive Forms**: Preserve smooth user input in forms with dynamic fields and validations.\n- **Gaming Applications**: Enable responsive gameplay even with frequent state changes.\n\n## How to Get Started\n\n1. Upgrade to React 18 to start using Concurrent features.\n2. Apply `startTransition` to defer non-critical updates.\n3. Use enhanced Suspense to manage loading states more effectively.\n4. Explore streaming SSR to improve perceived performance.\n\n## Conclusion\n\nConcurrent Rendering in React 18 enables developers to build more responsive and efficient web applications by intelligently prioritizing updates and maintaining smooth user interactions under heavy workloads."
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
