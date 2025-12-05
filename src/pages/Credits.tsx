const Credits = () => {
  return (
    <div className="sm:px-8 mt-12 sm:mt-22">
      <div className="space-y-10 text-left mx-20">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Tools and Resources
        </h1>
        <div className="mt-8 prose dark:prose-invert" data-mdx-content="true">
          <div className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              This website was created using the following tools and resources:
            </p>
            <ul>
              <li>
                <a className="text-amber-500" href="http://algolia.com">
                  Algolia
                </a>
                : A lightning-fast, full-text search engine for instant results.
              </li>
              <li>
                <a className="text-amber-500" href="https://www.freepik.com">
                  Freepik
                </a>
                : A valuable source of free and high-quality images, graphics
                and vectors.
              </li>
              <li>
                <a className="text-amber-500" href="https://heroicons.com">
                  Heroicons
                </a>
                : Beautiful hand-crafted SVG icons
              </li>
              <li>
                <a className="text-amber-500" href="https://jestjs.io">
                  Jest
                </a>
                : A delightful JavaScript testing framework.
              </li>
              <li>
                <a className="text-amber-500" href="https://nextjs.org">
                  Next.js
                </a>
                : The React Framework for the Web.
              </li>
              <li>
                <a className="text-amber-500" href="https://playwright.dev">
                  Playwright
                </a>
                : An end-to-end testing framework.
              </li>
              <li>
                <a
                  className="text-amber-500"
                  href="https://github.com/cookpete/react-player"
                >
                  ReactPlayer
                </a>
                : A React component for playing a variety of URLs.
              </li>
              <li>
                <a
                  className="text-amber-500"
                  href="https://github.com/remarkjs/react-markdown"
                >
                  react-markdown
                </a>
                : React component to render markdown.
              </li>
              <li>
                <a className="text-amber-500" href="https://refactoring.guru">
                  Refactoring.Guru
                </a>
                : Offers comprehensive tutorials and resources on code
                refactoring and Design Patterns.
              </li>
              <li>
                <a className="text-amber-500" href="https://remark42.com">
                  Remark42
                </a>
                : A privacy-focused lightweight commenting engine.
              </li>
              <li>
                <a
                  className="text-amber-500"
                  href="https://tailwindcss.com/plus/templates/spotlight"
                >
                  Spotlight
                </a>
                : A beautiful personal website template.
              </li>
              <li>
                <a className="text-amber-500" href="https://strapi.io">
                  Strapi
                </a>
                : The leading open-source headless CMS.
              </li>
              <li>
                <a className="text-amber-500" href="https://tailwindcss.com">
                  Tailwind CSS
                </a>
                : A utility-first CSS framework packed with classes.
              </li>
              <li>
                <a
                  className="text-amber-500"
                  href="https://www.typescriptlang.org"
                >
                  TypeScript
                </a>
                : JavaScript with syntax for types.
              </li>
              <li>
                <a className="text-amber-500" href="https://uptime.kuma.pet">
                  Uptime Kuma
                </a>
                : A fancy self-hosted monitoring tool.
              </li>
              <li>
                <a className="text-amber-500" href="https://umami.is/">
                  Umami
                </a>
                : A modern analytics platform.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 sm:mt-20"></div>
      </div>
    </div>
  );
};

export default Credits;
