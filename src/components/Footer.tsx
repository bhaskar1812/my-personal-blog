import { NavLink } from "react-router-dom";

const Footer = () => {
  const footerNavItems = [
    { name: "Cookie Policy", href: "/CookiePolicy", path: "/CookiePolicy" },
    { name: "Disclaimer", path: "/Disclaimer" },
    {
      name: "Privacy Policy",
      href: "/privacy-policy",
      path: "/privacy-policy",
    },
    { name: "Terms of Use", href: "/terms-of-use", path: "/terms-of-use" },
    { name: "Credits", href: "/credits", path: "/credits" },
  ];

  return (
    <footer className="mt-32 flex-none">
      <div className="sm:px-8">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    {footerNavItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                          `hover:text-amber-600 dark:hover:text-amber-500 ${
                            isActive
                              ? "text-amber-500"
                              : "dark:text-gray-300 text-zinc-800"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                  <p className="text-sm text-zinc-800 dark:text-gray-300">
                    © 2025 Bhaskar Bollampalli. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
