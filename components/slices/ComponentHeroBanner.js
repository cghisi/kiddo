import { RichText } from "prismic-reactjs";
import Image from 'next/image'

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
              <h1 className="text-6xl font-medium py-6">
                {RichText.asText(item.title)}
              </h1>
              <RichText render={item.subtitle} />
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
