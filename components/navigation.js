import { default as NextLink } from 'next/link';
import { hrefResolver } from '../prismic-configuration';

const MenuLinks = ({ links = [] }) => {
  if (links) {
    return links.map((menuLink, index) => {
      return (
        <li className="mr-6 inline-block" key={index}>
          <NextLink
            href={hrefResolver(menuLink.link)}
            passHref
          >
            <a className="text-black link-navigation">{menuLink.label}</a>
          </NextLink>
        </li>
      );
    });
  }
};

const Navigation = ({ menu }) =>
  menu ? <MenuLinks links={menu.data.menu_links} /> : null;

export default Navigation;