import express from "express";
import { check } from "express-validator";
import { createWorkerProfile, getWorker, updateWorkerProfile } from "../controllers/workers-profiles-controllers";
import { authorizeUser } from "../middlewares/middleware";

const router = express.Router();

router.post(
  "/create-worker-profile",
  authorizeUser,
  createWorkerProfile
);

router.get("/worker/:user_id", authorizeUser, getWorker)

router.put("/update-worker-profile/:id", authorizeUser, updateWorkerProfile)

export default router