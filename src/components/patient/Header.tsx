import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import DropdownMenu from "../common/DropdownMenu";
import { commonImages } from "../../data/common/images";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";


// Add the styled header section code here
export const StyledHeader = () => (
  <header className="bg-white  p-4 relative z-10  pl-56 pr-40">
    <div className="container mx-auto flex  items-center justify-center gap-4 border-2 border-gray-300 rounded-md ">
      <div className="flex items-center flex-wrap">
        <div className="flex items-center pl-2 w-[40vw]">
          <CiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="py-2 px-4 outline-none border-gray-300 rounded-l-md "
          />
        </div>

        <div className="flex items-center pl-2  border-l-2 border-gray-300 w-[15vw]">
          <IoLocationOutline className="text-gray-500" />
          <input
            type="text"
            placeholder="Enter location"
            className="py-2 px-4 outline-none border-gray-300 rounded-l-md  w-full"
          />
        </div>
      </div>
    </div>
  </header>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const state = useSelector((state: RootState) => state.auth);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex flex-1  w-full bg-bgCardWhite items-center content-center justify-between p-5 shadow-sm text-textNavLinkNormal max-w-screen-2xl">
        <img className="h-9" src={commonImages.company_logo} alt="logo" />
        <div className="hidden justify-between items-center uppercase ml-10 w-3/5 md:flex ">
          <Navbar />
        </div>

        <div className="flex items-center gap-2">
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <RxCross2 /> : <FaBars />}
          </button>
          {state.user ? (
            <DropdownMenu />
          ) : (
            <Link
              to={"/auth/login"}
              className="bg-bgNormalButtonGreen p-2 font-semibold text-xs text-white rounded-full pl-5 pr-5"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div className="flex absolute flex-col bg-bgHomeGreenSecond justify-between items-center uppercase gap-5 w-full md:mt-0 md:hidden">
          <Navbar />
        </div>
      )}
      {/* <StyledHeader /> */}
    </div>
  );
};

export default Header;
