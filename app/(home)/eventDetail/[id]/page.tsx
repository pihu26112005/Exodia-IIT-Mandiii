"use client";

import { motion } from "framer-motion";
import React from 'react';
import { ScrollText, Calendar, MapPin, User, Wand, BadgeIndianRupee } from 'lucide-react';
import { events } from '@/lib/events'; 
import { BackgroundBeams } from "@/components/ui/Card-background";

// Types
interface Params {
  id: string;
}
interface EventDetail {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  organizer: string;
  spellCategory: string;
  Fee: string;
  maxParticipants: number;
  currentParticipants: number;
  imageUrl: string;
}

// Reusable Components
const EventInfoItem = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="flex items-center gap-3 text-amber-700">
    <Icon size={20} />
    <span className="font-semibold">{label}:</span>
    <span className="text-amber-900">{value}</span>
  </div>
);

const ParticipantCounter = ({ current, max }: { current: number, max: number }) => (
  <div className="flex items-center gap-2 mt-4">
    <div className="w-full bg-amber-200 rounded-full h-4">
      <div 
        className="bg-amber-600 h-4 rounded-full transition-all duration-500"
        style={{ width: `${(current/max) * 100}%` }}
      />
    </div>
    <span className="text-amber-900 font-bold">
      {current}/{max}
    </span>
  </div>
);

const RegisterButton = () => (
  <button className="mt-6 w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
    Join this Magical Event
  </button>
);

// Function to get event details by ID
const getEventDetails = (id: string): EventDetail | undefined => {
  const event = events.find(event => event.id === id);
  
  if (event) {
    return event;
  }

  //Handle error
  return undefined;
}


// Main Component
const EventDetailsPage = ({ params }: { params: Params }) => {
  const id_ = params?.id;
  const event = getEventDetails(id_);

  if (!event) {
    return <div>Event not found</div>;  //show a custom 404 page or a loading spinner
  }

  return (
    <motion.div
      className="mx-auto z-10 shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 50 }} // Start position
      animate={{ opacity: 1, y: 0 }} // End position
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }} // Animation timing 
    >
      {/* <div className="w-full min-h-screen bg-neutral-900 relative flex flex-col items-center justify-center antialiased py-12"> */}
        <div className="min-h-screen bg-neutral-900 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className=" bg-gradient-to-b from-amber-50 to-amber-100 shadow-xl border-amber-200 p-6 z-10 rounded-lg">
              <header>
                <h1 className="text-5xl font-serif text-amber-900 py-4">
                  {event.title}
                </h1>
              </header>
              <div>
                <div className="space-y-8">
                  {/* Event Image */}
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <h2 className="text-white text-xl font-bold">{event.title}</h2>
                    </div>
                  </div>

                  {/* Event Information */}
                  <div className="grid gap-4">
                    <EventInfoItem
                      icon={Calendar}
                      label="Date"
                      value={event.date}
                    />
                    <EventInfoItem
                      icon={MapPin}
                      label="Location"
                      value={event.location}
                    />
                    <EventInfoItem
                      icon={User}
                      label="Organizer"
                      value={event.organizer}
                    />
                    <EventInfoItem
                      icon={Wand}
                      label="Spell Category"
                      value={event.spellCategory}
                    />
                    <EventInfoItem
                      icon={BadgeIndianRupee}
                      label="Fee"
                      value={event.Fee}
                    />
                  </div>

                  {/* Description */}
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <ScrollText size={20} className="text-amber-700" />
                      <h3 className="font-bold text-amber-900">Event Description</h3>
                    </div>
                    <p className="text-amber-800 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Participants Counter */}
                  <div>
                    <h3 className="font-bold text-amber-900 mb-2">Available Spots</h3>
                    <ParticipantCounter
                      current={event.currentParticipants}
                      max={event.maxParticipants}
                    />
                  </div>

                  {/* Register Button */}
                  <RegisterButton />
                </div>
              </div>
            </div>
          </div>
        </div>
        <BackgroundBeams />
    </motion.div>
  );
};

export default EventDetailsPage;