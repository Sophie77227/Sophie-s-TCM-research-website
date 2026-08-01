"use client";

import { motion } from "framer-motion";

const journey = [
  {
    year: "2022",
    title: "Exploring Traditional Food Therapy",
    text:
      "Studied the relationship between food, body constitution, and traditional health perspectives.",
  },

  {
    year: "2023",
    title: "Connecting Biology and Health",
    text:
      "Started investigating how molecular biology explains individual health responses.",
  },

  {
    year: "2024",
    title: "Research & Synthetic Biology",
    text:
      "Conducted research on A1 β-casein intolerance and contributed to synthetic biology projects.",
  },

  {
    year: "2025",
    title: "Science Communication",
    text:
      "Created educational platforms translating complex health ideas into accessible content.",
  },
];


export default function Journey() {

  return (

    <section
      className="
      bg-[#eee8dc]
      py-40
      "
    >

      <div
        className="
        max-w-5xl
        mx-auto
        px-8
        "
      >

        <h2
          className="
          font-serif
          text-7xl
          mb-24
          "
        >
          Journey
        </h2>


        <div
          className="
          border-l
          border-black/20
          "
        >

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

              <p
                className="
                tracking-widest
                text-sm
                "
              >
                {item.year}
              </p>


              <h3
                className="
                font-serif
                text-4xl
                mt-5
                "
              >
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