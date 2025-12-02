/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail, Send, CheckCircle2 } from "lucide-react";
import { LocationMap } from "@/components/location-map";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Leuterio, Calapan City",
    subvalue: "Oriental Mindoro, Philippines",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0954-350-4213",
    subvalue: "Call or text anytime",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Sat: 10AM onwards",
    subvalue: "Closed on important events.",
  },
  {
    icon: Mail,
    label: "Email",
    value: "manzorenzo17@gmail.com",
    subvalue: "We reply within 24 hours",
  },
];

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contactName, setContactName] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setContactName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setNewsletterEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">
            Get In Touch
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-balance">
            Visit Us Today
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info) => (
                <Card key={info.label} className="bg-card border-border">
                  <CardContent className="p-5">
                    <info.icon className="h-6 w-6 text-primary mb-3" />
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    <p className="font-medium">{info.value}</p>
                    <p className="text-sm text-muted-foreground">
                      {info.subvalue}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="aspect-video rounded-lg overflow-hidden">
              <LocationMap
                latitude={13.411590630195517}
                longitude={121.17679675943427}
                zoom={100}
                markerTitle="Exclusivo Barbershop"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-6">
                  Send us a message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name" className="text-sm">
                      Name
                    </Label>
                    <Input
                      id="contact-name"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Your name"
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email" className="text-sm">
                      Email
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-message" className="text-sm">
                      Message
                    </Label>
                    <Textarea
                      id="contact-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we help you?"
                      className="mt-2 min-h-[120px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    {isSubmitted ? (
                      <>
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
