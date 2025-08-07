"use client";

import Image from "next/image";
import { Tip } from "@/data/tips";
import sampleImage from "@/public/images/sample.jpg"; // example image import

type Props = {
  tip: Tip;
  onReadMore: () => void;
};

export default function TipCard({ tip, onReadMore }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <Image
        src={sampleImage} // Replace this with tip.image if it's an imported image
        alt={tip.title}
        className="w-full h-40 object-cover"
        width={400}
        height={160}
      />
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
