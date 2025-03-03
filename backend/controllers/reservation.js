import { Reservation } from "../models/reservationModel.js";

export const sendReservation = async (req, res, next) => {
    try {
        const { firstName, lastName, email, time, phone, date } = req.body;

        if (!firstName || !lastName || !email || !time || !phone || !date) {
            return next(new ErrorHandler("Please fill the full reservation form!", 400));
        }

        res.status(200).json({
            success: true,
            message: "Reservation sent successfully!",
        });
    } catch (error) {
        next(error);
    }
};
