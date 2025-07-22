"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createBet } from "@/lib/bet";
import { Event } from "@/types/event";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

interface BetModalProps {
  event: Event;
  open: boolean;
  onClose: () => void;
}

export default function BetModal({ event, open, onClose }: BetModalProps) {
  const [amount, setAmount] = useState("");
  const [selection, setSelection] = useState("team1");

  const handleSubmit = async () => {
    try {
      await createBet({
        event_id: event.id,
        amount: parseFloat(amount),
        winning_team: selection,
      });
      onClose();
      toast.success("✅ ¡Apuesta realizada con éxito!");
    } catch (err) {
      toast.error("❌ Error al realizar la apuesta");
      console.error(err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle className="text-2xl font-bold mb-4">
          Apuesta en el Evento: {event.team1.name} vs {event.team2.name}
        </DialogTitle>

        <RadioGroup
          defaultValue="team1"
          onValueChange={(val) => setSelection(val)}
          className="mb-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="team1" id="team1" />
            <label htmlFor="team1">{event.team1.name}</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="team2" id="team2" />
            <label htmlFor="team2">{event.team2.name}</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="draw" id="draw" />
            <label htmlFor="draw">Empate</label>
          </div>
        </RadioGroup>

        <Input
          placeholder="Monto a apostar"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mb-4"
        />

        <Button className="w-full" onClick={handleSubmit}>
          Confirmar Apuesta
        </Button>
      </DialogContent>
    </Dialog>
  );
}
