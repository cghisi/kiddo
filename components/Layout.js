import React from "react";
import Head from "next/head";
import { prismicRepoName } from "../utils/prismicHelpers";
import { Analytics } from "@vercel/analytics/react"

import Header from "./Header";
import Footer from "./Footer";
import Script from 'next/script'
//import ExitPreviewButton from './ExitPreviewButton'

const Layout = ({ isPreview, children, altLangs, lang, menu, footer }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon_32x32.png" type="image/png" />
      <link rel='manifest' href='/manifest.json' />
      <title>
        KIDDO - Need some help on your translations, website, content
      </title>
      <meta
        name="description"
        content="Your consulting team that will help you with your website, translations..."
      />
      <Script src={`https://static.cdn.prismic.io/prismic.js?new=true&repo=${prismicRepoName}`} strategy="lazyOnload"></Script>
      {/* <script
        async
        defer
        src={`https://static.cdn.prismic.io/prismic.js?new=true&repo=${prismicRepoName}`}
      /> */}
    </Head>
    <Header
      altLangs={altLangs}
      //currentLang={lang.currentLang}
      menu={menu}
    />
    <main>{children}
    <Analytics/>
    </main>
    {/* {isPreview ? <ExitPreviewButton /> : null} */}
    <Footer footer={footer} />
  </>
);

export default Layout;
