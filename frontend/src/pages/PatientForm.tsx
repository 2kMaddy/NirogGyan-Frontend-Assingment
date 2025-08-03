import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SuccessMessage from "../components/SuccessMessage"; // Import the component

const convertToDateTimeLocal = (date: string, time: string): string => {
  if (!date || !time) return "";

  // Split time into [hour:minute, meridiem]
  const parts = time.trim().split(" ");
  if (parts.length !== 2) return ""; // Invalid time format

  const [hourMinute, meridiemRaw] = parts;
  const meridiem = meridiemRaw.toUpperCase() as "AM" | "PM";

  const [hourStr, minuteStr] = hourMinute.split(":");
  let hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr || "0", 10);

  if (meridiem === "PM" && hour !== 12) hour += 12;
  if (meridiem === "AM" && hour === 12) hour = 0;

  const hh = hour.toString().padStart(2, "0");
  const mm = minute.toString().padStart(2, "0");

  return `${date}T${hh}:${mm}`;
};

const PatientForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  type LocationState = {
    selectedDate?: string;
    selectedTime?: string;
  };

  const { selectedDate, selectedTime } =
    (location.state as LocationState) || {};

  const [form, setForm] = useState({
    name: "",
    email: "",
    dateTime: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (selectedDate && selectedTime) {
      setForm((prev) => ({
        ...prev,
        dateTime: convertToDateTimeLocal(
          selectedDate || "",
          selectedTime || ""
        ),
      }));
    }
  }, [selectedDate, selectedTime]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: selectedDate,
        time: selectedTime,
      }),
    };

    const response = await fetch(
      `http://localhost:4000/api/book-appointment/${id}`,
      payload
    );

    const data = await response.json();
    console.log(data);

    setShowSuccess(true);

    setForm({
      name: "",
      email: "",
      dateTime: convertToDateTimeLocal(selectedDate || "", selectedTime || ""),
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-6 w-full">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Book Appointment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Patient Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="datetime-local"
          name="dateTime"
          value={form.dateTime}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="w-full bg-white-600 text-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-200 transition"
        >
          Go Back
        </button>
      </form>

      {/* Success Message Modal */}
      {showSuccess && (
        <SuccessMessage
          message="Your appointment has been booked successfully!"
          onClose={() => setShowSuccess(false)}
        />
      )}
    </div>
  );
};

export default PatientForm;
