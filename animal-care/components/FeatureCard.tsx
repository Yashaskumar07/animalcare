type FeatureCardProps = {
  title: string;
  icon: string;
  description?: string;
};

export function FeatureCard({ title, icon, description }: FeatureCardProps) {
  return (
    <div className="w-64 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center">
      <img
        src={`/icons/${icon}`}
        alt={title}
        className="w-16 h-16 mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold text-green-700 mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-gray-500">{description}</p>
      )}
    </div>
  );
}
