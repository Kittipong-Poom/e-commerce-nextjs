import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-48 md:py-0 md:h-[820px] relative overflow-hidden bg-primary/5">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* text */}
          <div className="w-full xl:max-w-[580px] md:h-[820px] flex flex-col justify-center items-start">
            <h1 className="text-center xl:text-left mb-6">
            Collecting <span className="text-red-500">figures</span> is a level <span className="text-red-800">of happiness.</span>
            </h1>
            <p className="mb-10 text-lg max-w-[508px] mx-auto text-center xl:text-left xl:mx-0">
              I believe that everyone has a favorite character in their hearts.
              Whether it's from cartoons, movies, animations, or games,
              collectibles like 'models' are sure to be sought after by fans
              because the characters on the screen have become something that
              can actually be captured. For anyone who is looking for a model
              Figures worth owning must not be missed because we carry a train
              of models. Both foreign and Japanese figures and the West have
              come to introduce a lot Ready to point out the shopping location.
              Let's go!
            </p>
            {/* btn group */}
            <div className="flex items-center gap-4 mx-auto xl:mx-0">
              <Link href="/our-figures" className="mx-auto md:mx-0">
                <button className="btn btn-primary">Shop now</button>
              </Link>
              <Link href="/our-figures" className="mx-auto md:mx-0">
                <button className="btn btn-accent">Shop Figures</button>
              </Link>
            </div>
          </div>
          {/* img */}
          <div className="hidden xl:flex">
            <Image
              src="/hero/hero.jpg"
              width={765}
              height={480}
              alt=""
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
