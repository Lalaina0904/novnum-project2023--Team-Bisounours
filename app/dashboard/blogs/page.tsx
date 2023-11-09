// @flow
import * as React from "react";
import {
  Briefcase,
  BookText,
  MessagesSquare,
  Search,
  LogOut,
  FileText,
  Heart,
  MessageSquare,
  Bookmark
} from "lucide-react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="relative flex flex-col gap-6">
      <Blog/>
      <Blog/>
    </div>
  );
};

function Blog() {
  return (
    <div className="mx-auto max-w-2xl border bg-neutral-50 p-4 rounded-md flex flex-col gap-6">
      <div className="flex gap-2">
        <div className="w-12 aspect-square bg-white rounded-full overflow-hidden border-2 flex items-center justify-center">
          <Image className="w-full h-auto" width={40} height={40} src={"https://avatars.githubusercontent.com/u/69815340?v=4"} alt={""}/>
        </div>
        <div>
          <p className="font-bold">Toky Fy</p>
          <p className="text-xs font-mono">Nov 8 (25min ago)</p>
        </div>
      </div>
      <div className="pl-14 flex flex-col gap-3">
        <h1 className="text-2xl font-bold">
          Design Tokens: Cool Philosophy, Cumbersome Experience
        </h1>
        <div className="flex flex-wrap gap-1">
          <span className="bg-blue-50 font-mono font-bold p-1 text-xs rounded-md flex items-center justify-center leading-3">Math</span>
          <span className="bg-blue-50 font-mono font-bold p-1 text-xs rounded-md flex items-center justify-center leading-3">NumberTheory</span>
          <span className="bg-blue-50 font-mono font-bold p-1 text-xs rounded-md flex items-center justify-center leading-3">MathNerd</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="font-bold flex gap-2 items-center text-xs text-neutral-600 font-mono">
          <Heart absoluteStrokeWidth size={20}/>
          <p>20</p>
        </div>
        <div className="font-bold flex gap-2 items-center text-xs text-neutral-600 font-mono">
          <MessageSquare absoluteStrokeWidth size={20}/>
          <p>2</p>
        </div>
        <div className="font-bold flex gap-2 items-center text-xs text-neutral-600 font-mono">
          <Bookmark absoluteStrokeWidth size={20}/>
        </div>
      </div>
    </div>
  )
}

export default Page;