// @flow
import * as React from "react";
import { Briefcase, BookText, MessagesSquare, Search, LogOut, FileText } from "lucide-react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="relative grid grid-cols-2 gap-3">
      <Resource/>
      <Resource/>
      <Resource/>
      <Resource/>
      <Resource/>
    </div>
  );
};

function Resource() {
  return (
    <div className="flex gap-3 max-w-3xl h-min p-2 hover:bg-neutral-100 cursor-pointer rounded-md border">
      <div className="aspect-video bg-blue-400 w-64 relative">
        <Image objectFit={"cover"} fill src={"https://d2r55xnwy6nx47.cloudfront.net/uploads/2022/02/Andre-Oort-520x292-520x292.jpg"} alt={""}/>
      </div>
      <div className="flex flex-col">
        <div className="flex text-neutral-400 items-center justify-between">
          <h2 className="font-bold text-lg text-neutral-800">Number Theory</h2>
          <FileText size={14}/>
        </div>
        <p className="text-sm text-neutral-600">
          Number theory is a branch of mathematics that deals with the properties and relationships
        </p>
       <div className="flex justify-between items-end py-1">
         <div className="flex flex-wrap gap-1 mt-auto">
           <span className="bg-blue-50 p-1 text-xs rounded-md flex items-center justify-center leading-3">Math</span>
           <span className="bg-blue-50 p-1 text-xs rounded-md flex items-center justify-center leading-3">NumberTheory</span>
           <span className="bg-blue-50 p-1 text-xs rounded-md flex items-center justify-center leading-3">MathNerd</span>
         </div>
         <div className="text-neutral-400 text-xs underline">
           By noface , <span className="italic">12-02-2025</span>
         </div>
       </div>
      </div>
    </div>
  )
}

export default Page;