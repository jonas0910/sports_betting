'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { GetBet } from '@/types/bet';

export default function BetsPage() {
  const [bets, setBets] = useState<GetBet[]>([]);

  useEffect(() => {
    api.get('/bets').then((res) => setBets(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl mb-4">Mis Apuestas</h1>
      <ul className="grid gap-4">
        {bets.map((bet) => (
          <li key={bet.id} className="p-4 border rounded-lg bg-gray-800">
            <p>
              Evento: {bet.event.team1.name} vs {bet.event.team2.name}
            </p>
            <p>Monto: S/ {bet.amount}</p>
            <p>Fecha: {new Date(bet.date).toLocaleDateString()}</p>
            <p>Estado: {bet.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
