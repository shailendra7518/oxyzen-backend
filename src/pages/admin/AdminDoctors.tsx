import React from "react";
import AdminDoctorCard, { DoctorCardProps } from "../../components/admin/AdminDoctorCard";
import { adminImages } from "../../data/admin/images";

const AdminDoctors: React.FC = () => {
  const numberOfDoctors = 50;

  const doctors: DoctorCardProps[] = Array.from(
    { length: numberOfDoctors },
    (_, index) => ({
      image: adminImages.doctor_card_image,
      name: `Doctor ${index + 1}`,
      specialist: "General Physician",
        experience: Math.floor(Math.random() * 20) + 1,
        rating: 5
    })
  );

  return (
    <div className="grid grid-cols-4 gap-6 mt-24 p-16">
      {doctors.map((doctor, index) => (
        <AdminDoctorCard key={index} {...doctor} />
      ))}
    </div>
  );
};

export default AdminDoctors;
