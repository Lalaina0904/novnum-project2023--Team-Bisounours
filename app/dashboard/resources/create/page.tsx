// @flow
import * as React from "react";
import {
  Briefcase,
  BookText,
  MessagesSquare,
  Search,
  LogOut,
  FileText,
  DownloadCloud,
  Upload,
  UploadCloud
} from "lucide-react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="relative flex flex-col gap-6 max-w-2xl">
      <h2 className="font-bold text-xl">Add your content to the community</h2>
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="font-bold">Content title</label>
        <div className="w-full h-14 border-2 border-neutral-300 rounded overflow-hidden">
          <input
            id="title"
            className="w-full h-full p-2 font-bold text-neutral-900 placeholder:text-neutral-400 focus-visible:outline-0"
            type="text"
            placeholder={"Title"}/>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="font-bold">Description</label>
        <div className="w-full h-20 border-2 border-neutral-300 rounded overflow-hidden">
          <textarea
            id="title"
            className="w-full h-full p-2 font-bold text-neutral-900 placeholder:text-neutral-400 placeholder:text-xs focus-visible:outline-0"
            placeholder={"Content preview..."}/>
        </div>
      </div>


      <div className="flex items-center justify-center w-full">
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <div className="text-neutral-500"><UploadCloud/></div>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">PDF, TXT or Images (MAX. 90Mb)</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>

      <div className="text-center bg-neutral-200 p-3 rounded font-bold text-neutral-600 cursor-pointer">
          Upload
      </div>

    </div>
  );
};

export default Page;