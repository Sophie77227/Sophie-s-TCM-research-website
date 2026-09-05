export default function FieldNotes() {
  return (
    <section
      id="notes"
      className="bg-[#eee8dc] px-8 py-32"
    >
      <div className="max-w-4xl mx-auto">
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
        <div className="space-y-14">

          {/* Christmas Bazaar */}
          <div>
            <div className="grid grid-cols-2 gap-5 max-w-2xl">
              <img
                src="/baking-club-1.jpg"
                alt="Christmas Bazaar"
                className="w-full h-auto"
              />

              <img
                src="/baking-club-5.jpg"
                alt="Christmas Bazaar"
                className="w-full h-auto"
              />
            </div>

            <p className="mt-3 text-sm text-gray-500 max-w-2xl">
              Making 1000 cookies for school on Christmas Bazaar. Won the Student Service Award.
            </p>
          </div>

          {/* Baking Workshop */}
          <div className="max-w-2xl">
            <img
              src="/baking-club-2.jpg"
              alt="Baking workshop"
              className="w-full h-auto"
            />

            <p className="mt-3 text-sm text-gray-500">
              Baking workshop — making snowflake crisp.
            </p>
          </div>

          {/* Christmas Bazaar Booth */}
          <div className="max-w-2xl">
            <img
              src="/baking-club-3.jpg"
              alt="Christmas Bazaar booth"
              className="w-full h-auto"
            />

            <p className="mt-3 text-sm text-gray-500">
              Our booth on Christmas Bazaar.
            </p>
          </div>

          {/* Sports Event */}
          <div className="max-w-2xl">
            <img
              src="/baking-club-4.jpg"
              alt="Baking Club sports event collaboration"
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