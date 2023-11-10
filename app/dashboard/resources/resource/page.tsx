// @flow
import * as React from "react";
import { Briefcase, BookText, MessagesSquare, Search, LogOut, FileText, DownloadCloud } from "lucide-react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="relative flex flex-col gap-6 mx-auto max-w-2xl">
      <h1 className="text-3xl font-bold">
        Number Theory
      </h1>
      <div className="flex flex-col text-md">
       <p>
         Number theory is a branch of mathematics that deals with the properties and relationships of numbers,
         particularly integers. It&apos;s one of the oldest and most fundamental areas of mathematics. Number theory explores
         questions related to prime numbers, divisibility, congruence, and more.
       </p>
      </div>
      <div className="flex flex-wrap gap-1 mt-auto ">
        <span className="bg-blue-50 p-1 text-xs rounded-md flex items-center justify-center leading-3 font-mono">Math</span>
        <span
          className="bg-blue-50 p-1 text-xs rounded-md flex items-center justify-center leading-3 font-mono">NumberTheory</span>
        <span className="bg-blue-50 p-1 text-xs rounded-md flex items-center justify-center leading-3 font-mono">MathNerd</span>
      </div>

      <div className="flex items-center gap-4 border p-2 rounded-md">
        <div className="text-neutral-800 w-12 aspect-square rounded-md bg-neutral-200 flex items-center justify-center">
          <DownloadCloud />
        </div>
        <div>
          <p className="font-mono">Everything You Always Wanted To Know.pdf</p>
          <p>1.5Mb</p>
        </div>
      </div>
    </div>
  );
};

export default Page;