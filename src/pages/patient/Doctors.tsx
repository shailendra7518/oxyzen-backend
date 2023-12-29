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
    {
      image: patientImages.doctor_naresh_card_image,
      name: "Swetha Sharma",
      specialist: "Internist",
      experience: 4,
    },
    {
      image: patientImages.doctor_e_card_image,
      name: "Suresh Mukherjee",
      specialist: "Audiologist",
      experience: 6,
    },
    {
      image: patientImages.doctor_f_card_image,
      name: "Yatin Patel",
      specialist: "Gastroenterologist",
      experience: 7,
    },
    {
      image: patientImages.doctor_g_card_image,
      name: "Krishna Mathur",
      specialist: "Pediatrician",
      experience: 7,
    },
    {
      image: patientImages.doctor_h_card_image,
      name: "Naresh Tehran",
      specialist: "Dentist",
      experience: 7,
    },
    {
      image: patientImages.doctor_i_card_image,
      name: "Anup Singh",
      specialist: "Pediatrician",
      experience: 6,
    },
   
  ];

	return (
    <>
      <StyledHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-16">
        {doctorsData.map((doctor, index) => (
          <DoctorCard key={index} {...doctor} />
        ))}
      </div>
    </>
  );
			
};

export default Doctors;
