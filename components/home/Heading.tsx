import * as React from "react";
import Image from "next/image";

export const Heading = () => {
    return (
        <header className="bg-primary-dark flex flex-col items-center h-[90vh] mb-24">
            <section className="text-primary-light container grow items-center mx-auto flex px-2 md:py-[64px] lg:py-[96px] z-[1]">
                <div className="w-full lg:w-2/3">
                    <h1 className="text-4xl md:text-5xl mb-6 font-semibold">
                        Explore a world of collaborative learning where your
                        skills grow through sharing
                    </h1>
                    <h2 className="font-alata text-2xl mb-4 w-4/5 md:py-8">
                        We are focused on a collective intelligence approach
                    </h2>
                    <p className="text-lg mb-32 md:mb-0 opacity-50">
                        We promote collaboration, sharing, and co-creation of
                        educational resources, placing the human element at the
                        center of our approach to develop the education sector
                        in Madagascar. Our goal is to create a collaborative
                        learning environment where students, teachers, and
                        education experts come together to revolutionize
                        education in Madagascar by harnessing the collective
                        wisdom of our educational community
                    </p>
                </div>
                <div className="w-2/5 justify-center hidden lg:flex invert-0 animate-spinAnime">
                    {/* <Image
                        className="invert"
                        width={250}
                        height={200}
                        src={"/image/spinner.svg"}
                        alt={"spinner image"}
                    /> */}
                </div>
            </section>
        </header>
    );
};

export default Heading;
