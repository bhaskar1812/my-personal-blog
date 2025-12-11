import profilepic from "../assets/profile-pic.jpg";
import { SocialLinks } from "./SocialLinks";

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

      <SocialLinks className="mt-2 gap-6" />
    </div>
  );
}
