import express from "express";
import { createHouse, getAllHouses, getHouseById } from "../controllers/ifHouseCommittee";

const router = express.Router();

router.get("/", getAllHouses);
router.get("/:id", getHouseById)
router.post("/", createHouse);

export default router;