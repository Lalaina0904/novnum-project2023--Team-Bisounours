

// @flow
import * as React from "react";
import {
  Briefcase,
  BookText,
  MessagesSquare,
  Search,
  LogOut,
  FileText,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { redirect } from 'next/navigation'


const Page = () => {

  redirect('/dashboard/resources')

};

function Resource() {
  return (
    <div className="flex h-min max-w-6xl cursor-pointer gap-3 rounded-md border bg-card p-2 text-card-foreground hover:bg-accent">
      <div className="relative aspect-video w-64 bg-blue-400">
        <Image
          objectFit={"cover"}
          fill
          src={
            "https://d2r55xnwy6nx47.cloudfront.net/uploads/2022/02/Andre-Oort-520x292-520x292.jpg"
          }
          alt={""}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between text-neutral-400">
          <h2 className="text-lg font-bold">Number Theory</h2>
          <FileText size={14} />
        </div>
        <p className="text-sm">
          Number theory is a branch of mathematics that deals with the
          properties and relationships
        </p>
        <div className="flex items-end justify-between py-1">
          <div className="mt-auto flex flex-wrap gap-2">
            <Badge>Math</Badge>
            <Badge>NumberTheory</Badge>
            <Badge>MathNerd</Badge>
          </div>
          <div className="text-xs  underline">
            By noface , <span className="italic">12-02-2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
