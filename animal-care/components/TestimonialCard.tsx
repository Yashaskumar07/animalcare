interface TestimonialCardProps {
  name: string;
  feedback: string;
  img: string;
}

export default function TestimonialCard({
  name,
  feedback,
  img,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-sm mx-auto">
      <img
        src={img}
        alt={name}
        className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
      />
      <p className="text-gray-600 italic mb-3">“{feedback}”</p>
      <h4 className="font-semibold text-green-700">{name}</h4>
    </div>
  );
}
