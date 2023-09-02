"use client";
import AgeSVG from "@/public/AgeSVG";
import CampaignSVG from "@/public/CampaignSVG";
import WebbySVG from "@/public/WebbySVG";
import Image from "next/image";
import { useContext, useEffect, useRef } from "react";
import { MyContext } from "./context";
//import video from "../public/video.mp4";

const Main = () => {
  const { videoRef, observer } = useContext(MyContext);

  useEffect(() => {
    if (!observer) return;
    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, [observer]);

  return (
    <main className="w-[100%] h-[100%] overflow-x-hidden bg-white">
      <section className="">
        <div className="w-[100%] h-[100vh] flex justify-center scale-125 ">
          <video
            preload="auto"
            playsInline
            autoPlay
            muted
            loop
            className="h-[100%] "
            ref={videoRef}
          >
            <source
              src="https://cdn.sanity.io/files/8nn8fua5/production/c6fb986a862cbe643c40cbdd0318ebc495efb187.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div
          className="relative z-[1] flex items-end w-[100%] bg-white [&>*]:grow [&>*]:flex [&>*]:flex-col [&>*]:gap-[2rem]
      [&>*]:justify-center  [&>*>svg]:w-[50%] [&>*>span]:w-[60%] [&>*>span]:text-center	pt-[18vw] pb-[18vw] pr-[15vw] pl-[15vw]
      border-b-[1px] border-black"
        >
          <div className="items-start">
            <AgeSVG />
            <span> Design and Branding Agency of the Year</span>
          </div>
          <div className="items-center">
            <WebbySVG />
            <span> Agency of the Year</span>
          </div>
          <div className="items-end">
            <CampaignSVG />
            <span>Digital Innovation Agency of the Year Finalist</span>
          </div>
        </div>
      </section>
      <section className="h-[100vh]"></section>
    </main>
  );
};

export default Main;
