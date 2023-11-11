// @flow
import * as React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="relative mx-auto flex max-w-2xl flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="flex aspect-square w-12 items-center justify-center overflow-hidden rounded-full border-2 bg-white">
          <Image
            className="h-auto w-full"
            width={40}
            height={40}
            src={"https://avatars.githubusercontent.com/u/69815340?v=4"}
            alt={""}
          />
        </div>
        <div>
          <p className="font-bold">Ein</p>
          <p className="font-mono text-xs">Cs student</p>
        </div>
      </div>
      <h1 className="text-3xl font-bold">
        Exploring the World of Machine Learning
      </h1>

      <div className="mt-auto flex flex-wrap gap-1 ">
        <span className="flex items-center justify-center rounded-md bg-blue-50 p-1 px-2 text-sm leading-3 dark:bg-neutral-700 dark:text-neutral-300">
          Math
        </span>
        <span className="flex items-center justify-center rounded-md bg-blue-50 p-1 px-2 text-sm leading-3 dark:bg-neutral-700 dark:text-neutral-300">
          NumberTheory
        </span>
        <span className="flex items-center justify-center rounded-md bg-blue-50 p-1 px-2 text-sm leading-3 dark:bg-neutral-700 dark:text-neutral-300">
          MathNerd
        </span>
      </div>

      <div className="flex flex-col gap-6 font-mono">
        <p className="font-mono">
          Machine learning, a subset of artificial intelligence, is
          revolutionizing the way we interact with technology and data. It has
          become an integral part of our daily lives, from virtual assistants
          like Siri and Alexa to personalized product recommendations on
          e-commerce websites. In this blog, we &apos; ll embark on a journey to
          explore the captivating world of machine learning, its fundamental
          concepts, real-world applications, and the incredible potential it
          holds for the future.
        </p>

        <p className="font-mono">
          Machine learning is a subfield of artificial intelligence that focuses
          on enabling computers to learn from data and improve their performance
          on specific tasks without being explicitly programmed. Instead of
          following predefined rules, machine learning systems use algorithms to
          identify patterns, make predictions, and adapt to new data. There are
          three main types of machine learning:
        </p>

        <p className="font-mono">
          Curious about new things, I turned on “Dev mode” in the design file,
          hoping it would make things easier.
        </p>

        <p className="font-mono">
          Supervised Learning: In supervised learning, a model is trained on a
          labeled dataset, which means that the input data is paired with the
          correct output. The model learns to make predictions by finding
          patterns in the data.
        </p>
      </div>

      <div className="flex items-start gap-4">
        <div className="flex aspect-square w-10 items-center justify-center overflow-hidden rounded-full border-2 bg-white">
          <Image
            className="h-auto w-full"
            width={40}
            height={40}
            src={"https://avatars.githubusercontent.com/u/69815340?v=4"}
            alt={""}
          />
        </div>
        <div className="grow">
          <textarea className="w-full rounded-md border" />
        </div>
      </div>

      <div className="flex items-start gap-4 border-t py-6">
        <div className="flex aspect-square w-10 items-center justify-center overflow-hidden rounded-full border-2 bg-white">
          <Image
            className="h-auto w-full"
            width={40}
            height={40}
            src={"https://avatars.githubusercontent.com/u/69815340?v=4"}
            alt={""}
          />
        </div>
        <div className="flex grow flex-col gap-2">
          <p className="font-bold">Noface</p>
          <p className="w-full rounded-md border p-2">
            Really cool series here, Ein! Appreciate ya sharing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
