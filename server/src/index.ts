import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import mainRoutes from "./routes/main";
import ifHouseCommitteeRoutes from "./routes/ifHouseCommittee";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/main",mainRoutes);
app.use("/api/houseKeeper",ifHouseCommitteeRoutes);

app.listen(PORT, () => console.log(`server is running on http://localhost${PORT} `));

connectDB()