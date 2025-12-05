import profilepic from "../assets/profile-pic.jpg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/x_twitter.svg";
import facebook from "../assets/facebook.svg";

export function Hero() {
  return (
    <div className="max-w-5xl mx-auto px-4 mt-4 text-left">
      <div className="w-16 mb-4 rounded-lg">
        <img className="rounded-full" src={profilepic} />
      </div>
      <h2 className="text-4xl font-bold mb-4 tracking-tight text-zinc-800 dark:text-zinc-100">
        Frontend Engineer & React JS Specialist
      </h2>
      <p className="tracking-tight text-zinc-800 max-w-3xl leading-relaxed dark:text-zinc-100">
        I am Bhaskar Bollampalli, Senior Frontend Engineer passionate about
        building scalable, fast, and user-friendly web applications. I focus on
        performance, design systems, and modern JavaScript frameworks.
      </p>

      <div className="flex gap-6 mt-6 text-gray-400 text-xl">
        <a target="blank" href="https://github.com/bhaskar1812">
          <img src={github} alt="GitHub" className="h-6 w-6 hover:text-white" />
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/in/bhaskar-bollampalli-b73b44106/"
        >
          <img
            src={linkedin}
            alt="LinkedIn"
            className="h-6 w-6 hover:text-white"
          />
        </a>
        <a target="blank" href="https://x.com/bhaskargoud22">
          <img
            src={twitter}
            alt="Twitter"
            className="h-6 w-6 hover:text-white"
          />
        </a>
        <a target="blank" href="https://m.facebook.com/b.bhaskargoud/">
          <img
            src={facebook}
            alt="Facebook"
            className="h-6 w-6 hover:text-white"
          />
        </a>
      </div>
    </div>
  );
}
