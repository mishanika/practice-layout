"use client";
import AgeSVG from "@/public/AgeSVG";
import CampaignSVG from "@/public/CampaignSVG";
import WebbySVG from "@/public/WebbySVG";
import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "./context";
import SecondLogoSVG from "@/public/SecondLogoSVG";
import { newsText, sliderText } from "@/constants/text";
import ArrowSVG from "@/public/ArrowSVG";
//import video from "../public/video.mp4";

const Main = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const { videoRef, changeColorRef, mainRef, observer } = useContext(MyContext);

  const handleMouseDown = (e) => {
    console.log(sliderRef.current.childNodes);
    setIsDragging(true);
    setStartPosition(e.clientX);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartPosition(e.touches[0].clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const currentPosition = e.clientX;
      for (let i = 0; i < 3; i++) {
        console.log(Math.abs(startPosition - currentPosition));
        sliderRef.current.scrollLeft += (startPosition - currentPosition) / 40;
      }
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      const currentPosition = e.touches[0].clientX;
      sliderRef.current.style.transform = `translateX(${startPosition - currentPosition}px)`;
    }
  };

  useEffect(() => {
    if (!observer) return;
    observer.observe(videoRef.current);
    observer.observe(changeColorRef.current);

    return () => observer.disconnect();
  }, [observer]);

  const sliderRender = ({ url, name, description }) => (
    <div className="flex flex-col min-w-[25%] gap-[50px] select-none">
      <div className="h-[50px]">
        <img src={url} alt="" className="h-[100%]" />
      </div>
      <div className="flex flex-col gap-[25px">
        <span className="font-semibold text-xl">{name}</span>
        <span className="font-medium ">{description}</span>
      </div>
    </div>
  );

  const newsRender = ({ url, title, press }) => (
    <div
      className="wrapper flex gap-[25px] pt-[25px] mb-[75px] border-black border-t-[1px] 
    [&:hover>div>img]:scale-100 [&:hover>div:nth-child(2)>div>span]:underline cursor-pointer standart"
    >
      <div className="min-w-[650px] max-w-[650px] overflow-hidden">
        <img src={url} alt="" className="scale-105 transition-all delay-75" />
      </div>
      <div className="grow flex flex-col justify-between">
        <div className=" w-full flex justify-between items-start">
          <span className="w-[75%] text-[2.5rem] font-medium uppercase top-[-0.8rem] relative">{title}</span>

          <div className="overflow-hidden">
            <ArrowSVG />
          </div>
        </div>
        <span className="top-[0.5rem] relative">
          <b>Press</b> <span>{press}</span>
        </span>
      </div>
    </div>
  );

  return (
    <main className="w-[100%] h-[100%] bg-[#f4f4f4ff] standart " ref={mainRef}>
      <div className="bg"></div>
      <section className="overflow-hidden">
        <div className="w-[100%] h-[100vh] flex justify-center scale-125">
          <video preload="auto" playsInline autoPlay muted loop className="h-[100%] " ref={videoRef}>
            <source
              src="https://cdn.sanity.io/files/8nn8fua5/production/c6fb986a862cbe643c40cbdd0318ebc495efb187.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section>
        <div className="pr-[5vw] pl-[5vw] z-[1] relative w-[100%] ">
          <div
            className=" flex items-end [&>*]:grow [&>*]:flex [&>*]:flex-col [&>*]:gap-[2rem]
      [&>*]:justify-center  [&>*>svg]:w-[50%] [&>*>span]:w-[60%] [&>*>span]:text-center	pt-[18vw] pb-[18vw] pr-[10vw] pl-[10vw]
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
          <div className="w-[100%] flex flex-col justify-evenly gap-[100px] pt-[100px] pb-[300px] border-b-[1px] border-black">
            <div className="wrapper flex justify-between items-center">
              <div className="text flex flex-col gap-[25px]">
                <div className=" w-[78%] text-4xl font-semibold leading-[45px]">
                  BASIC/DEPT® is a global branding and digital design agency building products, services, and eCommerce
                  experiences that turn cultural values into company value.
                </div>
                <div
                  className="w-[160px] h-[35px] rounded-3xl border-black border-[1px] hover:text-white [&:hover>*]:translate-y-0 
                  text-[14px] font-bold cursor-pointer flex justify-center items-center relative z-[10] overflow-hidden"
                >
                  <span className="z-[10] ease-linear delay-200">SEE THE WORK</span>

                  <div className="absolute w-[100%] h-[100%] bg-black translate-y-[100%] transition-all ease-linear delay-200"></div>
                </div>
              </div>
              <div className="logo">
                <SecondLogoSVG />
              </div>
            </div>
            <div
              className="phtos flex w-[100%] gap-[25px] [&>*:hover>div>img]:scale-100 [&>*:hover>span:nth-child(2)]:underline
              [&>*:hover>span:nth-child(2)]:underline-offset-2 [&>*>div>img]:delay-100 [&>*>div>img]:scale-105
            [&>*>div>img]:ease-linear [&>*>div>img]:transition-all
            [&>*>span:nth-child(2)]:text-2xl [&>*>span:nth-child(2)]:font-semibold
            [&>*>span:nth-child(3)]:text-sm [&>*>span:nth-child(3)]:font-medium [&>*>span:nth-child(3)]:w-[50%]
            [&>*]:flex [&>*]:flex-col [&>*]:gap-[15px]
            "
            >
              <div className="w-[33.33%] cursor-pointer">
                <div className="w-[100%] overflow-hidden">
                  <img
                    src="https://cdn.sanity.io/images/8nn8fua5/production/931c4de4f3cbbeb30a5b65677a174f2980e44805-720x900.jpg?w=720&fm=webp&q=65"
                    alt=""
                    className="w-[100%] "
                  />
                </div>

                <span>PATAGONIA</span>
                <span>AN ECOMMERCE EXPERIENCE DRIVEN BY PATAGONIA’S BRAND MISSION</span>
              </div>
              <div className="w-[33.33%] cursor-pointer">
                <div className="w-[100%] overflow-hidden">
                  <img
                    src="https://cdn.sanity.io/images/8nn8fua5/production/f1931ee572cd014ca5c3b5fe7e6054cfc0583624-720x900.jpg?w=720&fm=webp&q=65"
                    alt=""
                    className="w-[100%]"
                  />
                </div>
                <span>WILSON </span>
                <span>A CENTURY-OLD SPORTS BRAND FINDING ITS PLACE IN CULTURE</span>
              </div>
              <div className="w-[33.33%]">
                <video preload="auto" playsInline autoPlay muted loop className="w-[100%] cursor-pointer">
                  <source
                    src="https://cdn.sanity.io/files/8nn8fua5/production/9dc5a490bd877e8685f2089209db192188dd21e7.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <span>GOOGLE STORE</span>
                <span>AN ECOMMERCE EXPERIENCE HELPING GOOGLE BRING ITS HARDWARE TO PEOPLE ACROSS THE GLOBE</span>
              </div>
            </div>
          </div>
          <div className="w-[100%] ">
            <div className="flex items-center pt-[15px] text-sm font-semibold">
              00 <div className="w-[30%]"></div> /05 <div className="w-[70%]"></div> <span className="text-2xl">●</span>
            </div>
            <div className="pt-[100px]">
              <span className="flex flex-col font-bold text-5xl mb-[150px]">
                <span>Featured</span> Engagements
              </span>
              <div
                className="standart flex gap-[100px] pb-[100px] overflow-x-auto "
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
              >
                {sliderText.map(sliderRender)}
              </div>
            </div>
          </div>
          <div className="standart w-[100%] py-[200px] flex justify-between" ref={changeColorRef}>
            <div className="">
              <div className="flex flex-col gap-[25px] sticky top-[150px]" id="sticky">
                <span className="text-[6.25vw] font-bold leading-[8rem] mr-[50px] ">
                  BASIC/DEPT ® HELPS BRANDS ● CONNECT W/ CULTURE
                </span>
                <span className="">
                  ADWEEK <span>AGENCY SPOTLIGHT</span>
                </span>
                <div
                  className="w-[160px] h-[35px] rounded-3xl border-[#f9cdcd] border-[1px] hover:text-black [&:hover>*]:translate-y-0 
                  text-[14px] font-bold cursor-pointer flex justify-center items-center relative z-[10] overflow-hidden mt-[25px]"
                >
                  <span className="z-[10] ease-linear delay-200 ">SEE THE WORK</span>

                  <div className="absolute w-[100%] h-[100%] bg-[#f9cdcd] translate-y-[100%] transition-all ease-linear delay-200"></div>
                </div>
              </div>
            </div>
            <video preload="auto" playsInline autoPlay muted loop className="h-[100%] ">
              <source
                src="https://cdn.sanity.io/files/8nn8fua5/production/e4a840ba8dfeded08ac4d0ba6e930be56fc68e3b.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex justify-between items-center pb-[50px] ">
            <span className="text-[3rem] font-semibold leading-[3.5rem] flex flex-col">
              {" "}
              <span>FEATURED</span> NEWS
            </span>
            <div
              className="w-[160px] h-[35px] rounded-3xl border-black border-[1px] hover:text-white [&:hover>*]:translate-y-0 
                  text-[14px] font-bold cursor-pointer flex justify-center items-center relative z-[10] overflow-hidden standart"
            >
              <span className="z-[10] ease-linear delay-200">VIEW ALL</span>

              <div className="absolute w-[100%] h-[100%] bg-black translate-y-[100%] transition-all ease-linear delay-200"></div>
            </div>
          </div>
          <div className="">{newsText.map(newsRender)}</div>
        </div>
      </section>
    </main>
  );
};

export default Main;
