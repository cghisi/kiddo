import React from "react";
import Head from "next/head";
import { prismicRepoName } from "../utils/prismicHelpers";

import Header from "./Header";
import Footer from "./Footer";
//import ExitPreviewButton from './ExitPreviewButton'

const Layout = ({ isPreview, children, altLangs, lang, menu, footer }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon_32x32.png" type="image/png" />
      <link
        rel="preload"
        href="/fonts/OpenSans-Regular.woff"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Raleway-Medium.woff"
        as="font"
        crossOrigin=""
      />
      <title>
        KIDDO - Need some help on your translations, website, content
      </title>
      <meta
        name="description"
        content="Your consulting team that will help you with your website, translations..."
      />
      <script
        async
        defer
        src={`https://static.cdn.prismic.io/prismic.js?new=true&repo=${prismicRepoName}`}
      />
    </Head>
    <Header
      altLangs={altLangs}
      //currentLang={lang.currentLang}
      menu={menu}
    />
    <main>{children}</main>
    {/* {isPreview ? <ExitPreviewButton /> : null} */}
    <Footer footer={footer} />
  </>
);

export default Layout;
