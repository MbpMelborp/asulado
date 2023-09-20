import "./PostSmall.css";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function PostSmall({ image, title, content }) {
  return (
    <li className="as__post_small">
      <Link href="/blog/5-consejos-para-aprovechar-el-seguro-previsional">
        <h4>{title}</h4>
        <div className="as__post_small_content">
          <i className="fa-solid fa-circle-arrow-right"></i>
          <p>{content}</p>
        </div>
        <Image src={image} alt="Asulado"></Image>
      </Link>
    </li>
  );
}
