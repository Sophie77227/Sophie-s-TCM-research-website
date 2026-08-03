"use client";

import { motion } from "framer-motion";

const journey = [
  {
    year: "2023",
    title: "Research Born from Self-Discovery",
    text: "To be honest, my body wasn't in the healthiest condition when I first started high school. I often got sick and frequently found everything boring. I didn't have much motivation to do anything. When I encountered Traditional Chinese Medicine, I realized that it might not just be a mental issue; instead, my physical body was experiencing a lack of nutrients, insufficient sleep, and constant stress. Therefore, I realized that my physical state influenced my mental energy and motivation.",
  },

  {
    year: "2024",
    title: "Exploring Traditional Food Therapy",
    text: "I started baking when I was very young. I often used it as a stress-reducing activity. After I got to know more about TCM, I tried to integrate ingredients that are beneficial to our body and spirit with baking. I created many recipes which reimagined some modern desserts, such as Basque and Tiramisu, to make them more than just an indulgence. That way, I did my best to promote healthy lifestyles in my own way.",
  },

  {
    year: "2025",
    title: "Bridging Science and Traditional Wisdom",
    text: "I began exploring how traditional health perspectives could be examined through modern scientific approaches, combining my interests in biology, research, and Traditional Chinese Medicine.",
  },

  {
    year: "2026",
    title: "Expanding Influence and Spreading Knowledge",
    text: "This year, I began building platforms to translate complex health concepts into accessible knowledge. I developed an AI assistant embedded in this website that offers wellness perspectives through TCM, and created educational posts exploring anxiety, stress, and traditional approaches to emotional balance.",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="bg-[#eee8dc] py-40"
    >
      <div className="max-w-5xl mx-auto px-8">

        <h2 className="font-serif text-7xl mb-24">
          Journey
        </h2>

        <div className="border-l border-black/20">

          {journey.map((item) => (
            <motion.div
              key={item.year}
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                ml-10
                mb-24
                relative
              "
            >

              <div
                className="
                  absolute
                  -left-[46px]
                  top-2
                  w-3
                  h-3
                  rounded-full
                  bg-black
                "
              />

              <p className="tracking-widest text-sm">
                {item.year}
              </p>

              <h3 className="font-serif text-4xl mt-5">
                {item.title}
              </h3>

              <p
                className="
                  mt-5
                  text-gray-600
                  leading-loose
                  max-w-xl
                "
              >
                {item.text}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}