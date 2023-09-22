"use client";

import "./Proposito.css";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

import { SplitText } from "@cyriacbr/react-split-text";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Button from "../button";

export default function Proposito() {
  useLenis();
  const triggerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    const toMarquee = -(
      document.querySelector(".as_proposito .as__marquee .as__marquee_to_left")
        .offsetWidth - window.innerWidth
    );
    tl.from(
      ".as_proposito .as__title_section",

      {
        y: -20,
        duration: 4,
        opacity: 0,
      },
      "=0",
    );
    tl.fromTo(
      ".as_proposito .as__marquee .as__marquee_to_left",
      { x: 0 },
      {
        x: toMarquee,
        duration: 20,
        opacity: 1,
        ease: "linear",
      },
      "-=1",
    );
    tl.fromTo(
      ".as_proposito .as_proposito_content .prop_anim",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        opacity: 1,
        stagger: 0.4,
      },
      "-=4",
    );
    tl.from(
      ".as__proposito_link .as__button",
      {
        opacity: 0,
        y: 20,
        duration: 1,
      },
      "-=1",
    );
    tl.from(
      ".as__proposito_ilus svg",
      {
        opacity: 0,
        y: 50,
        duration: 4,
      },
      "-=3",
    );

    const scroll = ScrollTrigger.create({
      animation: tl,
      trigger: triggerRef.current,
      start: "top bottom",
      end: "center center",
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
    <section ref={triggerRef} className="as__section as_proposito">
      <div className="as__section_wrapper">
        <div className="as__section_content">
          <h3 className="as__title_section">Nuestro propósito</h3>
          <div className="as_proposito_content">
            <span className="prop_anim">Transformamos</span>
            <span className="prop_anim">esfuerzos</span>
            <span className="prop_anim">de</span>
            <span className="prop_anim">vida</span>
            <span className="prop_anim">en</span>
            <span className="prop_anim">beneficios</span>
            <span className="prop_anim">garantizados</span>
            <span className="prop_anim">que</span>
            <strong className="prop_anim">generan</strong>
            <strong className="prop_anim">tranquilidad</strong>
            <strong className="prop_anim">y</strong>
            <strong className="prop_anim">libertad</strong>
          </div>
        </div>
        <div className="as__proposito_link">
          <Button>MÁS INFORMACIÓN</Button>
        </div>
      </div>
      <div className="as__marquee">
        <div className="as__marquee_to_left">Nuestro propósito</div>
      </div>
      <div className="as__proposito_ilus">
        <svg
          viewBox="0 0 1063 666"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1041.76 666H21.2383C29.5646 491.686 317 352 531.5 352C746 352 1033.43 491.686 1041.76 666Z"
            fill="url(#paint0_linear_1974_90693)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M563.134 377.35C563.134 377.35 562.754 382.287 562.564 385.135C562.374 387.983 560.285 390.072 560.855 391.591C561.425 393.11 566.941 394.688 572.058 395.009C575.287 395.212 583.871 398.483 594.845 398.427C601.52 398.393 598.459 393.597 593.895 390.262C590.643 387.885 586.461 387.381 585.16 387.034C576.616 384.755 576.046 379.628 576.046 379.628L563.134 377.35Z"
            fill="#A88DC1"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M481.479 416.535C481.479 416.535 482.56 423.925 481.702 425.482C481.245 426.313 481.463 429.746 481.765 432.768C482.076 435.876 484.927 438.258 488.37 438.314C491.338 438.362 495.092 438.092 498.889 436.941C507.259 434.404 515.441 432.626 515.654 431.07C515.867 429.514 513.473 422.727 508.536 422.927C503.598 423.126 496.3 424.106 496.297 421.188C496.294 418.27 495.861 414.381 495.861 414.381L481.479 416.535Z"
            fill="#A88DC1"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M478.724 113.626C476.661 114.114 475.216 114.357 475.216 114.357C475.216 114.357 475.051 113.432 474.77 111.847C473.274 103.37 468.481 75.9733 468.001 69.7336C467.48 62.9755 468.542 42.1469 467.433 36.1009C467.327 35.5198 467.201 35.0774 467.051 34.7944C465.342 31.5664 461.734 23.9709 463.443 22.8316C465.152 21.6923 474.837 20.1732 476.735 20.7428C478.634 21.3125 476.925 27.9585 478.065 27.9585C479.204 27.9585 480.526 26.2533 481.293 27.5787C483.382 31.1866 476.356 34.2248 476.546 36.5034C476.735 38.7821 479.584 51.6944 481.103 59.4797C482.085 64.5117 484.331 75.2403 486.799 83.2156C489.268 91.1908 489.078 95.1784 489.458 96.6975C489.813 98.1217 490.836 98.2109 492.369 103.526C492.473 103.885 492.578 104.266 492.686 104.673C493.926 109.357 484.171 112.342 478.724 113.626Z"
            fill="#89D2F6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M489.457 96.6975C489.077 95.1784 489.267 91.1908 486.799 83.2156C484.33 75.2403 482.084 64.5117 481.102 59.4797C479.583 51.6944 476.735 38.7821 476.545 36.5034C476.355 34.2248 483.381 31.1866 481.292 27.5788C480.525 26.2539 479.203 27.9585 478.064 27.9585C476.924 27.9585 478.633 21.3125 476.735 20.7428C474.836 20.1732 465.152 21.6923 463.443 22.8316C463.273 22.9444 463.158 23.1231 463.086 23.3523C466.399 22.3647 473.269 21.412 474.836 21.8821C476.735 22.4518 475.026 29.0978 476.165 29.0978C477.304 29.0978 478.626 27.3932 479.393 28.7181C481.482 32.3259 474.456 35.3641 474.646 37.6427C474.836 39.9214 477.684 52.8337 479.203 60.619C480.185 65.651 482.431 76.3796 484.9 84.3549C487.368 92.3301 487.178 96.3177 487.558 97.8368C487.938 99.3559 489.077 99.3559 490.786 105.812C491.247 107.551 490.19 109.056 488.402 110.326C491.266 108.848 493.292 106.964 492.685 104.673C490.976 98.2166 489.837 98.2166 489.457 96.6975Z"
            fill="#89D2F6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M599.592 302.155C599.592 308.991 591.047 343.17 585.35 358.551C579.654 373.932 576.805 380.768 576.805 380.768C574.944 381.484 572.992 381.837 571.048 381.837C568.118 381.837 565.203 381.034 562.642 379.458L561.994 379.059C561.994 379.059 560.804 373.374 561.424 365.387C561.523 364.105 563.168 362.761 563.282 361.375C564.487 346.645 566.456 326.81 568.83 318.675C572.818 305.003 573.767 302.155 571.488 299.306C569.21 296.458 559.146 291.901 543.765 281.077C528.384 270.254 527.814 267.975 527.814 267.975C527.814 267.975 523.637 287.154 520.789 301.965C517.94 316.776 509.585 326.08 506.167 344.31C502.749 362.539 499.142 384.755 499.142 396.149C499.142 397.823 499.725 402.569 499.711 404.124C499.63 413.144 497.053 416.467 497.053 416.467C493.821 417.895 490.348 418.618 486.862 418.618C485.587 418.618 484.31 418.521 483.043 418.326C482.113 418.185 481.186 417.989 480.271 417.741L479.773 417.606L477.684 408.681C476.256 405.466 475.005 401.811 477.115 398.997C477.115 398.997 476.724 394.394 476.332 387.851C475.548 374.762 474.764 353.91 477.115 346.588C482.052 331.207 487.369 322.663 487.369 307.851C487.369 293.04 484.52 280.508 486.229 260C486.862 252.406 487.807 245.284 488.747 239.321C490.344 229.179 491.926 222.402 491.926 222.402L561.424 232.656C561.424 232.656 577.945 251.455 585.92 267.975C593.895 284.495 599.592 295.319 599.592 302.155Z"
            fill="#0E3875"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M549.814 237.316C538.8 239.221 527.73 242.075 516.603 243.181C513.851 243.454 510.222 243.207 506.465 243.089C502.747 239.81 496.348 237.806 491.318 238.679C490.403 238.839 489.549 239.053 488.747 239.321C487.807 245.283 486.862 252.406 486.229 260C484.52 280.507 487.369 293.04 487.369 307.851C487.369 322.662 482.052 331.207 477.115 346.588C474.764 353.91 475.548 374.761 476.332 387.85C476.724 394.394 477.115 398.997 477.115 398.997C475.005 401.811 476.256 405.466 477.684 408.681L479.773 417.606L480.271 417.74C481.186 417.989 482.113 418.185 483.043 418.325C483.586 417.623 484.066 416.664 484.463 415.405C480.911 414.29 481.634 411.182 483.609 408.964C481.497 406.3 474.244 402.208 481.805 399.301C479.739 392.869 479.405 384.142 479.773 377.251C480.386 365.843 483.85 355.627 488.318 345.223C492.431 335.649 497.351 326.559 498.16 315.921C499.077 303.831 497.653 292.201 499.711 280.042C501.029 272.263 503.768 265.858 506.95 259.434C510.003 259.258 512.855 258.985 515.093 258.823C522.375 258.294 527.946 255.049 533.464 250.724C541.574 244.369 561.193 245.069 566.293 235.568C562.19 232.393 554.443 236.515 549.814 237.316Z"
            fill="#164290"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M599.592 302.154C599.592 295.319 593.895 284.495 585.92 267.975C579.069 253.783 565.912 237.911 562.339 233.718C561.191 234.261 560.101 235.022 559.102 236.038C562.544 247.283 569.394 259.822 575.75 269.681C580.551 277.127 592.804 286.279 593.852 295.291C594.093 297.355 592.812 298.955 592.842 300.543C592.882 302.741 594.183 304.343 594.297 306.24C594.546 310.382 592.684 313.638 592.272 317.635C591.081 329.193 588.215 339.858 585.182 351.119C583.947 355.703 582.739 361.191 580.751 365.364C578.371 370.359 575.442 370.654 570.098 371.048C572.438 371.56 574.496 372.692 576.55 373.895C575.458 376.369 573.058 378.275 570.498 376.702C570.453 376.751 569.285 377.885 569.288 377.884C570.826 379.741 572.674 380.868 574.673 381.421C575.393 381.253 576.106 381.037 576.805 380.768C576.805 380.768 579.654 373.932 585.35 358.551C591.047 343.17 599.592 308.99 599.592 302.154Z"
            fill="#0E3875"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M556.298 107.331C556.298 107.331 556.377 107.142 556.524 106.795C557.721 103.97 563.38 90.6559 566.932 83.2152C570.919 74.8602 572.248 70.8726 573.198 64.6063C574.147 58.3401 584.781 18.4639 584.781 13.9066C584.781 9.34931 583.262 2.3235 585.73 0.614518C588.199 -1.09446 596.934 1.18418 597.883 2.3235C598.832 3.46282 599.782 0.994291 600.921 2.89316C602.061 4.79203 601.071 6.49322 600.162 8.96953C598.238 14.2074 595.373 16.5741 595.225 19.2234C595.01 23.0341 592.376 63.467 590.857 66.885C589.338 70.3029 587.439 80.3669 582.312 96.8871C577.185 113.407 573.198 120.433 573.198 120.433L556.298 107.331Z"
            fill="#89D2F6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M595.415 1.75363C595.909 2.34608 596.403 1.96327 596.923 1.72591C595.84 1.23714 594.044 0.705457 592.176 0.363281C593.805 0.820339 595.084 1.3562 595.415 1.75363Z"
            fill="#F9FFBD"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M600.921 2.89284C600.073 1.47933 599.33 2.48516 598.614 2.62225C599.487 4.40377 598.555 6.05408 597.693 8.39956C595.769 13.6374 592.905 16.0041 592.756 18.6534C592.542 22.4641 589.908 62.897 588.389 66.315C586.87 69.733 584.971 79.797 579.844 96.3171C575.794 109.366 572.456 116.49 571.231 118.908L573.198 120.433C573.198 120.433 577.185 113.407 582.312 96.8868C587.439 80.3666 589.338 70.3026 590.857 66.8847C592.376 63.4667 595.01 23.0337 595.225 19.2231C595.373 16.5738 598.238 14.2071 600.162 8.96922C601.071 6.4929 602.061 4.79171 600.921 2.89284Z"
            fill="#89D2F6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M536.55 76.5695C536.55 76.5695 538.829 83.5954 538.829 86.8234C538.829 90.0515 538.259 90.811 538.829 92.7099C539.398 94.6088 540.538 96.3178 540.538 99.9256C540.538 103.533 538.449 112.838 535.98 113.597C533.512 114.357 527.815 114.357 524.587 110.939C521.359 107.521 518.511 91.9504 518.511 91.9504L524.017 83.4055C524.017 83.4055 528.005 81.3167 528.005 78.0886C528.005 74.8606 529.144 73.9111 529.144 73.9111L536.55 76.5695Z"
            fill="#89D2F6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M530.283 111.509C530.283 111.509 530.64 115.224 531.042 117.775C531.612 121.383 534.84 123.662 534.84 123.662C534.84 123.662 529.334 129.168 520.789 129.358C512.244 129.548 509.016 123.662 509.016 123.662C509.016 123.662 513.003 123.092 513.193 119.864C513.383 116.636 513.193 113.977 513.193 113.977L530.283 111.509Z"
            fill="#89D2F6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M540.537 76.3795C536.17 79.2278 532.182 78.0885 532.182 78.0885C532.182 78.0885 534.84 81.3166 535.22 86.6334C535.422 89.4418 535.144 92.5693 534.839 94.8935C534.694 95.9967 533.247 96.3005 532.661 95.3549C531.366 93.2681 529.465 91.0027 527.625 91.7604C524.397 93.0896 523.827 98.2165 526.675 101.065C528.063 102.453 529.18 102.895 529.962 102.981C530.783 103.074 531.233 102.774 531.233 102.774C531.233 102.774 532.182 112.458 529.334 114.737C526.485 117.015 513.193 117.205 512.434 116.446C511.674 115.686 507.497 107.711 504.269 104.863C501.521 102.438 495.748 97.2652 496.548 89.5748C496.687 88.2266 497.028 86.8043 497.623 85.3042C501.61 75.2402 508.826 66.6953 513.193 66.6953C517.561 66.6953 529.334 69.5436 534.081 70.1133C538.828 70.6829 543.765 71.2526 543.765 71.2526C543.765 71.2526 544.904 73.5312 540.537 76.3795Z"
            fill="#133B58"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M497.242 87.5828C501.23 77.5189 508.446 68.974 512.813 68.974C517.18 68.974 528.953 71.8223 533.701 72.3919C538.448 72.9616 543.385 73.5312 543.385 73.5312C543.385 73.5312 543.399 73.5595 543.417 73.6112C544.23 72.1893 543.765 71.2526 543.765 71.2526C543.765 71.2526 538.828 70.6829 534.08 70.1133C529.333 69.5436 517.56 66.6953 513.193 66.6953C508.825 66.6953 501.61 75.2402 497.622 85.3042C496.992 86.8951 496.647 88.4003 496.524 89.819C496.703 89.0934 496.939 88.3481 497.242 87.5828Z"
            fill="#133B58"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M553.26 202.085C555.349 212.149 564.843 233.796 564.843 233.796C564.843 233.796 556.868 242.151 521.739 244.809C486.61 247.468 477.305 199.616 477.305 199.616C477.305 199.616 477.345 193.073 477.366 184.099C477.412 165.264 477.379 135.721 476.736 133.536C475.786 130.307 467.431 113.597 468.57 113.218C469.163 113.02 471.658 112.618 474.77 111.847C476.041 111.533 477.415 111.159 478.805 110.711C480.554 110.149 482.328 109.473 483.951 108.66C488.347 106.461 491.154 104.464 492.369 103.526C492.834 103.167 493.066 102.964 493.066 102.964C493.066 102.964 494.585 106.382 495.344 107.901C496.104 109.42 499.142 113.977 504.079 116.825C509.016 119.674 510.915 122.902 510.915 122.902C510.915 122.902 514.333 126.889 521.739 125.94C529.144 124.991 532.372 121.383 532.372 121.383C532.372 121.383 544.525 119.484 550.032 112.268C555.538 105.053 557.058 102.584 557.058 102.584C557.058 102.584 565.033 110.939 569.97 113.787C574.907 116.636 580.604 119.674 580.604 119.674C580.604 119.674 564.273 133.156 556.108 142.46C552.897 146.119 551.171 192.021 553.26 202.085Z"
            fill="#A88DC1"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M492.411 107.912C493.154 109.489 496.128 114.219 500.959 117.175C505.792 120.131 507.65 123.482 507.65 123.482C507.65 123.482 510.995 127.621 518.243 126.635C519.406 126.477 520.463 126.248 521.419 125.974C514.237 126.769 510.915 122.901 510.915 122.901C510.915 122.901 509.016 119.673 504.079 116.825C499.142 113.976 496.104 109.419 495.344 107.9C494.585 106.381 493.066 102.963 493.066 102.963C493.066 102.963 492.354 103.585 490.936 104.569C491.415 105.69 492.017 107.077 492.411 107.912Z"
            fill="#A88DC1"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M556.108 142.46C564.273 133.156 580.604 119.674 580.604 119.674C580.604 119.674 559.874 134.126 551.882 143.783C548.74 147.58 547.05 195.224 549.094 205.67C550.804 214.403 557.579 231.539 559.754 236.922C563.558 235.14 564.843 233.796 564.843 233.796C564.843 233.796 555.349 212.149 553.26 202.085C551.171 192.021 552.898 146.119 556.108 142.46Z"
            fill="#A88DC1"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M505.599 133.725C505.599 133.725 505.789 129.927 507.498 127.459C509.207 124.99 510.916 122.901 510.916 122.901C510.916 122.901 511.486 121.572 509.397 119.863C507.308 118.154 505.409 117.774 505.409 117.774C505.409 117.774 501.612 119.483 498.953 124.8C496.295 130.117 495.915 133.535 495.915 133.535L505.599 133.725Z"
            fill="#E6B248"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M533.133 196.008C533.133 196.008 539.779 195.439 545.096 188.793C550.413 182.147 552.501 177.399 552.501 177.399C552.501 177.399 553.641 182.881 553.641 185.754C553.641 191.451 552.501 196.578 545.475 205.882C539.641 213.609 533.513 219.934 533.513 219.934L533.133 196.008Z"
            fill="#E6B248"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M536.55 150.625C536.55 150.625 538.259 133.726 541.297 126.89C544.335 120.054 547.373 114.927 547.373 114.927C547.373 114.927 542.436 115.307 540.157 115.876C537.879 116.446 535.6 117.016 532.372 122.902C529.144 128.788 528.954 133.726 528.954 133.726L536.55 150.625Z"
            fill="#E6B248"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M537.31 132.396C537.31 132.396 534.841 199.806 535.031 211.389C535.221 222.972 537.12 232.087 533.322 238.923C529.524 245.759 519.65 248.607 519.65 248.607L514.523 178.918L522.689 136.764L533.322 131.257L537.31 132.396Z"
            fill="#FBBE3F"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M537.309 132.396C537.309 132.396 520.219 139.422 520.788 184.236C521.358 229.049 528.574 245.189 519.649 248.607C510.724 252.025 480.722 249.746 475.785 245.189C470.848 240.632 464.772 199.616 470.848 169.424C476.925 139.232 488.508 132.396 488.508 132.396H537.309Z"
            fill="#F2CF88"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M537.308 132.396C539.017 135.814 523.56 149.529 522.497 162.018C521.737 170.943 465.721 167.715 464.582 163.727C463.442 159.739 473.096 138.772 479.962 133.915C487.748 128.408 494.014 132.206 507.306 131.636C520.598 131.067 535.599 128.978 537.308 132.396Z"
            fill="#FBBE3F"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M537.309 132.395C536.908 131.594 535.776 131.095 534.107 130.809C534.17 130.891 534.226 130.976 534.271 131.066C535.98 134.484 520.522 148.2 519.46 160.689C518.802 168.418 476.696 167.032 464.69 163.931C467.629 167.822 521.751 170.789 522.498 162.018C523.561 149.529 539.018 135.813 537.309 132.395Z"
            fill="#E3A72B"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M467.431 193.349C472.368 188.222 519.104 191.09 521.928 197.337C524.753 203.583 527.649 236.471 522.498 239.871C517.347 243.272 475.216 242.91 470.279 235.884C465.342 228.858 462.494 198.476 467.431 193.349Z"
            fill="#FBBE3F"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M521.929 197.337C519.105 191.09 472.368 188.222 467.431 193.349C466.611 194.201 466.007 195.752 465.591 197.774C479.748 195.833 511.453 198.682 513.764 203.793C516.033 208.812 518.348 231.029 516.499 241.331C519.418 240.98 521.565 240.487 522.499 239.871C527.649 236.471 524.753 203.583 521.929 197.337Z"
            fill="#E3A72B"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M480.125 151.498L488.101 151.921C489.109 151.975 489.764 153.005 489.383 153.94C488.684 155.657 487.759 158.421 487.363 161.764C486.911 165.579 487.054 169.386 487.198 171.49C487.258 172.374 486.53 173.11 485.646 173.058L478.262 172.62C477.561 172.578 476.988 172.047 476.894 171.35C476.594 169.136 476.105 164.228 476.89 159.828C477.555 156.1 478.24 153.735 478.654 152.499C478.864 151.872 479.465 151.463 480.125 151.498Z"
            fill="#C99833"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M504.94 151.948L512.925 152.187C513.934 152.217 514.612 153.232 514.253 154.176C513.594 155.909 512.732 158.693 512.414 162.044C512.05 165.869 512.28 169.671 512.472 171.772C512.553 172.654 511.843 173.407 510.957 173.375L503.565 173.107C502.863 173.082 502.278 172.563 502.168 171.87C501.817 169.662 501.216 164.767 501.898 160.351C502.477 156.608 503.108 154.228 503.493 152.982C503.689 152.351 504.28 151.928 504.94 151.948Z"
            fill="#C99833"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M554.209 213.857C555.081 223.444 549.482 232.386 540.965 236.415C543.363 236.384 546.365 235.384 548.712 234.745C551.187 234.071 555.885 233.423 557.752 231.491C560.586 228.557 558.231 217.509 554.209 213.857Z"
            fill="#A88DC1"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M553.829 141.51C552.153 144.378 545.849 146.886 542.873 147.017C545.35 147.408 547.739 148.734 550.325 148.537C554.556 148.215 553.214 144.059 553.829 141.51Z"
            fill="#A88DC1"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M520.789 301.964C522.995 290.491 525.998 276.4 527.24 270.63C525.907 273.759 522.746 277.598 521.714 280.099C519.447 285.595 519.174 291.261 518.224 297.042C516.532 307.341 510.905 316.502 506.929 325.898C498.612 345.554 497.359 366.74 497.363 387.897C497.363 391.487 498.447 396.084 497.112 399.457C495.975 402.332 493.455 403.075 490.863 404.188C490.858 404.369 490.758 404.583 490.649 404.709C492.712 405.26 496.811 403.098 497.661 406.697C498.553 410.471 493.284 412.15 490.828 413.032C491.728 413.345 493.751 413.253 494.667 413.951C495.92 414.905 495.292 415.698 495.963 416.782C495.986 416.819 496.009 416.854 496.032 416.89C496.374 416.756 496.715 416.615 497.053 416.466C497.053 416.466 499.63 413.143 499.711 404.123C499.725 402.568 499.142 397.823 499.142 396.148C499.142 384.755 502.749 362.538 506.167 344.309C509.585 326.08 517.94 316.775 520.789 301.964Z"
            fill="#0E3875"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M597.987 394.341C597.137 392.997 595.625 391.525 593.897 390.262C590.644 387.885 586.462 387.381 585.162 387.034C579.261 385.461 577.164 382.529 576.431 380.865C576.273 380.928 576.12 380.993 575.974 381.063C576.525 384.587 577.534 386.786 580.503 388.871C583.305 390.839 586.372 390.515 589.61 391.349C592.292 392.04 594.329 394.512 597.05 394.45C597.392 394.442 597.703 394.404 597.987 394.341Z"
            fill="#A88DC1"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1974_90693"
              x1="13.6907"
              y1="352"
              x2="13.9357"
              y2="666"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6F1F9" stopOpacity="0.6" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
