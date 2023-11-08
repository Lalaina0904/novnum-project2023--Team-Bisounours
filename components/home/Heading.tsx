import * as React from "react";
import Image from "next/image";

export const Heading = () => {
  return (
    <header className="bg-primary-dark mb-24 flex h-[90vh] flex-col items-center">
      <section className="text-primary-light container z-[1] mx-auto flex grow items-center px-2 md:py-[64px] lg:py-[96px]">
        <div className="w-full lg:w-2/3">
          <h1 className="mb-8 text-[2.4rem] font-semibold leading-[3.6rem] md:text-[3rem]">
            <span className="bg-gradient-to-r from-[#fab99b] via-[#c3aeff] to-[#7bb1e4]  bg-clip-text leading-[2rem] text-transparent">
              Explore a world{" "}
            </span>
            <span className="leading-[2rem] text-[#477cad]">
              {" "}
              of collaborative learning where your skills grow through sharing
            </span>
          </h1>
          <h2 className="font-alata mb-6 w-4/5 text-[1.6rem] text-gray-800 md:py-8">
            We are focused on a collective intelligence approach
          </h2>
          <p className="mb-16 opacity-60 lg:mb-32 ">
            We promote collaboration, sharing, and co-creation of educational
            resources, placing the human element at the center of our approach
            to develop the education sector in Madagascar. Our goal is to create
            a collaborative learning environment where students, teachers, and
            education experts come together to revolutionize education in
            Madagascar by harnessing the collective wisdom of our educational
            community
          </p>
          <button>
            <a href="#about">Learn More</a>
          </button>
        </div>
        <div className="relative hidden h-full w-2/5 justify-center lg:flex">
          <Image
            className="heroImg absolute top-[2rem]"
            src="/images/hero-img.png"
            alt={"hero-img"}
            layout="responsive"
            objectFit="contain"
            width={500}
            height={500}
          />
        </div>
      </section>
    </header>
  );
};

export default Heading;
