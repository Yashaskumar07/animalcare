"use client";

import { motion } from "framer-motion";

import { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // ✅ Replace string ease with cubic bezier
    },
  },
};


const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <motion.section
      className="flex flex-col md:flex-row items-center gap-10 px-6 py-16 bg-[#E8F8F5]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex-1">
        <motion.h1
          variants={childVariants}
          className="text-4xl md:text-5xl font-bold text-green-800"
        >
          Caring for Pets, One Paw at a Time
        </motion.h1>

        <motion.p
          variants={childVariants}
          className="mt-4 text-gray-700 text-lg"
        >
          Join a compassionate community dedicated to helping animals.
        </motion.p>

        <motion.button
          variants={childVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full mt-6 transition"
        >
          Find a Pet
        </motion.button>
      </div>

      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
        <motion.img
          src="/hero-pets.png"
          alt="Happy Pets"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1] ,
          }}
        />
      </motion.div>
    </motion.section>
  );
}
