"use client";

import React, { useRef, useState } from "react";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";

import { Parallax, Navigation } from "swiper/modules";

const sub1 = "Sharing educational resources";
const sub2 = "Discussion forum";
const sub3 = "Blog posts and articles";

const subtitles = [sub1, sub2, sub3];

const content1 = () => {
  return (
    <>
      <p>
        Users have access to a variety of high-quality educational resources,
        from courses to presentations, videos and much more, enriching their
        learning experience.
      </p>
      <p>
        They can share their own resources and benefit from the expertise of
        others. This encourages collaborative learning and knowledge exchange.
      </p>
      <p>
        By choosing from a range of resources, users can personalize their
        learning to suit their needs, learning style and objectives.
      </p>
    </>
  );
};

const content2 = () => {
  return (
    <>
      <p>
        Discussion forums allow users to ask questions, share ideas and discuss
        educational topics. It's a space where learners and educators can
        collaborate to solve problems.
      </p>
      <p>
        It encourage the creation of networks and links with peers sharing the
        same interests. This enables users to expand their professional and
        personal networks.
      </p>
    </>
  );
};

const content3 = () => {
  return (
    <>
      <p>
        Blogs and articles offer educational resources, teaching guides and
        relevant information. Users can take advantage of these resources to
        improve their skills and knowledge.
      </p>
      <p>
        The articles feature success stories, inspirational stories and advice
        from education experts. This can motivate users to pursue their
        educational goals.
      </p>
    </>
  );
};

type ContentProps = {
  subtitle: string;
  children: React.ReactNode;
};

const Slide = ({ subtitle, children }: ContentProps) => {
  return (
    <div className={`bg-[#eff4fa] py-12`}>
      <div className="container mx-auto">
        <div className="info flex flex-col justify-center px-[3rem] lg:px-[8rem]">
          <div className="title">
            <a className="text-3xl font-bold text-gray-800 hover:text-gray-600 md:text-4xl">
              {subtitle}
            </a>
          </div>
          <p className="py-3 text-gray-500">{children}</p>
        </div>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="hIbMNH">
      <div className="mb-8">
        <h2 className="title text-center text-4xl font-semibold text-gray-700">
          Discover our features
        </h2>
      </div>
      <Swiper
        speed={600}
        parallax={true}
        navigation={true}
        modules={[Parallax, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {Slide({
            subtitle: subtitles[0],
            children: content1(),
          })}
        </SwiperSlide>
        <SwiperSlide>
          {Slide({
            subtitle: subtitles[1],
            children: content2(),
          })}
        </SwiperSlide>
        <SwiperSlide>
          {Slide({
            subtitle: subtitles[2],
            children: content3(),
          })}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Content;
