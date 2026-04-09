// import React from "react"
// export default function About() {
//   return (
//     <div className="bg-gradient-to-b from-green-900 to-black text-white min-h-screen">

//       {/* TOP SECTION */}
//       <section className="max-w-6xl mx-auto px-6 py-20">

//         <div className="grid md:grid-cols-2 gap-10 items-center">

//           {/* IMAGE */}
//           <div className="flex justify-center">
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Portrait_Gandhi.jpg"
//               alt="Mahatma Gandhi"
//               className="rounded-2xl shadow-2xl w-80 object-cover hover:scale-105 transition duration-300"
//             />
//           </div>

//           {/* QUOTE */}
//           <div className="text-center md:text-left">
//             <h2 className="text-3xl md:text-4xl font-semibold italic text-green-300 leading-relaxed">
//               “The soul of India lives in its villages.”
//             </h2>

//             <p className="mt-4 text-gray-300 text-lg">
//               — Mahatma Gandhi
//             </p>
//           </div>

//         </div>

//       </section>

//       {/* ABOUT CONTENT */}
//       <section className="max-w-5xl mx-auto px-6 pb-20 text-center">

//         <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-6">
//           Discover the Unseen
//         </h3>

//         <div className="w-20 h-1 bg-green-400 mx-auto mb-10 rounded"></div>

//         <div className="space-y-6 text-gray-300 text-lg leading-relaxed">

//           <p>
//             Travel today is often reduced to checklists famous cities, crowded landmarks, and curated experiences.
//             But beyond that lies a quieter, more authentic side of Karnataka where life follows tradition, not trends.
//           </p>

//           <p>
//             In villages, festivals are not events put on for visitorsthey are deeply rooted practices passed down through generations.
//             From fire rituals to harvest dances, each celebration reflects the identity of the community that keeps it alive.
//           </p>

//           <p>
//             This platform maps those lived experiences connecting temples, jatres, and seasonal festivals
//             so exploration becomes more meaningful, not just visual.
//           </p>

//         </div>

//       </section>

//       {/* QUOTE 2 */}
//       <section className="max-w-4xl mx-auto px-6 py-12 text-center">

//         <h2 className="text-2xl md:text-3xl italic text-green-300 leading-relaxed">
//           “India’s villages are not backward — they are simply unseen.”
//         </h2>

//         <p className="mt-4 text-gray-400">
//           — Rural perspective
//         </p>

//       </section>

//       {/* MORE INFO */}
//       <section className="max-w-5xl mx-auto px-6 pb-20 text-center">

//         <div className="space-y-6 text-gray-300 text-lg leading-relaxed">

//           <p>
//             Exploring rural destinations is not just about discovering new places it directly supports local livelihoods
//             and helps preserve cultural practices that are slowly fading.
//           </p>

//           <p>
//             By connecting travel with timing festivals, rituals, and seasonal events this platform allows you
//             to experience culture in its most authentic form.
//           </p>

//           <p className="text-green-400 font-semibold text-xl">
//             This is not just travel. It is participation in culture.
//           </p>

//         </div>

//       </section>

//       {/* FINAL QUOTE */}
//       <section className="max-w-4xl mx-auto px-6 pb-20 text-center">

//         <h2 className="text-2xl md:text-3xl italic text-green-300 leading-relaxed">
//           “To understand a place, you must witness how its people celebrate.”
//         </h2>

//       </section>

//     </div>
//   )
// }

import { motion } from 'framer-motion';

// ... inside your About component
export default function About() {
  return (
    
    <div className="bg-gradient-to-b from-green-900 to-black text-white min-h-screen">
      {/* NEW ANIMATED PHILOSOPHY SECTION */}
      <nav className="w-full py-4 px-6 border-b border-white/10 flex justify-between items-center bg-black z-20">
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/')} // Navigates back to landing page
                    className="group flex items-center gap-2 px-5 py-2 border border-white/20 rounded-full text-stone-300 hover:border-[#e4c590] hover:text-[#e4c590] transition-all duration-300 backdrop-blur-sm"
                  >
                    <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
                    <span className="text-sm font-medium tracking-wide">Back to Home</span>
                  </motion.button>
          
                  {/* Optional: Add your Logo/Title in the center or right */}
                  <div className="hidden md:block text-[#e4c590] font-serif text-lg tracking-widest uppercase opacity-80">
                    ಕರ್ನಾಟಕ Rural
                  </div>
                </nav>
      <section className="max-w-7xl mx-auto px-6 py-24">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
    {[
      {
        title: "Authentic Roots",
        kannada: "ನೈಜ ಸಂಸ್ಕೃತಿ",
        desc: "We don't showcase tourist spots; we map lived traditions that have survived for centuries.",
        icon: "🏺"
      },
      {
        title: "Seasonal Rhythm",
        kannada: "ಋತುಮಾನದ ಲಯ",
        desc: "Life in the village follows the harvest and the moon. We help you time your journey perfectly.",
        icon: "🌙"
      },
      {
        title: "Local Impact",
        kannada: "ಸ್ಥಳೀಯ ಅಭಿವೃದ್ಧಿ",
        desc: "Every visit supports a rural artisan, a village guide, or a family-run heritage homestay.",
        icon: "🌾"
      }
    ].map((feature, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: i * 0.2 }}
        whileHover={{ y: -10 }}
        className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green-400/50 transition-all duration-500 shadow-2xl"
      >
        <div className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-500">
          {feature.icon}
        </div>
        <h4 className="font-kannada text-green-300 text-xl mb-2">{feature.kannada}</h4>
        <h3 className="text-white text-2xl font-display font-bold mb-4 tracking-tight">
          {feature.title}
        </h3>
        <p className="text-gray-400 leading-relaxed font-body">
          {feature.desc}
        </p>
        
        {/* Animated Accent Line */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-green-400 group-hover:w-full transition-all duration-700 rounded-b-2xl" />
      </motion.div>
    ))}
  </div>
</section> 

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
             Travel today is often reduced to checklists famous cities, crowded landmarks, and curated experiences.
             But beyond that lies a quieter, more authentic side of Karnataka where life follows tradition, not trends.
           </p>

           <p>
            In villages, festivals are not events put on for visitorsthey are deeply rooted practices passed down through generations.
             From fire rituals to harvest dances, each celebration reflects the identity of the community that keeps it alive.
           </p>

           <p>
             This platform maps those lived experiences connecting temples, jatres, and seasonal festivals
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
             Exploring rural destinations is not just about discovering new places it directly supports local livelihoods
             and helps preserve cultural practices that are slowly fading.
           </p>

           <p>
             By connecting travel with timing festivals, rituals, and seasonal events this platform allows you
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
  );
}    