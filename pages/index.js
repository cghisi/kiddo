import React from "react";
import Prismic from "@prismicio/client";
import { client } from "../prismic-configuration";

import Navigation from "../components/navigation";
import Slice from "../components/slice";

export default function Index({ navigation, data }) {
  console.log(navigation);

  return (
    <div>
      <Navigation menu={navigation} />
      <Slice data={data} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await client.query(
    Prismic.Predicates.at("document.type", "landing_page")
  );

  const data = res.results.map((p) => {
    return p.data;
  });

  const nav = await client.query(
    Prismic.Predicates.at("document.type", "navigation")
  );

  const navigation = nav.results.map((p) => {
    return p.data;
  });

  return {
    props: {
      navigation,
      data,
    },
  };
}
