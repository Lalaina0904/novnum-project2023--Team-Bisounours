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
    <div className="relative flex flex-col divide-y items-center">
      <Question/>
      <Question/>
      <Question/>
      <Question/>
    </div>
  );
};

function Question() {
  return (
    <div className="max-w-2xl p-4 py-8 rounded-md flex gap-6">
      <div className="text-sm flex flex-col justify-between font-bold text-neutral-400 w-24 font-mono">
        <p>0 votes</p>
        <p>0 reponses</p>
        <p>0 vues</p>
      </div>
      <div className="grow flex flex-col gap-2">
        <h1 className="text-xl font-bold text-neutral-800">C++: Bitwise operation to get symmetrical bits?</h1>
        <div className="flex items-center flex-wrap">
          <div className="flex flex-wrap gap-1">
            <span className="bg-blue-50 font-mono font-bold p-1 text-xs rounded-md flex items-center justify-center leading-3">Math</span>
            <span className="bg-blue-50 font-mono font-bold p-1 text-xs rounded-md flex items-center justify-center leading-3">NumberTheory</span>
            <span className="bg-blue-50 font-mono font-bold p-1 text-xs rounded-md flex items-center justify-center leading-3">MathNerd</span>
          </div>
          <div className="grow flex justify-end">
            <p className="text-sm font-bold">toky</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;