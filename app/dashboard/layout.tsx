"use client";

import React, { useEffect, useState } from "react";
import {
  BookText,
  Briefcase,
  LogOut,
  MessagesSquare,
  Search,
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
    <div className="container">
      <div className="flex gap-12 h-[calc(100vh-82px)]">
        <div className="sticky top-[82px] flex h-full w-48 flex-col border-r py-10">
          <div className="my-10 flex flex-col font-bold">
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
              link={"/dashboard/foruns"}
              label={"Forums"}
              Icon={<MessagesSquare size={20} />}
            />
          </div>
        </div>
        <div className="py-8 flex-grow">
          {children}
        </div>
      </div>
    </div>
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
    pathname.includes(link) ? setIsVisited(true) : setIsVisited(false);
  }, [link, pathname]);

  return (
    <Link
      href={link}
      className={`flex cursor-pointer items-center gap-4 border-l-4 border-transparent p-4 text-sm hover:border-foreground/80 ${
        isVisited && "border-foreground/80 bg-accent"
      }`}
    >
      {Icon}
      <p>{label}</p>
    </Link>
  );
}
