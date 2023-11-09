"use client";
import * as React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

export const Heading = () => {
  return (
    <>
      <AnimatePresence>
        <header className="flex h-[85vh] flex-col items-center">
          <motion.div
            className="container z-[1] mx-auto flex grow items-center px-2 md:py-[64px] lg:py-[96px]"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-full lg:w-2/3">
              <h1 className=" mb-8 text-[2.4rem] font-semibold leading-[3.6rem] md:text-[3rem]">
                <span className="title bg-gradient-to-r from-[#fab99b] via-[#b29bf4] to-[#7bb1e4]  bg-clip-text leading-[2rem] text-transparent">
                  Explore a world{" "}
                </span>
                <span className="title leading-[2rem] text-[#477cad]">
                  of collaborative learning where your skills grow through
                  sharing
                </span>
              </h1>

              <h2 className="mb-6 w-4/5 text-[1.8rem] font-semibold text-gray-600 md:py-8 ">
                We are focused on a collective intelligence approach
              </h2>
              <p className="mb-16 text-xl font-semibold leading-8 text-gray-900 opacity-60 lg:mb-32 ">
                We promote collaboration, sharing, and co-creation of
                educational resources, placing the human element at the center
                of our approach to develop the education sector in Madagascar.
                Our goal is to create a collaborative learning environment where
                students, teachers, and education experts come together to
                revolutionize education in Madagascar by harnessing the
                collective wisdom of our educational community
              </p>

              <div className="flex gap-4">
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="pb-2s mb-6 inline-block w-2/5 border-[0.2rem] border-[#477cad] bg-transparent px-6 py-2.5 font-semibold uppercase leading-normal text-[#2e587e] transition duration-150 ease-in-out"
                >
                  <a href="#">LEARN MORE</a>
                </button>

                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="pb-2s mb-6 inline-block px-6 py-2.5 font-semibold uppercase leading-normal text-[#2e587e] transition duration-150 ease-in-out"
                >
                  <a href="#" className="flex items-center gap-4">
                    Our Services <BsArrowRight className="text-xl" />
                  </a>
                </button>
              </div>
            </div>

            <div className="relative hidden h-full w-2/5 justify-center lg:flex">
              <Image
                className="heroImg absolute top-[4rem]"
                src="/images/hero-img.png"
                alt={"hero-img"}
                layout="responsive"
                objectFit="contain"
                width={500}
                height={500}
              />
            </div>
          </motion.div>
        </header>
      </AnimatePresence>
    </>
  );
};

export default Heading;
