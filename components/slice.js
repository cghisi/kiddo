import HeroBanner from "./slices/ComponentHeroBanner";
import BannerCaption from "./slices/ComponentBannerCaption";
import Text from "./slices/ComponentText";
import IconInlineList from "./slices/ComponentInlineIcon";

export default function Slice({ sliceZone }) {
  console.log(sliceZone);

  return (
    <div>
      {sliceZone.map((slice, index) => {
        switch (slice.slice_type) {
          case "hero":
            return <HeroBanner slice={slice} key={`slice-${index}`} />;
          case "banner_with_caption":
            return <BannerCaption slice={slice} key={`slice-${index}`} />;
          case "text":
            return <Text slice={slice} key={`slice-${index}`} />;
          case "rich_text":
            return <Text slice={slice} key={`slice-${index}`} />;
          case "icon_inline_list":
            return <IconInlineList slice={slice} key={`slice-${index}`} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
