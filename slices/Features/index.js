/**
 * @typedef {import("@prismicio/client").Content.FeaturesSlice} FeaturesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturesSlice>} FeaturesProps
 * @param {FeaturesProps}
 */

import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const Features = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="md:py-2 py-1"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold my-6 text-center">{slice.primary.title}</h2>
        <div className="grid grid-cols-3 gap-4 my-6">
          {slice.primary.feature_grid.map((item) => (
            <div className="bg-slate-50 px-10 py-5">
              <PrismicNextImage field={item.icon} />
              <p className="font-bold mt-5">{item.title}</p>
              <div className="mt-5"><PrismicRichText field={item.description}/></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
