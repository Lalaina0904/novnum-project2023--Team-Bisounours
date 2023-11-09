// @flow
import * as React from "react";
import Image from "next/image";
import { Briefcase, BookText, MessagesSquare, Search } from "lucide-react";

const Page = () => {
  return (
    <div className="relative flex h-full min-h-screen">
      <div className="custom-filter fixed z-50 h-screen w-48 bg-opacity-100 py-6">
        <div className="flex items-center gap-4 px-4">
          <div className="w-10">
            <Image
              className="h-auto w-full"
              width={200}
              height={200}
              src={"/assets/logoDark.svg"}
              alt={""}
            />
          </div>
          <p className="text-xl font-bold">Hayra</p>
        </div>
        <div className="my-16 flex flex-col border-b border-t font-bold text-neutral-700">
          <div className="flex cursor-pointer items-center gap-4 border-l-4 border-transparent p-4 text-sm hover:border-neutral-800 hover:bg-white">
            <Briefcase size={20} />
            <p>Resources</p>
          </div>
          <div className="flex cursor-pointer items-center gap-4 border-l-4 border-transparent p-4 text-sm hover:border-neutral-800 hover:bg-white">
            <BookText size={20} />
            <p>Blogs</p>
          </div>
          <div className="flex cursor-pointer items-center gap-4 border-l-4 border-transparent p-4 text-sm hover:border-neutral-800 hover:bg-white">
            <MessagesSquare size={20} />
            <p>Forums</p>
          </div>
        </div>
      </div>
      <div className="relative ml-48 h-[300vh] grow py-4">
        <div className="custom-filter fixed left-0 top-0 flex w-full justify-between bg-white py-6 pl-48">
          <div className="relative mx-6 flex w-96 items-center overflow-hidden rounded-md border bg-white px-2 text-gray-600">
            <input
              className="h-10 w-full text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <div className="text-neutral-400">
              <Search />
            </div>
          </div>
          <div>
            <p>toky</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
