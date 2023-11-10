// @flow
import * as React from "react";
import {
    Briefcase,
    BookText,
    MessagesSquare,
    Search,
    LogOut,
    FileText,
    Heart,
    MessageSquare,
    Bookmark, Plus, Pencil
} from "lucide-react";
import Image from "next/image";
import Link from "next/link"

const Page = () => {
    return (
        <div className="relative flex flex-col gap-6 mx-auto max-w-2xl">

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
                    <p className="text-xm font-bold font-mono">Write</p>
                    <Pencil size={16}/>
                </div>
            </div>

            <Blog author={"Ein"}
                  authorPic={"https://avatars.githubusercontent.com/u/69815340?v=4"}
                  date={"Nov 8 (25min ago)"}
                  tag={["machine learning", "artificial intelligence", "data science"]}
                  comment={20}
                  title={"Exploring the World of Machine Learning"}
                  hearth={10}/>

            <Blog author={"Ein"}
                  authorPic={"https://avatars.githubusercontent.com/u/69815340?v=4"}
                  date={"Nov 8 (25min ago)"}
                  tag={["machine learning", "artificial intelligence", "data science"]}
                  comment={20}
                  title={"Mastering the Art of Digital Photography"}
                  hearth={10}/>

            <Blog author={"Ein"}
                  authorPic={"https://avatars.githubusercontent.com/u/69815340?v=4"}
                  date={"Nov 8 (25min ago)"}
                  tag={["blockchain", "cryptocurrency", "decentralized"]}
                  comment={20}
                  title={"Demystifying Blockchain Technology"}
                  hearth={10}/>
        </div>
    );
};

type IBlog = {
    title: string,
    author: string,
    hearth: number,
    comment: number,
    date: string,
    authorPic: string,
    tag: string[]
}

export function Blog({title, author, authorPic, comment, date, hearth , tag}: IBlog) {
    return (
        <Link
            href={"/dashboard/blogs/blog"}
            className="border bg-neutral-50 p-4 rounded-md flex flex-col gap-6">
            <div className="flex gap-2">
                <div
                    className="w-12 aspect-square bg-white rounded-full overflow-hidden border-2 flex items-center justify-center">
                    <Image className="w-full h-auto" width={40} height={40}
                           src={authorPic} alt={""}/>
                </div>
                <div>
                    <p className="font-bold">{author}</p>
                    <p className="text-xs font-mono">{date}</p>
                </div>
            </div>
            <div className="pl-14 flex flex-col gap-3">
                <h1 className="text-2xl font-bold">
                    {title}
                </h1>
                <div className="flex flex-wrap gap-1">
                    {
                        tag.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-blue-50 p-1 text-xs rounded-md flex items-center justify-center leading-3">
                                    {tag}
                                </span>
                        ))
                    }
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="font-bold flex gap-2 items-center text-xs text-neutral-400 font-mono">
                    <Heart absoluteStrokeWidth size={20}/>
                    <p>{hearth}</p>
                </div>
                <div className="font-bold flex gap-2 items-center text-xs text-neutral-400 font-mono">
                    <MessageSquare absoluteStrokeWidth size={20}/>
                    <p>{comment}</p>
                </div>
                <div className="font-bold flex gap-2 items-center text-xs text-neutral-400 font-mono">
                    <Bookmark absoluteStrokeWidth size={20}/>
                </div>
            </div>
        </Link>
    )
}

export default Page;