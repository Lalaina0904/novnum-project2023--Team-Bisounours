// @flow
import * as React from "react";
import {
  Briefcase,
  BookText,
  MessagesSquare,
  Search,
  LogOut,
  FileText,
  Plus,
  File,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Page = () => {
  return (
    <div>
      <div className="mb-6 flex justify-end">
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add resources
        </Button>
      </div>
      <div className="relative flex flex-col gap-4">
        <Resource />
        <Resource />
        <Resource />
        <Resource />
        <Resource />
      </div>
    </div>
  );
};

function Resource() {
  return (
    <div className="flex cursor-pointer items-center gap-3 rounded-md border bg-card p-4 text-card-foreground hover:bg-accent">
      <div className="relative text-foreground/60">
        <File />
      </div>
      <div className="flex items-center grow">
        <div className="mr-auto flex items-center justify-between">
          <h2 className="text-md">Number Theory</h2>
        </div>
        <p className="text-sm text-foreground/60">
          Number theory is a branch of mathematics that deals with the
          properties and relationships
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex flex-wrap gap-2">
            <Badge>Math</Badge>
            <Badge>NumberTheory</Badge>
            <Badge>MathNerd</Badge>
          </div>
          <div className="flex grow justify-end text-xs text-neutral-400 underline">
            By noface , <span className="italic">12-02-2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
