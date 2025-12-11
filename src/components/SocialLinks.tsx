type LinkItem = {
  href: string;
  alt: string;
  src: string;
  ariaLabel?: string;
  label: string;
};

interface SocialLinksProps {
  links?: LinkItem[];
  className?: string;
  imgClassName?: string;
  labelVisible?: boolean;
}

import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/x_twitter.svg";
import facebook from "../assets/facebook.svg";

export function SocialLinks({
  links,
  labelVisible = false,
  className = "",
  imgClassName = "h-6 w-6 hover:text-white",
}: SocialLinksProps) {
  const defaultLinks: LinkItem[] = [
    {
      href: "https://github.com/bhaskar1812",
      alt: "GitHub",
      src: github,
      ariaLabel: "GitHub",
      label: "Check out my code on GitHub",
    },
    {
      href: "https://www.linkedin.com/in/bhaskar-bollampalli-b73b44106/",
      alt: "LinkedIn",
      src: linkedin,
      ariaLabel: "LinkedIn",
      label: "Connect with me on LinkedIn",
    },
    {
      href: "https://x.com/bhaskargoud22",
      alt: "Twitter",
      src: twitter,
      ariaLabel: "Twitter",
      label: "Follow me on Twitter",
    },
    {
      href: "https://m.facebook.com/b.bhaskargoud/",
      alt: "Facebook",
      src: facebook,
      ariaLabel: "Facebook",
      label: "Follow me on Facebook",
    },
  ];

  const items = links ?? defaultLinks;

  return (
    // <div className={`flex items-center space-x-6 ${className}`}>
    <ul className={`flex ${className}`}>
      {items.map((item) => (
        <li key={item.href} className="flex mt-4 items-center text-left">
          <a
            className="group flex text-sm font-medium text-zinc-800 transition hover:text-amber-700 dark:text-zinc-200 dark:hover:text-amber-500"
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.ariaLabel ?? item.alt}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-amber-500"
            />
            {labelVisible && <span className="ml-4">{item.label}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
{
  /* {items.map((item) => (
        <a
          className="group flex text-sm font-medium text-zinc-800 transition hover:text-amber-700 dark:text-zinc-200 dark:hover:text-amber-500"
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.ariaLabel ?? item.alt}
        >
          <img src={item.src} alt={item.alt} className={imgClassName} />
          {labelVisible && <span className="ml-4">{item.label}</span>}
        </a>
      ))} */
}
// </div>
