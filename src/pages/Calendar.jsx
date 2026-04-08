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
    <div className="min-h-screen bg-[#0d150d] text-stone-100 font-sans pb-20">
      {/* Background Subtle Overlay */}
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30 pointer-events-none"></div>

        <nav className="relative z-20 flex justify-between items-center py-6 px-8 max-w-7xl mx-auto">
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

      <header className="relative pt-16 pb-12 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif text-[#e4c590] mb-4"
        >
          Rural Chronicles
        </motion.h1>
        <p className="text-stone-400 tracking-widest uppercase text-sm">A Seasonal Journey Through Karnataka</p>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {calendarData.map((item, index) => (
            <motion.div
              key={item.month}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-stone-900/50 border border-white/10 hover:border-[#e4c590]/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.event}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 left-4 bg-[#e4c590] text-stone-900 px-4 py-1 rounded-full text-sm font-bold shadow-xl">
                  {item.month}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-serif text-[#e4c590] mb-1">{item.event}</h2>
                <div className="flex items-center text-xs text-stone-400 mb-3 uppercase tracking-tighter">
                  <svg className="w-4 h-4 mr-1 text-[#e4c590]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  {item.location}
                </div>
                <p className="text-stone-300 text-sm leading-relaxed mb-4 line-clamp-3 italic">
                  "{item.description}"
                </p>
                
                <div className="border-t border-white/5 pt-4 flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-widest text-stone-500">Best Time to Visit</span>
                  <span className="text-sm font-medium text-[#e4c590]">{item.best_time}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Calendar;