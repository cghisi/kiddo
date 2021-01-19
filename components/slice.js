import HeroBanner from "./heroBanner";
import BannerCaption from "./bannerCaption";

export default function Slice({ data }) {
  var infos = data[0].body;

  return (
    <div>
      {infos.map((item, index) => (
        <div key={index}>
          {item.slice_type === "hero" && <HeroBanner slice={item} />}
          {item.slice_type === "banner_caption" && (
            <BannerCaption slice={item} />
          )}
        </div>
      ))}
    </div>
  );
}
