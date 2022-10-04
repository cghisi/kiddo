import { RichText } from "prismic-reactjs";
import Image from "next/image";
import Link from "next/link";

export default function ComponentGrid({ slice }) {
  return (
    <section className="container mx-auto">
      <h2 className="text-3xl text-center font-bold my-5">
        {RichText.asText(slice.primary.heading)}
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap">
        {slice.items.map((item, index) => (
          <div key={index} className="md:w-1/2 text-center p-5">
            <Image
              src={item.image.url}
              alt={item.image.alt}
              width={800}
              height={400}
            />
            <section className="md:flex">
              <div className="text-left md:w-2/3">
                <b>{RichText.asText(item.title)}</b> -{" "}
                {RichText.asText(item.description)}
              </div>
              <div className="text-left md:text-right md:w-1/3">
                <a
                  className="underline"
                  href={item.cta_url.url}
                  target={item.cta_external == true && "_blank"}
                >
                  {item.cta_title}
                </a>
              </div>
            </section>
          </div>
        ))}
      </div>
    </section>
  );
}
