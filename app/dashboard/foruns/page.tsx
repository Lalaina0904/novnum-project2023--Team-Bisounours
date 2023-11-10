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
  Bookmark,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const Page = () => {
  return (
    <div className="flex flex-col items-center divide-y gap-8">
      <Question />
      <Question />
      <Question />
      <Question />
    </div>
  );
};

function Question() {
  return (
    <div className="flex max-w-2xl gap-6 rounded-md p-4 py-8">
      <div className="flex w-24 flex-col justify-between font-mono text-sm font-bold text-foreground/40">
        <p>0 votes</p>
        <p>0 reponses</p>
        <p>0 vues</p>
      </div>
      <div className="flex flex-grow flex-col gap-2">
        <h1 className="text-xl font-semibold">
          C++: Bitwise operation to get symmetrical bits?
        </h1>
        <div className="flex flex-wrap items-center">
          <div className="flex flex-wrap gap-2">
            <Badge>Math</Badge>
            <Badge>NumberTheory</Badge>
            <Badge>MathNerd</Badge>
          </div>
          <div className="flex grow justify-end">
            <p className="text-sm font-bold">toky</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
