import { default as Link } from "next/link";
import { hrefResolver } from "../prismic-configuration";

const MenuLinks = ({ links = [] }) => {
  if (links) {
    return links.map((menuLink, index) => {
      console.log(menuLink.link);
      return (
        <li className="mr-6 inline-block" key={index}>
          <Link href={hrefResolver(menuLink.link)} passHref>
            <a className="text-black link-navigation">{menuLink.label}</a>
          </Link>
        </li>
      );
    });
  }
};

const Navigation = ({ menu }) =>
  menu ? <MenuLinks links={menu.data.menu_links} /> : null;

export default Navigation;
