// @flow
import * as React from "react";
import {
    ChevronDown,
    ChevronUp, MessageSquare, Pencil, Search
} from "lucide-react";

const Page = () => {
    return (
        <div className="relative flex flex-col gap-4 max-w-2xl mx-auto">
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
                    <p className="text-xm font-bold font-mono">Ask</p>
                    <Pencil size={16}/>
                </div>
            </div>
            <Question/>
            <Question/>
            <Question/>
            <Question/>
        </div>
    );
};

function Question() {
    return (
        <div className="p-4 rounded-md flex gap-4 bg-neutral-100 cursor-pointer border-2 border-transparent hover:border-neutral-500">
            <div className="text-sm flex flex-col justify-between font-bold text-neutral-400 w-24 font-mono">
                <p className="flex gap-2 hover:text-neutral-900 cursor-pointer"><span>0</span> <ChevronUp absoluteStrokeWidth size={18}/></p>
                <p className="flex gap-2 hover:text-neutral-900 cursor-pointer"><span>0</span> <MessageSquare absoluteStrokeWidth size={16}/></p>
                <p className="flex gap-2 hover:text-neutral-900 cursor-pointer"><span>0</span> <ChevronDown absoluteStrokeWidth size={18}/></p>
            </div>
            <div className="grow flex flex-col gap-2 py-3">
                <h1 className="text-xl font-bold text-neutral-800">C++: Bitwise operation to get symmetrical bits?</h1>
                <div className="flex items-center flex-wrap">
                    <div className="flex flex-wrap gap-1">
                        <span
                            className="bg-blue-50 text-neutral-600 font-mono font-bold p-1 text-xs rounded-md flex items-center justify-center leading-3">Math</span>
                        <span
                            className="bg-blue-50 text-neutral-600 font-mono font-bold p-1 text-xs rounded-md flex items-center justify-center leading-3">NumberTheory</span>
                        <span
                            className="bg-blue-50 text-neutral-600 font-mono font-bold p-1 text-xs rounded-md flex items-center justify-center leading-3">MathNerd</span>
                    </div>
                    <div className="grow flex justify-end items-center gap-2">
                        <div className="w-4 aspect-square bg-neutral-600 rounded-full">

                        </div>
                        <p className="text-sm font-bold text-neutral-600">toky</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;