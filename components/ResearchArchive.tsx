
export default function ResearchArchive() {
  const research = [
    {
      number: "01",
      title: "A1 β-Casein Intolerance",
      subtitle: "Independent Biology Research",
      description:
        "Exploring the relationship between BCM-7, digestive enzymes, and personalized nutrition. Revised with multiple professors.",
      link: "/A1_Beta_Casein_Research_Paper.pdf",
      type: "PDF",
    },

    {
      number: "02",
      title: "Synthetic Biology",
      subtitle: "Bacterial Cellulose Research",
      description:
        "Engineering microbial systems to increase bacterial cellulose production as a sustainable alternative material.",
      link: "/Synbio_Cellulose_Research.pdf",
      type: "PDF",
    },

    {
      number: "03",
      title: "The Effect of Moxibustion on Blood Sugar Level",
      subtitle: "Independent Biology Research",
      description:
        "Exploring the effect of moxibustion on blood sugar levels after a standardized meal.",
      link:
        "https://dailysophie7.wordpress.com/2026/08/05/can-traditional-chinese-medicine-influence-blood-sugar/",
      type: "BLOG",
    },
  ];

  const notes = [
    {
      title: "Knowledge Database",
      description:
        "A growing collection of what I've studied about TCM ingredients, their properties, and their combinations. This is also the database behind my AI Agent.",
      tag: "DATABASE",
      link: "/TCMdatabase.pdf",
    },

    {
      title: "Kitchen Experiments",
      description:
        "I experiment with TCM ingredients in Western pastries, exploring how traditional food knowledge can fit into recipes I already love.",
      tag: "TCM RECIPES",
      link:
        "https://dailysophie7.wordpress.com/",
    },

    {
      title: "Health Communication",
      description:
        "I share what I've learned about anxiety, stress, and health from a TCM perspective, making these ideas easier to understand.",
      tag: "EDUCATION",
      link: "https://www.instagram.com/stilllllmind/",
    },
  ];

  return (
    <section
      id="research"
      className="bg-[#F7F4EE] px-8 py-32"
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <p className="text-sm tracking-[0.35em] text-gray-500 mb-8">
          RESEARCH & FIELD NOTES
        </p>

        <h2 className="font-serif text-5xl md:text-6xl mb-8">
          Things I've explored.
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-2xl mb-24">
          A collection of questions I've explored, things I've studied,
          and ideas I've been working on.
        </p>


        {/* Research */}
        <div className="mb-32">

          <h3 className="font-serif text-3xl mb-10">
            Research
          </h3>

          <div className="space-y-12">

            {research.map((project) => (
              <div
                key={project.number}
                className="
                  grid md:grid-cols-4 gap-8
                  border-t border-gray-300
                  pt-10
                "
              >

                <div>
                  <p className="font-serif text-4xl text-gray-400">
                    {project.number}
                  </p>
                </div>

                <div className="md:col-span-3">

                  <p className="text-sm tracking-widest text-gray-500">
                    {project.subtitle}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-block"
                  >
                    <h4
                      className="
                        font-serif
                        text-3xl
                        mt-3
                        mb-3
                        group-hover:underline
                        group-hover:text-gray-600
                        transition
                      "
                    >
                      {project.title} ↗
                    </h4>

                    <p className="text-xs tracking-widest text-gray-400">
                      VIEW {project.type}
                    </p>
                  </a>

                  <p className="text-gray-600 leading-relaxed max-w-xl mt-5">
                    {project.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>


        {/* Field Notes */}
        <div>

          <h3 className="font-serif text-3xl mb-10">
            Field Notes
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            {notes.map((note) => (
              <article
                key={note.title}
                className="
                  bg-white
                  border border-gray-200
                  p-8
                  min-h-[280px]
                  flex flex-col
                  justify-between
                "
              >

                <div>

                  <p className="text-xs tracking-widest text-gray-400 mb-6">
                    {note.tag}
                  </p>

                  <h4 className="font-serif text-2xl mb-5">
                    {note.title}
                  </h4>

                  <p className="text-gray-600 leading-relaxed">
                    {note.description}
                  </p>

                </div>

                <a
                  href={note.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    text-sm
                    text-gray-400
                    mt-8
                    flex
                    items-center
                    gap-2
                    hover:text-black
                    transition
                  "
                >
                  View entry
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>

              </article>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

