import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";

const Header = () => {
  const [isactive, setIsactive] = React.useState(false);
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);
  const { totalItems } = useContext(CartContext);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        setIsactive(true);
      } else {
        setIsactive(false);
      }
    });
  }, []);
  return (
    <header
      className={`${
        isactive ? "bg-white py-4 shadow-md " : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <img src={Logo} alt="logo" className="w-[40px]" />
          </div>
        </Link>
      
      <div
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="cursor-pointer flex relative max-w-[50px]"
      >
        <BsBag className="text-2xl " />
        <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
          {totalItems}
        </div>
      
      </div>
      </div>
    </header>
  );
};

export default Header;
