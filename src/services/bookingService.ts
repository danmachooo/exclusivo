// services/bookingService.ts
import { BookingInput } from "@/schemas/booking-schema";
import { sendBookingEmail } from "@/utils/mailer";

export const handleBooking = async (booking: BookingInput) => {
  await sendBookingEmail(booking);
};
