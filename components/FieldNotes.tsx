export default function FieldNotes() {
  return (
    <section
      id="notes"
      className="bg-[#eee8dc] px-8 py-32"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-sm tracking-[0.35em] text-gray-500 mb-8">
          BAKING CLUB - Bake No Limit
        </p>

        <h2 className="font-serif text-5xl md:text-6xl mb-8">
          Baking, but together.
        </h2>

        <p className="text-gray-600 leading-relaxed text-lg max-w-2xl mb-16">
          Baking started as something I explored on my own.
          At school, I found a way to share it with other people
          and turn it into something we could create together.
        </p>

        {/* Baking Club Photos */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <img
              src="/baking-club-1.jpg"
              alt="Baking Club"
              className="w-full h-auto"
            />
            <p className="mt-3 text-sm text-gray-500">
              Making 1000 cookies for school on Christmas Bazaar. Won the Student Service Award.
            </p>
          </div>

          <div>
            <img
              src="/baking-club-2.jpg"
              alt="Baking Club"
              className="w-full h-auto"
            />
            <p className="mt-3 text-sm text-gray-500">
              Baking workshop - making snowflake crisp.
            </p>
          </div>

          <div>
            <img
              src="/baking-club-3.jpg"
              alt="Baking Club"
              className="w-full h-auto"
            />
            <p className="mt-3 text-sm text-gray-500">
              Our booth on Christmas Bazaar.
            </p>
          </div>

          <div>
            <img
              src="/baking-club-4.jpg"
              alt="Baking Club"
              className="w-full h-auto"
            />
            <p className="mt-3 text-sm text-gray-500">
              Collaborating with parent organization for sports event.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}