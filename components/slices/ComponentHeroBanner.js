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
          <div className="flex flex-wrap items-center container mx-auto">
            <div className="w-1/2">
              <h1 className="text-5xl font-medium py-6 mr-5">
                {RichText.asText(item.title)}
              </h1>
              <div className="my-8">
                <RichText render={item.subtitle} />
              </div>
              <a
                href={item.cta_link}
                class="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded"
              >
                {item.cta_title}
              </a>
            </div>
            <div className="w-1/2 text-right">
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
