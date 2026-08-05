export default function ResearchArchive() {
  const projects = [
    {
      number: "01",
      title: "A1 β-Casein Intolerance",
      subtitle: "Independent Biology Research",
      description:
        "Exploring the relationship between BCM-7, digestive enzymes, and personalized nutrition through biological mechanisms.",
      link: "/Pioneer_Paper.pdf",
    },

    {
      number: "02",
      title: "Synthetic Biology",
      subtitle: "Bacterial Cellulose Research",
      description:
        "Engineering microbial systems to increase bacterial cellulose production as a sustainable alternative material.",
    },

    {
      number: "03",
      title: "The Effect of Moxibustion on Blood Sugar Level",
      subtitle: "Independent Biology Research",
      description:
        "Experimenting with the effect of moxibustion - a traditional Chinese medicine therapy that uses heat from burning dried mugwort to stimulate specific acupoints on the body - on blood sugar level after a standardized meal. Moxibustion is applied to an acupoint called Zusanli, which improves digestion.",
      link: "https://dailysophie7.wordpress.com/2026/08/05/can-traditional-chinese-medicine-influence-blood-sugar/",
    },
  ];


  return (
    <section
      id="research"
      className="bg-[#F7F4EE] px-8 py-32"
    >

      <div className="max-w-5xl mx-auto">

        <p className="text-sm tracking-[0.35em] text-gray-500 mb-8">
          RESEARCH ARCHIVE
        </p>


        <h2 className="font-serif text-5xl md:text-6xl mb-20">
          Questions I explored.
        </h2>


        <div className="space-y-12">

          {projects.map((project) => (

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


                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    font-serif
                    text-3xl
                    mt-3
                    mb-5
                    block
                    hover:underline
                    "
                  >
                    {project.title}
                  </a>
                ) : (
                  <h3 className="font-serif text-3xl mt-3 mb-5">
                    {project.title}
                  </h3>
                )}


                <p className="text-gray-600 leading-relaxed max-w-xl">
                  {project.description}
                </p>


              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}