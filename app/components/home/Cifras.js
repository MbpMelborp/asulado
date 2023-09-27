"use client";

import "./Cifras.css";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

import { SplitText } from "@cyriacbr/react-split-text";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Button from "../button";

import ILUS1 from "../../../public/images/ILUS1.png";
import ILUS2 from "../../../public/images/ILUS2.png";
import ILUS3 from "../../../public/images/ILUS3.png";

export default function Cifras() {
  useLenis();
  const triggerRef = useRef(null);

  const counters = { clientes: 0, cobertura: 0, colaboradores: 0 };
  const toCLiets = 25;
  const toCobertura = 5;
  const toColaboradores = 50;

  const [clientes, setClientes] = useState(0);
  const [cobertura, setCobertura] = useState(0);
  const [colaboradores, setColaboradores] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.from(
      ".as__cifras .as__title_section",
      {
        y: -20,
        duration: 4,
        opacity: 0,
      },
      "=0",
    );
    tl.fromTo(
      ".as__cifras .as__cifras_content .as__cifras_content_cifra",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        opacity: 1,
        stagger: 0.4,
      },
      "-=1",
    );

    const scroll = ScrollTrigger.create({
      animation: tl,
      trigger: triggerRef.current,
      start: "-20% bottom",
      end: "center center",
      scrub: 3,
      // markers: true,
      onEnter: () => {
        gsap.fromTo(
          counters,
          { val: 0 },
          {
            val: toCLiets,
            duration: 1,
            roundProps: "clientes",
            ease: "back.out",
            delay: 2,
            onUpdate: function () {
              setClientes(Math.round(counters.val));
            },
          },
        );
        gsap.fromTo(
          counters,
          { val: 0 },
          {
            val: toCobertura,
            duration: 1,
            roundProps: "cobertura",
            ease: "back.out",
            delay: 3,
            onUpdate: function () {
              setCobertura(Math.round(counters.val));
            },
          },
        );
        gsap.fromTo(
          counters,
          { val: 0 },
          {
            val: toColaboradores,
            duration: 1,
            roundProps: "colaboradores",
            ease: "back.out",
            delay: 4,
            onUpdate: function () {
              setColaboradores(Math.round(counters.val));
            },
          },
        );
      },
      onUpdate: ({ progress }) => {
        // console.log(progress);
      },
    });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <section ref={triggerRef} className="as__section as__cifras">
      <div className="as__section_wrapper">
        <div className="as__section_content">
          <h3 className="as__title_section">ASULADO en cifras</h3>
          <div className="as__cifras_content">
            <div className="as__cifras_content_cifra">
              <Image src={ILUS1} alt="asulado" />
              <h4>
                <span>{clientes}</span>k
              </h4>
              <p>clientes de Rentas Vitalicias</p>
            </div>
            <div className="as__cifras_content_cifra">
              <Image src={ILUS2} alt="asulado" />
              <h4>{cobertura}m</h4>
              <p>de cobertura de afiliados a través del Seguro Previsional</p>
            </div>
            <div className="as__cifras_content_cifra">
              <Image src={ILUS3} alt="asulado" />
              <h4>+{colaboradores}</h4>
              <p>colaboradores en nuestra red</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
