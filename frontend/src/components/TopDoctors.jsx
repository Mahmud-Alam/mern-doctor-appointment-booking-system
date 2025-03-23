import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import DoctorCard from "./DoctorCard";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
      <Link
        to="/doctors"
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
      >
        More
      </Link>
    </div>
  );
};

export default TopDoctors;
