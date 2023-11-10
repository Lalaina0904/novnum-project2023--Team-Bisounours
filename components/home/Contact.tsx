import React from "react";
const Contact = () => {
  return (
    <div className="container mx-auto my-16">
      <div className="container mx-auto my-24">
        <div className="mb-32">
          <div className="flex flex-wrap">
            <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
              <h2 className="font-bol mb-6 text-3xl">Contact us</h2>
              <div className="mb-6">
                <p className="mb-3 font-semibold">
                  {" "}
                  We&apos;d Love to Hear From You!
                </p>

                <p>
                  Have questions, inquiries, or feedback? Get in touch with us
                  through the contact information provided below. Our dedicated
                  team is here to assist you and ensure your experience with us
                  is nothing short of exceptional.
                </p>
              </div>
              <p className="mb-2 text-neutral-800">
                Antananarivo, 101, Madagascar
              </p>
              <p className="mb-2 text-neutral-800">+ 261 34 49 000 00</p>
              <p className="mb-2 text-neutral-800">hayra@outlook.com</p>
            </div>
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
              <form>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className={`peer-focus:text-primary dark:peer-focus:text-primary peer block min-h-[auto] w-full border-2 border-gray-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
                    id="name"
                    placeholder="Name"
                  />
                  <label
                    className="absolute -top-3 left-0 mx-1 cursor-text bg-white px-1 text-sm text-white transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-800 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-gray-400"
                    htmlFor="name"
                  >
                    Name
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="email"
                    className={`peer-focus:text-primary dark:peer-focus:text-primary peer block min-h-[auto] w-full border-2 border-gray-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
                    id="email"
                    placeholder="Email address"
                  />
                  <label
                    className="absolute -top-3 left-0 mx-1 cursor-text bg-white px-1 text-sm text-white transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-800 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-gray-400"
                    htmlFor="email"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    className={`peer block min-h-[auto] w-full border-2 border-gray-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
                    id="message"
                    rows={3}
                    placeholder="Your message"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute -top-3 left-0 mx-1 cursor-text bg-white px-1 text-sm text-white transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-800 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-gray-400"
                  >
                    Message
                  </label>
                </div>
                <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                  <input
                    className="checked:border-primary checked:bg-primary dark:checked:border-primary dark:checked:bg-primary relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    value=""
                    id="exampleCheck96"
                    defaultChecked={true}
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="exampleCheck96"
                  >
                    Send me a copy of this message
                  </label>
                </div>

                {/* Send Btn */}
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="pb-2s mb-6 inline-block w-full bg-gray-100 px-6 py-2.5 font-medium uppercase leading-normal text-gray-700 transition duration-150 ease-in-out"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
