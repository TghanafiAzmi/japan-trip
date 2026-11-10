/**
 * JAPAN WINTER 2027 - LIVE DAILY ROADMAP & TRANSIT ENGINE
 * 100% Free OpenStreetMap & CartoDB Dark Matter Leaflet Maps.
 * Clearly connects HOTELS 🏨, TRAINS & STATIONS 🚆, and SIGHTSEEING 📍.
 */

const CARTO_API_KEY = "cb1_55ym_1_992e6f8a3c0350305ec5dcf4";
const ROADMAP_DATA = [
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
        "mapQuery": "Kansai International Airport",
        "lat": 34.4347,
        "lng": 135.2443
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
        "mapQuery": "Namba Station Osaka",
        "lat": 34.6629,
        "lng": 135.5003
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
        "mapQuery": "Plum Hotel Osaka",
        "lat": 34.6565,
        "lng": 135.4985
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
        "mapQuery": "Halal Ramen Naniwaya Osaka",
        "lat": 34.6682,
        "lng": 135.505
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
        "mapQuery": "Plum Hotel Osaka",
        "lat": 34.6565,
        "lng": 135.4985
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
        "mapQuery": "Shinsaibashi-suji Shopping Street",
        "lat": 34.671,
        "lng": 135.5006
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
        "mapQuery": "Matsuri Halal Restaurant Osaka",
        "lat": 34.6937,
        "lng": 135.4746
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
        "mapQuery": "Plum Hotel Osaka",
        "lat": 34.6565,
        "lng": 135.4985
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
        "mapQuery": "7-Eleven Namba Osaka",
        "lat": 34.661,
        "lng": 135.5015
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
        "mapQuery": "Kintetsu-Nara Station",
        "lat": 34.6844,
        "lng": 135.8279
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
        "mapQuery": "Nara Park",
        "lat": 34.6851,
        "lng": 135.843
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
        "mapQuery": "Osaka Namba Station",
        "lat": 34.666,
        "lng": 135.5
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
        "mapQuery": "Plum Hotel Osaka",
        "lat": 34.6565,
        "lng": 135.4985
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
        "mapQuery": "Umeda Station Osaka",
        "lat": 34.7025,
        "lng": 135.496
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
        "mapQuery": "Umeda Sky Building Floating Garden Observatory",
        "lat": 34.7052,
        "lng": 135.4897
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
        "mapQuery": "Ali's Kitchen Osaka Halal",
        "lat": 34.6744,
        "lng": 135.5009
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
        "mapQuery": "Plum Hotel Osaka",
        "lat": 34.6565,
        "lng": 135.4985
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
        "mapQuery": "Plum Hotel Osaka",
        "lat": 34.6565,
        "lng": 135.4985
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
        "mapQuery": "Plum Hotel Osaka",
        "lat": 34.6565,
        "lng": 135.4985
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
        "mapQuery": "Kyoto-Kawaramachi Station",
        "lat": 35.0037,
        "lng": 135.7686
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
        "mapQuery": "Rinn Shirakawa South Kyoto",
        "lat": 35.0062,
        "lng": 135.776
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
        "mapQuery": "Halal Ramen Ayam Ya Karasuma Kyoto",
        "lat": 34.9996,
        "lng": 135.7583
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
        "mapQuery": "Kamo River Kyoto",
        "lat": 35.0037,
        "lng": 135.7725
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
        "mapQuery": "Rinn Shirakawa South Kyoto",
        "lat": 35.0062,
        "lng": 135.776
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
        "mapQuery": "Shirakawa Canal Gion",
        "lat": 35.0051,
        "lng": 135.7745
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
        "mapQuery": "Halal Wagyu Yakiniku Panga Kyoto",
        "lat": 35.0042,
        "lng": 135.7763
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
        "mapQuery": "Rinn Shirakawa South Kyoto",
        "lat": 35.0062,
        "lng": 135.776
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
        "mapQuery": "Gion Kyoto",
        "lat": 35.0037,
        "lng": 135.777
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
        "mapQuery": "Kiyomizu-dera",
        "lat": 34.9949,
        "lng": 135.785
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
        "mapQuery": "Sannenzaka Ninenzaka Kyoto",
        "lat": 34.9999,
        "lng": 135.7816
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
        "mapQuery": "Shijo Kawaramachi",
        "lat": 35.0037,
        "lng": 135.769
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
        "mapQuery": "Nishiki Market",
        "lat": 35.005,
        "lng": 135.765
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
        "mapQuery": "Rinn Shirakawa South Kyoto",
        "lat": 35.0062,
        "lng": 135.776
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
        "mapQuery": "Kinkakuji-michi Bus Stop",
        "lat": 35.038,
        "lng": 135.731
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
        "mapQuery": "Kinkaku-ji",
        "lat": 35.0394,
        "lng": 135.7292
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
        "mapQuery": "Gion-Shijo Station",
        "lat": 35.0038,
        "lng": 135.772
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
        "mapQuery": "Halal Wagyu Yakiniku Panga Kyoto",
        "lat": 35.0042,
        "lng": 135.7763
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
        "mapQuery": "Rinn Shirakawa South Kyoto",
        "lat": 35.0062,
        "lng": 135.776
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
        "mapQuery": "Rinn Shirakawa South Kyoto",
        "lat": 35.0062,
        "lng": 135.776
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
        "mapQuery": "Kawaramachi Kyoto",
        "lat": 35.0037,
        "lng": 135.7686
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
        "mapQuery": "Kyoto Station",
        "lat": 34.9858,
        "lng": 135.7588
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
        "mapQuery": "Kyoto Station",
        "lat": 34.9858,
        "lng": 135.7588
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
        "mapQuery": "Tokyo Station",
        "lat": 35.6812,
        "lng": 139.7671
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
        "mapQuery": "Hotel Tavinos Asakusa Tokyo",
        "lat": 35.7171,
        "lng": 139.7915
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
        "mapQuery": "Hotel Tavinos Asakusa Tokyo",
        "lat": 35.7171,
        "lng": 139.7915
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
        "mapQuery": "HALAL SAKURA Tokyo",
        "lat": 35.7225,
        "lng": 139.7795
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
        "mapQuery": "Senso-ji Asakusa Tokyo",
        "lat": 35.7148,
        "lng": 139.7967
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
        "mapQuery": "Tokyo Station",
        "lat": 35.6812,
        "lng": 139.7671
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
        "mapQuery": "Gala-Yuzawa Station",
        "lat": 36.9508,
        "lng": 138.8005
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
        "mapQuery": "GALA Yuzawa Snow Resort",
        "lat": 36.9535,
        "lng": 138.795
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
        "mapQuery": "GALA Yuzawa Snow Resort",
        "lat": 36.9535,
        "lng": 138.795
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
        "mapQuery": "GALA Yuzawa Rest House",
        "lat": 36.952,
        "lng": 138.798
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
        "mapQuery": "GALA Yuzawa Observation Deck",
        "lat": 36.956,
        "lng": 138.792
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
        "mapQuery": "Gala-Yuzawa Station",
        "lat": 36.9508,
        "lng": 138.8005
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
        "mapQuery": "Tokyo Station",
        "lat": 35.6812,
        "lng": 139.7671
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
        "mapQuery": "Gyumon Halal Ramen Asakusa",
        "lat": 35.7118,
        "lng": 139.7955
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
        "mapQuery": "Hotel Tavinos Asakusa Tokyo",
        "lat": 35.7171,
        "lng": 139.7915
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
        "mapQuery": "Tokyo Hotel",
        "lat": 35.7171,
        "lng": 139.7915
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
        "mapQuery": "Kawaguchiko Station",
        "lat": 35.4982,
        "lng": 138.7688
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
        "mapQuery": "Chureito Pagoda Arakurayama",
        "lat": 35.5015,
        "lng": 138.8016
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
        "mapQuery": "Lake Kawaguchi",
        "lat": 35.51,
        "lng": 138.755
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
        "mapQuery": "Oishi Park Lake Kawaguchi",
        "lat": 35.523,
        "lng": 138.745
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
        "mapQuery": "Kawaguchiko Herb Hall",
        "lat": 35.505,
        "lng": 138.761
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
        "mapQuery": "Shinjuku Station",
        "lat": 35.6896,
        "lng": 139.7006
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
        "mapQuery": "Halal Wagyu Yakiniku Panga Tokyo",
        "lat": 35.7078,
        "lng": 139.777
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
        "mapQuery": "Hotel Tavinos Asakusa Tokyo",
        "lat": 35.7171,
        "lng": 139.7915
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
        "mapQuery": "Tokyo Hotel",
        "lat": 35.7171,
        "lng": 139.7915
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
        "mapQuery": "Shinjuku Station",
        "lat": 35.6896,
        "lng": 139.7006
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
        "mapQuery": "Godzilla Head Hotel Gracery Shinjuku",
        "lat": 35.6953,
        "lng": 139.702
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
        "mapQuery": "Akihabara Station",
        "lat": 35.6983,
        "lng": 139.7731
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
        "mapQuery": "Yodobashi Akiba",
        "lat": 35.6987,
        "lng": 139.7747
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
        "mapQuery": "Don Quijote Akihabara",
        "lat": 35.7002,
        "lng": 139.7712
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
        "mapQuery": "Ueno Station",
        "lat": 35.7141,
        "lng": 139.7774
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
        "mapQuery": "Ameyoko Shopping Street Ueno",
        "lat": 35.7115,
        "lng": 139.7744
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
        "mapQuery": "HALAL SAKURA Tokyo",
        "lat": 35.7225,
        "lng": 139.7795
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
        "mapQuery": "Hotel Tavinos Asakusa Tokyo",
        "lat": 35.7171,
        "lng": 139.7915
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
        "mapQuery": "Asakusa Cafe",
        "lat": 35.7135,
        "lng": 139.793
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
        "mapQuery": "Hotel Tavinos Asakusa Tokyo",
        "lat": 35.7171,
        "lng": 139.7915
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
        "mapQuery": "Keisei Ueno Station",
        "lat": 35.7122,
        "lng": 139.7739
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
        "mapQuery": "Narita International Airport",
        "lat": 35.772,
        "lng": 140.3929
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
        "mapQuery": "Narita International Airport Terminal 1",
        "lat": 35.7647,
        "lng": 140.3863
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
        "mapQuery": "Narita Airport Departure Gates",
        "lat": 35.765,
        "lng": 140.387
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
        "mapQuery": "Narita International Airport",
        "lat": 35.772,
        "lng": 140.3929
      }
    ]
  }
];
const DAILY_TRANSIT_FLOW = {
  "1": {
    "hotel": {
      "name": "Plum Hotel Osaka",
      "area": "Namba Minami",
      "note": "Central base near Namba & Daikokucho stations",
      "mapQuery": "Plum Hotel Osaka"
    },
    "mainTrain": {
      "line": "Nankai Airport Express / JR Kansai Rapid",
      "route": "KIX Airport ➔ Namba Station",
      "time": "~45–60 min",
      "cost": "~¥1,000 (RM 30)"
    },
    "steps": [
      {
        "type": "flight",
        "title": "Arrive KIX",
        "icon": "✈️",
        "time": "09:45"
      },
      {
        "type": "transit",
        "title": "Nankai Express Train",
        "icon": "🚆",
        "time": "10:30",
        "transitNote": "~45 min direct to Namba"
      },
      {
        "type": "station",
        "title": "Namba Station",
        "icon": "🚉",
        "time": "12:00",
        "transitNote": "Walk ~10 min to hotel"
      },
      {
        "type": "hotel",
        "title": "Plum Hotel (Check-in / Bag drop)",
        "icon": "🏨",
        "time": "12:15"
      },
      {
        "type": "food",
        "title": "Halal Ramen Naniwaya",
        "icon": "🍜",
        "time": "13:00",
        "transitNote": "Walk ~8 min"
      },
      {
        "type": "attraction",
        "title": "Dotonbori & Shinsaibashi",
        "icon": "🏮",
        "time": "17:30",
        "transitNote": "Walk through arcades"
      },
      {
        "type": "food",
        "title": "Halal Matsuri Restaurant",
        "icon": "🍽️",
        "time": "19:00"
      },
      {
        "type": "hotel",
        "title": "Return to Plum Hotel",
        "icon": "🏨",
        "time": "21:00"
      }
    ]
  },
  "2": {
    "hotel": {
      "name": "Plum Hotel Osaka",
      "area": "Namba Minami",
      "note": "Night 2 of 2 in Osaka",
      "mapQuery": "Plum Hotel Osaka"
    },
    "mainTrain": {
      "line": "Kintetsu Nara Line Rapid Express",
      "route": "Osaka-Namba ➔ Kintetsu-Nara",
      "time": "~38 min",
      "cost": "~¥680 (RM 20)"
    },
    "steps": [
      {
        "type": "hotel",
        "title": "Plum Hotel (Depart)",
        "icon": "🏨",
        "time": "08:30"
      },
      {
        "type": "station",
        "title": "Osaka-Namba Station",
        "icon": "🚉",
        "time": "09:00",
        "transitNote": "Board Kintetsu Nara Line"
      },
      {
        "type": "station",
        "title": "Kintetsu-Nara Station",
        "icon": "🚉",
        "time": "09:45",
        "transitNote": "Walk ~5 min into park"
      },
      {
        "type": "attraction",
        "title": "Nara Park & Sacred Deer",
        "icon": "🦌",
        "time": "10:00"
      },
      {
        "type": "station",
        "title": "Kintetsu-Nara ➔ Osaka",
        "icon": "🚆",
        "time": "14:00",
        "transitNote": "~38 min train back"
      },
      {
        "type": "hotel",
        "title": "Plum Hotel (Rest & Prayer)",
        "icon": "🏨",
        "time": "15:00"
      },
      {
        "type": "transit",
        "title": "Osaka Metro Midosuji Line",
        "icon": "🚇",
        "time": "16:00",
        "transitNote": "Namba ➔ Umeda (~8 min)"
      },
      {
        "type": "attraction",
        "title": "Umeda Sky Building (Sunset)",
        "icon": "🌇",
        "time": "16:30"
      },
      {
        "type": "food",
        "title": "Ali's Kitchen Halal Pakistani",
        "icon": "🍛",
        "time": "18:30"
      },
      {
        "type": "hotel",
        "title": "Return to Plum Hotel",
        "icon": "🏨",
        "time": "20:30"
      }
    ]
  },
  "3": {
    "hotel": {
      "name": "Rinn Shirakawa South Kyoto",
      "area": "Gion / Shirakawa",
      "note": "Check-in new hotel base in Kyoto (Nights 3–4)",
      "mapQuery": "Rinn Shirakawa South Kyoto"
    },
    "mainTrain": {
      "line": "Hankyu Kyoto Line / Keihan Main Line",
      "route": "Osaka ➔ Kyoto-Kawaramachi",
      "time": "~45–50 min",
      "cost": "~¥410–600 (RM 12–18)"
    },
    "steps": [
      {
        "type": "hotel",
        "title": "Plum Hotel (Check-out)",
        "icon": "🏨",
        "time": "09:30"
      },
      {
        "type": "transit",
        "title": "Train Osaka ➔ Kyoto",
        "icon": "🚆",
        "time": "10:00",
        "transitNote": "~45 min to Kyoto-Kawaramachi"
      },
      {
        "type": "station",
        "title": "Kyoto-Kawaramachi Station",
        "icon": "🚉",
        "time": "11:00",
        "transitNote": "Walk ~8 min to hotel"
      },
      {
        "type": "hotel",
        "title": "Rinn Shirakawa South (Drop Bags)",
        "icon": "🏨",
        "time": "11:30"
      },
      {
        "type": "food",
        "title": "Halal Ramen Ayam Ya Karasuma",
        "icon": "🍜",
        "time": "12:00"
      },
      {
        "type": "hotel",
        "title": "Rinn Shirakawa South (Check-in & Rest)",
        "icon": "🏨",
        "time": "15:00"
      },
      {
        "type": "attraction",
        "title": "Gion Shirakawa Canal Walk",
        "icon": "🏮",
        "time": "16:30"
      },
      {
        "type": "food",
        "title": "Halal Wagyu Yakiniku Panga",
        "icon": "🥩",
        "time": "18:30"
      },
      {
        "type": "hotel",
        "title": "Return to Rinn Shirakawa South",
        "icon": "🏨",
        "time": "20:00"
      }
    ]
  },
  "4": {
    "hotel": {
      "name": "Rinn Shirakawa South Kyoto",
      "area": "Gion / Shirakawa",
      "note": "Night 2 in Kyoto",
      "mapQuery": "Rinn Shirakawa South Kyoto"
    },
    "mainTrain": {
      "line": "Kyoto City Bus #206 / #207 / #205",
      "route": "Gion ➔ Kiyomizu ➔ Nishiki ➔ Kinkaku-ji",
      "time": "~15–30 min per leg",
      "cost": "~¥230 per bus ride"
    },
    "steps": [
      {
        "type": "hotel",
        "title": "Rinn Shirakawa South (Depart)",
        "icon": "🏨",
        "time": "08:00"
      },
      {
        "type": "attraction",
        "title": "Kiyomizu-dera Temple",
        "icon": "⛩️",
        "time": "08:30",
        "transitNote": "Early morning quiet route"
      },
      {
        "type": "attraction",
        "title": "Sannenzaka & Ninenzaka",
        "icon": "🏮",
        "time": "10:30",
        "transitNote": "Scenic stone-paved stroll"
      },
      {
        "type": "attraction",
        "title": "Nishiki Market (Street Food)",
        "icon": "🥢",
        "time": "12:30"
      },
      {
        "type": "transit",
        "title": "Kyoto Bus #205 to Kinkaku-ji",
        "icon": "🚌",
        "time": "15:00",
        "transitNote": "~30 min bus"
      },
      {
        "type": "attraction",
        "title": "Kinkaku-ji (Golden Pavilion)",
        "icon": "🌟",
        "time": "15:30"
      },
      {
        "type": "transit",
        "title": "Bus return to Gion",
        "icon": "🚌",
        "time": "17:00"
      },
      {
        "type": "food",
        "title": "Halal Wagyu Panga or Ayam Ya",
        "icon": "🍜",
        "time": "18:00"
      },
      {
        "type": "hotel",
        "title": "Return to Rinn Shirakawa South",
        "icon": "🏨",
        "time": "20:00"
      }
    ]
  },
  "5": {
    "hotel": {
      "name": "Hotel Tavinos Asakusa Tokyo",
      "area": "Asakusa Tokyo",
      "note": "New Tokyo hotel base (Nights 5–8 until departure)",
      "mapQuery": "Hotel Tavinos Asakusa Tokyo"
    },
    "mainTrain": {
      "line": "JR Tokaido Shinkansen (Hikari / Nozomi)",
      "route": "Kyoto Station ➔ Tokyo Station",
      "time": "2 hrs 15 min (Bullet Train)",
      "cost": "~¥13,320 (RM 390)"
    },
    "steps": [
      {
        "type": "hotel",
        "title": "Rinn Shirakawa South (Check-out)",
        "icon": "🏨",
        "time": "11:30"
      },
      {
        "type": "station",
        "title": "Kyoto Station",
        "icon": "🚉",
        "time": "12:00",
        "transitNote": "Shinkansen Platform 11/12"
      },
      {
        "type": "transit",
        "title": "Tokaido Shinkansen Bullet Train",
        "icon": "🚅",
        "time": "14:00",
        "transitNote": "2h 15m high-speed train to Tokyo"
      },
      {
        "type": "station",
        "title": "Tokyo Station",
        "icon": "🚉",
        "time": "16:30",
        "transitNote": "Subway Ginza / Asakusa Line"
      },
      {
        "type": "hotel",
        "title": "Hotel Tavinos Asakusa (Check-in)",
        "icon": "🏨",
        "time": "17:00"
      },
      {
        "type": "food",
        "title": "HALAL SAKURA Dinner",
        "icon": "🍜",
        "time": "18:30"
      },
      {
        "type": "attraction",
        "title": "Senso-ji Asakusa Illumination",
        "icon": "🏮",
        "time": "20:00",
        "transitNote": "Walk ~5 min"
      },
      {
        "type": "hotel",
        "title": "Return to Hotel Tavinos Asakusa",
        "icon": "🏨",
        "time": "21:30"
      }
    ]
  },
  "6": {
    "hotel": {
      "name": "Hotel Tavinos Asakusa Tokyo",
      "area": "Asakusa Tokyo",
      "note": "Tokyo base (Day trip to Niigata snow resort)",
      "mapQuery": "Hotel Tavinos Asakusa Tokyo"
    },
    "mainTrain": {
      "line": "JR Joetsu Shinkansen (Max Tanigawa)",
      "route": "Tokyo Station ➔ GALA Yuzawa Station",
      "time": "75 min direct",
      "cost": "Covered by JR Tokyo Wide Pass or ~¥7,000"
    },
    "steps": [
      {
        "type": "hotel",
        "title": "Hotel Tavinos (Early Depart)",
        "icon": "🏨",
        "time": "06:15"
      },
      {
        "type": "station",
        "title": "Tokyo Station (Shinkansen Gate)",
        "icon": "🚉",
        "time": "06:45"
      },
      {
        "type": "transit",
        "title": "Joetsu Shinkansen to Snow Country",
        "icon": "🚅",
        "time": "07:00",
        "transitNote": "75 min direct train through snow mountains"
      },
      {
        "type": "station",
        "title": "GALA Yuzawa Station (Inside Ski Resort)",
        "icon": "🎿",
        "time": "08:30",
        "transitNote": "Train exits directly inside ski lodge!"
      },
      {
        "type": "attraction",
        "title": "GALA Yuzawa Snow Play & Sledding",
        "icon": "❄️",
        "time": "09:00"
      },
      {
        "type": "station",
        "title": "GALA Yuzawa ➔ Tokyo Shinkansen",
        "icon": "🚅",
        "time": "16:00",
        "transitNote": "75 min return bullet train"
      },
      {
        "type": "station",
        "title": "Tokyo Station ➔ Asakusa",
        "icon": "🚇",
        "time": "17:30"
      },
      {
        "type": "food",
        "title": "Gyumon Halal Ramen Asakusa",
        "icon": "🍜",
        "time": "18:00"
      },
      {
        "type": "hotel",
        "title": "Return to Hotel Tavinos Asakusa",
        "icon": "🏨",
        "time": "19:30"
      }
    ]
  },
  "7": {
    "hotel": {
      "name": "Hotel Tavinos Asakusa Tokyo",
      "area": "Asakusa Tokyo",
      "note": "Tokyo base (Day trip to Mt. Fuji Kawaguchiko)",
      "mapQuery": "Hotel Tavinos Asakusa Tokyo"
    },
    "mainTrain": {
      "line": "JR Fuji Excursion / Highway Express Bus",
      "route": "Shinjuku ➔ Kawaguchiko Station",
      "time": "~1 hr 45 min",
      "cost": "~¥2,200–4,130"
    },
    "steps": [
      {
        "type": "hotel",
        "title": "Hotel Tavinos Asakusa (Depart)",
        "icon": "🏨",
        "time": "07:30"
      },
      {
        "type": "station",
        "title": "Shinjuku Expressway Bus / JR Station",
        "icon": "🚉",
        "time": "08:30"
      },
      {
        "type": "transit",
        "title": "Express Train / Bus to Mt. Fuji",
        "icon": "🚌",
        "time": "09:00",
        "transitNote": "~1h 45m scenic trip"
      },
      {
        "type": "station",
        "title": "Kawaguchiko Station",
        "icon": "🚉",
        "time": "10:45"
      },
      {
        "type": "attraction",
        "title": "Arakurayama Sengen Park (Pagoda View)",
        "icon": "⛩️",
        "time": "11:00"
      },
      {
        "type": "attraction",
        "title": "Lake Kawaguchi & Oishi Park",
        "icon": "🗻",
        "time": "13:30"
      },
      {
        "type": "transit",
        "title": "Return Highway Bus to Tokyo",
        "icon": "🚌",
        "time": "16:30",
        "transitNote": "~1h 45m to Shinjuku"
      },
      {
        "type": "food",
        "title": "Halal Wagyu Yakiniku Panga / Sakura",
        "icon": "🥩",
        "time": "18:30"
      },
      {
        "type": "hotel",
        "title": "Return to Hotel Tavinos Asakusa",
        "icon": "🏨",
        "time": "20:30"
      }
    ]
  },
  "8": {
    "hotel": {
      "name": "Hotel Tavinos Asakusa Tokyo",
      "area": "Asakusa Tokyo",
      "note": "Final night in Tokyo",
      "mapQuery": "Hotel Tavinos Asakusa Tokyo"
    },
    "mainTrain": {
      "line": "JR Yamanote Line / Sobu Line / Tokyo Metro",
      "route": "Asakusa ➔ Shinjuku ➔ Akihabara ➔ Ueno",
      "time": "~10–20 min per leg",
      "cost": "~¥170–210 per ride"
    },
    "steps": [
      {
        "type": "hotel",
        "title": "Hotel Tavinos Asakusa (Depart)",
        "icon": "🏨",
        "time": "09:00"
      },
      {
        "type": "transit",
        "title": "Subway to Shinjuku Kabukicho",
        "icon": "🚇",
        "time": "09:15",
        "transitNote": "~25 min subway"
      },
      {
        "type": "attraction",
        "title": "Hotel Gracery Godzilla Head",
        "icon": "🦖",
        "time": "10:00"
      },
      {
        "type": "station",
        "title": "JR Shinjuku ➔ JR Akihabara",
        "icon": "🚆",
        "time": "11:15",
        "transitNote": "JR Chuo/Sobu Line (~15 min)"
      },
      {
        "type": "attraction",
        "title": "Akihabara Electric Town & Yodobashi",
        "icon": "⚡",
        "time": "12:00"
      },
      {
        "type": "attraction",
        "title": "Don Quijote Akihabara (Souvenirs)",
        "icon": "🐧",
        "time": "15:15"
      },
      {
        "type": "attraction",
        "title": "Ameyoko Shopping Street (Ueno)",
        "icon": "🛍️",
        "time": "17:15",
        "transitNote": "Walk ~12 min from Akiba"
      },
      {
        "type": "food",
        "title": "Farewell Halal Dinner (HALAL SAKURA)",
        "icon": "🍜",
        "time": "19:00"
      },
      {
        "type": "hotel",
        "title": "Return to Hotel Tavinos Asakusa (Pack)",
        "icon": "🏨",
        "time": "20:30"
      }
    ]
  },
  "9": {
    "hotel": {
      "name": "Hotel Tavinos Asakusa Tokyo",
      "area": "Asakusa Tokyo",
      "note": "Check-out & airport departure",
      "mapQuery": "Hotel Tavinos Asakusa Tokyo"
    },
    "mainTrain": {
      "line": "Keisei Skyliner Express (High Speed Airport Train)",
      "route": "Keisei Ueno Station ➔ Narita Airport (NRT)",
      "time": "41 min non-stop (160 km/h)",
      "cost": "~¥2,570 (RM 75)"
    },
    "steps": [
      {
        "type": "hotel",
        "title": "Hotel Tavinos Asakusa (Check-out)",
        "icon": "🏨",
        "time": "10:00"
      },
      {
        "type": "station",
        "title": "Keisei Ueno Station",
        "icon": "🚉",
        "time": "11:00",
        "transitNote": "Subway Ginza line to Ueno"
      },
      {
        "type": "food",
        "title": "Early Lunch near Ueno / Asakusa",
        "icon": "🍱",
        "time": "11:30"
      },
      {
        "type": "transit",
        "title": "Keisei Skyliner Express to NRT",
        "icon": "🚅",
        "time": "12:40",
        "transitNote": "Fastest train to Narita: 41 mins direct"
      },
      {
        "type": "airport",
        "title": "Narita Airport (NRT) Terminal 1",
        "icon": "✈️",
        "time": "13:30",
        "transitNote": "Check-in & duty-free browsing"
      },
      {
        "type": "flight",
        "title": "Flight Departure NRT ➔ KUL",
        "icon": "🛫",
        "time": "16:50",
        "transitNote": "Safe flight home!"
      }
    ]
  }
};

const mapInstances = {};

function parseActivityMinutes(timeStr) {
  if (!timeStr) return { start: 0, end: 1440 };
  const parts = timeStr.split('–').map(s => s.trim());
  
  function toMins(str) {
    const isPm = /pm/i.test(str);
    const isAm = /am/i.test(str);
    const cleaned = str.replace(/[ap]m/i, '').trim();
    const [hStr, mStr] = cleaned.split(':');
    let h = parseInt(hStr, 10);
    const m = mStr ? parseInt(mStr, 10) : 0;
    if (isNaN(h)) return 0;
    if (isPm && h < 12) h += 12;
    if (isAm && h === 12) h = 0;
    return h * 60 + m;
  }

  const start = toMins(parts[0]);
  let end = parts[1] ? toMins(parts[1]) : start + 60;
  if (end <= start) end = start + 60;
  return { start, end };
}

function formatMinutes(mins) {
  const h = Math.floor(mins / 60) % 24;
  const m = mins % 60;
  return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');
}

function getJSTCurrentMinutes() {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const jst = new Date(utc + (3600000 * 9));
  return jst.getHours() * 60 + jst.getMinutes();
}

function getJSTTimeString() {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const jst = new Date(utc + (3600000 * 9));
  return jst.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
}

// Categorize stop icon & color
function getStopCategoryBadge(act) {
  const title = (act.title || '').toLowerCase();
  const query = (act.mapQuery || '').toLowerCase();
  const cat = (act.category || '').toLowerCase();

  if (cat === 'hotel' || title.includes('hotel') || title.includes('check-in') || title.includes('stay')) {
    return { icon: '🏨', label: 'HOTEL', color: '#D4AF37', bg: '#291E05', border: '#E5C07B', type: 'hotel' };
  }
  if (cat === 'transit' || title.includes('train') || title.includes('station') || title.includes('shinkansen') || query.includes('station')) {
    return { icon: '🚆', label: 'TRAIN', color: '#38BDF8', bg: '#032030', border: '#38BDF8', type: 'train' };
  }
  if (title.includes('airport') || query.includes('airport')) {
    return { icon: '✈️', label: 'AIRPORT', color: '#A855F7', bg: '#210638', border: '#A855F7', type: 'airport' };
  }
  if (cat === 'food' || act.halal) {
    return { icon: '🍜', label: 'HALAL', color: '#10B981', bg: '#052417', border: '#10B981', type: 'food' };
  }
  return { icon: '📍', label: 'VISIT', color: '#E83929', bg: '#290A07', border: '#E83929', type: 'spot' };
}

// -------------------------------------------------------------
// MASTER ROADMAP (For index.html)
// -------------------------------------------------------------
function initMasterRoadmap(containerId = 'master-roadmap-map') {
  let currentSelectedDay = 1;
  let isSimulating = false;
  let simulatedMinutes = 11 * 60;

  const mapEl = document.getElementById(containerId);
  if (!mapEl) return;

  if (mapInstances[containerId]) {
    mapInstances[containerId].remove();
  }

  const map = L.map(containerId, {
    zoomControl: true,
    scrollWheelZoom: false,
    attributionControl: true
  });
  mapInstances[containerId] = map;

  // 100% Free CARTO Maps (Fast, No 403 Blocks, Open CDN)
  const baseLayers = {
    '🌙 CARTO Dark Matter (Night)': L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png?key=cb1_55ym_1_992e6f8a3c0350305ec5dcf4', {
      maxZoom: 19,
      subdomains: 'abcd',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }),
    '🗺️ CARTO Voyager (Travel & Stations)': L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png?key=cb1_55ym_1_992e6f8a3c0350305ec5dcf4', {
      maxZoom: 19,
      subdomains: 'abcd',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }),
    '☀️ CARTO Positron (Light)': L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png?key=cb1_55ym_1_992e6f8a3c0350305ec5dcf4', {
      maxZoom: 19,
      subdomains: 'abcd',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }),
    '🛰️ ESRI Satellite (Aerial)': L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 18,
      attribution: 'Tiles &copy; Esri'
    })
  };

  // Default to CARTO Dark Matter
  baseLayers['🌙 CARTO Dark Matter (Night)'].addTo(map);
  L.control.layers(baseLayers, null, { position: 'topright' }).addTo(map);

  setTimeout(() => map.invalidateSize(), 200);
  window.addEventListener('resize', () => map.invalidateSize());

  let markersLayer = L.layerGroup().addTo(map);
  let routeLayer = L.layerGroup().addTo(map);

  function getEffectiveMinutes() {
    return isSimulating ? simulatedMinutes : getJSTCurrentMinutes();
  }

  function renderView() {
    markersLayer.clearLayers();
    routeLayer.clearLayers();

    const currentMins = getEffectiveMinutes();

    if (currentSelectedDay === 0) {
      renderAllJapanOverview();
      updateRoadmapDashboard(null, -1, currentMins);
      return;
    }

    const dayData = ROADMAP_DATA.find(d => d.day === currentSelectedDay);
    if (!dayData) return;

    const latlngs = [];
    let activeIndex = -1;

    dayData.activities.forEach((act, idx) => {
      const { start, end } = parseActivityMinutes(act.time);
      if (currentMins >= start && currentMins < end) {
        activeIndex = idx;
      }
    });

    if (activeIndex === -1) {
      const firstStart = parseActivityMinutes(dayData.activities[0].time).start;
      const lastEnd = parseActivityMinutes(dayData.activities[dayData.activities.length - 1].time).end;
      if (currentMins < firstStart) activeIndex = 0;
      else if (currentMins >= lastEnd) activeIndex = dayData.activities.length - 1;
    }

    dayData.activities.forEach((act, idx) => {
      const lat = act.lat || 35.6812;
      const lng = act.lng || 139.7671;
      const pos = [lat, lng];
      latlngs.push(pos);

      const { start, end } = parseActivityMinutes(act.time);
      const isCompleted = currentMins >= end;
      const isActive = idx === activeIndex;

      const badge = getStopCategoryBadge(act);

      let pulseClass = isActive ? 'is-active' : (isCompleted ? 'is-completed' : 'is-upcoming');

      const icon = L.divIcon({
        className: 'custom-roadmap-marker',
        html: [
          '<div class="roadmap-pin ' + pulseClass + '" style="border-color: ' + (isActive ? '#FFFFFF' : badge.border) + '; background: ' + (isActive ? badge.border : badge.bg) + ';" id="marker-pin-' + containerId + '-' + idx + '">',
          '  <span class="text-xs">' + badge.icon + '</span>',
          '</div>'
        ].join(''),
        iconSize: [36, 36],
        iconAnchor: [18, 18],
        popupAnchor: [0, -18]
      });

      const halalPill = act.halal 
        ? '<div class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 font-mono text-[10px] border border-emerald-800/60">🌱 ' + (act.halalNote || 'Halal Certified') + '</div>' 
        : '';
      const transitPill = act.transit 
        ? '<div class="p-2 rounded-lg bg-[#05070B] border border-white/5 text-[10px] font-mono text-cyan-300">🚆 ' + act.transit + '</div>' 
        : '';

      const popupHtml = [
        '<div class="p-4 bg-[#090D15] text-slate-200 min-w-[270px] max-w-[320px] rounded-xl font-sans text-xs space-y-2">',
        '  <div class="flex items-center justify-between border-b border-white/10 pb-2">',
        '    <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold" style="background: ' + badge.bg + '; color: ' + badge.color + '; border: 1px solid ' + badge.border + ';">' + badge.icon + ' ' + badge.label + ' #' + (idx + 1) + '</span>',
        '    <span class="font-mono font-bold text-gold">' + act.time + '</span>',
        '  </div>',
        '  <div class="font-bold text-sm text-white font-mincho leading-tight">' + act.title + '</div>',
        halalPill,
        '  <p class="text-slate-400 text-[11px] leading-relaxed">' + (act.note || '') + '</p>',
        transitPill,
        '  <div class="pt-2 border-t border-white/10 flex items-center justify-between">',
        '    <span class="text-[10px] font-mono text-slate-400">' + act.category.toUpperCase() + '</span>',
        '    <a href="https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(act.mapQuery) + '" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-[11px] font-bold text-vermilion hover:underline">',
        '      <span>Directions (Train/Walk)</span>',
        '      <span>↗</span>',
        '    </a>',
        '  </div>',
        '</div>'
      ].join('');

      const marker = L.marker(pos, { icon }).bindPopup(popupHtml);
      marker.on('click', () => {
        highlightStopCard(idx);
      });
      marker.addTo(markersLayer);
    });

    // Glowing Polyline Routes
    if (latlngs.length > 1) {
      L.polyline(latlngs, {
        color: '#E83929',
        weight: 8,
        opacity: 0.25,
        lineCap: 'round',
        lineJoin: 'round'
      }).addTo(routeLayer);

      L.polyline(latlngs, {
        color: '#E83929',
        weight: 3.5,
        opacity: 0.95,
        dashArray: '8, 8',
        lineCap: 'round',
        lineJoin: 'round'
      }).addTo(routeLayer);
    }

    if (latlngs.length > 0) {
      const bounds = L.latLngBounds(latlngs);
      map.fitBounds(bounds, { padding: [45, 45], maxZoom: 15 });
    }

    updateRoadmapDashboard(dayData, activeIndex, currentMins);
  }

  function renderAllJapanOverview() {
    const hubs = [
      { name: 'Kansai Int Airport (KIX)', lat: 34.4347, lng: 135.2443, day: 1, type: '✈️ Airport', note: 'Touchdown in Osaka' },
      { name: 'Plum Hotel Osaka (Namba)', lat: 34.6565, lng: 135.4985, day: 1, type: '🏨 Base #1', note: 'Plum Hotel Osaka (2 nights)' },
      { name: 'Nara Park (Todai-ji)', lat: 34.6851, lng: 135.8430, day: 2, type: '🦌 Excursion', note: 'Kintetsu train to Nara' },
      { name: 'Rinn Shirakawa South Kyoto', lat: 35.0062, lng: 135.7760, day: 3, type: '🏨 Base #2', note: 'Gion / Higashiyama (2 nights)' },
      { name: 'Hotel Tavinos Asakusa Tokyo', lat: 35.7171, lng: 139.7915, day: 5, type: '🏨 Base #3', note: 'Tokyo hotel base (4 nights)' },
      { name: 'GALA Yuzawa Ski Resort', lat: 36.9508, lng: 138.8005, day: 6, type: '🚅 Shinkansen Snow', note: '75 min direct bullet train to Niigata' },
      { name: 'Mt. Fuji (Lake Kawaguchiko)', lat: 35.5015, lng: 138.8016, day: 7, type: '🗻 Fuji Trip', note: 'Chureito Pagoda & Oishi Park' },
      { name: 'Narita Int Airport (NRT)', lat: 35.7720, lng: 140.3929, day: 9, type: '🛫 Departure', note: 'Keisei Skyliner 41m to flight home' }
    ];

    const latlngs = hubs.map(h => [h.lat, h.lng]);

    hubs.forEach((hub) => {
      const icon = L.divIcon({
        className: 'custom-roadmap-marker',
        html: '<div class="roadmap-pin is-active" style="background: #090D15; border-color: #D4AF37; color: #D4AF37;"><span class="text-xs font-bold">' + hub.type.split(' ')[0] + '</span></div>',
        iconSize: [36, 36],
        iconAnchor: [18, 18]
      });

      const popupHtml = [
        '<div class="p-3.5 bg-[#090D15] text-slate-200 min-w-[220px] rounded-xl font-sans text-xs space-y-1.5">',
        '  <div class="flex items-center justify-between border-b border-white/10 pb-1.5">',
        '    <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-gold text-black">DAY ' + hub.day + '</span>',
        '    <span class="font-mono text-slate-400 text-[10px]">' + hub.type + '</span>',
        '  </div>',
        '  <div class="font-bold text-white text-sm font-mincho">' + hub.name + '</div>',
        '  <p class="text-slate-400 text-[11px]">' + hub.note + '</p>',
        '</div>'
      ].join('');

      L.marker([hub.lat, hub.lng], { icon }).bindPopup(popupHtml).addTo(markersLayer);
    });

    L.polyline(latlngs, { color: '#D4AF37', weight: 8, opacity: 0.25 }).addTo(routeLayer);
    L.polyline(latlngs, { color: '#D4AF37', weight: 3.5, opacity: 0.95, dashArray: '10, 8' }).addTo(routeLayer);

    map.fitBounds(L.latLngBounds(latlngs), { padding: [40, 40] });
  }

  function updateRoadmapDashboard(dayData, activeIdx, currentMins) {
    const liveTimeEl = document.getElementById('roadmap-live-jst-clock');
    if (liveTimeEl) {
      liveTimeEl.textContent = isSimulating ? formatMinutes(currentMins) + ' (Simulated)' : getJSTTimeString() + ' JST';
    }

    const transitFlowData = DAILY_TRANSIT_FLOW[currentSelectedDay];
    const activeCardEl = document.getElementById('roadmap-active-stop-card');
    const stopsListEl = document.getElementById('roadmap-stops-chips-container');

    if (!dayData || activeIdx === -1 || !transitFlowData) {
      if (activeCardEl) {
        activeCardEl.innerHTML = [
          '<div class="p-4 rounded-2xl bg-[#090D15] border border-white/10 flex items-center gap-4">',
          '  <div class="w-12 h-12 rounded-xl bg-gold/20 text-gold flex items-center justify-center font-bold font-mono text-lg border border-gold/30">🗾</div>',
          '  <div>',
          '    <div class="text-[10px] font-mono font-bold uppercase tracking-wider text-gold">Nationwide Route Overview</div>',
          '    <div class="text-white font-bold text-sm sm:text-base font-mincho">Osaka • Nara • Kyoto • GALA Yuzawa • Mt. Fuji • Tokyo</div>',
          '    <div class="text-xs text-slate-400 font-sans mt-0.5">3 Hotel Bases • High-Speed Shinkansen Connections • 9 Days Total</div>',
          '  </div>',
          '</div>'
        ].join('');
      }
      return;
    }

    const currentAct = dayData.activities[activeIdx];
    const nextAct = dayData.activities[activeIdx + 1];

    if (activeCardEl && currentAct) {
      const nextStart = nextAct ? parseActivityMinutes(nextAct.time).start : 0;
      const diffToNext = nextAct ? Math.max(0, nextStart - currentMins) : 0;
      const badge = getStopCategoryBadge(currentAct);

      const nextCol = nextAct 
        ? '<div class="text-left md:text-right"><div class="text-[10px] font-mono text-slate-400 uppercase">NEXT STOP (in ' + diffToNext + 'm)</div><div class="text-xs font-bold text-slate-200 truncate max-w-[170px]">' + nextAct.title + '</div></div>'
        : '<div class="text-left md:text-right"><div class="text-[10px] font-mono text-emerald-400 uppercase">LAST STOP OF DAY</div><div class="text-xs font-bold text-slate-200">Back at Hotel</div></div>';

      activeCardEl.innerHTML = [
        '<div class="space-y-4">',
        '  <!-- Hotel Base & Main Train Route Header Banner -->',
        '  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">',
        '    <div class="p-3.5 rounded-2xl bg-[#090D15] border border-gold/40 flex items-center gap-3">',
        '      <div class="w-10 h-10 rounded-xl bg-gold/20 text-gold flex items-center justify-center text-lg flex-shrink-0">🏨</div>',
        '      <div class="min-w-0">',
        '        <div class="text-[10px] font-mono font-bold uppercase tracking-wider text-gold">HOTEL BASE (DAY ' + currentSelectedDay + ')</div>',
        '        <div class="text-sm font-bold text-white truncate font-mincho">' + transitFlowData.hotel.name + '</div>',
        '        <div class="text-[10px] text-slate-400 truncate">' + transitFlowData.hotel.note + '</div>',
        '      </div>',
        '      <a href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(transitFlowData.hotel.mapQuery) + '" target="_blank" class="ml-auto px-2.5 py-1.5 rounded-lg bg-gold/20 hover:bg-gold/30 text-gold text-[10px] font-mono font-bold border border-gold/40 flex-shrink-0">Map ↗</a>',
        '    </div>',
        '    <div class="p-3.5 rounded-2xl bg-[#090D15] border border-cyan-500/40 flex items-center gap-3">',
        '      <div class="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-lg flex-shrink-0">🚆</div>',
        '      <div class="min-w-0">',
        '        <div class="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">MAIN TRAIN ROUTE</div>',
        '        <div class="text-sm font-bold text-white truncate font-mono">' + transitFlowData.mainTrain.line + '</div>',
        '        <div class="text-[10px] text-slate-400 truncate">' + transitFlowData.mainTrain.route + ' (' + transitFlowData.mainTrain.time + ')</div>',
        '      </div>',
        '      <span class="ml-auto text-[10px] font-mono text-cyan-300 font-bold bg-cyan-950 px-2 py-1 rounded border border-cyan-800 flex-shrink-0">' + transitFlowData.mainTrain.cost + '</span>',
        '    </div>',
        '  </div>',

        '  <!-- Active Activity Live Tracking Card -->',
        '  <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#090D15] via-[#0E1524] to-[#090D15] border border-vermilion/40 shadow-[0_0_25px_rgba(232,57,41,0.2)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">',
        '    <div class="flex items-start gap-3.5">',
        '      <div class="relative flex-shrink-0">',
        '        <div class="w-12 h-12 rounded-2xl text-white flex items-center justify-center font-bold font-mono text-lg shadow-[0_0_15px_#E83929]" style="background: ' + badge.border + ';">' + badge.icon + '</div>',
        '        <span class="absolute -top-1 -right-1 flex h-3.5 w-3.5">',
        '          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-vermilion opacity-75"></span>',
        '          <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-vermilion"></span>',
        '        </span>',
        '      </div>',
        '      <div>',
        '        <div class="flex items-center gap-2 mb-0.5">',
        '          <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-vermilion/20 text-vermilion border border-vermilion/40">● ACTIVE NOW (' + currentAct.time + ')</span>',
        '          <span class="text-[10px] font-mono font-bold uppercase" style="color: ' + badge.color + ';">' + badge.label + '</span>',
        '        </div>',
        '        <h3 class="text-base sm:text-lg font-bold text-white font-mincho leading-snug">' + currentAct.title + '</h3>',
        '        <p class="text-xs text-slate-300 font-sans mt-0.5 line-clamp-1">' + (currentAct.transit || currentAct.note || '') + '</p>',
        '      </div>',
        '    </div>',
        '    <div class="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-3 md:pt-0 border-white/10">',
        nextCol,
        '      <a href="https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(currentAct.mapQuery) + '" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 rounded-xl bg-vermilion hover:bg-red-600 text-white font-bold text-xs font-mono shadow-glow-red transition-all flex items-center gap-1.5 flex-shrink-0">',
        '        <span>Transit Route ↗</span>',
        '      </a>',
        '    </div>',
        '  </div>',
        '</div>'
      ].join('');
    }

    // Step-by-step Flow Strip (Hotel -> Train -> Spot -> Hotel)
    if (stopsListEl) {
      stopsListEl.innerHTML = transitFlowData.steps.map((st, sIdx) => {
        return [
          '<div class="flex items-center gap-2 flex-shrink-0">',
          '  <button onclick="window.roadmapFocusStop(' + sIdx + ')" class="p-2.5 rounded-xl bg-[#090D15] hover:bg-white/10 border border-white/10 text-left transition-all flex items-center gap-2 max-w-[200px]">',
          '    <span class="text-base">' + st.icon + '</span>',
          '    <div class="min-w-0">',
          '      <div class="text-[10px] font-mono text-gold">' + st.time + '</div>',
          '      <div class="text-xs font-bold text-white truncate">' + st.title + '</div>',
          '      ' + (st.transitNote ? '<div class="text-[9px] text-cyan-300 truncate">' + st.transitNote + '</div>' : ''),
          '    </div>',
          '  </button>',
          (sIdx < transitFlowData.steps.length - 1 ? '<span class="text-slate-600 font-bold font-mono text-xs">➔</span>' : ''),
          '</div>'
        ].join('');
      }).join('');
    }
  }

  window.roadmapFocusStop = function(idx) {
    const dayData = ROADMAP_DATA.find(d => d.day === currentSelectedDay);
    if (!dayData) return;
    const act = dayData.activities[idx] || dayData.activities[0];
    if (!act) return;

    map.flyTo([act.lat, act.lng], 16, { duration: 1 });
    
    markersLayer.eachLayer(layer => {
      if (layer instanceof L.Marker) {
        const p = layer.getLatLng();
        if (Math.abs(p.lat - act.lat) < 0.0001 && Math.abs(p.lng - act.lng) < 0.0001) {
          layer.openPopup();
        }
      }
    });

    highlightStopCard(idx);
  };

  function highlightStopCard(idx) {
    const chips = document.querySelectorAll('#roadmap-stops-chips-container button');
    if (chips[idx]) {
      chips[idx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  const dayPills = document.querySelectorAll('.master-roadmap-day-btn');
  dayPills.forEach(btn => {
    btn.addEventListener('click', () => {
      dayPills.forEach(b => {
        b.classList.remove('bg-vermilion', 'text-white', 'shadow-glow-red');
        b.classList.add('bg-[#090D15]', 'text-slate-400');
      });
      btn.classList.add('bg-vermilion', 'text-white', 'shadow-glow-red');
      btn.classList.remove('bg-[#090D15]', 'text-slate-400');

      currentSelectedDay = parseInt(btn.getAttribute('data-day'), 10);
      renderView();
    });
  });

  const slider = document.getElementById('roadmap-time-slider');
  const sliderTimeLabel = document.getElementById('roadmap-slider-time-label');
  const liveSyncBtn = document.getElementById('roadmap-live-sync-btn');

  if (slider) {
    slider.addEventListener('input', (e) => {
      isSimulating = true;
      simulatedMinutes = parseInt(e.target.value, 10);
      if (sliderTimeLabel) sliderTimeLabel.textContent = formatMinutes(simulatedMinutes);
      if (liveSyncBtn) {
        liveSyncBtn.classList.remove('bg-emerald-500/20', 'text-emerald-300', 'border-emerald-500/40');
        liveSyncBtn.classList.add('bg-amber-500/20', 'text-amber-300', 'border-amber-500/40');
        liveSyncBtn.textContent = '⚡ Simulating (Click to Live Sync)';
      }
      renderView();
    });
  }

  if (liveSyncBtn) {
    liveSyncBtn.addEventListener('click', () => {
      isSimulating = false;
      const jstMins = getJSTCurrentMinutes();
      if (slider) slider.value = jstMins;
      if (sliderTimeLabel) sliderTimeLabel.textContent = formatMinutes(jstMins);
      liveSyncBtn.classList.add('bg-emerald-500/20', 'text-emerald-300', 'border-emerald-500/40');
      liveSyncBtn.classList.remove('bg-amber-500/20', 'text-amber-300', 'border-amber-500/40');
      liveSyncBtn.textContent = '● Real JST Active';
      renderView();
    });
  }

  renderView();

  setInterval(() => {
    if (!isSimulating && currentSelectedDay > 0) {
      renderView();
    }
  }, 30000);
}

// -------------------------------------------------------------
// SINGLE DAY ROADMAP (For day-1.html to day-9.html)
// -------------------------------------------------------------
function initDayRoadmap(dayNumber, containerId = 'day-roadmap-map') {
  const dayData = ROADMAP_DATA.find(d => d.day === dayNumber);
  const transitFlowData = DAILY_TRANSIT_FLOW[dayNumber];
  const mapEl = document.getElementById(containerId);
  if (!dayData || !mapEl) return;

  if (mapInstances[containerId]) {
    mapInstances[containerId].remove();
  }

  const map = L.map(containerId, {
    zoomControl: true,
    scrollWheelZoom: false
  });
  mapInstances[containerId] = map;

  // 100% Free CARTO Maps
  const baseLayers = {
    '🌙 CARTO Dark Matter (Night)': L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png?key=cb1_55ym_1_992e6f8a3c0350305ec5dcf4', {
      maxZoom: 19,
      subdomains: 'abcd',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }),
    '🗺️ CARTO Voyager (Travel & Stations)': L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png?key=cb1_55ym_1_992e6f8a3c0350305ec5dcf4', {
      maxZoom: 19,
      subdomains: 'abcd',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }),
    '☀️ CARTO Positron (Light)': L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png?key=cb1_55ym_1_992e6f8a3c0350305ec5dcf4', {
      maxZoom: 19,
      subdomains: 'abcd',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }),
    '🛰️ ESRI Satellite (Aerial)': L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 18,
      attribution: 'Tiles &copy; Esri'
    })
  };

  // Default to CARTO Dark Matter
  baseLayers['🌙 CARTO Dark Matter (Night)'].addTo(map);
  L.control.layers(baseLayers, null, { position: 'topright' }).addTo(map);

  setTimeout(() => map.invalidateSize(), 200);
  window.addEventListener('resize', () => map.invalidateSize());

  const markersLayer = L.layerGroup().addTo(map);
  const routeLayer = L.layerGroup().addTo(map);

  let isSimulating = false;
  let simulatedMinutes = 11 * 60;

  function getEffectiveMinutes() {
    return isSimulating ? simulatedMinutes : getJSTCurrentMinutes();
  }

  function render() {
    markersLayer.clearLayers();
    routeLayer.clearLayers();

    const currentMins = getEffectiveMinutes();
    const latlngs = [];
    let activeIdx = -1;

    dayData.activities.forEach((act, idx) => {
      const { start, end } = parseActivityMinutes(act.time);
      if (currentMins >= start && currentMins < end) {
        activeIdx = idx;
      }
    });
    if (activeIdx === -1) {
      const firstStart = parseActivityMinutes(dayData.activities[0].time).start;
      const lastEnd = parseActivityMinutes(dayData.activities[dayData.activities.length - 1].time).end;
      if (currentMins < firstStart) activeIdx = 0;
      else if (currentMins >= lastEnd) activeIdx = dayData.activities.length - 1;
    }

    dayData.activities.forEach((act, idx) => {
      const lat = act.lat || 35.6812;
      const lng = act.lng || 139.7671;
      const pos = [lat, lng];
      latlngs.push(pos);

      const { start, end } = parseActivityMinutes(act.time);
      const isCompleted = currentMins >= end;
      const isActive = idx === activeIdx;

      const badge = getStopCategoryBadge(act);
      let pulseClass = isActive ? 'is-active' : (isCompleted ? 'is-completed' : 'is-upcoming');

      const icon = L.divIcon({
        className: 'custom-roadmap-marker',
        html: [
          '<div class="roadmap-pin ' + pulseClass + '" style="border-color: ' + (isActive ? '#FFFFFF' : badge.border) + '; background: ' + (isActive ? badge.border : badge.bg) + ';" id="marker-day-' + dayNumber + '-' + idx + '">',
          '  <span class="text-xs">' + badge.icon + '</span>',
          '</div>'
        ].join(''),
        iconSize: [34, 34],
        iconAnchor: [17, 17],
        popupAnchor: [0, -16]
      });

      const halalBadge = act.halal 
        ? '<div class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 font-mono text-[10px]">🌱 ' + (act.halalNote || 'Halal') + '</div>'
        : '';
      const transitBadge = act.transit 
        ? '<div class="p-1.5 rounded-lg bg-[#05070B] border border-white/5 text-[10px] font-mono text-cyan-300">🚆 ' + act.transit + '</div>'
        : '';

      const popupHtml = [
        '<div class="p-3.5 bg-[#090D15] text-slate-200 min-w-[250px] max-w-[300px] rounded-xl font-sans text-xs space-y-1.5">',
        '  <div class="flex items-center justify-between border-b border-white/10 pb-1.5">',
        '    <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold" style="background: ' + badge.bg + '; color: ' + badge.color + '; border: 1px solid ' + badge.border + ';">' + badge.icon + ' ' + badge.label + ' #' + (idx + 1) + '</span>',
        '    <span class="font-mono font-bold text-gold">' + act.time + '</span>',
        '  </div>',
        '  <div class="font-bold text-white text-sm font-mincho">' + act.title + '</div>',
        halalBadge,
        transitBadge,
        '  <p class="text-slate-400 text-[11px] leading-relaxed">' + (act.note || '') + '</p>',
        '  <div class="pt-1 border-t border-white/10 flex items-center justify-between">',
        '    <span class="text-[10px] font-mono text-slate-400">' + act.category.toUpperCase() + '</span>',
        '    <a href="https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(act.mapQuery) + '" target="_blank" class="text-vermilion font-bold text-[11px] hover:underline">Transit Route ↗</a>',
        '  </div>',
        '</div>'
      ].join('');

      const m = L.marker(pos, { icon }).bindPopup(popupHtml).addTo(markersLayer);
      m.on('click', () => {
        highlightDayTimelineCard(idx);
      });
    });

    if (latlngs.length > 1) {
      L.polyline(latlngs, { color: '#E83929', weight: 8, opacity: 0.25 }).addTo(routeLayer);
      L.polyline(latlngs, { color: '#E83929', weight: 3.5, opacity: 0.95, dashArray: '8, 8' }).addTo(routeLayer);
    }

    if (latlngs.length > 0) {
      map.fitBounds(L.latLngBounds(latlngs), { padding: [40, 40], maxZoom: 15 });
    }

    // Render Hotel & Train Flow Strip
  const flowContainer = document.getElementById('day-transit-flow-strip');
  if (flowContainer && transitFlowData) {
    flowContainer.innerHTML = [
      '<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">',
      '  <div class="p-3 rounded-2xl bg-[#05070B] border border-gold/40 flex items-center gap-3">',
      '    <div class="w-9 h-9 rounded-xl bg-gold/20 text-gold flex items-center justify-center text-base flex-shrink-0">🏨</div>',
      '    <div class="min-w-0">',
      '      <div class="text-[9px] font-mono font-bold text-gold uppercase">HOTEL BASE (DAY ' + dayNumber + ')</div>',
      '      <div class="text-xs font-bold text-white truncate font-mincho">' + transitFlowData.hotel.name + '</div>',
      '      <div class="text-[10px] text-slate-400 truncate">' + transitFlowData.hotel.note + '</div>',
      '    </div>',
      '    <a href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(transitFlowData.hotel.mapQuery) + '" target="_blank" class="ml-auto px-2 py-1 rounded bg-gold/20 text-gold text-[9px] font-mono font-bold border border-gold/40 flex-shrink-0">Map ↗</a>',
      '  </div>',
      '  <div class="p-3 rounded-2xl bg-[#05070B] border border-cyan-500/40 flex items-center gap-3">',
      '    <div class="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-base flex-shrink-0">🚆</div>',
      '    <div class="min-w-0">',
      '      <div class="text-[9px] font-mono font-bold text-cyan-400 uppercase">MAIN TRAIN ROUTE</div>',
      '      <div class="text-xs font-bold text-white truncate font-mono">' + transitFlowData.mainTrain.line + '</div>',
      '      <div class="text-[10px] text-slate-400 truncate">' + transitFlowData.mainTrain.route + ' (' + transitFlowData.mainTrain.time + ')</div>',
      '    </div>',
      '    <span class="ml-auto text-[9px] font-mono text-cyan-300 font-bold bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800 flex-shrink-0">' + transitFlowData.mainTrain.cost + '</span>',
      '  </div>',
      '</div>',
      '<div class="space-y-1.5">',
      '  <div class="text-[10px] font-mono uppercase text-slate-400 flex items-center gap-1.5">',
      '    <span>Daily Journey Flow (Click stop to focus map):</span>',
      '  </div>',
      '  <div class="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">',
      transitFlowData.steps.map((st, sIdx) => [
        '<div class="flex items-center gap-1.5 flex-shrink-0">',
        '  <button onclick="window.dayRoadmapFocusStep(' + sIdx + ')" class="px-3 py-2 rounded-xl bg-[#05070B] hover:bg-white/10 border border-white/10 text-left transition-all flex items-center gap-2 max-w-[200px]">',
        '    <span class="text-sm">' + st.icon + '</span>',
        '    <div class="min-w-0">',
        '      <div class="text-[9px] font-mono text-gold">' + st.time + '</div>',
        '      <div class="text-xs font-bold text-white truncate">' + st.title + '</div>',
        '      ' + (st.transitNote ? '<div class="text-[9px] text-cyan-300 truncate">' + st.transitNote + '</div>' : ''),
        '    </div>',
        '  </button>',
        (sIdx < transitFlowData.steps.length - 1 ? '<span class="text-slate-600 font-mono text-xs font-bold">➔</span>' : ''),
        '</div>'
      ].join('')).join(''),
      '  </div>',
      '</div>'
    ].join('');

    window.dayRoadmapFocusStep = function(sIdx) {
      const act = dayData.activities[sIdx] || dayData.activities[0];
      if (act) {
        map.flyTo([act.lat, act.lng], 16, { duration: 0.8 });
        markersLayer.eachLayer(layer => {
          if (layer instanceof L.Marker) {
            const p = layer.getLatLng();
            if (Math.abs(p.lat - act.lat) < 0.0001 && Math.abs(p.lng - act.lng) < 0.0001) {
              layer.openPopup();
            }
          }
        });
      }
    };
  }

  const statusPill = document.getElementById('day-roadmap-status-pill');
    if (statusPill && dayData.activities[activeIdx]) {
      const act = dayData.activities[activeIdx];
      const badge = getStopCategoryBadge(act);
      statusPill.innerHTML = [
        '<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-vermilion/20 text-vermilion border border-vermilion/40 text-xs font-mono font-bold">',
        '  <span class="w-2 h-2 rounded-full bg-vermilion animate-ping"></span>',
        '  <span>LIVE NOW: ' + badge.icon + ' ' + act.title.substring(0, 32) + '...</span>',
        '</span>'
      ].join('');
    }
  }

  function highlightDayTimelineCard(idx) {
    const cards = document.querySelectorAll('.jp-card[data-activity-index]');
    cards.forEach((c, i) => {
      if (i === idx) {
        c.scrollIntoView({ behavior: 'smooth', block: 'center' });
        c.classList.add('ring-2', 'ring-vermilion');
        setTimeout(() => c.classList.remove('ring-2', 'ring-vermilion'), 2500);
      }
    });
  }

  document.querySelectorAll('.jp-card').forEach((card, idx) => {
    const actIdx = idx - 1;
    if (actIdx >= 0 && actIdx < dayData.activities.length) {
      card.setAttribute('data-activity-index', actIdx);
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        const act = dayData.activities[actIdx];
        if (act) {
          map.flyTo([act.lat, act.lng], 16, { duration: 0.8 });
          markersLayer.eachLayer(layer => {
            if (layer instanceof L.Marker) {
              const p = layer.getLatLng();
              if (Math.abs(p.lat - act.lat) < 0.0001 && Math.abs(p.lng - act.lng) < 0.0001) {
                layer.openPopup();
              }
            }
          });
        }
      });
    }
  });

  const slider = document.getElementById('day-time-slider');
  const sliderLabel = document.getElementById('day-slider-time-label');
  const syncBtn = document.getElementById('day-live-sync-btn');

  if (slider) {
    slider.addEventListener('input', (e) => {
      isSimulating = true;
      simulatedMinutes = parseInt(e.target.value, 10);
      if (sliderLabel) sliderLabel.textContent = formatMinutes(simulatedMinutes);
      if (syncBtn) syncBtn.textContent = '⚡ Simulating';
      render();
    });
  }

  if (syncBtn) {
    syncBtn.addEventListener('click', () => {
      isSimulating = false;
      const jstMins = getJSTCurrentMinutes();
      if (slider) slider.value = jstMins;
      if (sliderLabel) sliderLabel.textContent = formatMinutes(jstMins);
      syncBtn.textContent = '● Real JST Active';
      render();
    });
  }

  render();
}

window.initMasterRoadmap = initMasterRoadmap;
window.initDayRoadmap = initDayRoadmap;
window.ROADMAP_DATA = ROADMAP_DATA;
window.DAILY_TRANSIT_FLOW = DAILY_TRANSIT_FLOW;
