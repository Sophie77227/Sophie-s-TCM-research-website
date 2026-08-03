"use client";

import { useState } from "react";

export default function HerbalWhisper() {

  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);


  async function askHerbalWhisper() {

    if (!message.trim()) return;

    setLoading(true);
    setReply("");

    try {

      const response = await fetch("/api/herbal-whisper", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message,
        }),
      });


      const data = await response.json();

      setReply(data.reply);


    } catch (error) {

      setReply(
        "Sorry, Herbal Whisper is temporarily unavailable."
      );

    }


    setLoading(false);

  }


  return (

    <section
      id="herbal-whisper"
      className="
      py-32
      px-8
      bg-[#f6f2ea]
      "
    >

      <div
        className="
        max-w-4xl
        mx-auto
        "
      >

        <p
          className="
          text-sm
          tracking-[0.35em]
          text-gray-500
          "
        >
          AI WELLNESS COMPANION
        </p>


        <h2
          className="
          font-serif
          text-6xl
          mt-6
          "
        >
          Herbal Whisper
        </h2>


        <p
          className="
          mt-8
          text-gray-600
          leading-loose
          max-w-2xl
          "
        >
          Explore your everyday experiences through
          Traditional Chinese Medicine perspectives,
          food therapy, and lifestyle wisdom.
        </p>

        <p className="mt-4 text-sm text-gray-400">
  Herbal Whisper provides educational perspectives based on Traditional
  Chinese Medicine. It does not replace professional medical advice.
        </p>


        <div
          className="
          mt-12
          bg-white
          border
          border-gray-200
          p-8
          "
        >

          <textarea

            value={message}

            onChange={(e)=>setMessage(e.target.value)}

            placeholder="
Describe what you are experiencing...
Example: I feel tired, bloated after meals, and prefer warm drinks.
            "

            className="
            w-full
            h-32
            p-4
            border
            border-gray-200
            resize-none
            outline-none
            "
          />


          <button

            onClick={askHerbalWhisper}

            className="
            mt-6
            px-8
            py-3
            bg-black
            text-white
            "
          >

            {loading
              ? "Listening..."
              : "Ask Herbal Whisper"
            }

          </button>


          {reply && (

            <div
              className="
              mt-10
              border-t
              pt-8
              whitespace-pre-line
              text-gray-700
              leading-loose
              "
            >

              {reply}

            </div>

          )}


        </div>

      </div>

    </section>

  );

}