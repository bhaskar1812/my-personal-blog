import { useEffect, useState } from "react";
import profilepic from "../assets/profile-pic.jpg";
// import darkmode from "../assets/darkmode.svg";
// import lightmode from "../assets/lightmode.svg";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";

export function Header() {
  const location = useLocation();

  const [isDark, setIsDark] = useState(true);
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Articles", path: "/articles" },
    { name: "Projects", path: "/projects" },
    { name: "Expertise", path: "/expertise" },
    { name: "Gear", path: "/gear" },
  ];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    console.log("App mounted");
  }, [isDark]);
  return (
    <header className="max-w-5xl mx-auto py-5 px-4">
      <nav className="flex items-center justify-center mb-5">
        <h1 className="text-2xl dark:font-bold"></h1>
        <div className="flex-1">
          <div className="w-10 rounded-lg">
            {location.pathname != "/" ? (
              <img className="rounded-full" src={profilepic} />
            ) : (
              ""
            )}
          </div>
        </div>
        <Nav navItems={navItems} />
        {/* </div> */}
        <div className="flex flex-1 justify-end ml-auto">
          <button
            onClick={() => setIsDark(!isDark)}
            className="group rounded-full bg-white/90 px-3 py-2 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition hover:cursor-pointer dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
          >
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block not-[@media_(prefers-color-scheme:dark)]:fill-amber-400/10 not-[@media_(prefers-color-scheme:dark)]:stroke-amber-500 [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-amber-50 [@media(prefers-color-scheme:dark)]:stroke-amber-700 [@media(prefers-color-scheme:dark)]:group-hover:fill-amber-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-amber-600"
              >
                <path d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z"></path>
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
