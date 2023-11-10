// @flow
import * as React from "react";
import { Briefcase, BookText, MessagesSquare, Search, LogOut, FileText, ArrowUp, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="relative flex flex-col gap-6 max-w-xl">
      <div className="flex gap-6 items-center">
        <div className="w-28 aspect-square bg-white rounded-full overflow-hidden border-2 flex items-center justify-center">
          <Image className="w-full h-auto" width={320} height={320} src={"https://avatars.githubusercontent.com/u/69815340?v=4"} alt={""}/>
        </div>
        <div >
          <p className="font-bold text-3xl">Toky Fy</p>
          <p className="font-mono">Student at 42 School</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="italic font-bold">About</h2>
        <p className="font-mono text-neutral-500">Hey there, I&apos;m just a lambda human who love sitting next to a computer all day and expect making some new friend :d</p>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="italic font-bold">Contact</h2>
        <ul>
          <li className="flex items-center">
            <p className="w-32 font-bold text-sm text-neutral-400">Website</p>
            <p className="font-mono flex items-center">
              <a href="#">toky.vercel.app</a>
              <ArrowUpRight size={14}/>
            </p>
          </li>

          <li className="flex items-center">
            <p className="w-32 font-bold text-sm text-neutral-400">Facebook</p>
            <p className="font-mono flex items-center">
              <a href="#">Toky</a>
              <ArrowUpRight size={14}/>
            </p>
          </li>

          <li className="flex items-center">
            <p className="w-32 font-bold text-sm text-neutral-400">LinkedIn</p>
            <p className="font-mono flex items-center">
              <a href="#">Tokyfy</a>
              <ArrowUpRight size={14}/>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};


export default Page;