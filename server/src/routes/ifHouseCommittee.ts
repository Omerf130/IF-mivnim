import express from "express";
import { createHouse, getAllHouses } from "../controllers/ifHouseCommittee";

const router = express.Router();

router.get("/", getAllHouses);
router.post("/", createHouse);

export default router;