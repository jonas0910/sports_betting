"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { isAuthenticated, login } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated()) {
      router.push("/dashboard/events");
    }
  }, []);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await login({ username, password });
      router.push("/dashboard/events");
    } catch (err) {
      setError("Credenciales incorrectas");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f0f0f] text-white">
      <div className="w-full max-w-md p-6 rounded-xl shadow-lg bg-[#1a1a1a] border border-zinc-700">
        <h1 className="text-3xl font-bold mb-6 text-center">Iniciar sesión</h1>
        <Input
          placeholder="Usuario"
          className="bg-zinc-800 text-white placeholder:text-zinc-400 border-zinc-600"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Contraseña"
          className="mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 border-zinc-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
        <Button
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white"
          onClick={handleSubmit}
        >
          {loading ? "Ingresando..." : "Entrar"}
        </Button>
      </div>
    </div>
  );
}
