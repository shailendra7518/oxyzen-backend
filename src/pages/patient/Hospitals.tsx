import React from "react";
import HospitalCard from "../../components/HospitalCard";
import { patientImages } from "../../data/patient/images";
import { StyledHeader } from "../../components/patient/Header";
interface HospitalsProps {}

interface HospitalCardProps {
	hospital_image: string;
	hospital_specialist: string;
	hospital_name: string;
	minCost: number; // Change the type to number
	maxCost: string;
}

const Hospitals: React.FC<HospitalsProps> = () => {
	

const hospitalData:HospitalCardProps[] = [
  {
    hospital_image: patientImages.hospital_a_card_image,
    hospital_specialist: "Multi-specialist Hospital",
    hospital_name: "Shree Hospital",
    minCost: 500,
    maxCost: "",
  },
  {
    hospital_image: patientImages.hospital_b_card_image,
    hospital_specialist: "Multi-specialist Hospital",
    hospital_name: "Ashutosh Hospital",
    minCost: 500,
    maxCost: "",
  },
  {
    hospital_image: patientImages.hospital_c_card_image,
    hospital_specialist: "Multi-specialist Hospital",
    hospital_name: "Auora Hospital",
    minCost: 500,
    maxCost: "",
  },
 
  {
    hospital_image: patientImages.hospital_d_card_image,
    hospital_specialist: "Multi-specialist Hospital",
    hospital_name: "Prizma Hospital",
    minCost: 500,
    maxCost: "",
  },
  {
    hospital_image: patientImages.hospital_e_card_image,
    hospital_specialist: "Multi-specialist Hospital",
    hospital_name: "Excellence Hospital",
    minCost: 500,
    maxCost: "",
  },
  {
    hospital_image: patientImages.hospital_f_card_image,
    hospital_specialist: "Multi-specialist Hospital",
    hospital_name: "Gentle Touch Dentistry",
    minCost: 500,
    maxCost: "",
  },
  {
    hospital_image: patientImages.hospital_g_card_image,
    hospital_specialist: "Multi-specialist Hospital",
    hospital_name: "InnovateWell Hospital",
    minCost: 500,
    maxCost: "",
  },
  {
    hospital_image: patientImages.hospital_h_card_image,
    hospital_specialist: "Multi-specialist Hospital",
    hospital_name: "SafalEnt Hospital",
    minCost: 500,
    maxCost: "",
  },
  
];
 



	return (
		<>
			<StyledHeader/>
      <div className="grid grid-cols-4 gap-6  p-16">
        {hospitalData.map((hopital) => (
          <HospitalCard {...hopital} />
        ))}
      </div>
    </>
  );
};

export default Hospitals;
