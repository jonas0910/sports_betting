#!/bin/sh

echo "⏳ Esperando a que PostgreSQL esté disponible..."

# Esperar hasta que el host 'db' esté disponible (PostgreSQL)
until nc -z db 5432; do
  echo "Esperando a PostgreSQL en host db:5432..."
  sleep 2
done

echo "✅ PostgreSQL está listo. Ejecutando migraciones..."

# Ejecutar migraciones
npx typeorm migration:run -d ormconfig.ts

echo "🌱 Ejecutando seeding inicial..."
npm run seed

echo "🚀 Iniciando la app NestJS..."
npm run start:dev
