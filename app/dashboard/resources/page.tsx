// @flow
import * as React from "react";
import { Briefcase, BookText, MessagesSquare, Search, LogOut, FileText, Plus, File } from "lucide-react";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      <div className="flex justify-end mb-6">
        <div className="w-max p-3 bg-neutral-800 rounded-md flex gap-1 items-center text-white cursor-pointer">
          <p className="text-sm font-bold font-mono">Add Resources</p>
          <Plus size={18}/>
        </div>
      </div>
      <div className="relative flex flex-col gap-2">
        <Resource/>
        <Resource/>
        <Resource/>
        <Resource/>
        <Resource/>
      </div>
    </div>
  );
};

function Resource() {
  return (
    <div className="flex gap-3 h-min p-2 hover:bg-neutral-100 cursor-pointer rounded-md border">
      <div className="relative text-neutral-400">
        <File/>
      </div>
      <div className="flex grow items-center">
        <div className="flex text-neutral-400 items-center justify-between mr-auto">
          <h2 className="font-bold text-lg text-neutral-800">Number Theory</h2>
        </div>
        <p className="text-sm text-neutral-600">
          Number theory is a branch of mathematics that deals with the properties and relationships
        </p>
       <div className="flex flex-wrap items-center gap-2">
         <div className="flex flex-wrap gap-1">
           <span className="bg-blue-50 p-1 text-xs rounded-md flex items-center justify-center leading-3">Math</span>
           <span className="bg-blue-50 p-1 text-xs rounded-md flex items-center justify-center leading-3">NumberTheory</span>
           <span className="bg-blue-50 p-1 text-xs rounded-md flex items-center justify-center leading-3">MathNerd</span>
         </div>
         <div className="text-neutral-400 text-xs underline grow justify-end flex">
           By noface , <span className="italic">12-02-2025</span>
         </div>
       </div>
      </div>
    </div>
  )
}

export default Page;