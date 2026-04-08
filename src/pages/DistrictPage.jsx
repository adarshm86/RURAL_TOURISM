import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function DistrictPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  // ========================================================================
  // 📚 YOUR DATA GOES HERE
  // Add new IDs based on your ExplorePage map markers.
  // ========================================================================
  const detailedData = {
    "1": {
      name: "Madhukeshwara Temple, Banavasi",
      subtitle: "The Ancient Kadamba Marvel",
      // PASTE YOUR TEXT HERE: Break your 500 words into comma-separated strings for paragraphs
      paragraphs: [
        "Banavasi, the ancient capital of the Kadamba dynasty, is home to the magnificent Madhukeshwara Temple. Dedicated to Lord Shiva, this temple is a brilliant architectural marvel that dates back to the 9th century. The presiding deity, a honey-colored Shiva Linga, gives the temple its name, 'Madhukeshwara'.",
        "The temple complex is a timeline of architectural evolution, having received additions from the Chalukyas, Hoysalas, and the Vijayanagara empire over several centuries. One of the most striking features is the intricately carved monolithic stone cot, a masterpiece gifted by the Sonde rulers.",
        "Visiting Banavasi isn't just about the temple; it's a step back in time. The village is surrounded by the Varadha river and lush forests. If you visit in December, you might catch the famous Kadambotsava, a grand cultural festival organized by the state government."
      ],
      // PASTE YOUR IMAGE URLS HERE: You can use direct image links from Google/Wikipedia
      images: [
        "https://touringwithpk.com/wp-content/uploads/2021/06/Nov18-341a.jpg",
        "https://isharethese.com/wp-content/uploads/Stone-triloka-mandapa-with-Shiva-and-Parvathi-sitting-on-the-throne-in-SRI-MADHUKESHWARA-TEMPLE-BANAVASI-Karnataka-India-Asia-682x1024.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYfFrdAiUoNTP8_MIVRcPPppqvp2d9CGrzVg&s"
      ]
    },
    "11": {
      name: "Kichchu Hayisuvudu",
      subtitle: "The Fiery Cattle Festival of Mandya",
      paragraphs: [
        "Kichchu Hayisuvudu is a breathtaking rural tradition celebrated primarily in the Mandya and Mysore districts during Makar Sankranti. This unique ritual involves making cattle run through a line of fire, a practice deeply rooted in agrarian beliefs.",
        "Farmers spend weeks preparing their prized bulls and cows, painting their horns in vibrant colors, tying bells, and draping them in beautiful garlands. The fire is made of dry hay and agricultural waste, creating a sudden, intense blaze.",
        "The belief is that the smoke and fire cleanse the animals of ticks, parasites, and ward off the 'evil eye'. It is a spectacular display of the bond between the rural farmers of Karnataka and the livestock that sustains their livelihoods."
      ],
      images: [
        "https://live.staticflickr.com/3112/3201539036_6e57b9386e_b.jpg", // Placeholder
        "https://live.staticflickr.com/3356/3200117478_4f85941904_b.jpg"  // Placeholder
      ]
    },


"3": {
      name: "Naganatha Temple",
      subtitle: "The Hidden Chalukyan Gem of the Rock Cleft",
      paragraphs: [
        "The Naganatha Temple, also known as Naganatha Kolla, is a 7th-century architectural marvel tucked away in a secluded rock cleft near Badami. Built by the Early Chalukyas, this sandstone sanctuary is dedicated to Lord Shiva and remains one of the most tranquil and atmospheric sites in the Bagalkot district.",
        "The temple is renowned for its 'Kolla' setting—a natural valley of towering red cliffs that provides a meditative environment. Unlike the more famous cave temples, Naganatha offers an intimate look at Chalukyan craftsmanship, featuring heavy square pillars adorned with intricate reliefs of Nagadeva, celestial beings, and mythical creatures.",
        "One of the site's most stunning highlights is the ceiling of the Mandapa, which houses a grand carving of Lord Brahma seated on a lotus. Surrounded by guardians and leaping horses, these carvings showcase the experimental spirit of the artisans who transformed the Malaprabha valley into the cradle of Indian temple architecture."
      ],
      images: [
        "https://www.mediastorehouse.com/p/791/naganatha-temple-bagalkot-badami-karnataka-india-47294911.jpg.webp",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcNPgvBmibDCT3N0_dOeYW5v5YjLCS4uuMUjDP9JuvJnlq9kzZ53amPDOBY1QXuQGs_5d1yZG12HTVmm7kgX4uIrLn7R-kmL5Oea2HOp7m_FKKa7_GAIGv31WdpTpdge8ZFKmwsUDRy5a4/s1600/11+Naganatha+Temple.JPG",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0RmCSv8JDWeWZ3SCTHunktjJl4yp_gYT_8HHdCeUEpfW60-XYcPXCC0GNcUa0dEi2DK8_PKq0PNToPEmPnl8huOPm07Gg5RDLi_xqqfgfRX9GPq5iDKhqRT9cCHVWKMtX-zpxWU5bLW9w/s1600/08+Naganatha+Temple.JPG"
      ]
    },
    "12": {
      "name": "Banashankari Jaathre",
      "subtitle": "The Grand Cultural Fair of Badami",
      "paragraphs": [
        "The Banashankari Jaathre is a massive annual fair held at the Banashankari Amma Temple near Badami, typically in January or February (during the Hindu month of Magha). This vibrant festival celebrates Goddess Banashankari, an incarnation of Parvati, and attracts lakhs of devotees from across Karnataka and neighboring Maharashtra. The peak of the festivities is marked by the grand 'Rathotsava' (chariot festival), where a massive wooden chariot carrying the goddess is pulled through the streets by thousands of pilgrims.",
        "The fair is a spectacular display of North Karnataka's rural life and cultural heritage. Beyond the religious rituals, the 'Kolla' area transforms into a sprawling marketplace featuring traditional handicrafts, agricultural tools, and local produce. A unique highlight is the 'Palleda Habba' (Vegetable Festival), where the goddess is offered a staggering 108 varieties of vegetable dishes, a tradition rooted in her legend as 'Shakambhari,' the goddess of vegetation who once saved the local population from famine.",
        "Entertainment at the jaathre remains a major draw, blending age-old traditions with festive energy. Professional drama companies set up massive tents to perform night-long plays, while folk dances, music, and circus acts fill the air with excitement. The temple’s sacred pond, 'Haridra Tirtha,' also plays a central role during the 'Teppotsava' (boat festival), where the processional deity is ferried across the water on a decorated boat, creating a mesmerizing spiritual experience for all who attend."
      ],
      "images": [
        "https://utsav.gov.in/public/uploads/event_cover_image/event_747/16608945811985328468.jpg",
        "https://pbs.twimg.com/media/EN-rMhYWkAARPCG.jpg",
        "https://marveltours.in/image/gallery/4b1b5fbfdc71cdec96c3d14be8942dde.JPG"
      ]
    },
    "4": {
      "name": "Chandramouleshwara Temple",
      "subtitle": "The 900-Year-Old Chalukyan Wonder of Unkal",
      "paragraphs": [
        "The Chandramouleshwara Temple is a magnificent 11th-century architectural marvel located in Unkal, a suburb of Hubli. Built during the reign of the Kalyani Chalukyas, this temple is dedicated to Lord Shiva and is celebrated for its unique 'Sarvatobhadra' plan, featuring four grand entrances facing the cardinal directions. Unlike most traditional South Indian temples, it lacks a gopura (tower), which local folklore attributes to it being constructed in a single night and left unfinished by anonymous artisans as dawn broke.",
        "The temple's interior is a showcase of exquisite craftsmanship, featuring polished black granite pillars and walls adorned with intricate carvings. The main sanctum houses a Swayambhu Linga, while a second shrine contains a rare 'Chaturmukha' (four-faced) Linga, symbolizing Shiva's omnipresence. The outer walls are a visual gallery of Hindu iconography, depicting various forms of Shiva, dancing Ganesha, and deities from the Vaishnavite and Shaktite traditions, all carved with superlative precision that rivals the famous temples of Belur and Halebidu.",
        "Despite its historical significance as a Protected Monument under the Archaeological Survey of India (ASI), the temple remains a serene, 'hidden' treasure tucked away within a narrow residential neighborhood near Unkal Lake. It serves as a quiet refuge for history buffs and devotees alike, particularly during Maha Shivaratri when the temple comes alive with festive energy. Its proximity to the scenic Unkal Lake also makes it a perfect spot for visitors to combine a spiritual journey with a peaceful sunset view."
      ],
      "images": [
        "https://s7ap1.scene7.com/is/image/incredibleindia/chandramouleshwara-temple-dharwad-karnataka-attr-about?qlt=82&ts=1726720300396",
        "https://s7ap1.scene7.com/is/image/incredibleindia/chandramouleshwara-temple-dharwad-karnataka-1-attr-hero?qlt=82&ts=1726720262572",
        "https://cdn.s3waas.gov.in/s3eefc9e10ebdc4a2333b42b2dbb8f27b6/uploads/bfi_thumb/2018082894-olwdjijv7uv94zb3c7d60g10lon9x6rg6ztdqdwq9u.jpg"
      ]
    },
    "14": {
      "name": "Mylara Jatre",
      "subtitle": "The Divine Prophecy and Devotional Ecstasy of Haveri",
      "paragraphs": [
        "Mylara Jatre is a massive annual fair held at the Mylara Lingeshwara Temple in the Haveri district, dedicated to an incarnation of Lord Shiva who defeated the demon brothers Mani and Mallasura. Celebrated during the Magha month (usually February or March), the festival attracts millions of devotees known as 'Kanchaveeras,' who clad themselves in traditional black woollen blankets and carry heavy brass bowls, recreating the fierce persona of the deity's army.",
        "The spiritual climax of the fair is the 'Karnika Utsava' or the ritual of divine prophecy. A dedicated oracle, known as the 'Karnika Jajja,' climbs a 60-foot wooden bow (Dhanush) and, in a state of trance, delivers a cryptic one-sentence prophecy regarding the upcoming year's rains, crops, and political fate. This 'Karnika Van' is eagerly awaited by farmers across Karnataka, who plan their agricultural cycles based on these mystic words.",
        "The festival is also famous for its intense displays of devotion, including the 'Goravara Kunitha' dance and rituals where devotees perform acts of self-mortification to show their surrender to Mylara Lingeshwara. The atmosphere is a powerful blend of ancient folklore and rustic energy, making it one of the most significant folk religious gatherings in North Karnataka, symbolizing the victory of spiritual righteousness over evil."
      ],
      "images": [
        "https://imgs.etvbharat.com/etvbharat/prod-images/kn-hvr-02-mailar-karnika7202143_08022023001843_0802f_1675795723_503.png",
        "https://i.ytimg.com/vi/64PNJuLRI3Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAXSKWRmj_JKRhIruUPxCCgt_s_4Q",
        "https://imagesvs.oneindia.com/kn/img/2022/02/mylaralingeshwarakarnika-1644331048.jpg"
      ]
    },
    "7": {
      "name": "Galageshwara Temple",
      "subtitle": "The Architectural Masterpiece of the Tungabhadra Bank",
      "paragraphs": [
        "The Galageshwara Temple is a magnificent 11th-century structural marvel located in Galaganatha, Haveri district. Situated at the confluence of the Tungabhadra and Varada rivers, this Kalyani Chalukyan temple is dedicated to Lord Shiva as Galageshwara. Its most striking feature is the massive, pyramid-shaped 'Shikhara' (tower) that rises in distinct tiers, showcasing a unique blend of Dravidian and Nagara architectural styles that is rare in the region.",
        "The temple is built on a high star-shaped basement (Jagati), designed to protect the structure from the seasonal flooding of the nearby river. Its interior is a treasure trove of art, featuring highly polished, lathe-turned pillars and a spacious 'Sabhamandapa' where the echoes of the flowing river create a meditative hum. The intricate carvings on the exterior walls depict scenes from the Ramayana and Mahabharata, alongside delicate floral patterns and mythical 'Yali' figures.",
        "A visit to Galaganatha offers more than just historical exploration; the temple's location right beside the riverbank makes it a scenic and peaceful retreat. Devotees and history buffs often visit during the monsoon when the river is in full swell, framing the ancient sandstone structure against a lush, green landscape. It remains a vital site for understanding the late Chalukyan transition toward the more ornate Hoysala style of architecture."
      ],
      "images": [
        "https://cdn.s3waas.gov.in/s3d5cfead94f5350c12c322b5b664544c1/uploads/bfi_thumb/2018082195-olwckzxgc2qg56l5jq8k43a1g5ob2ej86x3f0rlnre.jpg",
        "https://i0.wp.com/aravindgundumane.com/wp-content/uploads/2021/02/Sculpture-of-the-horsemen-at-the-temple.jpg?resize=1118%2C779&ssl=1",
        "https://media.assettype.com/freepressjournal/2025-04-07/np3g4969/2024_04_30.jpg"
      ]
    },
    "2": {
      "name": "Kedareshwara Temple",
      "subtitle": "The Intricate Hoysala Masterpiece of Balligavi",
      "paragraphs": [
        "The Kedareshwara Temple is a stunning 11th-century architectural marvel located in Balligavi, Shikaripura. Representing the transition from later Chalukyan to early Hoysala styles, this temple is dedicated to Lord Shiva and is celebrated for its 'Trikuta' (triple-shrine) design. It stands as a testament to a time when Balligavi was a major learning center, once home to over 50 monasteries and diverse philosophical schools.",
        "The temple is world-renowned for its exquisite carvings, particularly on its staggered, star-shaped basement. The exterior walls are a visual encyclopedia of Hindu mythology, featuring intricately detailed friezes of elephants, horses, and mythical lions (Yalis), alongside lifelike depictions of deities from the Puranas. The legendary sculptor Jakanachari is often associated with the superlative craftsmanship found in the polished lathe-turned pillars and the ornate ceiling domes of the Navaranga.",
        "Despite its immense historical and artistic value, Kedareshwara remains a 'hidden gem,' offering a peaceful alternative to the crowded sites of Belur or Halebidu. The temple complex is surrounded by ancient inscriptions and smaller shrines, providing a quiet sanctuary for those looking to immerse themselves in the 'Golden Age' of Karnataka's temple architecture. Its lush, green surroundings and the nearby Bherundeshwara pillar add to the site's mystical and timeless charm."
      ],
      "images": [
        "https://data.agatetravel.com/images/photogallery/2019/kedareshwara-temple.jpg",
        "https://media.istockphoto.com/id/1401009651/photo/kedareshwara-temple-beautiful-sculpture-halebidu-karnataka-india.jpg?s=612x612&w=0&k=20&c=vXIbFFhOMY2XrN7VTP1rQgs6ukg0zntyX8Z0jCwp-7k=",
        "https://media.istockphoto.com/id/959215304/photo/ornate-wall-panel-reliefs-depicting-harihara-arjuna-shooting-arrow-at-the-fish-a-drumer-and.jpg?s=612x612&w=0&k=20&c=TPDEQl-5a2QWOivYyFuwcXsti3vGqW7-jrG9fR1FBIc="
      ]
    },
    "5": {
      "name": "Bandalike Temple Complex",
      "subtitle": "The Forgotten Ruined City of the Forests",
      "paragraphs": [
        "Hidden deep within the lush, green forests of Shikaripura taluk lies Bandalike, a place that was once a bustling capital during the reign of the Kadambas, Chalukyas, and Rashtrakutas. Today, it is an archaeological wonderland dotted with multiple ruined temples. The site feels like a lost city, offering a deeply atmospheric experience as you wander through crumbling stone structures engulfed by nature.",
        "The complex comprises several significant structures, including the Trimurti temple, the Someshwara temple, and the Shantinatha Basadi. The Trimurti temple is particularly striking, originally housing statues of Brahma, Vishnu, and Shiva. The architecture features the classic Kadamba-Chalukya transition style, with beautifully carved doorways, ornate pillars, and intricate floral motifs etched into the weathered sandstone.",
        "Visiting Bandalike is an off-the-beaten-path adventure. Because it is relatively unknown to mainstream tourism, you often have the entire complex to yourself. It is a haven for photography, history enthusiasts, and anyone looking to experience the silent, echoing grandeur of ancient Karnataka away from the crowds."
      ],
      "images": [
        "https://content3.jdmagicbox.com/v2/comp/shimoga/s7/9999p8182.8182.230624011339.s5s7/catalogue/bandalike-ancient-temple-narasapura-shimoga-tourist-attraction-iwfds2but1.jpg",
        "https://i0.wp.com/aravindgundumane.com/wp-content/uploads/2019/03/DSC_2606.jpg?resize=1140%2C760&ssl=1",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXJIMDSVBSZ49hDYLtgRYJUsY2DI-qUgo2NRMQG54NF3RUbq6uCIFdsTTgkG4HHJZa0y3VVdvtSn3nPhNesMKQSEziHyQdxgXtD-ao2NKrDmbmtz8dwa0Cg_NuVVf43Gel0rvNQ4sXQB0/s1600/10+Bandalike+Temple+Complex.jpg"
      ]
    },
    "6": {
      "name": "Tarakeshwara Temple",
      "subtitle": "The Magnificent Lotus Ceiling of Hangal",
      "paragraphs": [
        "The Tarakeshwara Temple in Hangal is a colossal monument dedicated to Lord Shiva. Historically known as Viratanagara (a city mentioned in the epic Mahabharata), Hangal was the capital of the local Kadamba dynasty. This 12th-century temple is a stunning example of Kalyani Chalukyan architecture, built on a grand scale that commands absolute awe from the moment you step into its courtyards.",
        "The absolute masterpiece of this temple is the ceiling of its main pavilion. Carved out of a single gigantic stone, the ceiling is shaped like a massive, inverted lotus suspended in mid-air. It is supported by massive lathe-turned pillars that shine with a mirror-like polish. The outer walls are adorned with intricate miniature temple towers (Shikharas) and a base lined with hundreds of beautifully carved elephants.",
        "Despite its massive size and architectural brilliance, Tarakeshwara remains remarkably obscure compared to the Hoysala temples of the south. This makes it a perfect destination for explorers wanting an authentic, uninterrupted heritage experience. The sheer geometry and engineering of the stone roof will leave you wondering how ancient artisans achieved such perfection."
      ],
      "images": [
        "https://media.istockphoto.com/id/1007839992/photo/carved-exterior-view-of-kopeshwar-temple-khidrapur-maharashtra-india.jpg?s=612x612&w=0&k=20&c=W_w4bZtq8WlJB8h93sIoULk0LfQ6RAJnkf84DZf81Tg=",
        "https://media.istockphoto.com/id/1667598130/photo/a-stone-temple-with-exquisite-carvings-on-the-exterior-walls-of-the-chennakeshava-temple-in.jpg?s=612x612&w=0&k=20&c=hZAEdSLGiW3Gvs91chk5vci-wwE7uayUGT6ZrVigrBM=",
        "https://media.istockphoto.com/id/2026965160/photo/ratnagiri-maharashtra-india-shiva-linga-at-ancient-karneshwar-temple-of-sangameshwar-in.jpg?s=612x612&w=0&k=20&c=XXzEL3QIx3ID2tp2c58pwR9QZu-Tu275kWNEkUkMY9Q="
      ]
    },
    "8": {
      "name": "Mukteshwara Temple",
      "subtitle": "The Riverside Jewel of Chaudayyadanapura",
      "paragraphs": [
        "Perched elegantly on the banks of the Tungabhadra River in Haveri district, the Mukteshwara Temple is a 12th-century masterpiece of Kalyani Chalukyan architecture. The temple holds immense spiritual significance as it is closely associated with Shivasharana Muktayakka, a prominent saint of the 12th-century Virashaiva movement. The setting of the temple, with the gentle river flowing nearby, creates an atmosphere of profound peace.",
        "The temple is famous for its highly polished, dark stone walls and intricate carvings. Inside the sanctum resides an 'Ekamukha Linga' (a Shiva Linga with a single face carved into it), a rare and sacred representation. The exterior is decorated with delicate floral motifs, miniature turrets, and numerous ancient Kannada inscriptions that detail the history, land grants, and philosophical teachings of the era.",
        "Visiting Chaudayyadanapura offers a perfect blend of natural beauty and historical exploration. The temple's flawless proportions and the serene riverbank make it an ideal spot for meditation and photography. It stands as a silent witness to the rich literary and spiritual revolution that swept across Karnataka centuries ago."
      ],
      "images": [
        "https://s7ap1.scene7.com/is/image/incredibleindia/mukteshwara-temple-bhubaneshwar-odisha-1-attr-hero?qlt=82&ts=1742184824686",
        "https://s7ap1.scene7.com/is/image/incredibleindia/mukteshwara-temple-bhubaneshwar-odisha-2-attr-hero?qlt=82&ts=1742169434672",
        "https://odishatourism.gov.in/content/dam/tourism/home/discover/attractions/temples-&-monuments/mukteswar-temple/mukteswar%20corosal1.jpg"
      ]
    },
    "9": {
      "name": "Lakshmi Devi Temple",
      "subtitle": "The Oldest Surviving Hoysala Temple",
      "paragraphs": [
        "Located in the quiet village of Doddagaddavalli, the Lakshmi Devi Temple is a historical treasure. Built in 1113 CE by a wealthy merchant named Kullahana Rahuta, it holds the prestigious title of being one of the oldest surviving intact temples of the Hoysala Empire—predating the world-famous temples of Belur and Halebidu. Surrounded by a serene lake and coconut groves, the setting is incredibly picturesque.",
        "Unlike the later Hoysala temples, this structure is unique because it does not sit on a raised star-shaped platform (Jagati). It is a 'Chatushkuta' (four-shrined) temple. The shrines face the four cardinal directions and house deities of Mahalakshmi, Shiva, Vishnu, and a fierce, striking statue of Kalabhairava. The ceiling of the main hall is carved with breathtaking depictions of the dancing Shiva (Nataraja) and Ashtadikpalakas (guardians of the eight directions).",
        "The temple grounds are incredibly peaceful, devoid of commercial tourism. It provides a fascinating look into the early, experimental stages of Hoysala architecture before they developed their signature overly-ornate style. The stone protectors (Dwarapalakas) at the entrances and the eerie beauty of the Bhairava shrine make this a must-visit for serious heritage lovers."
      ],
      "images": [
        "https://inditales.com/wp-content/uploads/2020/01/lakshmi-devi-temple-doddagaddavalli.jpg",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGhm2f0D2qm4MLSg9-tFH1wH2pTn8i7iYF30Q0-eHoz-8SQM-zWqc06xqV0bHXtlguwpvotiisP-cETSA2DhGVjAw2A5Q3GJpBj2fb0wo_egbdrO5v34JXwHqNs_PnxGQG6eD0r0BaY88/s1600/IMG_1396.JPG",
      ]
    },
    "10": {
      "name": "Someshwara Temple",
      "subtitle": "The Dravidian Masterpiece of Kolar",
      "paragraphs": [
        "Located in the heart of Kolar—a city historically famous for its gold mines—the Someshwara Temple is a magnificent monument that reflects the grandeur of the Vijayanagara Empire. While its foundations date back to the Chola period, the expansive, ornate structure we see today was built in the 14th century. Dedicated to Lord Shiva, the temple features a massive, towering 'Gopuram' (gateway tower) that dominates the skyline.",
        "The true marvel of this temple is its 'Kalyana Mandapa' (marriage hall). It is a mesmerizing gallery of Dravidian art, featuring intricately carved musical pillars that produce different metallic sounds when tapped. The base of the temple is adorned with fascinating friezes, including rare carvings that depict Chinese and European travelers, highlighting the global trade connections of the Vijayanagara era.",
        "Constructed from hard granite, the level of detail achieved by the sculptors is staggering. The walls are covered in beautiful stucco work and mythological depictions. A visit here is highly recommended during the evening when the golden hour light strikes the granite pillars, making the ancient stone glow and bringing the carvings to life."
      ],
      "images": [
        "https://media.istockphoto.com/id/1389619664/photo/main-entrance-gate-of-lord-someshwara-temple-it-is-an-ornate-14th-century-vijayanagara-era.jpg?s=612x612&w=0&k=20&c=aRySU0rVTQxQdZBiN6JE09evBnJk9m66CzgpfDLpEHI=",
        "https://media.istockphoto.com/id/1389620402/photo/sculpture-of-indian-gods-on-the-entrance-gate-of-someshwara-temple-kolar-karnataka-india.jpg?s=612x612&w=0&k=20&c=dhTAYyjcC26N20h0ShV6lp0ngvpay9uLIAPso4pve88=",
        "https://media.istockphoto.com/id/1187554786/photo/someshwara-temple-kolar-karnataka-india.jpg?s=612x612&w=0&k=20&c=LdSCuOiwnojtSCtWWA6lNRJE9FFsIgdp9WkE3-o1xU0="
      ]
    },
    "13": {
      "name": "Bedara Vesha",
      "subtitle": "The Hunter's Dance of Sirsi",
      "paragraphs": [
        "Bedara Vesha is a mesmerizing and highly energetic folk dance performed in the town of Sirsi (Uttara Kannada) exclusively during the festival of Holi. Translated as the 'Hunter's Dance,' it is a tradition with a history spanning over 300 years. It pays tribute to the bravery and martial spirit of the local hunter tribes who protected the region during ancient times.",
        "The preparation for the dance is grueling. Performers spend hours getting painted in vibrant colors, primarily red, black, and white. They wear heavy, colorful skirts, massive headdresses made of peacock feathers, and carry a sword and a shield. The entire town gathers in the streets to watch these warriors emerge under the cover of night, illuminated by blazing torches.",
        "The performance itself is a test of extreme physical endurance. To the deafening, rhythmic beats of traditional drums (Dollu and Tamate), the 'hunters' leap, spin, and perform acrobatic martial arts moves for hours without a break. It is a spectacular, sleepless night of community bonding, color, and raw energy that transforms the rural streets into a historic battlefield."
      ],
      "images": [
        "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bedara_Vesha.jpg",
        "https://i0.wp.com/ficklesorts.com/wp-content/uploads/2019/03/img_7309.jpg?fit=1400%2C933&ssl=1", // Evocative folk placeholder
        "https://images.news18.com/kannada/uploads/2023/03/Bedara-Vesha-2.jpg" // Evocative folk placeholder
      ]
    },
    "15": {
      "name": "Kambala",
      "subtitle": "The Roaring Buffalo Race of the Coast",
      "paragraphs": [
        "Kambala is an epic, adrenaline-pumping traditional buffalo race held in the muddy, water-filled paddy fields of coastal Karnataka (Dakshina Kannada and Udupi). Originating as a royal pastime for local landlords and a ritual to appease the gods for a good harvest, it has evolved into a massive rural sporting event held between November and March.",
        "The visual spectacle of Kambala is unmatched. A Jockey, wielding a whip but guiding mostly by voice and skill, sprints barefoot through the thick mud alongside two massive, highly-trained water buffaloes. They reach incredible speeds, sending spectacular arcs of muddy water high into the air. The race is intensely competitive, with different categories based on the age of the buffaloes and the type of plow used.",
        "Beyond the race, Kambala is a deeply cultural event. The buffaloes are treated with immense respect and care throughout the year. The races stretch deep into the night under floodlights, accompanied by loud drumming, thousands of cheering spectators, and a vibrant festival atmosphere that defines the spirit of Tulunadu."
      ],
      "images": [
        "https://t4.ftcdn.net/jpg/07/63/37/23/360_F_763372386_synDimQFK8QonJdhD09Ykc56Cew1U0fm.jpg",
        "https://discoverindiabycar.com/wp-content/uploads/2024/07/Kambala-Festival-A-Thrilling-Dive-into-Karnatakas-Cultural-Heritage-01.jpg",
        "https://thefederal.com/h-upload/2023/11/22/383619-srinivas-gowda.webp"
      ]
    },
    "16": {
      "name": "Suggi Kunita",
      "subtitle": "The Joyous Harvest Dance",
      "paragraphs": [
        "Suggi Kunita is a vibrant, rhythmic harvest dance performed primarily by the Halakki Vokkaliga agricultural community in the Uttara Kannada region. 'Suggi' translates to harvest, and the dance is a deeply rooted expression of gratitude to Mother Nature and the local deities for a bountiful crop. It is usually performed in the months following the monsoon harvest.",
        "The dancers wear striking, elaborate costumes that immediately catch the eye. They don massive headgears called 'Turai', intricately crafted from soft pith wood, colorful paper, and peacock feathers. Wearing bright red and yellow garments, the men form circles, holding carved wooden sticks (Kolata) and dancing to the hypnotic, resonant beats of an earthen drum known as the 'Gummate'.",
        "During the festival, the troupes travel from village to village, courtyard to courtyard. They are welcomed by local families who wash their feet and offer them fresh grain and coconuts. The rhythmic clashing of sticks, the beautiful rustic songs, and the swirling colorful headgears create an atmosphere of pure, unfiltered rural joy."
      ],
      "images": [
        "https://www.auchitya.com/wp-content/uploads/2021/01/Suggi-kunitha-dance.jpg",
        "https://ruthvi.weebly.com/uploads/2/2/4/5/22455836/5569478_orig.jpg?477", // Folk art placeholder
        "https://upload.wikimedia.org/wikipedia/commons/6/6c/Suggi_Kunitha_Karnatala.jpg" // Tribal/rural dance placeholder
      ]
    },
    "17": {
      "name": "Somana Kunita",
      "subtitle": "The Masked Spirit Dance",
      "paragraphs": [
        "Somana Kunita is a powerful and visually arresting ritualistic dance performed in the southern districts of Karnataka, including Tumkur, Hassan, and Mandya. The dance centers around the 'Somas'—believed to be the semi-divine guards or spirits attached to the local village mother goddess (Grama Devata). It is an essential part of village temple fairs (Jatres).",
        "The defining feature of this dance is the colossal, terrifying wooden masks worn by the performers. These masks, painted in vivid primary colors—often red (representing benign spirits) and yellow or black (representing fierce spirits)—are incredibly heavy, sometimes weighing up to 15 kilograms. The dancers wear brightly colored sarees tied in a traditional panche style.",
        "Accompanied by the shrill, fast-paced beats of the 'Arehalige' (a percussion instrument) and pipes, the dancers enter a state of trance. They move with heavy, rhythmic steps, bringing the towering masks to life in a mesmerizing display. The ritual is believed to protect the village boundaries, cure diseases, and ward off malevolent forces from the community."
      ],
      "images": [
        "https://upload.wikimedia.org/wikipedia/commons/1/1f/Somana_Kunitha_01.JPG",
        "https://kstdc.co/wp-content/uploads/2021/08/somana.jpg",
        "https://pbs.twimg.com/media/CQJBCVNUsAEwFXe.jpg" // Intense cultural portrait placeholder
      ]
    },
    "18": {
      "name": "Hulivesha",
      "subtitle": "The Roar of the Tiger Dancers",
      "paragraphs": [
        "Hulivesha (or Pilivesha in the local Tulu language) is one of the most iconic, vibrant, and wildly popular folk dances of the coastal Dakshina Kannada and Udupi districts. Translated as 'Tiger Dance,' it is performed primarily during the Navaratri (Dasara) festival to honor Goddess Durga, whose mount is the tiger, and sometimes during Krishna Janmashtami.",
        "The transformation into a tiger is an extreme test of endurance. Men stand for hours as artists meticulously paint their bodies with vivid yellow, black, and white stripes, creating a stunningly realistic tiger skin effect. They wear sheepskin accessories and a tiger-faced mask or headgear. Once painted, the dancers roam the streets in troupes, accompanied by the heart-pounding, thunderous beats of the 'Tase' drum.",
        "The performance is a spectacular display of athleticism and acrobatics. The 'tigers' perform backflips, breathe fire, and execute a famous stunt where they bend backward to pick up a coin from the ground using only their mouths. The streets fill with massive crowds, and the electrifying energy of Hulivesha is the absolute heartbeat of coastal Karnataka's festive season."
      ],
      "images": [
        "https://nammakarkala.wordpress.com/wp-content/uploads/2014/02/tiger_dance.jpg",
        "https://www.drkrishi.co.in/wp-content/uploads/Fire-Breathing-Tiger.jpg",
        "https://th-i.thgim.com/public/incoming/4hxg7w/article67412830.ece/alternates/FREE_1200/13_mn%20Photo%20for%20%20Tiger%20dance%20story%20%201.JPG"
      ]
    },
    "19": {
      "name": "Karaga Rural",
      "subtitle": "The Sacred Night-Time Procession",
      "paragraphs": [
        "The Karaga festival is one of Karnataka's oldest and most deeply revered religious traditions, practiced predominantly by the Thigala community. Rooted in the epic Mahabharata, the festival celebrates Draupadi as an incarnation of the supreme Goddess Shakti. While the Bangalore Karaga is famous, the rural versions held in towns across the state offer a raw, highly traditional, and intimate spiritual experience.",
        "The focal point of the festival is the 'Karaga' itself—a towering, intricately decorated floral pot containing water and the deity's idol. The designated priest, who prepares for months through strict asceticism, dresses in women's attire to carry the Karaga. Miraculously, he balances this heavy, towering floral structure entirely on his head without touching it, walking in a state of divine trance.",
        "The procession takes place entirely under the cover of night, lit by oil lamps and torches. Accompanied by the hypnotic clash of cymbals, rhythmic drumming, and sword-wielding guards known as 'Veerakumaras,' the Karaga winds its way through narrow village paths. The scent of thousands of jasmine flowers fills the air, creating a mystical, unforgettable atmosphere of devotion."
      ],
      "images": [
        "https://utsav.gov.in/public/uploads/event_cover_image/event_420/1657273768657075168.jpg",
        "https://images.careerindia.com/img/2025/04/bengaluru-karaga-1200-1745404636.jpg", // Festive night lights placeholder
        "https://media.assettype.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2021%2F04%2F06%2Fbng20-karaga-22-1-970803-1617659294.jpg?w=undefined&auto=format%2Ccompress&fit=max" // Rural night gathering placeholder
      ]
    },
    "20": {
      "name": "Village Jatre",
      "subtitle": "The Heartbeat of Rural Karnataka",
      "paragraphs": [
        "The 'Jatre' (Village Fair) is the quintessential cultural heartbeat of rural Karnataka. Held annually in almost every village, these fairs are dedicated to the Grama Devata (the presiding village deity). A Jatre is much more than a religious event; it is a massive socio-cultural carnival that marks the end of the harvest season and brings the entire agricultural community together.",
        "The religious centerpiece of the Jatre is the 'Rathotsava' (chariot festival), where a massive, elaborately decorated wooden chariot is pulled through the dusty village streets by hundreds of devotees. Surrounding the temple, a sprawling, colorful market erupts overnight. Vendors sell everything from glass bangles, clay toys, and agricultural tools to mountains of vibrant local sweets like 'Jalebi' and 'Mandakki'.",
        "As the sun sets, the Jatre transforms into a rural entertainment hub. Makeshift giant wheels spin against the night sky, intense traditional wrestling matches (Kusti) draw roaring crowds, and all-night mythological dramas (Bayalata or Yakshagana) are performed under massive tents. It is a time for family reunions, vibrant celebrations, and the ultimate showcase of the rich, enduring spirit of rural India."
      ],
      "images": [
        "https://media.assettype.com/deccanherald%2F2024-11-30%2Fcnsi1ny1%2Ffile7ya360h86hw19k5epca7.jpg?w=undefined&auto=format%2Ccompress&fit=max",
        "https://pbs.twimg.com/media/D262zplU0AABZ7o.jpg",
        "https://chhsambhajinagar.in/events/images/karn4.jpeg"
      ]
    }

    // ADD MORE PLACES HERE... (e.g., "2": { ... }, "3": { ... })
  }

  // Find the data for the clicked ID
  const pageData = detailedData[id]

  // If you haven't added the data for this ID yet, show a fallback screen
  if (!pageData) {
    return (
      <div className="min-h-screen bg-[#080f08] text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-white/50 mb-4">Content coming soon for ID: {id}</h2>
        <button onClick={() => navigate(-1)} className="px-6 py-2 bg-green-600 rounded-full hover:bg-green-500 transition">
          ← Back to Explore
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#080f08] text-white pt-24 px-6 md:px-12 lg:px-24 pb-20">
      
      {/* Navigation */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-white/50 hover:text-green-400 transition flex items-center gap-2 uppercase tracking-widest text-sm"
      >
        ← Back to Map
      </button>

      {/* Header */}
      <div className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-400 mb-4 font-display leading-tight">
          {pageData.name}
        </h1>
        <p className="text-xl md:text-2xl text-white/60 italic font-display">
          {pageData.subtitle}
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Left Side: 500+ Words (Paragraphs) */}
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
                className={`overflow-hidden rounded-xl border border-white/10 ${index === 0 ? 'md:col-span-2' : ''}`}
              >
                <img 
                  src={imgUrl} 
                  alt={`${pageData.name} visual ${index + 1}`} 
                  className="w-full h-full object-cover aspect-video hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}