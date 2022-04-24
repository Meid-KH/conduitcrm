import Cta from "components/Cta";
import Intro from "components/overview/Intro";
import React from "react";
import Image from "next/image";

const Founders = [
  {
    src: "/assets/img/travis.jpeg",
    name: "Travis Helmig",
    role: "Co-founder & Head of Operations",
    width: "350",
    height: "370",
  },
  {
    src: "/assets/img/ab.jpeg",
    name: "Antonio Bologna",
    role: "Co-founder & Technology Advisor",
    width: "300",
    height: "380",
    bio: "",
  },
];
const OurCulture = [
  {
    title: "Impact",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem inventore temporibus placeat vero, deserunt aliquam!",
  },
  {
    title: "Hyper-focused",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem inventore temporibus placeat vero, deserunt aliquam!",
  },
  {
    title: "Collectivism",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem inventore temporibus placeat vero, deserunt aliquam!",
  },
  {
    title: "Assertiveness",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem inventore temporibus placeat vero, deserunt aliquam!",
  },
  {
    title: "Inclusivity",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem inventore temporibus placeat vero, deserunt aliquam!",
  },
  {
    title: "Transparency",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem inventore temporibus placeat vero, deserunt aliquam!",
  },
];

const about = () => {
  return (
    <>
      <Intro />

      <OurStory />

      <TheFounders />

      <Cta />
    </>
  );
};

const OurStory = () => (
  <section
    className="relative
        before:absolute before:-skew-y-2 before:-translate-y-16 before:top-0 before:left-0 before:h-40 before:w-full before:bg-white 
        bg-white text-primary-600 
        pt-10 pb-24 lg:pt-16 lg:pb-32"
  >
    <div className="relative z-10">
      <div className="container px-6 mx-auto">
        <div className="text-center">
          <small className="block text-lg uppercase tracking-widest font-light mb-2">
            Our story
          </small>
          <h1 className="font-bold text-3xl uppercase tracking-wider mx-auto lg:text-5xl lg:leading-tight lg:max-w-xl">
            Where it all began
          </h1>
        </div>
        <div className="max-w-4xl mx-auto mt-6 lg:mt-8">
          <div
            className="text-base text-justify leading-relaxed mx-auto mt-4 space-y-4
                first-letter:text-4xl first-letter:font-semibold first-letter:mr-0.5"
          >
            <p>
              Accusantium, Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Dolorum sunt quibusdam nihil nisi ea tempore accusamus
              corrupti quaerat dolores dolorem quos, sequi eos, debitis maiores!
              Ipsa, non dolorem asperiores voluptate quas aliquam laboriosam
              expedita placeat enim, fugit cupiditate consectetur eveniet quasi
              voluptates aut. Maxime pariatur est placeat soluta consequuntur
              eligendi aspernatur numquam aut assumenda cum magnam id adipisci
              facere omnis repellat, ex officia! Architecto ut corporis est
              nulla natus, fuga dicta laboriosam, mollitia perferendis sit
              necessitatibus sed voluptas enim!
            </p>
            <p>
              dignissimos, quae architecto nesciunt in magni incidunt harum
              placeat tenetur sed delectus rerum laborum, similique reiciendis
              fugiat ullam blanditiis. Animi debitis quisquam suscipit, eveniet
              modi vero in sint dicta illo necessitatibus eos qui. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Veritatis
              exercitationem ipsam dicta laboriosam, illum saepe itaque facilis
              laudantium perspiciatis, aliquid quaerat quia! Laborum.
            </p>
            <p>
              Voluptates impedit sit, sunt obcaecati ducimus minima pariatur
              nesciunt modi doloribus ex labore a quia aspernatur similique
              explicabo ipsam. Ab rerum doloremque nam atque quis culpa! Odit
              dolorem at doloremque fugiat alias dolor perferendis fugit
              consequuntur aliquid reprehenderit iure amet cumque asperiores,
              atque quam porro, iusto enim rem neque! Quam sequi blanditiis
              aspernatur officia, aperiam sapiente nihil! Quam minima fugiat
              ducimus saepe vel hic iusto obcaecati rem, enim, provident illo
              veritatis libero. Necessitatibus aspernatur repellendus aut
              laudantium harum nemo temporibus voluptatibus dignissimos, amet
              in, saepe sequi!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TheFounders = () => (
  <section className="bg-gradient-to-b from-primary-700 to-primary-700 text-faded pt-24 lg:pt-30">
    <div className="container px-6 mx-auto">
      <div className="text-primary-500 text-center">
        <small className="block text-lg text-primary-400 uppercase tracking-widest font-light mb-2">
          Who are we
        </small>
        <h1 className="font-bold text-3xl uppercase tracking-wider mx-auto lg:text-5xl lg:leading-tight lg:max-w-xl">
          Meet the founders
        </h1>
      </div>
      <div className="max-w-5xl mx-auto mt-16 lg:mt-20 space-y-16">
        {/* Fouters Row */}
        {Founders.map((founder, index) => {
          const isEven: Boolean = index % 2 ? true : false;

          return (
            <div
              key={index}
              className={`flex flex-wrap md:flex-nowrap 
                  ${isEven && "md:flex-row-reverse"}
                  items-center justify-between__ gap-8 lg:gap-16`}
            >
              <Image
                src={founder.src}
                alt={founder.name}
                width={founder.width}
                height={founder.height}
              />
              <div className="w-full">
                <h2 className="text-2xl tracking-wide uppercase text-primary-500 font-bold mb-1">
                  {founder?.name}
                </h2>
                <div className="text-md text-primary-400 font-medium__">
                  {founder?.role}
                </div>
                <p className="text-base text-justify leading-loose mt-4">
                  Everything starts with a board, or a visual super table. Start
                  with one of 200+ templates or drag and drop 30+ column types
                  to customize the workflow of your dreams. Groups, items,
                  sub-items and updates are synced in real time to keep
                  everything within the context of your actual project,
                  workflow, process, or anything else. Status buttons reflect
                  your team&#39;s actual work, so all your updates are in one
                  place. Notify team members, add files, and link boards
                  together so it&#39;s easy to keep track of what&#39;s going
                  on. Save time, streamline processes and projects, and keep
                  track of all the moving pieces.
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="max-w-5xl mx-auto mt-28 lg:mt-44">
        <div className="text-primary-500 text-center">
          <small className="block text-lg text-primary-400 uppercase tracking-widest font-light mb-2">
            our culture
          </small>
          <h1 className="font-bold text-3xl uppercase tracking-wider mx-auto lg:text-5xl lg:leading-tight lg:max-w-xl">
            It&#39;s all about the people
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 my-10 lg:gap-x-16 lg:my-16">
          {OurCulture.map((culture, index) => (
            <div key={index} className="space-y-2">
              <h2 className="text-2xl tracking-wider uppercase__ text-primary-400 font-semibold mb-1">
                {culture?.title}
              </h2>

              <p className="text-base leading-loose mt-4">
                Voluptatum, laborum nihil! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Labore ullam amet architecto
                dolorum rem accusantium earum voluptatum, consequatur cupiditate
                quidem voluptatem tempore, nobis, maiores dolores a fugit minima
                autem. Tempore eligendi et quidem. Architecto quis, nihil libero
                possimus aliquam nulla laudantium delectus. Mollitia in aliquid
                quaerat vitae aliquam reprehenderit alias, dolorem ea non?
              </p>
            </div>
          ))}
        </div>

        <div className="text-primary-500 text-center pt-6">
          <h1 className="font-semibold text-3xl tracking-wide mx-auto lg:text-4xl lg:leading-tight lg:max-w-xl">
            Locations
          </h1>
        </div>
        <div className="flex justify-center gap-8 mt-6 lg:gap-16 lg:mt-10">
          {["Austin, Texas"].map((location, index) => (
            <div key={index} className="grid place-items-center space-y-3">
              <div className="w-24 h-24 rounded-lg bg-gray-200"></div>
              <h3 className="text-lg text-faded font-semibold">{location}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default about;
