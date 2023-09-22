"use client";
import Image from "next/image";
import Link from "next/link";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

import logo from "../../public/images/header_logo.svg";
import { useEffect, useState } from "react";

export default function Header() {
  const lenis = useLenis(({ scroll }) => {
    if (scroll > 20) {
      document.querySelector(".as__header").classList.add("as__header_scroll");
    } else {
      document
        .querySelector(".as__header")
        .classList.remove("as__header_scroll");
    }
    1;
  });
  function handleMenu() {
    // lenis.scroll = window.scrollY;
    // console.log(document.querySelector("body").classList);
    if (!open) {
      document.querySelector("body").classList.add("overflow-hidden");
      lenis.stop();
    } else {
      document.querySelector("body").classList.remove("overflow-hidden");
      lenis.start();
    }
    setOpen(!open);
  }
  const [open, setOpen] = useState(false);

  return (
    <header className={"as__header " + (open && "open")}>
      <nav>
        <Link href="/" className="as__logo" title="ASULADO">
          <Image src={logo} alt="asulado" />
          <span aria-hidden>Asulado</span>
          <b>Seguros de vida</b>
        </Link>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="as__nav_button"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={handleMenu}
        >
          <span className="sr-only">Abrir menú</span>
          <i
            className={
              !open ? "fa-solid fa-bars text-xl" : "fa-solid fa-times text-xl"
            }
          ></i>
        </button>

        <div
          className={
            open ? "as__nav_links nav_open" : "as__nav_links nav_close"
          }
          id="navbar-default"
        >
          <ul>
            <li>
              <Link href="/" aria-current="page" title="INICIO">
                INICIO
              </Link>
            </li>
            <li>
              <Link href="/" aria-current="page" title="NOSOTROS">
                NOSOTROS
              </Link>
            </li>
            <li>
              <Link href="/" aria-current="page" title="PRODUCTOS">
                PRODUCTOS
              </Link>
            </li>
            <li>
              <Link href="/" aria-current="page" title="SOBREVIVENCIA">
                SOBREVIVENCIA
              </Link>
            </li>
            <li>
              <Link href="/" aria-current="page" title="INVALIDEZ">
                INVALIDEZ
              </Link>
            </li>
            <li>
              <Link href="/" aria-current="page" title="SOLICITUDES">
                SOLICITUDES
              </Link>
            </li>
            <li>
              <Link href="/" aria-current="page" title="PREGUNTAS">
                PREGUNTAS
              </Link>
            </li>
            <li>
              <button
                className="dest"
                aria-current="page"
                title="Blog | DE INTERÉS"
              >
                DE INTERÉS
              </button>
            </li>
            <li>
              <a href="#" aria-current="page" title="Usabilidad">
                <i
                  role="presentation"
                  className="fa-solid fa-universal-access"
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
