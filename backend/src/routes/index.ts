import { Router } from "express";
import {
  updateBulk,
  getDoctorsList,
  getDoctorDetail,
  bookSlot,
  deleteAllDoctors,
} from "../controllers";

const appRouter = Router();


// Routes
appRouter.post("/bulk-update", updateBulk);
appRouter.get("/get-doctors-list", getDoctorsList);
appRouter.get("/get-doctor/:doctorId", getDoctorDetail);
appRouter.post("/book-appointment/:doctorId", bookSlot);
appRouter.delete("/delete-all-doctors", deleteAllDoctors);

export default appRouter;
