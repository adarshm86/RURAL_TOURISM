import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const calendarData = [
  {
    month: "January",
    event: "Kichchu Hayisuvudu",
    location: "Mandya & Ramanagara",
    description: "Witness decorated bulls leaping through sacred hay fires in a breathtaking harvest ritual of purification.",
    best_time: "Mid January",
    image: "https://pbs.twimg.com/media/GD5NdegWoAAKQJc.jpg"
  },
  {
    month: "February",
    event: "Banashankari Jatre",
    location: "Badami",
    description: "A vibrant ancient fair famous for artisanal wooden toys, hand-woven fabrics, and rustic temple chariot processions.",
    best_time: "Full Moon Day",
    image: "https://utsav.gov.in/public/uploads/event_cover_image/event_747/16608945811985328468.jpg"
  },
  {
    month: "March",
    event: "Bedara Vesha",
    location: "Sirsi",
    description: "The 'Hunter’s Dance' comes alive with solo performers in magnificent tribal costumes dancing to hypnotic folk beats.",
    best_time: "Holi Festival",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bedara_Vesha.jpg"
  },
  {
    month: "April",
    event: "Mylara Karnika",
    location: "Mylara, Haveri",
    description: "Stand among a million devotees to hear the sacred Oracle deliver a cryptic prophecy for the coming year.",
    best_time: "Early April",
    image: "https://imagesvs.oneindia.com/kn/img/2023/02/bly-1-1675683301.jpg"
  },
  {
    month: "May",
    event: "Kodava Hockey Festival",
    location: "Coorg",
    description: "Experience the world's largest family hockey tournament set amidst the misty coffee plantations of the hills.",
    best_time: "Entire Month",
    image: "https://media.assettype.com/outlookindia/2026-02-27/6p4ouuk7/The-Kodava-Hockey-Festival?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true"
  },
  {
    month: "June",
    event: "Kambala",
    location: "Coastal Karnataka",
    description: "The thunder of racing buffaloes through slushy paddy fields marks the arrival of the coastal monsoons.",
    best_time: "June – Nov",
    image: "https://karnatakatourism.org/_next/image/?url=https%3A%2F%2Fweb-cms.karnatakatourism.org%2Fwp-content%2Fuploads%2F2025%2F06%2Fkambala-1.jpg&w=3840&q=75"
  },
  {
    month: "July",
    event: "Bhoomi Hunnime",
    location: "North Karnataka",
    description: "A soulful 'Earth Festival' where farming communities offer prayers to Mother Earth for a bountiful season.",
    best_time: "Full Moon Day",
    image: "https://peepalmedia.com/wp-content/uploads/2022/10/Bumannii-6.jpg"
  },
  {
    month: "August",
    event: "Vairamudi Brahmotsava",
    location: "Melukote",
    description: "Witness the mystical midnight ritual where the ancient diamond crown is unveiled amidst soulful chanting and torchlit temple squares.",
    best_time: "August Peak",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjVPArLhXTbUba2jMKMlOzWh-BuiNZkkGusw&s"
  },
  {
    month: "September",
    event: "Karaga Festival",
    location: "Bangalore Rural",
    description: "A mystical midnight procession where a floral pyramid is balanced in a divine dance of balance and faith.",
    best_time: "Full Moon Day",
    image: "https://utsav.gov.in/public/uploads/event_cover_image/event_420/1657273768657075168.jpg"
  },
  {
    month: "October",
    event: "Rural Dasara",
    location: "Mysuru Villages",
    description: "Beyond the palace, experience authentic village wrestling, folk music, and traditional weapon worship.",
    best_time: "Dasara Week",
    image: "https://media.istockphoto.com/id/1281931838/photo/the-mysore-palace-at-night-in-mysore-in-southern-india.jpg?s=612x612&w=0&k=20&c=ylyE9VYrc008JnHKdXKDxbJx-_I2U8-oQFJDzwJk9Pw="
  },
  {
    month: "November",
    event: "Hampi Utsav",
    location: "Hampi",
    description: "A grand revival of the Vijayanagara Empire with classical music and dance under the starlit ruins.",
    best_time: "Early Nov",
    image: "https://media.istockphoto.com/id/137336783/photo/vittala-temple-stone-chariot-hampi-karnataka-india.jpg?s=612x612&w=0&k=20&c=mQq4me5Nr_8uWnr4eQcJCSy5tcZ46H-QzIxrYsn6f2E="
  },
  {
    month: "December",
    event: "Nagarahole Wildlife",
    location: "Kabini/Nagarahole",
    description: "The best time for a winter safari to spot the elusive black panther and massive herds of wild elephants.",
    best_time: "Year End",
    image: "https://media.istockphoto.com/id/1170466166/photo/asian-elephants-with-cub.jpg?s=612x612&w=0&k=20&c=9lVlS6anuRYWxS6LhGvdtOmsDsSUj5SEx8BM61RJFx4="
  }
];

const Calendar = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#080f08] text-white font-sans overflow-x-hidden selection:bg-[#e4c590] selection:text-black">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center py-4 px-6 md:px-12 bg-black/60 backdrop-blur-md border-b border-white/5">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 px-5 py-2 border border-white/20 rounded-full text-stone-300 hover:border-[#e4c590] hover:text-[#e4c590] transition-all duration-300"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
          <span className="text-sm font-medium tracking-wide">Back to Home</span>
        </motion.button>
        <div className="hidden md:block text-[#e4c590] font-serif text-lg tracking-widest uppercase opacity-80">
          ಕರ್ನಾಟಕ Rural
        </div>
      </nav>

      {/* HERO HEADER */}
      <header className="relative pt-32 pb-20 text-center flex flex-col items-center">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#e4c590]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-[#e4c590] mb-4"
        >
          The Almanac
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/50 tracking-[0.3em] uppercase text-sm font-medium"
        >
          A Seasonal Journey Through Karnataka
        </motion.p>
      </header>

      {/* THE VERTICAL TIMELINE */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pb-32">
        
        {/* The Central Glowing Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2" />

        <div className="space-y-24 md:space-y-32">
          {calendarData.map((item, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={item.month} className={`relative flex flex-col md:flex-row items-center justify-between ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* The Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#080f08] border-2 border-[#e4c590] -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(228,197,144,0.6)]" />

                {/* Left/Right Invisible Spacer for alignment */}
                <div className="hidden md:block w-5/12" />

                {/* THE CARD CONTENT */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                  className={`w-full md:w-5/12 pl-12 md:pl-0 ${isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}
                >
                  {/* The Cinematic Image */}
                  <div className="group relative w-full aspect-video rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-2xl">
                    <img 
                      src={item.image} 
                      alt={item.event}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                    
                    {/* The Month Badge Floating on Image */}
                    <div className={`absolute bottom-4 ${isEven ? 'right-4 md:left-4 md:right-auto' : 'right-4'} bg-[#e4c590] text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl backdrop-blur-md`}>
                      {item.month}
                    </div>
                  </div>

                  {/* The Text Data */}
                  <div className="space-y-3">
                    <div className={`flex items-center gap-2 text-xs text-[#e4c590] uppercase tracking-widest font-bold ${isEven ? 'justify-start md:justify-end' : 'justify-start'}`}>
                      <span className="w-8 h-[1px] bg-[#e4c590]/50" />
                      {item.location}
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white drop-shadow-md">
                      {item.event}
                    </h2>
                    
                    <p className="text-white/60 text-base leading-relaxed font-body italic">
                      "{item.description}"
                    </p>
                    
                    <div className="inline-block border border-white/10 bg-white/5 px-4 py-2 rounded-lg text-xs tracking-widest text-white/50 mt-2">
                      BEST TIME: <span className="text-white font-semibold ml-1">{item.best_time}</span>
                    </div>
                  </div>

                </motion.div>
              </div>
            )
          })}
        </div>
      </main>

    </div>
  );
};

export default Calendar;