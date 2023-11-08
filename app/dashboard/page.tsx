// @flow
import * as React from 'react';
import {Briefcase , BookText , MessagesSquare} from "lucide-react";

const Page = () => {
    return (
        <div className="h-full min-h-screen flex relative">
            <div className="bg-neutral-100 fixed h-screen w-64 custom-filter">
                <div>
                     Logo
                </div>
                <div className="font-bold text-neutral-700 flex flex-col py-12">
                    <div className="flex gap-4 items-center p-4 cursor-pointer hover:bg-white ">
                        <Briefcase/>
                        <p>Resources</p>
                    </div>
                    <div className="flex gap-4 items-center p-4 cursor-pointer hover:bg-white ">
                        <BookText />
                        <p>Blogs</p>
                    </div>
                    <div className="flex gap-4 items-center p-4 cursor-pointer hover:bg-white ">
                        <MessagesSquare />
                        <p>Forums</p>
                    </div>
                </div>
            </div>
            <div className="grow h-[300vh] ml-64">
                <p>Content</p>
            </div>
        </div>
    );
};

export default Page;