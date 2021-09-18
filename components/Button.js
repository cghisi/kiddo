import React from "react";
import Link from 'next/link';
import { hrefResolver } from "../prismic-configuration";

export const Button = ({ primary, backgroundColor, size, label, url, ...props }) => {
  const mode = primary
    ? "border-2 border-black py-4 px-5 hover:bg-black hover:text-white font-medium"
    : "border-2 border-black bg-black text-white py-4 px-5 hover:bg-white hover:text-black font-medium";

  return (
    <Link
      {...props}
      href={hrefResolver(url)} passHref>
      <a className={[`btn--${size}`, mode].join(" ")}>{label}</a>
    </Link>
  );
};
