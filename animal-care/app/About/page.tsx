export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-100 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-green-700 mb-4">About PawPal</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Empowering pet owners and animal lovers through compassion, innovation, and care.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-green-700 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              At <span className="font-medium text-green-600">PawPal</span>, our mission is to create a bridge between pets in need and loving homes. We strive to educate, inform, and connect the pet community with reliable services, creating a safer and happier life for all animals.
            </p>
          </div>
          <div>
            <img
              src="/images/about-mission.jpg"
              alt="Our Mission"
              className="rounded-xl shadow-md w-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <div className="order-2 md:order-1">
            <img
              src="/images/about-vision.jpg"
              alt="Our Vision"
              className="rounded-xl shadow-md w-full"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold text-green-700 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              We envision a future where every pet receives the care, love, and protection they deserve. Through digital innovation and community partnerships, we’re building a world that uplifts animal welfare and responsible pet ownership.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">What We Offer</h2>
          <ul className="text-gray-700 text-lg space-y-3 text-left max-w-2xl mx-auto list-disc pl-6">
            <li>Pet adoption and rehoming services</li>
            <li>Lost & found pet tracking platform</li>
            <li>Online vet appointment scheduling</li>
            <li>Curated pet care tips and resources</li>
            <li>Access to local pet hospitals and pharmacies</li>
            <li>Community forums and animal welfare initiatives</li>
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-green-700 text-white text-center">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-10">
          <div>
            <h3 className="text-4xl font-bold">10K+</h3>
            <p className="mt-2 text-lg">Pets Rehomed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">500+</h3>
            <p className="mt-2 text-lg">Trusted Vets</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">100%</h3>
            <p className="mt-2 text-lg">Compassion Driven</p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-green-700 mb-6">Meet the Team</h2>
        <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
          We’re a passionate group of animal lovers, software developers, and veterinary professionals working together to make pet care better, smarter, and more accessible. Every line of code we write and every feature we launch is driven by our love for animals.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <img
              src="/images/team1.jpg"
              alt="Founder"
              className="w-32 h-32 rounded-full mx-auto mb-2 shadow-md"
            />
            <h4 className="font-medium text-green-700">Aisha Mehra</h4>
            <p className="text-sm text-gray-600">Founder & Pet Advocate</p>
          </div>
          <div className="text-center">
            <img
              src="/images/team2.jpg"
              alt="CTO"
              className="w-32 h-32 rounded-full mx-auto mb-2 shadow-md"
            />
            <h4 className="font-medium text-green-700">Rajiv Patel</h4>
            <p className="text-sm text-gray-600">CTO & Lead Developer</p>
          </div>
          <div className="text-center">
            <img
              src="/images/team3.jpg"
              alt="Vet Advisor"
              className="w-32 h-32 rounded-full mx-auto mb-2 shadow-md"
            />
            <h4 className="font-medium text-green-700">Dr. Lina Das</h4>
            <p className="text-sm text-gray-600">Veterinary Advisor</p>
          </div>
        </div>
      </section>
    </div>
  );
}
