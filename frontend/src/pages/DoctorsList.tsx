import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import DoctorCard from "../components/DoctorCard";
import type { Doctor } from "../types";

const DoctorsList: React.FC = () => {
  const [doctorsList, setDoctorsList] = useState<Doctor[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDoctorsList();
  }, []);

  const fetchDoctorsList = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:4000/api/get-doctors-list"
      );
      const { data } = await response.json();
      console.log(data);
      setDoctorsList(data);
    } catch (error) {
      console.error("Failed to fetch doctors list:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredDoctors = doctorsList.filter((doctor) =>
    `${doctor.name} ${doctor.specialization}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="p-4">
        {/* Banner */}
        <div>
          <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 rounded-2xl overflow-hidden shadow-lg p-8">
            <div className="md:w-1/2 md:pr-8 text-center md:text-left">
              <p className="text-2xl font-semibold text-gray-800">
                Your health is our priority—expert care, anytime, anywhere.
              </p>
            </div>

            <div className="md:w-1/2 mt-6 md:mt-0">
              <img
                src="src/assets/doctor-nurses.png"
                alt="Banner"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center my-8" id="doctorsList">
          <h2 className="text-3xl font-bold text-gray-800">Doctors List</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Search by name or specialization..."
            className="w-full md:w-80 px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Loader */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center p-6">
            {Array.isArray(filteredDoctors) && filteredDoctors.length > 0 ? (
              filteredDoctors.map((each: Doctor) => (
                <DoctorCard
                  key={each._id}
                  name={each.name}
                  specialization={each.specialization}
                  availability={each.availability_status}
                  consultationFee={each.consultation_fees}
                  imageUrl={each.imageUrl}
                  id={each._id}
                />
              ))
            ) : (
              <div className="w-full">
                <h2 className="text-center">No Items Found</h2>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorsList;
