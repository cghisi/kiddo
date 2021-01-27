import React from "react";
import NextLink from "next/link";
import Image from "next/image";

const Footer = () => (
  <footer className="footer bg-gray-700 relative pt-1 border-b-2 border-gray-500">
    <div className="container mx-auto">
      <div className="flex">
        <div class="flex-1 text-center">test</div>
        <div class="flex-1">test</div>
        <div class="flex-1 py-7">
          <Image src="/KIDDO.png" alt="KIDDO" width={110} height={38} />
        </div>
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
