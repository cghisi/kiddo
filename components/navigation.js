import { default as Link } from "next/link";
import { hrefResolver } from "../prismic-configuration";

const MenuLinks = ({ links = [] }) => {
  if (links) {
    return links.map((menuLink, index) => {
      return (
        <li className="mr-6 inline-block" key={index}>
          <Link href={hrefResolver(menuLink.link)} passHref className="text-black link-navigation">
            {menuLink.label}
          </Link>
        </li>
      );
    });
  }
};

const Navigation = ({ menu }) =>
  menu ? <MenuLinks links={menu.data.menu_links} /> : null;

export default Navigation;