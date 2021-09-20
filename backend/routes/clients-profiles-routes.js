import express from "express";
import { check } from "express-validator";
import { createClientProfile, getClient, updateClientProfile } from "../controllers/clients-profiles-controllers";
import { authorizeUser } from "../middlewares/middleware";

const router = express.Router();

router.post(
  "/create-client-profile",
  authorizeUser,
  createClientProfile
);

router.get("/client/:user_id", authorizeUser, getClient)

router.put("/update-client-profile/:id", authorizeUser, updateClientProfile)


export default router;
