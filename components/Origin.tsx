export default function Origin() {
  return (
    <section
      id="origin"
      className="min-h-screen bg-[#F7F4EE] px-8 py-32"
    >

      <div className="max-w-5xl mx-auto">

        <p className="text-sm tracking-[0.35em] text-gray-500 mb-8">
          ORIGIN
        </p>

        <h2 className="font-serif text-5xl md:text-6xl leading-tight mb-16">
          Where it all started.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">

          <div>
            <img
              src="/recipe-notes.jpg"
              alt="My recipe notes"
              className="w-full h-auto"
            />

            <p className="mt-4 text-sm text-gray-500">
              Some of my early recipe notes.
            </p>
          </div>

          <div>
            <img
              src="/basque.jpg"
              alt="Basque cheesecake I made"
              className="w-full h-auto"
            />

            <p className="mt-4 text-sm text-gray-500">
              A Basque cheesecake I made.
            </p>
          </div>

        </div>

        <div className="max-w-3xl">

          <p className="text-gray-600 leading-loose text-lg">
            My exploration began with a simple question:
            how can traditional knowledge and modern science
            work together to improve human health?
          </p>

          <p className="text-gray-600 leading-loose text-lg mt-8">
            A few years ago, I started digging into traditional
            Chinese medicine and nutrition, especially the
            characteristics and functions of different ingredients.
            The more I learned, the more I started to see the
            connections between food, health, lifestyle, and the body.
          </p>

          <p className="text-gray-600 leading-loose text-lg mt-8">
            I knew I didn't have much exposure to professional
            medicine, so I started with something I was already
            familiar with: baking. I began experimenting with
            different ingredients and paying attention to what
            they could do, not just to a recipe, but for our bodies.
          </p>

        </div>

      </div>

    </section>
  );
}

