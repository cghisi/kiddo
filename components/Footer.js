import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RichText } from "prismic-reactjs";
import { hrefResolver } from "../prismic-configuration";

const Navigation = ({ menu }) =>
  menu ? <MenuLinks links={menu.data.menu_links} /> : null;

const MenuLinks = ({ links = [] }) => {
  if (links) {
    return links.map((menuLink, index) => {
      return (
        <li className="my-2" key={index}>
          <Link href={hrefResolver(menuLink.link)} passHref>
            <a className="text-white">{menuLink.label}</a>
          </Link>
        </li>
      );
    });
  }
};

const Footer = ({ footer }) => {
  return (
    <footer className="footer bg-black relative pt-1 border-b-2 border-gray-500 text-white">
      <div className="container mx-auto">
        <div className="flex my-5">
          <div className="flex-1">
            <h3>{RichText.asText(footer.data.title)}</h3>
            <ul className="text-white">
              <Navigation menu={footer} />
            </ul>
          </div>
          <div className="flex-1">test</div>
          <div className="flex-1 py-7">
            <Image src="/KIDDO.png" alt="KIDDO" width={110} height={36} />
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
};

export default Footer;
