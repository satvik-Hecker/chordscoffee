"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/Button";
import { Card, CardContent } from "./ui/Card";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { toast } from "sonner";
import {
  User,
  Mail,
  Phone,
  Calendar,
  Clock,
  Users,
  MessageSquare,
} from "lucide-react";

export default function BookingTable() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("We'll confirm your reservation within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const inputStyle =
    "pl-10 h-12 bg-[#f9f9f9] border border-[#e6dfd5] focus:border-[#4b2e05] focus:ring-transparent focus:ring-offset-0 focus:outline-none focus:ring-0 focus:bg-white focus:text-[#4b2e05] transition-all rounded-lg placeholder:text-[#9ca3af] text-[#4b2e05] placeholder:text-[#8c7b6e]";

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f3f0eb] p-4 md:p-6 font-sans">
      {/* MAIN CARD */}
      <div className="bg-white rounded-[30px] shadow-xl w-full max-w-7xl p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-full">
          
          {/* LEFT — IMAGE (Inset Panel) */}
          <div className="relative h-64 md:h-auto w-full rounded-[25px] overflow-hidden">
            <Image
              src="/images/book-seat.jpg"
              alt="Restaurant Seating"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* RIGHT — FORM CONTENT */}
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
            <div className="max-w-md mx-auto w-full">
              <h2 className="text-3xl md:text-4xl font-bold text-[#4b2e05] text-center mb-2 font-sans">
                Book Your Table
              </h2>
              <p className="text-[#6b4c3b] mb-8 text-center">
                Reserve your spot for an unforgettable dining experience.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                {/* Row 1 - Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b4c3b] w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className={inputStyle}
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b4c3b] w-5 h-5" />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className={inputStyle}
                    />
                  </div>
                </div>

                {/* Row 2 - Phone & Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b4c3b] w-5 h-5" />
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={inputStyle}
                    />
                  </div>

                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b4c3b] w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="dd-mm-yyyy"
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      required
                      className={`${inputStyle} appearance-none text-[#4b2e05] [&::-webkit-calendar-picker-indicator]:hidden`}
                      onFocus={(e) => {
                        e.target.type = "date";
                        e.target.showPicker?.();
                      }}
                      onBlur={(e) => {
                        if (!e.target.value) e.target.type = "text";
                      }}
                    />
                  </div>
                </div>

                {/* Row 3 - Time & Guests */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b4c3b] w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Select Time"
                      value={formData.time}
                      onChange={(e) => handleInputChange("time", e.target.value)}
                      required
                      className={`${inputStyle} [&::-webkit-calendar-picker-indicator]:hidden`}
                      onFocus={(e) => {
                        e.target.type = "time";
                        e.target.showPicker?.();
                      }}
                      onBlur={(e) => {
                        if (!e.target.value) e.target.type = "text";
                      }}
                    />
                  </div>

                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b4c3b] w-5 h-5" />
                    <Input
                      type="number"
                      placeholder="Guests"
                      min={1}
                      max={20}
                      value={formData.guests}
                      onChange={(e) => handleInputChange("guests", e.target.value)}
                      className={inputStyle}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 text-[#6b4c3b] w-5 h-5" />
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Special requests..."
                    className={`${inputStyle} min-h-[100px] pt-3 resize-none`}
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full h-12 bg-[#382415] hover:bg-[#2a1b10] text-white transition-all duration-300 font-sans text-lg font-bold rounded-lg shadow-md hover:shadow-lg mt-2"
                >
                  Request Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
