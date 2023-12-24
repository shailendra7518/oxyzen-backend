import React from "react";
import { BiLike } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FiEye, FiEdit } from "react-icons/fi";

export interface DoctorCardProps {
  image: string;
  name: string;
  specialist: string;
  experience: number;
  rating: number;
  isAdmin?: boolean;
}

const DoctorCard: React.FC<DoctorCardProps> = (props) => {
  const { image, name, specialist, experience, rating, isAdmin = true } = props;

  const handleSuspendClick = () => {
    // Handle suspend logic
    console.log(`Suspended ${name}`);
  };

  const handleHideClick = () => {
    // Handle hide logic
    console.log(`Hid ${name}`);
  };

  return (
    <div className="shadow-lg flex flex-col rounded-md">
      <img className="h-48" src={image} alt="calling-doctor" />
      <div className="p-3">
        <h1 className="font-semibold"> Dr.{name}</h1>
        <p className="text-textGreenFirst">{specialist}</p>
        <p className="text-gray-400 text-sm">{experience} Year Experience</p>

        <div className="flex justify-between mt-5">
          <button className="text-sm flex items-center">
            <div className="text-xl text-textGreenFirst">
              <FaStar />
            </div>

            <div className="bg-bgNormalButtonGreen text-xs flex items-center p-1 text-white gap-1 rounded-md">
              <BiLike />
              {rating} %
            </div>
          </button>
          <div className="flex items-center">
            <button className="bg-bgNormalButtonGreen p-1 text-xs text-white ml-2 rounded-lg">
              Book Appointment
            </button>
          </div>
        </div>

        <div className="flex justify-between mt-5">
          {isAdmin && (
            <>
              <button
                onClick={handleSuspendClick}
                className="text-xs text-white bg-yellow-500 p-1 mr-2 rounded-md"
              >
                <FiEye />
                Suspend
              </button>
              <button
                onClick={handleHideClick}
                className="text-xs text-white bg-gray-500 p-1 mr-2 rounded-md"
              >
                <FiEdit />
                Hide
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
