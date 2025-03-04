import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minLength: [3,"First name must contain 3 letters"],
        maxLength: [20,"First name  letters excedded"]
    },
    lastName: {
        type: String,
        minLength: [3,"First name must contain 3 letters"],
        maxLength: [20,"First name  letters excedded"],
    },
    email: {
        type: String,
        required: true,
        validator: [ validator.isEmail, "Provide valid email"]
    },
    phone: {
        type: String,
        required: true,
        minLength: [10,"Phone number must contain minimum 11 digits"],
        minLength: [11,"Phone number invalid"]
    },
    time: {
        type:  String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    }
});

export const Reservation = mongoose.model("Reservation", reservationSchema);