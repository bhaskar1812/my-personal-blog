import projectLogo from "../assets/project_logo.png";
const Projects = () => {
  return (
    <div className="sm:px-8 mt-12 sm:mt-22">
      <div className="space-y-10 text-left mx-20">
        <h1 className="text-left max-w-3xl text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Showcase of My Projects
        </h1>
        <div className="mt-8 prose dark:prose-invert" data-mdx-content="true">
          <div className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Over the years, I've worked on hundreds of small projects, but
              these are the ones I'm most proud of. Since some of them are
              open-source, you can examine the code and offer any suggestions
              you may have for improvement if you find something that interests
              you.
            </p>
          </div>
        </div>
        <div className="mt-16 sm:mt-20">
          <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            <li className="group relative flex flex-col items-start">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <img
                  alt="Bhaskar Bollampalli Official Website"
                  loading="lazy"
                  width="512"
                  height="512"
                  decoding="async"
                  data-nimg="1"
                  className="h-8 w-8"
                  src={projectLogo}
                  style={{ color: "transparent" }}
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                <a href="https://bhaskarb-portfolio.vercel.app/">
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                  <span className="relative z-10">
                    Bhaskar's Official Website
                  </span>
                </a>
              </h2>
              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                A mini microservices project created using NextJS, Strapi, and
                Remark42.
              </p>
              <p className="dark: relative z-10 mt-6 flex text-sm font-medium text-amber-700 transition dark:text-amber-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-6 w-6 flex-none"
                >
                  <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z"></path>
                  <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z"></path>
                </svg>
                <span className="ml-2">bhaskarb-portfolio.vercel.app/</span>
              </p>
            </li>
            <li className="group relative flex flex-col items-start">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <img
                  alt="Bhaskar Bollampalli's Official Website"
                  loading="lazy"
                  width="512"
                  height="512"
                  decoding="async"
                  data-nimg="1"
                  className="h-8 w-8"
                  src={projectLogo}
                  style={{ color: "transparent" }}
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                <a href="https://bhaskarb-portfolio.vercel.app">
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                  <span className="relative z-10">
                    Developer Onboarding Platform
                  </span>
                </a>
              </h2>
              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Built a fast, responsive onboarding platform using React,
                Recoil, and MUI to streamline developer ramp‑up.
              </p>
              {/* <p className="dark: relative z-10 mt-6 flex text-sm font-medium text-amber-700 transition dark:text-amber-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-6 w-6 flex-none"
                >
                  <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z"></path>
                  <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z"></path>
                </svg>
                <span className="ml-2">
                  https://bhaskarb-portfolio.vercel.app/
                </span>
              </p> */}
            </li>
            <li className="group relative flex flex-col items-start">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <img
                  alt="Bhaskar Bollampalli's Official Website"
                  loading="lazy"
                  width="512"
                  height="512"
                  decoding="async"
                  data-nimg="1"
                  className="h-8 w-8"
                  src={projectLogo}
                  style={{ color: "transparent" }}
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                <a href="https://bhaskarb-portfolio.vercel.app">
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                  <span className="relative z-10">Autopay - Cards</span>
                </a>
              </h2>
              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Created a sleek Autopay UI with React, Redux, and MUI, backed by
                solid API integration and strong test coverage.
              </p>
              {/* <p className="dark: relative z-10 mt-6 flex text-sm font-medium text-amber-700 transition dark:text-amber-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-6 w-6 flex-none"
                >
                  <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z"></path>
                  <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z"></path>
                </svg>
                <span className="ml-2">harrytang.xyz</span>
              </p> */}
            </li>
            <li className="group relative flex flex-col items-start">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <img
                  alt="Bhaskar Bollampalli's Official Website"
                  loading="lazy"
                  width="512"
                  height="512"
                  decoding="async"
                  data-nimg="1"
                  className="h-8 w-8"
                  src={projectLogo}
                  style={{ color: "transparent" }}
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                <a href="https://bhaskarb-portfolio.vercel.app">
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                  <span className="relative z-10">
                    Malware Analysis & Reverse Engineering
                  </span>
                </a>
              </h2>
              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Performed deep malware analysis and reverse engineering while
                developing secure Chrome extensions for internal use.Tackled
                obfuscation, injections, and modern cyber‑security threats.
              </p>
              {/* <p className="dark: relative z-10 mt-6 flex text-sm font-medium text-amber-700 transition dark:text-amber-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-6 w-6 flex-none"
                >
                  <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z"></path>
                  <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z"></path>
                </svg>
                <span className="ml-2">harrytang.xyz</span>
              </p> */}
            </li>
            <li className="group relative flex flex-col items-start">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <img
                  alt="Bhaskar Bollampalli's Official Website"
                  loading="lazy"
                  width="512"
                  height="512"
                  decoding="async"
                  data-nimg="1"
                  className="h-8 w-8"
                  src={projectLogo}
                  style={{ color: "transparent" }}
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                <a href="https://bhaskarb-portfolio.vercel.app">
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                  <span className="relative z-10">
                    Digital Content for Healthcare Professionals
                  </span>
                </a>
              </h2>
              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Developed responsive digital content for GSK’s medicines and
                medical devices, Built optimized front‑end pages aligned with
                Veeva and Salesforce workflows.
              </p>
              {/* <p className="dark: relative z-10 mt-6 flex text-sm font-medium text-amber-700 transition dark:text-amber-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-6 w-6 flex-none"
                >
                  <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z"></path>
                  <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z"></path>
                </svg>
                <span className="ml-2">harrytang.xyz</span>
              </p> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
