"use client";
import Link from "next/link";
import { FeatureCard } from "./FeatureCard";

const features = [
  { title: "Adopt a Pet", icon: "adoptt.jpg", path: "/adopt" },
  { title: "Lost & Found", icon: "lost.jpg", path: "/lost-found" },
  { title: "Vet Appointment Booking", icon: "vet.jpg", path: "/vetAppointment" },
  { title: "Pet Care Tips", icon: "petcare.jpg", path: "/pet-care" },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 px-6 text-center bg-[#F9F9F9]">
      <h2 className="text-3xl font-bold text-green-700 mb-10">Key Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
        {features.map((feature, i) => (
          <Link href={feature.path} key={i}>
            <FeatureCard title={feature.title} icon={feature.icon} />
          </Link>
        ))}
      </div>
    </section>
  );
}
