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
    "day": 1,
    "date": "Sat, 16 Jan 2027",
    "city": "Osaka",
    "cityTag": "Osaka • Arrival",
    "weather": "8°C • Crisp Winter",
    "theme": "Arrive KIX 09:45 ✈️ • Check-in Plum Hotel & Dotonbori Night Walk",
    "image": "./images/osaka-dotonbori.jpg",
    "hotel": {
      "name": "Plum Hotel",
      "nights": "1:00pm (Day 1) – 9:00am (Day 3) • 2 Nights",
      "notes": "Luggage drop upon arrival; central base near Namba transport hubs",
      "mapQuery": "Plum Hotel Osaka"
    },
    "activities": [
      {
        "time": "09:45–10:30",
        "title": "Kansai International Airport (Arrive KIX)",
        "costJpy": 0,
        "costMyr": 0,
        "category": "transit",
        "halal": null,
        "note": "Flight touchdown at KIX. Clear immigration, collect checked luggage, and set up / top up IC Card (ICOCA/Suica).",
        "transit": "Flight arrival KIX",
        "mapQuery": "Kansai International Airport"
      },
      {
        "time": "10:30–12:00",
        "title": "Airport → Osaka (train)",
        "costJpy": 1000,
        "costMyr": 30,
        "category": "transit",
        "halal": null,
        "note": "Board Nankai Airport Express or JR Kansai Airport Rapid train directly to Namba / Osaka.",
        "transit": "~60–75 min | ~1,000 JPY (30 MYR) pp",
        "mapQuery": "Namba Station Osaka"
      },
      {
        "time": "12:00–13:00",
        "title": "Walk to Plum Hotel / luggage drop",
        "costJpy": 0,
        "costMyr": 0,
        "category": "logistics",
        "halal": null,
        "note": "Drop luggage at Plum Hotel reception before lunch; check-in window opens from 1:00pm.",
        "transit": "~10–15 min walk",
        "mapQuery": "Plum Hotel Osaka"
      },
      {
        "time": "13:00–14:30",
        "title": "Lunch @ Halal Ramen Naniwaya",
        "costJpy": 1200,
        "costMyr": 36,
        "category": "food",
        "halal": "certified",
        "halalNote": "Halal: halal-certified / halal-focused",
        "note": "Authentic Halal Japanese Ramen in central Osaka with rich, comforting chicken and beef broth.",
        "transit": "Walk from hotel",
        "mapQuery": "Halal Ramen Naniwaya Osaka"
      },
      {
        "time": "15:00–17:00",
        "title": "Rest / settle in @ Plum Hotel",
        "costJpy": 0,
        "costMyr": 0,
        "category": "prayer",
        "halal": null,
        "note": "Check in, settle into Plum Hotel rooms, freshen up, perform Zuhr & Asr prayers, and recover from travel.",
        "transit": null,
        "mapQuery": "Plum Hotel Osaka"
      },
      {
        "time": "17:30–19:00",
        "title": "Explore Namba & Shinsaibashi",
        "costJpy": 0,
        "costMyr": 0,
        "category": "shopping",
        "halal": null,
        "note": "Evening stroll through covered shopping arcades, Don Quijote, and duty-free retail stalls.",
        "transit": "Walking",
        "mapQuery": "Shinsaibashi-suji Shopping Street"
      },
      {
        "time": "19:00–21:00",
        "title": "Dotonbori night walk & Dinner @ Matsuri Halal Restaurant",
        "costJpy": 1800,
        "costMyr": 54,
        "category": "food",
        "halal": "certified",
        "halalNote": "Halal: halal-certified",
        "note": "Iconic Glico Running Man neon sign, canal walkway, and famous Halal Osaka Takoyaki, Okonomiyaki & set meals.",
        "transit": "Walk / short transit",
        "mapQuery": "Matsuri Halal Restaurant Osaka"
      },
      {
        "time": "21:00–21:30",
        "title": "Back to Plum Hotel, early night",
        "costJpy": 0,
        "costMyr": 0,
        "category": "logistics",
        "halal": null,
        "note": "Rest well to prepare for Nara Park deer & Umeda Sky sunset tomorrow.",
        "transit": "Walk to Plum Hotel",
        "mapQuery": "Plum Hotel Osaka"
      }
    ]
  },
  {
    "day": 2,
    "date": "Sun, 17 Jan 2027",
    "city": "Osaka + Nara",
    "cityTag": "Osaka + Nara Day Trip",
    "weather": "7°C • Clear Winter Sun",
    "theme": "🦌 Nara Park Sacred Deer → 🌇 Umeda Sky Building Sunset",
    "image": "./images/nara-park.jpg",
    "hotel": {
      "name": "Plum Hotel",
      "nights": "Night 2 of 2 • Stay until 9:00am Day 3",
      "notes": "Central Osaka base; pack luggage tonight for Kyoto transfer tomorrow",
      "mapQuery": "Plum Hotel Osaka"
    },
    "activities": [
      {
        "time": "08:00–09:00",
        "title": "Breakfast (convenience store check / cafe)",
        "costJpy": 600,
        "costMyr": 18,
        "category": "food",
        "halal": "caution",
        "halalNote": "Halal caution: verify onigiri/bread ingredients (no pork/mirin/gelatin)",
        "note": "Quick breakfast at 7-Eleven / FamilyMart with ingredient checking.",
        "transit": null,
        "mapQuery": "7-Eleven Namba Osaka"
      },
      {
        "time": "09:00–10:00",
        "title": "Osaka → Nara (train)",
        "costJpy": 680,
        "costMyr": 20,
        "category": "transit",
        "halal": null,
        "note": "Take Kintetsu-Nara Line Rapid Express from Osaka-Namba directly to Kintetsu-Nara Station.",
        "transit": "~45 min | ~680 JPY (20 MYR) pp",
        "mapQuery": "Kintetsu-Nara Station"
      },
      {
        "time": "10:00–14:00",
        "title": "Nara Park & Todai-ji Temple Grounds",
        "costJpy": 1500,
        "costMyr": 45,
        "category": "sightseeing",
        "halal": "caution",
        "halalNote": "Halal-conscious lunch / shika senbei deer crackers",
        "note": "Stroll with hundreds of free-roaming, polite bowing sika deer, see Todai-ji Great Buddha hall exterior, and Kasuga Taisha lantern paths.",
        "transit": "Walking inside park | Entry ~600 JPY optional",
        "mapQuery": "Nara Park"
      },
      {
        "time": "14:00–15:00",
        "title": "Nara → Osaka (train)",
        "costJpy": 680,
        "costMyr": 20,
        "category": "transit",
        "halal": null,
        "note": "Board return train from Kintetsu-Nara back to Osaka Namba.",
        "transit": "~45 min | ~680 JPY (20 MYR) pp",
        "mapQuery": "Osaka Namba Station"
      },
      {
        "time": "15:00–16:00",
        "title": "Rest break & prayer @ Plum Hotel",
        "costJpy": 0,
        "costMyr": 0,
        "category": "prayer",
        "halal": null,
        "note": "Freshen up, perform Zuhr/Asr prayer break, and warm up at Plum Hotel.",
        "transit": null,
        "mapQuery": "Plum Hotel Osaka"
      },
      {
        "time": "16:00–16:30",
        "title": "Transit to Umeda",
        "costJpy": 240,
        "costMyr": 7,
        "category": "transit",
        "halal": null,
        "note": "Osaka Metro Midosuji Line from Namba to Umeda Station.",
        "transit": "~15 min | ~240 JPY (7 MYR) pp",
        "mapQuery": "Umeda Station Osaka"
      },
      {
        "time": "16:30–18:30",
        "title": "Umeda Sky Building (sunset)",
        "costJpy": 1500,
        "costMyr": 45,
        "category": "sightseeing",
        "halal": null,
        "note": "Kuchu Teien Floating Garden Observatory: 360-degree open-air rooftop views over Osaka skyline and Yodo River at sunset.",
        "transit": "Ticket ~1,500 JPY (45 MYR) pp",
        "mapQuery": "Umeda Sky Building Floating Garden Observatory"
      },
      {
        "time": "18:30–20:00",
        "title": "Dinner @ Ali's Kitchen Osaka Halal Pakistani & Arabic Restaurant",
        "costJpy": 1800,
        "costMyr": 54,
        "category": "food",
        "halal": "certified",
        "halalNote": "Halal: halal-certified (Pioneer Halal in Kansai)",
        "note": "Hearty Biryani, curries, and freshly baked tandoor naan in Shinsaibashi.",
        "transit": "Short metro / walk",
        "mapQuery": "Ali's Kitchen Osaka Halal"
      },
      {
        "time": "20:00–21:00",
        "title": "Return to Plum Hotel, pack for Kyoto",
        "costJpy": 240,
        "costMyr": 7,
        "category": "logistics",
        "halal": null,
        "note": "Return to Plum Hotel, pack all luggage for tomorrow's transfer to Kyoto.",
        "transit": "Metro back to Namba",
        "mapQuery": "Plum Hotel Osaka"
      }
    ]
  },
  {
    "day": 3,
    "date": "Mon, 18 Jan 2027",
    "city": "Kyoto",
    "cityTag": "Osaka → Kyoto Transfer",
    "weather": "6°C • Historic Kyoto Chill",
    "theme": "🚆 Osaka → Kyoto Transfer • Check-in Rinn Shirakawa South & Gion",
    "image": "./images/kyoto-pagoda.jpg",
    "hotel": {
      "name": "Rinn Shirakawa South",
      "nights": "3:00pm (Day 3) – 12:00pm (Day 5) • 2 Nights",
      "notes": "Traditional Kyoto stay near historic Shirakawa canal & Gion district",
      "mapQuery": "Rinn Shirakawa South Kyoto"
    },
    "activities": [
      {
        "time": "07:30–08:30",
        "title": "Breakfast & final packing",
        "costJpy": 600,
        "costMyr": 18,
        "category": "food",
        "halal": "caution",
        "halalNote": "Convenience store ingredient check",
        "note": "Breakfast before morning checkout from Plum Hotel.",
        "transit": null,
        "mapQuery": "Plum Hotel Osaka"
      },
      {
        "time": "08:30–09:30",
        "title": "Pack + check-out logistics from Plum Hotel",
        "costJpy": 0,
        "costMyr": 0,
        "category": "logistics",
        "halal": null,
        "note": "Check out from Plum Hotel (scheduled by 9:00am/9:30am) and head to train station.",
        "transit": null,
        "mapQuery": "Plum Hotel Osaka"
      },
      {
        "time": "10:00–11:00",
        "title": "Osaka → Kyoto (train)",
        "costJpy": 800,
        "costMyr": 24,
        "category": "transit",
        "halal": null,
        "note": "Take Hankyu Kyoto Line (Osaka-Umeda to Kyoto-Kawaramachi/Gion-Shijo) or JR Special Rapid train.",
        "transit": "~45–60 min | ~600–1,000 JPY (18–30 MYR) pp",
        "mapQuery": "Kyoto-Kawaramachi Station"
      },
      {
        "time": "11:00–11:45",
        "title": "Arrive Kyoto + drop luggage @ Rinn Shirakawa South",
        "costJpy": 0,
        "costMyr": 0,
        "category": "logistics",
        "halal": null,
        "note": "Walk to Rinn Shirakawa South to drop heavy bags with concierge before lunch.",
        "transit": "Short walk from Gion-Shijo / Sanjo",
        "mapQuery": "Rinn Shirakawa South Kyoto"
      },
      {
        "time": "11:45–13:00",
        "title": "Lunch @ Halal Ramen Ayam Ya Karasuma Kyoto",
        "costJpy": 1500,
        "costMyr": 45,
        "category": "food",
        "halal": "certified",
        "halalNote": "Halal: halal-certified / halal-focused (Rich Torisoba)",
        "note": "Iconic Halal chicken-broth ramen with rich soup, spicy options, and crispy karaage.",
        "transit": "Walking distance / subway",
        "mapQuery": "Halal Ramen Ayam Ya Karasuma Kyoto"
      },
      {
        "time": "13:00–15:00",
        "title": "Stroll Kamogawa River & Shijo Kawaramachi",
        "costJpy": 0,
        "costMyr": 0,
        "category": "sightseeing",
        "halal": null,
        "note": "Walk along the scenic Kamo River bank, Minamiza Theatre, and central Kyoto streets.",
        "transit": "Walking",
        "mapQuery": "Kamo River Kyoto"
      },
      {
        "time": "15:00–16:30",
        "title": "Check-in Rinn Shirakawa South + Rest & Prayer",
        "costJpy": 0,
        "costMyr": 0,
        "category": "prayer",
        "halal": null,
        "note": "Official room check-in (from 3:00pm), relax in Japanese boutique accommodation, Zuhr/Asr prayer.",
        "transit": null,
        "mapQuery": "Rinn Shirakawa South Kyoto"
      },
      {
        "time": "16:30–18:30",
        "title": "Twilight walk through Gion Shirakawa Canal",
        "costJpy": 0,
        "costMyr": 0,
        "category": "sightseeing",
        "halal": null,
        "note": "Historic stone-paved canal alleys, willow trees, traditional wooden machiya, and Yasaka Shrine lanterns.",
        "transit": "Walking",
        "mapQuery": "Shirakawa Canal Gion"
      },
      {
        "time": "18:30–20:00",
        "title": "Dinner @ Halal Wagyu Yakiniku Panga Kyoto",
        "costJpy": 3500,
        "costMyr": 105,
        "category": "food",
        "halal": "certified",
        "halalNote": "Halal: halal-certified premium Japanese Wagyu",
        "note": "High quality Halal Wagyu beef BBQ experience grilled right at your table.",
        "transit": "Walk / bus",
        "mapQuery": "Halal Wagyu Yakiniku Panga Kyoto"
      },
      {
        "time": "20:00–21:00",
        "title": "Return to Rinn Shirakawa South, early night",
        "costJpy": 0,
        "costMyr": 0,
        "category": "logistics",
        "halal": null,
        "note": "Rest well for Kyoto temples tour tomorrow morning.",
        "transit": "Walk back to Rinn Shirakawa South",
        "mapQuery": "Rinn Shirakawa South Kyoto"
      }
    ]
  },
  {
    "day": 4,
    "date": "Tue, 19 Jan 2027",
    "city": "Kyoto",
    "cityTag": "Historic Kyoto Highlights",
    "weather": "5°C • Morning Mist & Serenity",
    "theme": "⛩️ Kiyomizu-dera → Sannenzaka → Nishiki Market → 🌟 Kinkaku-ji",
    "image": "./images/kinkaku-ji.jpg",
    "hotel": {
      "name": "Rinn Shirakawa South",
      "nights": "Night 2 of 2 • Stay until 12:00pm Day 5",
      "notes": "Prepare luggage for tomorrow afternoon's Shinkansen to Tokyo",
      "mapQuery": "Rinn Shirakawa South Kyoto"
    },
    "activities": [
      {
        "time": "07:30–08:15",
        "title": "Breakfast",
        "costJpy": 600,
        "costMyr": 18,
        "category": "food",
        "halal": "caution",
        "halalNote": "Convenience store check",
        "note": "Early breakfast to get ahead of the morning crowds.",
        "transit": null,
        "mapQuery": "Gion Kyoto"
      },
      {
        "time": "08:30–10:30",
        "title": "Kiyomizu-dera Temple",
        "costJpy": 400,
        "costMyr": 12,
        "category": "sightseeing",
        "halal": null,
        "note": "Iconic UNESCO wooden temple stage built without nails overlooking Kyoto city, Otowa Waterfall, and winter hillside.",
        "transit": "Ticket ~400 JPY (12 MYR) pp",
        "mapQuery": "Kiyomizu-dera"
      },
      {
        "time": "10:30–12:00",
        "title": "Sannenzaka–Ninenzaka stroll",
        "costJpy": 0,
        "costMyr": 0,
        "category": "sightseeing",
        "halal": null,
        "note": "Historic stone-flagged pedestrian slopes, traditional teahouses, craft shops, and Yasaka Pagoda photo spots.",
        "transit": "Walking",
        "mapQuery": "Sannenzaka Ninenzaka Kyoto"
      },
      {
        "time": "12:00–12:30",
        "title": "Transit to central Kyoto",
        "costJpy": 230,
        "costMyr": 7,
        "category": "transit",
        "halal": null,
        "note": "Kyoto City Bus to Shijo-Kawaramachi.",
        "transit": "~15 min | ~230 JPY (7 MYR) pp",
        "mapQuery": "Shijo Kawaramachi"
      },
      {
        "time": "12:30–14:00",
        "title": "Nishiki Market (browse & lunch)",
        "costJpy": 1500,
        "costMyr": 45,
        "category": "shopping",
        "halal": "caution",
        "halalNote": "Halal caution: check ingredients, seafood & fruit skewers",
        "note": "Kyoto's 400-year-old pantry! Fresh seasonal strawberries, roasted tea, and halal-conscious snacks.",
        "transit": "Walking",
        "mapQuery": "Nishiki Market"
      },
      {
        "time": "14:00–15:00",
        "title": "Rest / prayer break @ Rinn Shirakawa South",
        "costJpy": 0,
        "costMyr": 0,
        "category": "prayer",
        "halal": null,
        "note": "Midday Zuhr/Asr prayer break and recharge at hotel.",
        "transit": null,
        "mapQuery": "Rinn Shirakawa South Kyoto"
      },
      {
        "time": "15:00–15:30",
        "title": "Bus to Kinkaku-ji",
        "costJpy": 230,
        "costMyr": 7,
        "category": "transit",
        "halal": null,
        "note": "Direct Kyoto City Bus #12 or #205 to Kinkakuji-michi.",
        "transit": "~30 min | ~230 JPY (7 MYR) pp",
        "mapQuery": "Kinkakuji-michi Bus Stop"
      },
      {
        "time": "15:30–17:00",
        "title": "Kinkaku-ji (The Golden Pavilion)",
        "costJpy": 500,
        "costMyr": 15,
        "category": "sightseeing",
        "halal": null,
        "note": "World-renowned Zen temple covered in pure gold leaf reflecting into the Kyoko-chi mirror pond, with snow dusting on pine trees.",
        "transit": "Ticket ~500 JPY (15 MYR) pp",
        "mapQuery": "Kinkaku-ji"
      },
      {
        "time": "17:00–18:00",
        "title": "Bus return to central Kyoto",
        "costJpy": 230,
        "costMyr": 7,
        "category": "transit",
        "halal": null,
        "note": "Return bus to Karasuma / Gion.",
        "transit": "~230 JPY (7 MYR) pp",
        "mapQuery": "Gion-Shijo Station"
      },
      {
        "time": "18:00–19:30",
        "title": "Dinner (Halal Wagyu Panga or Halal Ramen Ayam Ya)",
        "costJpy": 2500,
        "costMyr": 75,
        "category": "food",
        "halal": "certified",
        "halalNote": "Halal: halal-certified",
        "note": "Warm halal dinner in central Kyoto.",
        "transit": "Short walk",
        "mapQuery": "Halal Wagyu Yakiniku Panga Kyoto"
      },
      {
        "time": "19:30–20:30",
        "title": "Return to Rinn Shirakawa South, pack for Tokyo",
        "costJpy": 0,
        "costMyr": 0,
        "category": "logistics",
        "halal": null,
        "note": "Final packing for tomorrow's Shinkansen bullet train to Tokyo.",
        "transit": "Walk to hotel",
        "mapQuery": "Rinn Shirakawa South Kyoto"
      }
    ]
  },
  {
    "day": 5,
    "date": "Wed, 20 Jan 2027",
    "city": "Kyoto → Tokyo",
    "cityTag": "Shinkansen to Tokyo",
    "weather": "8°C • Tokyo Metropolis",
    "theme": "🚅 Tokaido Shinkansen Kyoto → Tokyo • Tokyo Hotel Check-in & Evening Lights",
    "image": "./images/hero-banner.jpg",
    "hotel": {
      "name": "Tokyo Hotel (Choose 1)",
      "nights": "5:00pm (Day 5) – 9:30am (Day 9) • 4 Nights Base",
      "notes": "Central Tokyo hotel base (stay until departure)",
      "mapQuery": "Hotel Tavinos Asakusa Tokyo"
    },
    "activities": [
      {
        "time": "08:00–09:30",
        "title": "Breakfast & morning in Shirakawa",
        "costJpy": 600,
        "costMyr": 18,
        "category": "food",
        "halal": "caution",
        "halalNote": "Simple breakfast",
        "note": "Leisurely breakfast before packing up.",
        "transit": null,
        "mapQuery": "Rinn Shirakawa South Kyoto"
      },
      {
        "time": "09:30–11:30",
        "title": "Kyoto craft & matcha souvenir shopping",
        "costJpy": 0,
        "costMyr": 0,
        "category": "shopping",
        "halal": null,
        "note": "Pick up authentic Uji matcha, Kyoto fans, and traditional sweets near Kawaramachi.",
        "transit": "Walking",
        "mapQuery": "Kawaramachi Kyoto"
      },
      {
        "time": "11:30–12:00",
        "title": "Check-out from Rinn Shirakawa South",
        "costJpy": 0,
        "costMyr": 0,
        "category": "logistics",
        "halal": null,
        "note": "Check out (completed by 12:00pm) and transfer with luggage to Kyoto Station.",
        "transit": "Subway/taxi to Kyoto Station",
        "mapQuery": "Kyoto Station"
      },
      {
        "time": "12:00–13:30",
        "title": "Lunch @ Kyoto Station (halal-conscious)",
        "costJpy": 1500,
        "costMyr": 45,
        "category": "food",
        "halal": "caution",
        "halalNote": "Halal-conscious meal before bullet train",
        "note": "Lunch at Kyoto Station mall restaurants or ekiben bento checking.",
        "transit": null,
        "mapQuery": "Kyoto Station"
      },
      {
        "time": "14:00–16:30",
        "title": "Kyoto → Tokyo (Shinkansen)",
        "costJpy": 14000,
        "costMyr": 420,
        "category": "transit",
        "halal": null,
        "note": "Board the high-speed Tokaido Shinkansen (Nozomi / Hikari) from Kyoto Station straight to Tokyo Station.",
        "transit": "~2.5 hrs | ~14,000 JPY (420 MYR) pp",
        "mapQuery": "Tokyo Station"
      },
      {
        "time": "16:30–17:00",
        "title": "Transit to Tokyo Hotel",
        "costJpy": 240,
        "costMyr": 7,
        "category": "transit",
        "halal": null,
        "note": "Tokyo Metro to hotel base.",
        "transit": "~20 min | ~240 JPY (7 MYR) pp",
        "mapQuery": "Hotel Tavinos Asakusa Tokyo"
      },
      {
        "time": "17:00–18:30",
        "title": "Check in Tokyo Hotel (stay until departure)",
        "costJpy": 0,
        "costMyr": 0,
        "category": "prayer",
        "halal": null,
        "note": "Check-in to Tokyo hotel (booked for 4 nights until Day 9 departure), unpack, Zuhr/Asr prayer break.",
        "transit": null,
        "mapQuery": "Hotel Tavinos Asakusa Tokyo"
      },
      {
        "time": "18:30–20:00",
        "title": "Dinner @ HALAL SAKURA",
        "costJpy": 2500,
        "costMyr": 75,
        "category": "food",
        "halal": "certified",
        "halalNote": "Halal: halal-certified (Japanese & Halal Shabu/Nabe)",
        "note": "Famous Halal restaurant in Asakusa/Iriya serving authentic Japanese beef shabu-shabu, sukiyaki, and ramen.",
        "transit": "Short walk / transit",
        "mapQuery": "HALAL SAKURA Tokyo"
      },
      {
        "time": "20:00–21:30",
        "title": "Evening stroll around Asakusa Senso-ji illumination",
        "costJpy": 0,
        "costMyr": 0,
        "category": "sightseeing",
        "halal": null,
        "note": "Peaceful nighttime stroll under Senso-ji Temple's illuminated red Kaminarimon gate with views of Tokyo Skytree.",
        "transit": "Walking",
        "mapQuery": "Senso-ji Asakusa Tokyo"
      }
    ]
  },
  {
    "day": 6,
    "date": "Thu, 21 Jan 2027",
    "city": "Tokyo Yuzawa",
    "cityTag": "GALA Yuzawa Snow Day",
    "weather": "-2°C • Deep Powder Snow",
    "theme": "❄️ Snow Day! Shinkansen to GALA Yuzawa Ski Resort (Sledding & Snow Fun)",
    "image": "./images/gala-yuzawa.jpg",
    "hotel": {
      "name": "Tokyo Hotel (Central Base)",
      "nights": "Night 2 of 4",
      "notes": "Tokyo hotel stay; no luggage transfer required today!",
      "mapQuery": "Hotel Tavinos Asakusa Tokyo"
    },
    "activities": [
      {
        "time": "06:00–06:45",
        "title": "Early breakfast & thermal gear prep",
        "costJpy": 600,
        "costMyr": 18,
        "category": "food",
        "halal": "caution",
        "halalNote": "Quick breakfast",
        "note": "Dress in warm layers, thermal gloves, and boots for alpine snow temperatures.",
        "transit": null,
        "mapQuery": "Tokyo Station"
      },
      {
        "time": "07:00–08:30",
        "title": "Tokyo → GALA Yuzawa (Shinkansen)",
        "costJpy": 7500,
        "costMyr": 225,
        "category": "transit",
        "halal": null,
        "note": "Direct Joetsu Shinkansen (Max Tanigawa) from Tokyo Station right into GALA Yuzawa Ski Station lobby!",
        "transit": "~75–85 min | ~7,500 JPY (225 MYR) pp",
        "mapQuery": "Gala-Yuzawa Station"
      },
      {
        "time": "08:30–09:00",
        "title": "Sled & winter gear rental @ ski center",
        "costJpy": 3500,
        "costMyr": 105,
        "category": "sightseeing",
        "halal": null,
        "note": "Pick up sled rental, snow boots, gloves & gondola pass at GALA Yuzawa station counter.",
        "transit": "Station ski counter",
        "mapQuery": "GALA Yuzawa Snow Resort"
      },
      {
        "time": "09:00–12:00",
        "title": "GALA Yuzawa snow activities & sledding park",
        "costJpy": 0,
        "costMyr": 0,
        "category": "sightseeing",
        "halal": null,
        "note": "Ride the scenic mountain gondola, snow sledding down dedicated powder slopes, snow ball fun, and mountain views.",
        "transit": "Gondola ride",
        "mapQuery": "GALA Yuzawa Snow Resort"
      },
      {
        "time": "12:00–13:30",
        "title": "Warm lunch at GALA Yuzawa Ski Center",
        "costJpy": 1200,
        "costMyr": 36,
        "category": "food",
        "halal": "caution",
        "halalNote": "Halal-conscious meal (hot vegetable soba / seafood / packed meal)",
        "note": "Warm up indoors with hot lunch & drinks at the ski resort restaurant.",
        "transit": null,
        "mapQuery": "GALA Yuzawa Rest House"
      },
      {
        "time": "13:30–15:30",
        "title": "Afternoon snow play & Bell of Love observation deck",
        "costJpy": 0,
        "costMyr": 0,
        "category": "sightseeing",
        "halal": null,
        "note": "Panoramic observation platform overlooking the Japanese Alps, snow photography, and relaxed winter fun.",
        "transit": "Gondola / snow area",
        "mapQuery": "GALA Yuzawa Observation Deck"
      },
      {
        "time": "15:30–16:00",
        "title": "Return rental gear & head to Shinkansen gate",
        "costJpy": 0,
        "costMyr": 0,
        "category": "logistics",
        "halal": null,
        "note": "Return sleds & gear; station gates are directly inside the ski center building.",
        "transit": "Inside station",
        "mapQuery": "Gala-Yuzawa Station"
      },
      {
        "time": "16:00–17:30",
        "title": "GALA Yuzawa → Tokyo (Shinkansen)",
        "costJpy": 7500,
        "costMyr": 225,
        "category": "transit",
        "halal": null,
        "note": "Board Joetsu Shinkansen back to Tokyo Station.",
        "transit": "~75–85 min | ~7,500 JPY (225 MYR) pp",
        "mapQuery": "Tokyo Station"
      },
      {
        "time": "18:00–19:30",
        "title": "Dinner @ Gyumon Halal Ramen Asakusa",
        "costJpy": 1600,
        "costMyr": 48,
        "category": "food",
        "halal": "certified",
        "halalNote": "Halal: halal-certified / halal-focused",
        "note": "Rich, soothing halal beef broth ramen with tender chashu slices in Asakusa.",
        "transit": "Subway / walk",
        "mapQuery": "Gyumon Halal Ramen Asakusa"
      },
      {
        "time": "19:30–21:00",
        "title": "Return to Tokyo Hotel & rest",
        "costJpy": 0,
        "costMyr": 0,
        "category": "logistics",
        "halal": null,
        "note": "Warm bath and rest after an exciting day in the snow.",
        "transit": "To hotel",
        "mapQuery": "Hotel Tavinos Asakusa Tokyo"
      }
    ]
  },
  {
    "day": 7,
    "date": "Fri, 22 Jan 2027",
    "city": "Tokyo ↔ Mt. Fuji",
    "cityTag": "Mt. Fuji Day Trip",
    "weather": "0°C • Crisp Fuji Blue Sky",
    "theme": "🗻 Mt. Fuji Winter Day Trip (Chureito Pagoda • Lake Kawaguchi • Oishi Park)",
    "image": "./images/mt-fuji-kawaguchiko.jpg",
    "hotel": {
      "name": "Tokyo Hotel (Central Base)",
      "nights": "Night 3 of 4",
      "notes": "Tokyo hotel stay; travel light with daypack for Fuji trip",
      "mapQuery": "Hotel Tavinos Asakusa Tokyo"
    },
    "activities": [
      {
        "time": "07:30–08:30",
        "title": "Breakfast & Fuji day trip prep",
        "costJpy": 600,
        "costMyr": 18,
        "category": "food",
        "halal": "caution",
        "halalNote": "Simple breakfast",
        "note": "Breakfast before heading to bus terminal / train.",
        "transit": null,
        "mapQuery": "Tokyo Hotel"
      },
      {
        "time": "09:00–11:00",
        "title": "Tokyo → Mt. Fuji / Kawaguchiko (tour/bus/train)",
        "costJpy": 2200,
        "costMyr": 66,
        "category": "transit",
        "halal": null,
        "note": "Highway express coach from Shinjuku / Tokyo Station directly to Lake Kawaguchiko.",
        "transit": "~2 hrs | ~2,200 JPY (66 MYR) pp",
        "mapQuery": "Kawaguchiko Station"
      },
      {
        "time": "11:00–12:30",
        "title": "Arakurayama Sengen Park (Chureito Pagoda)",
        "costJpy": 0,
        "costMyr": 0,
        "category": "sightseeing",
        "halal": null,
        "note": "World-famous 5-story vermilion pagoda with Mt. Fuji snow peak backdrop. 398 steps to view.",
        "transit": "Local train / bus",
        "mapQuery": "Chureito Pagoda Arakurayama"
      },
      {
        "time": "12:30–13:30",
        "title": "Warm lunch in Kawaguchiko",
        "costJpy": 1200,
        "costMyr": 36,
        "category": "food",
        "halal": "caution",
        "halalNote": "Halal-conscious dining",
        "note": "Warm vegetable soba or local fish lunch with Mt. Fuji views.",
        "transit": null,
        "mapQuery": "Lake Kawaguchi"
      },
      {
        "time": "13:30–15:30",
        "title": "Lake Kawaguchi & Oishi Park",
        "costJpy": 0,
        "costMyr": 0,
        "category": "sightseeing",
        "halal": null,
        "note": "Panoramic lakeside stroll at Oishi Park with unobstructed reflections of Mount Fuji across the water.",
        "transit": "Retro bus",
        "mapQuery": "Oishi Park Lake Kawaguchi"
      },
      {
        "time": "15:30–16:30",
        "title": "Fuji souvenirs & matcha tea break",
        "costJpy": 800,
        "costMyr": 24,
        "category": "shopping",
        "halal": null,
        "note": "Browse Fuji berry treats, local crafts, and hot matcha.",
        "transit": "Walking",
        "mapQuery": "Kawaguchiko Herb Hall"
      },
      {
        "time": "16:30–18:30",
        "title": "Mt. Fuji → Tokyo (bus/train return)",
        "costJpy": 2200,
        "costMyr": 66,
        "category": "transit",
        "halal": null,
        "note": "Return express coach back to central Tokyo.",
        "transit": "~2 hrs | ~2,200 JPY (66 MYR) pp",
        "mapQuery": "Shinjuku Station"
      },
      {
        "time": "18:30–20:00",
        "title": "Dinner @ Halal Wagyu Yakiniku Panga Tokyo / HALAL SAKURA",
        "costJpy": 3000,
        "costMyr": 90,
        "category": "food",
        "halal": "certified",
        "halalNote": "Halal: halal-certified",
        "note": "Delicious Halal dinner in Tokyo after the mountain day trip.",
        "transit": "Transit",
        "mapQuery": "Halal Wagyu Yakiniku Panga Tokyo"
      },
      {
        "time": "20:00–21:00",
        "title": "Return to Tokyo Hotel",
        "costJpy": 240,
        "costMyr": 7,
        "category": "logistics",
        "halal": null,
        "note": "Relax and prepare for tomorrow's Godzilla & Akihabara shopping day.",
        "transit": "Subway to hotel",
        "mapQuery": "Hotel Tavinos Asakusa Tokyo"
      }
    ]
  },
  {
    "day": 8,
    "date": "Sat, 23 Jan 2027",
    "city": "Tokyo",
    "cityTag": "Godzilla + Akihabara + Souvenirs",
    "weather": "7°C • Electric City Lights",
    "theme": "🦖 Godzilla Head Shinjuku → ⚡ Akihabara Tech Shopping → 🛍️ Ameyoko Thrifting",
    "image": "./images/godzilla-shinjuku.jpg",
    "hotel": {
      "name": "Tokyo Hotel (Final Night)",
      "nights": "Night 4 of 4 • Check-out 9:30am tomorrow",
      "notes": "Organize baggage & tax-free shopping receipts for tomorrow's airport check-in",
      "mapQuery": "Hotel Tavinos Asakusa Tokyo"
    },
    "activities": [
      {
        "time": "08:00–09:00",
        "title": "Breakfast",
        "costJpy": 600,
        "costMyr": 18,
        "category": "food",
        "halal": "caution",
        "halalNote": "Simple breakfast",
        "note": "Breakfast before heading out for full Tokyo shopping day.",
        "transit": null,
        "mapQuery": "Tokyo Hotel"
      },
      {
        "time": "09:00–10:00",
        "title": "Subway to Shinjuku Kabukicho",
        "costJpy": 240,
        "costMyr": 7,
        "category": "transit",
        "halal": null,
        "note": "Tokyo Metro / JR Yamanote Line to Shinjuku Station.",
        "transit": "~30 min | ~240 JPY (7 MYR) pp",
        "mapQuery": "Shinjuku Station"
      },
      {
        "time": "10:00–11:00",
        "title": "Hotel Gracery Shinjuku (Godzilla head photo stop)",
        "costJpy": 0,
        "costMyr": 0,
        "category": "sightseeing",
        "halal": null,
        "note": "Iconic life-sized roaring Godzilla head monument atop the Toho building terrace in Kabukicho. Snap epic photos from street level!",
        "transit": "Short walk from Shinjuku East Exit",
        "mapQuery": "Godzilla Head Hotel Gracery Shinjuku"
      },
      {
        "time": "11:00–12:00",
        "title": "Transit Shinjuku → Akihabara (JR train)",
        "costJpy": 200,
        "costMyr": 6,
        "category": "transit",
        "halal": null,
        "note": "JR Chuo-Sobu Line direct from Shinjuku to Akihabara Station.",
        "transit": "~20 min | ~200 JPY (6 MYR) pp",
        "mapQuery": "Akihabara Station"
      },
      {
        "time": "12:00–15:00",
        "title": "Akihabara Electric Town (shopping + arcades)",
        "costJpy": 2000,
        "costMyr": 60,
        "category": "shopping",
        "halal": "certified",
        "halalNote": "Halal lunch in Akiba / arcade games",
        "note": "Tech & camera gadget comparison (Yodobashi Akiba 9-floor complex, BicCamera, PC parts stalls) & SEGA retro arcades.",
        "transit": "Walking",
        "mapQuery": "Yodobashi Akiba"
      },
      {
        "time": "15:15–16:30",
        "title": "Don Quijote Akihabara (souvenirs + snacks)",
        "costJpy": 0,
        "costMyr": 0,
        "category": "shopping",
        "halal": null,
        "note": "Mega discount duty-free floor: Japanese matcha KitKats, pocky, specialty stationery, and travel gifts.",
        "transit": "Short walk",
        "mapQuery": "Don Quijote Akihabara"
      },
      {
        "time": "16:30–17:15",
        "title": "Transit / walk to Ueno",
        "costJpy": 150,
        "costMyr": 5,
        "category": "transit",
        "halal": null,
        "note": "Stroll or 1 stop train to Ueno Station.",
        "transit": "~15 min",
        "mapQuery": "Ueno Station"
      },
      {
        "time": "17:15–19:00",
        "title": "Ameyoko Shopping Street & Ueno Park (thrifting + bargain shopping)",
        "costJpy": 0,
        "costMyr": 0,
        "category": "shopping",
        "halal": null,
        "note": "Lively outdoor market beneath the elevated railway arches: vintage clothing thrifting, streetwear stalls, discount sneakers, and Japanese snacks.",
        "transit": "Walking",
        "mapQuery": "Ameyoko Shopping Street Ueno"
      },
      {
        "time": "19:00–20:30",
        "title": "Farewell Dinner @ HALAL SAKURA or Gyumon Ramen",
        "costJpy": 2000,
        "costMyr": 60,
        "category": "food",
        "halal": "certified",
        "halalNote": "Halal: halal-certified",
        "note": "Celebratory final dinner in Tokyo.",
        "transit": "Short transit",
        "mapQuery": "HALAL SAKURA Tokyo"
      },
      {
        "time": "20:30–22:00",
        "title": "Return to Tokyo Hotel & final packing",
        "costJpy": 0,
        "costMyr": 0,
        "category": "logistics",
        "halal": null,
        "note": "Pack all luggage, organize duty-free receipts, and get ready for departure flight tomorrow.",
        "transit": "To hotel",
        "mapQuery": "Hotel Tavinos Asakusa Tokyo"
      }
    ]
  },
  {
    "day": 9,
    "date": "Sun, 24 Jan 2027",
    "city": "Tokyo → Narita",
    "cityTag": "Departure Day",
    "weather": "7°C • Clear Flight Skies",
    "theme": "🧳 Final Souvenirs → Skyliner Express → Narita Airport 16:50 Flight ✈️",
    "image": "./images/tokyo-sensoji.jpg",
    "hotel": {
      "name": "Tokyo Hotel",
      "nights": "Check-out Day (by 9:30am)",
      "notes": "Luggage check-out and transfer to Narita International Airport",
      "mapQuery": "Hotel Tavinos Asakusa Tokyo"
    },
    "activities": [
      {
        "time": "08:00–09:00",
        "title": "Breakfast",
        "costJpy": 600,
        "costMyr": 18,
        "category": "food",
        "halal": "caution",
        "halalNote": "Simple breakfast",
        "note": "Final morning breakfast in Tokyo.",
        "transit": null,
        "mapQuery": "Asakusa Cafe"
      },
      {
        "time": "09:00–10:00",
        "title": "Hotel check-out & final bag zip",
        "costJpy": 0,
        "costMyr": 0,
        "category": "logistics",
        "halal": null,
        "note": "Check out from Tokyo hotel by 9:30am–10:00am and roll bags to transit station.",
        "transit": null,
        "mapQuery": "Hotel Tavinos Asakusa Tokyo"
      },
      {
        "time": "10:30–13:30",
        "title": "Tokyo → Narita Airport (train)",
        "costJpy": 2570,
        "costMyr": 77,
        "category": "transit",
        "halal": null,
        "note": "Board Keisei Skyliner from Keisei Ueno / Nippori (approx 41 min non-stop) directly into Narita Airport (NRT). Arrive 13:30–14:00.",
        "transit": "~41 min train | ~2,570 JPY (77 MYR) pp",
        "mapQuery": "Keisei Ueno Station"
      },
      {
        "time": "13:30–14:00",
        "title": "Arrive Narita International Airport (NRT)",
        "costJpy": 0,
        "costMyr": 0,
        "category": "logistics",
        "halal": null,
        "note": "Arrive at airport terminal with comfortable 3-hour pre-flight buffer.",
        "transit": null,
        "mapQuery": "Narita International Airport"
      },
      {
        "time": "13:45–15:45",
        "title": "Narita Airport check-in & duty-free souvenirs",
        "costJpy": 0,
        "costMyr": 0,
        "category": "shopping",
        "halal": null,
        "note": "Baggage drop, tax-free customs digital scan, security clearance, and last-minute duty-free shopping (Tokyo Banana, Shiroi Koibito cookies).",
        "transit": "Airport Terminal",
        "mapQuery": "Narita International Airport Terminal 1"
      },
      {
        "time": "15:45–16:50",
        "title": "Boarding gate relaxation",
        "costJpy": 0,
        "costMyr": 0,
        "category": "logistics",
        "halal": null,
        "note": "Proceed to departure gate for final boarding call.",
        "transit": null,
        "mapQuery": "Narita Airport Departure Gates"
      },
      {
        "time": "16:50",
        "title": "Depart NRT → KUL (Booked Flight) ✈️",
        "costJpy": 0,
        "costMyr": 0,
        "category": "transit",
        "halal": null,
        "note": "Safe flight back home to Kuala Lumpur! End of 9-day Japan Winter Expedition.",
        "transit": "Booked Flight",
        "mapQuery": "Narita International Airport"
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
  {
    "id": "stay-plum-osaka",
    "title": "Osaka Stay: Plum Hotel",
    "dates": "16–18 Jan (2 Nights) • In: 1:00pm D1 / Out: 9:00am D3",
    "category": "hotel",
    "detail": "Central Osaka base near Namba transport hubs. Early luggage drop upon arrival from KIX."
  },
  {
    "id": "stay-rinn-kyoto",
    "title": "Kyoto Stay: Rinn Shirakawa South",
    "dates": "18–20 Jan (2 Nights) • In: 3:00pm D3 / Out: 12:00pm D5",
    "category": "hotel",
    "detail": "Boutique traditional machiya accommodation near picturesque Shirakawa canal & Gion."
  },
  {
    "id": "stay-tokyo-hotel",
    "title": "Tokyo Hotel (Choose 1 / Central Base)",
    "dates": "20–24 Jan (4 Nights) • In: 5:00pm D5 / Out: 9:30am D9",
    "category": "hotel",
    "detail": "Central Tokyo hotel base (e.g. Asakusa / Ueno / Shinjuku) for GALA Yuzawa, Mt. Fuji & departure."
  },
  {
    "id": "train-kyoto-tokyo",
    "title": "Tokaido Shinkansen: Kyoto → Tokyo",
    "dates": "20 Jan (Day 5) • 14:00–16:30",
    "category": "transit",
    "detail": "High-speed bullet train from Kyoto Station to Tokyo Station (~2 hrs 15 min, ~14,000 JPY pp)."
  },
  {
    "id": "train-gala-yuzawa",
    "title": "Joetsu Shinkansen: Tokyo ↔ GALA Yuzawa",
    "dates": "21 Jan (Day 6) • 07:00 & 16:00",
    "category": "transit",
    "detail": "Direct Shinkansen into ski resort terminal lobby for snow activities & sledding (~7,500 JPY pp each way)."
  },
  {
    "id": "trip-mt-fuji",
    "title": "Mt. Fuji & Kawaguchiko Day Trip Coach",
    "dates": "22 Jan (Day 7) • 09:00–18:30",
    "category": "transit",
    "detail": "Highway express coach Tokyo ↔ Lake Kawaguchiko & Chureito Pagoda (~2,200 JPY pp each way)."
  },
  {
    "id": "train-narita-skyliner",
    "title": "Keisei Skyliner Express: Tokyo → Narita Airport",
    "dates": "24 Jan (Day 9) • 10:30–13:30",
    "category": "transit",
    "detail": "Non-stop 41-minute airport express train from Ueno/Nippori to Narita Terminal 1/2 (~2,570 JPY pp)."
  },
  {
    "id": "flight-booked",
    "title": "Return Flight: NRT → KUL (16:50 Departure)",
    "dates": "24 Jan (Day 9) • 16:50 Flight",
    "category": "flight",
    "detail": "Departure from Narita International Airport. Arrive terminal by 13:30 for 3-hour buffer."
  }
];

// Budget Data Multipliers
const BUDGET_DATA = {
  "food": {
    "minJpy": 31500,
    "maxJpy": 45000,
    "minMyr": 945,
    "maxMyr": 1350
  },
  "intercity": {
    "minJpy": 28000,
    "maxJpy": 35000,
    "minMyr": 840,
    "maxMyr": 1050
  },
  "local": {
    "minJpy": 6000,
    "maxJpy": 9000,
    "minMyr": 180,
    "maxMyr": 270
  },
  "attractions": {
    "minJpy": 6500,
    "maxJpy": 10000,
    "minMyr": 195,
    "maxMyr": 300
  },
  "misc": {
    "minJpy": 5000,
    "maxJpy": 10000,
    "minMyr": 150,
    "maxMyr": 300
  },
  "totalNonHotel": {
    "minJpy": 77000,
    "maxJpy": 109000,
    "minMyr": 2310,
    "maxMyr": 3270
  },
  "targetHotel": {
    "minJpy": 170000,
    "maxJpy": 215000,
    "minMyr": 5100,
    "maxMyr": 6450
  }
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
  // 1. Initialize Lenis Smooth Scroll
  if (typeof Lenis !== "undefined") {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  // 2. Run Preloader Animation
  initPreloader();

  // 3. Render Components
  renderChecklist();

  // 4. Start Live Clocks & Event Listeners
  startLiveClocks();

  // 5. Initialize Lucide Icons
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
// 11. OVERKILL ADVANCE BOOKING CHECKLIST ENGINE
// ==========================================

let activeChecklistFilter = "all";

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

function toggleChecklistItem(id) {
  const current = getSavedChecklist();
  const newState = !current[id];
  saveChecklistState(id, newState);
}
window.toggleChecklistItem = toggleChecklistItem;

function toggleAllChecklist(checkAll) {
  const current = {};
  ADVANCE_BOOKINGS.forEach(item => {
    current[item.id] = checkAll;
  });
  try {
    localStorage.setItem("japan_winter_checklist_2026", JSON.stringify(current));
  } catch (e) {}
  updateChecklistProgress();
  renderChecklist();

  if (checkAll) {
    showToast("🎉 All 7 Advance Bookings marked as Secured!");
  } else {
    showToast("Checklist reset to pending.");
  }
}
window.toggleAllChecklist = toggleAllChecklist;

function filterChecklist(category, btn) {
  activeChecklistFilter = category;
  
  const pills = document.querySelectorAll(".checklist-filter-pill");
  pills.forEach(p => {
    p.classList.remove("active", "bg-purple-600", "text-white", "font-bold", "border-purple-500/50");
    p.classList.add("text-slate-300", "bg-[#090D15]", "border-white/10");
  });

  if (btn) {
    btn.classList.add("active", "bg-purple-600", "text-white", "font-bold", "border-purple-500/50");
    btn.classList.remove("text-slate-300", "bg-[#090D15]", "border-white/10");
  }

  renderChecklist();
}
window.filterChecklist = filterChecklist;

function renderChecklist() {
  const container = document.getElementById("checklist-items-container");
  if (!container) return;

  const saved = getSavedChecklist();
  
  const filtered = ADVANCE_BOOKINGS.filter(item => {
    if (activeChecklistFilter === "all") return true;
    return item.category === activeChecklistFilter;
  });

  if (!filtered.length) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-400 font-mono text-xs">
        No items found for this category.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const isChecked = !!saved[item.id];
    const catBadgeColor = item.category === 'hotel' 
      ? 'bg-purple-950/80 text-purple-300 border-purple-800/60' 
      : (item.category === 'transit' ? 'bg-sky-950/80 text-sky-300 border-sky-800/60' : 'bg-rose-950/80 text-rose-300 border-rose-800/60');

    return `
      <div 
        class="checklist-card-overkill ${isChecked ? 'checklist-card-checked' : ''} group"
        onclick="toggleChecklistItem('${item.id}')"
      >
        <div class="flex items-start gap-4">
          
          <!-- Custom Circular Toggle Ring -->
          <div class="check-toggle-btn mt-0.5">
            <i data-lucide="check" class="w-4 h-4 check-toggle-icon"></i>
          </div>

          <!-- Main Content Area -->
          <div class="flex-grow space-y-1.5 select-none">
            
            <!-- Top Metadata Badges -->
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div class="flex items-center gap-2">
                <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${catBadgeColor} border">
                  ${item.categoryLabel}
                </span>
                <span class="text-[10px] font-mono text-gold font-bold">
                  ${item.dates}
                </span>
              </div>

              <span class="text-[10px] font-mono px-2 py-0.5 rounded ${isChecked ? 'bg-emerald-950 text-emerald-300 font-bold border border-emerald-800' : 'bg-slate-900 text-slate-400 border border-white/10'}">
                ${isChecked ? '✓ CONFIRMED' : 'ACTION PENDING'}
              </span>
            </div>

            <!-- Title -->
            <h4 class="text-sm sm:text-base font-bold transition-colors ${isChecked ? 'line-through text-slate-400' : 'text-white group-hover:text-purple-300'} font-sans">
              ${item.title}
            </h4>

            <!-- Detail & Price Tag -->
            <p class="text-xs text-slate-400 leading-relaxed font-sans">
              ${item.detail}
            </p>

            <div class="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
              <span class="text-slate-400 flex items-center gap-1">
                <i data-lucide="tag" class="w-3 h-3 text-gold"></i>
                <span class="text-slate-300 font-semibold">${item.priceEst}</span>
              </span>
              <span class="text-slate-500 group-hover:text-gold transition-colors text-[10px]">
                ${isChecked ? 'Click to uncheck' : 'Click to confirm →'}
              </span>
            </div>

          </div>

        </div>
      </div>
    `;
  }).join("");

  updateChecklistProgress();

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function updateChecklistProgress() {
  const saved = getSavedChecklist();
  const total = ADVANCE_BOOKINGS.length;
  const completed = ADVANCE_BOOKINGS.filter(item => !!saved[item.id]).length;
  const pct = Math.round((completed / total) * 100);

  const textEl = document.getElementById("checklist-progress-text");
  const barEl = document.getElementById("checklist-progress-bar");
  const statusBadge = document.getElementById("checklist-status-badge");
  const banner = document.getElementById("checklist-celebration-banner");

  if (textEl) textEl.textContent = `${completed} of ${total} Booked (${pct}%)`;
  if (barEl) barEl.style.width = `${pct}%`;

  if (statusBadge) {
    if (completed === total) {
      statusBadge.className = "px-2 py-0.5 rounded bg-emerald-500 text-black font-bold text-[10px] shadow-[0_0_12px_rgba(16,185,129,0.8)]";
      statusBadge.textContent = "100% READY 🎉";
    } else if (completed > 0) {
      statusBadge.className = "px-2 py-0.5 rounded bg-purple-950/90 text-purple-300 font-bold border border-purple-800 text-[10px]";
      statusBadge.textContent = `${total - completed} REMAINING`;
    } else {
      statusBadge.className = "px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 font-bold border border-amber-800/60 text-[10px]";
      statusBadge.textContent = "PENDING ACTION";
    }
  }

  if (banner) {
    if (completed === total) {
      banner.classList.remove("hidden");
    } else {
      banner.classList.add("hidden");
    }
  }
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

// ==========================================
// 14. OVERKILL BUDGET COUNTER & CURRENCY ENGINE
// ==========================================

let currentBudgetCurrency = 'MYR'; // 'MYR' or 'JPY'
let currentBudgetPax = 1;          // 1 or 4
let hasBudgetAnimatedOnce = false;

function setBudgetPax(pax) {
  currentBudgetPax = pax;
  
  const p1 = document.getElementById("pax-1-btn");
  const p4 = document.getElementById("pax-4-btn");
  if (p1 && p4) {
    if (pax === 1) {
      p1.classList.add("active");
      p4.classList.remove("active");
    } else {
      p4.classList.add("active");
      p1.classList.remove("active");
    }
  }

  const totalLabel = document.getElementById("total-card-label");
  if (totalLabel) {
    totalLabel.textContent = pax === 1 ? "Non-Hotel Total / Pax" : "Group Total (4 Pax)";
  }

  updateBudgetCounters(true);
}
window.setBudgetPax = setBudgetPax;

function setBudgetCurrency(curr) {
  currentBudgetCurrency = curr;

  const cMyr = document.getElementById("curr-myr-btn");
  const cJpy = document.getElementById("curr-jpy-btn");
  if (cMyr && cJpy) {
    if (curr === 'MYR') {
      cMyr.classList.add("active");
      cJpy.classList.remove("active");
    } else {
      cJpy.classList.add("active");
      cMyr.classList.remove("active");
    }
  }

  updateBudgetCounters(true);
}
window.setBudgetCurrency = setBudgetCurrency;

// Smooth cubic ease out rolling number animation
function animateValue(element, start, end, duration, prefix = "") {
  if (!element) return;
  const startTime = performance.now();
  const diff = end - start;

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // EaseOutCubic curve
    const ease = 1 - Math.pow(1 - progress, 3);
    const currentVal = Math.round(start + diff * ease);

    element.textContent = `${prefix}${currentVal.toLocaleString()}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = `${prefix}${end.toLocaleString()}`;
    }
  }

  requestAnimationFrame(update);
}

function updateBudgetCounters(animate = true) {
  const isMyr = currentBudgetCurrency === 'MYR';
  const prefixSymbol = isMyr ? 'RM' : '¥';
  const duration = animate ? 850 : 0;

  // Update all prefix spans
  document.querySelectorAll(".curr-prefix").forEach(span => {
    span.textContent = prefixSymbol;
  });

  const configs = [
    {
      minId: 'cnt-food-min',
      maxId: 'cnt-food-max',
      subId: 'sub-food-text',
      myr: [945, 1350],
      jpy: [31500, 45000]
    },
    {
      minId: 'cnt-transit-min',
      maxId: 'cnt-transit-max',
      subId: 'sub-transit-text',
      myr: [489, 588],
      jpy: [16300, 19600]
    },
    {
      minId: 'cnt-local-min',
      maxId: 'cnt-local-max',
      subId: 'sub-local-text',
      myr: [246, 399],
      jpy: [8200, 13300]
    },
    {
      minId: 'cnt-total-min',
      maxId: 'cnt-total-max',
      subId: 'sub-total-text',
      myr: [1830, 2640],
      jpy: [61000, 88000]
    }
  ];

  configs.forEach(cfg => {
    const minEl = document.getElementById(cfg.minId);
    const maxEl = document.getElementById(cfg.maxId);
    const subEl = document.getElementById(cfg.subId);

    const mult = currentBudgetPax;
    const minVal = isMyr ? cfg.myr[0] * mult : cfg.jpy[0] * mult;
    const maxVal = isMyr ? cfg.myr[1] * mult : cfg.jpy[1] * mult;

    if (minEl && maxEl) {
      if (animate) {
        animateValue(minEl, 0, minVal, duration, "");
        animateValue(maxEl, 0, maxVal, duration, "");
      } else {
        minEl.textContent = minVal.toLocaleString();
        maxEl.textContent = maxVal.toLocaleString();
      }
    }

    if (subEl) {
      const altMin = isMyr ? (cfg.jpy[0] * mult).toLocaleString() : (cfg.myr[0] * mult).toLocaleString();
      const altMax = isMyr ? (cfg.jpy[1] * mult).toLocaleString() : (cfg.myr[1] * mult).toLocaleString();
      const suffix = currentBudgetPax === 1 ? ' / pax' : ' (Group 4x)';
      
      if (isMyr) {
        subEl.textContent = `~${altMin} – ${altMax} JPY${suffix}`;
      } else {
        subEl.textContent = `~RM ${altMin} – ${altMax}${suffix}`;
      }
    }
  });
}

// ==========================================
// 15. INTERACTIVE HERO RED ACTIVE BAR
// ==========================================

function initHeroHighlightsBar() {
  const activeBar = document.getElementById("hero-active-bar");
  const indicator = document.getElementById("hero-active-col-indicator");
  const columns = document.querySelectorAll(".hero-highlight-col");
  const heroImg = document.getElementById("hero-banner-img");

  if (!activeBar || !columns.length) return;

  let currentIndex = 0;
  let autoSlideTimer = null;
  let isHovered = false;

  function setActiveColumn(index) {
    currentIndex = index;
    activeBar.style.transform = `translateX(${index * 100}%)`;

    if (indicator) {
      indicator.textContent = `0${index + 1} / 03`;
    }

    // Smooth image transition matching day highlight
    const targetImg = columns[index]?.dataset?.img;
    if (heroImg && targetImg) {
      const currentSrc = heroImg.getAttribute('src');
      if (currentSrc !== targetImg) {
        heroImg.style.opacity = "0.4";
        setTimeout(() => {
          heroImg.setAttribute('src', targetImg);
          heroImg.src = targetImg;
          heroImg.style.opacity = "1";
        }, 120);
      }
    }

    columns.forEach((col, idx) => {
      if (idx === index) {
        col.classList.remove("opacity-70");
        col.classList.add("opacity-100");
      } else {
        col.classList.remove("opacity-100");
        col.classList.add("opacity-70");
      }
    });
  }

  columns.forEach((col, idx) => {
    col.addEventListener("mouseenter", () => {
      isHovered = true;
      setActiveColumn(idx);
    });
    col.addEventListener("mouseleave", () => {
      isHovered = false;
    });
  });

  // Gentle auto-cycle every 5s
  autoSlideTimer = setInterval(() => {
    if (!isHovered) {
      const nextIdx = (currentIndex + 1) % columns.length;
      setActiveColumn(nextIdx);
    }
  }, 5000);
}

// ==========================================
// 16. SITE-WIDE SCROLL REVEAL OBSERVER
// ==========================================

function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal-init");
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
        
        // Trigger number ticker animation when budget section enters viewport
        if (entry.target.id === "budget-section" && !hasBudgetAnimatedOnce) {
          hasBudgetAnimatedOnce = true;
          updateBudgetCounters(true);
        }

        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  revealElements.forEach(el => observer.observe(el));
}

// ==========================================
// 17. MOUNT FUJI PRELOADER ENGINE
// ==========================================

function initPreloader() {
  const preloader = document.getElementById("fuji-preloader");
  if (!preloader) return;

  const bar = document.getElementById("preloader-bar");
  const percentText = document.getElementById("preloader-percent");
  const statusText = document.getElementById("preloader-status-text");
  const skipBtn = document.getElementById("skip-preloader-btn");

  let progress = 0;
  const statuses = [
    { at: 0, text: "Preparing journey..." },
    { at: 35, text: "Mapping Kansai & Kanto routes..." },
    { at: 70, text: "Verifying 100% Halal spots..." },
    { at: 95, text: "Ready for Japan." }
  ];

  function dismiss() {
    preloader.classList.add("loaded");
    setTimeout(() => {
      preloader.remove();
      if (!hasBudgetAnimatedOnce) {
        const budgetSec = document.getElementById("budget-section");
        if (budgetSec && budgetSec.getBoundingClientRect().top < window.innerHeight) {
          hasBudgetAnimatedOnce = true;
          updateBudgetCounters(true);
        }
      }
    }, 650);
  }

  if (skipBtn) {
    skipBtn.addEventListener("click", dismiss);
  }

  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 14) + 8;
    if (progress > 100) progress = 100;

    if (bar) bar.style.width = `${progress}%`;
    if (percentText) percentText.textContent = `${progress}%`;

    const currStatus = statuses.slice().reverse().find(s => progress >= s.at);
    if (currStatus && statusText) {
      statusText.textContent = currStatus.text;
    }

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(dismiss, 350);
    }
  }, 80);
}

// ==========================================
// 18. LENIS SMOOTH SCROLL BOOTSTRAP
// ==========================================

function initLenis() {
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
}

// ==========================================
// 19. MAIN APPLICATION INITIALIZATION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  initLenis();
  initPreloader();
  startLiveClocks();
  initHeroHighlightsBar();
  renderChecklist();
  renderHalalDirectory();
  setupEventListeners();
  initScrollReveal();

  if (window.lucide) {
    window.lucide.createIcons();
  }
});


