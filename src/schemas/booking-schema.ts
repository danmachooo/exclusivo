// src/schemas/booking.ts
import { z } from "zod";

// Booking validation schema
export const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  note: z.string().optional(),
  phone: z
    .string()
    .min(7, "Phone number must be at least 7 digits")
    .regex(/^\+?[0-9]+$/, "Invalid phone number format"),
  date: z.string({ required_error: "Date is required" }),
  selectedTime: z.string({ required_error: "Time is required" }),
  selectedBarber: z.string({ required_error: "Barber selection is required" }),
  selectedServices: z
    .array(z.string())
    .nonempty("At least one service must be selected"),
});

// TypeScript type for type safety
export type BookingInput = z.infer<typeof bookingSchema>;
