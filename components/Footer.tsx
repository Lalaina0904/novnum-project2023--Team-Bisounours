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
                <div className="md:grid grid-cols-4 gap-5 py-8 text-gray-600">
                    <div className="col-span-2">
                        <p className="text-3xl">Newsletter</p>
                        <p className="my-4">
                            Subscribe to our newsletter and get our newest
                            updates right on your inbox.
                        </p>
                        <div>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                className="outline-nones border border-gray-400 w-1/2 pr-2 pl-2 py-3 mt-2 rounded-r-none rounded-md text-gray-800 font-semibold"
                            />
                            <button className="inline-flex items-center px-6 py-3 mt-2 transition duration-500 ease-in-out transform border rounded-l-none rounded-lg bg-gray-900">
                                <a className="font-medium text-white" href="/">
                                    <span className="justify-center">
                                        Subscribe
                                    </span>
                                </a>
                            </button>
                        </div>
                    </div>

                    <div className="my-4 lg:my-0">
                        <p className="font-semibold text-2xl">Need help?</p>
                        <p>
                            <a href="#" className="text-[0.8rem] text-gray-600">
                                Manage my bookings
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
                        <p className="font-semibold text-2xl">Social medias </p>

                        <div className="flex mt-4 gap-4">
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

                <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-gray-400 mt-5">
                    <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                        <li>
                            <a
                                href="/"
                                className="text-sm text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                Terms of Service
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="text-sm text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="text-sm text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                Ad Choices
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="text-sm text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                Cookie Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="text-sm text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                Partners
                            </a>
                        </li>
                    </ul>
                    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                        <a
                            href="/"
                            className="text-sm text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400 tracking-tight"
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
