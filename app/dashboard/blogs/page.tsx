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
  Plus,
  Pencil,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="relative mx-auto flex max-w-2xl flex-col gap-6">
      <div className="mb-6 flex flex-wrap justify-end gap-2">
        <div className="relative mr-auto flex max-w-md grow items-center overflow-hidden rounded-md border bg-white px-2 text-gray-600">
          <input
            className="h-10 w-full bg-transparent text-sm  focus:outline-none "
            type="search"
            name="search"
            placeholder="Search"
          />
          <div className="text-neutral-400">
            <Search />
          </div>
        </div>
        <div className="flex w-max cursor-pointer items-center gap-1 rounded-md border border-neutral-300 bg-neutral-50 p-3 text-sm text-neutral-800">
          <p className="text-xm font-mono font-bold">Write</p>
          <Pencil size={16} />
        </div>
      </div>

      <Blog
        author={"Ein"}
        authorPic={"https://avatars.githubusercontent.com/u/69815340?v=4"}
        date={"Nov 8 (25min ago)"}
        tag={["machine learning", "artificial intelligence", "data science"]}
        comment={20}
        title={"Exploring the World of Machine Learning"}
        hearth={10}
      />

      <Blog
        author={"Ein"}
        authorPic={"https://avatars.githubusercontent.com/u/69815340?v=4"}
        date={"Nov 8 (25min ago)"}
        tag={["machine learning", "artificial intelligence", "data science"]}
        comment={20}
        title={"Mastering the Art of Digital Photography"}
        hearth={10}
      />

      <Blog
        author={"Ein"}
        authorPic={"https://avatars.githubusercontent.com/u/69815340?v=4"}
        date={"Nov 8 (25min ago)"}
        tag={["blockchain", "cryptocurrency", "decentralized"]}
        comment={20}
        title={"Demystifying Blockchain Technology"}
        hearth={10}
      />
    </div>
  );
};

type IBlog = {
  title: string;
  author: string;
  hearth: number;
  comment: number;
  date: string;
  authorPic: string;
  tag: string[];
};

function Blog({ title, author, authorPic, comment, date, hearth, tag }: IBlog) {
  return (
    <Link
      href={"/dashboard/blogs/blog"}
      className="flex flex-col gap-6 rounded-md border bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800"
    >
      <div className="flex gap-2">
        <div className="flex aspect-square w-12 items-center justify-center overflow-hidden rounded-full border-2 bg-white">
          <Image
            className="h-auto w-full"
            width={40}
            height={40}
            src={authorPic}
            alt={""}
          />
        </div>
        <div>
          <p className="font-bold">{author}</p>
          <p className="font-mono text-xs">{date}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 pl-14">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex flex-wrap gap-1">
          {tag.map((tag, index) => (
            <span
              key={index}
              className="flex items-center justify-center rounded-md bg-blue-50 p-1 px-2 text-sm leading-3 dark:bg-neutral-700 dark:text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-400">
          <Heart absoluteStrokeWidth size={20} />
          <p>{hearth}</p>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-400">
          <MessageSquare absoluteStrokeWidth size={20} />
          <p>{comment}</p>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-400">
          <Bookmark absoluteStrokeWidth size={20} />
        </div>
      </div>
    </Link>
  );
}

export default Page;
