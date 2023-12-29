import React from "react";
import { patientImages } from "../../data/patient/images";

const AboutSection = () => {
  return (
    <div className="bg-bgFooterGreen p-10">
      <div className="flex flex-col md:flex-row justify-center gap-5 items-center">
        <img
          className="h-[300px] md:h-[400px] w-full sm:w-1/2 rounded-lg"
          src={patientImages.home_doctor_bg_image}
          alt="Young Women Doctor"
        />

        <div className="w-full md:w-[500px] flex flex-col items-start justify-between text-white">
          <h1 className="text-2xl md:text-4xl font-semibold">
            We Collaborate for Better Healthcare
          </h1>
          <p className="text-sm  white mb-4 mt-4">
            At Oxyzen, we are dedicated to providing high-quality healthcare
            services with a focus on patient well-being. Our team of experienced
            professionals collaborates to ensure you receive the best possible
            care.
          </p>

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="w-full sm:w-56">
              <h1 className="font-semibold text-lg">Our Vision</h1>
              <p className="text-md  white">
                To create a healthier world by delivering exceptional healthcare
                services and fostering a culture of well-being.
              </p>
            </div>
            <div className="w-full sm:w-56">
              <h1 className="font-semibold text-lg">Our Mission</h1>
              <p className="text-md white">
                To empower individuals to lead healthier lives through
                accessible, comprehensive, and patient-centered healthcare.
              </p>
            </div>
          </div>
          <button className="bg-bgNormalButtonGreen text-sm font-semibold text-white p-2 pl-4 pr-4 w-full sm:w-32 rounded-full mt-4 border-2 border-bgFooterButton hover:bg-white hover:text-black hover:scale-105 transition-transform duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
