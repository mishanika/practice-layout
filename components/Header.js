import { MyContext } from "@/app/context";
import DotsSVG from "@/public/DotsSVG";
import LogoSVG from "@/public/LogoSVG";
import { useContext } from "react";

const Header = () => {
  const { headerRef } = useContext(MyContext);

  return (
    <header
      className="w-full flex justify-between fixed p-[2.5vw] text-white z-[1] ease-linear duration-300"
      ref={headerRef}
    >
      <span className="logo">
        <LogoSVG />
      </span>
      <nav
        className="flex grow gap-[5%] justify-center text-sm font-medium [&>*]:cursor-pointer [&>*]:overflow-hidden
       [&>*]:after:content-[''] [&>*]:after:w-[100%] [&>*]:after:h-[1px] [&>*]:after:ease-linear [&>*]:after:duration-300
      [&>*]:after:block [&>*]:after:bg-white [&>*]:after:translate-x-[-100%] [&>*:hover]:after:translate-x-0"
      >
        <span>WORK</span>
        <span>ABOUT</span>
        <span>NEWS</span>
        <span>THINKING</span>
        <span>CAREERS</span>
        <span>CONTACT</span>
      </nav>
      <div className="cursor-pointer">
        <DotsSVG />
      </div>
    </header>
  );
};
export default Header;
