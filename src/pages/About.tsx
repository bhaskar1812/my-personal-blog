import prfilepic from "../assets/profile-pic.jpg";
import { SocialLinks } from "../components/SocialLinks";

const About = () => {
  return (
    <div className="grid max-w-5xl mx-auto px-4 mt-16 grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      <div className="mt-6 text-left space-y-7 text-base text-zinc-600 dark:text-zinc-400">
        <h1 className="text-4xl font-bold mb-6 tracking-tight text-zinc-800 dark:text-zinc-100">
          Frontend Engineer & React JS Specialist
        </h1>
        <p className="mb-6">
          I am a Frontend Engineer & React JS Specialist based in Hyderabad,
          India. I am part of the IT industry since 2016, starting my journey as
          a UI developer and gradually expanding my expertise into the ReactJS
          world.
        </p>
        <h2>
          <strong>Expertise</strong>
        </h2>
        <p className="mb-6">
          Throughout my career, I've had the privilege of working on diverse
          projects, from dynamic single-page applications to complex enterprise
          solutions. My expertise spans a wide range of frontend technologies,
          including React, Redux, JavaScript, TypeScript, and CSS-in-JS
          libraries. I'm also well-versed in performance tuning, accessibility
          best practices, and responsive design.
        </p>
        {/* <p className="mb-6">
          Collaboration is key in my approach to development. I enjoy working
          closely with cross-functional teams, including designers, backend
          developers, and product managers, to ensure that we deliver cohesive
          and impactful solutions. I'm a strong advocate for code quality,
          maintainability, and continuous learning.
        </p>
        <p className="mb-6">
          When I'm not coding, you can find me exploring the latest trends in
          web development, contributing to open-source projects, or sharing my
          knowledge through tech blogs and community events. I'm always eager to
          connect with fellow developers and enthusiasts who share my passion
          for frontend innovation.
        </p> */}
        <h2>
          <strong>Hobbies</strong>
        </h2>
        <p className="mb-6">
          Outside of work, I enjoy playing badminton and reading books, which
          helps me to maintain a balanced and active lifestyle. Traveling is
          also one of my favorite activities.
        </p>
      </div>
      <div className="lg:pl-20 mt-6">
        <div className="max-w-xs px-2.5 lg:max-w-none">
          <img
            src={prfilepic}
            alt="Bhaskar Bollampalli"
            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
          />
        </div>
        <SocialLinks className="flex-col mt-14" labelVisible={true} />
      </div>
    </div>
  );
};

export default About;
