import Link from 'next/link';
import { Leaf } from 'lucide-react';

export function Navbar() {
  return (
    <header className="bg-[#FFF9F0] border-b border-[#E0D5C0] sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        <Link href="/vendor-home" className="flex items-center gap-2 font-bold text-lg text-[#5B4A3D]">
          <Leaf className="w-6 h-6 text-[#4F8A5D]" />
          <span>StreetSource</span>
        </Link>
        {/* Add more links here if needed */}
      </nav>
    </header>
  );
}
