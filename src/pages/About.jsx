import React from "react"
export default function About() {
  return (
    <div className="bg-gradient-to-b from-green-900 to-black text-white min-h-screen">

      {/* TOP SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Portrait_Gandhi.jpg"
              alt="Mahatma Gandhi"
              className="rounded-2xl shadow-2xl w-80 object-cover hover:scale-105 transition duration-300"
            />
          </div>

          {/* QUOTE */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold italic text-green-300 leading-relaxed">
              “The soul of India lives in its villages.”
            </h2>

            <p className="mt-4 text-gray-300 text-lg">
              — Mahatma Gandhi
            </p>
          </div>

        </div>

      </section>

      {/* ABOUT CONTENT */}
      <section className="max-w-5xl mx-auto px-6 pb-20 text-center">

        <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-6">
          Discover the Unseen
        </h3>

        <div className="w-20 h-1 bg-green-400 mx-auto mb-10 rounded"></div>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">

          <p>
            Travel today is often reduced to checklists — famous cities, crowded landmarks, and curated experiences.
            But beyond that lies a quieter, more authentic side of Karnataka — where life follows tradition, not trends.
          </p>

          <p>
            In villages, festivals are not events put on for visitors — they are deeply rooted practices passed down through generations.
            From fire rituals to harvest dances, each celebration reflects the identity of the community that keeps it alive.
          </p>

          <p>
            This platform maps those lived experiences — connecting temples, jatres, and seasonal festivals —
            so exploration becomes more meaningful, not just visual.
          </p>

        </div>

      </section>

      {/* QUOTE 2 */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">

        <h2 className="text-2xl md:text-3xl italic text-green-300 leading-relaxed">
          “India’s villages are not backward — they are simply unseen.”
        </h2>

        <p className="mt-4 text-gray-400">
          — Rural perspective
        </p>

      </section>

      {/* MORE INFO */}
      <section className="max-w-5xl mx-auto px-6 pb-20 text-center">

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">

          <p>
            Exploring rural destinations is not just about discovering new places — it directly supports local livelihoods
            and helps preserve cultural practices that are slowly fading.
          </p>

          <p>
            By connecting travel with timing — festivals, rituals, and seasonal events — this platform allows you
            to experience culture in its most authentic form.
          </p>

          <p className="text-green-400 font-semibold text-xl">
            This is not just travel. It is participation in culture.
          </p>

        </div>

      </section>

      {/* FINAL QUOTE */}
      <section className="max-w-4xl mx-auto px-6 pb-20 text-center">

        <h2 className="text-2xl md:text-3xl italic text-green-300 leading-relaxed">
          “To understand a place, you must witness how its people celebrate.”
        </h2>

      </section>

    </div>
  )
}