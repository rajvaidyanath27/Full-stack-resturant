import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {dbConnection} from "./db/dbConnection.js";
import rootUser from "./routes/routeUser.js";

const app = express();
dotenv.config({path: "./config/config.env"});

dbConnection();


//Connected our backend to frontend
app.use(
    cors({
        origin: [process.env.FRONTEND_URI],
        method: "POST",
        credentials: true
    })
);

app.use('./api/reservation', rootUser);



app.use(express.json());
app.use(express.urlencoded({extended: true}));

export default app;
