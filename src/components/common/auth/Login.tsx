import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../../redux/auth/auth.types";
import { useAppDispatch } from "../../../redux/store";
import { userLogin } from "../../../redux/auth/auth.actions";
import { commonImages } from "../../../data/common/images";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const Navigate = useNavigate();
  const [formData, setFormData] = useState<UserData>({
    email: "",
    phone_number: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userLogin(formData));
    Navigate("/");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen items-start justify-center mt-10">
      {/* Left side image */}
      <div className="flex justify-center items-center w-full md:w-1/3">
        <img
          className="rounded h-80 mb-4 w-80 max-w-md"
          src={commonImages.login_side_image}
          alt=""
        />
      </div>

      {/* Right side form */}
      <div className="flex justify-center items-center w-full md:w-1/2 p-4 md:p-8">
        <form
          className=" shadow-md rounded px-4 md:px-8 pt-6 pb-8 mb-4 w-full max-w-md transform scale-100 hover:scale-105 transition-transform duration-300 hover:border-2 border-bgFooterGreen hover:bg-white"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-textGreenFirst uppercase">
            Login
          </h2>

          <div className="mb-4 relative flex justify-between">
            <input
              type="email"
              id="email"
              onChange={handleChange}
              value={formData.email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 hover:border-bgFooterGreen"
              placeholder="Email or Phone number"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="password"
              onChange={handleChange}
              value={formData.password}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 hover:border-bgFooterGreen"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2 leading-tight" />
              <span className="text-xs md:text-sm text-textNormalGray italic">
                Remember me
              </span>
            </div>
            <span className="text-xs md:text-sm text-textNormalGray italic cursor-pointer">
              Forget Password ?
            </span>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-bgNormalButtonGreen hover:opacity-75 text-white font-bold p-1 rounded-full pl-10 pr-10 focus:outline-none focus:shadow-outline uppercase text-xl"
            >
              Submit
            </button>
          </div>
          <div className="flex mt-4 gap-1 justify-center">
            <span className="text-xs md:text-sm text-textNormalGray italic ">
              Don't have an account ?
            </span>
            <Link
              className="text-xs md:text-sm text-textNormalGray italic cursor-pointer"
              to={"/auth/register"}
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
