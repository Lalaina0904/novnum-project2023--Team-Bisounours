import * as React from "react";
import { User } from "./user";
import { ModeToggle } from "./modeToggle";

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
    <nav className="ease-in-outs custom-filter border-accent md:bg-background/90 sticky top-0 z-30 w-full border-b py-4 transition duration-300">
      <div className="container mx-auto px-6">
        <div className="mx-auto">
          <div className="flex w-full items-center justify-between gap-5">
            <div className="text-2xl">
              {/* <Image src={Logo} alt="Logo" className="w-16" /> */}
              <p>Logo</p>
            </div>

            <div className="flex items-center gap-8">
              <div>
                <div className="relative mx-auto pt-2 text-gray-600">
                  <input
                    className="bg-accent h-10 rounded-[1rem] px-5 pr-16 text-sm focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Search"
                  />
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
