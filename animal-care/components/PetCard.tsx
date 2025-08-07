type Pet = {
  id: string;
  name: string;
  species: string;
  age: number;
  imageUrl: string;
  description: string;
  status: string;
};

export default function PetCard({ pet }: { pet: Pet }) {
  return (
    <div className="border rounded-xl p-4 shadow-md hover:shadow-lg transition">
      <img
        src={pet.imageUrl}
        alt={pet.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="text-lg font-bold mt-2">{pet.name}</h3>
      <p className="text-sm text-gray-600">{pet.species} — {pet.age} yrs</p>
      <p className="text-sm mt-1">{pet.description}</p>
      <span className="inline-block mt-2 text-xs px-2 py-1 rounded bg-blue-100 text-blue-700">
        {pet.status.toUpperCase()}
      </span>
    </div>
  );
}
