import React from "react";
import NextLink from "next/link";
import Image from "next/image";

import Navigation from "./navigation";

const Header = ({ menu, altLangs }) => {
  return (
    <header
      style={{
        backgroundColor: menu.data.background,
      }}
    >
      <div className="flex container mx-auto">
        <div className="flex items-center py-6 w-2/5">
          <NextLink href={"/"} passHref>
            <a>
              <Image src="/KIDDO.png" alt="KIDDO" width={110} height={38} />
            </a>
          </NextLink>
        </div>
        <div className="flex justify-end items-center py-6 w-3/5">
          <ul className="">
            <Navigation menu={menu} />
            {/* <LanguageSwitcher altLangs={altLangs} /> */}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
