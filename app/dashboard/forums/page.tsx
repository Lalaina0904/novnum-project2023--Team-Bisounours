// @flow
import * as React from "react";
import {
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Pencil,
  Search,
} from "lucide-react";

import Link from "next/link";

const Page = () => {
  return (
    <div className="relative mx-auto flex max-w-2xl flex-col gap-4">
      <div className="mb-6 flex flex-wrap justify-end gap-2">
        <div className="relative mr-auto flex max-w-md grow items-center overflow-hidden rounded-md border bg-white px-2 text-gray-600">
          <input
            className="h-10 w-full bg-transparent text-sm  focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <div className="text-neutral-400">
            <Search />
          </div>
        </div>
        <div className="flex w-max cursor-pointer items-center gap-1 rounded-md border border-neutral-300 bg-neutral-50 p-3 text-sm text-neutral-800">
          <p className="text-xm font-mono font-bold">Ask</p>
          <Pencil size={16} />
        </div>
      </div>

      <Question
        title={"Setting arcs to always be tangential to lines"}
        tags={["Trigonometry"]}
        upVote={1}
        comment={2}
        downVote={1}
        user={"jagostinhoCT"}
      />

      <Question
        title={"Debate Topic: π ≠ 3.14159... π = 4/√Φ"}
        tags={["General", "Math"]}
        upVote={1}
        comment={2}
        downVote={1}
        user={"jagostinhoCT"}
      />

      <Question
        title={"Prime number divides a sequence"}
        tags={["Algebra", "Prime"]}
        upVote={1}
        comment={2}
        downVote={1}
        user={"ein"}
      />
    </div>
  );
};

type IQuestion = {
  title: string;
  tags: string[];
  user: string;
  upVote: number;
  downVote: number;
  comment: number;
};

function Question({ title, user, upVote, downVote, tags, comment }: IQuestion) {
  return (
    <Link
      href={"/dashboard/forums/forum"}
      className="flex cursor-pointer gap-4 rounded-md border-2 border-transparent bg-neutral-100 p-4 hover:border-neutral-500"
    >
      <div className="flex w-24 flex-col justify-between font-mono text-sm font-bold text-neutral-400">
        <p className="flex cursor-pointer gap-2 hover:text-neutral-900">
          <span>{upVote}</span> <ChevronUp absoluteStrokeWidth size={18} />
        </p>
        <p className="flex cursor-pointer gap-2 hover:text-neutral-900">
          <span>{comment}</span> <MessageSquare absoluteStrokeWidth size={16} />
        </p>
        <p className="flex cursor-pointer gap-2 hover:text-neutral-900">
          <span>{downVote}</span> <ChevronDown absoluteStrokeWidth size={18} />
        </p>
      </div>
      <div className="flex grow flex-col gap-2 py-3">
        <h1 className="text-xl font-bold text-neutral-800">{title}</h1>
        <div className="flex flex-wrap items-center">
          <div className="flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="flex items-center justify-center rounded-md bg-blue-50 p-1 px-2 text-sm leading-3 dark:bg-neutral-700 dark:text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex grow items-center justify-end gap-2">
            <div className="aspect-square w-4 rounded-full bg-neutral-600"></div>
            <p className="text-sm font-bold text-neutral-600">{user}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Page;
