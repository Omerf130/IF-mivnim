import express from "express";
import { createHouse } from "../controllers/ifHouseCommittee";

const router = express.Router();

router.get("/", () => console.log("get success houseKeeper"));
router.post("/", createHouse);

export default router;