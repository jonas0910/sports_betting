import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] items-center justify-items-center p-8 sm:p-20 font-sans bg-[#0f0f0f] text-white">
      <main className="row-start-2 flex flex-col items-center text-center gap-8">
        <Image
          src="/logo.webp"
          alt="Logo del sistema"
          width={120}
          height={120}
          priority
          className="rounded-full shadow-lg"
        />
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Bienvenido al sistema de apuestas deportivas
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-lg">
          Visualiza eventos, realiza apuestas fácilmente.
        </p>
        <Link
          href="/login"
          className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-blue-600 hover:bg-blue-700 transition text-base font-medium text-white"
        >
          Iniciar sesión
        </Link>
      </main>
      <footer className="row-start-3 text-sm text-gray-500 text-center mt-8">
        &copy; {new Date().getFullYear()} Sports Betting App.
      </footer>
    </div>
  );
}
