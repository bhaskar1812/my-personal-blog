import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface NavItem {
  name: string;
  path: string;
}

export default function Nav({ navItems }: { navItems: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        {/* <div className="text-xl font-semibold"></div> */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl font-semibold group flex items-center rounded-full bg-white/90 px-4 py-2  text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
          onClick={() => setOpen(!open)}
        >
          Menu
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="ml-2 h-auto w-4 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
          >
            <path
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      {/* Menu */}
      <ul
        className={`${
          open ? "flex" : "hidden"
        } flex-col md:flex md:flex-row gap-4 md:gap-2 
        absolute md:static left-0 w-full md:w-auto bg-white dark:bg-zinc-900 
        border-b md:border-none border-zinc-200 dark:border-zinc-800 flex md:rounded-full px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-sm dark:text-zinc-200 dark:ring-white/10`}
      >
        {navItems.map((item) => (
          <li key={item.name} onClick={() => setOpen(!open)}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `relative block px-3 py-2 transition hover:text-amber-600 dark:hover:text-amber-500 ${
                  isActive
                    ? "text-amber-500"
                    : "dark:text-gray-300 text-zinc-800"
                }`
              }
            >
              {item.name}

              {location.pathname === item.path && (
                <span className="absolute inset-x-1 -bottom-px h-px bg-linear-to-r from-amber-500/0 via-amber-500/40 to-amber-500/0 dark:from-amber-400/0 dark:via-amber-400/40 dark:to-amber-400/0"></span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
