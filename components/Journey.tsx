export default function Journey() {
  return (
    <section
      id="journey"
      className="bg-[#eee8dc] py-32"
    >
      <div className="max-w-5xl mx-auto px-8">

        <p className="text-sm tracking-[0.35em] text-gray-500 mb-8">
          TCM NOTES
        </p>

        <h2 className="font-serif text-5xl md:text-6xl leading-tight mb-8">
          What I’ve learned.
        </h2>

        <p className="text-gray-600 leading-loose text-lg max-w-2xl mb-20">
          As I explored Traditional Chinese Medicine, I started to
          build my own understanding of how the body, food, and
          everyday life are connected. Here are some of the ideas
          that have shaped the way I think about health.
        </p>

        {/* TCM knowledge table will go here */}
        <div className="border-t border-black/20">

          <div className="py-10 text-gray-400 text-sm tracking-wide">
            TCM knowledge table — coming soon
          </div>

        </div>

      </div>
    </section>
  );
}

