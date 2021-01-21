import Link from "next/link";
import { linkResolver, hrefResolver } from "prismic-configuration";

const AltLangs = ({ altLangs = [] }) =>
  altLangs.map((altLang) => {
    return (
      <li className="mr-6 inline-block" key={altLang.id}>
        <Link
          locale={altLang.lang}
          as={linkResolver(altLang)}
          href={hrefResolver(altLang)}
          passHref
        >
          <a className={`flag-${altLang.lang}`}>{altLang.lang}</a>
        </Link>
      </li>
    );
  });

const LanguageSwitcher = ({ altLangs }) => <AltLangs altLangs={altLangs} />;

export default LanguageSwitcher;
