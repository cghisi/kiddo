import { RichText } from "prismic-reactjs";
import Image from "next/image";

export default function ComponentInlineIcon({ slice }) {
  return (
    <section
      className="py-10"
      style={{ backgroundColor: slice.primary.background }}
    >
      <div className="text-center">
        {slice.items.map((item, index) => (
          <div key={index} className="inline-block mx-10">
            <Image
              src={item.icon_image.url}
              alt={item.icon_image.alt}
              width={50}
              height={50}
            />
            <div className="mt-5">
              <h3 className="font-normal">
                {RichText.asText(item.icon_title)}
              </h3>
              <RichText render={item.icon_description} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
