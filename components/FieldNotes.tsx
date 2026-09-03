export default function FieldNotes() {
  const notes = [
    {
      title: "Knowledge Database",
      description:
        "A growing collection of everything I've studied through the lens of traditional Chinese medicine. It includes every ingredient's properties, functions, and combinations with other ingredients. This is the database used in the AI Agent.",
      tag: "Database",
      link: "/TCMdatabase.pdf",
    },

    {
      title: "Kitchen Experiments",
      description:
        "On my blog, I blend Traditional Chinese Medicine ingredients with various Western pastries and create recipes that balance taste with nutritional value. Each post explores the properties of key ingredients from the perspective of TCM, such as their warming or cooling nature and their relationship with different body systems, alongside a complete recipe.",
      tag: "TCM Recipes",
      link: "https://dailysophie7.wordpress.com/?_gl=1*tcqd72*_gcl_au*OTMzOTU2NDI4LjE3ODM5OTYzNDAuMTI3MTE2MjY2MC4xNzg0MDgxODY0LjE3ODQwODE4NjU.",
    },

    {
      title: "Health Communication",
      description:
        "On Instagram, I share insights on anxiety from a Traditional Chinese Medicine perspective, including how food therapy and lifestyle practices rooted in TCM can offer support. My goal is to make these ideas clear, grounded, and accessible, so people can better understand their own experiences.",
      tag: "Education",
      link: "https://www.instagram.com/stilllllmind/",
    },
  ];


  return (
    <section
      id="notes"
      className="bg-[#F7F4EE] px-8 py-32"
    >

      <div className="max-w-5xl mx-auto">


        <p className="text-sm tracking-[0.35em] text-gray-500 mb-8">
          FIELD NOTES
        </p>


        <h2 className="font-serif text-5xl md:text-6xl mb-16">
          Things I've been cooking up.
        </h2>


        <div className="grid md:grid-cols-3 gap-8">


          {notes.map((note) => (

            <article
              key={note.title}
              className="
              bg-white
              border border-gray-200
              p-8
              min-h-[300px]
              flex flex-col
              justify-between
              "
            >

              <div>

                <p className="text-xs tracking-widest text-gray-400 mb-6">
                  {note.tag}
                </p>


                <h3 className="font-serif text-2xl mb-5">
                  {note.title}
                </h3>


                <p className="text-gray-600 leading-relaxed">
                  {note.description}
                </p>

              </div>


              {note.link ? (
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
                  <span
                    className="
                    transition-transform
                    group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </a>
              ) : (
                <p
                  className="
                  text-sm
                  text-gray-300
                  mt-8
                  "
                >
                  Coming soon
                </p>
              )}


            </article>

          ))}


        </div>


      </div>

    </section>
  );
}