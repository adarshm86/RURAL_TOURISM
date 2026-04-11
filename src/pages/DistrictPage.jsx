import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function DistrictPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  // ========================================================================
  // 📚 DATA REPOSITORY
  // Contains Temples, Festivals, and Arts & Crafts
  // ========================================================================
  const detailedData = {
    // 🛕 TEMPLES
    "1": {
      name: "Madhukeshwara Temple, Banavasi",
      subtitle: "The Ancient Kadamba Marvel",
      paragraphs: [
        "Banavasi, the ancient capital of the Kadamba dynasty, is home to the magnificent Madhukeshwara Temple. Dedicated to Lord Shiva, this temple is a brilliant architectural marvel that dates back to the 9th century. The presiding deity, a honey-colored Shiva Linga, gives the temple its name, 'Madhukeshwara'.",
        "The temple complex is a timeline of architectural evolution, having received additions from the Chalukyas, Hoysalas, and the Vijayanagara empire over several centuries. One of the most striking features is the intricately carved monolithic stone cot, a masterpiece gifted by the Sonde rulers.",
        "Visiting Banavasi isn't just about the temple; it's a step back in time. The village is surrounded by the Varadha river and lush forests. If you visit in December, you might catch the famous Kadambotsava, a grand cultural festival organized by the state government."
      ],
      images: [
        "https://touringwithpk.com/wp-content/uploads/2021/06/Nov18-341a.jpg",
        "https://isharethese.com/wp-content/uploads/Stone-triloka-mandapa-with-Shiva-and-Parvathi-sitting-on-the-throne-in-SRI-MADHUKESHWARA-TEMPLE-BANAVASI-Karnataka-India-Asia-682x1024.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYfFrdAiUoNTP8_MIVRcPPppqvp2d9CGrzVg&s"
      ]
    },
    // ... [Your other Temple and Festival IDs (2-20) go here as you had them] ...

    // 🎨 RURAL ARTS & CRAFTS (IDs 21 - 30)
    "21": {
      name: "Channapatna Toys",
      subtitle: "The Legacy of Gombegala Ooru (Toy Town)",
      paragraphs: [
        "Located on the highway between Bengaluru and Mysore, the town of Channapatna is affectionately known as 'Gombegala Ooru' or the toy town of Karnataka. The origin of this wooden craft dates back to the 18th century when the ruler Tipu Sultan invited Persian artisans to train the local craftsmen in the art of wooden toy making. Today, it holds a prestigious Geographical Indication (GI) tag.",
        "What makes Channapatna toys truly remarkable is their eco-friendly and child-safe manufacturing process. The artisans primarily use 'Aale Mara' (ivory wood), which is soft and easy to carve. The wood is shaped on a lathe, seamlessly rounded to ensure there are no sharp edges. The brilliant, glossy colors are completely natural—achieved by applying vegetable dyes mixed with lac (a natural resin) while the wood spins on the lathe.",
        "Despite facing fierce competition from cheap plastic imports, the Channapatna craft has seen a massive revival. Modern designers are now collaborating with rural artisans to create educational puzzles, sleek home decor, and mathematical games, proving that this 200-year-old rural craft can adapt and thrive in the modern world."
      ],
      images: [
        "https://storeassets.im-cdn.com/media-manager/channapatnatoysin/280eU8ASIK3BTw3yHkER_channapatna%20toys%20banner%2015_621x375_webp.jpg",
        "https://s7ap1.scene7.com/is/image/incredibleindia/channapatna-toys-and-dolls-Karnataka-1-craft-hero?qlt=82&ts=1726641410733", // Pexels high-res woodcraft
        "https://m.media-amazon.com/images/I/71n42AejLaL.jpg"
      ]
    },
    "22": {
      name: "Bidriware Metalcraft",
      subtitle: "The Silver Magic of Black Soil",
      paragraphs: [
        "Originating in the city of Bidar over 500 years ago during the rule of the Bahmani Sultans, Bidriware is one of India's most striking and unique metal handicrafts. It involves an incredibly complex process of inlaying pure silver onto a blackened alloy of zinc and copper, resulting in a dramatic, high-contrast piece of art that looks both ancient and highly modern.",
        "The magic of Bidriware lies in its final step. After the silver wire is meticulously hammered into engraved grooves on the metal, the entire object is boiled in a special soil paste. This soil is collected only from the unlit inner areas of the historic Bidar Fort, which is rich in oxidizing nitrates. The soil turns the zinc alloy pitch black while leaving the pure silver brilliantly shiny.",
        "Bidriware designs are heavily influenced by Persian and Islamic art, featuring intricate geometric patterns, creeping vines, and poppy flowers. Today, rural artisans in Bidar create everything from traditional hookahs and paan boxes to sleek modern vases, pen drives, and jewelry, keeping this mesmerizing royal craft alive."
      ],
      images: [
        "https://s7ap1.scene7.com/is/image/incredibleindia/bidriware-bidar-karnataka-craft-hero?qlt=82&ts=1726641338177",
        "https://s3.ap-southeast-1.amazonaws.com/gounesco.com/wp-content/uploads/2017/03/09214910/BIDRIWARE-ARTISTS-AN-EXQUISITE-PIECE-OF-VASE.jpg",
        "https://d35l77wxi0xou3.cloudfront.net/collab/craft1582795978Bidri-Banner.jpg" // Artistic metal texture
      ]
    },
    "23": {
      name: "Kinhal Wood Carving",
      subtitle: "The Royal Art of the Vijayanagara Empire",
      paragraphs: [
        "In the small town of Kinhal (or Kinnal) in the Koppal district, a vibrant and ancient form of wood carving continues to survive. The artisans, known as 'Chitragars,' trace their lineage directly back to the artists who painted the grand murals in the Pampapateshwara Temple and crafted the intricate wooden chariots of the Vijayanagara Empire at Hampi.",
        "Kinhal art is distinct from other Indian woodcrafts due to its unique preparation. The artists use a lightweight wood from the Polki tree. To join the wooden pieces and create smooth contours, they use a special paste made from tamarind seeds and pebble powder. The figures are then painted in incredibly bright, primary colors using a technique that gives the wood a stunning, lifelike luster.",
        "The most famous Kinhal creations are the 'Gowri' headpieces used in local festivals, alongside magnificent idols of village deities (Grama Devatas), Garuda, and Kamadhenu. Watching a Kinhal artisan at work is like looking through a window into the 15th century, preserving the exact artistic soul that once decorated the greatest empire in southern India."
      ],
      images: [
        "https://kstdc.co/wp-content/uploads/2021/08/kinhal.jpg",
        "https://kinnaltoys.com/assets/img/gallery/26.jpg",
        "https://s3.ap-south-1.amazonaws.com/media.thesouthfirst.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-12-at-2.54.04-PM.jpeg" // Vibrant paint/wood proxy
      ]
    },
    "24": {
      name: "Sandur Lambani Embroidery",
      subtitle: "The Vibrant Threads of the Banjara Tribe",
      paragraphs: [
        "Tucked away in the Bellary district is the town of Sandur, home to the Lambani (or Banjara) community. Known for their nomadic history, the Lambani women are the masters of a spectacular, GI-tagged embroidery style. Characterized by a riot of bright colors—mostly reds, yellows, and blues—the embroidery is heavily adorned with mirrors, shells, coins, and intricate beadwork.",
        "What sets Sandur Lambani embroidery apart is its sheer complexity. The craft utilizes a staggering 39 distinct types of stitches. The fabric is often a handloom base, and the women intuitively stitch geometric patterns without tracing any designs beforehand. The mirrors sewn into the fabric were historically believed to reflect away evil spirits and protect the wearer.",
        "Today, the Kushal Kala Kendra in Sandur has empowered hundreds of Lambani women, turning their traditional attire into a globally recognized sustainable fashion statement. The craft has moved beyond tribal garments to bags, cushion covers, and modern apparel, providing crucial financial independence to the women of this rural community."
      ],
      images: [
        "https://th-i.thgim.com/public/migration_catalog/article15892085.ece/alternates/LANDSCAPE_1200/craft",
        "https://cultureandheritage.org/wp-content/uploads/2021/10/image-17.jpeg", // Pexels intricate fabric detail
        "https://cdn.vastrashilpakosh.in//vol2/Cultural_AIP_Record/nift_del/cfp/nift_del-172-cfp/nift_del-172-cfp_main/Image/JPEG/nift_del-172-cfp-1p.jpeg"
        
      ]
    },
    "25": {
      name: "Ilkal Sarees",
      subtitle: "The Timeless Handloom of Bagalkot",
      paragraphs: [
        "Woven in the historic town of Ilkal in the Bagalkot district, the Ilkal saree is an iconic symbol of Karnataka's handloom heritage. The weaving tradition here dates back to the 8th century. Distinctive and elegant, the saree is an essential part of the cultural identity of women in North Karnataka and Maharashtra.",
        "The hallmark of an Ilkal saree is its 'Tope Teni Seragu' (the pallu), which features bold red and white bands reminiscent of temple towers. The body of the saree is traditionally made of cotton, while the border and pallu are woven in pure silk or art silk. To join the cotton body to the silk pallu, the weavers use a highly specialized, ancient locking technique called 'Kondi,' ensuring a seamless and unbreakable bond.",
        "Despite the rise of power looms, true Ilkal sarees are still woven in the courtyards of rural homes using pit looms. The vibrant checks, stripes, and the signature 'Chikki Paras' border make these sarees timeless. Purchasing an authentic handwoven Ilkal is a direct investment in the livelihoods of generational weaving families who are fighting to keep this intricate art alive."
      ],
      images: [
        "https://img-cdn.thepublive.com/filters:format(webp)/local-samosal/media/media_files/o3oQuuRwd1soGnkBAg5M.png",
        "https://img-cdn.thepublive.com/filters:format(webp)/local-samosal/media/media_files/uOb0Mle8AxFRA6gR0vpI.png", // Pexels loom/weaving atmospheric
        "https://img-cdn.thepublive.com/filters:format(webp)/local-samosal/media/media_files/u526X8aJ14QiHh46FqnA.png"
      ]
    },
    "26": {
      name: "Chittara Murals",
      subtitle: "The Sacred Geometry of the Deevaru Tribe",
      paragraphs: [
        "Deep in the malnad (hill) regions of Sagar and Shimoga, the women of the Deevaru community practice a breathtaking form of wall painting known as Chittara. Originally painted on the red mud walls of their village homes, these murals are intricate, geometric expressions of the tribe's deep connection to nature, agriculture, and the cosmos.",
        "Chittara is entirely organic. The canvas is prepared using 'Gere' (red earth). The pristine white paint is made from ground rice paste, the yellow is derived from the seeds of the Gurige tree, and the black is made from burnt rice. Using delicate brushes crafted from Pundi weed, the women paint complex square and rectangular grids, filling them with motifs of birds, palanquins, and fertility symbols.",
        "Traditionally, Chittara murals were painted exclusively during weddings, harvests, and religious ceremonies to invoke the blessings of the gods. Today, recognizing the fragility of this ancient tribal art, artisans have begun translating these magnificent murals onto handmade paper, canvases, and pottery, sharing the sacred geometry of the Deevaru people with the world."
      ],
      images: [
        "https://th-i.thgim.com/public/incoming/9pid2z/article69893492.ece/alternates/FREE_1200/HoovinaMane-_DSC6431.jpg", 
        "https://handicrafts.nic.in/crafts/All_Crafts/Craft_Categories/Miscellaneous/Folk_Painting/Hase_chittara_painting/Image_Gallery/chi_i01.jpg",
        "https://caleidoscope.in/wp-content/uploads/2010/04/chittara-folk-art-of-karnataka-3.jpg" // Pexels textured paint/art process
      ]
    },
    "27": {
      name: "Kasuti Embroidery",
      subtitle: "The Flawless Threadwork of Dharwad",
      paragraphs: [
        "Kasuti is a world-renowned, GI-tagged folk embroidery that has been practiced by women in the Dharwad, Hubballi, and Belagavi regions for centuries. The word 'Kasuti' translates to hand-stitching in cotton. It is deeply embedded in local culture; traditionally, a Kasuti-embroidered Ilkal saree was a mandatory gift for a bride on her wedding day.",
        "What makes Kasuti extraordinarily difficult is that it is performed entirely without knots. The artisan counts the warp and weft threads of the fabric, ensuring that the embroidery looks identical on both the front and the back. Using four primary stitches—Gavanti (double running), Murgi (zigzag), Negi (darning), and Menthi (cross stitch)—they create flawless, pixel-perfect designs.",
        "The motifs used in Kasuti are deeply inspired by temple architecture and rural life. Common designs include temple chariots (Ratha), lotus flowers, elephants, and palanquins. Originally confined to sarees and blouses, Kasuti has now found its way onto modern kurtas, stoles, and home decor, allowing rural women to earn a sustainable living through their impeccable craftsmanship."
      ],
      images: [
        "https://www.azafashions.com/blog/wp-content/uploads/2025/12/Featured-Iamge-10.jpg",
        "https://handicrafts.nic.in/crafts/All_Crafts/Craft_Categories/Textile/Embroidery/Kasuti_Embroidery/Image_Gallery/kas_i02.png", // Pexels intense threadwork detail
        "https://uploads.knightlab.com/storymapjs/d1b5f53d4ed838094cdd17edab783ed9/textiles-of-south-india/_images/PS-38574_DesignCloseup_Default_1_1024x1024.jpg"
      ]
    },
    "28": {
      name: "Navalgund Durries",
      subtitle: "The Vibrant Woven Jamkhanas",
      paragraphs: [
        "In the Dharwad district lies the small town of Navalgund, famous for its brilliantly colored woven floor rugs known as 'Jamkhanas' or Durries. The craft was introduced to the region by weavers who migrated from Bijapur during the 16th century. Today, these vibrant rugs hold a Geographical Indication (GI) tag, celebrated for their extreme durability and striking visuals.",
        "Unlike standard carpets, Navalgund durries are woven using an incredibly labor-intensive pit loom process. The designs are heavily geometric and do not use any floral or curved lines. The most famous motifs include stylized peacocks (Namilu), highly abstract temple chariots, and the 'Pagade'—a design patterned exactly like the ancient Indian board game of dice.",
        "These durries were historically used by royalty and in grand temple halls. Sadly, the craft is currently endangered, with only a few dozen families left in Navalgund who possess the skill to weave the authentic, complex patterns. Purchasing a Navalgund Jamkhana is not just buying a rug; it is preserving a crucial piece of Karnataka's woven architectural history."
      ],
      images: [
        "https://i.pinimg.com/1200x/5f/8f/83/5f8f83c594b54049b47aa47273ba446c.jpg",
        "https://media.assettype.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticle_images%2F2018%2F07%2F01%2Ffile70sk89g6o34u9vp82661530392.jpg?w=undefined&auto=format%2Ccompress&fit=max",
        "https://kstdc.co/wp-content/uploads/2021/12/durrie.jpg" // Pexels carpet weaving texture
      ]
    },
    "29": {
      name: "Sagara Sandalwood Carving",
      subtitle: "The Fragrant Masterpieces of the Gudigars",
      paragraphs: [
        "The towns of Sagara and Soraba in the Shimoga district are the heartland of Karnataka's world-famous sandalwood carving industry. The artisans here belong to the 'Gudigar' community, whose ancestors were temple builders and carvers during the reigns of the Kadambas and Chalukyas. When temple building declined, they turned their chisels to the deeply fragrant, golden heartwood of the sandalwood tree.",
        "Sandalwood is incredibly dense and close-grained, allowing artisans to carve microscopic, hair-thin details that would cause other woods to splinter. Using dozens of specialized iron tools, the Gudigars sculpt breathtakingly detailed idols of Lord Krishna, Saraswati, and the Buddha. They are also famous for creating highly complex, perforated wooden boxes and intricate elephant figurines where the wooden chains actually move.",
        "Due to the extreme scarcity and high government regulation of real sandalwood, this craft is highly prized and highly expensive. The workshops in Sagara are filled with the intoxicating, sweet aroma of the wood. The patience required for this craft is unimaginable, with a single, highly detailed piece sometimes taking an artisan over a year to complete."
      ],
      images: [
        "https://cauverycrafts.com/wp-content/uploads/2021/02/Sirsi2.jpg",
        "https://i.pinimg.com/1200x/40/91/38/4091388f50706fbbbcaf494562ac6756.jpg",
        "https://i.pinimg.com/1200x/92/52/f7/9252f78c3abe2adbe5095ce841ba5610.jpg" // Pexels artisan hands carving
      ]
    },
    "30": {
      name: "Nagamangala Metal Craft",
      subtitle: "The Ancient Bronze Gods of Mandya",
      paragraphs: [
        "Nagamangala, a taluk in the Mandya district, has been a renowned center for bronze and brass metal casting for centuries. The artisans of this town trace their heritage to the great metalworkers who cast the processional deities (Utsava Murthis) for the towering Hoysala and Vijayanagara temples. Today, they continue to produce some of the finest metal idols in all of South India.",
        "The idols are crafted using the ancient 'Cire Perdue' or 'Lost Wax' method. The artist first meticulously sculpts the deity out of beeswax, covering it in layers of fine river clay. Once baked, the wax melts and drains away (hence 'lost wax'), leaving a hollow clay mold. Molten bronze is then poured into this mold. Because the mold must be broken to reveal the statue, every single Nagamangala idol is entirely unique.",
        "The hallmarks of Nagamangala statues are their anatomical perfection, serene facial expressions, and highly intricate jewelry detailing. Whether it is a towering Nataraja or a small, household Ganesha, the craftsmanship honors the strict iconographic rules laid down in ancient Hindu texts (Shilpa Shastras), keeping the divine art of the Hoysalas alive in the modern era."
      ],
      images: [
        "https://cdn.shopify.com/s/files/1/0686/9437/6495/files/karnataka-bronze-ware-the-ancient-metal-art-that-shaped-human-forms-make-an-images-about-this-topic.png?v=1769074999",
        "https://cdn.shopify.com/s/files/1/0686/9437/6495/files/karnataka-bronze-ware-the-ancient-metal-art-that-shaped-human-forms-create-a-image-about-this-topic.png?v=1769074930"
      ]
    }
  }

  // ========================================================================
  // RENDER LOGIC
  // ========================================================================
  
  // Find the data for the clicked ID
  const pageData = detailedData[id]

  // Fallback screen if ID doesn't exist
  if (!pageData) {
    return (
      <div className="min-h-screen bg-[#080f08] text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-white/50 mb-4">Content coming soon for ID: {id}</h2>
        <button onClick={() => navigate(-1)} className="px-6 py-2 bg-[#e4c590] text-black font-bold rounded-full hover:bg-white transition">
          ← Back to Explore
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#080f08] text-white pt-24 px-6 md:px-12 lg:px-24 pb-20 selection:bg-[#e4c590] selection:text-black">
      
      {/* Navigation */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-white/50 hover:text-[#e4c590] transition flex items-center gap-2 uppercase tracking-widest text-sm"
      >
        ← Back to Map
      </button>

      {/* Header */}
      <div className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#e4c590] mb-4 font-display leading-tight drop-shadow-lg">
          {pageData.name}
        </h1>
        <p className="text-xl md:text-2xl text-white/60 italic font-display">
          {pageData.subtitle}
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Left Side: Text Paragraphs */}
        <div className="w-full lg:w-1/2 space-y-6">
          {pageData.paragraphs.map((text, index) => (
            <p key={index} className="text-white/80 leading-relaxed text-lg font-body">
              {text}
            </p>
          ))}
        </div>

        {/* Right Side: Image Gallery */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pageData.images.map((imgUrl, index) => (
              <div 
                key={index} 
                className={`overflow-hidden rounded-xl border border-white/10 shadow-xl ${index === 0 ? 'md:col-span-2' : ''}`}
              >
                <img 
                  src={imgUrl} 
                  alt={`${pageData.name} visual ${index + 1}`} 
                  className="w-full h-full object-cover aspect-video hover:scale-105 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}