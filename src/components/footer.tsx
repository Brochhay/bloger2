import React from "react";
import { Gradient } from "./gradient";
import Container from "./container";
import { Button } from "./button";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white py-16">
      <Gradient className="absolute inset-0 opacity-20" />
      <Container className="relative text-center">
        <p className="text-sm uppercase font-semibold tracking-widest text-gray-400">
          Get started
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          React to dive in? <br /> Start your free trial today
        </h2>
        <p className="mt-4 text-gray-400 max-w-lg mx-auto">
          Get the cheat codes for selling and unlock your team&apos;s revenue potential.
        </p>
        <div className="mt-6">
          <Button className="px-6 py-3 text-lg font-medium bg-blue-600 hover:bg-blue-500" href="/login">
            Get started
          </Button>
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700">
            <FaFacebookF className="text-white text-lg" />
          </a>
          <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700">
            <FaTwitter className="text-white text-lg" />
          </a>
          <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700">
            <FaInstagram className="text-white text-lg" />
          </a>
          <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700">
            <FaLinkedinIn className="text-white text-lg" />
          </a>
        </div>
        <p className="mt-12 text-sm text-gray-500">&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
      </Container>
    </footer>
  );
}
