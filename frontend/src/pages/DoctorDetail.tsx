import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import DateTimeSlots from "../components/DateTimeSlots";
import type { Doctor } from "../types";

const DoctorDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchDoctorDetail(id);
    }
  }, [id]);

  const fetchDoctorDetail = async (doctorId: string) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:4000/api/get-doctor/${doctorId}`
      );
      const { data } = await response.json();
      setDoctor(data);
    } catch (error) {
      console.error("Error fetching doctor detail:", error);
    } finally {
      setLoading(false);
    }
  };

  // Spinner loader
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Doctor not found
  if (!doctor) {
    return <div className="text-center mt-10">Doctor not found</div>;
  }

  return (
    <div>
      <Navbar />
      <button
        onClick={() => window.history.back()}
        className="flex items-center space-x-2 px-4 py-2 text-gray-700 cursor-pointer"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span>Go Back</span>
      </button>
      <div className="max-w-5xl mx-auto p-6">
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Image */}
          <img
            src={doctor.imageUrl}
            alt={doctor.name}
            className="w-full md:w-1/3 h-64 object-cover object-top"
          />
          {/* Details */}
          <div className="flex-1 p-6">
            <h2 className="text-2xl font-bold text-gray-800">{doctor.name}</h2>
            <p className="text-gray-600">{doctor.specialization}</p>

            <div className="flex items-center mt-2 gap-4">
              <span
                className={`px-3 py-1 text-sm rounded-full ${
                  doctor.availability_status.toLowerCase() === "available"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {doctor.availability_status}
              </span>
              <span className="text-yellow-500 font-semibold">
                ⭐ {doctor.rating}
              </span>
            </div>

            <p className="text-gray-700 mt-4">{doctor.description}</p>

            <div className="mt-4 space-y-2">
              <p>
                <span className="font-semibold">Consultation Fee:</span> Rs.
                {doctor.consultation_fees}
              </p>
              <p>
                <span className="font-semibold">Languages:</span>{" "}
                {doctor.language_spoken}
              </p>
              <p>
                <span className="font-semibold">Qualification:</span>{" "}
                {doctor.qualification_details}
              </p>
              <p>
                <span className="font-semibold">Practice From:</span>{" "}
                {new Date(doctor.practice_from).getFullYear()}
              </p>
            </div>
          </div>
        </div>
        {doctor?.availability_status === "On Leave" ? (
          <h2 className="w-full text-center py-8 text-lg font-bold">
            "The doctor is currently unavailable. Please visit us again after
            some time. We appreciate your patience."
          </h2>
        ) : (
          <>
            <DateTimeSlots
              slotsBooked={doctor.slotsBooked}
              onSelectDate={setSelectedDate}
              onSelectTime={setSelectedTime}
            />
            <div className="w-full text-center">
              <button
                onClick={() =>
                  navigate(`/patient-form/${doctor._id}`, {
                    state: { selectedDate, selectedTime },
                  })
                }
                disabled={!selectedDate || !selectedTime}
                className={`mt-6 px-6 py-2 font-semibold rounded-lg shadow transition
            ${
              !selectedDate || !selectedTime
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
              >
                Book Appointment
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DoctorDetail;
