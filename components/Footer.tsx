import * as React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid-cols-4 gap-5 py-8 md:grid">
          <div className="col-span-2">
            <p className="text-3xl">Newsletter</p>
            <p className="my-4">
              Subscribe to our newsletter and get our newest updates right on
              your inbox.
            </p>
            <div className="flex gap-3.5">
              <Input type="email" className="w-1/2" placeholder="Your email" />
              <Button variant="default">Submit</Button>
            </div>
          </div>

          <div className="my-4 lg:my-0">
            <p className="text-2xl font-semibold">Need help?</p>
            <p>
              <a href="#" className="text-[0.8rem] text-background/60">
                Manage my account
              </a>
            </p>

            <p>
              <a href="#" className="text-[0.8rem] text-background/60">
                Assistance
              </a>
            </p>

            <p>
              <a href="#" className="text-[0.8rem] text-background/60">
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
                className="hover:text-deep-purple-accent-400 text-sm text-background/70 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-deep-purple-accent-400 text-sm text-background/70 transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-deep-purple-accent-400 text-sm text-background/70 transition-colors duration-300"
              >
                Ad Choices
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-deep-purple-accent-400 text-sm text-background/70 transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-deep-purple-accent-400 text-sm text-background/70 transition-colors duration-300"
              >
                Partners
              </a>
            </li>
          </ul>
          <ul className="mb-3 flex flex-col space-y-2 sm:flex-row sm:space-x-5 sm:space-y-0 lg:mb-0">
            <a
              href="/"
              className="hover:text-deep-purple-accent-400 text-sm tracking-tight text-background/70 transition-colors duration-300"
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
