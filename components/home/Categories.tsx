import React from "react";
const Contact = () => {
  return (
    <div className="container mx-auto my-16">
      <div className="container mx-auto my-24">
        <div className="mb-32">
          <div className="flex flex-wrap">
            <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
              <div>
                <p>
                  Be part of a platform that values and supports teachers in
                  sharing quality teaching resources.
                </p>
                <button>Share Resources to the Community</button>
              </div>
            </div>

            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
              <div>
                <p>
                  Discover quality educational resources to stimulate your
                  personal and academic growth.
                </p>
                <button>Find Resources</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
