import { RichText } from "prismic-reactjs";

export default function ComponentText({ slice }) {
  return (
    <section className="py-10" style={{
      backgroundColor: slice.primary.background,
    }}>
        <div className="container mx-auto">
          <div className="text-center w-2/3 mx-auto">
            <h1 className="text-3xl font-medium">
              {RichText.asText(slice.primary.title_of_banner)}
            </h1>
            <RichText render={slice.primary.text} />
          </div>
        </div>
    </section>
  );
}