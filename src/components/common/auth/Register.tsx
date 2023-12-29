// Register.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/store";
import { userRegister } from "../../../redux/auth/auth.actions";
import { UserData } from "../../../redux/auth/auth.types";
import { commonImages } from "../../../data/common/images";
import { Role } from "../../../constant/role";

const Register: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<UserData>({
    name: "",
    email: "",
    password: "",
    role: "",
  });
const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    // Clear errors when the user starts typing
    setErrors({
      ...errors,
      [e.target.id]: "",
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simple validation
    const validationErrors: { [key: string]: string } = {};
    if (!formData.name) validationErrors.name = "Name is required";
    if (!formData.email) validationErrors.email = "Email is required";
    if (!formData.role) validationErrors.role = "Role is required";
    if (!formData.password) validationErrors.password = "Password is required";

    if (Object.keys(validationErrors).length > 0) {
      console.log("hello")
      console.log(Object.keys(validationErrors))
      setErrors(validationErrors);

    } else {
      dispatch(userRegister(formData));
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen items-start justify-center mt-10">
      {/* ... (left side image section) */}
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
          className="shadow-md rounded px-4 md:px-8 pt-6 pb-8 mb-4 w-full max-w-md transform scale-100 hover:scale-105 transition-transform duration-300 hover:border-2 border-bgFooterGreen hover:bg-white"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-textGreenFirst uppercase">
            Register
          </h2>
          {/* Name Input */}
          <div className="mb-4">
            <input
              type="text"
              id="name"
              onChange={handleChange}
              value={formData.name}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 hover:border-bgFooterGreen ${
                errors.name && "border-red-500"
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              id="email"
              onChange={handleChange}
              value={formData.email}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 hover:border-bgFooterGreen ${
                errors.email && "border-red-500"
              }`}
              placeholder="Enter Your Email "
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone Number Input */}
          {/* ... (similar structure for other inputs) */}

          {/* Role Dropdown */}
          <div className="mb-4 relative flex flex-col md:flex-row justify-between">
            {/* ... (other elements) */}
            <select
              id="role"
              onChange={handleChange}
              value={formData.role}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 hover:border-bgFooterGreen ${
                errors.role && "border-red-500"
              }`}
            >
              <option  value="">Select Role</option>
              <option value={Role.Patient}>{Role.Patient}</option>
              <option value={Role.Doctor}>{Role.Doctor}</option>
              {/* ... (options) */}
            </select>
            {errors.role && (
              <p className="text-xs text-red-500 mt-1">{errors.role}</p>
            )}
          </div>

          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              onChange={handleChange}
              value={formData.password}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 hover:border-bgFooterGreen ${
                errors.password && "border-red-500"
              }`}
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-0 right-0 mt-2 mr-3"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-bgNormalButtonGreen hover:opacity-75 text-white font-bold p-1 rounded-full pl-10 pr-10 focus:outline-none focus:shadow-outline uppercase text-lg"
            >
              Submit
            </button>
          </div>

          {/* Have an account? Login Link */}
          <div className="flex mt-4 gap-1 justify-center">
            <span className="text-xs md:text-sm text-textNormalGray italic ">
              Have an account ?
            </span>
            <Link
              className="text-xs md:text-sm text-textNormalGray italic cursor-pointer"
              to={"/auth/login"}
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
