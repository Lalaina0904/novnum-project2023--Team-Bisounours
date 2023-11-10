import * as React from "react";
import { User } from "./user";
import { ModeToggle } from "./modeToggle";
import { Input } from "../ui/input";

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
    <nav className="ease-in-outs custom-filter sticky top-0 z-30 w-full border-b border-accent py-4 transition duration-300 md:bg-background/90">
      <div className="container mx-auto px-6">
        <div className="mx-auto">
          <div className="flex w-full items-center justify-between gap-5">
            <div className="text-2xl">
              {/* <Image src={Logo} alt="Logo" className="w-16" /> */}
              <p>Logo</p>
            </div>

            <div className="flex items-center gap-8">
              <div>
                <div className="relative mx-auto pt-2">
                  <Input placeholder="Search" name="search" />
                </div>
              </div>

              <ul className="flex items-center space-x-2">
                <ModeToggle />
                <User />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
