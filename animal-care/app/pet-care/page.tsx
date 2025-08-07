'use client';

import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Add this import
import { tips, Tip } from "@/data/tips";
import TipCard from "@/app/pet-care/TipCard";
import TipModal from "@/app/pet-care/TipModel";
import SearchBar from "@/components/SearchBar";
import Tabs from "@/components/Tabs";

export default function PetCarePage() {
  const router = useRouter(); // ✅ Initialize router

  const [category, setCategory] = useState<"All" | "Dog" | "Cat" | "Bird">("All");
  const [search, setSearch] = useState("");
  const [selectedTip, setSelectedTip] = useState<Tip | null>(null);

  const filteredTips = tips.filter(
    (tip) =>
      (category === "All" || tip.category === category) &&
      tip.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* ✅ Back Button */}
      <button
  onClick={() => router.back()}
  className="mb-4 text-sm text-green-600 hover:text-green-800 flex items-center"
>
  <span className="mr-1">←</span> Back
</button>


      <h1 className="text-3xl font-bold mb-6 text-center">Pet Care Tips</h1>
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      <Tabs selected={category} onChange={setCategory} />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredTips.map((tip) => (
          <TipCard key={tip.id} tip={tip} onReadMore={() => setSelectedTip(tip)} />
        ))}
      </div>

      {selectedTip && (
        <TipModal tip={selectedTip} onClose={() => setSelectedTip(null)} />
      )}
    </div>
  );
}
