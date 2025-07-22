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

  useEffect(() => {
    if (isAuthenticated()) {
      router.push("/dashboard/events");
    }
  }, []);
  const router = useRouter();
  const handleSubmit = async () => {
    try {
      setLoading(true);
      console.log("user", { username, password });
      await login({ username, password });
      router.push("/dashboard/events");
    } catch (err) {
      setError("Credenciales incorrectas");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-6 rounded-xl shadow-lg bg-white dark:bg-zinc-900">
        <h1 className="text-2xl font-bold mb-4">Iniciar sesión</h1>
        <Input
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          className="mt-3"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <Button className="mt-4 w-full" onClick={handleSubmit}>
          {loading ? "Ingresando..." : "Entrar"}
        </Button>
      </div>
    </div>
  );
}
