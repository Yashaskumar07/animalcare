"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) =>
    pathname === path ? "text-green-600 font-semibold border-b-2 border-green-600 pb-1" : "text-gray-700 hover:text-green-600 transition";

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Add Pet", href: "/adoption" },
    { label: "Appointment", href: "/vetAppointment" },
    { label: "Lost & Found", href: "/lost-found" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/About" },
  ];

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-600 flex items-center gap-2">
          🐾 <span>AnimalCare</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-base">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={isActive(item.href)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden flex flex-col items-start gap-4 px-6 pb-4 text-base bg-white shadow"
          >
            {navItems.map((item) => (
              <li key={item.href} className="w-full">
                <Link
                  href={item.href}
                  className={`${isActive(item.href)} block w-full py-2`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
