import React from "react";
import { IoIosStar } from "react-icons/io";
import { FaRegCalendarCheck } from "react-icons/fa";
import { patientImages } from "../../data/patient/images";
import Calendar from "../../components/Calendar";

const SingleDoctor: React.FC = () => {
  return (
    <div className="flex flex-col mt-10 items-center max-w-screen-xl">
      <div className="flex justify-center gap-8 bg-bgCardLightGreen p-6 rounded-lg">
        <div className="">
          <img
            className="h-28 rounded-lg"
            src={patientImages.single_doctor_left_image}
            alt="single_doctor_image"
          />
        </div>
        <div className="w-[500px] gap-2 flex flex-col justify-between">
          <h1 className="font-semibold text-xl mb-2">Dr. Shailendra</h1>
          <p>MBBS, MS - General Surgery</p>
          <p>General Surgeon</p>
          <p>15 Years Experience Overall</p>
          <p>Medical Registration Verified</p>
          <p>95% (60 patients)</p>
          <p className="text-xs">
            Emergency Care is the backbone of healthcare, providing crucial
            medical treatment to individuals with sudden, life-threatening
            illnesses or injuries
          </p>
          <p className="text-xs text-textGreenFirst text-end underline p-1">
            Share your Story
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-3 max-w-screen-xl">
        <div className="flex items-start ">
          <p className="bg-bgCardLightGreen w-44 text-center p-2 font-semibold text-textGreenFirst underline rounded-lg">
            Appointment
          </p>
        </div>
        <div className="bg-bgCardLightGreen rounded-lg p-4 ">
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <p className="text-textGreenFirst text-lg">
                <FaRegCalendarCheck />
              </p>
              <p>Clinic appointment</p>
            </div>
            <p className="text-textGreenFirst">₹ 500 fee</p>
          </div>
          <div className="mt-2 ml-8 flex justify-center gap-10" >
            <p className="font-semibold">Moon Mind Care</p>
            <p className="text-xs flex gap-2 items-center">
              <span className="flex text-textGreenFirst">
                <p className="text-sm">
                  <IoIosStar />
                </p>
                <p>4.5</p>
              </span>
              <span className="text-textGreenFirst text-base">₹500</span>
              <span className="italic font-semibold text-gray-600">
                verified detail
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Calendar />
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <p>Today</p>
            <p>8 Slots Available</p>
          </div>
          <div className="flex flex-col">
            <p>Tomorrow</p>
            <p>8 Slots Available</p>
          </div>
          <div className="flex flex-col">
            <p>Sat, 9 Dec</p>
            <p>8 Slots Available</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <h1>Morning (4 Slots)</h1>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="flex flex-col">
            <h1>Evening (4 Slots)</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDoctor;
