/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type React from "react";
import { useState } from "react";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Clock, User, CheckCircle2, Check } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TimePicker } from "@/components/ui/time-picker";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastTitle,
} from "@/components/ui/toast";

const services = [
  { id: "classic", name: "Exclusivo Classico", price: 160 },
  { id: "premium", name: "Exclusivo Signature", price: 220 },
  { id: "shave", name: "Exclusivo Deluxe", price: 750 },
  { id: "beard", name: "Beard Shave / Shaping / Sculpting", price: 100 },
  { id: "hairSpa", name: "Hair Spa", price: 500 },
  { id: "hairScrub", name: "Hair Scrub", price: 300 },
  { id: "hairTattoo", name: "Hair Tattoo", price: 100 },
];

const barbers = [
  { id: "reuel", name: "Reuel Laceda" },
  { id: "deonix", name: "Deonix Medrano" },
  { id: "ronnel", name: "Ronnel Billete" },
];

export function BookingSection() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toasts, setToasts] = useState<
    {
      id: number;
      title: string;
      description: string;
      variant?: "default" | "destructive";
    }[]
  >([]);
  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const addToast = (
    title: string,
    description: string,
    variant?: "default" | "destructive"
  ) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, title, description, variant }]);
    setTimeout(
      () => setToasts((prev) => prev.filter((t) => t.id !== id)),
      4000
    ); // auto dismiss
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !selectedTime || !selectedServices.length || !name || !phone)
      return;

    setIsSubmitting(true);

    try {
      const booking = {
        name,
        phone,
        date: date.toISOString(),
        selectedTime: selectedTime.toISOString(),
        selectedBarber,
        selectedServices,
        note,
      };

      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking),
      });

      if (!res.ok) throw new Error("Failed to book");

      addToast(
        "Booking Confirmed!",
        "Your appointment has been successfully booked."
      );
      // Optionally reset form
      setDate(undefined);
      setSelectedTime(null);
      setSelectedServices([]);
      setSelectedBarber(null);
      setName("");
      setPhone("");
      setNote("");
    } catch (err) {
      addToast(
        "Booking Failed",
        "Something went wrong. Please try again.",
        "destructive"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedServiceDetails = services.filter((s) =>
    selectedServices.includes(s.id)
  );
  const totalPrice = selectedServiceDetails.reduce(
    (sum, s) => sum + s.price,
    0
  );

  return (
    <section id="booking" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">
            Appointments
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-balance">
            Book Your Visit
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Calendar & Time */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <CalendarDays className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Select Date & Time</h3>
                  </div>

                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border border-border mb-6"
                    disabled={(date) =>
                      date < new Date() || date.getDay() === 0
                    }
                  />

                  {date && (
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Clock className="h-5 w-5 text-primary" />
                        <h4 className="font-medium text-sm">Select Time</h4>
                      </div>

                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-40 justify-between"
                          >
                            {selectedTime
                              ? selectedTime.toLocaleTimeString([], {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })
                              : "Pick Time"}
                          </Button>
                        </PopoverTrigger>

                        <PopoverContent className="w-60">
                          <TimePicker
                            value={selectedTime}
                            onChange={setSelectedTime}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Right Column - Service & Details */}
              <div className="space-y-6">
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <User className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Service & Barber</h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm">Select Services</Label>
                        <div className="mt-3 space-y-3">
                          {services.map((service) => {
                            const isSelected = selectedServices.includes(
                              service.id
                            );
                            return (
                              <div
                                key={service.id}
                                role="checkbox"
                                aria-checked={isSelected}
                                tabIndex={0}
                                className={`flex items-center justify-between p-3 rounded-md border transition-colors cursor-pointer ${
                                  isSelected
                                    ? "border-primary bg-primary/5"
                                    : "border-border hover:border-primary/50"
                                }`}
                                onClick={() => toggleService(service.id)}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    toggleService(service.id);
                                  }
                                }}
                              >
                                <div className="flex items-center gap-3">
                                  <div
                                    className={`h-4 w-4 rounded-sm border flex items-center justify-center transition-colors ${
                                      isSelected
                                        ? "bg-primary border-primary"
                                        : "border-muted-foreground"
                                    }`}
                                  >
                                    {isSelected && (
                                      <Check className="h-3 w-3 text-primary-foreground" />
                                    )}
                                  </div>
                                  <span className="text-sm font-medium">
                                    {service.name}
                                  </span>
                                </div>
                                <span className="text-sm text-muted-foreground">
                                  ₱{service.price}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="barber" className="text-sm">
                          Select Barber
                        </Label>
                        <Select onValueChange={setSelectedBarber}>
                          <SelectTrigger id="barber" className="mt-2">
                            <SelectValue placeholder="Choose your barber" />
                          </SelectTrigger>
                          <SelectContent>
                            {barbers.map((barber) => (
                              <SelectItem key={barber.id} value={barber.id}>
                                {barber.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Your Details</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-sm">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          className="mt-2"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(555) 123-4567"
                          className="mt-2"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="note" className="text-sm">
                          Note
                        </Label>

                        <textarea
                          id="note"
                          value={note}
                          onChange={(e) => setNote(e.target.value)}
                          placeholder="Optional message or special request"
                          className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none"
                          rows={3}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {selectedServiceDetails.length > 0 && date && selectedTime && (
                  <Card className="bg-primary/10 border-primary/30">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-3">Booking Summary</h3>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">
                            Services:
                          </span>
                          <ul className="mt-1 space-y-1">
                            {selectedServiceDetails.map((service) => (
                              <li
                                key={service.id}
                                className="flex justify-between"
                              >
                                <span>{service.name}</span>
                                <span>${service.price}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <p>
                          <span className="text-muted-foreground">Date:</span>{" "}
                          {date.toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                        <p>
                          <span className="text-muted-foreground">Time:</span>{" "}
                          {selectedTime.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                        <p className="text-lg font-bold text-primary pt-2 border-t border-primary/30 mt-3">
                          Total: ₱{totalPrice}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={
                    isSubmitting ||
                    !date ||
                    !selectedTime ||
                    selectedServices.length === 0 ||
                    !name ||
                    !phone
                  }
                >
                  {isSubmitting ? (
                    <>
                      <CheckCircle2 className="mr-2 h-5 w-5" />
                      Submitting...
                    </>
                  ) : (
                    "Confirm Booking"
                  )}
                </Button>
              </div>
            </div>
          </form>
          {toasts.map((t) => (
            <Toast
              key={t.id}
              open
              className={`
      ${
        t.variant === "destructive"
          ? "border-destructive bg-destructive text-destructive-foreground"
          : "border-green-600 bg-green-100 text-green-800"
      }
    `}
            >
              <ToastTitle>{t.title}</ToastTitle>
              <ToastDescription>{t.description}</ToastDescription>
              <ToastClose />
            </Toast>
          ))}
        </div>
      </div>
    </section>
  );
}
