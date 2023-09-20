import "./Blog.css";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Button from "../button";
import PostSmall from "../blog/PostSmall";

import blog_1 from "@/public/images/blog/blog_1.jpg";
import blog_2 from "@/public/images/blog/blog_2.jpg";
import blog_3 from "@/public/images/blog/blog_3.jpg";
import blog_4 from "@/public/images/blog/blog_4.jpg";

export default function Cifras() {
  useLenis();
  const triggerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.from(
      ".as__blog .as__title_section",
      {
        y: -20,
        duration: 4,
        opacity: 0,
      },
      "=0"
    );
    tl.fromTo(
      ".as__blog .as__blog_posts .as__post_small a",
      { opacity: 0, xPercent: -20 },
      {
        opacity: 1,
        xPercent: 0,
        duration: 1,
        opacity: 1,
        stagger: 0.4,
      },
      "-=2"
    );

    const scroll = ScrollTrigger.create({
      animation: tl,
      trigger: triggerRef.current,
      start: "-20% bottom",
      end: "top center",
      scrub: 3,
      // markers: true,
      onUpdate: ({ progress }) => {
        // console.log(progress);
      },
    });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <section ref={triggerRef} className="as__section as__blog">
      <div className="as__section_wrapper">
        <div className="as__section_content">
          <h3 className="as__title_section">Artículos de interés</h3>
          <Button size="small">VER TODOS</Button>
        </div>
      </div>
      <ul className="as__blog_posts">
        <PostSmall
          title="5 consejos para aprovechar el seguro previsional"
          image={blog_1}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at nisi iaculis, viverra enim venenatis, varius ante. Integer"
        ></PostSmall>
        <PostSmall
          title="¿Qué beneficios tengo con la renta vitalicia?"
          image={blog_2}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at nisi iaculis, viverra enim venenatis, varius ante. Integer"
        ></PostSmall>
        <PostSmall
          title="Pensión de invalidez: todo lo que debes saber"
          image={blog_3}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at nisi iaculis, viverra enim venenatis, varius ante. Integer"
        ></PostSmall>
        <PostSmall
          title="Preguntas frecuentes sobre la pensión vitalicia"
          image={blog_4}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at nisi iaculis, viverra enim venenatis, varius ante. Integer"
        ></PostSmall>
      </ul>
    </section>
  );
}
