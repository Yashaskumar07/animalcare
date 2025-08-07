type Props = {
  selected: string;
  onChange: (category: "All" | "Dog" | "Cat" | "Bird") => void;
};

const categories: ("All" | "Dog" | "Cat" | "Bird")[] = ["All", "Dog", "Cat", "Bird"];

export default function Tabs({ selected, onChange }: Props) {
  return (
    <div className="flex gap-3 mt-2">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-4 py-2 rounded-full text-sm ${
            selected === cat
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
