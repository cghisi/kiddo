import React from 'react';
import NextLink from 'next/link';
import Navigation from './navigation';

const Header = ({ menu, altLangs }) => {

  return (
    <header
    style={{
      backgroundColor: menu.data.background,
    }}>
      <div className="flex container mx-auto">
        <div className="flex items-center py-6 w-2/5">
          <NextLink href={'/'} passHref>
            <a>
              <img className="logo" src="/images/logo.png" alt="Site logo" />
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