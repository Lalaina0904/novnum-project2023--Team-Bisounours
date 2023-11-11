"use client";

import React, { MouseEventHandler, useEffect, useState } from "react";
import {
  BookText,
  Briefcase,
  LogOut,
  MessagesSquare,
  Search,
  Plus,
  Home,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative flex h-full min-h-screen">
        <div className="fixed bottom-0 z-20 flex w-full cursor-pointer flex-col gap-4 px-4 py-6 sm:hidden">
          <MobileNavigation />
        </div>
        <div className="fixed hidden h-screen w-48 flex-col border-r bg-neutral-50 bg-opacity-100 dark:bg-neutral-950 md:flex">
          <div className="my-10 flex flex-col font-bold text-neutral-700">
            <NavItem
              link={"/dashboard/resources"}
              label={"Resources"}
              Icon={<Briefcase size={20} />}
            />
            <NavItem
              link={"/dashboard/blogs"}
              label={"Blogs"}
              Icon={<BookText size={20} />}
            />
            <NavItem
              link={"/dashboard/forums"}
              label={"Forums"}
              Icon={<MessagesSquare size={20} />}
            />
          </div>
          <div className="mt-auto border-y">
            <div className="flex cursor-pointer items-center gap-4 border-l-4 border-transparent p-4 text-sm hover:border-neutral-800 hover:bg-white">
              <LogOut size={20} />
              <p>Logout</p>
            </div>
          </div>
        </div>

        <div className="relative grow px-4 py-14 md:ml-48" id="content">
          {/*<div className="px-4 fixed w-full flex left-0 top-0 py-3 custom-filter bg-white  z-50">*/}
          {/*  <div className="flex items-center gap-4">*/}
          {/*    <div className="w-10">*/}
          {/*      <Image*/}
          {/*        className="w-full h-auto"*/}
          {/*        width={200} height={200}*/}
          {/*        src={"/assets/logoDark.svg"}*/}
          {/*        alt={""}*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*    <p className="font-bold text-xl">Hayra</p>*/}
          {/*  </div>*/}

          {/*  <div className="ml-auto">*/}
          {/*    <div className="w-10 aspect-square rounded-full overflow-hidden border-2 bg-white">*/}
          {/*      <Image width={200} height={200} src={"https://avatars.githubusercontent.com/u/69815340?v=4"} alt={""}/>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {children}
        </div>
      </div>
    </>
  );
}

type INavItem = {
  label: string;
  Icon: React.ReactNode;
  link: string;
};

function NavItem({ label, Icon, link }: INavItem) {
  const [isVisited, setIsVisited] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    pathname.endsWith(link) ? setIsVisited(true) : setIsVisited(false);
  }, [link, pathname]);

  return (
    <Link
      href={link}
      className={`flex cursor-pointer items-center gap-4 border-l-4 p-4 text-sm  hover:border-neutral-800 hover:bg-white dark:text-neutral-200 dark:hover:text-neutral-900 ${
        isVisited
          ? "border-neutral-800 bg-white dark:text-neutral-900"
          : "border-transparent"
      }`}
    >
      {Icon}
      <p>{label}</p>
    </Link>
  );
}

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpenClickHandler: MouseEventHandler<HTMLDivElement> = () => {
    document.getElementById("content")!.classList.toggle("blur-sm");
    setIsOpen(!isOpen);
  };

  const menuCloseClickHandler = () => {
    document.getElementById("content")!.classList.remove("blur-sm");
    setIsOpen(false);
  };

  useEffect(() => {
    document
      .getElementById("content")!
      .addEventListener("click", (evt) => menuCloseClickHandler());
  }, []);

  return (
    <>
      <div
        className={`cursor-pointer overflow-hidden rounded bg-neutral-100 transition-all duration-200 ease-in ${
          isOpen ? "h-64" : "h-0"
        }`}
        onClick={(event) => menuCloseClickHandler()}
      >
        <div className="my-10 flex flex-col font-bold text-neutral-700">
          <NavItem
            link={"/dashboard/resources"}
            label={"Resources"}
            Icon={<Briefcase size={20} />}
          />
          <NavItem
            link={"/dashboard/blogs"}
            label={"Blogs"}
            Icon={<BookText size={20} />}
          />
          <NavItem
            link={"/dashboard/forums"}
            label={"Forums"}
            Icon={<MessagesSquare size={20} />}
          />
        </div>
        <div className="mt-auto border-y">
          <div className="flex cursor-pointer items-center gap-4 border-l-4 border-transparent p-4 text-sm hover:border-neutral-800 hover:bg-white">
            <LogOut size={20} />
            <p>Logout</p>
          </div>
        </div>
      </div>

      <div
        className="flex w-full items-center justify-between rounded bg-neutral-200 p-2"
        onClick={(event) => menuOpenClickHandler(event)}
      >
        <h1 className="text-sm font-bold text-neutral-700">Menu</h1>
        <Plus className={`${isOpen && "rotate-45"}`} />
      </div>
    </>
  );
};
