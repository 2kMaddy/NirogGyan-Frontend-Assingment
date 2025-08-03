import { useState, useEffect } from "react";
import type { Slot, DateTimeSlotsProps } from "../types";

const DateTimeSlots: React.FC<DateTimeSlotsProps> = ({
  slotsBooked,
  onSelectDate,
  onSelectTime,
}) => {
  const [dates, setDates] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const timeSlots = ["9:00 AM", "12:00 PM", "2:00 PM", "5:00 PM"];

  useEffect(() => {
    const today = new Date();
    const next7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(today.getDate() + i);
      return date.toISOString().split("T")[0];
    });
    setDates(next7Days);
    setSelectedDate(next7Days[0]);
    onSelectDate(next7Days[0]);
  }, [onSelectDate]);

  const selectDate = (date: string) => {
    setSelectedDate(date);
    onSelectDate(date);
    setSelectedTime("");
    onSelectTime("");
  };

  const selectTime = (time: string) => {
    setSelectedTime(time);
    onSelectTime(time);
  };

  const isSlotBooked = (date: string, time: string): boolean => {
    return slotsBooked.some((slot: Slot) => {
      const slotDate = new Date(slot.date).toDateString();
      const checkDate = new Date(date).toDateString();

      return slotDate === checkDate && slot.schedule_booked.includes(time);
    });
  };

  return (
    <div className="flex flex-col items-center mt-6 space-y-6">
      {/* Dates */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-7 gap-4 w-full">
        {dates.map((date) => (
          <div
            key={date}
            onClick={() => selectDate(date)}
            className={`px-4 py-2 min-w-[80px] text-center rounded-lg border cursor-pointer transition mb-2
              ${
                selectedDate === date
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-blue-50"
              }`}
          >
            {new Date(date).toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}
          </div>
        ))}
      </div>

      {/* Times */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-7 gap-4 w-full">
        {timeSlots.map((time) => {
          const booked = isSlotBooked(selectedDate, time);
          return (
            <div
              key={time}
              onClick={() => !booked && selectTime(time)}
              className={`px-4 py-2 min-w-[100px] text-center rounded-lg border transition 
                ${
                  booked
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : selectedTime === time
                    ? "bg-green-600 text-white border-green-600 cursor-pointer"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-green-50 cursor-pointer"
                }`}
            >
              {time}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DateTimeSlots;
