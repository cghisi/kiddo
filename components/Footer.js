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
          <Link href={hrefResolver(menuLink.link)} passHref legacyBehavior className="text-white">
           {menuLink.label}
          </Link>
        </li>
      );
    });
  }
};

const Footer = ({ footer }) => {
  return (
    <footer className="footer bg-gray-200 pt-1 border-b-2 border-gray-500 text-gray-500">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row my-10 mx-5">
          <div className="flex-1">
            <h3>{RichText.asText(footer.data.title)}</h3>
            <ul className="text-gray-500 my-5">
              <Navigation menu={footer} />
            </ul>
          </div>
          <div className="flex-1">
            <h3>KIDDO</h3>
            <div className="text-black my-5">
              We can help your website. Translating, Coding to help you create a beautiful experience on your website.
              Our mission is to provide a great experience for your users.
            </div>
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
