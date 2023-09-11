import { MyContext } from "@/app/context";
import DotsSVG from "@/public/DotsSVG";
import LogoSVG from "@/public/LogoSVG";
import XMarkSVG from "@/public/XMarkSVG";
import { useContext, useEffect, useRef, useState } from "react";

const Header = () => {
  const [burger, setBurger] = useState(false);
  const menuRef = useRef(null);
  const { headerRef, mainRef } = useContext(MyContext);

  const openMenu = () => {
    if (burger) {
      menuRef.current.classList.toggle("open");
      document.querySelector("body").classList.toggle("no-scroll");
    }
  };

  useEffect(() => {
    console.log(window.screen.width);
    if (window.screen.width <= 768) {
      console.log(window.screen.width);
      setBurger(true);
    }
  }, []);

  return (
    <>
      <div
        className="w-[100vw] h-[100vh] z-[3] bg-[#292826] hidden p-[2.5vw] text-[#f9cdcd] flex-col fixed gap-[50px]"
        ref={menuRef}
      >
        <div className="flex justify-between">
          <span className="logo">
            <LogoSVG fill={"#f9cdcd"} staticLogo={true} />
          </span>
          <div className="" onClick={() => openMenu()}>
            <XMarkSVG fill={"#f9cdcd"} />
          </div>
        </div>
        <nav className="h-[20%] flex flex-col justify-between">
          <span>WORK</span>
          <span>ABOUT</span>
          <span>NEWS</span>
          <span>THINKING</span>
          <span>CAREERS</span>
          <span>CONTACT</span>
        </nav>
      </div>
      <header
        className="w-full flex justify-between items-center fixed p-[2.5vw] text-white z-[2] transition-[all] ease-linear delay-[0.3] "
        ref={headerRef}
      >
        <span className="logo">
          <LogoSVG />
        </span>
        {!burger ? (
          <>
            <nav
              className="flex grow gap-[5%] justify-center text-sm font-medium [&>*]:cursor-pointer [&>*]:overflow-hidden
       [&>*]:after:content-[''] [&>*]:after:w-[100%] [&>*]:after:h-[1px] [&>*]:after:ease-linear [&>*]:after:duration-300
      [&>*]:after:block [&>*]:after:bg-white [&>*]:after:translate-x-[-102%] [&>*:hover]:after:translate-x-0"
            >
              <span>WORK</span>
              <span>ABOUT</span>
              <span>NEWS</span>
              <span>THINKING</span>
              <span>CAREERS</span>
              <span>CONTACT</span>
            </nav>
          </>
        ) : (
          <div></div>
        )}

        <div className="cursor-pointer" onClick={() => openMenu()}>
          <DotsSVG />
        </div>
      </header>
    </>
  );
};
export default Header;
