// @flow
import * as React from "react";
import Image from "next/image";

const Page = () => {
    return (
        <div className="relative flex flex-col gap-6 mx-auto max-w-2xl">
            <div className="flex gap-4 items-center">
                <div
                    className="w-12 aspect-square bg-white rounded-full overflow-hidden border-2 flex items-center justify-center">
                    <Image className="w-full h-auto" width={40} height={40}
                           src={"https://avatars.githubusercontent.com/u/69815340?v=4"} alt={""}/>
                </div>
                <div>
                    <p className="font-bold">Ein</p>
                    <p className="text-xs font-mono">Cs student</p>
                </div>
            </div>
            <h1 className="text-3xl font-bold">
                Exploring the World of Machine Learning
            </h1>

            <div className="flex flex-wrap gap-1 mt-auto ">
        <span
            className="bg-blue-50 p-1 text-xs rounded-md flex items-center justify-center leading-3 font-mono">Math</span>
                <span
                    className="bg-blue-50 p-1 text-xs rounded-md flex items-center justify-center leading-3 font-mono">NumberTheory</span>
                <span
                    className="bg-blue-50 p-1 text-xs rounded-md flex items-center justify-center leading-3 font-mono">MathNerd</span>
            </div>

            <div className="flex flex-col gap-6 font-mono">
                <p className="font-mono">
                    Machine learning, a subset of artificial intelligence, is revolutionizing the way we interact with
                    technology and data. It has become an integral part of our daily lives, from virtual assistants like
                    Siri and Alexa to personalized product recommendations on e-commerce websites. In this blog, we'll
                    embark on a journey to explore the captivating world of machine learning, its fundamental concepts,
                    real-world applications, and the incredible potential it holds for the future.
                </p>

                <p className="font-mono">
                    Machine learning is a subfield of artificial intelligence that focuses on enabling computers to
                    learn from data and improve their performance on specific tasks without being explicitly programmed.
                    Instead of following predefined rules, machine learning systems use algorithms to identify patterns,
                    make predictions, and adapt to new data. There are three main types of machine learning:
                </p>

                <p className="font-mono">
                    Curious about new things, I turned on “Dev mode” in the design file, hoping it would make things
                    easier.
                </p>

                <p className="font-mono">
                    Supervised Learning: In supervised learning, a model is trained on a labeled dataset, which means
                    that the input data is paired with the correct output. The model learns to make predictions by
                    finding patterns in the data.
                </p>
            </div>

            <div className="flex gap-4 items-start">
                <div
                    className="w-10 aspect-square bg-white rounded-full overflow-hidden border-2 flex items-center justify-center">
                    <Image className="w-full h-auto" width={40} height={40}
                           src={"https://avatars.githubusercontent.com/u/69815340?v=4"} alt={""}/>
                </div>
                <div className="grow">
                    <textarea className="w-full border rounded-md"/>
                </div>
            </div>


            <div className="flex gap-4 items-start border-t py-6">
                <div
                    className="w-10 aspect-square bg-white rounded-full overflow-hidden border-2 flex items-center justify-center">
                    <Image className="w-full h-auto" width={40} height={40}
                           src={"https://avatars.githubusercontent.com/u/69815340?v=4"} alt={""}/>
                </div>
                <div className="grow flex flex-col gap-2">
                    <p className="font-bold">Noface</p>
                    <p className="w-full p-2 border rounded-md">
                        Really cool series here, Ein! Appreciate ya sharing.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page;