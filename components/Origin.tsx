export default function Origin() {
  return (
    <section
      id="origin"
      className="min-h-screen bg-[#F7F4EE] px-8 py-32"
    >

      <div className="max-w-4xl mx-auto">

        <p className="text-sm tracking-[0.35em] text-gray-500 mb-8">
          ORIGIN
        </p>


        <h2 className="font-serif text-5xl md:text-6xl leading-tight mb-12">
          Where tradition
          <br />
          meets curiosity.
        </h2>


        <div className="grid md:grid-cols-3 gap-10">


          <div className="md:col-span-2">

            <p className="text-gray-600 leading-loose text-lg">
              My exploration began with a simple question:
              how can traditional knowledge and modern
              science work together to improve human health?
            </p>


            <p className="text-gray-600 leading-loose text-lg mt-8">
              Through studying traditional Chinese medicine,
              nutrition, and biological systems, I began
              discovering connections between food, culture,
              and scientific innovation.
            </p>

          </div>



          <div className="border border-gray-300 bg-white p-8">

            <p className="font-serif italic text-xl leading-relaxed">
              "Every ingredient carries a story.
              Every discovery begins with curiosity."
            </p>

          </div>


        </div>

      </div>

    </section>
  );
}