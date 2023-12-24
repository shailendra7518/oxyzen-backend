// Register.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/store";
import { userRegister } from "../../../redux/auth/auth.actions";
import { UserData } from "../../../redux/auth/auth.types";
import { commonImages } from "../../../data/common/images";
import { Role } from "../../../constant/role";

const Register: React.FC = () => {
	const disptach = useAppDispatch();
	const Navigate = useNavigate();
	const [formData, setFormData] = useState<UserData>({
		name: "",
		email: "",
		phone_number: "",
		password: "",
		role: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		disptach(userRegister(formData));
		Navigate("/");
	};

	return (
		<div className="flex min-h-screen items-center justify-center ">
			{/* Left side image */}
			<div className="flex justify-center items-center w-1/3 ">
				<img
					className="rounded h-80 mb-4 w-80 max-w-md"
					src={commonImages.register_side_image}
					alt=""
				/>
			</div>

			{/* Right side form */}
			<div className="flex justify-center items-center w-1/2 p-8">
				<form
					className="bg-bgCardLightGreen shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
					onSubmit={handleSubmit}
				>
					<h2 className="text-3xl font-bold text-center mb-4 text-textGreenFirst uppercase">
						Register
					</h2>

					<div className="mb-4">
						<input
							type="text"
							id="name"
							onChange={handleChange}
							value={formData.name}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Enter your full name"
						/>
					</div>

					<div className="mb-4">
						<input
							type="email"
							id="email"
							onChange={handleChange}
							value={formData.email}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Enter your email"
						/>
					</div>

					<div className="mb-4 relative flex justify-between">
						<input
							type="text"
							id="phone_number"
							onChange={handleChange}
							value={formData.phone_number}
							className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Enter phone number"
						/>
						{/* Dropdown for role */}
						<select
							id="role"
							onChange={handleChange}
							value={formData.role}
							className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						>
							<option value="">Select Role</option>
							<option value={Role.Patient}>Patient</option>
							<option value={Role.Doctor}>Doctor</option>
							
						</select>
					</div>

					<div className="mb-4">
						<input
							type="password"
							id="password"
							onChange={handleChange}
							value={formData.password}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Enter your password"
						/>
					</div>

					<div className="flex items-center justify-between mb-4">
						<div className="flex items-center">
							<input
								type="checkbox"
								className="mr-2 leading-tight"
							/>
							<span className="text-sm text-textNormalGray italic">
								Remember me
							</span>
						</div>
						<span className="text-sm text-textNormalGray italic cursor-pointer">
							Forget Password
						</span>
					</div>

					<div className="flex justify-center text-xl ">
						<button
							type="submit"
							className="bg-bgNormalButtonGreen hover:opacity-75 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase"
						>
							Submit
						</button>
					</div>
					<div className="flex mt-4 gap-1 justify-center">
						<span className="text-sm  text-textNormalGray italic ">
							Have an account ?
						</span>
						<Link
							className="text-sm  text-textNormalGray italic cursor-pointer"
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
