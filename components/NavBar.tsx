import * as React from "react";
import Link from "next/link";
import {AiOutlineBell} from "react-icons/ai";
import {BsSun} from "react-icons/bs";
import {LiaUserCircle} from "react-icons/lia";

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
        <nav
            className="py-4 fixed top-0 w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-outs custom-filter">
            <div className="container mx-auto px-6">
                <div className="mx-auto">
                    <div className="flex items-center gap-5 justify-between w-full">
                        <div className="text-2xl">
                            {/* <Image src={Logo} alt="Logo" className="w-16" /> */}
                            <p>Logo</p>
                        </div>

                        <div className="flex items-center gap-8">
                            <div>
                                <div className="pt-2 relative mx-auto text-gray-600">
                                    <input
                                        className="bg-white bg-opacity-50 h-10 px-5 pr-16 rounded-[1rem] text-sm focus:outline-none"
                                        type="search"
                                        name="search"
                                        placeholder="Search"
                                    />
                                </div>
                            </div>

                            <ul className="flex space-x-5">
                                <Link href="">
                                    <BsSun className="text-2xl"/>
                                </Link>

                                <Link href="">
                                    <AiOutlineBell className="text-2xl"/>
                                </Link>

                                <Link href="">
                                    <LiaUserCircle className="text-2xl"/>
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
