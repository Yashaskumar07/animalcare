// components/FeatureCard.tsx
export function FeatureCard({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="bg-white shadow-md p-6 rounded-xl w-60 text-center">
      <img src={icon} alt={title} className="mx-auto mb-4 h-12 w-12" />
      <h3 className="text-xl font-medium text-gray-800">{title}</h3>
    </div>
  );
}
