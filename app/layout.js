import "./globals.css";
import localFont from "next/font/local";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";

import vigilado from "../public/images/vigilado_vert.png";

//SCROLL
// import Lenis from "@studio-freight/lenis";

import Header from "./components/header";

const avenir = localFont({
  src: [
    {
      path: "../fonts/Avenir-Roman.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Avenir-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Avenir-Black.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/Avenir-Light.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/Avenir-Heavy.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-avenir",
});

const jeko = localFont({
  src: [
    {
      path: "../fonts/je_bold.woff",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../fonts/je_light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/je_reg.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-je",
});

// const vice = localFont({
//   src: [
//     {
//       path: "../fonts/vice.woff",
//       weight: "600",
//       style: "normal",
//     },
//   ],
//   variable: "--font-vice",
// });

const debug = process.env.NODE_ENV === "development" ? "debug-screens" : "";

export const metadata = {
  title: "Asulado",
  description: "",
};
/*
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf); */

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Script
        src="https://kit.fontawesome.com/c43a2a9e8d.js"
        crossorigin="anonymous"
      ></Script>
      <body
        className={`${jeko.variable} ${avenir.variable} ${debug} font-sans `}
      >
        <Header />
        <div className="as__wrapper">{children}</div>
        <div className="as__header_vigilado">
          <Image src={vigilado} alt="Vigilado" />
        </div>
      </body>
    </html>
  );
}
