import React from "react";
import Btn from "../ui/Btn";

const Contact = () => {
  return (
    <div className="container mx-auto my-16">
      <div className="container mx-auto mb-24">
        <div className="mb-32">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:pe-3 lg:pe-6">
              <div className="fGUYkB relative px-4 py-8">
                <p className="mb-8 text-lg lg:text-2xl">
                  Discover quality educational resources to stimulate your
                  personal and academic growth.
                </p>

                <p className="mb-8 text-lg font-medium text-gray-700">
                  you'll uncover a wealth of educational resources meticulously
                  selected to ignite your personal and academic development. We
                  believe in the transformational potential of knowledge and
                  learning.
                </p>

                <Btn
                  roundedMd={false}
                  btnClass="bg-[#f5b98a] text-white font-semibold uppercase"
                >
                  Find Resources
                </Btn>
              </div>
            </div>

            <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:ps-3 lg:ps-6">
              <div className="bLEAHt relative px-4 py-8">
                <p className="mb-8 text-lg lg:text-2xl">
                  Be part of a platform that values and supports teachers in
                  sharing quality teaching resources.
                </p>
                <p className="mb-8 text-lg font-medium text-gray-700">
                  Join our platform, where we encourages teachers to share their
                  valuable teaching materials. Together, we can enhance
                  educational standards to make a real impact on their students'
                  lives.
                </p>
                <Btn
                  roundedMd={false}
                  btnClass="bg-[#7badcf] text-white font-semibold uppercase"
                >
                  <a href="#" className="py-4">
                    Share Resources to the Community
                  </a>
                </Btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
