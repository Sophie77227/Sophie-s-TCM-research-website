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

        {/* Poster */}
        <div className="mb-20">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-sm tracking-[0.2em] text-stone-500">
                INTRODUCING HERBAL WHISPER
              </p>
              <p className="mt-2 text-sm text-stone-500">
                A poster I created to introduce the agent to my family and
                their friends.
              </p>
            </div>
          </div>

          <div className="flex justify-center rounded-2xl border border-stone-300 bg-[#eee8dc] p-6 md:p-10">
            <img
              src="/herbal-whisper-poster.jpg"
              alt="Poster introducing the Herbal Whisper AI agent"
              className="max-h-[800px] w-auto max-w-full rounded-lg object-contain shadow-sm"
            />
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
              src="YOUR_COZE_EMBED_URL"
              className="h-[600px] w-full border-0"
              title="Herbal Whisper AI Agent"
              allow="microphone"
            />
          </div>
        </div>

      </div>
    </section>
  );
}