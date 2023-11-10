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
    <div className="relative flex flex-col gap-6">
      <Blog />
      <Blog />
    </div>
  );
};

function Blog() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6 rounded-md border bg-card p-4 text-card-foreground">
      <div className="flex gap-2">
        <div className="flex aspect-square w-12 items-center justify-center overflow-hidden rounded-full border-2 bg-white">
          <Image
            className="h-auto w-full"
            width={40}
            height={40}
            src={"https://avatars.githubusercontent.com/u/69815340?v=4"}
            alt={""}
          />
        </div>
        <div>
          <p className="font-bold">Toky Fy</p>
          <p className="font-mono text-xs">Nov 8 (25min ago)</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 pl-14">
        <h1 className="text-2xl font-bold">
          Design Tokens: Cool Philosophy, Cumbersome Experience
        </h1>
        <div className="flex flex-wrap gap-2">
          <Badge>Math</Badge>
          <Badge>NumberTheory</Badge>
          <Badge>MathNerd</Badge>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-card-foreground/60">
          <Heart absoluteStrokeWidth size={20} />
          <p>20</p>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-card-foreground/60">
          <MessageSquare absoluteStrokeWidth size={20} />
          <p>2</p>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-card-foreground/60">
          <Bookmark absoluteStrokeWidth size={20} />
        </div>
      </div>
    </div>
  );
}

export default Page;
