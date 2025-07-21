INSERT INTO team (name, "logoUrl") VALUES
('Lions FC', 'https://example.com/logos/lions.png'),
('Tigers United', 'https://example.com/logos/tigers.png'),
('Eagles Club', 'https://example.com/logos/eagles.png'),
('Sharks FC', 'https://example.com/logos/sharks.png'),
('Bulls Team', 'https://example.com/logos/bulls.png'),
('Panthers SC', 'https://example.com/logos/panthers.png'),
('Wolves FC', 'https://example.com/logos/wolves.png'),
('Falcons Club', 'https://example.com/logos/falcons.png'),
('Dragons United', 'https://example.com/logos/dragons.png'),
('Knights FC', 'https://example.com/logos/knights.png');


INSERT INTO "user" (name, username, password, balance)
VALUES (
  'Nombre',
  'user',
  '$2b$10$khocvbmon20ViYiV8QYzyuBGSic5balAPrAQ37EH0ZlAX2iSWOR\i',
  500
);

INSERT INTO event (date, result, status, place, team1_id, team2_id) VALUES
('2025-08-10 18:00:00', 'equipo1', 'finalizado', 'Estadio Nacional', 1, 2),
('2025-08-11 19:30:00', 'empate', 'finalizado', 'River Arena', 3, 4),
('2025-08-12 20:00:00', 'equipo2', 'finalizado', 'Ciudad Deportiva', 5, 6),
('2025-08-13 17:45:00', 'equipo1', 'programado', 'Monte Alto', 7, 8),
('2025-08-14 16:00:00', 'equipo2', 'programado', 'Los Andes Arena', 9, 10),
('2025-08-15 15:30:00', 'empate', 'cancelado', 'Estadio del Sur', 2, 3),
('2025-08-16 18:30:00', 'equipo2', 'finalizado', 'Campo Central', 4, 1),
('2025-08-17 20:00:00', 'equipo1', 'programado', 'Coliseo Norte', 6, 7),
('2025-08-18 17:00:00', 'empate', 'programado', 'Zona Oeste', 8, 5),
('2025-08-19 19:00:00', 'equipo2', 'finalizado', 'Campo Rojo', 10, 3),
('2025-08-20 16:45:00', 'equipo1', 'cancelado', 'Estadio Azul', 9, 2),
('2025-08-21 18:00:00', 'empate', 'finalizado', 'Arena Principal', 1, 6),
('2025-08-22 20:15:00', 'equipo2', 'programado', 'Ciudad Nueva', 4, 8),
('2025-08-23 19:45:00', 'equipo1', 'programado', 'Sur Central', 7, 3),
('2025-08-24 17:30:00', 'equipo2', 'finalizado', 'Estadio Imperial', 5, 10);