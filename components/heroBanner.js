import { RichText } from "prismic-reactjs";

export default function heroBanner({ slice }) {
  return (
    <section>
      {slice.items.map((item, index) => (
        <div
          key={index}
          className="flex flex-wrap items-center"
          style={{
            backgroundColor: item.background,
          }}
        >
          <div className="w-1/2 px-10">
            <h1 className="text-3xl font-medium">
              {RichText.asText(item.title)}
            </h1>
            <RichText render={item.subtitle} />
          </div>
          <div className="w-1/2">
            <picture>
              {/* <source media="(max-width: 400px)" srcSet={image.url} />
              <source media="(max-width: 900px)" srcSet={tabletView.url} /> */}
              <source srcSet={item.image.url} />
              <img src={item.image.url} alt={item.image.alt} />
            </picture>
          </div>
        </div>
      ))}
    </section>
  );
}
