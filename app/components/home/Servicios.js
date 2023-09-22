"use client";

import "./Servicios.css";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Button from "../button";

import img_renta from "../../../public/images/img_renta.png";
import img_seguro from "../../../public/images/img_seguro.png";

export default function Servicios() {
  useLenis();
  const triggerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      ".as__servicios_item",
      { opacity: 0, y: 50 },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: 1,
      },
      "-=0",
    );
    tl.fromTo(
      ".as__servicios_image img",
      { y: 30, scale: 1.1 },
      {
        y: 0,
        scale: 1,
        duration: 2,
        stagger: 0.2,
      },
      "-=1",
    );
    tl.from(
      ".img_renta",
      { backgroundColor: "transparent", duration: 2 },
      "-=3",
    );

    tl.from(
      ".img_seguro",
      { backgroundColor: "transparent", duration: 2 },
      "-=3",
    );

    const scroll = ScrollTrigger.create({
      animation: tl,
      trigger: triggerRef.current,
      start: "20% bottom",
      end: "center center",
      scrub: 3,
      //markers: true,
      onUpdate: ({ progress }) => {
        // console.log(progress);
      },
    });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <section ref={triggerRef} className="as__section as_servicios">
      <div className="as__section_wrapper">
        <div className="as__section_content">
          <h3 className="as__title_section">Servicios</h3>
          <div className="as__servicios_wrapper">
            <div className="as__servicios_item as_servicios_rent serv_renta">
              <div className="as__servicios_image img_renta">
                <Image src={img_renta} alt="asulado" />
              </div>
              <div className="as__servicios_content">
                <h2>
                  <span>Renta</span> <b>vitalicia</b>
                </h2>
                <p>
                  Modalidad de pensión que se contrata con una Aseguradora de
                  Vida, en la cual los pensionados reciben de forma periódica el
                  pago de su renta pensional siempre que cumplan los requisitos
                  establecidos en la normatividad vigente. Una renta vitalicia
                  te ofrece tranquilidad y libertad.
                </p>
              </div>
              <Button>MÁS INFORMACIÓN</Button>
            </div>

            <div className="as__servicios_item as_servicios_prev serv_seguro">
              <div className="as__servicios_image img_seguro">
                <Image src={img_seguro} alt="asulado" />
              </div>
              <div className="as__servicios_content">
                <h2>
                  <span>Seguro</span> <b>previsional</b>
                </h2>
                <p>
                  Es el seguro que cubre a los afiliados a un Fondo de Pensiones
                  ante los riesgos de invalidez y fallecimiento.
                </p>
                <p>
                  Su propósito es completar el capital de su cuenta de ahorro
                  individual para que el afiliado o su grupo familiar accedan a
                  la pensión, ya sea por una situación de invalidez o
                  fallecimiento del afiliado.
                </p>
              </div>
              <Button>MÁS INFORMACIÓN</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
