import { RichText } from "prismic-reactjs";
import Image from "next/image";

import { Button } from "../Button";

export default function ComponentHeroBanner({ slice }) {
  return (
    <section>
      {slice.items.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: item.background,
          }}
        >
          <div className="flex flex-wrap md:flex-nowrap items-center container mx-auto">
            <div className="md:w-1/2 px-5 text-center md:text-left">
              <h1 className="md:text-5xl text-4xl font-bold md:mr-5">
                {RichText.asText(item.title)}
              </h1>
              <p className="my-8 font-normal">
                {RichText.asText(item.subtitle)}
              </p>
              <Button primary label={item.cta_title} />
            </div>
            <div className="md:w-1/2 md:text-right mx-5">
              <Image
                src={item.image.url}
                alt={item.image.alt}
                width={650}
                height={650}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
