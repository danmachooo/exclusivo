/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/api/booking.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { handleBooking } from "@/services/bookingService";
import { bookingSchema } from "@/schemas/booking-schema";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const parsed = bookingSchema.parse(req.body); // validate input
    await handleBooking(parsed); // send email
    res
      .status(200)
      .json({ success: true, message: "Booking sent successfully!" });
  } catch (err: any) {
    res.status(400).json({ sucess: false, error: err.errors || err.message });
  }
}
