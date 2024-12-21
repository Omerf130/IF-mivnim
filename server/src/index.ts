import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`server is running on http://localhost${PORT} `));