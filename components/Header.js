import React from "react";
import NextLink from "next/link";
import Image from "next/image";

import Navigation from "./navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileNavigation from "./MobileNavigation";

const Header = ({ menu, altLangs }) => {
  return (
    <header
      style={{
        backgroundColor: menu.data.background,
      }}
    >
      <div className="flex container mx-auto">
        <div className="md:hidden justify-end items-center py-6 w-1/3">
          <MobileNavigation altLangs={altLangs} menu={menu} />
        </div>
        <div className="flex items-center py-6 sm:w-1/3 md:w-2/5">
          <NextLink href={"/"} passHref>
            <a>
              <Image src="/KIDDO.png" alt="KIDDO" width={110} height={42} />
            </a>
          </NextLink>
        </div>
        <div className="hidden md:flex justify-end items-center py-6 md:w-3/5 sm:w-1/3">
          <ul>
            <Navigation menu={menu} />
            <LanguageSwitcher altLangs={altLangs} />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
