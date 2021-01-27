import React from "react";
import NextLink from "next/link";
import Image from "next/image";

const Footer = () => (
  // <footer classNameName="bg-black text-white">
  //   <div classNameName="container mx-auto">
  //     footer
  //   </div>
  // </footer>
  <footer className="footer bg-gray-700 relative pt-1 border-b-2 border-gray-500">
    <div className="container mx-auto">
      <div className="flex">
        <div className="flex-1 text-center">test</div>
        <div className="flex-1">test</div>
        <div className="flex-1">test</div>
      </div>
    </div>
    <div className="container mx-auto px-6">
      <div className="mt-16 border-gray-300 flex flex-col items-center">
        <div className="sm:w-2/3 text-center py-6"></div>
      </div>
    </div>
  </footer>
);

export default Footer;
