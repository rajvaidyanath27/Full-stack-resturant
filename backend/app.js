import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./db/dbConnection.js";
import rootUser from "./routes/routeUser.js";

dotenv.config({ path: "./config/config.env" });

const app = express();
dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend URL
    methods: ["POST", "GET"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);


app.options("*", cors());


app.use("/api/reservation", rootUser);

export default app;

