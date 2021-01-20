import { RichText } from "prismic-reactjs";
import Image from "next/image";

export default function ComponentBannerCaption({ slice }) {
  return (
    <section
      className="py-10"
      style={{ backgroundColor: slice.primary.background }}
    >
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="w-1/2 py-10 pr-20">
          <h1 className="text-3xl font-medium py-5">
            {RichText.asText(slice.primary.title_of_banner)}
          </h1>
          <RichText render={slice.primary.description} />
        </div>
        <div className="w-1/2">
          <Image
            src={slice.primary.image_banner.url}
            alt={slice.primary.image_banner.alt}
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
