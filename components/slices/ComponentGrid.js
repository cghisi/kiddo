import { RichText } from "prismic-reactjs";
import Image from "next/image";

import { Button } from "../Button";

export default function ComponentGrid({ slice }) {
  return (
    <section className="container mx-auto">
      <h2 className="text-3xl text-center font-bold my-5">
        {RichText.asText(slice.primary.heading)}
      </h2>
      <div className="flex flex-col lg:flex-row">
        {slice.items.map((item, index) => (
          <div key={index} className="lg:w-1/2 text-center m-5">
            <Image
              src={item.image.url}
              alt={item.image.alt}
              width={650}
              height={650}
            />
            <div className="lg:text-left my-10 text-center">
              <b>{RichText.asText(item.title)}</b> -{" "}
              {RichText.asText(item.description)}
            </div>
            <div className="text-center">
              <Button primary label={item.cta_title} url={item.url} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
