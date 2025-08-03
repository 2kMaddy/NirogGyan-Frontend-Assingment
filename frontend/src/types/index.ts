export interface Slot {
  date: string | Date;
  schedule_booked: string[];
}

export interface DateTimeSlotsProps {
  slotsBooked: Slot[];
  onSelectDate: (date: string) => void;
  onSelectTime: (time: string) => void;
}

export interface DoctorCardProps {
  name: string;
  specialization: string;
  availability: string;
  consultationFee: number;
  imageUrl: string;
  id: string;
}

export interface SuccessMessageProps {
  message: string;
  onClose?: () => void;
}

export interface Doctor {
  _id: string;
  name: string;
  specialization: string;
  availability_status: string;
  consultation_fees: number;
  description: string;
  imageUrl: string;
  language_spoken: string;
  practice_from: Date;
  qualification_details: string;
  doctor_id: number;
  rating: number;
  slotsBooked: Slot[];
}