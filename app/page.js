"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

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
