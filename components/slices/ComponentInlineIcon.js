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
              width={70}
              height={90}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
