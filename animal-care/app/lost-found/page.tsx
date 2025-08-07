import { prisma } from "@/lib/prisma";
import { Pet } from "@prisma/client";
import PetCard from "@/components/PetCard";
import Link from "next/link";

export default async function DashboardPage() {
  const pets = await prisma.pet.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🐾 Animal Care Dashboard</h1>
          <p className="text-gray-600">Browse all pets looking for a loving home.</p>
        </header>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Available Pets</h2>
          <Link
            href="/adoption"
            className="inline-block px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition duration-200"
          >
            + Add New Pet
          </Link>
        </div>

        {pets.length === 0 ? (
          <p className="text-center text-gray-500 mt-12">No pets have been posted yet. Be the first to help!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pets.map((pet: Pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
