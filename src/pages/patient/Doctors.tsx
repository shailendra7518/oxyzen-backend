import React from "react";
import DoctorCard, { DoctorCardProps } from "../../components/DoctorCard";
import { patientImages } from "../../data/patient/images";
import { StyledHeader } from "../../components/patient/Header";

const Doctors: React.FC = () => {


	const doctorsData: DoctorCardProps[] = [
    {
      image: patientImages.doctor_shalini_card_image,
      name: "Shalini Sharma",
      specialist: "Dentist",
      experience: 7,
    },
    {
      image: patientImages.doctor_hardik_card_image,
      name: "Hardik Shukla",
      specialist: "CardioLogist",
      experience: 4,
    },
  ];

	return (
    <>
      <StyledHeader />

      <div className="grid grid-cols-4 gap-6 p-16">
        {doctorsData.map((doctor, index) => (
          <DoctorCard key={index} {...doctor} />
        ))}
      </div>
    </>
  );
			
};

export default Doctors;
