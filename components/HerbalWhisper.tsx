"use client";

export default function HerbalWhisper() {
  return (
    <section
      id="herbal-whisper"
      className="bg-[#f6f2ea] px-6 py-24 md:px-12"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-12">
          <p className="mb-4 text-sm tracking-[0.25em] text-stone-500">
            AI × TRADITIONAL CHINESE MEDICINE
          </p>

          <h2 className="font-serif text-4xl text-stone-900 md:text-6xl">
            Herbal Whisper
          </h2>
        </div>

        {/* Description */}
        <div className="mb-16 max-w-2xl">
          <p className="text-base leading-8 text-stone-700">
            I built an AI agent using Coze to make my TCM research more
            interactive. I shared it with my grandmother, her sisters, and
            their friends, who are familiar with TCM and interested in
            health. Their feedback helped me refine the agent and its
            responses.
          </p>
        </div>

        {/* Posters */}
        <div className="mb-20">
          <div className="mb-6">
            <p className="text-sm tracking-[0.2em] text-stone-500">
              INTRODUCING HERBAL WHISPER
            </p>

            <p className="mt-2 text-sm text-stone-500">
              Posters I created to introduce the agent to my family, their
              friends, and a wider audience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {/* Chinese Poster */}
            <div className="flex justify-center rounded-2xl border border-stone-300 bg-[#eee8dc] p-6 md:p-8">
              <img
                src="/herbal-whisper-poster.jpg"
                alt="Chinese poster introducing the Herbal Whisper AI agent"
                className="max-h-[700px] w-auto max-w-full rounded-lg object-contain shadow-sm"
              />
            </div>

            {/* English Poster */}
            <div className="flex justify-center rounded-2xl border border-stone-300 bg-[#eee8dc] p-6 md:p-8">
              <img
                src="/herbal-whisper-poster-english.jpg"
                alt="English poster introducing the Herbal Whisper AI agent"
                className="max-h-[700px] w-auto max-w-full rounded-lg object-contain shadow-sm"
              />
            </div>

          </div>
        </div>

        {/* AI Agent */}
        <div>
          <div className="mb-6">
            <p className="text-sm tracking-[0.2em] text-stone-500">
              TRY THE AGENT
            </p>

            <p className="mt-2 text-sm text-stone-500">
              Explore Herbal Whisper below.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-stone-300 bg-[#eee8dc]">
            <iframe
              src="https://www.coze.cn/web?uri=2627166454436810_0-data_volume%2F7659976508513091903-files%2F%E6%89%80%E6%9C%89%E5%AF%B9%E8%AF%9D%2F%E4%B8%BB%E5%AF%B9%E8%AF%9D%2FHerbal-Whisper%2Flanding-page.html&is_claw=1"
              className="h-[600px] w-full border-0"
              title="Herbal Whisper AI Agent"
              allow="microphone"
            />
          </div>

          {/* Why Chinese? */}
          <div className="mt-5 max-w-2xl">
            <p className="text-sm font-medium tracking-wide text-stone-600">
              Clarification
            </p>

            <p className="mt-2 text-sm leading-7 text-stone-500">
              I built the agent in Chinese because my grandmother and her
              friends are the people I originally wanted it to help. Making
              it in a language they are comfortable with made the project
              more useful to them.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}