export function Work() {
  const work = [
    {
      role: "Frontend Architect",
      company: "Cognizant",
      period: "2023 — Present",
    },
    {
      role: "Senior Frontend Developer",
      company: "Cognizant",
      period: "2020 — 2023",
    },
    {
      role: "UI Developer",
      company: "Various Companies",
      period: "2016 — 2020",
    },
  ];

  return (
    <div className="bg-neutral-800 p-6 rounded-xl h-fit shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Work</h3>
      <ul className="space-y-4 text-gray-300">
        {work.map((job, idx) => (
          <li key={idx}>
            <p className="font-semibold">{job.role}</p>
            <p className="text-sm">
              {job.company} ({job.period})
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
