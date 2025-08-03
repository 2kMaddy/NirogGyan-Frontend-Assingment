import { Request, Response } from "express";
import Doctor from "./models/Doctor";

// Functions to respond API calls

// for sample data update purpose
const updateBulk = async (req: Request, res: Response) => {
  try {
    const { doctorsList } = req.body;
    if (!Array.isArray(doctorsList) && doctorsList.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No list available",
      });
    }
    const createdDoctors = await Doctor.insertMany(doctorsList);
    res.status(200).json({
      success: true,
      message: "Updated successfully",
      data: createdDoctors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update",
    });
  }
};

const getDoctorsList = async (req: Request, res: Response) => {
  try {
    const doctorsList = await Doctor.find()
      .select(
        "name specialization availability_status consultation_fees imageUrl _id"
      )
      .lean(); // Converts to plain JS objects, better for performance
    if (!doctorsList) {
      return res.status(400).json({
        success: false,
        message: "No Items Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Fetched doctors list successfully",
      data: doctorsList,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error("Unknown error", err);
    }
  }
};

const getDoctorDetail = async (req: Request, res: Response) => {
  try {
    const { doctorId } = req.params;
    const doctorDetail = await Doctor.findById(doctorId);
    if (!doctorDetail) {
      return res.status(400).json({
        success: false,
        message: "No Items Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Fetched doctors list successfully",
      data: doctorDetail,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error("Unknown error", err);
    }
  }
};

const DAILY_SLOTS = ["9:00 AM", "12:00 PM", "2:00 PM", "5:00 PM"];

const bookSlot = async (req: Request, res: Response) => {
  try {
    const { doctorId } = req.params;
    const { date, time } = req.body; // e.g. date: "2025-08-03", time: "9:00 AM"

    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    const bookingDate = new Date(date);

    // Find if the date already exists in slotsBooked
    const existingDateIndex = doctor.slotsBooked.findIndex(
      (each: any) =>
        new Date(each.date).toDateString() === bookingDate.toDateString()
    );

    let daySlots;
    if (existingDateIndex !== -1) {
      daySlots = doctor.slotsBooked[existingDateIndex];

      // Check if time is already booked
      if (daySlots.schedule_booked.includes(time)) {
        return res.status(400).json({ message: "Slot already booked" });
      }

      // Push new time to existing date
      daySlots.schedule_booked.push(time);
    } else {
      // Add new date with the selected time
      daySlots = { date: bookingDate, schedule_booked: [time] };
      doctor.slotsBooked.push(daySlots);
    }

    // ✅ Check if all slots for this day are booked
    const allBooked = DAILY_SLOTS.every((slot) =>
      daySlots.schedule_booked.includes(slot)
    );

    if (allBooked) {
      doctor.availability_status = "Fully Booked";
    }

    await doctor.save();

    return res
      .status(200)
      .json({ message: "Slot booked successfully", doctor });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message);
      return res.status(500).json({ message: err.message });
    } else {
      console.error("Unknown error", err);
      return res.status(500).json({ message: "Unknown error occurred" });
    }
  }
};

const deleteAllDoctors = async (req: Request, res: Response) => {
  try {
    const result = await Doctor.deleteMany({}); // deletes all documents

    return res.status(200).json({
      message: "All doctor records deleted successfully",
      deletedCount: result.deletedCount,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Error deleting doctors:", err.message);
      return res.status(500).json({ message: err.message });
    } else {
      console.error("Unknown error:", err);
      return res.status(500).json({ message: "Unknown error occurred" });
    }
  }
};

export {
  updateBulk,
  getDoctorsList,
  getDoctorDetail,
  bookSlot,
  deleteAllDoctors,
};
