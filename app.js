/**
 * JAPAN WINTER 2026 TRIP - DARK JAPANESE SPA ENGINE
 * Features: Mt. Fuji Rising Sun Preloader, Day 1-9 Split Pagination,
 * Real-time JST/MYT Clocks, Budget Calculator, and 100% Halal Guide.
 */

// ==========================================
// 1. DATA SOURCE (Based strictly on JpItenary-2.md)
// ==========================================

const ITINERARY_DATA = [
  {
    day: 1,
    date: "Sat, 16 Jan 2026",
    city: "Osaka",
    cityTag: "Osaka • Arrival",
    weather: "8°C • Crisp Winter",
    theme: "Arrive KIX 09:45 ✈️ • Dotonbori & Namba",
    image: "./images/osaka-dotonbori.jpg",
    hotel: {
      name: "Hotel WBF Namba Motomachi",
      nights: "Nights 16–17 Jan (2 Nights)",
      notes: "Luggage drop upon arrival; near Namba transport hubs",
      mapQuery: "Hotel WBF Namba Motomachi Osaka"
    },
    activities: [
      {
        time: "09:45",
        title: "Land at Kansai International Airport (KIX)",
        costJpy: 0,
        costMyr: 0,
        category: "transit",
        halal: null,
        note: "Flight touchdown in Japan. Prepare passports & Visit Japan Web QR codes.",
        transit: null,
        mapQuery: "Kansai International Airport"
      },
      {
        time: "09:45–11:15",
        title: "Immigration + luggage + IC card setup/top-up (buffered)",
        costJpy: 0,
        costMyr: 0,
        category: "logistics",
        halal: null,
        note: "Collect check-in bags, clear customs, pick up / top up IC Card (ICOCA/Suica) or activate digital cards.",
        transit: null,
        mapQuery: "Kansai International Airport Terminal 1"
      },
      {
        time: "11:15–12:15",
        title: "Airport transfer (train) KIX → Namba",
        costJpy: 1000,
        costMyr: 30,
        category: "transit",
        halal: null,
        note: "Nankai Airport Express or Rapid train direct to Namba Station.",
        transit: "Time: ~60 min | Cost: ~1,000 JPY (30 MYR) pp",
        mapQuery: "Namba Station Osaka"
      },
      {
        time: "12:15–13:00",
        title: "Walk to hotel / luggage drop / early check-in if possible",
        costJpy: 0,
        costMyr: 0,
        category: "logistics",
        halal: null,
        note: "Drop bags at Hotel WBF Namba Motomachi reception before lunch.",
        transit: "~10-15 min walk",
        mapQuery: "Hotel WBF Namba Motomachi"
      },
      {
        time: "13:00–14:00",
        title: "Lunch @ Halal Ramen Naniwaya",
        costJpy: 1200,
        costMyr: 36,
        category: "food",
        halal: "certified",
        halalNote: "Halal: halal-certified / halal-focused",
        note: "Authentic Halal Japanese Ramen in central Osaka with rich chicken/beef broth.",
        transit: "Walk from hotel",
        mapQuery: "Halal Ramen Naniwaya Osaka"
      },
      {
        time: "14:00–16:00",
        title: "Rest + prayer + freshen up",
        costJpy: 0,
        costMyr: 0,
        category: "prayer",
        halal: null,
        note: "Return to hotel rooms to freshen up, perform Zuhr/Asr prayers, and recover from flight.",
        transit: null,
        mapQuery: "Hotel WBF Namba Motomachi"
      },
      {
        time: "16:00–17:30",
        title: "Easy stroll / photos at Dotonbori",
        costJpy: 0,
        costMyr: 0,
        category: "sightseeing",
        halal: null,
        note: "Iconic Glico Running Man sign, canal walkway, and winter evening neon lights.",
        transit: "Short walk",
        mapQuery: "Dotonbori Glico Sign"
      },
      {
        time: "17:30–19:00",
        title: "Explore Namba (shopping, Donki-style browsing)",
        costJpy: 0,
        costMyr: 0,
        category: "shopping",
        halal: null,
        note: "Namba shopping arcades, Don Quijote, and duty-free retail.",
        transit: "Walking",
        mapQuery: "Don Quijote Dotonbori"
      },
      {
        time: "19:00–20:00",
        title: "Dinner @ Matsuri Halal Restaurant",
        costJpy: 1800,
        costMyr: 54,
        category: "food",
        halal: "certified",
        halalNote: "Halal: halal-certified",
        note: "Famous Halal Japanese comfort dishes (Takoyaki, Okonomiyaki & set meals).",
        transit: "Walk / short transit",
        mapQuery: "Matsuri Halal Restaurant Osaka"
      },
      {
        time: "20:00–21:00",
        title: "Back to hotel, early night",
        costJpy: 0,
        costMyr: 0,
        category: "logistics",
        halal: null,
        note: "Rest well to prepare for full Osaka exploration on Day 2.",
        transit: "Walk back to Hotel WBF Namba Motomachi",
        mapQuery: "Hotel WBF Namba Motomachi"
      }
    ]
  },
  {
    day: 2,
    date: "Sun, 17 Jan 2026",
    city: "Osaka",
    cityTag: "Osaka Highlights",
    weather: "7°C • Clear & Crisp",
    theme: "🏯 Osaka day (Castle → Market → Namba → Shinsekai)",
    image: "./images/osaka-castle.jpg",
    hotel: {
      name: "Hotel WBF Namba Motomachi",
      nights: "Night 2 of 2",
      notes: "Central Namba base; pack luggage for Kyoto checkout tomorrow",
      mapQuery: "Hotel WBF Namba Motomachi Osaka"
    },
    activities: [
      {
        time: "08:30–09:15",
        title: "Breakfast",
        costJpy: 600,
        costMyr: 18,
        category: "food",
        halal: "caution",
        halalNote: "Simple breakfast (halal-conscious choice)",
        note: "Quick breakfast at cafe or convenience store onigiri (tuna mayo / salmon - check ingredients).",
        transit: null,
        mapQuery: "Namba Osaka"
      },
      {
        time: "09:15–09:45",
        title: "Subway Namba → Osakajokoen / Tanimachi 4-chome",
        costJpy: 240,
        costMyr: 7,
        category: "transit",
        halal: null,
        note: "Osaka Metro direct line.",
        transit: "~20–25 min | ~240 JPY (7 MYR) pp",
        mapQuery: "Tanimachi 4-chome Station"
      },
      {
        time: "09:45–12:00",
        title: "Osaka Castle Park (walk grounds, castle tower view)",
        costJpy: 600,
        costMyr: 18,
        category: "sightseeing",
        halal: null,
        note: "Historic stone fortifications, massive moats, and castle exterior. Tower admission optional (~600 JPY pp).",
        transit: "Park stroll",
        mapQuery: "Osaka Castle"
      },
      {
        time: "12:00–12:30",
        title: "Subway to Kuromon Market area",
        costJpy: 240,
        costMyr: 7,
        category: "transit",
        halal: null,
        note: "Osaka Metro to Nippombashi Station.",
        transit: "~20 min | ~240 JPY (7 MYR) pp",
        mapQuery: "Nippombashi Station Osaka"
      },
      {
        time: "12:30–14:00",
        title: "Kuromon Market (stroll & snacks) + Halal Lunch",
        costJpy: 1800,
        costMyr: 54,
        category: "food",
        halal: "certified",
        halalNote: "Ali's Kitchen / Halal dining option",
        note: "Explore fresh seafood market (caution: check sauces) or enjoy certified Halal lunch at Ali's Kitchen / Naniwaya.",
        transit: "Walking",
        mapQuery: "Kuromon Ichiba Market"
      },
      {
        time: "14:00–15:30",
        title: "Prayer + rest break",
        costJpy: 0,
        costMyr: 0,
        category: "prayer",
        halal: null,
        note: "Perform Zuhr/Asr prayer at Osaka Islamic Center / prayer room or hotel.",
        transit: null,
        mapQuery: "Osaka Islamic Center"
      },
      {
        time: "15:30–17:30",
        title: "Shinsaibashi-suji & Amerikamura shopping walk",
        costJpy: 0,
        costMyr: 0,
        category: "shopping",
        halal: null,
        note: "Covered shopping street, streetwear in Amerikamura, and Japanese retail stores.",
        transit: "Walking",
        mapQuery: "Shinsaibashi-suji Shopping Street"
      },
      {
        time: "17:30–18:00",
        title: "Walk / subway to Shinsekai",
        costJpy: 190,
        costMyr: 6,
        category: "transit",
        halal: null,
        note: "Subway to Dobutsuen-mae or short walk.",
        transit: "~15 min | ~190 JPY (6 MYR) pp",
        mapQuery: "Shinsekai Osaka"
      },
      {
        time: "18:00–19:30",
        title: "Shinsekai & Tsutenkaku Tower (retro neon vibe)",
        costJpy: 0,
        costMyr: 0,
        category: "sightseeing",
        halal: null,
        note: "Nostalgic Showa-era streetscape with vibrant giant lanterns and Tsutenkaku Tower glow.",
        transit: "Walking",
        mapQuery: "Tsutenkaku Tower"
      },
      {
        time: "19:30–20:45",
        title: "Dinner (Halal dining near Namba / Shinsaibashi)",
        costJpy: 2000,
        costMyr: 60,
        category: "food",
        halal: "certified",
        halalNote: "Halal: halal-certified option",
        note: "Sit-down halal Japanese / Pakistani curry dinner in Namba.",
        transit: "Walk / Subway",
        mapQuery: "Ali's Kitchen Osaka"
      },
      {
        time: "20:45–21:30",
        title: "Back to hotel; pack for Kyoto checkout tomorrow",
        costJpy: 0,
        costMyr: 0,
        category: "logistics",
        halal: null,
        note: "Pack bags for Day 3 intercity transfer to Kyoto.",
        transit: "Walk",
        mapQuery: "Hotel WBF Namba Motomachi"
      }
    ]
  },
  {
    day: 3,
    date: "Mon, 18 Jan 2026",
    city: "Osaka → Kyoto",
    cityTag: "Intercity Transfer",
    weather: "6°C • Chilly & Serene",
    theme: "🚆 Osaka → Kyoto (Transfer & Shijo Exploration)",
    image: "./images/kyoto-pagoda.jpg",
    hotel: {
      name: "Hotel MyStays Kyoto - Shijo",
      nights: "Nights 18–19 Jan (2 Nights)",
      notes: "Drop luggage at reception ~10:45; prime central Shijo Karasuma location",
      mapQuery: "Hotel MyStays Kyoto - Shijo"
    },
    activities: [
      {
        time: "08:30–09:15",
        title: "Breakfast & check-out Hotel WBF",
        costJpy: 600,
        costMyr: 18,
        category: "food",
        halal: "caution",
        halalNote: "Simple breakfast",
        note: "Check out with bags packed and ready for morning train.",
        transit: null,
        mapQuery: "Hotel WBF Namba Motomachi"
      },
      {
        time: "09:15–09:45",
        title: "Subway Namba → Osaka Station / Umeda",
        costJpy: 240,
        costMyr: 7,
        category: "transit",
        halal: null,
        note: "Osaka Metro Midosuji Line.",
        transit: "~15 min | ~240 JPY (7 MYR) pp",
        mapQuery: "Osaka Station"
      },
      {
        time: "09:45–10:30",
        title: "Train Osaka → Kyoto Station (JR Special Rapid)",
        costJpy: 580,
        costMyr: 17.5,
        category: "transit",
        halal: null,
        note: "JR Special Rapid Service is fastest standard train (no expensive Shinkansen needed for this short leg).",
        transit: "~30 min | ~580 JPY (17.5 MYR) pp",
        mapQuery: "Kyoto Station"
      },
      {
        time: "10:30–10:45",
        title: "Subway Kyoto Station → Shijo (Karasuma Line)",
        costJpy: 220,
        costMyr: 6.5,
        category: "transit",
        halal: null,
        note: "Kyoto Subway Karasuma Line.",
        transit: "~5 min | ~220 JPY (6.5 MYR) pp",
        mapQuery: "Shijo Station Kyoto"
      },
      {
        time: "10:45–11:15",
        title: "Walk to Hotel MyStays Kyoto - Shijo / Luggage drop",
        costJpy: 0,
        costMyr: 0,
        category: "logistics",
        halal: null,
        note: "Store luggage securely at hotel front desk before starting Kyoto exploration.",
        transit: "~6 min walk",
        mapQuery: "Hotel MyStays Kyoto - Shijo"
      },
      {
        time: "11:30–12:45",
        title: "Lunch @ Halal Ramen Ayam-YA Karasuma",
        costJpy: 1500,
        costMyr: 45,
        category: "food",
        halal: "certified",
        halalNote: "Halal: halal-certified / halal-focused",
        note: "Famous Halal Torisoba Ramen with rich chicken broth and halal crispy karaage.",
        transit: "Short walk from hotel",
        mapQuery: "Ayam-YA Karasuma Kyoto"
      },
      {
        time: "12:45–13:45",
        title: "Prayer + short rest (at hotel / nearby prayer space)",
        costJpy: 0,
        costMyr: 0,
        category: "prayer",
        halal: null,
        note: "Perform Zuhr & Asr prayers.",
        transit: null,
        mapQuery: "Hotel MyStays Kyoto - Shijo"
      },
      {
        time: "14:00–15:30",
        title: "Explore Shijo-dori & Kawaramachi",
        costJpy: 0,
        costMyr: 0,
        category: "shopping",
        halal: null,
        note: "Traditional craft stores, Kyoto Department Stores (Takashimaya), and souvenir boutiques.",
        transit: "Walking",
        mapQuery: "Shijo Dori Kyoto"
      },
      {
        time: "15:30–17:30",
        title: "Walk to Kamogawa (Kamo River) + Gion Shirakawa canal area",
        costJpy: 0,
        costMyr: 0,
        category: "sightseeing",
        halal: null,
        note: "Scenic river stroll, historic wooden machiya teahouses, and stone bridges at dusk.",
        transit: "Walking",
        mapQuery: "Gion Shirakawa Kyoto"
      },
      {
        time: "17:30–19:00",
        title: "Yasaka Shrine (evening lanterns lit up)",
        costJpy: 0,
        costMyr: 0,
        category: "sightseeing",
        halal: null,
        note: "Atmospheric traditional courtyard with hundreds of glowing hanging lanterns.",
        transit: "Walking",
        mapQuery: "Yasaka Shrine Kyoto"
      },
      {
        time: "19:00–20:30",
        title: "Dinner (Halal Wagyu Yakiniku Panga / Halal restaurant)",
        costJpy: 3500,
        costMyr: 105,
        category: "food",
        halal: "certified",
        halalNote: "Halal: halal-certified (Halal Wagyu option)",
        note: "Special dinner treat: grilled Halal Japanese Wagyu beef in Kyoto.",
        transit: "Walking / short transit",
        mapQuery: "Halal Wagyu Yakiniku Panga Kyoto"
      },
      {
        time: "20:30–21:00",
        title: "Back to hotel; rest for full historical Kyoto Day 4",
        costJpy: 0,
        costMyr: 0,
        category: "logistics",
        halal: null,
        note: "Check into rooms at Hotel MyStays Kyoto - Shijo and recharge.",
        transit: "Walk / Subway",
        mapQuery: "Hotel MyStays Kyoto - Shijo"
      }
    ]
  },
  {
    day: 4,
    date: "Tue, 19 Jan 2026",
    city: "Kyoto",
    cityTag: "Historic Kyoto",
    weather: "5°C • Morning Mist",
    theme: "⛩️ Kyoto highlights (Fushimi Inari → Kiyomizu → Gion → Nishiki)",
    image: "./images/kyoto-pagoda.jpg",
    hotel: {
      name: "Hotel MyStays Kyoto - Shijo",
      nights: "Night 2 of 2",
      notes: "Early start essential to beat tour crowds at Fushimi Inari",
      mapQuery: "Hotel MyStays Kyoto - Shijo"
    },
    activities: [
      {
        time: "07:30–08:15",
        title: "Early breakfast",
        costJpy: 600,
        costMyr: 18,
        category: "food",
        halal: "caution",
        halalNote: "Simple breakfast",
        note: "Quick energy boost before early morning shrine climb.",
        transit: null,
        mapQuery: "Shijo Kyoto"
      },
      {
        time: "08:15–08:45",
        title: "Train Shijo / Kyoto Station → Fushimi Inari (JR Nara Line)",
        costJpy: 200,
        costMyr: 6,
        category: "transit",
        halal: null,
        note: "Direct local train to Inari Station.",
        transit: "~20 min | ~200 JPY (6 MYR) pp",
        mapQuery: "Inari Station Kyoto"
      },
      {
        time: "08:45–11:00",
        title: "Fushimi Inari Taisha (thousands of vermilion Torii gates)",
        costJpy: 0,
        costMyr: 0,
        category: "sightseeing",
        halal: null,
        note: "Hike the iconic Senbon Torii tunnel pathways through forested sacred mountain slopes.",
        transit: "Mountain walk",
        mapQuery: "Fushimi Inari Taisha"
      },
      {
        time: "11:00–11:30",
        title: "Train / bus from Fushimi Inari → Kiyomizu-dera area",
        costJpy: 230,
        costMyr: 7,
        category: "transit",
        halal: null,
        note: "Keihan Main Line to Kiyomizu-Gojo or bus.",
        transit: "~25 min | ~230 JPY (7 MYR) pp",
        mapQuery: "Kiyomizu-Gojo Station"
      },
      {
        time: "11:30–13:30",
        title: "Kiyomizu-dera + Ninenzaka & Sannenzaka preserved lanes",
        costJpy: 400,
        costMyr: 12,
        category: "sightseeing",
        halal: null,
        note: "UNESCO wooden temple stage overlooking Kyoto. Stroll historic cobblestone preservation streets.",
        transit: "Walking",
        mapQuery: "Kiyomizu-dera Kyoto"
      },
      {
        time: "13:30–14:30",
        title: "Lunch @ Halal Restaurant / Ayam-YA / nearby Halal spot",
        costJpy: 1500,
        costMyr: 45,
        category: "food",
        halal: "certified",
        halalNote: "Halal: halal-certified / halal-focused",
        note: "Hearty warm ramen / rice set lunch.",
        transit: "Short walk / transit",
        mapQuery: "Ayam-YA Karasuma Kyoto"
      },
      {
        time: "14:30–15:30",
        title: "Prayer + rest break",
        costJpy: 0,
        costMyr: 0,
        category: "prayer",
        halal: null,
        note: "Perform Zuhr & Asr prayers.",
        transit: null,
        mapQuery: "Hotel MyStays Kyoto - Shijo"
      },
      {
        time: "15:30–17:00",
        title: "Nishiki Market (Kitchen of Kyoto) - caution on sauces",
        costJpy: 0,
        costMyr: 0,
        category: "shopping",
        halal: "caution",
        halalNote: "Market food caution: inspect ingredients, mirin, and sauces",
        note: "Explore 400-year-old narrow food street. Fresh whole fruits and plain grilled seafood are safe.",
        transit: "Walking",
        mapQuery: "Nishiki Market Kyoto"
      },
      {
        time: "17:00–18:30",
        title: "Gion evening walk (Hanami-koji street, traditional lanterns)",
        costJpy: 0,
        costMyr: 0,
        category: "sightseeing",
        halal: null,
        note: "Atmospheric traditional geisha district with preserved wooden facades and paper lanterns.",
        transit: "Walking",
        mapQuery: "Hanami-koji Street Gion"
      },
      {
        time: "18:30–20:00",
        title: "Dinner (Halal dining around Gion / Shijo)",
        costJpy: 2000,
        costMyr: 60,
        category: "food",
        halal: "certified",
        halalNote: "Halal: halal-certified option",
        note: "Sit-down halal Japanese dinner.",
        transit: "Walk",
        mapQuery: "Gion Kyoto Halal Dining"
      },
      {
        time: "20:00–21:00",
        title: "Return to hotel; pack for early Shinkansen to Fuji tomorrow",
        costJpy: 0,
        costMyr: 0,
        category: "logistics",
        halal: null,
        note: "Crucial packing night for Day 5 cross-country transfer to Kawaguchiko.",
        transit: "Walk",
        mapQuery: "Hotel MyStays Kyoto - Shijo"
      }
    ]
  },
  {
    day: 5,
    date: "Wed, 20 Jan 2026",
    city: "Kyoto → Mt. Fuji",
    cityTag: "Mt. Fuji Arrival",
    weather: "-2°C • Snowy & Crisp",
    theme: "🗻 Kyoto → Kawaguchiko + Light Fuji (Oishi Park)",
    image: "./images/mt-fuji-kawaguchiko.jpg",
    hotel: {
      name: "HAOSTAY",
      nights: "Nights 20–21 Jan (2 Nights)",
      notes: "Check-in at HAOSTAY Lake Kawaguchiko; prepare winter snow layers",
      mapQuery: "HAOSTAY Lake Kawaguchiko"
    },
    activities: [
      {
        time: "07:30–08:15",
        title: "Breakfast & check-out Hotel MyStays",
        costJpy: 600,
        costMyr: 18,
        category: "food",
        halal: "caution",
        halalNote: "Simple breakfast",
        note: "Check out and head to Kyoto Station.",
        transit: null,
        mapQuery: "Hotel MyStays Kyoto - Shijo"
      },
      {
        time: "08:15–08:45",
        title: "Subway to Kyoto Station",
        costJpy: 220,
        costMyr: 6.5,
        category: "transit",
        halal: null,
        note: "Kyoto Subway Karasuma Line.",
        transit: "~10 min | ~220 JPY (6.5 MYR) pp",
        mapQuery: "Kyoto Station"
      },
      {
        time: "08:45–10:45",
        title: "Tokaido Shinkansen Kyoto → Mishima / Shin-Fuji",
        costJpy: 11000,
        costMyr: 330,
        category: "transit",
        halal: null,
        note: "High-speed bullet train across central Honshu. Enjoy views of the Japanese countryside.",
        transit: "~110 min | ~11,000 JPY (330 MYR) pp",
        mapQuery: "Mishima Station"
      },
      {
        time: "11:00–12:30",
        title: "Highway Bus Mishima → Kawaguchiko Station (Fujikyu Bus)",
        costJpy: 2500,
        costMyr: 75,
        category: "transit",
        halal: null,
        note: "Scenic highway bus winding up into the Five Lakes highlands.",
        transit: "~90 min | ~2,500 JPY (75 MYR) pp",
        mapQuery: "Kawaguchiko Station"
      },
      {
        time: "12:30–13:30",
        title: "Arrive Kawaguchiko Station + Lunch (Halal / vegetarian)",
        costJpy: 1500,
        costMyr: 45,
        category: "food",
        halal: "caution",
        halalNote: "Halal / Muslim-friendly option at Kawaguchiko",
        note: "Warm up with hot noodles or halal-certified dishes near the station.",
        transit: "Walk",
        mapQuery: "Kawaguchiko Station Restaurant"
      },
      {
        time: "13:30–14:15",
        title: "Check-in / drop luggage at HAOSTAY",
        costJpy: 0,
        costMyr: 0,
        category: "logistics",
        halal: null,
        note: "Check into HAOSTAY rooms; gear up with warm winter jackets, gloves & thermal heat packs.",
        transit: "Short taxi / bus to hotel",
        mapQuery: "HAOSTAY Kawaguchiko"
      },
      {
        time: "14:15–15:00",
        title: "Prayer + freshen up",
        costJpy: 0,
        costMyr: 0,
        category: "prayer",
        halal: null,
        note: "Perform Zuhr & Asr prayers in hotel room.",
        transit: null,
        mapQuery: "HAOSTAY Kawaguchiko"
      },
      {
        time: "15:00–17:00",
        title: "Oishi Park (north shore Mt. Fuji lake views at sunset)",
        costJpy: 0,
        costMyr: 0,
        category: "sightseeing",
        halal: null,
        note: "World-class postcard views across Lake Kawaguchiko with Mount Fuji reflected in the frozen waters.",
        transit: "Omni Sightseeing Bus",
        mapQuery: "Oishi Park Lake Kawaguchiko"
      },
      {
        time: "17:00–18:00",
        title: "Lakeside walk + souvenir browse (Kawaguchiko Natural Living Center)",
        costJpy: 0,
        costMyr: 0,
        category: "shopping",
        halal: null,
        note: "Browse local blueberry tea, Fujisan glassware, and winter crafts.",
        transit: "Walking",
        mapQuery: "Kawaguchiko Natural Living Center"
      },
      {
        time: "18:30–20:00",
        title: "Dinner near hotel / Kawaguchiko",
        costJpy: 2000,
        costMyr: 60,
        category: "food",
        halal: "certified",
        halalNote: "Halal / Muslim-friendly dining",
        note: "Hot winter dinner; halal-friendly dining.",
        transit: "Short transit",
        mapQuery: "Kawaguchiko Dining"
      },
      {
        time: "20:00–21:00",
        title: "Relax at HAOSTAY, early rest (sub-zero winter night)",
        costJpy: 0,
        costMyr: 0,
        category: "logistics",
        halal: null,
        note: "Rest well in heated rooms for full Mt. Fuji sunrise/exploration on Day 6.",
        transit: null,
        mapQuery: "HAOSTAY Kawaguchiko"
      }
    ]
  },
  {
    day: 6,
    date: "Thu, 21 Jan 2026",
    city: "Mt. Fuji / Kawaguchiko",
    cityTag: "Mt. Fuji Exploration",
    weather: "-3°C • Clear & Frozen",
    theme: "🗻 Kawaguchiko / Mt. Fuji winter-safe day (Chureito & Lake)",
    image: "./images/mt-fuji-kawaguchiko.jpg",
    hotel: {
      name: "HAOSTAY",
      nights: "Night 2 of 2",
      notes: "Strict winter clothing required (gloves, beanies, thermals, non-slip footwear)",
      mapQuery: "HAOSTAY Lake Kawaguchiko"
    },
    activities: [
      {
        time: "07:30–08:30",
        title: "Breakfast & sunrise view of Mt. Fuji",
        costJpy: 600,
        costMyr: 18,
        category: "food",
        halal: "caution",
        halalNote: "Simple breakfast",
        note: "Watch morning winter sunlight turn Mt. Fuji's snowcap into glowing pink & gold.",
        transit: null,
        mapQuery: "HAOSTAY Kawaguchiko"
      },
      {
        time: "08:30–09:15",
        title: "Train Kawaguchiko Station → Shimoyoshida (Fujikyu Railway)",
        costJpy: 310,
        costMyr: 9.5,
        category: "transit",
        halal: null,
        note: "Local alpine train line.",
        transit: "~15 min | ~310 JPY (9.5 MYR) pp",
        mapQuery: "Shimoyoshida Station"
      },
      {
        time: "09:15–11:30",
        title: "Arakurayama Sengen Park & Chureito Pagoda (iconic Fuji view)",
        costJpy: 0,
        costMyr: 0,
        category: "sightseeing",
        halal: null,
        note: "Climb the 398 stone steps for Japan's most famous panoramic vista: 5-story red pagoda with snow-covered Mt. Fuji.",
        transit: "Step climb / slow winter pace",
        mapQuery: "Chureito Pagoda"
      },
      {
        time: "11:30–12:30",
        title: "Explore Honcho Street in Shimoyoshida (retro street photo framing Mt. Fuji)",
        costJpy: 0,
        costMyr: 0,
        category: "sightseeing",
        halal: null,
        note: "Vintage Japanese shop signs framing the towering snow volcano centered down the avenue.",
        transit: "Walking",
        mapQuery: "Honcho Street Shimoyoshida"
      },
      {
        time: "12:30–13:15",
        title: "Train Shimoyoshida → Kawaguchiko Station",
        costJpy: 310,
        costMyr: 9.5,
        category: "transit",
        halal: null,
        note: "Return to Kawaguchiko hub.",
        transit: "~15 min | ~310 JPY (9.5 MYR) pp",
        mapQuery: "Kawaguchiko Station"
      },
      {
        time: "13:15–14:30",
        title: "Lunch @ Halal / Muslim-friendly restaurant",
        costJpy: 1500,
        costMyr: 45,
        category: "food",
        halal: "caution",
        halalNote: "Halal / Muslim-friendly option",
        note: "Warm Japanese Hoto noodle soup (check broth ingredients) or halal curry.",
        transit: "Walk",
        mapQuery: "Kawaguchiko Restaurant"
      },
      {
        time: "14:30–15:30",
        title: "Prayer + rest break at HAOSTAY",
        costJpy: 0,
        costMyr: 0,
        category: "prayer",
        halal: null,
        note: "Perform Zuhr & Asr prayers in warmth.",
        transit: null,
        mapQuery: "HAOSTAY Kawaguchiko"
      },
      {
        time: "15:30–17:00",
        title: "Lake Kawaguchiko south shore / Ropeway area stroll",
        costJpy: 0,
        costMyr: 0,
        category: "sightseeing",
        halal: null,
        note: "Lakeside promenade, mountain reflections, and souvenir shops.",
        transit: "Walking / local bus",
        mapQuery: "Lake Kawaguchiko South Shore"
      },
      {
        time: "17:00–18:30",
        title: "Winter sunset over Lake Kawaguchiko",
        costJpy: 0,
        costMyr: 0,
        category: "sightseeing",
        halal: null,
        note: "Stunning twilight over the lake waters as the evening temperature drops.",
        transit: "Walking",
        mapQuery: "Lake Kawaguchiko"
      },
      {
        time: "18:30–20:00",
        title: "Dinner in Kawaguchiko",
        costJpy: 2000,
        costMyr: 60,
        category: "food",
        halal: "caution",
        halalNote: "Halal / Muslim-friendly meal",
        note: "Cozy hotpot or grilled fish dinner.",
        transit: "Short transit",
        mapQuery: "Kawaguchiko Dining"
      },
      {
        time: "20:00–21:00",
        title: "Back to hotel; pack for morning Highway Bus to Tokyo",
        costJpy: 0,
        costMyr: 0,
        category: "logistics",
        halal: null,
        note: "Pack bags for Highway Express Bus to Tokyo on Day 7.",
        transit: null,
        mapQuery: "HAOSTAY Kawaguchiko"
      }
    ]
  },
  {
    day: 7,
    date: "Fri, 22 Jan 2026",
    city: "Mt. Fuji → Tokyo",
    cityTag: "Tokyo Arrival & Asakusa",
    weather: "8°C • Winter Sun",
    theme: "🚆 Kawaguchiko → Tokyo + Asakusa (Senso-ji & Halal Sakura)",
    image: "./images/tokyo-sensoji.jpg",
    hotel: {
      name: "Hotel Tavinos Asakusa",
      nights: "Nights 22–23 Jan (2 Nights)",
      notes: "Check-in at Hotel Tavinos Asakusa; short walk to Senso-ji Temple & Halal Sakura",
      mapQuery: "Hotel Tavinos Asakusa Tokyo"
    },
    activities: [
      {
        time: "07:30–08:15",
        title: "Breakfast & check-out HAOSTAY",
        costJpy: 600,
        costMyr: 18,
        category: "food",
        halal: "caution",
        halalNote: "Simple breakfast",
        note: "Final view of Mt. Fuji before boarding Tokyo bus.",
        transit: null,
        mapQuery: "HAOSTAY Kawaguchiko"
      },
      {
        time: "08:15–08:45",
        title: "Transfer to Kawaguchiko Station",
        costJpy: 0,
        costMyr: 0,
        category: "transit",
        halal: null,
        note: "Bus / short taxi to station bus terminal.",
        transit: null,
        mapQuery: "Kawaguchiko Station"
      },
      {
        time: "08:45–11:15",
        title: "Highway Express Bus Kawaguchiko → Tokyo (Shinjuku / Tokyo Station)",
        costJpy: 2200,
        costMyr: 66,
        category: "transit",
        halal: null,
        note: "Comfortable direct highway coach straight into metropolitan Tokyo.",
        transit: "~2–2.5 hrs | ~2,200 JPY (66 MYR) pp",
        mapQuery: "Shinjuku Expressway Bus Terminal"
      },
      {
        time: "11:15–12:00",
        title: "Subway Shinjuku / Tokyo Station → Asakusa",
        costJpy: 240,
        costMyr: 7,
        category: "transit",
        halal: null,
        note: "Tokyo Metro Ginza / Asakusa Line direct.",
        transit: "~30 min | ~240 JPY (7 MYR) pp",
        mapQuery: "Asakusa Station Tokyo"
      },
      {
        time: "12:00–12:30",
        title: "Walk to Hotel Tavinos Asakusa / Luggage drop",
        costJpy: 0,
        costMyr: 0,
        category: "logistics",
        halal: null,
        note: "Leave bags at front desk of Hotel Tavinos Asakusa.",
        transit: "~8 min walk",
        mapQuery: "Hotel Tavinos Asakusa"
      },
      {
        time: "12:30–13:45",
        title: "Lunch @ HALAL SAKURA (Asakusa)",
        costJpy: 2500,
        costMyr: 75,
        category: "food",
        halal: "certified",
        halalNote: "Halal: halal-certified",
        note: "Authentic Halal Japanese sukiyaki hotpot, nabe sets, and grilled fish.",
        transit: "Short walk",
        mapQuery: "HALAL SAKURA Asakusa Tokyo"
      },
      {
        time: "13:45–14:45",
        title: "Friday Prayer @ Asakusa Mosque (Darul Arqam) / Rest",
        costJpy: 0,
        costMyr: 0,
        category: "prayer",
        halal: null,
        note: "Perform Jumu'ah Friday prayer at Masjid Asakusa (Darul Arqam Mosque).",
        transit: "Short walk",
        mapQuery: "Asakusa Mosque Tokyo"
      },
      {
        time: "15:00–17:30",
        title: "Senso-ji Temple & Nakamise-dori shopping street",
        costJpy: 0,
        costMyr: 0,
        category: "sightseeing",
        halal: null,
        note: "Tokyo's oldest Buddhist temple, giant Kaminarimon red lantern, and heritage souvenir market.",
        transit: "Walking",
        mapQuery: "Senso-ji Asakusa"
      },
      {
        time: "17:30–19:00",
        title: "Sumida Park & Tokyo Skytree view across river",
        costJpy: 0,
        costMyr: 0,
        category: "sightseeing",
        halal: null,
        note: "Evening cityscape viewing illuminated Tokyo Skytree soaring across the Sumida River.",
        transit: "Walking",
        mapQuery: "Sumida Park Tokyo"
      },
      {
        time: "19:00–20:30",
        title: "Dinner @ Halal Ramen / Japanese dining in Asakusa",
        costJpy: 1600,
        costMyr: 48,
        category: "food",
        halal: "certified",
        halalNote: "Halal: halal-certified / halal-focused",
        note: "Rich beef ramen at Gyumon Asakusa or nearby halal dining.",
        transit: "Walk",
        mapQuery: "Gyumon Halal Ramen Asakusa"
      },
      {
        time: "20:30–21:30",
        title: "Check into Hotel Tavinos Asakusa; rest",
        costJpy: 0,
        costMyr: 0,
        category: "logistics",
        halal: null,
        note: "Check in and rest for full mega Tokyo Day 8.",
        transit: "Walk",
        mapQuery: "Hotel Tavinos Asakusa"
      }
    ]
  },
  {
    day: 8,
    date: "Sat, 23 Jan 2026",
    city: "Tokyo",
    cityTag: "Tokyo Mega Exploration",
    weather: "7°C • Electric City Night",
    theme: "🗼 Tokyo full day + gadget shopping (Meiji Jingu → Shibuya → Akihabara)",
    image: "./images/tokyo-akihabara.jpg",
    hotel: {
      name: "Hotel Tavinos Asakusa",
      nights: "Night 2 of 2",
      notes: "Day 8 Gadget Hub: Yodobashi Akiba, BicCamera AKIBA, Electric Town alleys & Laox",
      mapQuery: "Hotel Tavinos Asakusa Tokyo"
    },
    activities: [
      {
        time: "08:00–08:45",
        title: "Breakfast in Asakusa",
        costJpy: 600,
        costMyr: 18,
        category: "food",
        halal: "caution",
        halalNote: "Simple breakfast",
        note: "Start early for comprehensive Tokyo city loop.",
        transit: null,
        mapQuery: "Asakusa Tokyo"
      },
      {
        time: "08:45–09:30",
        title: "Subway Asakusa → Harajuku / Meiji-Jingumae",
        costJpy: 240,
        costMyr: 7,
        category: "transit",
        halal: null,
        note: "Tokyo Metro Ginza Line + Chiyoda Line.",
        transit: "~35 min | ~240 JPY (7 MYR) pp",
        mapQuery: "Meiji-Jingumae Station"
      },
      {
        time: "09:30–11:00",
        title: "Meiji Jingu Shrine & Yoyogi forest walk",
        costJpy: 0,
        costMyr: 0,
        category: "sightseeing",
        halal: null,
        note: "Tranquil forest shrine complex with towering cedar trees and massive wooden Torii.",
        transit: "Walking",
        mapQuery: "Meiji Jingu Shrine Tokyo"
      },
      {
        time: "11:00–12:30",
        title: "Walk Harajuku (Takeshita Street / Omotesando avenues)",
        costJpy: 0,
        costMyr: 0,
        category: "shopping",
        halal: null,
        note: "Trendy youth fashion and modern architectural avenues.",
        transit: "Walking",
        mapQuery: "Takeshita Street Harajuku"
      },
      {
        time: "12:30–14:00",
        title: "Shibuya Crossing, Hachiko Statue + Halal Lunch in Shibuya",
        costJpy: 1800,
        costMyr: 54,
        category: "food",
        halal: "certified",
        halalNote: "Halal: halal-certified (Halal Ramen / Curry in Shibuya)",
        note: "Experience the world's busiest pedestrian crossing & loyal dog Hachiko bronze monument.",
        transit: "Short walk / train",
        mapQuery: "Shibuya Crossing Tokyo"
      },
      {
        time: "14:00–15:30",
        title: "Prayer + rest break (Tokyo Camii Mosque / Prayer Room)",
        costJpy: 0,
        costMyr: 0,
        category: "prayer",
        halal: null,
        note: "Perform prayer / rest at Tokyo Camii / prayer room or cafe.",
        transit: null,
        mapQuery: "Tokyo Camii Mosque"
      },
      {
        time: "15:30–16:00",
        title: "Train to Akihabara",
        costJpy: 240,
        costMyr: 7,
        category: "transit",
        halal: null,
        note: "Direct train to Akihabara Station.",
        transit: "~30 min | ~240 JPY (7 MYR) pp",
        mapQuery: "Akihabara Station"
      },
      {
        time: "16:00–18:30",
        title: "Gadget shopping in Akihabara (PC parts + camera accessories + luggage options)",
        costJpy: 0,
        costMyr: 0,
        category: "shopping",
        halal: null,
        note: "Interactive 4-store comparison: Yodobashi Akiba, BicCamera AKIBA, Electric Town alleys, and Laox.",
        transit: "See specialized comparison section below",
        mapQuery: "Yodobashi Akiba"
      },
      {
        time: "18:30–19:30",
        title: "Dinner @ Gyumon Halal Ramen Asakusa",
        costJpy: 1600,
        costMyr: 48,
        category: "food",
        halal: "certified",
        halalNote: "Halal: halal-certified / halal-focused",
        note: "Warm halal ramen dinner.",
        transit: "Transit to Asakusa",
        mapQuery: "Gyumon Halal Ramen Asakusa"
      },
      {
        time: "19:30–20:15",
        title: "Return to Hotel Tavinos Asakusa",
        costJpy: 240,
        costMyr: 7,
        category: "transit",
        halal: null,
        note: "Final packing for departure flight tomorrow.",
        transit: "~240 JPY (7 MYR) pp",
        mapQuery: "Hotel Tavinos Asakusa"
      }
    ]
  },
  {
    day: 9,
    date: "Sun, 24 Jan 2026",
    city: "Tokyo / Narita",
    cityTag: "Departure Day",
    weather: "7°C • Clear Flight Weather",
    theme: "🧳 Departure (Asakusa Souvenirs → HALAL SAKURA → NRT 16:50 Flight)",
    image: "./images/tokyo-sensoji.jpg",
    hotel: {
      name: "Hotel Tavinos Asakusa",
      nights: "Check-out Day",
      notes: "Luggage storage until 12:30 departure to Narita Airport",
      mapQuery: "Hotel Tavinos Asakusa Tokyo"
    },
    activities: [
      {
        time: "08:00–09:00",
        title: "Breakfast",
        costJpy: 600,
        costMyr: 18,
        category: "food",
        halal: "caution",
        halalNote: "Simple breakfast",
        note: "Final breakfast in Tokyo.",
        transit: null,
        mapQuery: "Asakusa Cafe"
      },
      {
        time: "09:00–10:30",
        title: "Last-minute souvenir shopping around Asakusa (light)",
        costJpy: 0,
        costMyr: 0,
        category: "shopping",
        halal: null,
        note: "Pick up matcha treats, Senbei rice crackers, and cultural souvenirs around Nakamise.",
        transit: "Walking",
        mapQuery: "Nakamise Dori Asakusa"
      },
      {
        time: "10:30–11:15",
        title: "Return to hotel, pack, check-out / luggage storage",
        costJpy: 0,
        costMyr: 0,
        category: "logistics",
        halal: null,
        note: "Final luggage zip, room check-out, and temporary bag storage.",
        transit: null,
        mapQuery: "Hotel Tavinos Asakusa"
      },
      {
        time: "11:30–12:30",
        title: "Early lunch @ HALAL SAKURA",
        costJpy: 2500,
        costMyr: 75,
        category: "food",
        halal: "certified",
        halalNote: "Halal: halal-certified",
        note: "Satisfying farewell Halal Japanese meal before heading to Narita airport.",
        transit: "Short walk",
        mapQuery: "HALAL SAKURA Asakusa Tokyo"
      },
      {
        time: "12:30–13:30",
        title: "Tokyo → Narita International Airport (NRT)",
        costJpy: 2850,
        costMyr: 85.5,
        category: "transit",
        halal: null,
        note: "Keisei Skyliner from Ueno (41 min) or Narita Express / Airport Limousine Bus.",
        transit: "~60–90 min | ~2,500–3,200 JPY (75–96 MYR) pp",
        mapQuery: "Narita International Airport Terminal 1"
      },
      {
        time: "13:30–14:00",
        title: "Arrive Narita International Airport (NRT)",
        costJpy: 0,
        costMyr: 0,
        category: "logistics",
        halal: null,
        note: "Arrive with comfortable 3-hour buffer before departure. Check-in & duty-free.",
        transit: null,
        mapQuery: "Narita International Airport"
      },
      {
        time: "16:50",
        title: "Depart NRT → KUL (Booked Flight) ✈️",
        costJpy: 0,
        costMyr: 0,
        category: "transit",
        halal: null,
        note: "Safe flight back home to Kuala Lumpur! End of 9-day Japan Winter Expedition.",
        transit: "Booked Flight",
        mapQuery: "Narita International Airport Departure Gates"
      }
    ]
  }
];

// Halal Directory Data
const HALAL_RESTAURANTS = [
  {
    name: "Halal Ramen Naniwaya",
    city: "Osaka (Namba)",
    type: "Japanese Ramen",
    status: "Halal-Certified / Focused",
    days: "Day 1 & Day 2",
    avgCost: "~1,200 JPY (36 MYR)",
    desc: "Authentic hearty ramen with halal chicken and beef broths, halal gyoza, and dedicated cookware."
  },
  {
    name: "Matsuri Halal Restaurant",
    city: "Osaka (Noda / Namba)",
    type: "Japanese Comfort / Street Food",
    status: "Halal-Certified",
    days: "Day 1",
    avgCost: "~1,800 JPY (54 MYR)",
    desc: "Specializes in halal Osaka delicacies: Takoyaki, Okonomiyaki, and Japanese set meals with prayer room."
  },
  {
    name: "Ali's Kitchen Osaka",
    city: "Osaka (Shinsaibashi)",
    type: "Pakistani & Arabic Halal",
    status: "Halal-Certified",
    days: "Day 2",
    avgCost: "~1,800 JPY (54 MYR)",
    desc: "Kansai's first halal-certified restaurant; award-winning biryani, mutton curries, and fresh tandoor naan."
  },
  {
    name: "Halal Ramen Ayam Ya Karasuma",
    city: "Kyoto (Karasuma / Shijo)",
    type: "Halal Torisoba Ramen",
    status: "Halal-Certified / Focused",
    days: "Day 3 & Day 4",
    avgCost: "~1,500 JPY (45 MYR)",
    desc: "Renowned rich chicken broth ramen, spicy options, and crispy halal karaage chicken."
  },
  {
    name: "Halal Wagyu Yakiniku Panga",
    city: "Kyoto (Gion / Shijo)",
    type: "Premium Japanese Wagyu BBQ",
    status: "Halal-Certified",
    days: "Day 3 & Day 4",
    avgCost: "~3,500 JPY (105 MYR)",
    desc: "Mouthwatering A5 Halal Japanese Wagyu beef grilled tableside. Strict halal procurement."
  },
  {
    name: "HALAL SAKURA",
    city: "Tokyo (Asakusa / Iriya)",
    type: "Japanese Nabe & Bento",
    status: "Halal-Certified",
    days: "Day 7, 8 & 9",
    avgCost: "~2,500 JPY (75 MYR)",
    desc: "Cozy halal Japanese dining featuring beef shabu-shabu, sukiyaki pots, and grilled fish sets."
  },
  {
    name: "Gyumon Halal Ramen Asakusa",
    city: "Tokyo (Asakusa)",
    type: "Halal Beef Ramen",
    status: "Halal-Certified / Focused",
    days: "Day 7 & 8",
    avgCost: "~1,600 JPY (48 MYR)",
    desc: "Rich, deep beef broth ramen with tender halal chashu slices right in the heart of Asakusa."
  },
  {
    name: "Kuromon & Nishiki Markets",
    city: "Osaka & Kyoto",
    type: "Market Street Food",
    status: "Halal Caution ⚠️",
    days: "Day 2 & Day 4",
    avgCost: "Pay per snack",
    desc: "Fresh whole fruits and plain grilled seafood are safe. Exercise caution on fried items, non-halal sauces, and mirin."
  }
];

// Advance Booking Checklist items from source
const ADVANCE_BOOKINGS = [
  { id: "stay-osaka", label: "🏨 Osaka Stay: Hotel WBF Namba Motomachi (Nights 16–17)", category: "hotel", detail: "Nights 16–17 Jan (2 Nights). Quad room / 2 twin rooms near Namba transport." },
  { id: "stay-kyoto", label: "🏨 Kyoto Stay: Hotel MyStays Kyoto - Shijo (Nights 18–19)", category: "hotel", detail: "Nights 18–19 Jan (2 Nights). Prime Shijo Karasuma location near Halal Ayam Ya." },
  { id: "stay-fuji", label: "🏨 Kawaguchiko Stay: HAOSTAY (Nights 20–21)", category: "hotel", detail: "Nights 20–21 Jan (2 Nights). High-demand winter quad rooms with Fuji views." },
  { id: "stay-tokyo", label: "🏨 Tokyo Stay: Hotel Tavinos Asakusa (Nights 22–23)", category: "hotel", detail: "Nights 22–23 Jan (2 Nights). In Asakusa near Senso-ji & Halal Sakura." },
  { id: "train-kyoto-fuji", label: "🚆 Tokaido Shinkansen (Kyoto → Mishima) + Fujikyu Bus", category: "transit", detail: "Day 5 (20 Jan): Tokaido Shinkansen to Mishima (~11,000 JPY) + highway bus (~2,500 JPY)." },
  { id: "bus-fuji-tokyo", label: "🚌 Highway Express Bus (Kawaguchiko → Tokyo)", category: "transit", detail: "Day 7 (22 Jan): Morning express coach (~2,200 JPY pp) direct to Shinjuku / Tokyo." },
  { id: "flight-booked", label: "✈️ Departure Flight: NRT → KUL (24 Jan 16:50)", category: "flight", detail: "Booked flight departure from Narita International Airport Terminal 1." }
];

// Budget Data Multipliers
const BUDGET_DATA = {
  food: { minJpy: 31500, maxJpy: 45000, minMyr: 945, maxMyr: 1350 },
  intercity: { minJpy: 16300, maxJpy: 19600, minMyr: 489, maxMyr: 588 },
  local: { minJpy: 7200, maxJpy: 10800, minMyr: 216, maxMyr: 324 },
  attractions: { minJpy: 1000, maxJpy: 2500, minMyr: 30, maxMyr: 75 },
  misc: { minJpy: 5000, maxJpy: 10000, minMyr: 150, maxMyr: 300 },
  totalNonHotel: { minJpy: 61000, maxJpy: 88000, minMyr: 1830, maxMyr: 2640 },
  targetHotel: { minJpy: 170000, maxJpy: 215000, minMyr: 5100, maxMyr: 6450 }
};

// Application State
let activeDay = 1;
let currentViewMode = "single"; // "single" or "grid"
let activeCategoryFilter = "all";
let searchQuery = "";
let currentPax = 1; // 1 or 4
let currentCurrency = "MYR"; // "MYR" or "JPY"

// ==========================================
// 2. INITIALIZATION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Run Preloader Animation
  initPreloader();

  // 2. Render Day Tabs Ribbon & Views
  renderDayRibbon();
  renderSingleDay(activeDay);
  renderGridDays();
  renderHalalDirectory();
  renderChecklist();
  updateBudgetDashboard();

  // 3. Start Live Clocks & Event Listeners
  startLiveClocks();
  setupEventListeners();

  // 4. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// ==========================================
// 3. MOUNT FUJI RISING SUN PRELOADER LOGIC
// ==========================================

function initPreloader() {
  const preloader = document.getElementById("fuji-preloader");
  const bar = document.getElementById("preloader-bar");
  const percentText = document.getElementById("preloader-percent");
  const statusText = document.getElementById("preloader-status-text");
  const skipBtn = document.getElementById("skip-preloader-btn");

  if (!preloader) return;

  const statuses = [
    { at: 20, text: "Rising sun over Mount Fuji..." },
    { at: 45, text: "Loading Osaka, Kyoto & Tokyo routes..." },
    { at: 70, text: "Verifying 100% Halal dining stops..." },
    { at: 90, text: "Calculating Winter 2026 budgets..." },
    { at: 100, text: "Welcome • 日本へようこそ！" }
  ];

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 8) + 4;
    if (progress > 100) progress = 100;

    if (bar) bar.style.width = `${progress}%`;
    if (percentText) percentText.textContent = `${progress}%`;

    const currentStatus = statuses.find(s => progress <= s.at);
    if (currentStatus && statusText) {
      statusText.textContent = currentStatus.text;
    }

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        dismissPreloader();
      }, 400);
    }
  }, 40);

  function dismissPreloader() {
    preloader.classList.add("loaded");
  }

  if (skipBtn) {
    skipBtn.addEventListener("click", () => {
      clearInterval(interval);
      dismissPreloader();
    });
  }
}

// ==========================================
// 4. DAY 1-9 PAGINATION & RIBBON SWITCHER
// ==========================================

function renderDayRibbon() {
  const ribbon = document.getElementById("day-tabs-ribbon");
  if (!ribbon) return;

  ribbon.innerHTML = ITINERARY_DATA.map(dayData => {
    const isActive = dayData.day === activeDay;
    return `
      <button 
        onclick="focusDay(${dayData.day})" 
        class="day-tab-btn flex-shrink-0 px-4 py-2 rounded-xl text-xs font-semibold border ${isActive ? 'active' : 'bg-[#0B101B] border-white/10 text-slate-300'}"
        data-day="${dayData.day}"
      >
        <div class="flex items-center gap-1.5">
          <span class="font-mono font-bold ${isActive ? 'text-vermilion' : 'text-slate-200'}">D${dayData.day}</span>
          <span class="text-[11px] text-slate-400 font-normal">| ${dayData.city}</span>
        </div>
      </button>
    `;
  }).join("");
}

function focusDay(dayNumber) {
  activeDay = dayNumber;

  // Ensure we are in single day view
  if (currentViewMode !== "single") {
    toggleViewMode("single");
  }

  // Update Ribbon active states
  renderDayRibbon();

  // Render the selected day
  renderSingleDay(dayNumber);

  // Smooth scroll to itinerary container
  const container = document.getElementById("section-itinerary");
  if (container) {
    const yOffset = -90;
    const y = container.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
window.focusDay = focusDay;

function nextDay() {
  if (activeDay < 9) {
    focusDay(activeDay + 1);
  } else {
    focusDay(1);
  }
}
window.nextDay = nextDay;

function prevDay() {
  if (activeDay > 1) {
    focusDay(activeDay - 1);
  } else {
    focusDay(9);
  }
}
window.prevDay = prevDay;

function toggleViewMode(mode) {
  currentViewMode = mode;
  const singleContainer = document.getElementById("single-day-container");
  const gridContainer = document.getElementById("grid-days-container");
  const singleBtn = document.getElementById("viewmode-single-btn");
  const gridBtn = document.getElementById("viewmode-grid-btn");

  if (mode === "single") {
    if (singleContainer) singleContainer.classList.remove("hidden");
    if (gridContainer) gridContainer.classList.add("hidden");
    if (singleBtn) {
      singleBtn.className = "px-3 py-1.5 rounded-lg text-xs font-semibold bg-vermilion text-white shadow-glow-red transition-all flex items-center gap-1.5";
    }
    if (gridBtn) {
      gridBtn.className = "px-3 py-1.5 rounded-lg text-xs font-medium bg-[#0F1624] text-slate-300 hover:text-white border border-white/10 transition-all flex items-center gap-1.5";
    }
    renderSingleDay(activeDay);
  } else {
    if (singleContainer) singleContainer.classList.add("hidden");
    if (gridContainer) gridContainer.classList.remove("hidden");
    if (gridBtn) {
      gridBtn.className = "px-3 py-1.5 rounded-lg text-xs font-semibold bg-vermilion text-white shadow-glow-red transition-all flex items-center gap-1.5";
    }
    if (singleBtn) {
      singleBtn.className = "px-3 py-1.5 rounded-lg text-xs font-medium bg-[#0F1624] text-slate-300 hover:text-white border border-white/10 transition-all flex items-center gap-1.5";
    }
    renderGridDays();
  }
}
window.toggleViewMode = toggleViewMode;

// ==========================================
// 5. SINGLE DAY VIEW RENDERER
// ==========================================

function renderSingleDay(dayNumber) {
  const container = document.getElementById("single-day-container");
  if (!container) return;

  const dayData = ITINERARY_DATA.find(d => d.day === dayNumber) || ITINERARY_DATA[0];

  // Filter activities
  const query = searchQuery.toLowerCase().trim();
  const filteredActivities = dayData.activities.filter(act => {
    let categoryMatch = true;
    if (activeCategoryFilter === "food") {
      categoryMatch = act.category === "food" || act.halal !== null;
    } else if (activeCategoryFilter !== "all") {
      categoryMatch = act.category === activeCategoryFilter;
    }

    let searchMatch = true;
    if (query.length > 0) {
      const full = `${act.title} ${act.note || ''} ${act.transit || ''}`.toLowerCase();
      searchMatch = full.includes(query);
    }
    return categoryMatch && searchMatch;
  });

  // Calculate day totals
  const totalCostJpy = dayData.activities.reduce((acc, curr) => acc + curr.costJpy, 0);
  const totalCostMyr = dayData.activities.reduce((acc, curr) => acc + curr.costMyr, 0);
  const halalMealsCount = dayData.activities.filter(a => a.halal === "certified").length;

  container.innerHTML = `
    <!-- Active Day Master Header Card -->
    <div class="jp-card rounded-3xl overflow-hidden mb-8 border border-white/10 shadow-card-oled">
      <div class="grid grid-cols-1 lg:grid-cols-12">
        
        <!-- Left Day Summary Details -->
        <div class="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <!-- Day & City Pill -->
            <div class="flex flex-wrap items-center gap-2 mb-3">
              <span class="px-3 py-1 rounded-xl bg-vermilion text-white text-xs font-bold font-mono tracking-wider shadow-glow-red">
                DAY ${dayData.day} OF 9
              </span>
              <span class="px-3 py-1 rounded-xl bg-[#0B101B] text-gold text-xs font-mono font-semibold border border-gold/30">
                ${dayData.date}
              </span>
              <span class="px-3 py-1 rounded-xl bg-[#0B101B] text-slate-200 text-xs font-semibold border border-white/10">
                📍 ${dayData.cityTag}
              </span>
              <span class="px-3 py-1 rounded-xl bg-[#0B101B] text-sky-400 text-xs font-mono border border-sky-800/40 flex items-center gap-1">
                ❄️ ${dayData.weather}
              </span>
            </div>

            <h3 class="font-mincho text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              ${dayData.theme}
            </h3>

            <!-- Day Quick Metrics -->
            <div class="grid grid-cols-3 gap-3 py-3 border-y border-white/10 my-4 text-center">
              <div class="p-2 rounded-xl bg-[#05070B] border border-white/5">
                <div class="text-[10px] font-mono text-slate-400 uppercase">Estimated Spend</div>
                <div class="text-sm sm:text-base font-bold text-gold font-mono">RM ${totalCostMyr}</div>
                <div class="text-[10px] text-slate-400 font-mono">~¥${totalCostJpy.toLocaleString()}</div>
              </div>
              <div class="p-2 rounded-xl bg-[#05070B] border border-white/5">
                <div class="text-[10px] font-mono text-slate-400 uppercase">Halal Meals</div>
                <div class="text-sm sm:text-base font-bold text-emerald-400 font-mono">${halalMealsCount} Verified</div>
                <div class="text-[10px] text-emerald-400/80 font-mono">100% Halal</div>
              </div>
              <div class="p-2 rounded-xl bg-[#05070B] border border-white/5">
                <div class="text-[10px] font-mono text-slate-400 uppercase">Total Stops</div>
                <div class="text-sm sm:text-base font-bold text-white font-mono">${dayData.activities.length} Activities</div>
                <div class="text-[10px] text-slate-400 font-mono">Timed Plan</div>
              </div>
            </div>
          </div>

          <!-- Hotel Card & Actions -->
          <div class="mt-2 p-4 rounded-2xl bg-[#05070B] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-xl bg-vermilion/20 text-vermilion border border-vermilion/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                <i data-lucide="hotel" class="w-4 h-4"></i>
              </div>
              <div>
                <div class="text-[10px] font-mono font-bold text-slate-400 uppercase">Accommodation Base</div>
                <div class="text-sm font-bold text-white">${dayData.hotel.name}</div>
                <div class="text-xs text-slate-400">${dayData.hotel.notes} • <span class="font-medium text-gold font-mono">${dayData.hotel.nights}</span></div>
              </div>
            </div>

            <div class="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto justify-end">
              <button onclick="copyDayItinerary(${dayData.day})" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0F1624] hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-white/10 transition-colors" title="Copy Day Schedule to Clipboard">
                <i data-lucide="copy" class="w-3.5 h-3.5 text-slate-400"></i>
                <span>Copy</span>
              </button>
              <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dayData.hotel.mapQuery)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-vermilion hover:bg-red-600 text-white text-xs font-semibold shadow-glow-red transition-colors">
                <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
                <span>Map</span>
              </a>
            </div>
          </div>

        </div>

        <!-- Right Visual Showcase Image -->
        <div class="lg:col-span-4 relative min-h-[220px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-white/10">
          <img src="${dayData.image}" alt="${dayData.theme}" class="w-full h-full object-cover max-h-72 lg:max-h-none">
          <div class="absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/30 to-transparent flex items-end justify-between p-4 text-white">
            <span class="text-xs font-mono font-semibold flex items-center gap-1.5 bg-[#05070B]/90 backdrop-blur px-3 py-1 rounded-lg border border-white/10">
              <i data-lucide="camera" class="w-3.5 h-3.5 text-gold"></i> ${dayData.city}
            </span>

            <!-- Pagination Arrows inside Hero -->
            <div class="flex items-center gap-1.5 bg-[#05070B]/90 backdrop-blur p-1 rounded-xl border border-white/10">
              <button onclick="prevDay()" class="p-1.5 hover:text-gold transition-colors text-slate-300" title="Previous Day">
                <i data-lucide="chevron-left" class="w-4 h-4"></i>
              </button>
              <span class="text-xs font-mono font-bold px-1.5 text-white">${dayData.day}/9</span>
              <button onclick="nextDay()" class="p-1.5 hover:text-gold transition-colors text-slate-300" title="Next Day">
                <i data-lucide="chevron-right" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Activity Timeline for Selected Day -->
    <div class="space-y-3 pl-1 sm:pl-2">
      ${
        filteredActivities.length > 0
          ? filteredActivities.map((activity, idx) => renderActivityCard(activity, idx)).join("")
          : `<div class="p-10 text-center jp-card rounded-2xl border border-white/10 text-slate-400 text-sm">
               No activities matching "${searchQuery}" on Day ${dayData.day}.
             </div>`
      }
    </div>

    <!-- Bottom Day Navigator Buttons -->
    <div class="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
      <button onclick="prevDay()" class="px-4 py-2 rounded-xl bg-[#0B101B] hover:bg-[#0F1624] text-slate-200 text-xs font-semibold border border-white/10 flex items-center gap-2 transition-all">
        <i data-lucide="arrow-left" class="w-3.5 h-3.5 text-gold"></i>
        <span>Previous (Day ${dayData.day === 1 ? 9 : dayData.day - 1})</span>
      </button>

      <span class="text-xs font-mono text-slate-500 hidden sm:inline">Use ← Left / Right → Arrow Keys to switch days</span>

      <button onclick="nextDay()" class="px-4 py-2 rounded-xl bg-vermilion hover:bg-red-600 text-white text-xs font-semibold shadow-glow-red flex items-center gap-2 transition-all">
        <span>Next (Day ${dayData.day === 9 ? 1 : dayData.day + 1})</span>
        <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
      </button>
    </div>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ==========================================
// 6. 9-DAY SUMMARY GRID OVERVIEW RENDERER
// ==========================================

function renderGridDays() {
  const container = document.getElementById("grid-days-container");
  if (!container) return;

  container.innerHTML = ITINERARY_DATA.map(dayData => {
    const totalMyr = dayData.activities.reduce((acc, curr) => acc + curr.costMyr, 0);
    const halalCount = dayData.activities.filter(a => a.halal === "certified").length;

    return `
      <div class="jp-card rounded-2xl overflow-hidden border border-white/10 shadow-card-oled flex flex-col justify-between group">
        <div>
          <!-- Thumbnail Image -->
          <div class="relative h-44 w-full overflow-hidden">
            <img src="${dayData.image}" alt="${dayData.city}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
            <div class="absolute inset-0 bg-gradient-to-t from-[#0B101B] via-transparent to-transparent flex items-end justify-between p-3">
              <span class="px-2.5 py-0.5 rounded-md bg-vermilion text-white text-[10px] font-mono font-bold shadow-sm">
                DAY ${dayData.day}
              </span>
              <span class="px-2 py-0.5 rounded-md bg-[#05070B]/80 text-gold text-[10px] font-mono font-bold border border-white/10">
                ${dayData.date}
              </span>
            </div>
          </div>

          <!-- Card Content -->
          <div class="p-5 space-y-3">
            <div class="flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <span>📍 ${dayData.city}</span>
              <span>•</span>
              <span class="text-sky-400">${dayData.weather}</span>
            </div>

            <h4 class="font-mincho text-base font-bold text-white line-clamp-2">
              ${dayData.theme}
            </h4>

            <div class="text-xs text-slate-400 flex items-center gap-1.5">
              <i data-lucide="hotel" class="w-3.5 h-3.5 text-gold flex-shrink-0"></i>
              <span class="truncate">${dayData.hotel.name}</span>
            </div>

            <div class="flex items-center justify-between text-xs font-mono pt-2 border-t border-white/5">
              <span class="text-slate-400">${dayData.activities.length} stops (${halalCount} Halal)</span>
              <span class="font-bold text-gold">RM ${totalMyr} pp</span>
            </div>
          </div>
        </div>

        <!-- Button to open this day -->
        <div class="p-4 pt-0">
          <button onclick="focusDay(${dayData.day})" class="w-full py-2 rounded-xl bg-[#0F1624] hover:bg-vermilion text-slate-200 hover:text-white text-xs font-semibold border border-white/10 hover:border-vermilion transition-all flex items-center justify-center gap-1.5">
            <span>View Full Day Plan</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>

      </div>
    `;
  }).join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ==========================================
// 7. ACTIVITY ROW COMPONENT
// ==========================================

function renderActivityCard(activity, idx) {
  let catBadge = "";
  let borderAccent = "border-white/10 hover:border-white/20";

  switch (activity.category) {
    case "food":
      catBadge = `<span class="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-800/80 flex items-center gap-1">
                    <i data-lucide="utensils" class="w-3 h-3"></i> Food
                  </span>`;
      borderAccent = "border-emerald-900/40 hover:border-emerald-700/60";
      break;
    case "transit":
      catBadge = `<span class="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-sky-950/80 text-sky-300 border border-sky-800/80 flex items-center gap-1">
                    <i data-lucide="train" class="w-3 h-3"></i> Transit
                  </span>`;
      borderAccent = "border-sky-900/40 hover:border-sky-700/60";
      break;
    case "sightseeing":
      catBadge = `<span class="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-purple-950/80 text-purple-300 border border-purple-800/80 flex items-center gap-1">
                    <i data-lucide="landmark" class="w-3 h-3"></i> Sightseeing
                  </span>`;
      borderAccent = "border-purple-900/40 hover:border-purple-700/60";
      break;
    case "shopping":
      catBadge = `<span class="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-amber-950/80 text-amber-300 border border-amber-800/80 flex items-center gap-1">
                    <i data-lucide="shopping-bag" class="w-3 h-3"></i> Shopping
                  </span>`;
      borderAccent = "border-amber-900/40 hover:border-amber-700/60";
      break;
    case "prayer":
      catBadge = `<span class="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-teal-950/80 text-teal-300 border border-teal-800/80 flex items-center gap-1">
                    <i data-lucide="moon" class="w-3 h-3"></i> Prayer / Rest
                  </span>`;
      borderAccent = "border-teal-900/40 hover:border-teal-700/60";
      break;
    default:
      catBadge = `<span class="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-[#0F1624] text-slate-300 border border-white/10 flex items-center gap-1">
                    <i data-lucide="activity" class="w-3 h-3"></i> Logistics
                  </span>`;
  }

  // Halal Badges
  let halalBadge = "";
  if (activity.halal === "certified") {
    halalBadge = `
      <span class="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-emerald-600 text-white flex items-center gap-1 shadow-sm" title="${activity.halalNote || 'Halal Certified'}">
        <i data-lucide="shield-check" class="w-3 h-3"></i> Halal Verified
      </span>
    `;
  } else if (activity.halal === "caution") {
    halalBadge = `
      <span class="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-amber-600 text-white flex items-center gap-1" title="${activity.halalNote || 'Check Ingredients'}">
        <i data-lucide="alert-circle" class="w-3 h-3"></i> Halal Caution
      </span>
    `;
  }

  // Cost Display
  const costDisplay = (activity.costJpy > 0 || activity.costMyr > 0)
    ? `<div class="text-right flex-shrink-0 font-mono">
         <div class="text-sm font-bold text-white">~¥${activity.costJpy.toLocaleString()}</div>
         <div class="text-[11px] font-semibold text-gold font-mono">RM ${activity.costMyr} pp</div>
       </div>`
    : `<div class="text-right flex-shrink-0 text-xs font-semibold text-slate-400 font-mono">Free / Included</div>`;

  return `
    <div class="jp-card rounded-2xl p-4 sm:p-5 border ${borderAccent} shadow-card-oled relative transition-all">
      <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
        
        <!-- Left Details -->
        <div class="space-y-2 flex-grow">
          
          <div class="flex flex-wrap items-center gap-2">
            <!-- Time Badge -->
            <span class="px-2.5 py-1 rounded-lg bg-[#05070B] border border-white/10 text-white text-xs font-bold font-mono tracking-tight">
              ${activity.time}
            </span>
            ${catBadge}
            ${halalBadge}
          </div>

          <div class="flex items-center gap-2">
            <h4 class="text-base font-bold text-white tracking-tight">
              ${activity.title}
            </h4>
            ${
              activity.mapQuery
                ? `<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.mapQuery)}" target="_blank" rel="noopener noreferrer" class="text-slate-500 hover:text-vermilion transition-colors p-1" title="Open in Google Maps">
                     <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                   </a>`
                : ''
            }
          </div>

          ${activity.note ? `<p class="text-xs text-slate-300 leading-relaxed font-sans">${activity.note}</p>` : ""}

          ${
            activity.transit
              ? `<div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#05070B] text-slate-300 text-[11px] font-mono border border-white/10">
                   <i data-lucide="navigation" class="w-3 h-3 text-gold"></i>
                   <span>${activity.transit}</span>
                 </div>`
              : ""
          }

        </div>

        <!-- Right Cost Tag -->
        <div class="border-t sm:border-t-0 pt-2 sm:pt-0 sm:pl-4 sm:border-l border-white/10 flex sm:flex-col justify-between sm:justify-start items-center sm:items-end">
          <span class="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-wider sm:mb-1">EST. COST</span>
          ${costDisplay}
        </div>

      </div>
    </div>
  `;
}

// ==========================================
// 8. MASTER VIEW SWITCHER
// ==========================================

function switchMainView(viewName) {
  const views = ['itinerary', 'budget', 'halal', 'akiba', 'checklist'];
  views.forEach(v => {
    const btn = document.getElementById(`nav-btn-${v}`);
    if (btn) {
      if (v === viewName) {
        btn.className = "view-nav-pill active px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border border-white/10";
      } else {
        btn.className = "view-nav-pill px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-[#090D15] hover:bg-slate-800 flex items-center gap-1.5 border border-white/10";
      }
    }
  });

  const targetSection = document.getElementById(`section-${viewName}`);
  if (targetSection) {
    const yOffset = -80;
    const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
window.switchMainView = switchMainView;

// ==========================================
// 9. HERO IMAGE SWITCHER
// ==========================================

function switchHeroImg(src, title, desc, daysTag) {
  const imgEl = document.getElementById("hero-feature-img");
  const titleEl = document.getElementById("hero-featured-title");
  const descEl = document.getElementById("hero-featured-desc");
  const dayEl = document.getElementById("hero-featured-day");

  if (imgEl) {
    imgEl.style.opacity = "0.4";
    setTimeout(() => {
      imgEl.src = src;
      imgEl.style.opacity = "1";
    }, 150);
  }
  if (titleEl && title) titleEl.textContent = title;
  if (descEl && desc) descEl.textContent = desc;
  if (dayEl && daysTag) dayEl.textContent = daysTag;
}
window.switchHeroImg = switchHeroImg;

// ==========================================
// 10. BUDGET DASHBOARD LOGIC
// ==========================================

function setBudgetPax(pax) {
  currentPax = pax;
  const p1 = document.getElementById("pax-1-btn");
  const p4 = document.getElementById("pax-4-btn");
  if (p1 && p4) {
    if (pax === 1) {
      p1.className = "px-3.5 py-1.5 rounded-lg text-xs font-bold bg-vermilion text-white shadow-sm transition-all";
      p4.className = "px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white transition-all";
    } else {
      p4.className = "px-3.5 py-1.5 rounded-lg text-xs font-bold bg-vermilion text-white shadow-sm transition-all";
      p1.className = "px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white transition-all";
    }
  }
  updateBudgetDashboard();
}
window.setBudgetPax = setBudgetPax;

function setBudgetCurrency(curr) {
  currentCurrency = curr;
  const cMyr = document.getElementById("curr-myr-btn");
  const cJpy = document.getElementById("curr-jpy-btn");
  if (cMyr && cJpy) {
    if (curr === "MYR") {
      cMyr.className = "px-3.5 py-1.5 rounded-lg text-xs font-bold bg-gold text-black-900 font-bold shadow-sm transition-all";
      cJpy.className = "px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white transition-all";
    } else {
      cJpy.className = "px-3.5 py-1.5 rounded-lg text-xs font-bold bg-gold text-black-900 font-bold shadow-sm transition-all";
      cMyr.className = "px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white transition-all";
    }
  }
  updateBudgetDashboard();
}
window.setBudgetCurrency = setBudgetCurrency;

function updateBudgetDashboard() {
  const mult = currentPax;

  function formatVal(cat) {
    const minM = cat.minMyr * mult;
    const maxM = cat.maxMyr * mult;
    const minJ = cat.minJpy * mult;
    const maxJ = cat.maxJpy * mult;

    if (currentCurrency === "MYR") {
      return {
        primary: `RM ${minM.toLocaleString()} – ${maxM.toLocaleString()}`,
        secondary: `~${minJ.toLocaleString()} – ${maxJ.toLocaleString()} JPY`
      };
    } else {
      return {
        primary: `¥${minJ.toLocaleString()} – ${maxJ.toLocaleString()}`,
        secondary: `≈ RM ${minM.toLocaleString()} – ${maxM.toLocaleString()}`
      };
    }
  }

  const categories = [
    { key: "food", costEl: "cat-food-cost", jpyEl: "cat-food-jpy" },
    { key: "intercity", costEl: "cat-intercity-cost", jpyEl: "cat-intercity-jpy" },
    { key: "local", costEl: "cat-local-cost", jpyEl: "cat-local-jpy" },
    { key: "attractions", costEl: "cat-tickets-cost", jpyEl: "cat-tickets-jpy" },
    { key: "misc", costEl: "cat-misc-cost", jpyEl: "cat-misc-jpy" }
  ];

  categories.forEach(item => {
    const formatted = formatVal(BUDGET_DATA[item.key]);
    const costNode = document.getElementById(item.costEl);
    const jpyNode = document.getElementById(item.jpyEl);
    if (costNode) costNode.textContent = formatted.primary;
    if (jpyNode) jpyNode.textContent = formatted.secondary;
  });

  const grandFormatted = formatVal(BUDGET_DATA.totalNonHotel);
  const grandTotalEl = document.getElementById("grand-total-display");
  const grandTotalJpyEl = document.getElementById("grand-total-jpy");
  const totalPaxLabel = document.getElementById("total-pax-label");

  if (grandTotalEl) grandTotalEl.textContent = grandFormatted.primary;
  if (grandTotalJpyEl) grandTotalJpyEl.textContent = grandFormatted.secondary;
  if (totalPaxLabel) totalPaxLabel.textContent = `${currentPax} Pax Total`;
}

// ==========================================
// 11. ADVANCE BOOKING CHECKLIST LOGIC
// ==========================================

function getSavedChecklist() {
  try {
    const saved = localStorage.getItem("japan_winter_checklist_2026");
    return saved ? JSON.parse(saved) : {};
  } catch (e) {
    return {};
  }
}

function saveChecklistState(id, isChecked) {
  const current = getSavedChecklist();
  current[id] = isChecked;
  try {
    localStorage.setItem("japan_winter_checklist_2026", JSON.stringify(current));
  } catch (e) {}
  updateChecklistProgress();
  renderChecklist();
}
window.saveChecklistState = saveChecklistState;

function renderChecklist() {
  const container = document.getElementById("checklist-items-container");
  if (!container) return;

  const saved = getSavedChecklist();

  container.innerHTML = ADVANCE_BOOKINGS.map(item => {
    const isChecked = !!saved[item.id];
    return `
      <div class="jp-card p-5 rounded-2xl ${isChecked ? 'border-emerald-500/60 bg-emerald-950/20' : 'border-white/10'} shadow-card-oled transition-all flex items-start gap-4">
        <input 
          type="checkbox" 
          id="${item.id}" 
          ${isChecked ? 'checked' : ''}
          onchange="saveChecklistState('${item.id}', this.checked)"
          class="mt-1 w-5 h-5 rounded-lg text-vermilion bg-[#05070B] border-white/20 focus:ring-vermilion cursor-pointer flex-shrink-0 accent-[#E83929]"
        >
        <label for="${item.id}" class="cursor-pointer flex-grow space-y-1">
          <div class="text-sm font-bold ${isChecked ? 'line-through text-slate-500' : 'text-white'}">
            ${item.label}
          </div>
          <div class="text-xs text-slate-400 leading-relaxed font-sans">
            ${item.detail}
          </div>
        </label>
      </div>
    `;
  }).join("");

  updateChecklistProgress();
}

function updateChecklistProgress() {
  const saved = getSavedChecklist();
  const total = ADVANCE_BOOKINGS.length;
  const completed = ADVANCE_BOOKINGS.filter(item => !!saved[item.id]).length;
  const pct = Math.round((completed / total) * 100);

  const textEl = document.getElementById("checklist-progress-text");
  const barEl = document.getElementById("checklist-progress-bar");

  if (textEl) textEl.textContent = `${completed} of ${total} Booked (${pct}%)`;
  if (barEl) barEl.style.width = `${pct}%`;
}

// ==========================================
// 12. HALAL DIRECTORY RENDERING
// ==========================================

function renderHalalDirectory() {
  const grid = document.getElementById("halal-spots-grid");
  if (!grid) return;

  grid.innerHTML = HALAL_RESTAURANTS.map(spot => `
    <div class="jp-card rounded-3xl p-6 border border-white/10 shadow-card-oled flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold ${spot.status.includes('Caution') ? 'bg-amber-950 text-amber-300 border border-amber-800' : 'bg-emerald-950 text-emerald-300 border border-emerald-800'}">
            ${spot.status}
          </span>
          <span class="text-xs font-mono font-semibold text-slate-400">${spot.days}</span>
        </div>

        <h4 class="font-mincho text-lg font-bold text-white mb-1">${spot.name}</h4>
        <div class="text-xs text-gold font-semibold mb-3 flex items-center gap-1 font-mono">
          <i data-lucide="map-pin" class="w-3.5 h-3.5 text-gold"></i> ${spot.city} • <span class="text-slate-400 font-normal">${spot.type}</span>
        </div>

        <p class="text-xs text-slate-300 leading-relaxed mb-4 font-sans">${spot.desc}</p>
      </div>

      <div class="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
        <span class="text-slate-400">Est. Spend:</span>
        <span class="font-bold text-emerald-400">${spot.avgCost}</span>
      </div>
    </div>
  `).join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ==========================================
// 13. LIVE CLOCKS & EVENT LISTENERS
// ==========================================

function startLiveClocks() {
  function update() {
    const now = new Date();
    
    // JST (UTC+9)
    const jstFormatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Tokyo",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    });
    
    // MYT (UTC+8)
    const mytFormatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kuala_Lumpur",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    });

    const jstEl = document.getElementById("live-time-jst");
    const mytEl = document.getElementById("live-time-myt");
    if (jstEl) jstEl.textContent = `JST: ${jstFormatter.format(now)}`;
    if (mytEl) mytEl.textContent = `MYT: ${mytFormatter.format(now)}`;
  }
  update();
  setInterval(update, 1000);
}

function copyDayItinerary(dayNum) {
  const dayData = ITINERARY_DATA.find(d => d.day === dayNum);
  if (!dayData) return;

  let text = `🇯🇵 Japan Winter 2026 — Day ${dayData.day}: ${dayData.date}\n`;
  text += `📍 Location: ${dayData.city} | ${dayData.theme}\n`;
  text += `🏨 Hotel: ${dayData.hotel.name} (${dayData.hotel.nights})\n\n`;
  text += `📅 Hour-by-hour Plan:\n`;

  dayData.activities.forEach(act => {
    const cost = act.costJpy > 0 ? ` [¥${act.costJpy.toLocaleString()} / RM ${act.costMyr}]` : '';
    const halalTag = act.halal === 'certified' ? ' [Halal Certified]' : (act.halal === 'caution' ? ' [Halal Caution]' : '');
    text += `• ${act.time} — ${act.title}${cost}${halalTag}\n`;
    if (act.note) text += `  ${act.note}\n`;
    if (act.transit) text += `  Route: ${act.transit}\n`;
  });

  navigator.clipboard.writeText(text).then(() => {
    showToast(`Day ${dayNum} itinerary copied to clipboard!`);
  }).catch(() => {
    showToast(`Permission denied for clipboard.`);
  });
}
window.copyDayItinerary = copyDayItinerary;

function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast-msg px-4 py-3 rounded-xl bg-vermilion text-white text-xs font-semibold shadow-glow-red border border-vermilion/50 flex items-center gap-2 mb-2 pointer-events-auto";
  toast.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4 text-white"></i><span>${message}</span>`;
  container.appendChild(toast);

  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

function setupEventListeners() {
  // Category Filter Buttons
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("active", "bg-vermilion", "text-white");
        b.classList.add("bg-[#0F1624]");
      });
      btn.classList.add("active", "bg-vermilion", "text-white");
      btn.classList.remove("bg-[#0F1624]");

      activeCategoryFilter = btn.dataset.category;
      renderSingleDay(activeDay);
    });
  });

  // Search input
  const searchInput = document.getElementById("itinerary-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderSingleDay(activeDay);
    });
  }

  // Gadget Shopping Filter
  const gadgetSelect = document.getElementById("gadget-filter");
  if (gadgetSelect) {
    gadgetSelect.addEventListener("change", (e) => {
      const tag = e.target.value;
      const cards = document.querySelectorAll(".gadget-card");
      cards.forEach(card => {
        const cardTags = card.dataset.tags || "";
        if (tag === "all" || cardTags.includes(tag)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  }

  // Keyboard navigation for Days (Left / Right arrow keys)
  window.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT") {
      return;
    }
    if (e.key === "ArrowRight") {
      nextDay();
    } else if (e.key === "ArrowLeft") {
      prevDay();
    }
  });
}
