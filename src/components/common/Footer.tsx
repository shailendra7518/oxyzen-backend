import React from "react";
import { Link } from "react-router-dom";
import { commonImages } from "../../data/common/images";

const Footer: React.FC = () => {
  return (
    <div className="bg-bgFooterGreen text-white  p-10 mt-10">
      <div className="flex flex-col justify-center gap-7 sm:flex-row">
        <div className="flex flex-col mr-10 justify-center w-full sm:items-start sm:w-1/6">
          <img
            src={commonImages.footer_logo}
            alt="logo-image"
            className="mb-4 sm:mb-0"
          />
        </div>
        <div className="flex flex-col items-center w-full sm:items-start sm:w-1/6">
          <h1 className="text-2xl mb-2">Address</h1>
          <p className="text-sm text-center sm:text-left">
           Dindoli,Surat ,Gujrat ,India 394210
          </p>
        </div>
        <div className="flex flex-col items-center w-full sm:items-start sm:w-1/6">
          <h1 className="text-2xl mb-2">Explore</h1>
          <Link className="text-sm" to="/">
            Home
          </Link>
          <Link className="text-sm" to="/">
            About
          </Link>
          <Link className="text-sm" to="/">
            Services
          </Link>
          <Link className="text-sm" to="/">
            Blogs
          </Link>
          <Link className="text-sm" to="/">
            Team
          </Link>
        </div>
        <div className="flex flex-col items-center w-full sm:items-start sm:w-1/6">
          <h1 className="text-2xl mb-2">Resources</h1>
          <Link className="text-sm" to="/">
            Documentation
          </Link>
          <Link className="text-sm" to="/">
            Privacy Policy
          </Link>
          <Link className="text-sm" to="/">
            Press Files
          </Link>
          <Link className="text-sm" to="/">
            Contacts
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-2xl">Contact</h1>
          <p className="text-sm">+91 7518******</p>
          <p className="text-sm">oxyzencare@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
