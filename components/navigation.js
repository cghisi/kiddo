import React from "react";
import { default as NextLink } from "next/link";

export default function Navigation({ menu }) {
  console.log(menu);
  return (
    <header className="site-header">
      <NextLink href="/">
        <a>
          <div className="logo">Example Site</div>
        </a>
      </NextLink>
      <MenuLinks menu={menu} />
    </header>
  );
}

const MenuLinks = ({ menu }) => {
  console.log(menu);
  if (menu) {
    return (
      <nav>
        <ul>
          {menu.body.map((menuLink, index) => (
            <p>test</p>
          ))}
        </ul>
      </nav>
    );
  }
  return null;
};

const MenuLink = ({ menuLink }) => (
  <li>
    <DocLink link={menuLink.link}>{RichText.asText(menuLink.label)}</DocLink>
  </li>
);
