import { MyContext } from "@/app/context";
import LogoFooterSVG from "@/public/LogoFooterSVG";
import { useContext, useEffect, useRef } from "react";

const Footer = () => {
  const { observer, footerRef } = useContext(MyContext);

  useEffect(() => {
    if (!observer) return;
    observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, [observer]);

  return (
    <footer
      className="w-full h-[100vh] flex justify-between flex-col pt-[4%] text-white bg-[#252422]"
      ref={footerRef}
    >
      <div className="flex justify-start pl-[5%] pr-[5%] ">
        <div className="w-1/2">
          <LogoFooterSVG />
        </div>
        <div className="w-1/2 text-3xl font-semibold text-[#e7e7e7]">
          <span className="w-[70%] block">
            {" "}
            We collaborate with ambitious brands and people. Let&apos;s build.
            <a href="" className="inline-block underline ">
              biz@basicagency.com
            </a>
          </span>
        </div>
      </div>
      <div className="flex justify-start pl-[5%] pr-[5%] ">
        <div className="w-1/2 flex flex-col gap-[25px] ">
          <span
            className="text-xl font-medium	 flex gap-[10px] items-center
          before:content-[''] before:w-[15px] before:h-[15px] 
        before:bg-white before:block before:rounded-full"
          >
            STAY IN THE KNOW
          </span>
          <input
            type="text"
            placeholder="Email Address"
            className="w-[80%] text-white border-b-[2px] border-lightslategray pb-[15px]"
          />
        </div>
        <div className="w-1/2 ">
          <div
            className="w-[90%] flex justify-between [&>*>span]:text-xl [&>*>span]:font-medium [&>*>span]:flex [&>*>span]:gap-[10px] [&>*>span]:items-center 
          [&>*>span]:before:content-[''] [&>*>span]:before:w-[15px] [&>*>span]:before:h-[15px] 
        [&>*>span]:before:bg-white [&>*>span]:before:block [&>*>span]:before:rounded-full"
          >
            <div className="flex flex-col gap-[25px]">
              <span className="font-semibold">SOCIAL</span>
              <div className="flex flex-col text-[#e7e7e7] text-lg font-semibold	[&>*]:cursor-pointer [&>*:hover]:underline">
                <span>Instagram</span>
                <span>Twitter</span>
                <span>LinkedIn</span>
                <span>Facebook</span>
              </div>
            </div>
            <div className="flex flex-col gap-[25px] text-[#e7e7e7]">
              <span className="font-semibold">INITIATIVES</span>
              <div className="flex flex-col text-lg font-semibold [&>*]:cursor-pointer [&>*:hover]:underline">
                <span>Crafted</span>
                <span>Applied</span>
                <span>Brandbeats</span>
                <span>Moves</span>
                <span>B®/Good</span>
              </div>
            </div>
            <div className="flex flex-col gap-[25px] text-[#e7e7e7]">
              <span className="font-semibold">OFFICES</span>

              <div className="flex flex-col text-lg font-semibold [&>*]:cursor-pointer [&>*:hover]:underline">
                <span>San Diego – CA</span>
                <span>New York – NY</span>
                <span>Bay Area – CA</span>
                <span>St. Louis – MO</span>
                <span>London – EN</span>
                <span>Berlin – GE</span>
                <span>Argentina – AR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#191918] pl-[5%] pr-[5%] pt-[25px] pb-[25px] text-[#454545] text-xs font-semibold flex justify-between">
        <span className="">BASIC/DEPT®, INC 10 - 23©</span>
        <span className="">EASY TO UNDERSTAND, IMPOSSIBLE TO IGNORE.™</span>
        <div className="[&>*]:cursor-pointer [&>*:hover]:underline">
          <span>TERMS</span>,<span>PRIVACY POLICY</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
