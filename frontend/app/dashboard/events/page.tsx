"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { Event } from "@/types/event";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BetModal from "@/components/bets/bet-modal";

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  useEffect(() => {
    api.get("/events").then((res) => setEvents(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Eventos Deportivos</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="relative rounded-2xl overflow-hidden shadow-lg border border-zinc-800 bg-zinc-900"
          >
            <div
              className="h-32 bg-cover bg-center"
              style={{
                backgroundImage: `url(https://image.slidesdocs.com/responsive-images/background/blue-sky-and-white-clouds-football-stadium-debris-advertising-powerpoint-background_63b4c3ee3b__960_540.jpg)`,
              }}
            />

            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-white">
                  {event.team1.name} vs {event.team2.name}
                </h2>
                <Badge variant="secondary" className="capitalize">
                  {event.status}
                </Badge>
              </div>

              <p className="text-zinc-400 mb-3">
                Fecha: {new Date(event.date).toLocaleString()}
              </p>

              <Button
                className="w-full"
                onClick={() => setSelectedEvent(event)}
              >
                Apostar
              </Button>
              {selectedEvent && (
                <BetModal
                  open={!!selectedEvent}
                  event={selectedEvent}
                  onClose={() => setSelectedEvent(null)}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
