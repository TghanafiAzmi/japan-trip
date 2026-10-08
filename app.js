/**
 * JAPAN WINTER 2026 TRIP - DARK THEME SPA ENGINE
 * Based strictly on JpItenary-2.md
 */

// ==========================================
// 1. DATA SOURCE (Strictly from JpItenary-2.md)
// ==========================================

const ITINERARY_DATA = [
  {
    day: 1,
    date: "Sat, 16 Jan 2026",
    city: "Osaka",
    cityTag: "Osaka • Arrival",
    weather: "8°C • Crisp Winter",
    theme: "Arrive KIX 09:45 ✈️ • Dotonbori & Namba",
    image: "./images/dotonbori.jpg",
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
    image: "./images/osaka_castle.jpg",
    hotel: {
      name: "Hotel WBF Namba Motomachi",
      nights: "Night 2 of 2",
      notes: "Central Osaka base; pack tonight for Kyoto transfer tomorrow",
      mapQuery: "Hotel WBF Namba Motomachi Osaka"
    },
    activities: [
      {
        time: "07:30–08:30",
        title: "Breakfast (simple/convenience store; ingredient-check)",
        costJpy: 600,
        costMyr: 18,
        category: "food",
        halal: "caution",
        halalNote: "Halal caution: verify onigiri/bread ingredients (no pork/mirin/gelatin)",
        note: "Quick breakfast at 7-Eleven / FamilyMart / Lawson with ingredient checking.",
        transit: null,
        mapQuery: "7-Eleven Namba Osaka"
      },
      {
        time: "08:30–09:00",
        title: "Metro to Osaka Castle",
        costJpy: 240,
        costMyr: 7,
        category: "transit",
        halal: null,
        note: "Take Osaka Metro Nagahori Tsurumi-ryokuchi Line or Tanimachi Line.",
        transit: "~30 min | ~240 JPY (7 MYR) pp",
        mapQuery: "Osakajokoen Station"
      },
      {
        time: "09:00–11:30",
        title: "Osaka Castle + park walk",
        costJpy: 600,
        costMyr: 18,
        category: "sightseeing",
        halal: null,
        note: "Historic castle keep, grand stone ramparts, and winter park grounds.",
        transit: "Ticket ~600 JPY (18 MYR) pp",
        mapQuery: "Osaka Castle Main Keep"
      },
      {
        time: "11:30–12:00",
        title: "Transit to Kuromon Ichiba Market",
        costJpy: 240,
        costMyr: 7,
        category: "transit",
        halal: null,
        note: "Metro back toward Nippombashi / Namba area.",
        transit: "~30 min | ~240 JPY (7 MYR) pp",
        mapQuery: "Kuromon Ichiba Market"
      },
      {
        time: "12:00–13:00",
        title: "Lunch @ Ali's Kitchen Osaka Halal Pakistani & Arabic Restaurant",
        costJpy: 1800,
        costMyr: 54,
        category: "food",
        halal: "certified",
        halalNote: "Halal: halal-certified (Pioneer Halal in Kansai)",
        note: "Hearty Biryani, Curries, and Fresh Naan bread.",
        transit: "Short walk",
        mapQuery: "Ali's Kitchen Osaka Halal"
      },
      {
        time: "13:00–14:15",
        title: "Browse Kuromon Ichiba Market (shop/snacks; halal caution)",
        costJpy: 0,
        costMyr: 0,
        category: "shopping",
        halal: "caution",
        halalNote: "Halal Caution: check seafood stalls for cooking wine / non-halal sauces",
        note: "Known as 'Osaka's Kitchen'. Enjoy fresh fruit (winter strawberries) & plain grilled seafood.",
        transit: "Walking",
        mapQuery: "Kuromon Ichiba Market"
      },
      {
        time: "14:15–15:00",
        title: "Back toward Namba",
        costJpy: 240,
        costMyr: 7,
        category: "transit",
        halal: null,
        note: "Transit or walk back to hotel area.",
        transit: "~240 JPY (7 MYR) pp",
        mapQuery: "Namba Osaka"
      },
      {
        time: "15:00–16:30",
        title: "Rest break at hotel",
        costJpy: 0,
        costMyr: 0,
        category: "prayer",
        halal: null,
        note: "Midday prayer & warm recharge at hotel.",
        transit: null,
        mapQuery: "Hotel WBF Namba Motomachi"
      },
      {
        time: "16:30–17:00",
        title: "Transit to Shinsekai",
        costJpy: 240,
        costMyr: 7,
        category: "transit",
        halal: null,
        note: "Metro to Dobutsuen-mae or Ebisucho Station.",
        transit: "~30 min | ~240 JPY (7 MYR) pp",
        mapQuery: "Shinsekai Osaka"
      },
      {
        time: "17:00–18:30",
        title: "Explore Shinsekai",
        costJpy: 0,
        costMyr: 0,
        category: "sightseeing",
        halal: null,
        note: "Retro Showa-era district, Tsutenkaku Tower viewpoints, and vintage arcade vibes.",
        transit: "Walking",
        mapQuery: "Tsutenkaku Tower"
      },
      {
        time: "18:30–19:30",
        title: "Dinner @ Halal Ramen Naniwaya",
        costJpy: 1200,
        costMyr: 36,
        category: "food",
        halal: "certified",
        halalNote: "Halal: halal-certified / halal-focused",
        note: "Warm up with rich halal ramen bowls in Osaka.",
        transit: "Walk / metro",
        mapQuery: "Halal Ramen Naniwaya Osaka"
      },
      {
        time: "19:30–20:15",
        title: "Return to hotel",
        costJpy: 240,
        costMyr: 7,
        category: "transit",
        halal: null,
        note: "Return to Hotel WBF Namba Motomachi & pack for Kyoto check-out.",
        transit: "~240 JPY (7 MYR) pp",
        mapQuery: "Hotel WBF Namba Motomachi"
      }
    ]
  },
  {
    day: 3,
    date: "Mon, 18 Jan 2026",
    city: "Kyoto",
    cityTag: "Intercity Transfer",
    weather: "6°C • Chilly & Serene",
    theme: "🚆 Osaka → Kyoto (Transfer & Shijo Exploration)",
    image: "./images/kyoto.jpg",
    hotel: {
      name: "Hotel MyStays Kyoto - Shijo",
      nights: "Nights 18–19 Jan (2 Nights)",
      notes: "Central Shijo-Karasuma area; ideal for walking to Halal Ramen Ayam Ya & Nishiki",
      mapQuery: "Hotel MyStays Kyoto - Shijo"
    },
    activities: [
      {
        time: "07:30–08:30",
        title: "Breakfast (simple)",
        costJpy: 600,
        costMyr: 18,
        category: "food",
        halal: "caution",
        halalNote: "Convenience store ingredient check",
        note: "Quick breakfast before packing.",
        transit: null,
        mapQuery: "Lawson Namba"
      },
      {
        time: "08:30–09:30",
        title: "Pack + check-out logistics",
        costJpy: 0,
        costMyr: 0,
        category: "logistics",
        halal: null,
        note: "Check out from Hotel WBF Namba Motomachi and walk with luggage to station.",
        transit: null,
        mapQuery: "Hotel WBF Namba Motomachi"
      },
      {
        time: "09:30–10:30",
        title: "Train Osaka → Kyoto",
        costJpy: 900,
        costMyr: 27,
        category: "transit",
        halal: null,
        note: "Hankyu Kyoto Line (from Osaka-Umeda to Karasuma) or JR Special Rapid.",
        transit: "~60 min | ~600–1,200 JPY (18–36 MYR) pp",
        mapQuery: "Karasuma Station Kyoto"
      },
      {
        time: "10:30–11:15",
        title: "Arrive + walk to hotel + luggage drop",
        costJpy: 0,
        costMyr: 0,
        category: "logistics",
        halal: null,
        note: "Arrive at Hotel MyStays Kyoto - Shijo to leave bags at concierge.",
        transit: "Short walk from Karasuma/Shijo Station",
        mapQuery: "Hotel MyStays Kyoto - Shijo"
      },
      {
        time: "11:30–12:30",
        title: "Lunch @ Halal Ramen Ayam Ya Karasuma Kyoto",
        costJpy: 1500,
        costMyr: 45,
        category: "food",
        halal: "certified",
        halalNote: "Halal: halal-certified / halal-focused (Rich Torisoba)",
        note: "Iconic Halal chicken-broth ramen with spicy options and karaage.",
        transit: "Walking distance in Karasuma",
        mapQuery: "Ayam Ya Halal Ramen Kyoto Karasuma"
      },
      {
        time: "12:30–14:30",
        title: "Check-in (or rest/prayer nearby) + recharge",
        costJpy: 0,
        costMyr: 0,
        category: "prayer",
        halal: null,
        note: "Official room check-in or prayer at nearby facility / room.",
        transit: null,
        mapQuery: "Hotel MyStays Kyoto - Shijo"
      },
      {
        time: "14:30–16:30",
        title: "Light central Kyoto stroll / shopping (keep flexible)",
        costJpy: 0,
        costMyr: 0,
        category: "sightseeing",
        halal: null,
        note: "Stroll along Shijo Dori, Kawaramachi, and Kamogawa riverside.",
        transit: "Walking",
        mapQuery: "Shijo Dori Kyoto"
      },
      {
        time: "17:00–18:30",
        title: "Dinner @ Halal Wagyu Yakiniku Panga",
        costJpy: 3500,
        costMyr: 105,
        category: "food",
        halal: "certified",
        halalNote: "Halal: halal-certified premium Japanese Wagyu",
        note: "High quality Halal Wagyu beef BBQ experience. (Can order lighter set).",
        transit: "Walk / bus",
        mapQuery: "Halal Wagyu Yakiniku Panga Kyoto"
      },
      {
        time: "18:30–19:30",
        title: "Back to hotel, early night",
        costJpy: 0,
        costMyr: 0,
        category: "logistics",
        halal: null,
        note: "Rest well for early morning temple tour tomorrow.",
        transit: "Walk to Hotel MyStays Kyoto - Shijo",
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
    image: "./images/kyoto.jpg",
    hotel: {
      name: "Hotel MyStays Kyoto - Shijo",
      nights: "Night 2 of 2",
      notes: "Prepare luggage for tomorrow's Shinkansen transfer to Mt. Fuji",
      mapQuery: "Hotel MyStays Kyoto - Shijo"
    },
    activities: [
      {
        time: "07:00–07:40",
        title: "Breakfast",
        costJpy: 600,
        costMyr: 18,
        category: "food",
        halal: "caution",
        halalNote: "Convenience store check",
        note: "Early morning breakfast to beat the temple crowds.",
        transit: null,
        mapQuery: "FamilyMart Shijo"
      },
      {
        time: "07:40–08:10",
        title: "Train to Fushimi Inari Taisha",
        costJpy: 240,
        costMyr: 7,
        category: "transit",
        halal: null,
        note: "Keihan Main Line or JR Nara Line to Fushimi-Inari.",
        transit: "~30 min | ~240 JPY (7 MYR) pp",
        mapQuery: "Fushimi Inari Station"
      },
      {
        time: "08:10–10:30",
        title: "Fushimi Inari Taisha (lower/mid route; winter pacing)",
        costJpy: 0,
        costMyr: 0,
        category: "sightseeing",
        halal: null,
        note: "Walk through thousands of vermilion Senbon Torii gates on Mount Inari.",
        transit: "Free entry",
        mapQuery: "Fushimi Inari Taisha"
      },
      {
        time: "10:30–11:15",
        title: "Transit to Kiyomizu-dera",
        costJpy: 400,
        costMyr: 12,
        category: "transit",
        halal: null,
        note: "Keihan train to Kiyomizu-Gojo + gentle uphill walk along historic lanes.",
        transit: "~45 min | ~400 JPY (12 MYR) pp",
        mapQuery: "Kiyomizu-dera"
      },
      {
        time: "11:15–13:00",
        title: "Kiyomizu-dera + nearby lanes (Ninenzaka & Sannenzaka)",
        costJpy: 400,
        costMyr: 12,
        category: "sightseeing",
        halal: null,
        note: "Iconic wooden stage overlooking Kyoto city and historic preserved alleyways.",
        transit: "Ticket ~400 JPY (12 MYR) pp",
        mapQuery: "Ninenzaka Kyoto"
      },
      {
        time: "13:00–14:00",
        title: "Lunch @ Halal Ramen Ayam Ya Karasuma Kyoto",
        costJpy: 1500,
        costMyr: 45,
        category: "food",
        halal: "certified",
        halalNote: "Halal: halal-certified / halal-focused",
        note: "Delicious warm ramen lunch in central Karasuma.",
        transit: "Transit to Karasuma",
        mapQuery: "Ayam Ya Halal Ramen Kyoto Karasuma"
      },
      {
        time: "14:00–15:00",
        title: "Rest / prayer break",
        costJpy: 0,
        costMyr: 0,
        category: "prayer",
        halal: null,
        note: "Midday rest and prayer at hotel.",
        transit: null,
        mapQuery: "Hotel MyStays Kyoto - Shijo"
      },
      {
        time: "15:00–16:30",
        title: "Walk Gion",
        costJpy: 0,
        costMyr: 0,
        category: "sightseeing",
        halal: null,
        note: "Traditional geisha district, Hanami-koji street, and preservation architecture.",
        transit: "Walking",
        mapQuery: "Hanami-koji Street Gion"
      },
      {
        time: "16:30–17:30",
        title: "Browse Nishiki Market (shopping; halal caution)",
        costJpy: 0,
        costMyr: 0,
        category: "shopping",
        halal: "caution",
        halalNote: "Halal Caution: avoid non-halal dashi, mirin, and pork snacks",
        note: "Kyoto's 400-year-old pantry with traditional souvenirs, pickles, and crafts.",
        transit: "Walking",
        mapQuery: "Nishiki Market"
      },
      {
        time: "18:00–19:15",
        title: "Dinner (keep halal-safe): Halal Wagyu Panga or Ayam Ya",
        costJpy: 2500,
        costMyr: 75,
        category: "food",
        halal: "certified",
        halalNote: "Halal: halal-certified",
        note: "Return to Halal Wagyu Yakiniku Panga or repeat Ayam Ya.",
        transit: "~1,500–3,500 JPY (45–105 MYR) pp",
        mapQuery: "Halal Wagyu Yakiniku Panga Kyoto"
      },
      {
        time: "19:15–20:00",
        title: "Return to hotel",
        costJpy: 240,
        costMyr: 7,
        category: "transit",
        halal: null,
        note: "Return to Hotel MyStays Kyoto - Shijo and pack for tomorrow's early Shinkansen.",
        transit: "~240 JPY (7 MYR) pp",
        mapQuery: "Hotel MyStays Kyoto - Shijo"
      }
    ]
  },
  {
    day: 5,
    date: "Wed, 20 Jan 2026",
    city: "Kawaguchiko",
    cityTag: "Mt. Fuji Arrival",
    weather: "-2°C • Snowy & Crisp",
    theme: "🗻 Kyoto → Kawaguchiko + Light Fuji (Oishi Park)",
    image: "./images/fuji.jpg",
    hotel: {
      name: "HAOSTAY",
      nights: "Nights 20–21 Jan (2 Nights)",
      notes: "Quad room booked for group; close to Lake Kawaguchi scenic spots",
      mapQuery: "HAOSTAY Lake Kawaguchiko"
    },
    activities: [
      {
        time: "07:00–07:45",
        title: "Breakfast",
        costJpy: 600,
        costMyr: 18,
        category: "food",
        halal: "caution",
        halalNote: "Simple breakfast / bakery check",
        note: "Early breakfast before morning Shinkansen departure.",
        transit: null,
        mapQuery: "Kyoto Station Cafe"
      },
      {
        time: "07:45–08:30",
        title: "Pack + check-out from Hotel MyStays Kyoto - Shijo",
        costJpy: 0,
        costMyr: 0,
        category: "logistics",
        halal: null,
        note: "Check out and head to Kyoto Station Shinkansen platform.",
        transit: "Subway to Kyoto Station",
        mapQuery: "Kyoto Station"
      },
      {
        time: "08:30–12:30",
        title: "Kyoto → Mishima/Shin-Fuji → Kawaguchiko (Shinkansen + bus)",
        costJpy: 12000,
        costMyr: 360,
        category: "transit",
        halal: null,
        note: "Tokaido Shinkansen from Kyoto to Mishima/Shin-Fuji, then express Fujikyu bus to Kawaguchiko Station.",
        transit: "~4 hrs | ~11,000–13,000 JPY (330–390 MYR) pp",
        mapQuery: "Kawaguchiko Station"
      },
      {
        time: "12:30–13:15",
        title: "Arrive + hotel luggage drop",
        costJpy: 0,
        costMyr: 0,
        category: "logistics",
        halal: null,
        note: "Arrive at HAOSTAY hotel; drop bags and put on heavy winter thermal layers.",
        transit: "Transfer from Kawaguchiko Station",
        mapQuery: "HAOSTAY Lake Kawaguchiko"
      },
      {
        time: "13:15–14:15",
        title: "Lunch (simple supermarket; ingredient-check)",
        costJpy: 900,
        costMyr: 27,
        category: "food",
        halal: "caution",
        halalNote: "Supermarket / local grocery check",
        note: "Warm lunch at local supermarket / bakery with ingredient check.",
        transit: null,
        mapQuery: "Ogino Supermarket Kawaguchiko"
      },
      {
        time: "14:15–15:30",
        title: "Rest / warm up (January cold)",
        costJpy: 0,
        costMyr: 0,
        category: "prayer",
        halal: null,
        note: "Warm up with hot tea, perform prayers, and prepare for sunset photography.",
        transit: null,
        mapQuery: "HAOSTAY Lake Kawaguchiko"
      },
      {
        time: "15:30–17:00",
        title: "Fuji-view stroll at Oishi Park",
        costJpy: 0,
        costMyr: 0,
        category: "sightseeing",
        halal: null,
        note: "Unobstructed panorama of Mount Fuji across the snowy northern shore of Lake Kawaguchi.",
        transit: "Retro Bus to Oishi Park",
        mapQuery: "Oishi Park Lake Kawaguchi"
      },
      {
        time: "17:00–18:00",
        title: "Back to hotel + early dinner (simple)",
        costJpy: 1000,
        costMyr: 30,
        category: "food",
        halal: "caution",
        halalNote: "Halal caution / simple halal-friendly dining",
        note: "Early dinner in Kawaguchiko town.",
        transit: "Bus / walk",
        mapQuery: "Kawaguchiko town"
      },
      {
        time: "18:00–20:00",
        title: "Pack / relax",
        costJpy: 0,
        costMyr: 0,
        category: "logistics",
        halal: null,
        note: "Relax in warm HAOSTAY rooms; enjoy winter night mountain calm.",
        transit: null,
        mapQuery: "HAOSTAY Lake Kawaguchiko"
      }
    ]
  },
  {
    day: 6,
    date: "Thu, 21 Jan 2026",
    city: "Kawaguchiko",
    cityTag: "Mt. Fuji Exploration",
    weather: "-3°C • Clear & Frozen",
    theme: "🗻 Kawaguchiko / Mt. Fuji winter-safe day (Chureito & Lake)",
    image: "./images/fuji.jpg",
    hotel: {
      name: "HAOSTAY",
      nights: "Night 2 of 2",
      notes: "Pack bags tonight for tomorrow morning's Tokyo Highway Express Bus",
      mapQuery: "HAOSTAY Lake Kawaguchiko"
    },
    activities: [
      {
        time: "07:30–08:15",
        title: "Breakfast",
        costJpy: 600,
        costMyr: 18,
        category: "food",
        halal: "caution",
        halalNote: "Simple breakfast",
        note: "Breakfast with hot drinks before heading out.",
        transit: null,
        mapQuery: "HAOSTAY Lake Kawaguchiko"
      },
      {
        time: "08:15–09:00",
        title: "Bus/taxi toward Arakurayama Sengen Park",
        costJpy: 600,
        costMyr: 18,
        category: "transit",
        halal: null,
        note: "Fujikyuko Line train or bus/taxi to Shimoyoshida Station.",
        transit: "~45 min | ~600 JPY (18 MYR) pp",
        mapQuery: "Shimoyoshida Station"
      },
      {
        time: "09:00–10:30",
        title: "Arakurayama Sengen Park (Chureito-style viewpoint; careful if icy)",
        costJpy: 0,
        costMyr: 0,
        category: "sightseeing",
        halal: null,
        note: "Iconic 5-story pagoda with Mount Fuji backdrop. 398 steps—take care on icy stairs!",
        transit: "Free entry",
        mapQuery: "Chureito Pagoda Arakurayama"
      },
      {
        time: "10:30–11:15",
        title: "Return toward lake area",
        costJpy: 600,
        costMyr: 18,
        category: "transit",
        halal: null,
        note: "Bus or local train back to central Kawaguchiko.",
        transit: "~600 JPY (18 MYR) pp",
        mapQuery: "Lake Kawaguchi"
      },
      {
        time: "11:30–12:30",
        title: "Warm lunch (simple)",
        costJpy: 1200,
        costMyr: 36,
        category: "food",
        halal: "caution",
        halalNote: "Simple halal-friendly / vegetarian options",
        note: "Warm udon / soba (without mirin/alcohol) or fish dish.",
        transit: null,
        mapQuery: "Kawaguchiko Eatery"
      },
      {
        time: "12:30–14:30",
        title: "Lakeside time at Lake Kawaguchi",
        costJpy: 0,
        costMyr: 0,
        category: "sightseeing",
        halal: null,
        note: "Scenic stroll along Lake Kawaguchi, souvenir shopping at herb hall, Mount Fuji reflections.",
        transit: "Walking",
        mapQuery: "Lake Kawaguchi Shore"
      },
      {
        time: "14:30–16:00",
        title: "Rest at hotel (hot drinks, prayer)",
        costJpy: 0,
        costMyr: 0,
        category: "prayer",
        halal: null,
        note: "Warm up indoors, perform Zuhr/Asr prayers at HAOSTAY.",
        transit: null,
        mapQuery: "HAOSTAY Lake Kawaguchiko"
      },
      {
        time: "16:00–17:30",
        title: "Early dinner (simple)",
        costJpy: 1000,
        costMyr: 30,
        category: "food",
        halal: "caution",
        halalNote: "Simple dinner",
        note: "Early dinner before winter sunset.",
        transit: null,
        mapQuery: "HAOSTAY Area"
      },
      {
        time: "17:30–20:00",
        title: "Pack for Tokyo transfer + early sleep",
        costJpy: 0,
        costMyr: 0,
        category: "logistics",
        halal: null,
        note: "Pack all luggage for tomorrow's transfer to Tokyo and get good rest.",
        transit: null,
        mapQuery: "HAOSTAY Lake Kawaguchiko"
      }
    ]
  },
  {
    day: 7,
    date: "Fri, 22 Jan 2026",
    city: "Tokyo",
    cityTag: "Tokyo Arrival & Asakusa",
    weather: "8°C • Winter Sun",
    theme: "🚆 Kawaguchiko → Tokyo + Asakusa (Senso-ji & Halal Sakura)",
    image: "./images/sensoji.jpg",
    hotel: {
      name: "Hotel Tavinos Asakusa",
      nights: "Nights 22–23 Jan (2 Nights)",
      notes: "Manga-themed stylish hotel in historic Asakusa, near Senso-ji Temple & Halal eateries",
      mapQuery: "Hotel Tavinos Asakusa Tokyo"
    },
    activities: [
      {
        time: "07:30–08:15",
        title: "Breakfast",
        costJpy: 600,
        costMyr: 18,
        category: "food",
        halal: "caution",
        halalNote: "Simple breakfast",
        note: "Breakfast at hotel / bakery.",
        transit: null,
        mapQuery: "Kawaguchiko Station Bakery"
      },
      {
        time: "08:15–09:00",
        title: "Check-out from HAOSTAY",
        costJpy: 0,
        costMyr: 0,
        category: "logistics",
        halal: null,
        note: "Check out and transfer to Kawaguchiko Station Bus Terminal.",
        transit: "To station",
        mapQuery: "Kawaguchiko Station"
      },
      {
        time: "09:00–11:30",
        title: "Kawaguchiko → Tokyo (bus/train)",
        costJpy: 2200,
        costMyr: 66,
        category: "transit",
        halal: null,
        note: "Highway Express Bus directly to Tokyo Station / Shinjuku / Asakusa.",
        transit: "~2.5 hrs | ~2,200 JPY (66 MYR) pp",
        mapQuery: "Tokyo Station"
      },
      {
        time: "11:30–12:15",
        title: "Hotel luggage drop",
        costJpy: 0,
        costMyr: 0,
        category: "logistics",
        halal: null,
        note: "Drop luggage at Hotel Tavinos Asakusa front desk.",
        transit: "Walk from Asakusa Station",
        mapQuery: "Hotel Tavinos Asakusa"
      },
      {
        time: "12:30–13:30",
        title: "Lunch @ HALAL SAKURA",
        costJpy: 2500,
        costMyr: 75,
        category: "food",
        halal: "certified",
        halalNote: "Halal: halal-certified (Japanese & Halal Shabu/Nabe)",
        note: "Renowned Halal restaurant in Asakusa serving Japanese beef sets, ramen, and shabu-shabu.",
        transit: "Short walk",
        mapQuery: "HALAL SAKURA Asakusa Tokyo"
      },
      {
        time: "13:30–15:30",
        title: "Check-in + rest",
        costJpy: 0,
        costMyr: 0,
        category: "prayer",
        halal: null,
        note: "Settle into Hotel Tavinos Asakusa rooms, perform prayers.",
        transit: null,
        mapQuery: "Hotel Tavinos Asakusa"
      },
      {
        time: "15:30–18:00",
        title: "Senso-ji Temple (Asakusa Temple) + Nakamise shopping",
        costJpy: 0,
        costMyr: 0,
        category: "sightseeing",
        halal: null,
        note: "Tokyo's oldest Buddhist temple, giant Kaminarimon lantern, and traditional souvenir stalls.",
        transit: "Free entry / walking",
        mapQuery: "Senso-ji Asakusa Tokyo"
      },
      {
        time: "18:00–19:15",
        title: "Dinner @ Gyumon Halal Ramen Asakusa",
        costJpy: 1600,
        costMyr: 48,
        category: "food",
        halal: "certified",
        halalNote: "Halal: halal-certified / halal-focused",
        note: "Savory Halal beef ramen with tender chashu in Asakusa.",
        transit: "Walking distance",
        mapQuery: "Gyumon Halal Ramen Asakusa"
      },
      {
        time: "19:15–20:00",
        title: "Back to hotel",
        costJpy: 240,
        costMyr: 7,
        category: "transit",
        halal: null,
        note: "Return to Hotel Tavinos Asakusa for rest.",
        transit: "~240 JPY (7 MYR) pp",
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
    image: "./images/akihabara.jpg",
    hotel: {
      name: "Hotel Tavinos Asakusa",
      nights: "Night 2 of 2",
      notes: "Final night in Tokyo; organize baggage & tax-free receipts",
      mapQuery: "Hotel Tavinos Asakusa Tokyo"
    },
    activities: [
      {
        time: "07:30–08:15",
        title: "Breakfast",
        costJpy: 600,
        costMyr: 18,
        category: "food",
        halal: "caution",
        halalNote: "Simple breakfast",
        note: "Breakfast before morning shrine exploration.",
        transit: null,
        mapQuery: "Asakusa Cafe"
      },
      {
        time: "08:15–09:00",
        title: "Train to Meiji Jingu",
        costJpy: 240,
        costMyr: 7,
        category: "transit",
        halal: null,
        note: "Ginza / Yamanote Line to Harajuku / Meiji-jingumae.",
        transit: "~45 min | ~240 JPY (7 MYR) pp",
        mapQuery: "Harajuku Station"
      },
      {
        time: "09:00–10:30",
        title: "Meiji Jingu",
        costJpy: 0,
        costMyr: 0,
        category: "sightseeing",
        halal: null,
        note: "Majestic forested Shinto shrine in central Tokyo, giant cedar torii gate.",
        transit: "Free entry",
        mapQuery: "Meiji Jingu Shrine"
      },
      {
        time: "10:30–12:00",
        title: "Shibuya Crossing + quick shopping / photo time",
        costJpy: 0,
        costMyr: 0,
        category: "sightseeing",
        halal: null,
        note: "World's busiest pedestrian scramble, Hachiko statue, Shibuya 109 area.",
        transit: "Short walk or 1 stop train",
        mapQuery: "Shibuya Scramble Crossing"
      },
      {
        time: "12:00–13:00",
        title: "Lunch @ HALAL SAKURA",
        costJpy: 2500,
        costMyr: 75,
        category: "food",
        halal: "certified",
        halalNote: "Halal: halal-certified",
        note: "Wholesome halal meal in Tokyo.",
        transit: "Transit",
        mapQuery: "HALAL SAKURA Tokyo"
      },
      {
        time: "13:00–15:00",
        title: "Shopping block (Shibuya area; keep budget-controlled)",
        costJpy: 0,
        costMyr: 0,
        category: "shopping",
        halal: null,
        note: "Browse Shibuya apparel, Loft, Muji, and electronics. Keep spend controlled.",
        transit: "Walking",
        mapQuery: "Shibuya Loft"
      },
      {
        time: "15:00–15:30",
        title: "Rest / prayer break (warm drinks)",
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
    image: "./images/sensoji.jpg",
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

// Checklist items from source
const ADVANCE_BOOKINGS = [
  { id: "stay-osaka", label: "🏨 Osaka Accommodation: Hotel WBF Namba Motomachi (Nights 16–17)", category: "hotel", detail: "Nights 16–17 Jan. Quad / family room or 2 twins. Near transport." },
  { id: "stay-kyoto", label: "🏨 Kyoto Accommodation: Hotel MyStays Kyoto - Shijo (Nights 18–19)", category: "hotel", detail: "Nights 18–19 Jan. Near Shijo Karasuma & Halal Ayam Ya." },
  { id: "stay-fuji", label: "🏨 Kawaguchiko Accommodation: HAOSTAY (Nights 20–21)", category: "hotel", detail: "Nights 20–21 Jan. Quad rooms sell out fast in winter!" },
  { id: "stay-tokyo", label: "🏨 Tokyo Accommodation: Hotel Tavinos Asakusa (Nights 22–23)", category: "hotel", detail: "Nights 22–23 Jan. Manga-style hotel in Asakusa near Senso-ji." },
  { id: "train-kyoto-fuji", label: "🚆 Kyoto → Kawaguchiko Shinkansen + Bus connection", category: "transit", detail: "Day 5 (20 Jan): Tokaido Shinkansen (Kyoto → Mishima/Shin-Fuji) + Fujikyu Bus." },
  { id: "bus-fuji-tokyo", label: "🚌 Kawaguchiko → Tokyo Highway Express Bus", category: "transit", detail: "Day 7 (22 Jan): Morning express bus to Tokyo (~2.5 hrs, ~2,200 JPY pp)." },
  { id: "flight-booked", label: "✈️ Flight Booking: NRT → KUL (24 Jan 16:50)", category: "flight", detail: "Booked flight departure from Narita International Airport." }
];

// Application State
let currentPax = 1; // 1 or 4
let currentCurrency = "MYR"; // "MYR" or "JPY"
let activeCategoryFilter = "all";
let searchQuery = "";
let allExpanded = true;

// ==========================================
// 2. INITIALIZATION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lenis Smooth Scroll
  initLenis();

  // Render Views
  renderTimeline();
  renderChecklist();
  renderHalalDirectory();
  updateBudgetDashboard();

  // Setup Live Clocks
  startLiveClocks();

  // Setup Event Listeners
  setupEventListeners();

  // Refresh Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// Lenis Smooth Scroll Setup
function initLenis() {
  if (typeof Lenis !== "undefined") {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Anchor links smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId && targetId !== "#") {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            lenis.scrollTo(targetEl, { offset: -140 });
          }
        }
      });
    });
  }
}

// Live Clocks for Japan (JST) and Malaysia (MYT)
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

// Switch Hero Image
function switchHeroImg(src, title, desc) {
  const imgEl = document.getElementById("hero-feature-img");
  if (imgEl) {
    imgEl.style.opacity = "0.5";
    setTimeout(() => {
      imgEl.src = src;
      imgEl.style.opacity = "1";
    }, 150);
  }
}
window.switchHeroImg = switchHeroImg;

// Show Toast Notification
function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast-msg px-4 py-3 rounded-xl bg-indigo-600 text-white text-xs font-semibold shadow-glow-indigo border border-indigo-400/50 flex items-center gap-2 mb-2 pointer-events-auto";
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

// Copy formatted Day Itinerary to clipboard
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
    showToast(`Could not copy, permission denied.`);
  });
}
window.copyDayItinerary = copyDayItinerary;

// ==========================================
// 3. TIMELINE RENDERING
// ==========================================

function renderTimeline() {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  const query = searchQuery.toLowerCase().trim();

  container.innerHTML = ITINERARY_DATA.map((dayData) => {
    // Filter activities by category and search query
    const filteredActivities = dayData.activities.filter(act => {
      // Category Match
      let categoryMatch = true;
      if (activeCategoryFilter === "halal") {
        categoryMatch = act.halal !== null;
      } else if (activeCategoryFilter !== "all") {
        categoryMatch = act.category === activeCategoryFilter;
      }

      // Search Query Match
      let searchMatch = true;
      if (query.length > 0) {
        const fullText = `${act.title} ${act.note || ''} ${act.transit || ''} ${dayData.city} ${dayData.theme}`.toLowerCase();
        searchMatch = fullText.includes(query);
      }

      return categoryMatch && searchMatch;
    });

    const hasActivities = filteredActivities.length > 0;

    // If searching and this day has 0 matches, hide day section
    if (query.length > 0 && !hasActivities) {
      return "";
    }

    return `
      <div class="day-section scroll-mt-36 transition-all duration-300" id="day-${dayData.day}" data-day="${dayData.day}">
        
        <!-- Day Header Card -->
        <div class="bg-[#141E33] rounded-3xl border border-slate-800 shadow-card-dark overflow-hidden mb-6">
          <div class="grid grid-cols-1 lg:grid-cols-12">
            
            <!-- Left Info Block -->
            <div class="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div class="flex flex-wrap items-center gap-2.5 mb-3">
                  <span class="px-3 py-1 rounded-xl bg-indigo-600 text-white text-xs font-bold font-mono tracking-wider shadow-glow-indigo">
                    DAY ${dayData.day}
                  </span>
                  <span class="px-3 py-1 rounded-xl bg-indigo-950/80 text-indigo-300 text-xs font-semibold border border-indigo-800/80">
                    ${dayData.date}
                  </span>
                  <span class="px-3 py-1 rounded-xl bg-slate-900 text-slate-300 text-xs font-medium border border-slate-800">
                    ${dayData.cityTag}
                  </span>
                  <span class="px-3 py-1 rounded-xl bg-sky-950/80 text-sky-300 text-xs font-medium border border-sky-800/60 flex items-center gap-1">
                    <i data-lucide="thermometer" class="w-3.5 h-3.5"></i> ${dayData.weather}
                  </span>
                </div>

                <h3 class="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2">
                  ${dayData.theme}
                </h3>
              </div>

              <!-- Day Accommodation Card & Copy Bar -->
              <div class="mt-4 p-4 rounded-2xl bg-[#0F172A] border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div class="flex items-start gap-3">
                  <div class="w-9 h-9 rounded-xl bg-indigo-950 text-indigo-400 border border-indigo-800/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i data-lucide="hotel" class="w-4 h-4"></i>
                  </div>
                  <div>
                    <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Accommodation</div>
                    <div class="text-sm font-bold text-white">${dayData.hotel.name}</div>
                    <div class="text-xs text-slate-400">${dayData.hotel.notes} • <span class="font-medium text-indigo-400">${dayData.hotel.nights}</span></div>
                  </div>
                </div>

                <div class="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto justify-end">
                  <button onclick="copyDayItinerary(${dayData.day})" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors" title="Copy Day Schedule to Clipboard">
                    <i data-lucide="copy" class="w-3.5 h-3.5 text-slate-400"></i>
                    <span>Copy Day</span>
                  </button>
                  <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dayData.hotel.mapQuery)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-sm transition-colors">
                    <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
                    <span>Map</span>
                  </a>
                </div>
              </div>

            </div>

            <!-- Right Visual Image -->
            <div class="lg:col-span-4 relative min-h-[180px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-slate-800">
              <img src="${dayData.image}" alt="${dayData.theme}" class="w-full h-full object-cover max-h-60 lg:max-h-none">
              <div class="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/30 to-transparent flex items-end p-4 text-white">
                <span class="text-xs font-semibold drop-shadow-md flex items-center gap-1.5 bg-slate-900/80 backdrop-blur px-2.5 py-1 rounded-lg border border-slate-700">
                  <i data-lucide="camera" class="w-3.5 h-3.5 text-indigo-400"></i> ${dayData.city}
                </span>
              </div>
            </div>

          </div>
        </div>

        <!-- Timeline Items Container -->
        <div class="day-activities-wrapper space-y-3 pl-2 sm:pl-4">
          ${
            hasActivities
              ? filteredActivities.map((activity, idx) => renderActivityCard(activity, idx, dayData.activities.length)).join("")
              : `<div class="p-8 text-center bg-[#141E33] rounded-2xl border border-slate-800 text-slate-400 text-sm">
                  No activities matching current filters on Day ${dayData.day}.
                </div>`
          }
        </div>

      </div>
    `;
  }).join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Activity Card Renderer (Dark High Contrast)
function renderActivityCard(activity, idx, total) {
  let catBadge = "";
  let borderAccent = "border-slate-800 hover:border-slate-700";

  switch (activity.category) {
    case "food":
      catBadge = `<span class="px-2.5 py-0.5 rounded-lg text-[11px] font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-800/80 flex items-center gap-1">
                    <i data-lucide="utensils" class="w-3 h-3"></i> Food
                  </span>`;
      borderAccent = "border-emerald-900/50 hover:border-emerald-700/80";
      break;
    case "transit":
      catBadge = `<span class="px-2.5 py-0.5 rounded-lg text-[11px] font-semibold bg-sky-950/80 text-sky-300 border border-sky-800/80 flex items-center gap-1">
                    <i data-lucide="train" class="w-3 h-3"></i> Transit
                  </span>`;
      borderAccent = "border-sky-900/50 hover:border-sky-700/80";
      break;
    case "sightseeing":
      catBadge = `<span class="px-2.5 py-0.5 rounded-lg text-[11px] font-semibold bg-purple-950/80 text-purple-300 border border-purple-800/80 flex items-center gap-1">
                    <i data-lucide="landmark" class="w-3 h-3"></i> Sightseeing
                  </span>`;
      borderAccent = "border-purple-900/50 hover:border-purple-700/80";
      break;
    case "shopping":
      catBadge = `<span class="px-2.5 py-0.5 rounded-lg text-[11px] font-semibold bg-amber-950/80 text-amber-300 border border-amber-800/80 flex items-center gap-1">
                    <i data-lucide="shopping-bag" class="w-3 h-3"></i> Shopping
                  </span>`;
      borderAccent = "border-amber-900/50 hover:border-amber-700/80";
      break;
    case "prayer":
      catBadge = `<span class="px-2.5 py-0.5 rounded-lg text-[11px] font-semibold bg-teal-950/80 text-teal-300 border border-teal-800/80 flex items-center gap-1">
                    <i data-lucide="moon" class="w-3 h-3"></i> Rest / Prayer
                  </span>`;
      borderAccent = "border-teal-900/50 hover:border-teal-700/80";
      break;
    default:
      catBadge = `<span class="px-2.5 py-0.5 rounded-lg text-[11px] font-semibold bg-slate-900 text-slate-300 border border-slate-800 flex items-center gap-1">
                    <i data-lucide="activity" class="w-3 h-3"></i> Schedule
                  </span>`;
  }

  // Halal Badges
  let halalBadge = "";
  if (activity.halal === "certified") {
    halalBadge = `
      <span class="px-2.5 py-0.5 rounded-lg text-[11px] font-bold bg-emerald-600 text-white flex items-center gap-1 shadow-glow-emerald" title="${activity.halalNote || 'Halal Certified'}">
        <i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Halal Verified
      </span>
    `;
  } else if (activity.halal === "caution") {
    halalBadge = `
      <span class="px-2.5 py-0.5 rounded-lg text-[11px] font-bold bg-amber-600 text-white flex items-center gap-1 shadow-sm" title="${activity.halalNote || 'Ingredient Check Required'}">
        <i data-lucide="alert-circle" class="w-3.5 h-3.5"></i> Halal Caution
      </span>
    `;
  }

  // Cost Display
  const costDisplay = (activity.costJpy > 0 || activity.costMyr > 0)
    ? `<div class="text-right flex-shrink-0 font-mono">
         <div class="text-sm font-bold text-white">~¥${activity.costJpy.toLocaleString()}</div>
         <div class="text-[11px] font-semibold text-emerald-400 font-mono">RM ${activity.costMyr} pp</div>
       </div>`
    : `<div class="text-right flex-shrink-0 text-xs font-semibold text-slate-400 font-mono">Free / Included</div>`;

  return `
    <div class="itinerary-card bg-[#141E33] rounded-2xl p-4 sm:p-5 border ${borderAccent} shadow-card-dark relative transition-all">
      <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
        
        <!-- Left Details -->
        <div class="space-y-2 flex-grow">
          
          <div class="flex flex-wrap items-center gap-2">
            <!-- Time Badge -->
            <span class="px-2.5 py-1 rounded-lg bg-[#0F172A] border border-slate-700 text-white text-xs font-bold font-mono tracking-tight">
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
                ? `<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.mapQuery)}" target="_blank" rel="noopener noreferrer" class="text-slate-500 hover:text-indigo-400 transition-colors p-1" title="Open in Google Maps">
                     <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                   </a>`
                : ''
            }
          </div>

          ${activity.note ? `<p class="text-xs text-slate-300 leading-relaxed">${activity.note}</p>` : ""}

          ${
            activity.transit
              ? `<div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#0F172A] text-slate-300 text-[11px] font-medium border border-slate-800">
                   <i data-lucide="navigation" class="w-3 h-3 text-indigo-400"></i>
                   <span>${activity.transit}</span>
                 </div>`
              : ""
          }

        </div>

        <!-- Right Cost Tag -->
        <div class="border-t sm:border-t-0 pt-2 sm:pt-0 sm:pl-4 sm:border-l border-slate-800/80 flex sm:flex-col justify-between sm:justify-start items-center sm:items-end">
          <span class="text-[10px] uppercase font-bold text-slate-400 tracking-wider sm:mb-1">EST. COST</span>
          ${costDisplay}
        </div>

      </div>
    </div>
  `;
}

// ==========================================
// 4. BUDGET DASHBOARD LOGIC
// ==========================================

const BUDGET_DATA = {
  food: { minJpy: 31500, maxJpy: 45000, minMyr: 945, maxMyr: 1350 },
  intercity: { minJpy: 16300, maxJpy: 19600, minMyr: 489, maxMyr: 588 },
  local: { minJpy: 7200, maxJpy: 10800, minMyr: 216, maxMyr: 324 },
  attractions: { minJpy: 1000, maxJpy: 2500, minMyr: 30, maxMyr: 75 },
  misc: { minJpy: 5000, maxJpy: 10000, minMyr: 150, maxMyr: 300 },
  totalNonHotel: { minJpy: 61000, maxJpy: 88000, minMyr: 1830, maxMyr: 2640 },
  targetHotel: { minJpy: 170000, maxJpy: 215000, minMyr: 5100, maxMyr: 6450 }
};

function setBudgetPax(pax) {
  currentPax = pax;
  
  const p1 = document.getElementById("pax-1-btn");
  const p4 = document.getElementById("pax-4-btn");
  if (p1 && p4) {
    if (pax === 1) {
      p1.className = "px-3.5 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 text-white shadow-sm transition-all";
      p4.className = "px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white transition-all";
    } else {
      p4.className = "px-3.5 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 text-white shadow-sm transition-all";
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
      cMyr.className = "px-3.5 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 text-white shadow-sm transition-all";
      cJpy.className = "px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white transition-all";
    } else {
      cJpy.className = "px-3.5 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 text-white shadow-sm transition-all";
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

  const hotelTargetEl = document.getElementById("hotel-target-display");
  if (hotelTargetEl) {
    hotelTargetEl.textContent = `~170,000–215,000 JPY (≈ RM 5,100–6,450) for all 4`;
  }
}

// ==========================================
// 5. ADVANCE BOOKING CHECKLIST LOGIC
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

function renderChecklist() {
  const container = document.getElementById("checklist-items-container");
  if (!container) return;

  const saved = getSavedChecklist();

  container.innerHTML = ADVANCE_BOOKINGS.map(item => {
    const isChecked = !!saved[item.id];
    return `
      <div class="checklist-card p-5 rounded-2xl bg-[#141E33] border ${isChecked ? 'border-emerald-500/80 bg-emerald-950/20' : 'border-slate-800'} shadow-card-dark transition-all flex items-start gap-4">
        <input 
          type="checkbox" 
          id="${item.id}" 
          ${isChecked ? 'checked' : ''}
          onchange="saveChecklistState('${item.id}', this.checked)"
          class="mt-1 w-5 h-5 rounded-lg text-indigo-600 bg-[#0F172A] border-slate-700 focus:ring-indigo-500 cursor-pointer flex-shrink-0"
        >
        <label for="${item.id}" class="cursor-pointer flex-grow space-y-1">
          <div class="text-sm font-bold ${isChecked ? 'line-through text-slate-500' : 'text-white'}">
            ${item.label}
          </div>
          <div class="text-xs text-slate-400 leading-relaxed">
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
window.saveChecklistState = saveChecklistState;

// ==========================================
// 6. HALAL DIRECTORY RENDERING
// ==========================================

function renderHalalDirectory() {
  const grid = document.getElementById("halal-spots-grid");
  if (!grid) return;

  grid.innerHTML = HALAL_RESTAURANTS.map(spot => `
    <div class="bg-[#141E33] rounded-3xl p-6 border border-slate-800 shadow-card-dark hover:border-slate-700 transition-all flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="px-2.5 py-1 rounded-lg text-[11px] font-bold ${spot.status.includes('Caution') ? 'bg-amber-950 text-amber-300 border border-amber-800' : 'bg-emerald-950 text-emerald-300 border border-emerald-800'}">
            ${spot.status}
          </span>
          <span class="text-xs font-mono font-semibold text-slate-400">${spot.days}</span>
        </div>

        <h4 class="text-lg font-bold text-white mb-1">${spot.name}</h4>
        <div class="text-xs text-indigo-400 font-semibold mb-3 flex items-center gap-1">
          <i data-lucide="map-pin" class="w-3.5 h-3.5"></i> ${spot.city} • <span class="text-slate-400 font-normal">${spot.type}</span>
        </div>

        <p class="text-xs text-slate-300 leading-relaxed mb-4">${spot.desc}</p>
      </div>

      <div class="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
        <span class="text-slate-400 font-medium">Est. Spend:</span>
        <span class="font-mono font-bold text-emerald-400">${spot.avgCost}</span>
      </div>
    </div>
  `).join("");
}

// ==========================================
// 7. EVENT LISTENERS & SEARCH
// ==========================================

function setupEventListeners() {
  // Category Filter Buttons
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("active", "bg-indigo-600", "text-white");
        b.classList.add("bg-[#0F172A]");
      });
      btn.classList.add("active", "bg-indigo-600", "text-white");
      btn.classList.remove("bg-[#0F172A]");

      activeCategoryFilter = btn.dataset.category;
      renderTimeline();
    });
  });

  // Quick Search Input
  const searchInput = document.getElementById("quick-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderTimeline();
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

  // Expand / Collapse All Days
  const expandBtn = document.getElementById("btn-expand-all");
  const expandText = document.getElementById("expand-toggle-text");
  if (expandBtn && expandText) {
    expandBtn.addEventListener("click", () => {
      allExpanded = !allExpanded;
      const wrappers = document.querySelectorAll(".day-activities-wrapper");
      wrappers.forEach(w => {
        w.style.display = allExpanded ? "block" : "none";
      });
      expandText.textContent = allExpanded ? "Collapse All Days" : "Expand All Days";
    });
  }

  // Jump to Day 1 Button
  const jumpBtn = document.getElementById("btn-jump-today");
  if (jumpBtn) {
    jumpBtn.addEventListener("click", () => {
      const day1 = document.getElementById("day-1");
      if (day1) {
        day1.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  // Scroll-spy for Day Pills
  window.addEventListener("scroll", () => {
    const daySections = document.querySelectorAll(".day-section");
    const pills = document.querySelectorAll(".day-pill");
    let currentDay = null;

    daySections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 250 && rect.bottom >= 250) {
        currentDay = section.dataset.day;
      }
    });

    pills.forEach(pill => {
      if (pill.dataset.day === currentDay) {
        pill.classList.add("active");
      } else if (pill.dataset.day) {
        pill.classList.remove("active");
      }
    });
  }, { passive: true });
}
