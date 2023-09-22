"use client";

import Head from "next/head";

import { ReactLenis } from "@studio-freight/react-lenis";

import Banner from "./components/home/Banner";
import Servicios from "./components/home/Servicios";
import Proposito from "./components/home/Proposito";
import Cifras from "./components/home/Cifras";
import Documentos from "./components/home/Documentos";
import Blog from "./components/home/Blog";
import Footer from "./components/footer";

export default function Home() {
  return (
    <ReactLenis root smoothWheel>
      <Head>
        <title>Inicio | ASULADO</title>
        <meta
          name="description"
          content="Transformamos esfuerzos de vida en beneficios garantizados que generan tranquilidad y libertad."
          key="desc"
        />
      </Head>
      <main className="as__page_home">
        <Banner></Banner>
        <Servicios></Servicios>
        <Proposito></Proposito>
        <Cifras></Cifras>
        <Documentos></Documentos>
        <Blog></Blog>
        <Footer></Footer>
      </main>
    </ReactLenis>
  );
}
