// @flow
import * as React from "react";
import {Briefcase, BookText, MessagesSquare, Search, LogOut, FileText, Video , Link , Computer , Plus, File} from "lucide-react";
import Image from "next/image";

const Page = () => {
    return (
        <div>
            <div className="flex justify-end mb-6 gap-2 flex-wrap">
                <div
                    className="px-2 mr-auto grow bg-white relative text-gray-600 border rounded-md max-w-md overflow-hidden flex items-center">
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
                <div
                    className="w-max p-3 bg-neutral-50 rounded-md text-sm flex gap-1 items-center cursor-pointer text-neutral-800 border border-neutral-300">
                    <p className="text-xm font-bold font-mono">Add Resources</p>
                    <Plus size={18}/>
                </div>
            </div>

            <div className="relative gap-4 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <Resource
                    fileName={"Imaginary Number"}
                    author={"Pr Proton"}
                    tag={["math" , "number"]}
                    date={"9 Nov 2023"}
                    type={"software"}
                    description={"Learn Complex number the easy ay with this doc"}
                 />
            </div>
        </div>
    );
};

type IResource = {
    type: "document" | "video" | "link" | "software",
    fileName: string,
    description: string,
    author: string,
    date: string,
    tag: string[]
}

function Resource({type, fileName, author, description, tag, date}: IResource) {
    return (
        <div className="flex gap-3 h-min p-2 hover:bg-neutral-100 cursor-pointer rounded-md border items-start">
            <div
                className="relative aspect-square p-3 bg-neutral-200 rounded-md flex items-center justify-center text-neutral-600">
                {
                    type === "document" && <File absoluteStrokeWidth size={18}/> ||
                    type === "link" && <Link absoluteStrokeWidth size={18}/> ||
                    type === "video" && <Video absoluteStrokeWidth size={18}/> ||
                    type === "software" && <Computer absoluteStrokeWidth size={18}/>
                }
            </div>
            <div className="flex flex-col grow gap-2">
                <div className="flex text-neutral-400 items-center justify-between mr-auto">
                    <h2 className="font-bold text-lg text-neutral-800">{fileName}</h2>
                </div>
                <p className="text-sm text-neutral-600">
                    {description}
                </p>
                <div className="gap-2 flex flex-wrap">
                    <div className="flex flex-wrap gap-1">
                        {
                            tag.map((tag , index) => (
                                <span
                                    key={index}
                                    className="bg-blue-50 p-1 text-xs rounded-md flex items-center justify-center leading-3">
                                    {tag}
                                </span>
                            ))
                        }
                    </div>
                    <div className="text-neutral-400 text-xs underline flex ml-auto">
                        {author} , <span className="italic">{date}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;