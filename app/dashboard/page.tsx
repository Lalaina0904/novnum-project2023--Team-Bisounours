// @flow
import * as React from 'react';
import {Briefcase, BookText, MessagesSquare, Search} from "lucide-react";
import Image from "next/image";

const Page = () => {
    return (
        <div className="h-full min-h-screen flex relative">
            <div className="fixed h-screen w-48 custom-filter bg-opacity-100 py-6 z-50">
                <div className="px-4 flex items-center gap-4">
                     <div className="w-10">
                         <Image className="w-full h-auto" width={200} height={200} src={"/assets/logoDark.svg"} alt={""}/>
                     </div>
                    <p className="font-bold text-xl">Hayra</p>
                </div>
                <div className="font-bold text-neutral-700 flex flex-col border-t border-b my-16">
                    <div className="text-sm flex gap-4 items-center p-4 cursor-pointer hover:bg-white border-transparent border-l-4 hover:border-neutral-800">
                        <Briefcase size={20}/>
                        <p>Resources</p>
                    </div>
                    <div className="text-sm flex gap-4 items-center p-4 cursor-pointer hover:bg-white border-transparent border-l-4 hover:border-neutral-800">
                        <BookText  size={20}/>
                        <p>Blogs</p>
                    </div>
                    <div className="text-sm flex gap-4 items-center p-4 cursor-pointer hover:bg-white border-transparent border-l-4 hover:border-neutral-800">
                        <MessagesSquare  size={20}/>
                        <p>Forums</p>
                    </div>
                </div>
            </div>
            <div className="grow h-[300vh] ml-48 py-4 relative">
                <div className="pl-48 fixed w-full flex left-0 top-0 py-6 custom-filter bg-white justify-between">
                    <div className="px-2 bg-white mx-6 relative text-gray-600 border rounded-md w-96 overflow-hidden flex items-center">
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
                        <p>toky</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;