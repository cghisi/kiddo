import { RichText } from "prismic-reactjs";
import Image from "next/image";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { TextPlugin } from "gsap/dist/TextPlugin";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(TextPlugin, useGSAP);
}



import { Button } from "../Button";

export default function ComponentHeroBanner({ slice }) {

  const container = useRef();

  useGSAP(
    () => {
      // gsap code here...
      gsap.from(".box", {
        duration: 4,
        text: '...',
        ease: "none",
      });
    },
    { scope: container }
  );


  return (
    <section>
      {slice.items.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: item.background,
          }}
        >
          <div className="flex flex-wrap md:flex-nowrap items-center container mx-auto">
            <div className="md:w-1/2 px-5 text-center md:text-left" ref={container}>
              <h1 className="md:text-5xl text-4xl font-bold md:mr-5 box" >
                {RichText.asText(item.title)}
              </h1>
              <p className="my-8 font-normal">
                {RichText.asText(item.subtitle)}
              </p>
              <Button primary label={item.cta_title} url={item.cta_link} />
            </div>
            <div className="md:w-1/2 md:text-right mx-5">
              <Image
                src={item.image.url}
                alt={item.image.alt}
                width={650}
                height={650}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
