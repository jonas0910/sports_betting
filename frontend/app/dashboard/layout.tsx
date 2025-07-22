import { Navbar } from '@/components/ui/navbar';
import { Toaster } from 'sonner';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <main className="p-6">{children}</main>
      <Toaster richColors position="top-right" />
    </div>
  );
}