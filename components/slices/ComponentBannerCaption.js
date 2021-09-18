import { RichText } from "prismic-reactjs";
import Image from "next/image";

import { Button } from "../Button";

export default function ComponentBannerCaption({ slice }) {

  let divPosition = "md:flex-row flex-col-reverse";
  let imgPosition = "text-center";
  if (slice.primary.image_position == "left") {
    divPosition = "flex-col-reverse md:flex-row-reverse text-left";
    imgPosition = "text-left"
  }

  return (
    <section
      className="md:py-2 py-1"
      style={{ backgroundColor: slice.primary.background }}
    >
      <div className="container mx-auto text-center my-10 md:my-20">
        <div className={["flex flex-col md:flex-row", divPosition].join(" ")}>
          <div className="md:w-1/2 m-auto text-center md:text-left px-5">
            <h1 className="text-3xl font-bold">
              {RichText.asText(slice.primary.title_of_banner)}
            </h1>
            <div className="py-10">
              <RichText render={slice.primary.description} />
            </div>
            {slice.primary.cta_title ?
              <Button primary label={slice.primary.cta_title} url={slice.primary.button_link}/> : null
            }
          </div>
          <div className={["md:w-1/2 px-5 text-center", imgPosition].join(" ")}>
            <Image
              src={slice.primary.image_banner.url}
              alt={slice.primary.image_banner.alt}
              width={550}
              height={550}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
