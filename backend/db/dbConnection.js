import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose
    .connect(process.env.MONGO_URI, {
        dbName: "RESTURANT",
    })
    .then(() => {
        console.log("Connected to database Successfully");
    })
    .catch((error) => {
        console.log(`Some error occur while connecting to db ${error}`);
    });
};