import { Hero } from "../components/Hero";
import { ImageCards } from "../components/ImageCards";
import { Articles } from "../components/Articles";
import { Work } from "../components/Work";

const Home = () => {
  return (
    <>
      <Hero />
      <ImageCards />
      <section className="max-w-5xl mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <Articles
            itemClassName="hover:bg-zinc-100 dark:hover:bg-zinc-800 p-4 rounded-lg transition cursor-pointer"
            noBorder={false}
          />
        </div>
        <Work />
      </section>
    </>
  );
};

export default Home;
