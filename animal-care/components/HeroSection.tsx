export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10 px-6 py-16 bg-[#E8F8F5]">
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800">
          Caring for Pets, One Paw at a Time
        </h1>
        <p className="mt-4 text-gray-700 text-lg">
          Join a compassionate community dedicated to helping animals.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full mt-6 transition">
          Find a Pet
        </button>
      </div>
      
      <div className="flex-1 flex justify-center">
        <img
          src="/hero-pets.png"
          alt="Happy Pets"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
        />
      </div>
    </section>
  );
}
