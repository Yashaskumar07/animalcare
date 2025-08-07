import { FeatureCard } from "./FeatureCard";

export default function AboutUsSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-green-800 mb-4">About PawPal</h2>
      
      <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
        PawPal is more than a pet care platform — it’s a compassionate community. We connect lost pets with loving families, encourage adoption, and support responsible pet parenting with trusted resources.
      </p>

      <p className="italic text-green-700 text-md mb-12">
        "Every paw deserves a home, every pet parent deserves support."
      </p>

      <div className="flex flex-wrap justify-center gap-10">
        <FeatureCard
          title="Rescue & Adopt"
          icon="adopt.jpg"
          description="Give abandoned pets a second chance by adopting or reporting a stray in need."
        />
        <FeatureCard
          title="Community Help"
          icon="community.jpg"
          description="Join a caring community to share advice, ask for help, or support others."
        />
        <FeatureCard
          title="Trusted Support"
          icon="support.png"
          description="Access verified pet care tips, local vets, and emergency contacts anytime."
        />
      </div>
    </section>
  );
}
