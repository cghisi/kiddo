import { RichText } from "prismic-reactjs";

export default function ComponentText({ slice }) {
  return (
    <section
      className="py-10"
      style={{
        backgroundColor: slice.primary.background,
      }}
    >
      <div className="container mx-auto">
        <div className="text-center md:w-2/3 md:mx-auto mx-5">
          <h2 className="text-3xl font-medium mb-6">
            {RichText.asText(slice.primary.title)}
          </h2>
          <RichText render={slice.primary.text} />
        </div>
      </div>
    </section>
  );
}
