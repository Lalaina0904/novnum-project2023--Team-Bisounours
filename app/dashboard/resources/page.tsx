// @flow
import * as React from "react";
import {
  Briefcase,
  BookText,
  MessagesSquare,
  Search,
  LogOut,
  FileText,
  Video,
  Computer,
  Plus,
  File,
  LinkIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <div className="mb-6 flex flex-wrap justify-end gap-2">
        <div className="relative mr-auto flex max-w-md grow items-center overflow-hidden rounded-md border bg-white px-2 text-gray-600">
          <input
            className="h-10 w-full bg-transparent text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <div className="text-neutral-400">
            <Search />
          </div>
        </div>
        <Link
          href={"/dashboard/resources/create"}
          className="flex w-max cursor-pointer items-center gap-1 rounded-md border border-neutral-300 bg-neutral-50 p-3 text-sm text-neutral-800"
        >
          <span className="text-xm font-mono font-bold">Add Resources</span>
          <Plus size={18} />
        </Link>
      </div>

      <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Resource
          fileName={"Imaginary Number"}
          author={"Pr Proton"}
          tag={["math", "number"]}
          date={"9 Nov 2023"}
          type={"software"}
          description={"Learn Complex number the easy ay with this doc"}
        />

        <Resource
          fileName={"Engish voacab"}
          author={"Toky Fy"}
          tag={["Language", "English"]}
          date={"10 Nov 2023"}
          type={"video"}
          description={"Learn Complex number the easy ay with this doc"}
        />

        <Resource
          fileName={"History Timeline"}
          author={"Pr Proton"}
          tag={["history", "ppt"]}
          date={"15 Nov 2023"}
          type={"software"}
          description={
            " PowerPoint presentation covering a historical timeline"
          }
        />

        <Resource
          fileName={"Chemistry LabReport"}
          author={"Pr Proton"}
          tag={["math", "number"]}
          date={"9 Nov 2023"}
          type={"video"}
          description={"A Word document containing a chemistry lab report"}
        />

        <Resource
          fileName={"Spanish Vocabulary"}
          author={"Pr Proton"}
          tag={["math", "number"]}
          date={"9 Nov 2023"}
          type={"software"}
          description={"Learn Complex number the easy ay with this doc"}
        />

        <Resource
          fileName={"Computer Science Code"}
          author={"Pr Proton"}
          tag={["math", "number"]}
          date={"9 Nov 2023"}
          type={"software"}
          description={"Learn Complex number the easy ay with this doc"}
        />

        <Resource
          fileName={"Music Theory Quiz"}
          author={"Pr Proton"}
          tag={["math", "number"]}
          date={"9 Nov 2023"}
          type={"software"}
          description={"Learn Complex number the easy ay with this doc"}
        />

        <Resource
          fileName={"Geography Project"}
          author={"Pr Proton"}
          tag={["math", "number"]}
          date={"9 Nov 2023"}
          type={"software"}
          description={"Learn Complex number the easy ay with this doc"}
        />

        <Resource
          fileName={"Literature Analysis"}
          author={"Pr Proton"}
          tag={["math", "number"]}
          date={"9 Nov 2023"}
          type={"software"}
          description={"Learn Complex number the easy ay with this doc"}
        />
      </div>
    </div>
  );
};

type IResource = {
  type: "document" | "video" | "link" | "software";
  fileName: string;
  description: string;
  author: string;
  date: string;
  tag: string[];
};

function Resource({
  type,
  fileName,
  author,
  description,
  tag,
  date,
}: IResource) {
  return (
    <Link
      href={"/dashboard/resources/resource"}
      className="flex h-min cursor-pointer items-start gap-3 rounded-md border p-2 hover:bg-neutral-100"
    >
      <div className="relative flex aspect-square items-center justify-center rounded-md bg-blue-100 p-3 text-neutral-600">
        {(type === "document" && <File absoluteStrokeWidth size={18} />) ||
          (type === "link" && <LinkIcon absoluteStrokeWidth size={18} />) ||
          (type === "video" && <Video absoluteStrokeWidth size={18} />) ||
          (type === "software" && <Computer absoluteStrokeWidth size={18} />)}
      </div>
      <div className="flex grow flex-col gap-2">
        <div className="mr-auto flex items-center justify-between text-neutral-400">
          <h2 className="text-sm font-bold text-neutral-800">{fileName}</h2>
        </div>
        <p className="text-sm text-neutral-600">{description}</p>
        <div className="flex flex-wrap gap-2">
          <div className="flex flex-wrap gap-1">
            {tag.map((tag, index) => (
              <span
                key={index}
                className="flex items-center justify-center rounded-md bg-[#f5b98a] bg-opacity-30 p-1 px-2 text-xs leading-3"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="ml-auto flex text-xs text-neutral-400 underline">
            {author} , <span className="italic">{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Page;
