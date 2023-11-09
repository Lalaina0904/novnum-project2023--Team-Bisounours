// @flow
import * as React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="relative flex flex-col gap-6 mx-auto max-w-2xl">
      <div className="flex gap-4 items-center">
        <div className="w-12 aspect-square bg-white rounded-full overflow-hidden border-2 flex items-center justify-center">
          <Image className="w-full h-auto" width={40} height={40} src={"https://avatars.githubusercontent.com/u/69815340?v=4"} alt={""}/>
        </div>
        <div>
          <p className="font-bold">Toky Fy</p>
          <p className="text-xs font-mono">Cs student</p>
        </div>
      </div>
      <h1 className="text-3xl font-bold">
        Design Tokens: Cool Philosophy, Cumbersome Experience
      </h1>

      <div className="flex flex-wrap gap-1 mt-auto ">
        <span
          className="bg-blue-50 p-1 text-xs rounded-md flex items-center justify-center leading-3 font-mono">Math</span>
        <span
          className="bg-blue-50 p-1 text-xs rounded-md flex items-center justify-center leading-3 font-mono">NumberTheory</span>
        <span
          className="bg-blue-50 p-1 text-xs rounded-md flex items-center justify-center leading-3 font-mono">MathNerd</span>
      </div>

      <div className="flex flex-col gap-6 font-mono">
        <p className="font-mono">
          Have you ever found yourself struggling to turn UI/UX designs into code? It can feel like a never-ending
          journey through the digital wilderness. Unfortunately, it’s not getting any easier. UI/UX design is constantly
          evolving, with new trends, devices, and user expectations popping up faster than you can say “responsive
          design.” As a result, coders often feel like they’re playing catch-up.
        </p>

        <p className="font-mono">
          Figma is one of the leading design platforms used in various companies of all sizes. It is used where I work,
          too. For our new product, our designers created the screens and everything. Then, they marked the design as
          “ready for development.” They also noted Figma has a new feature called “Dev mode”.
        </p>

        <p className="font-mono">
          Curious about new things, I turned on “Dev mode” in the design file, hoping it would make things easier.
        </p>

        <p className="font-mono">
          Then, I went to see how colors are defined. For this project, our design team used tokens for colors. But,
          does Figma list these colors in Android color resource format? Or, in any other format at all? Or, can devs
          even see all of the tokens in one place?
        </p>
      </div>

      <div className="flex gap-4 items-start">
        <div className="w-10 aspect-square bg-white rounded-full overflow-hidden border-2 flex items-center justify-center">
          <Image className="w-full h-auto" width={40} height={40} src={"https://avatars.githubusercontent.com/u/69815340?v=4"} alt={""}/>
        </div>
        <div className="grow">
          <textarea className="w-full border rounded-md"/>
        </div>
      </div>


      <div className="flex gap-4 items-start border-t py-6">
        <div className="w-10 aspect-square bg-white rounded-full overflow-hidden border-2 flex items-center justify-center">
          <Image className="w-full h-auto" width={40} height={40} src={"https://avatars.githubusercontent.com/u/69815340?v=4"} alt={""}/>
        </div>
        <div className="grow flex flex-col gap-2">
          <p className="font-bold">Noface</p>
         <p className="w-full p-2 border rounded-md">
           Really cool series here, Denizhan! Appreciate ya sharing.
         </p>
        </div>
      </div>
    </div>
  );
};

export default Page;