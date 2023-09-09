"use client";
import "./globals.css";
import { Schibsted_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import { MyContext } from "./context";

const inter = Schibsted_Grotesk({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const videoRef = useRef(null);
  const changeColorRef = useRef(null);
  const mainRef = useRef(null);
  const smoothScrollRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [observer, setObserver] = useState(null);

  const smoothCoef = 0.05;

  const onScroll = () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > offset) {
      // downscroll code
      headerRef.current.style.transform = "translateY(-100%)";
    } else if (st < offset) {
      headerRef.current.style.transform = "translateY(0)";
    }

    setOffset(st <= 0 ? 0 : st);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [offset]);

  // useEffect(() => {
  //   const onResize = () => {
  //     mainRef.current.style.height = smoothScrollRef.current.offsetHeight + "px";
  //   };

  //   onResize();

  //   const loop = () => {
  //     let prevY = window.scrollY;
  //     let curY = window.scrollY;
  //     let y = window.scrollY;
  //     let dy;

  //     return () => {
  //       curY = window.scrollY;
  //       dy = curY - prevY;
  //       y = Math.abs(dy) < 1 ? curY : y + dy * smoothCoef;
  //       prevY = y;
  //       smoothScrollRef.current.style.transform = `translate3d(0,${-y}px,0)`;

  //       requestAnimationFrame(loop);
  //     };
  //   };

  //   const smooth = loop();
  //   smooth();

  //   window.addEventListener("resize", onResize);

  //   return () => {
  //     window.removeEventListener("resize", onResize);
  //   };
  // }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    };

    setObserver(
      new IntersectionObserver((entries, observer) => {
        if (entries.length != 1) {
          document.querySelectorAll(".svg").forEach((svg) => (svg.style.fill = "white"));
          headerRef.current.style.background = "transparent";
          headerRef.current.style.color = "white";
          mainRef.current.style.background = "#f4f4f4ff";
        } else {
          entries.forEach((item) => {
            // if (item.isIntersecting && item.target === footerRef.current && item.intersectionRatio >= 0.85) {
            //   headerRef.current.style.background = "white";
            //   headerRef.current.style.color = "black";
            //   mainRef.current.style.background = "#f4f4f4ff";
            // } else
            if (item.target === videoRef.current && item.isIntersecting && item.intersectionRatio >= 0.3) {
              document.querySelectorAll(".svg").forEach((svg) => (svg.style.fill = "white"));
              headerRef.current.style.background = "transparent";
              headerRef.current.style.color = "white";
              mainRef.current.style.background = "#f4f4f4ff";
            } else if (
              item.target === changeColorRef.current &&
              item.isIntersecting &&
              item.intersectionRatio >= 0.35
            ) {
              document.querySelectorAll(".standart").forEach((el) => el.classList.add("changeColor"));
              document.querySelectorAll(".svg").forEach((svg) => (svg.style.fill = "#f9cdcd"));
              headerRef.current.style.background = "#292826";
              headerRef.current.style.color = "#f9cdcd";
              mainRef.current.style.background = "#292826";
              mainRef.current.style.color = "#f9cdcd";
            } else {
              document.querySelectorAll(".standart").forEach((el) => el.classList.remove("changeColor"));
              document.querySelectorAll(".svg").forEach((svg) => (svg.style.fill = "black"));
              headerRef.current.style.background = "#f4f4f4ff";
              headerRef.current.style.color = "black";
              mainRef.current.style.color = "black";
              mainRef.current.style.background = "#f4f4f4ff";
            }
            console.log(item);
          });
        }
      }, options)
    );
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <MyContext.Provider
          value={{
            headerRef: headerRef,
            footerRef: footerRef,
            videoRef: videoRef,
            changeColorRef: changeColorRef,
            mainRef: mainRef,

            observer: observer,
          }}
        >
          <div className="w-[100%] flex flex-col">
            <Header />
            {children}
            <Footer />
            <div ref={smoothScrollRef}></div>
          </div>
        </MyContext.Provider>
      </body>
    </html>
  );
};
export default RootLayout;
