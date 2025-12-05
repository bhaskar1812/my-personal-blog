// import worksvg from "../assets/work.svg";
import virtusaLogo from "../assets/virtusa.svg";
import techMahindraLogo from "../assets/techMahindra.svg";
import cognizantLogo from "../assets/Cognizant.svg";
import tcsLogo from "../assets/tcs.svg";
import accentureLogo from "../assets/accenture.svg";

export function Work() {
  const work = [
    {
      role: "Sr. Software Engineer",
      company: "Virtusa",
      period: "2025 — Present",
      city: "Hyderabad",
      logo: virtusaLogo,
    },
    {
      role: "Sr. Associate",
      company: "Cognizant",
      period: "2023 — 2025",
      city: "Hyderabad",
      logo: cognizantLogo,
    },
    {
      role: "IT Analyst",
      company: "TCS",
      period: "2022 — 2023",
      city: "Hyderabad",
      logo: tcsLogo,
    },
    {
      role: "Technology Security Analyst",
      company: "Accenture",
      period: "2019 — 2022",
      city: "Hyderabad",
      logo: accentureLogo,
    },
    {
      role: "Associate Designer",
      company: "Tech Mahindra",
      period: "2016 — 2019",
      city: "Hyderabad",
      logo: techMahindraLogo,
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 self-start">
      <h3 className="flex gap-2 text-lg font-semibold mb-6 items-center text-zinc-900 dark:text-zinc-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="h-6 w-6 flex-none fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        >
          <path
            fill-rule="evenodd"
            d="M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 0 1 6 4.193V3.75Zm6.5 0v.325a41.622 41.622 0 0 0-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25ZM10 10a1 1 0 0 0-1 1v.01a1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H10Z"
            clip-rule="evenodd"
          ></path>
          <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 0 1-9.274 0C3.985 17.585 3 16.402 3 15.055Z"></path>
        </svg>
        Work
      </h3>
      <ul className="space-y-6 text-zinc-900 dark:text-zinc-100">
        {work.map((job, idx) => (
          <li key={idx} className="flex items-center justify-between gap-6">
            <img
              className="dark:bg-amber-100 rounded-full w-12 h-12 object-contain "
              src={job.logo}
            />
            <div className="text-left flex-auto">
              <p className="font-semibold">{job.role}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {job.company} - {job.city}
              </p>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {job.period}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
