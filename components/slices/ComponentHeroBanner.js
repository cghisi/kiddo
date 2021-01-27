import { RichText } from "prismic-reactjs";
import Image from "next/image";

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
            <div className="md:w-1/2 mx-5">
              <h1 className="text-5xl font-medium py-6 md:mr-5">
                {RichText.asText(item.title)}
              </h1>
              <p className="my-8 font-normal">
                {RichText.asText(item.subtitle)}
              </p>
              <a
                href={item.cta_link}
                className="hover:bg-blue-500 text-white py-3 px-6 rounded-md"
                style={{
                  backgroundColor: item.cta_color,
                }}
              >
                {item.cta_title}
              </a>
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
