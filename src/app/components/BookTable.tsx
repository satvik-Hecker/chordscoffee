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
    "pl-10 h-12 bg-[#f5f2ec] border border-[#bfa585] focus:border-[#6b4c3b] focus:ring-transparent focus:ring-offset-0 focus:outline-none focus:ring-0 focus:bg-white focus:text-[#4b2e05] transition-all rounded-md placeholder:text-[#6b4c3b] text-[#4b2e05]";

  return (
    <section className="relative bg-[#ede9df] font-sans overflow-hidden flex items-center justify-center min-h-[700px]">
      {/* Left Border */}
      <div className="hidden md:block absolute left-0 top-0 h-full w-[150px]">
        <Image
          src="/images/border-1.png"
          alt="Coffee decoration left"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Right Border */}
      <div className="hidden md:block absolute right-0 top-0 h-full w-[150px]">
        <Image
          src="/images/border-2.png"
          alt="Coffee decoration right"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-6 py-20">
        <h2 className="text-5xl md:text-6xl font-extrabold text-[#4b2e05] mb-10 font-serif tracking-wide drop-shadow-sm">
          Book Your Seat
        </h2>

        <Card className="bg-card rounded-md border-none w-full max-w-3xl pt-0 shadow-[0_0_25px_rgba(107,76,59,0.4)] hover:shadow-[0_0_40px_rgba(75,46,5,0.6)] transition-shadow duration-500" >
          <CardContent className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              {/* Row 1 - Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b4c3b] h-5 w-5 pointer-events-none" />
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
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b4c3b] h-5 w-5 pointer-events-none" />
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
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b4c3b] h-5 w-5 pointer-events-none" />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={inputStyle}
                  />
                </div>

                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b4c3b] h-5 w-5 pointer-events-none" />
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    required
                    className={`${inputStyle} appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer`}
                  />
                </div>
              </div>

              {/* Row 3 - Time & Guests */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Time Input with Placeholder */}
                                    <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b4c3b] h-5 w-5 pointer-events-none" />

                    <Input
                        type="time"
                        value={formData.time}
                        onChange={(e) => handleInputChange("time", e.target.value)}
                        required
                        className={`${inputStyle} appearance-none 
                        [&::-webkit-calendar-picker-indicator]:hidden 
                        [&::-webkit-clear-button]:hidden 
                        [&::-webkit-inner-spin-button]:hidden 
                        [&::-webkit-outer-spin-button]:hidden 
                        [&::-webkit-datetime-edit-ampm-field]:hidden
                        ${
                            !formData.time
                            ? "[&::-webkit-datetime-edit-hour-field]:text-transparent [&::-webkit-datetime-edit-minute-field]:text-transparent [&::-webkit-datetime-edit-text]:text-transparent"
                            : "text-[#4b2e05]"
                        }`}
                        onFocus={(e) => e.target.showPicker?.()}
                    />

                    {!formData.time && (
                        <span className="absolute left-10 top-1/2 -translate-y-1/2 text-[#6b4c3b] pointer-events-none select-none">
                        Select Time
                        </span>
                    )}
                    </div>


                {/* Guests Input instead of Select */}
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b4c3b] h-5 w-5 pointer-events-none" />
                  <Input
                    type="number"
                    placeholder="Number of Guests"
                    min={1}
                    max={20}
                    value={formData.guests}
                    onChange={(e) => handleInputChange("guests", e.target.value)}
                    className={`${inputStyle}`}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <MessageSquare className="absolute left-3 top-[22px] text-[#6b4c3b] h-5 w-5 pointer-events-none" />
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Special requests or message..."
                  className={`${inputStyle} min-h-[120px] resize-none pt-5 `}
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full h-12 bg-[#382415] hover:bg-[#927b69] hover:text-[#382415] transition-all duration-300 font-sans text-[#bba18c] text-lg font-bold rounded-md"
              >
                Request Now
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
