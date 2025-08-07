import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Aditi Sharma",
    feedback:
      "I found my lost puppy through AnimalCare within 2 days. The community is just amazing!",
    img: "adithi.jpg", // Use a real or placeholder image path
  },
  {
    name: "Rahul Mehta",
    feedback:
      "The adoption process was so smooth and trustworthy. Highly recommend!",
    img: "/rahul.jpg",
  },
  {
    name: "Sneha Reddy",
    feedback:
      "Thanks to the platform, I learned so much about pet care and found a local vet easily.",
    img: "/sneha.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-6 bg-[#F0F4F8] text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-10">
        What Pet Lovers Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            feedback={testimonial.feedback}
            img={testimonial.img}
          />
        ))}
      </div>
    </section>
  );
}
