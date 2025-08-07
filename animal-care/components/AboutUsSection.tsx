
import { FeatureCard } from "./FeatureCard";

export default function AboutUsSection() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-semibold text-green-700 mb-6">About Us</h2>
      <p className="text-gray-600 mb-10">
        We’re on a mission to connect lost pets with owners, promote adoptions, and provide pet care resources to our community.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        <FeatureCard title="Rescue & Adopt" icon="adopt.jpg" />
        <FeatureCard title="Community Help" icon="community.jpg" />
        <FeatureCard title="Trusted Support" icon="support.png" />
      </div>
    </section>
  );
}
