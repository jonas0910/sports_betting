"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useAuth } from "@/hooks/useAuth";

export function Navbar() {
  const router = useRouter();

  const { user } = useAuth();

  const logout = () => {
    Cookies.remove("access_token");
    router.push("/login");
  };

  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center">
      <div className="flex gap-4">
        <Link href="/dashboard/events" className="hover:underline">
          Eventos
        </Link>
        <Link href="/dashboard/bets" className="hover:underline">
          Mis Apuestas
        </Link>
      </div>
      <div className="text-white">
        <span>Hola, {user?.name || user?.username}</span>
      </div>
      <button onClick={logout} className="text-red-400 hover:underline">
        Cerrar sesión
      </button>
    </nav>
  );
}
