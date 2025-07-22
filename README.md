# Sports Betting 

Una aplicacion web de apuestas deportivas desarrollada con tecnologías modernas, incluyendo un backend en NestJS con TypeORM y un frontend interactivo en Next.js.

## 🛠️ Stack Tecnológico

### Backend
- **NestJS**: Framework de Node.js para aplicaciones escalables del lado del servidor
- **TypeORM**: ORM para TypeScript y JavaScript con soporte completo para PostgreSQL
- **PostgreSQL**: Base de datos relacional para almacenamiento de datos

### Frontend
- **Next.js**: Framework de React para aplicaciones web de producción
- **Tailwind CSS**: Framework de CSS utilitario para diseño rápido y responsivo
- **shadcn/ui**: Biblioteca de componentes UI moderna y accesible

## 🚀 Instalación y Configuración

### 1. Clonar el Repositorio
```bash
git clone https://github.com/jonas0910/sports_betting.git
cd sports_betting
```

### 2. Configurar Variables de Entorno

Renombrar el archivo .env.example a .env

o copiar a un nuevo archivo .env
#### Backend
```bash
cd backend
cp .env.example .env
```

#### Frontend
```bash
cd ../frontend
cp .env.example .env
```

### 3. Levantar el Proyecto con Docker Compose
Desde la raíz del proyecto:
```bash
docker-compose up -d
```

Este comando iniciará todos los servicios necesarios:
- Base de datos PostgreSQL
- Backend API (NestJS)
- Frontend (Next.js)

## 🔐 Credenciales Demo

Para probar la aplicación, utiliza las siguientes credenciales:

- **Usuario**: `user`
- **Contraseña**: `password`

## 📚 API Endpoints

### Rutas Públicas

#### Autenticación
- **POST** `/auth/login`
  - **Body**: `{ username: string, password: string }`
  - **Descripción**: Iniciar sesión en la plataforma

- **POST** `/auth/register`
  - **Body**: `{ username: string, password: string, name: string, balance: number }`
  - **Descripción**: Registrar un nuevo usuario

### Rutas Protegidas
*Requieren autenticación con Bearer Token*

#### Apuestas (`/bets`)
- **GET** `/bets` - Obtener todas las apuestas
- **POST** `/bets` - Crear nueva apuesta
- **GET** `/bets/:id` - Obtener apuesta específica
- **PATCH** `/bets/:id` - Actualizar apuesta
- **DELETE** `/bets/:id` - Eliminar apuesta
- **GET** `/bets/me` - Obtener todas las apuestas del usuario autenticado

#### Eventos (`/events`)
- **GET** `/events` - Obtener todos los eventos
- **POST** `/events` - Crear nuevo evento
- **GET** `/events/:id` - Obtener evento específico
- **PATCH** `/events/:id` - Actualizar evento
- **DELETE** `/events/:id` - Eliminar evento

#### Equipos (`/teams`)
- **GET** `/teams` - Obtener todos los equipos
- **POST** `/teams` - Crear nuevo equipo
- **GET** `/teams/:id` - Obtener equipo específico
- **PATCH** `/teams/:id` - Actualizar equipo
- **DELETE** `/teams/:id` - Eliminar equipo

## 🏗️ Arquitectura del Proyecto

```
sports_betting/
├── backend/           # API NestJS
│   ├── src/
│   ├── .env.example
│   └── package.json
├── frontend/          # Aplicación Next.js
│   ├── app/
│   ├── .env.example
│   └── package.json
|── init/
|   ├──init.sql        # Script sql para datos iniciales
├── docker-compose.yml
└── README.md
```
