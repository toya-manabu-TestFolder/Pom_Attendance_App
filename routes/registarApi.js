import express from "express";
import axios from "axios";
import dotenv from "dotenv";
// bodyは
import { body, validationResult } from "express-validator";

dotenv.config();
const API_KEY = process.env.VITE_API_KEY;

const regisatrRouter = express.Router();

regisatrRouter.post("/", body("name").notEmpty(), async (req, res) => {
  const registarData = await req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.json("OK");
});

export default regisatrRouter;
