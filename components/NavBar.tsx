import * as React from "react";
import Link from "next/link";
import { AiOutlineBell } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { LiaUserCircle } from "react-icons/lia";
import Image from "next/image";
import Logo from "../public/assets/logoLight.svg";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Destination",
    url: "/destinations",
  },
  {
    id: 3,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav className="ease-in-outs custom-filter fixed top-0 z-30 w-full py-4 transition duration-300 md:bg-opacity-90">
      <div className="container mx-auto px-6">
        <div className="mx-auto">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2 ">
              <Image src={Logo} alt="Logo" className="w-16 invert-[0.3]" />
              <p className="text-3xl font-medium text-[#838e90]">Hayra</p>
            </div>

            <div className="flex items-center gap-8">
              <div>
                <div className="relative mx-auto pt-2 text-gray-600">
                  <input
                    className="h-10 rounded-[1rem] bg-white bg-opacity-50 px-5 pr-16 text-sm focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Search"
                  />
                </div>
              </div>

              <ul className="flex space-x-5">
                <Link href="">
                  <BsSun className="text-2xl" />
                </Link>

                <Link href="">
                  <AiOutlineBell className="text-2xl" />
                </Link>

                <Link href="">
                  <LiaUserCircle className="text-2xl" />
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
