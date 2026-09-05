
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

        <p className="text-gray-600 leading-loose text-lg max-w-2xl mb-16">
          As I explored Traditional Chinese Medicine, I started to
          build my own understanding of how the body, food, and
          everyday life are connected.
        </p>

        {/* TCM Mind Map */}
        <div className="w-full">
          <img
            src="/TCM-knowledge-mindmap.png"
            alt="Mind map of my Traditional Chinese Medicine knowledge"
            className="w-full h-auto"
          />
        </div>

      </div>
    </section>
  );
}

