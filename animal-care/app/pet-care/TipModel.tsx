"use client";

import { Tip } from "@/data/tips";

type Props = {
  tip: Tip;
  onClose: () => void;
};

export default function TipModal({ tip, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-gray-500 text-xl">
          &times;
        </button>
        <h2 className="text-2xl font-bold">{tip.title}</h2>
        <img src={tip.image} className="my-4 rounded-md" alt={tip.title} />
        <p>{tip.fullText}</p>
      </div>
    </div>
  );
}
