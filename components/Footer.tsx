import * as React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid-cols-4 gap-5 py-8 text-gray-600 md:grid">
          <div className="col-span-2">
            <p className="text-3xl">Newsletter</p>
            <p className="my-4">
              Subscribe to our newsletter and get our newest updates right on
              your inbox.
            </p>
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                className="outline-nones mt-2 w-1/2 rounded-md rounded-r-none border border-gray-400 py-3 pl-2 pr-2 font-semibold text-gray-800"
              />
              <button className="mt-2 inline-flex transform items-center rounded-lg rounded-l-none border bg-gray-900 px-6 py-3 transition duration-500 ease-in-out">
                <a className="font-medium text-white" href="/">
                  <span className="justify-center">Subscribe</span>
                </a>
              </button>
            </div>
          </div>

          <div className="my-4 lg:my-0">
            <p className="text-2xl font-semibold">Need help?</p>
            <p>
              <a href="#" className="text-[0.8rem] text-gray-600">
                Manage my account
              </a>
            </p>

            <p>
              <a href="#" className="text-[0.8rem] text-gray-600">
                Assistance
              </a>
            </p>

            <p>
              <a href="#" className="text-[0.8rem] text-gray-600">
                Best price guaranteed
              </a>
            </p>
          </div>

          <div className="my-4 lg:my-0">
            <p className="text-2xl font-semibold">Social medias </p>

            <div className="mt-4 flex gap-4">
              <a href="">
                <AiFillFacebook className="text-2xl" />
              </a>
              <a href="">
                <AiFillInstagram className="text-2xl" />
              </a>
              <a href="">
                <AiFillLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col-reverse justify-between border-t border-gray-400 bg-top pb-4 pt-5 lg:flex-row">
          <ul className="flex flex-col space-y-2 sm:flex-row sm:space-x-5 sm:space-y-0 lg:mb-0">
            <li>
              <a
                href="/"
                className="hover:text-deep-purple-accent-400 text-sm text-gray-700 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-deep-purple-accent-400 text-sm text-gray-700 transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-deep-purple-accent-400 text-sm text-gray-700 transition-colors duration-300"
              >
                Ad Choices
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-deep-purple-accent-400 text-sm text-gray-700 transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-deep-purple-accent-400 text-sm text-gray-700 transition-colors duration-300"
              >
                Partners
              </a>
            </li>
          </ul>
          <ul className="mb-3 flex flex-col space-y-2 sm:flex-row sm:space-x-5 sm:space-y-0 lg:mb-0">
            <a
              href="/"
              className="hover:text-deep-purple-accent-400 text-sm tracking-tight text-gray-700 transition-colors duration-300"
            >
              © 2023 NovNum Inc.
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
