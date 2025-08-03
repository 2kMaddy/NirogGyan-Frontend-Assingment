import { useNavigate } from "react-router-dom";
import type { DoctorCardProps } from "../types";

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  specialization,
  availability,
  consultationFee,
  imageUrl,
  id,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="max-w-[400px] w-full bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl transition"
      onClick={() => navigate(`/doctor/${id}`)}
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover object-top"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600">{specialization}</p>
        <p
          className={`mt-2 font-medium ${
            availability.toLowerCase() === "available"
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          Availability: {availability}
        </p>
        <p className="text-gray-800 mt-1">
          Consultaion Fees: Rs.{consultationFee}
        </p>
      </div>
    </div>
  );
};

export default DoctorCard;
