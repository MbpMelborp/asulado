"use client";

import "./Documentos.css";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

import { SplitText } from "@cyriacbr/react-split-text";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Button from "../button";

import novedades_1 from "../../../public/images/img_novedades_1.webp";
import novedades_2 from "../../../public/images/img_novedades_2.webp";
import novedades_3 from "../../../public/images/img_novedades_3.webp";

export default function Cifras() {
  useLenis();
  const triggerRef = useRef(null);

  useEffect(() => {
    const tl_yoyo = gsap.timeline({ paused: true });

    tl_yoyo.to(
      ".as__documentos .img_doc_3",
      {
        yPercent: -5,
        duration: 1,
        repeat: -1,
        ease: "power4.inout",
        yoyo: true,
      },
      "0",
    );

    const tl = gsap.timeline({ paused: true });

    tl.from(
      ".as__documentos .as__title_section",
      {
        y: -20,
        duration: 1,
        opacity: 0,
      },
      "=0",
    );

    tl.from(
      ".as__documentos .as__documentos_img",
      {
        opacity: 0,
        yPercent: 20,
        duration: 8,
        opacity: 1,
        ease: "power4.out",
      },
      "+=2",
    );
    tl.fromTo(
      ".as__documentos .as__documentos_content h4 span",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        opacity: 1,
        stagger: 0.4,
      },
      "-=3",
    );
    tl.fromTo(
      ".as__documentos .as__documentos_content_info",
      { opacity: 0, y: -20 },
      {
        opacity: 0,
        y: 0,
        duration: 2,
        opacity: 1,
      },
      "-=2",
    );
    tl.addLabel("end", "-=4");
    tl.fromTo(
      ".as__documentos .img_doc_1",
      { opacity: 0, scale: 0.6 },
      {
        opacity: 1,
        scale: 1,
        duration: 3,
      },
      "end",
    );
    tl.fromTo(
      ".as__documentos .img_doc_2",
      { y: 100, scale: 1.2 },
      {
        y: 0,
        scale: 1,
        duration: 3,
      },
      "end",
    );
    tl.fromTo(
      ".as__documentos .img_doc_3",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 3,
      },
      "end",
    );

    const scroll = ScrollTrigger.create({
      animation: tl,
      trigger: triggerRef.current,
      start: "-20% bottom",
      end: "30% center",
      scrub: 3,
      // markers: true,
      onUpdate: ({ progress }) => {
        if (progress == 1) tl_yoyo.play();
        else tl_yoyo.pause();
      },
    });

    return () => {
      tl.kill();
      tl_yoyo.kill();
    };
  }, []);
  return (
    <section ref={triggerRef} className="as__section as__documentos">
      <div className="as__section_wrapper">
        <div className="as__section_content">
          <h3 className="as__title_section">Gestión de documentos</h3>
          <div className="as__documentos_wrap_info">
            <div className="as__documentos_content">
              <h4 className="as__documentos_content_title">
                <span>Información</span> <span>que</span> <span>sí</span>{" "}
                <span>o</span> <span>sí</span> <span>debes</span>{" "}
                <span>conocer</span>
              </h4>
              <div className="as__documentos_content_info">
                <p>
                  Solicitud de colillas, certificados, cajas de compensación,
                  entre otros.
                </p>
                <Button>SABER MÁS</Button>
              </div>
            </div>
            <div className="as__documentos_img">
              <Image className="img_doc_1" src={novedades_1} alt="asulado" />
              <Image className="img_doc_2" src={novedades_2} alt="asulado" />
              <Image className="img_doc_3" src={novedades_3} alt="asulado" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
