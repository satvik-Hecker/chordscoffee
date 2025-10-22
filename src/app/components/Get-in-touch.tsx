"use client"
import { div } from "framer-motion/client";
import { useState } from 'react';
import { MapPin, Clock, Phone, Mail, MessageSquare, Home } from 'lucide-react';
import { Button } from "./ui/Button";
import { Card, CardContent } from "./ui/Card";
import { Input } from "./ui/Input";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "./ui/Textarea";
import { Select,SelectTrigger,SelectValue,SelectContent,SelectItem } from "./ui/Select";
import { toast } from "sonner";




export default function Contact(){
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const googleFormId = 'YOUR_GOOGLE_FORM_ID';
    const baseUrl = `https://docs.google.com/forms/d/e/${googleFormId}/formResponse`;
    
    // Map form fields to Google Form entry IDs (you'll need to get these from your form)
    const params = new URLSearchParams({
      'entry.123456789': formData.name, // Replace with actual entry ID
      'entry.987654321': formData.email, // Replace with actual entry ID
      'entry.456789123': formData.phone, // Replace with actual entry ID
      'entry.789123456': formData.date, // Replace with actual entry ID
      'entry.321654987': formData.time, // Replace with actual entry ID
      'entry.654321789': formData.guests, // Replace with actual entry ID
      'entry.147258369': formData.message, // Replace with actual entry ID
    });

    // Open Google Form in new tab (for now, until proper integration)
    window.open(`${baseUrl}?${params}`, '_blank');
    
    toast("We'll confirm your reservation within 24 hours.");

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      message: '',
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-amber-950 font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              
              <h2 className="text-5xl font-bold text-coffee-dark leading-tight">Visit Us</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Swing by Chords & Coffee — where perfect brews light up your day. &nbsp;  We're the cozy corner you'll want to gatekeep but can't ;).&nbsp; Grab a seat, plug in your headphones, or jam with us live.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg  tracking-wide text-muted-foreground font-medium">Contact Us</h3>
              <p className="text-sm  tracking-wide text-muted-foreground font-medium">Slide into our DMs (or, y’know, email us if you’re feeling old-school).</p>
              <p className="text-3xl font-bold text-coffee-dark">+91-9990666017</p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <Card className="shadow-[var(--shadow-card)] bg-card border-0">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="h-12 bg-secondary/50 border-border/50 focus:bg-background transition-all"
                  />
                </div>

                <div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="h-12 bg-secondary/50 border-border/50 focus:bg-background transition-all"
                  />
                </div>

                <div>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="h-12 bg-secondary/50 border-border/50 focus:bg-background transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    required
                    className="h-12 bg-secondary/50 border-border/50 focus:bg-background transition-all"
                    min={new Date().toISOString().split('T')[0]}
                  />
                  <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                    <SelectTrigger className="h-12 bg-secondary/50 border-border/50 focus:bg-background transition-all">
                      <SelectValue placeholder="Guests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4 Guests</SelectItem>
                      <SelectItem value="5">5 Guests</SelectItem>
                      <SelectItem value="6">6+ Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Special requests or message..."
                    className="min-h-[120px] bg-secondary/50 border-border/50 focus:bg-background transition-all resize-none"
                    rows={5}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-gradient-to-r from-coffee-medium to-coffee-dark hover:from-coffee-dark hover:to-coffee-medium transition-all duration-300 text-base font-medium uppercase tracking-wide"
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-coffee-light to-coffee-medium rounded-full flex items-center justify-center mx-auto">
              <MessageSquare className="w-8 h-8 text-background" />
            </div>
            <div>
              <h3 className="font-bold text-coffee-dark mb-2 uppercase tracking-wide">MESSAGE</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Send us a message and we'll respond within 24 hours
              </p>
              <p className="font-medium text-musical-note">hello@coffeeandchords.com</p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-musical-note to-accent rounded-full flex items-center justify-center mx-auto">
              <Phone className="w-8 h-8 text-background" />
            </div>
            <div>
              <h3 className="font-bold text-coffee-dark mb-2 uppercase tracking-wide">CALL</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Call us directly for reservations and inquiries
              </p>
              <p className="font-medium text-musical-note">(555) 123-CAFE</p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-coffee-dark to-coffee-medium rounded-full flex items-center justify-center mx-auto">
              <Home className="w-8 h-8 text-background" />
            </div>
            <div>
              <h3 className="font-bold text-coffee-dark mb-2 uppercase tracking-wide">VISIT</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Come visit our cozy cafe in the heart of Music City
              </p>
              <p className="font-medium text-musical-note">123 Melody Street</p>
              <p className="font-medium text-musical-note">Music City, MC 12345</p>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16">
          <div className="w-full h-96 bg-secondary rounded-lg border-2 border-dashed border-border overflow-hidden">
            {/* Replace this with actual Google Maps embed */}
            <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-musical-note" />
                <h3 className="text-xl font-semibold text-coffee-dark mb-2">Google Maps Integration</h3>
                <p className="text-sm max-w-xs">
                  Replace this placeholder with your Google Maps embed code
                </p>
                <p className="text-xs mt-2 opacity-75">
                  See SETUP_INSTRUCTIONS.md for details
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Clock className="w-5 h-5 text-musical-note" />
            <span className="text-sm">
              <strong>Hours:</strong> Mon-Thu 7AM-9PM • Fri-Sat 7AM-11PM • Sun 8AM-8PM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}