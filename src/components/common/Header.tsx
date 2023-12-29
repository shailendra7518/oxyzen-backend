import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import DropdownMenu from "./DropdownMenu";
import { commonImages } from "../../data/common/images";

// Add the styled header section code here
const StyledHeader = () => (
  <header className="bg-white shadow-md p-4 relative z-10">
    <div className="container mx-auto flex items-center justify-between">
      {/* Logo or site title */}
      <div className="text-lg font-bold text-gray-800">My Website</div>

      {/* Location input and search icon */}
      <div className="flex items-center justify-start">
        <input
          type="text"
          placeholder="Enter location"
          className=" border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded-r-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M22 22l-6-6m0 0l-6-6m6 6L4 4"
            ></path>
          </svg>
        </button>
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
    <>
      <div className="flex flex-1 fixed w-full top-0 bg-bgCardWhite items-center content-center justify-between p-5 shadow-sm text-textNavLinkNormal max-w-screen-xl">
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
              className="bg-bgNormalButtonGreen p-2 font-semibold text-xs text-white"
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
      <StyledHeader />
    </>
  );
};

export default Header;
