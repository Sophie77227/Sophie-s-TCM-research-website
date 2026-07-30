export default function FieldNotes() {
  const notes = [
    {
      title: "Food as Medicine",
      description:
        "Exploring the relationship between traditional ingredients, nutrition, and health through evidence-based recipes.",
      tag: "Food Science",
    },

    {
      title: "Kitchen Experiments",
      description:
        "Documenting baking experiments that combine cultural ingredients with principles of chemistry and biology.",
      tag: "Experiment",
    },

    {
      title: "Health Communication",
      description:
        "Creating educational content that translates complex biological ideas into accessible stories.",
      tag: "Education",
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
          Observations & experiments.
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


              <p className="text-sm text-gray-400 mt-8">
                View entry →
              </p>


            </article>

          ))}


        </div>


      </div>

    </section>
  );
}