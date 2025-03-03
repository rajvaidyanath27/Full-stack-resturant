import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
    try {
        const { firstName, lastName, email, time, phone, date } = req.body;

        if (!firstName || !lastName || !email || !time || !phone || !date) {
            return res.status(400).json({ success: false, message: "Please fill the full reservation form!" });
        }

        await Reservation.create({ firstName, lastName, email, time, phone, date });

        res.status(200).json({
            success: true,
            message: "Reservation sent successfully!",
        });
    } catch (error) {
        next(error);
    }
};
