import React from "react";
import { queryRepeatableDocuments } from "utils/queries";
import { Client, manageLocal } from "../utils/prismicHelpers";

import Layout from "components/Layout";
import Slice from "components/slice";

/**
 * posts component
 */
const Page = ({ doc, menu, lang, footer, preview  }) => {
  if (doc && doc.data) {
    // useUpdatePreviewRef(preview, doc.id);
    // useUpdateToolbarDocs(
    //   pageToolbarDocs(doc.uid, preview.activeRef, doc.lang),
    //   [doc]
    // );

    return (
      <Layout
        altLangs={doc.alternate_languages}
        lang={lang}
        menu={menu}
        footer={footer}
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
  params,
  locale,
  locales,
}) {
  const ref = previewData ? previewData.ref : null;
  const isPreview = preview || false;
  const client = Client();
  const doc =
    (await client.getByUID(
      "page",
      params.uid,
      ref ? { ref, lang: locale } : { lang: locale }
    )) || {};

  const menu =
    (await client.getByUID(
      "menu",
      "top_navigation",
      ref ? { ref, lang: locale } : { lang: locale }
    )) || {};

  const footer =
    (await client.getByUID(
      "menu",
      "footer",
      ref ? { ref, lang: locale } : { lang: locale }
    )) || {};
    
  const { currentLang, isMyMainLanguage } = manageLocal(locales, locale);

  return {
    props: {
      doc,
      menu,
      footer,
      //   preview: {
      //     isActive: isPreview,
      //     activeRef: ref,
      //   },
      lang: {
        currentLang,
        isMyMainLanguage,
      },
    },
  };
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments(
    (doc) => doc.type === "page"
  );
  return {
    paths: documents.map((doc) => {
      return { params: { uid: doc.uid }, locale: doc.lang };
    }),
    fallback: false,
  };
}

export default Page;
