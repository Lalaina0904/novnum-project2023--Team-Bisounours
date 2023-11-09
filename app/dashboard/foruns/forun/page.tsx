// @flow
import * as React from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

const Page = () => {
  return (
    <div className="relative flex gap-6 mx-auto max-w-2xl">
      <div>
        <div className="flex flex-col justify-between items-center gap-4">
          <div className="bg-neutral-100 p-1 rounded-full">
            <ChevronUp />
          </div>
          <p className="text-xs font-bold font-mono">10</p>
          <div className="bg-neutral-100 p-1 rounded-full">
            <ChevronDown />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6 border-b">
          <div className="border-b pb-4">
            <h1 className="text-3xl font-bold mb-6">
              C++: Bitwise operation to get symmetrical bits?
            </h1>
            <div className="text-sm flex justify-between font-bold text-neutral-700">
              <p>0 votes</p>
              <p>0 reponses</p>
              <p>0 vues</p>
            </div>
          </div>
          <p>
            Excuse me for my english. I have a number of int values stored in it from 0 to 255. To find out what lies in
            7
            bit number, I translate the numbers into a binary system, then in the line and check the line:
          </p>

          <pre>
             <code>
{
  `
if (informationOctet_.substr(6, 1) == "0")
  {
    ...
  }
  `
}
             </code>
           </pre>
        </div>

        <div>
          <p className="font-bold">2 Answer</p>
        </div>

        <div className="flex flex-col divide-y">
          <div className="flex gap-6 py-8">
            <div className="">
              <div className="flex flex-col justify-between items-center gap-4">
                <div className="bg-neutral-100 p-0.5 rounded-full">
                  <ChevronUp absoluteStrokeWidth size={16}/>
                </div>
                <p className="text-xs font-bold font-mono">10</p>
                <div className="bg-neutral-100 p-0.5 rounded-full">
                  <ChevronDown absoluteStrokeWidth size={16}/>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-2">
                <ol className="list-decimal list-inside flex flex-col gap-2">
                  <li>
                    {
                      `
                    This is implementation-defined and depends on the endianess of the CPU. If you are smart though, you
                    do the check like this: the_int & 0xFF, which will always give you the least significant byte no
                    matter endianess.
                  `
                    }
                  </li>
                  <li>
                    {
                      `
                      Maybe. Note that bit counting is zero-indexed (just like arrays), so you have to be careful with
                      the terms. "Bit 6" and "the 6th bit" may have different meanings. Always enumerate bits as 7 6 5 4 3 2
                      1 0, then it will be consistent with the C code.
                    `
                    }
                  </li>
                </ol>
                <div className="font-mono text-xs flex flex-col items-end">
                  <p>Answered 21 jan 2023</p>
                  <p className="italic font-bold">By Toky</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 py-8">
            <div className="">
              <div className="flex flex-col justify-between items-center gap-4">
                <div className="bg-neutral-100 p-0.5 rounded-full">
                  <ChevronUp absoluteStrokeWidth size={16}/>
                </div>
                <p className="text-xs font-bold font-mono">10</p>
                <div className="bg-neutral-100 p-0.5 rounded-full">
                  <ChevronDown absoluteStrokeWidth size={16}/>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-2">
                <ol className="list-decimal list-inside flex flex-col gap-2">
                  <li>
                    {
                      `
                    This is implementation-defined and depends on the endianess of the CPU. If you are smart though, you
                    do the check like this: the_int & 0xFF, which will always give you the least significant byte no
                    matter endianess.
                  `
                    }
                  </li>
                  <li>
                    {
                      `
                      Maybe. Note that bit counting is zero-indexed (just like arrays), so you have to be careful with
                      the terms. "Bit 6" and "the 6th bit" may have different meanings. Always enumerate bits as 7 6 5 4 3 2
                      1 0, then it will be consistent with the C code.
                    `
                    }
                  </li>
                </ol>
                <div className="font-mono text-xs flex flex-col items-end">
                  <p>Answered 21 jan 2023</p>
                  <p className="italic font-bold">By Toky</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Page;