'use client'

import React, { useEffect, useState } from "react";
import { BookText, Briefcase, LogOut, MessagesSquare, Search } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ProductDetailLayout({ children }: {
  children: React.ReactNode;
}) {


  return (
    <>
      <div className="h-full min-h-screen flex relative">
        <div className="fixed h-screen w-48 bg-opacity-100 py-10 border-r bg-neutral-50 flex flex-col">
          <div className="font-bold text-neutral-700 flex flex-col my-10">
            <NavItem link={"/dashboard/resources"} label={"Resources"} Icon={<Briefcase size={20}/>}/>
            <NavItem link={"/dashboard/blogs"} label={"Blogs"} Icon={<BookText  size={20}/>}/>
            <NavItem link={"/dashboard/foruns"} label={"Forums"} Icon={<MessagesSquare  size={20}/>}/>
          </div>
          <div className="mt-auto border-y">
            <div className="text-sm flex gap-4 items-center p-4 cursor-pointer hover:bg-white border-transparent border-l-4 hover:border-neutral-800">
              <LogOut  size={20}/>
              <p>Logout</p>
            </div>
          </div>
        </div>
        <div className="grow ml-48  relative pt-24 px-4">
          <div className="px-4 fixed w-full flex left-0 top-0 py-3 custom-filter bg-white  z-50">
            <div className="flex items-center gap-4">
              <div className="w-10">
                <Image
                  className="w-full h-auto"
                  width={200} height={200}
                  src={"/assets/logoDark.svg"}
                  alt={""}
                />
              </div>
              <p className="font-bold text-xl">Hayra</p>
            </div>
            <div
              className="px-2 ml-auto grow bg-white mx-6 relative text-gray-600 border rounded-md max-w-md overflow-hidden flex items-center">
              <input
                className="w-full h-10 text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
              />
              <div className="text-neutral-400">
                <Search/>
              </div>
            </div>
            <div>
              <div className="w-10 aspect-square rounded-full overflow-hidden border-2 bg-white">
                <Image width={200} height={200} src={"https://avatars.githubusercontent.com/u/69815340?v=4"} alt={""}/>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}

type INavItem = {
  label : string,
  Icon : React.ReactNode,
  link : string
}

function NavItem({label , Icon , link} : INavItem){

  const [isVisited, setIsVisited] = useState(false);

  const pathname = usePathname()

  useEffect(() => {
    pathname.includes(link)  ? setIsVisited(true) : setIsVisited(false);
  }, [link, pathname])


  return (
    <Link
      href={link}
      className={`text-sm flex gap-4 items-center p-4 cursor-pointer hover:bg-white border-transparent border-l-4 hover:border-neutral-800 ${isVisited && "bg-white border-neutral-800"}`}>
      {Icon}
      <p>{label}</p>
    </Link>
  )
}