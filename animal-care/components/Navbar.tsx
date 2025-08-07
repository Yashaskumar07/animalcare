"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) =>
    pathname === path ? "text-green-600 font-semibold" : "text-gray-700";

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-600">
          🐾 AnimalCare
        </Link>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <ul
          className={`md:flex md:items-center gap-6 ${
            open ? "block mt-4" : "hidden"
          } md:mt-0`}
        >
         
           <li><Link href="/" className={isActive("/")}>Home</Link></li>
 
  <li><Link href="/adoption" className={isActive("/adoption")}>Add Pet</Link></li>
  <li><Link href="/vetAppointment" className={isActive("/vetAppointment")}>appointment</Link></li>
  <li><Link href="/lost-found" className={isActive("/lost-found")}>lost&found</Link></li>
  <li><Link href="/contact" className={isActive("/contact")}>Contact</Link></li>
  <li><Link href="/About" className={isActive("/about")}>About</Link></li>
        </ul>
      </div>
    </nav>
  );
}
