const Gear = () => {
  return (
    <div className="sm:px-8 mt-12 sm:mt-22">
      <div className="space-y-10 text-left mx-20">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          My Favorite Tools and Gadgets
        </h1>
        <div className="mt-8 prose dark:prose-invert" data-mdx-content="true">
          <div className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I use these software and tools in my day-to-day work to stay
              productive and deliver more professional results.
            </p>
          </div>
        </div>
        <div className="mt-16 sm:mt-20">
          <div className="space-y-20">
            <section
              aria-labelledby="_S_1_"
              className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
            >
              <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                <h2
                  id="_S_1_"
                  className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
                >
                  Development
                </h2>
                <div className="md:col-span-3">
                  <ul role="list" className="space-y-16">
                    <li className="group relative flex flex-col items-start">
                      <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                        Visual Studio Code
                      </h3>
                      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        Visual Studio Code (VSCode) is a versatile and
                        lightweight code editor that supports a wide range of
                        programming languages. With a robust extension ecosystem
                        and powerful features like IntelliSense and debugging
                        tools, VSCode enhances productivity and facilitates
                        seamless development workflows.
                      </p>
                    </li>
                    <li className="group relative flex flex-col items-start">
                      <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                        Postman
                      </h3>
                      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        Postman is a powerful API testing tool used to send
                        requests, inspect responses, and debug backend services.
                        It helps frontend developers easily test APIs, automate
                        workflows, and speed up integration
                      </p>
                    </li>
                    <li className="group relative flex flex-col items-start">
                      <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                        Figma
                      </h3>
                      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        Figma is a collaborative UI/UX design tool used to
                        create wireframes, prototypes, and visual designs. It
                        allows designers and developers to work together in
                        real-time with cloud-based editing.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section
              aria-labelledby="_S_2_"
              className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
            >
              <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                <h2
                  id="_S_2_"
                  className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
                >
                  Workstation
                </h2>
                <div className="md:col-span-3">
                  <ul role="list" className="space-y-16">
                    <li className="group relative flex flex-col items-start">
                      <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                        Logitech
                      </h3>
                      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        A reliable and comfortable keyboard designed for smooth
                        typing and long work sessions. Its wireless connectivity
                        and ergonomic layout make it ideal for coding,
                        productivity, and everyday use.
                      </p>
                    </li>
                    <li className="group relative flex flex-col items-start">
                      <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                        Acer 24" Slim
                      </h3>
                      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        A sleek, ultra-thin display offering crisp visuals and
                        vibrant color accuracy for daily work and coding. Its
                        minimal bezels and modern design provide an immersive
                        and clutter-free viewing experience.
                      </p>
                    </li>
                    <li className="group relative flex flex-col items-start">
                      <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                        TEKAVO
                      </h3>
                      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        The TEKAVO Desk sit offers versatility and ergonomic
                        design, allowing for easy transitions between sitting
                        and standing positions to enhance comfort and
                        productivity throughout the day
                      </p>
                    </li>
                    <li className="group relative flex flex-col items-start">
                      <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                        16” Dell inspiron AMD, 32GB RAM (2021)
                      </h3>
                      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        My 16” Dell inspiron with AMD chip and 32GB RAM (2021)
                        offers exceptional performance and efficiency, making it
                        an essential tool for software development and everyday
                        tasks.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gear;
