"use client";

import { Tip } from "@/data/tips";

type Props = {
  tip: Tip;
  onReadMore: () => void;
};

export default function TipCard({ tip, onReadMore }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img src={tip.image} alt={tip.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{tip.title}</h2>
        <p className="text-gray-600 mt-2">{tip.description}</p>
        <button
          onClick={onReadMore}
          className="mt-4 text-sm text-blue-600 hover:underline"
        >
          Read More
        </button>
      </div>
    </div>
  );
}
