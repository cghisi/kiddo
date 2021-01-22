import React from "react";
import { Client, manageLocal } from "../utils/prismicHelpers";

import Layout from "components/Layout";
import Slice from "components/slice";

/**
 * Homepage component
 */
const Homepage = ({ doc, menu, lang, preview }) => {
  if (doc && doc.data) {
    //console.log(doc);
    //useUpdatePreviewRef(preview, doc.id)
    //useUpdateToolbarDocs(homepageToolbarDocs(preview.activeRef, doc.lang), [doc])

    return (
      <Layout
        altLangs={doc.alternate_languages}
        lang={lang}
        menu={menu}
        //isPreview={preview.isActive}
      >
        <Slice sliceZone={doc.data.body} />
      </Layout>
    );
  }
};

export async function getStaticProps({
  preview,
  previewData,
  locale,
  locales,
}) {
  const ref = previewData ? previewData.ref : null;
  const isPreview = preview || false;
  const client = Client();

  const doc =
    (await client.getSingle(
      "landing_page",
      ref ? { ref, lang: locale } : { lang: locale }
    )) || {};

  const menu =
    (await client.getSingle(
      "navigation",
      ref ? { ref, lang: locale } : { lang: locale }
    )) || {};

  const { currentLang, isMyMainLanguage } = manageLocal(locales, locale);

  return {
    props: {
      menu,
      doc,
      lang: {
        currentLang,
        isMyMainLanguage,
      },
    },
  };
}

export default Homepage;
