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
      "nights": "3:00pm (Day 1) – 9:00am (Day 3) • 2 Nights Base (Luggage drop from 1:00pm)",
      "notes": "Luggage drop upon arrival (~1:00pm); standard room check-in from 3:00pm; central base near Namba transport hubs",
      "mapQuery": "Plum Hotel Osaka"
    },
    "activities": [
      {
        "time": "09:45–11:45",
        "title": "Kansai International Airport (Arrive KIX & Customs)",
        "costJpy": 0,
        "costMyr": 0,
        "category": "transit",
        "halal": null,
        "transitMethod": "Flight Arrival",
        "methodType": "flight",
        "connectedStation": "Kansai Airport Station (KIX)",
        "stationWalk": "Direct inside airport (0 min / 150m via 2F walkway)",
        "transitSummary": "Flight arrival KIX • Customs clearance after 11:30am • Walk across 2F bridge to station",
        "note": "Flight touchdown at KIX Terminal 1 (09:45). Clear immigration, collect baggage, pass customs (clearing after ~11:30am), and walk 3 min across 2F covered bridge to Kansai Airport Railway Station. Top up ICOCA IC Card at ticket machines.",
        "mapQuery": "Kansai International Airport",
        "lat": 34.4347,
        "lng": 135.2443
      },
      {
        "time": "11:45–13:00",
        "title": "Airport → Osaka Namba (Nankai Airport Express)",
        "costJpy": 970,
        "costMyr": 29,
        "category": "transit",
        "halal": null,
        "transitMethod": "Train (Nankai Line)",
        "methodType": "train",
        "connectedStation": "Namba Station (Nankai)",
        "stationWalk": "Board Platform 1/2 ➔ Direct to Namba 3F concourse (44 min)",
        "transitSummary": "Nankai Airport Express (44 min direct, ¥970 / ~RM 29 pp)",
        "note": "Board Nankai Airport Express (Platform 1/2) at Kansai Airport Station (~11:55 / 12:05). Scenic ride across Osaka Bay Sky Gate Bridge direct to Namba Station 3F concourse (44 min, 11 stops, ¥970).",
        "mapQuery": "Namba Station Osaka",
        "lat": 34.6629,
        "lng": 135.5003
      },
      {
        "time": "13:00–13:45",
        "title": "Namba Station ➔ Plum Hotel (Luggage Drop)",
        "costJpy": 0,
        "costMyr": 0,
        "category": "logistics",
        "halal": null,
        "transitMethod": "Walk (8 min) or Subway (1 stop)",
        "methodType": "walk",
        "connectedStation": "Daikokucho Station / Namba Station",
        "stationWalk": "Walk 8 min (600m) from Namba South Exit or 3 min from Daikokucho Exit 1",
        "transitSummary": "Walk 8 min (600m) south to Plum Hotel reception",
        "note": "From Namba Station South Exit, walk 8 min (600m) south down Daikoku shopping street (or take Osaka Metro Midosuji Line 1 stop to Daikokucho Station Exit 1, walk 3 min) directly to Plum Hotel Osaka. Drop luggage at reception before lunch (standard room check-in opens at 3:00pm).",
        "mapQuery": "Plum Hotel Osaka",
        "lat": 34.6565,
        "lng": 135.4985
      },
      {
        "time": "13:45–15:00",
        "title": "Lunch: Halal Ramen Naniwaya",
        "costJpy": 1500,
        "costMyr": 45,
        "category": "food",
        "halal": true,
        "halalNote": "Halal Certified Ramen & Gyoza",
        "transitMethod": "Walk (4 min)",
        "methodType": "walk",
        "connectedStation": "Daikokucho Station",
        "stationWalk": "Walk 4 min (320m) east from Plum Hotel",
        "transitSummary": "Walk 4 min (320m) east along Daikokucho avenue",
        "note": "Walk east 4 min (320m) from Plum Hotel to Halal Ramen Naniwaya. Renowned for rich Halal chicken paitan ramen, gyoza, and fried chicken karaage.",
        "mapQuery": "Halal Ramen Naniwaya Osaka",
        "lat": 34.6575,
        "lng": 135.5015
      },
      {
        "time": "15:00–17:30",
        "title": "Plum Hotel Check-in & Settle in / Prayer",
        "costJpy": 0,
        "costMyr": 0,
        "category": "logistics",
        "halal": null,
        "transitMethod": "Walk (4 min)",
        "methodType": "walk",
        "connectedStation": "Daikokucho Station",
        "stationWalk": "Walk 4 min (320m) back to Plum Hotel Base",
        "transitSummary": "Walk 4 min (320m) back to Plum Hotel",
        "note": "Walk 4 min back to Plum Hotel Osaka. Official check-in opens at 3:00pm! Collect room keys at front desk, settle into rooms, unpack winter gear, and perform Dhuhr/Asr prayer.",
        "mapQuery": "Plum Hotel Osaka",
        "lat": 34.6565,
        "lng": 135.4985
      },
      {
        "time": "17:30–20:00",
        "title": "Dotonbori & Shinsaibashi Night Walk",
        "costJpy": 190,
        "costMyr": 6,
        "category": "sightseeing",
        "halal": null,
        "transitMethod": "Subway (1 stop) + Walk (3 min)",
        "methodType": "train",
        "connectedStation": "Osaka-Namba Station",
        "stationWalk": "Midosuji Line 1 stop (2 min) ➔ Exit 14 ➔ Walk 3 min (250m) to Ebisu Bridge",
        "transitSummary": "Subway 1 stop to Namba ➔ Exit 14 ➔ Walk 3 min (250m)",
        "note": "Walk 3 min to Daikokucho Station ➔ Take Midosuji Line 1 stop to Namba Station (2 min, ¥190) ➔ Exit 14 ➔ Walk 3 min north directly onto Ebisu Bridge in front of the giant Glico Running Man neon sign, Kani Doraku crab, and bustling Shinsaibashi-suji shopping arcade.",
        "mapQuery": "Dotonbori Glico Sign",
        "lat": 34.6687,
        "lng": 135.5013
      },
      {
        "time": "20:00–21:30",
        "title": "Dinner: Halal Restaurant Matsuri",
        "costJpy": 2200,
        "costMyr": 65,
        "category": "food",
        "halal": true,
        "halalNote": "Halal Takoyaki & Sukiyaki",
        "transitMethod": "Subway (7 min) + Walk (4 min)",
        "methodType": "train",
        "connectedStation": "Nodahanshin Station",
        "stationWalk": "Sennichimae Line 4 stops to Nodahanshin ➔ Exit 7 ➔ Walk 4 min (300m)",
        "transitSummary": "Subway Sennichimae Line 7 min ➔ Exit 7 ➔ Walk 4 min (300m)",
        "note": "From Namba Station, board Osaka Metro Sennichimae Line 4 stops to Nodahanshin Station (7 min, ¥240) ➔ Exit 7 ➔ Walk 4 min (300m) to Halal Restaurant Matsuri. DIY Halal takoyaki, okonomiyaki, and sukiyaki with dedicated prayer space.",
        "mapQuery": "Halal Restaurant Matsuri Osaka",
        "lat": 34.6945,
        "lng": 135.4746
      },
      {
        "time": "21:30–22:30",
        "title": "Return to Plum Hotel Osaka",
        "costJpy": 240,
        "costMyr": 7,
        "category": "logistics",
        "halal": null,
        "transitMethod": "Subway (10 min) + Walk (3 min)",
        "methodType": "train",
        "connectedStation": "Daikokucho Station",
        "stationWalk": "Subway to Daikokucho Exit 1 ➔ Walk 3 min (250m) to Plum Hotel",
        "transitSummary": "Subway to Daikokucho Station ➔ Walk 3 min to hotel",
        "note": "Board Sennichimae Line from Nodahanshin to Namba (7 min), transfer to Midosuji Line 1 stop to Daikokucho Station (2 min, ¥240) ➔ Take Exit 1, walk 3 min back to Plum Hotel Osaka.",
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
        "time": "08:30–09:00",
        "title": "Plum Hotel ➔ Osaka-Namba Station",
        "costJpy": 0,
        "costMyr": 0,
        "category": "transit",
        "halal": null,
        "transitMethod": "Walk (8 min)",
        "methodType": "walk",
        "connectedStation": "Osaka-Namba Station",
        "stationWalk": "Walk 8 min (650m) north to Kintetsu ticket gates",
        "transitSummary": "Walk 8 min (650m) north to Osaka-Namba Station",
        "note": "Depart Plum Hotel Osaka. Walk north 8 min (650m) along Daikokucho and Midosuji directly into Osaka-Namba Station Kintetsu underground concourse.",
        "mapQuery": "Osaka-Namba Station",
        "lat": 34.6669,
        "lng": 135.5003
      },
      {
        "time": "09:00–10:00",
        "title": "Osaka-Namba ➔ Nara (Kintetsu Rapid Express)",
        "costJpy": 680,
        "costMyr": 20,
        "category": "transit",
        "halal": null,
        "transitMethod": "Train (Kintetsu Line)",
        "methodType": "train",
        "connectedStation": "Kintetsu-Nara Station",
        "stationWalk": "Board Platform 1/2 ➔ 38 min direct to Kintetsu-Nara underground terminal",
        "transitSummary": "Kintetsu Rapid Express (38 min direct, ¥680 / ~RM 20 pp)",
        "note": "Enter Kintetsu Ticket Gate (Platform 1/2). Board Kintetsu Nara Line Rapid Express (Kaisoku-Kyuko). 38 min direct through Mt. Ikoma Tunnel into Kintetsu-Nara Station (38 min, 6 stops, ¥680).",
        "mapQuery": "Kintetsu-Nara Station",
        "lat": 34.6841,
        "lng": 135.8282
      },
      {
        "time": "10:00–14:00",
        "title": "Nara Park & Todai-ji (Sacred Bowing Deer)",
        "costJpy": 600,
        "costMyr": 18,
        "category": "sightseeing",
        "halal": null,
        "transitMethod": "Walk (5 min into park)",
        "methodType": "walk",
        "connectedStation": "Kintetsu-Nara Station",
        "stationWalk": "Take Exit 2 ➔ Walk 5 min (400m) east on Noborioji-dori into park",
        "transitSummary": "Walk 5 min east directly into Nara Park grounds",
        "note": "Take Exit 2 from Kintetsu-Nara Station ➔ Walk 5 min (400m) east up Noborioji-dori into Nara Park. Purchase deer crackers (¥200) to feed friendly bowing sika deer. Continue walking 8 min through park to Todai-ji Daibutsuden (Great Bronze Buddha Hall, entry ¥600).",
        "mapQuery": "Nara Park",
        "lat": 34.6851,
        "lng": 135.843
      },
      {
        "time": "14:00–15:00",
        "title": "Nara ➔ Osaka-Namba (Return Train)",
        "costJpy": 680,
        "costMyr": 20,
        "category": "transit",
        "halal": null,
        "transitMethod": "Train (Kintetsu Line) + Walk",
        "methodType": "train",
        "connectedStation": "Osaka-Namba Station",
        "stationWalk": "Kintetsu train 38 min ➔ Walk 8 min back to Plum Hotel",
        "transitSummary": "Kintetsu Rapid Express 38 min ➔ Walk 8 min to hotel",
        "note": "Walk 10 min back from Todai-ji to Kintetsu-Nara Station ➔ Board Kintetsu Nara Line Rapid Express back to Osaka-Namba Station (38 min, ¥680). Walk 8 min back to Plum Hotel for brief rest and prayer.",
        "mapQuery": "Plum Hotel Osaka",
        "lat": 34.6565,
        "lng": 135.4985
      },
      {
        "time": "16:00–16:30",
        "title": "Plum Hotel ➔ Umeda Station (Subway)",
        "costJpy": 240,
        "costMyr": 7,
        "category": "transit",
        "halal": null,
        "transitMethod": "Subway (12 min) + Walk (9 min)",
        "methodType": "train",
        "connectedStation": "JR Osaka / Umeda Station",
        "stationWalk": "Midosuji Line 12 min ➔ North Central Exit ➔ Walk 9 min (650m) via underground walkway",
        "transitSummary": "Subway Midosuji Line 12 min ➔ Walk 9 min (650m) to Umeda Sky",
        "note": "Walk 3 min to Daikokucho Station ➔ Board Osaka Metro Midosuji Line (Platform 2) direct to Umeda Station (12 min, 5 stops, ¥240) ➔ Exit North Central Gate ➔ Walk 9 min (650m) through underground walkway to Umeda Sky Building.",
        "mapQuery": "Umeda Sky Building",
        "lat": 34.7059,
        "lng": 135.4904
      },
      {
        "time": "16:30–18:30",
        "title": "Umeda Sky Building Floating Garden (Sunset View)",
        "costJpy": 1500,
        "costMyr": 45,
        "category": "sightseeing",
        "halal": null,
        "transitMethod": "Elevator & Escalator Observation Walk",
        "methodType": "walk",
        "connectedStation": "Umeda Station",
        "stationWalk": "Glass elevator 35F + suspended escalator to 40F rooftop (9 min walk from Umeda)",
        "transitSummary": "Kuchu Teien 360° open-air rooftop observatory",
        "note": "Ride glass elevator to 35F, then travel up the futuristic suspended tube escalator bridging the twin towers to Kuchu Teien Observatory (entry ¥1,500). Spectacular 360° open-air sunset views over Osaka skyline and Yodo River at 17:05 sunset.",
        "mapQuery": "Umeda Sky Building Floating Garden",
        "lat": 34.7059,
        "lng": 135.4904
      },
      {
        "time": "18:30–20:30",
        "title": "Dinner: Ali's Kitchen Pakistani (Shinsaibashi)",
        "costJpy": 2000,
        "costMyr": 60,
        "category": "food",
        "halal": true,
        "halalNote": "Halal Certified Biryani & Curries",
        "transitMethod": "Subway (6 min) + Walk (3 min)",
        "methodType": "train",
        "connectedStation": "Shinsaibashi Station",
        "stationWalk": "Midosuji Line 3 stops to Shinsaibashi ➔ Exit 6 ➔ Walk 3 min (250m)",
        "transitSummary": "Subway Midosuji Line 6 min ➔ Exit 6 ➔ Walk 3 min",
        "note": "Walk 9 min back to Umeda Station ➔ Board Midosuji Line (Platform 1) 3 stops south to Shinsaibashi Station (6 min, ¥240) ➔ Exit 6, walk 3 min (250m) to Ali's Kitchen (award-winning Halal Pakistani biryani, mutton nihari, and naan).",
        "mapQuery": "Ali's Kitchen Osaka",
        "lat": 34.675,
        "lng": 135.5003
      },
      {
        "time": "20:30–21:30",
        "title": "Return to Plum Hotel Osaka",
        "costJpy": 190,
        "costMyr": 6,
        "category": "logistics",
        "halal": null,
        "transitMethod": "Subway (4 min) or Walk (12 min)",
        "methodType": "walk",
        "connectedStation": "Daikokucho Station",
        "stationWalk": "Midosuji Line 1 stop to Daikokucho ➔ Walk 3 min back to hotel",
        "transitSummary": "Midosuji Line 1 stop ➔ Walk 3 min to Plum Hotel",
        "note": "Board Midosuji Line 1 stop from Shinsaibashi to Daikokucho Station (4 min, ¥190) ➔ Exit 1, walk 3 min back to Plum Hotel Osaka. Rest well for Kyoto tomorrow.",
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
        "time": "09:00–10:00",
        "title": "Check out Plum Hotel ➔ Transit to Umeda",
        "costJpy": 240,
        "costMyr": 7,
        "category": "transit",
        "halal": null,
        "transitMethod": "Walk (3 min) + Subway (12 min)",
        "methodType": "train",
        "connectedStation": "Daikokucho Station",
        "stationWalk": "Walk 3 min to Daikokucho ➔ Subway Midosuji Line to Umeda (12 min)",
        "transitSummary": "Walk 3 min ➔ Subway to Umeda Station (12 min, ¥240)",
        "note": "Check out of Plum Hotel Osaka by 9:00am. Walk 3 min to Daikokucho Station ➔ Board Midosuji Line to Umeda Station (12 min, ¥240). Walk through underground concourse (3 min, 200m) to Hankyu Osaka-Umeda Station.",
        "mapQuery": "Osaka-Umeda Station",
        "lat": 34.704,
        "lng": 135.498
      },
      {
        "time": "10:00–11:00",
        "title": "Osaka ➔ Kyoto-Kawaramachi (Hankyu Limited Express)",
        "costJpy": 410,
        "costMyr": 12,
        "category": "transit",
        "halal": null,
        "transitMethod": "Train (Hankyu Kyoto Line)",
        "methodType": "train",
        "connectedStation": "Kyoto-Kawaramachi Station",
        "stationWalk": "Board Platform 1/2/3 ➔ 43 min direct to Kyoto-Kawaramachi Station",
        "transitSummary": "Hankyu Limited Express (43 min direct, ¥410 / ~RM 12 pp)",
        "note": "Board Hankyu Kyoto Line Limited Express at Hankyu Osaka-Umeda Station. Fast, comfortable direct train into Kyoto-Kawaramachi Station terminus (43 min, ¥410). Arrives right in downtown Kyoto next to Gion.",
        "mapQuery": "Kyoto-Kawaramachi Station",
        "lat": 35.0039,
        "lng": 135.7695
      },
      {
        "time": "11:00–12:00",
        "title": "Kyoto-Kawaramachi ➔ Rinn Shirakawa South (Luggage Drop)",
        "costJpy": 0,
        "costMyr": 0,
        "category": "logistics",
        "halal": null,
        "transitMethod": "Walk (8 min across Kamogawa)",
        "methodType": "walk",
        "connectedStation": "Gion-Shijo / Kyoto-Kawaramachi",
        "stationWalk": "Exit 1B ➔ Walk 8 min (600m) east across Shijo Bridge into Gion canal",
        "transitSummary": "Walk 8 min (600m) east across Shijo Bridge into Gion",
        "note": "Take Exit 1B from Kyoto-Kawaramachi Station ➔ Walk east 8 min (600m) across Shijo Bridge over Kamogawa River into Gion. Follow the weeping willows along the Shirakawa canal north to Rinn Shirakawa South. Drop luggage at reception.",
        "mapQuery": "Rinn Shirakawa South Kyoto",
        "lat": 35.0062,
        "lng": 135.776
      },
      {
        "time": "12:00–14:00",
        "title": "Lunch: Halal Ramen Ayam Ya Karasuma",
        "costJpy": 1300,
        "costMyr": 39,
        "category": "food",
        "halal": true,
        "halalNote": "Halal Certified Chicken Ramen",
        "transitMethod": "Train (1 stop) or Walk (15 min)",
        "methodType": "train",
        "connectedStation": "Karasuma Station",
        "stationWalk": "Hankyu train 1 stop (2 min) ➔ Exit 13 ➔ Walk 4 min (300m)",
        "transitSummary": "Hankyu train 1 stop to Karasuma ➔ Exit 13 ➔ Walk 4 min",
        "note": "Walk 5 min to Kyoto-Kawaramachi Station ➔ Take Hankyu Line 1 stop to Karasuma Station (2 min, ¥170) ➔ Exit 13, walk 4 min (300m) to Halal Ramen Ayam Ya Karasuma (famed for creamy tori paitan broth, spicy ramen, and tsukemen).",
        "mapQuery": "Ayam YA Karasuma Kyoto",
        "lat": 35.0037,
        "lng": 135.7592
      },
      {
        "time": "15:00–16:30",
        "title": "Check in Rinn Shirakawa South & Settle in",
        "costJpy": 0,
        "costMyr": 0,
        "category": "logistics",
        "halal": null,
        "transitMethod": "Walk (15 min back across river)",
        "methodType": "walk",
        "connectedStation": "Gion-Shijo Station",
        "stationWalk": "Walk 15 min east across Kamogawa to Rinn Shirakawa South Base",
        "transitSummary": "Walk 15 min east across Kamogawa to hotel",
        "note": "Walk 15 min back across Kamogawa river into Gion Shirakawa. Check-in at Rinn Shirakawa South (opens 3:00pm). Settle into boutique Kyoto machiya rooms and perform prayer.",
        "mapQuery": "Rinn Shirakawa South Kyoto",
        "lat": 35.0062,
        "lng": 135.776
      },
      {
        "time": "16:30–18:30",
        "title": "Gion Shirakawa Canal & Kamogawa Twilight Walk",
        "costJpy": 0,
        "costMyr": 0,
        "category": "sightseeing",
        "halal": null,
        "transitMethod": "Walk (Direct from hotel door)",
        "methodType": "walk",
        "connectedStation": "Gion-Shijo Station",
        "stationWalk": "Walk 3 min to Tatsumi Bridge & Shirakawa stone paths",
        "transitSummary": "Direct walking stroll through Gion preservation district",
        "note": "Step directly outside the hotel into Gion Shirakawa preservation district. Stroll along the Shirakawa canal over Tatsumi Bridge, photograph traditional wooden machiya teahouses, and walk along the Kamogawa riverbanks during twilight blue hour.",
        "mapQuery": "Gion Shirakawa Canal Kyoto",
        "lat": 35.0055,
        "lng": 135.7745
      },
      {
        "time": "18:30–20:30",
        "title": "Dinner: Halal Wagyu Yakiniku Panga Gion",
        "costJpy": 4500,
        "costMyr": 135,
        "category": "food",
        "halal": true,
        "halalNote": "Certified Halal Japanese A5 Wagyu Beef",
        "transitMethod": "Walk (5 min)",
        "methodType": "walk",
        "connectedStation": "Gion-Shijo Station",
        "stationWalk": "Walk 5 min (350m) south along Yamatooji-dori",
        "transitSummary": "Walk 5 min (350m) south along Yamatooji-dori",
        "note": "Walk south 5 min (350m) along Yamatooji-dori to Halal Wagyu Yakiniku Panga Gion. Premium Halal-certified Japanese A5 Wagyu beef grilled table-side.",
        "mapQuery": "Halal Wagyu Yakiniku Panga Gion",
        "lat": 35.0028,
        "lng": 135.7735
      },
      {
        "time": "20:30–21:30",
        "title": "Return to Rinn Shirakawa South Kyoto",
        "costJpy": 0,
        "costMyr": 0,
        "category": "logistics",
        "halal": null,
        "transitMethod": "Walk (5 min)",
        "methodType": "walk",
        "connectedStation": "Gion-Shijo Station",
        "stationWalk": "Walk 5 min (350m) north back along canal to hotel",
        "transitSummary": "Walk 5 min (350m) north back along canal to hotel",
        "note": "Stroll 5 min north back along the tranquil canal to Rinn Shirakawa South. Rest well for full Kyoto classics day tomorrow.",
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
        "time": "08:00–08:30",
        "title": "Rinn Shirakawa South ➔ Kiyomizu-dera (Bus)",
        "costJpy": 230,
        "costMyr": 7,
        "category": "transit",
        "halal": null,
        "transitMethod": "Bus (8 min) + Walk (8 min uphill)",
        "methodType": "bus",
        "connectedStation": "Gion-Shijo / Kiyomizumichi",
        "stationWalk": "Bus #207 from Gion (8 min) ➔ Walk 8 min (500m) up Kiyomizu-zaka",
        "transitSummary": "Kyoto Bus #207 (8 min) ➔ Walk 8 min uphill (¥230)",
        "note": "Walk 5 min south to Shijo-dori ➔ Board Kyoto City Bus #207 (eastbound) at Gion bus stop ➔ Ride 8 min to Kiyomizumichi bus stop (¥230). Walk 8 min (500m) up the scenic Kiyomizu-zaka shopping slope to the temple gates.",
        "mapQuery": "Kiyomizu-dera Kyoto",
        "lat": 34.9949,
        "lng": 135.785
      },
      {
        "time": "08:30–10:30",
        "title": "Kiyomizu-dera Temple (Pure Water Stage)",
        "costJpy": 400,
        "costMyr": 12,
        "category": "sightseeing",
        "halal": null,
        "transitMethod": "Temple Walking Tour",
        "methodType": "walk",
        "connectedStation": "Kiyomizu-Gojo / Kiyomizumichi",
        "stationWalk": "Walk through temple grounds & Otowa waterfall (entry ¥400)",
        "transitSummary": "Iconic 13-meter timber stage & Otowa spring waters",
        "note": "Enter via Deva Gate. Walk through the main hall and onto the iconic 13-meter-high wooden stage built without a single nail overlooking the cherry and maple forest. Visit the Otowa Waterfall beneath to drink from the sacred streams.",
        "mapQuery": "Kiyomizu-dera Temple",
        "lat": 34.9949,
        "lng": 135.785
      },
      {
        "time": "10:30–12:00",
        "title": "Sannenzaka & Ninenzaka Historic Slopes Stroll",
        "costJpy": 0,
        "costMyr": 0,
        "category": "sightseeing",
        "halal": null,
        "transitMethod": "Walk (Scenic stone-paved downhill)",
        "methodType": "walk",
        "connectedStation": "Gion-Shijo Station",
        "stationWalk": "Walk down 20 min (1.2km) past Yasaka Pagoda towards Gion",
        "transitSummary": "Downhill stroll through stone-paved preservation alleys",
        "note": "Walk down directly from Kiyomizu-dera onto the historic stone-paved pedestrian alleys of Sannenzaka and Ninenzaka. Pass the famous Yasaka Pagoda (Hokan-ji), traditional pottery shops, and wooden machiya cafes (20 min walk, 1.2km).",
        "mapQuery": "Sannenzaka Kyoto",
        "lat": 34.9985,
        "lng": 135.7808
      },
      {
        "time": "12:30–14:30",
        "title": "Nishiki Market (Kyoto's 400-Year Food Alley)",
        "costJpy": 1500,
        "costMyr": 45,
        "category": "sightseeing",
        "halal": null,
        "transitMethod": "Walk (15 min west) or Bus (6 min)",
        "methodType": "walk",
        "connectedStation": "Kyoto-Kawaramachi Station",
        "stationWalk": "Walk 15 min west across Kamogawa ➔ Exit 9 ➔ Walk 3 min into market",
        "transitSummary": "Walk 15 min west across Shijo Bridge into market arcade",
        "note": "Walk west 15 min (1.1km) through Yasaka Shrine and across Shijo Bridge along Shijo-dori (or take Bus #207 for 6 min, ¥230) ➔ Turn north at Teramachi into Nishiki Market arcade. Explore the 400-meter narrow market lane with fresh strawberries, daifuku, roasted chestnuts, and Japanese culinary crafts.",
        "mapQuery": "Nishiki Market Kyoto",
        "lat": 35.005,
        "lng": 135.7649
      },
      {
        "time": "15:00–15:30",
        "title": "Nishiki Market ➔ Kinkaku-ji (Direct Bus #12/#205)",
        "costJpy": 230,
        "costMyr": 7,
        "category": "transit",
        "halal": null,
        "transitMethod": "Bus (35 min) or Subway + Bus",
        "methodType": "bus",
        "connectedStation": "Kita-Oji Station / Kinkakuji-michi",
        "stationWalk": "Bus #12 from Shijo-Karasuma (35 min) direct to Kinkakuji-mae",
        "transitSummary": "Kyoto City Bus #12 (35 min direct, ¥230 pp)",
        "note": "Walk 3 min south to Shijo-Karasuma bus stop ➔ Board Kyoto City Bus #12 (direct to Kinkakuji-mae, 35 min, ¥230) OR take Karasuma Subway Line north to Kita-Oji Station (9 min, ¥260), then board Bus #205 direct to Kinkakuji-michi (10 min, ¥230). Walk 2 min to entrance.",
        "mapQuery": "Kinkaku-ji Kyoto",
        "lat": 35.0394,
        "lng": 135.7292
      },
      {
        "time": "15:30–17:00",
        "title": "Kinkaku-ji (The Golden Pavilion)",
        "costJpy": 500,
        "costMyr": 15,
        "category": "sightseeing",
        "halal": null,
        "transitMethod": "Garden Walking Tour",
        "methodType": "walk",
        "connectedStation": "Kita-Oji Station / Kinkakuji-michi",
        "stationWalk": "Stroll around Mirror Pond garden (entry ¥500)",
        "transitSummary": "Zen temple covered in pure gold leaf shimmering on pond",
        "note": "Walk through the serene pine path to Kyoko-chi (Mirror Pond). Marvel at the top two floors completely covered in brilliant gold leaf shimmering on the reflective water in winter afternoon light. Stroll through the tea garden and stone pagoda path.",
        "mapQuery": "Kinkaku-ji Temple",
        "lat": 35.0394,
        "lng": 135.7292
      },
      {
        "time": "17:00–18:00",
        "title": "Kinkaku-ji ➔ Gion Base (Return Bus #12/#205)",
        "costJpy": 230,
        "costMyr": 7,
        "category": "transit",
        "halal": null,
        "transitMethod": "Bus (35 min) + Walk (5 min)",
        "methodType": "bus",
        "connectedStation": "Gion-Shijo Station",
        "stationWalk": "Bus #12/#205 to Shijo-Kawaramachi ➔ Walk 5 min to hotel",
        "transitSummary": "Bus #12 or #205 (35 min, ¥230) ➔ Walk 5 min to hotel",
        "note": "Board Kyoto City Bus #12 or #205 at Kinkakuji-michi bus stop ➔ Ride 35–40 min direct back to Shijo-Kawaramachi / Gion bus stop (¥230). Walk 5 min to Rinn Shirakawa South.",
        "mapQuery": "Rinn Shirakawa South Kyoto",
        "lat": 35.0062,
        "lng": 135.776
      },
      {
        "time": "18:30–20:30",
        "title": "Dinner: Halal Wagyu Panga or Ayam Ya",
        "costJpy": 2500,
        "costMyr": 75,
        "category": "food",
        "halal": true,
        "halalNote": "Halal Certified Dinner",
        "transitMethod": "Walk (5 min)",
        "methodType": "walk",
        "connectedStation": "Gion-Shijo Station",
        "stationWalk": "Walk 5 min to Wagyu Panga in Gion",
        "transitSummary": "Walk 5 min to Halal Wagyu Panga or Ayam Ya",
        "note": "Walk 5 min south to Wagyu Panga in Gion OR take 1-stop Hankyu train to Karasuma for Ayam Ya. Return to Rinn Shirakawa South. Pack bags for overnight sleeper bus to Tokyo tomorrow!",
        "mapQuery": "Halal Wagyu Yakiniku Panga Gion",
        "lat": 35.0028,
        "lng": 135.7735
      }
    ]
  },
  {
    "day": 5,
    "date": "Wed, 20 Jan 2027",
    "city": "Kyoto → Tokyo",
    "cityTag": "Kyoto → Tokyo Sleeper Bus",
    "weather": "8°C • Tokyo Metropolis",
    "theme": "🚌 Kyoto → Tokyo Overnight Sleeper Bus • Tokyo Arrival & Evening Lights",
    "image": "./images/hero-banner.jpg",
    "hotel": {
      "name": "Tokyo Hotel (Choose 1)",
      "nights": "5:00pm (Day 5) – 9:30am (Day 9) • 4 Nights Base",
      "notes": "Central Tokyo hotel base (stay until departure)",
      "mapQuery": "Hotel Tavinos Asakusa Tokyo"
    },
    "activities": [
      {
        "time": "11:30–12:00",
        "title": "Check out Rinn Shirakawa South ➔ Kyoto Station",
        "costJpy": 230,
        "costMyr": 7,
        "category": "transit",
        "halal": null,
        "transitMethod": "Bus (15 min) or Taxi (10 min)",
        "methodType": "bus",
        "connectedStation": "Kyoto Station",
        "stationWalk": "Bus #206 from Gion-Shijo (15 min, ¥230) ➔ Kyoto Station Karasuma Concourse",
        "transitSummary": "Bus #206 (15 min, ¥230) or Taxi (~¥1,200 for 4) to station",
        "note": "Check out of Rinn Shirakawa South by 11:30am with all luggage. Walk 5 min to Gion-Shijo bus stop ➔ Board Kyoto City Bus #206 (direct to Kyoto Station, 15 min, ¥230) OR take a quick 10-min taxi (~¥1,200 for 4 with suitcases directly to Kyoto Station Hachijo Entrance).",
        "mapQuery": "Kyoto Station",
        "lat": 34.9858,
        "lng": 135.7588
      },
      {
        "time": "12:00–14:00",
        "title": "Kyoto Station Grand Atrium & Ekiben / Lunch",
        "costJpy": 1200,
        "costMyr": 36,
        "category": "food",
        "halal": null,
        "transitMethod": "Station Concourse Walk",
        "methodType": "walk",
        "connectedStation": "Kyoto Station",
        "stationWalk": "Explore 15-story station atrium ➔ Hachijo bus gates",
        "transitSummary": "Explore futuristic station & purchase Halal bento / snacks",
        "note": "Explore the futuristic 15-story Kyoto Station grand cathedral atrium. Purchase Halal bento / Ekiben, snacks, and matcha treats at the station concourse.",
        "mapQuery": "Kyoto Station",
        "lat": 34.9858,
        "lng": 135.7588
      },
      {
        "time": "14:00–16:30",
        "title": "Kyoto ➔ Tokyo (Overnight Sleeper Bus)",
        "costJpy": 5500,
        "costMyr": 165,
        "category": "transit",
        "halal": null,
        "transitMethod": "Overnight Highway Coach (Willer Express / JR Dream Coach)",
        "methodType": "bus",
        "connectedStation": "Tokyo Station (Yaesu Exit)",
        "stationWalk": "Kyoto Station Hachijo ➔ Scenic overnight highway coach ➔ Arrive Tokyo",
        "transitSummary": "Overnight Sleeper Bus (7 hrs, ¥5,500 / ~RM 165 pp)",
        "note": "Board comfortable overnight sleeper highway coach (Willer Express / JR Dream Coach) at Kyoto Station Hachijo Exit. Enjoy deep-reclining seats with canopy cover, blanket, and charging ports. Smooth, scenic highway overnight travel across the Tomei Expressway directly to Tokyo Station Yaesu Exit.",
        "mapQuery": "Tokyo Station Yaesu Exit",
        "lat": 35.6812,
        "lng": 139.7671
      },
      {
        "time": "16:30–17:00",
        "title": "Tokyo Station ➔ Hotel Tavinos Asakusa",
        "costJpy": 180,
        "costMyr": 5,
        "category": "transit",
        "halal": null,
        "transitMethod": "Subway (12 min) + Walk (3–6 min)",
        "methodType": "train",
        "connectedStation": "Asakusa Station",
        "stationWalk": "Ginza Line from Nihombashi/Kanda to Asakusa ➔ Walk 3–6 min to hotel",
        "transitSummary": "Subway Ginza Line 12 min ➔ Walk 3–6 min to hotel",
        "note": "Exit Tokyo Station via Yaesu North Exit. Walk 4 min underground to Nihombashi Station ➔ Board Tokyo Metro Ginza Line direct to Asakusa Station (12 min, 6 stops, ¥180) ➔ Take Exit 1 or Tsukuba Express Asakusa Exit A1 ➔ Walk 3–6 min (280–550m) to Hotel Tavinos Asakusa (4-night Tokyo base).",
        "mapQuery": "Hotel Tavinos Asakusa",
        "lat": 35.7171,
        "lng": 139.7915
      },
      {
        "time": "17:00–18:30",
        "title": "Check in Hotel Tavinos Asakusa & Unpack",
        "costJpy": 0,
        "costMyr": 0,
        "category": "logistics",
        "halal": null,
        "transitMethod": "Hotel Base Check-in",
        "methodType": "walk",
        "connectedStation": "Asakusa Station",
        "stationWalk": "Check in 4-night base hotel in Asakusa",
        "transitSummary": "Check in at Hotel Tavinos Asakusa (4 Nights Base)",
        "note": "Check-in at Hotel Tavinos front desk. Settle into the pop-art comic-themed rooms, unpack for the 4-night stay, and perform prayer.",
        "mapQuery": "Hotel Tavinos Asakusa",
        "lat": 35.7171,
        "lng": 139.7915
      },
      {
        "time": "18:30–20:00",
        "title": "Dinner: HALAL SAKURA (Asakusa)",
        "costJpy": 2200,
        "costMyr": 65,
        "category": "food",
        "halal": true,
        "halalNote": "Halal Certified Hotpot & Sukiyaki",
        "transitMethod": "Walk (8 min)",
        "methodType": "walk",
        "connectedStation": "Asakusa Station",
        "stationWalk": "Walk north 8 min (600m) along Kototoi-dori",
        "transitSummary": "Walk 8 min (600m) north along Kototoi-dori",
        "note": "Walk north 8 min (600m) along Kototoi-dori to HALAL SAKURA (certified Halal hotpot, sukiyaki, ramen, and Japanese curry).",
        "mapQuery": "HALAL SAKURA Asakusa Tokyo",
        "lat": 35.7185,
        "lng": 139.796
      },
      {
        "time": "20:00–21:30",
        "title": "Senso-ji Temple & Kaminarimon Illumination Walk",
        "costJpy": 0,
        "costMyr": 0,
        "category": "sightseeing",
        "halal": null,
        "transitMethod": "Walk (4 min)",
        "methodType": "walk",
        "connectedStation": "Asakusa Station",
        "stationWalk": "Walk 4 min (350m) south through temple grounds",
        "transitSummary": "Walk 4 min (350m) south into Senso-ji grounds",
        "note": "Walk south 4 min (350m) into the grounds of Senso-ji, Tokyo's oldest Buddhist temple (founded AD 628). Enjoy the towering 5-story pagoda and giant Kaminarimon red lantern illuminated against the night sky without daytime crowds.",
        "mapQuery": "Senso-ji Temple Asakusa",
        "lat": 35.7148,
        "lng": 139.7967
      },
      {
        "time": "21:30–22:00",
        "title": "Return to Hotel Tavinos Asakusa",
        "costJpy": 0,
        "costMyr": 0,
        "category": "logistics",
        "halal": null,
        "transitMethod": "Walk (5 min)",
        "methodType": "walk",
        "connectedStation": "Asakusa Station",
        "stationWalk": "Walk 5 min (400m) north back to hotel",
        "transitSummary": "Walk 5 min (400m) north back to hotel",
        "note": "Walk 5 min (400m) north through the quiet temple courtyard back to Hotel Tavinos Asakusa. Rest well for early GALA Yuzawa ski train tomorrow!",
        "mapQuery": "Hotel Tavinos Asakusa",
        "lat": 35.7171,
        "lng": 139.7915
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
        "time": "06:15–06:45",
        "title": "Hotel Tavinos Asakusa ➔ Tokyo / Ueno Station",
        "costJpy": 180,
        "costMyr": 5,
        "category": "transit",
        "halal": null,
        "transitMethod": "Walk (6 min) + Subway (5 min)",
        "methodType": "train",
        "connectedStation": "Asakusa Station ➔ Ueno Station",
        "stationWalk": "Ginza Line 3 stops to Ueno (5 min) ➔ Walk 3 min to Shinkansen gates",
        "transitSummary": "Subway Ginza Line 5 min to Ueno Station (¥180)",
        "note": "Walk 6 min to Tokyo Metro Asakusa Station ➔ Board Ginza Line 3 stops direct to Ueno Station (5 min, ¥180). Walk through underground concourse (3 min) to JR Ueno Station Shinkansen Ticket Gate (or continue 3 stops to Tokyo Station).",
        "mapQuery": "Ueno Station Tokyo",
        "lat": 35.7141,
        "lng": 139.7774
      },
      {
        "time": "07:00–08:30",
        "title": "Tokyo / Ueno ➔ GALA Yuzawa (Joetsu Shinkansen)",
        "costJpy": 7000,
        "costMyr": 205,
        "category": "transit",
        "halal": null,
        "transitMethod": "High-Speed Rail (Joetsu Shinkansen)",
        "methodType": "train",
        "connectedStation": "GALA Yuzawa Station",
        "stationWalk": "Board Platform 19/20 at Ueno ➔ 75 min direct through Alps tunnel",
        "transitSummary": "JR Joetsu Shinkansen (75 min direct, ~¥7,000 / JR Pass)",
        "note": "Board JR Joetsu Shinkansen Tanigawa (Platform 19/20 at Ueno, or 20–23 at Tokyo). Speed north through Saitama and Gunma, then pass through the 22.2km Daishimizu Tunnel beneath the snow-capped Tanigawa mountain range straight into GALA Yuzawa Station (75 min direct, ~¥7,000 pp or covered by JR Tokyo Wide Pass).",
        "mapQuery": "GALA Yuzawa Station",
        "lat": 36.9508,
        "lng": 138.8005
      },
      {
        "time": "08:30–15:30",
        "title": "GALA Yuzawa Snow Resort (Gondola, Sledding & Play)",
        "costJpy": 3500,
        "costMyr": 105,
        "category": "sightseeing",
        "halal": null,
        "transitMethod": "Direct inside station! (0 min walk) + Gondola",
        "methodType": "walk",
        "connectedStation": "GALA Yuzawa Station",
        "stationWalk": "Train platform exits directly inside ski rental concourse (0 min walk!)",
        "transitSummary": "Direct ski terminal inside station • Gondola to Cheers area",
        "note": "The train platform exits directly inside the GALA Yuzawa Ski Center (Cowabunga Station)! No bus or walking required. Rent snow boots, gloves, and sleds on 2F. Board the 8-person Diligence Gondola right inside the terminal up to the mountain alpine area (Cheers, 800m elevation). Sled down snow slopes, take photos against snow peaks, and enjoy hot cocoa.",
        "mapQuery": "GALA Yuzawa Snow Resort",
        "lat": 36.9508,
        "lng": 138.8005
      },
      {
        "time": "15:30–16:00",
        "title": "Gondola Down to GALA Yuzawa Concourse",
        "costJpy": 0,
        "costMyr": 0,
        "category": "transit",
        "halal": null,
        "transitMethod": "Gondola (8 min)",
        "methodType": "gondola",
        "connectedStation": "GALA Yuzawa Station",
        "stationWalk": "Gondola ride down to ski center concourse & Shinkansen gates",
        "transitSummary": "Gondola ride down to station ticket gates",
        "note": "Ride the Diligence Gondola down to the base terminal. Return rental gear, browse Niigata rice cracker and souvenir stalls, and proceed to the Shinkansen gates.",
        "mapQuery": "GALA Yuzawa Station",
        "lat": 36.9508,
        "lng": 138.8005
      },
      {
        "time": "16:00–17:30",
        "title": "GALA Yuzawa ➔ Tokyo (Return Joetsu Shinkansen)",
        "costJpy": 7000,
        "costMyr": 205,
        "category": "transit",
        "halal": null,
        "transitMethod": "High-Speed Rail (Joetsu Shinkansen)",
        "methodType": "train",
        "connectedStation": "Ueno / Tokyo Station",
        "stationWalk": "75 min direct return bullet train to Ueno/Tokyo",
        "transitSummary": "JR Joetsu Shinkansen (75 min direct return, ~¥7,000 / JR Pass)",
        "note": "Board return Joetsu Shinkansen at GALA Yuzawa Station (Platform 1/2) ➔ Ride 75 min direct back to Ueno Station (17:15) or Tokyo Station (17:28).",
        "mapQuery": "Ueno Station Tokyo",
        "lat": 35.7141,
        "lng": 139.7774
      },
      {
        "time": "17:30–18:00",
        "title": "Ueno Station ➔ Hotel Tavinos Asakusa",
        "costJpy": 180,
        "costMyr": 5,
        "category": "transit",
        "halal": null,
        "transitMethod": "Subway (5 min) + Walk (6 min)",
        "methodType": "train",
        "connectedStation": "Asakusa Station",
        "stationWalk": "Ginza Line 3 stops to Asakusa ➔ Walk 6 min back to hotel",
        "transitSummary": "Subway Ginza Line 5 min ➔ Walk 6 min to hotel",
        "note": "Transfer at Ueno Station to Tokyo Metro Ginza Line ➔ Ride 3 stops to Asakusa Station (5 min, ¥180) ➔ Walk 6 min back to Hotel Tavinos Asakusa.",
        "mapQuery": "Hotel Tavinos Asakusa",
        "lat": 35.7171,
        "lng": 139.7915
      },
      {
        "time": "18:30–20:30",
        "title": "Dinner: Gyumon Halal Ramen & Yakiniku Asakusa",
        "costJpy": 2200,
        "costMyr": 65,
        "category": "food",
        "halal": true,
        "halalNote": "Halal Certified Beef Ramen & Yakiniku",
        "transitMethod": "Walk (5 min)",
        "methodType": "walk",
        "connectedStation": "Asakusa Station",
        "stationWalk": "Walk 5 min (400m) from hotel",
        "transitSummary": "Walk 5 min (400m) from hotel to Gyumon",
        "note": "Walk 5 min (400m) from hotel to Gyumon Asakusa for Halal-certified grilled beef and piping hot beef ramen.",
        "mapQuery": "Gyumon Halal Asakusa Tokyo",
        "lat": 35.715,
        "lng": 139.794
      },
      {
        "time": "20:30–21:30",
        "title": "Return to Hotel Tavinos Asakusa",
        "costJpy": 0,
        "costMyr": 0,
        "category": "logistics",
        "halal": null,
        "transitMethod": "Walk (5 min)",
        "methodType": "walk",
        "connectedStation": "Asakusa Station",
        "stationWalk": "Walk 5 min back to Hotel Tavinos Base",
        "transitSummary": "Walk 5 min back to Hotel Tavinos Asakusa",
        "note": "Walk 5 min back to Hotel Tavinos Asakusa. Rest and recharge for Mt. Fuji tomorrow.",
        "mapQuery": "Hotel Tavinos Asakusa",
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
        "title": "Hotel Tavinos Asakusa ➔ Busta Shinjuku (Express Bus Terminal)",
        "costJpy": 280,
        "costMyr": 8,
        "category": "transit",
        "halal": null,
        "transitMethod": "Walk (6 min) + Subway (22 min)",
        "methodType": "train",
        "connectedStation": "Shinjuku Station (Busta 4F)",
        "stationWalk": "Subway Oedo Line to Shinjuku ➔ Elevator to Busta Shinjuku 4F",
        "transitSummary": "Subway 22 min to Shinjuku ➔ Elevator to Busta 4F (¥280)",
        "note": "Walk 6 min to Asakusa Station ➔ Board Toei Asakusa Line 1 stop to Kuramae, transfer to Toei Oedo Line direct to Shinjuku Station (22 min, ¥280) ➔ Take New South Gate elevator up to 4F Busta Shinjuku (Shinjuku Expressway Bus Terminal).",
        "mapQuery": "Busta Shinjuku Bus Terminal",
        "lat": 35.6885,
        "lng": 139.7008
      },
      {
        "time": "08:30–10:30",
        "title": "Shinjuku ➔ Mt. Fuji / Kawaguchiko (Direct Highway Coach)",
        "costJpy": 2200,
        "costMyr": 65,
        "category": "transit",
        "halal": null,
        "transitMethod": "Highway Coach (Chuo Expressway Bus)",
        "methodType": "bus",
        "connectedStation": "Kawaguchiko Station",
        "stationWalk": "Board Busta 4F ➔ 1h 45m direct scenic coach to Kawaguchiko Station",
        "transitSummary": "Direct Highway Coach (1h 45m, ¥2,200 / ~RM 65 pp)",
        "note": "Board Chuo Highway Express Bus from Busta Shinjuku Platform (Depart 08:45) direct to Kawaguchiko Station (1h 45m scenic mountain drive along Chuo Expressway, ¥2,200 / ~RM 65 pp). Guaranteed reserved seating, USB charging, and luggage hold beneath coach.",
        "mapQuery": "Kawaguchiko Station",
        "lat": 35.4982,
        "lng": 138.7688
      },
      {
        "time": "10:45–12:45",
        "title": "Chureito Pagoda (Arakurayama Sengen Park)",
        "costJpy": 310,
        "costMyr": 9,
        "category": "sightseeing",
        "halal": null,
        "transitMethod": "Local Train (12 min) + Walk & Stairs",
        "methodType": "train",
        "connectedStation": "Shimoyoshida Station",
        "stationWalk": "Train 4 stops to Shimoyoshida ➔ Walk 8 min (550m) + climb 398 steps",
        "transitSummary": "Train to Shimoyoshida (12 min, ¥310) ➔ Walk 8 min + climb 398 steps",
        "note": "At Kawaguchiko Station, board local Fujikyu Railway train 4 stops to Shimoyoshida Station (12 min, ¥310) ➔ Exit Shimoyoshida Station, walk 8 min (550m) east through peaceful residential lane to park entrance ➔ Climb the 398 stone steps up to the iconic 5-story vermilion Chureito Pagoda framing the snow-capped summit of Mount Fuji.",
        "mapQuery": "Chureito Pagoda Arakurayama",
        "lat": 35.5015,
        "lng": 138.8016
      },
      {
        "time": "12:45–13:30",
        "title": "Shimoyoshida ➔ Lake Kawaguchi (Return Train)",
        "costJpy": 310,
        "costMyr": 9,
        "category": "transit",
        "halal": null,
        "transitMethod": "Train (12 min)",
        "methodType": "train",
        "connectedStation": "Kawaguchiko Station",
        "stationWalk": "Walk 8 min to Shimoyoshida ➔ Train 12 min to Kawaguchiko Station",
        "transitSummary": "Train back to Kawaguchiko Station (12 min, ¥310)",
        "note": "Walk 8 min back down to Shimoyoshida Station ➔ Board Fujikyu Railway train back to Kawaguchiko Station (12 min, ¥310).",
        "mapQuery": "Kawaguchiko Station",
        "lat": 35.4982,
        "lng": 138.7688
      },
      {
        "time": "13:30–16:00",
        "title": "Lake Kawaguchi & Oishi Park (Fuji Reflection Promenade)",
        "costJpy": 500,
        "costMyr": 15,
        "category": "sightseeing",
        "halal": null,
        "transitMethod": "Sightseeing Retro Bus (Red Line)",
        "methodType": "bus",
        "connectedStation": "Kawaguchiko Station",
        "stationWalk": "Retro Bus Platform 1 (25 min) ➔ Terminus Stop #20 Oishi Park",
        "transitSummary": "Kawaguchiko Sightseeing Bus Red Line (25 min, ¥500)",
        "note": "Board Kawaguchiko Sightseeing Retro Bus (Red Line) from Platform 1 at Kawaguchiko Station ➔ Ride along northern shore of Lake Kawaguchi to terminus stop #20 Oishi Park (25 min, ¥500). Stroll the lakeside flower promenade facing Mt. Fuji directly across the water. Browse Mt. Fuji souvenirs and soft-serve ice cream.",
        "mapQuery": "Oishi Park Lake Kawaguchiko",
        "lat": 35.5225,
        "lng": 138.746
      },
      {
        "time": "16:30–18:30",
        "title": "Kawaguchiko Station ➔ Busta Shinjuku (Return Coach)",
        "costJpy": 2200,
        "costMyr": 65,
        "category": "transit",
        "halal": null,
        "transitMethod": "Highway Coach (Chuo Expressway Bus)",
        "methodType": "bus",
        "connectedStation": "Busta Shinjuku Bus Terminal",
        "stationWalk": "Bus #20 to Kawaguchiko Station ➔ Direct coach to Busta Shinjuku (1h 45m)",
        "transitSummary": "Direct Highway Coach to Shinjuku (1h 45m, ¥2,200 / ~RM 65 pp)",
        "note": "Ride Red Line bus back to Kawaguchiko Station (25 min) ➔ Board return Chuo Highway Express Bus (16:30 departure) direct back to Busta Shinjuku (1h 45m, ¥2,200).",
        "mapQuery": "Busta Shinjuku Bus Terminal",
        "lat": 35.6885,
        "lng": 139.7008
      },
      {
        "time": "18:30–20:30",
        "title": "Dinner: Halal Wagyu Yakiniku Panga / Sakura",
        "costJpy": 2500,
        "costMyr": 75,
        "category": "food",
        "halal": true,
        "halalNote": "Halal Certified Dinner",
        "transitMethod": "Subway (25 min) + Walk (5 min)",
        "methodType": "train",
        "connectedStation": "Asakusa Station",
        "stationWalk": "Subway from Shinjuku to Asakusa (25 min, ¥350) ➔ Walk to dinner",
        "transitSummary": "Subway to Asakusa ➔ Walk to Halal Wagyu dinner",
        "note": "From Shinjuku, board JR Yamanote Line to Kanda, transfer to Ginza Line to Asakusa (25 min, ¥350) ➔ Walk to Halal Wagyu Yakiniku Panga or Halal Sakura for dinner.",
        "mapQuery": "Halal Wagyu Yakiniku Panga Asakusa",
        "lat": 35.713,
        "lng": 139.789
      },
      {
        "time": "20:30–21:30",
        "title": "Return to Hotel Tavinos Asakusa",
        "costJpy": 0,
        "costMyr": 0,
        "category": "logistics",
        "halal": null,
        "transitMethod": "Walk (5 min)",
        "methodType": "walk",
        "connectedStation": "Asakusa Station",
        "stationWalk": "Walk 5 min back to Hotel Tavinos Base",
        "transitSummary": "Walk 5 min back to Hotel Tavinos Asakusa",
        "note": "Walk 5 min back to Hotel Tavinos Asakusa. Rest well for Tokyo city exploration tomorrow!",
        "mapQuery": "Hotel Tavinos Asakusa",
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
        "time": "09:00–10:00",
        "title": "Hotel Tavinos Asakusa ➔ Shinjuku Kabukicho",
        "costJpy": 280,
        "costMyr": 8,
        "category": "transit",
        "halal": null,
        "transitMethod": "Walk (6 min) + Subway (22 min)",
        "methodType": "train",
        "connectedStation": "Shinjuku-nishiguchi / JR Shinjuku",
        "stationWalk": "Oedo Line to Shinjuku-nishiguchi Exit D3 ➔ Walk 5 min (400m) to Gracery",
        "transitSummary": "Subway to Shinjuku (22 min, ¥280) ➔ Walk 5 min through Kabukicho",
        "note": "Walk 6 min to Asakusa Station ➔ Board Toei Asakusa Line 1 stop to Kuramae, transfer to Toei Oedo Line to Shinjuku-nishiguchi Station (22 min, ¥280) ➔ Take Exit D3, walk 5 min (400m) east through vibrant Kabukicho pedestrian arcade to Hotel Gracery Shinjuku.",
        "mapQuery": "Hotel Gracery Shinjuku Godzilla",
        "lat": 35.6953,
        "lng": 139.702
      },
      {
        "time": "10:00–11:00",
        "title": "Hotel Gracery Shinjuku (Godzilla Head Photo Stop)",
        "costJpy": 0,
        "costMyr": 0,
        "category": "sightseeing",
        "halal": null,
        "transitMethod": "Terrace Walk (8F)",
        "methodType": "walk",
        "connectedStation": "JR Shinjuku Station",
        "stationWalk": "Take elevator to 8F lobby terrace (5 min walk from Shinjuku East Exit)",
        "transitSummary": "Life-sized roaring Godzilla Head terrace photo stop",
        "note": "Take elevator to 8F lobby terrace of Hotel Gracery Shinjuku. Stand face-to-face with the life-sized, roaring Godzilla Head roaring over the Shinjuku skyline (roars with smoke and red light effects on the hour!).",
        "mapQuery": "Godzilla Head Hotel Gracery",
        "lat": 35.6953,
        "lng": 139.702
      },
      {
        "time": "11:15–11:45",
        "title": "Shinjuku ➔ Akihabara (JR Chuo-Sobu Line)",
        "costJpy": 180,
        "costMyr": 5,
        "category": "transit",
        "halal": null,
        "transitMethod": "Train (JR Chuo-Sobu Line)",
        "methodType": "train",
        "connectedStation": "JR Akihabara Station",
        "stationWalk": "Platform 13/16 at Shinjuku ➔ 14 min direct to Akihabara Electric Town Exit",
        "transitSummary": "JR Chuo-Sobu Line (14 min direct, ¥180 / ~RM 5 pp)",
        "note": "Walk 5 min south to JR Shinjuku Station ➔ Enter Central Ticket Gate, go to Platform 13/16 ➔ Board JR Chuo-Sobu Line (Yellow Line) direct to JR Akihabara Station (14 min, 7 stops, ¥180 / ~RM 5 pp). Exit via Electric Town Exit (Denki-gai Gate)!",
        "mapQuery": "Akihabara Station Tokyo",
        "lat": 35.6983,
        "lng": 139.7731
      },
      {
        "time": "12:00–15:00",
        "title": "Akihabara Electric Town & Yodobashi-Akiba",
        "costJpy": 0,
        "costMyr": 0,
        "category": "shopping",
        "halal": null,
        "transitMethod": "Walk (1 min from Electric Town Exit!)",
        "methodType": "walk",
        "connectedStation": "JR Akihabara Station",
        "stationWalk": "Step directly out from Electric Town Exit into Yodobashi & arcades (1 min)",
        "transitSummary": "Walk 1 min directly from Electric Town Exit into Yodobashi",
        "note": "Step directly out from Electric Town Exit into Radio Kaikan, Mandarake, and Animate anime/gaming towers. Walk 1 min across the plaza into Yodobashi Camera Multimedia Akiba (9 massive floors of electronics, camera lenses, noise-canceling headphones, handheld consoles, and duty-free tech).",
        "mapQuery": "Yodobashi Akiba Tokyo",
        "lat": 35.6987,
        "lng": 139.7747
      },
      {
        "time": "15:15–16:45",
        "title": "Don Quijote Akihabara (Souvenirs & Tax-Free)",
        "costJpy": 0,
        "costMyr": 0,
        "category": "shopping",
        "halal": null,
        "transitMethod": "Walk (4 min)",
        "methodType": "walk",
        "connectedStation": "JR Akihabara Station",
        "stationWalk": "Walk 4 min (300m) north along Chuo-dori avenue",
        "transitSummary": "Walk 4 min (300m) north along Chuo-dori to Donki",
        "note": "Walk 4 min (300m) north along main Chuo-dori avenue to Don Quijote Akihabara (5 floors of discount Japanese snacks, matcha KitKats, cosmetics, skincare, novelty goods, and duty-free checkout on top floor).",
        "mapQuery": "Don Quijote Akihabara",
        "lat": 35.7009,
        "lng": 139.7712
      },
      {
        "time": "17:15–19:00",
        "title": "Ameyoko Shopping Street & Ueno Park (Thrifting & Bargains)",
        "costJpy": 150,
        "costMyr": 4,
        "category": "shopping",
        "halal": null,
        "transitMethod": "Walk (10 min) or Train (1 stop)",
        "methodType": "walk",
        "connectedStation": "JR Okachimachi / Ueno Station",
        "stationWalk": "Walk 10 min north along rail arches straight into Ameyoko (1 min from Okachimachi)",
        "transitSummary": "Walk 10 min north along rail arches into Ameyoko market",
        "note": "Walk north 10–12 min (800m) along the elevated JR railway arches straight into the south entrance of Ameyoko Shopping Street at Okachimachi Station (or take JR Yamanote Line 1 stop, 2 min, ¥150). Hunt for vintage Japanese streetwear, sneakers, jacket thrifting, dried seafood, and stroll into Ueno Park.",
        "mapQuery": "Ameyoko Shopping Street Ueno",
        "lat": 35.7093,
        "lng": 139.7744
      },
      {
        "time": "19:00–20:30",
        "title": "Farewell Halal Dinner: HALAL SAKURA",
        "costJpy": 2200,
        "costMyr": 65,
        "category": "food",
        "halal": true,
        "halalNote": "Halal Certified Farewell Dinner",
        "transitMethod": "Subway (5 min) + Walk (8 min)",
        "methodType": "train",
        "connectedStation": "Asakusa Station",
        "stationWalk": "Ginza Line 3 stops from Ueno to Asakusa (5 min, ¥180) ➔ Walk 8 min",
        "transitSummary": "Subway Ginza Line 5 min to Asakusa ➔ Walk 8 min to dinner",
        "note": "Walk 2 min to Tokyo Metro Ueno Station ➔ Board Ginza Line 3 stops direct to Asakusa Station (5 min, ¥180) ➔ Walk 8 min to HALAL SAKURA for farewell dinner.",
        "mapQuery": "HALAL SAKURA Asakusa Tokyo",
        "lat": 35.7185,
        "lng": 139.796
      },
      {
        "time": "20:30–22:00",
        "title": "Return to Hotel Tavinos Asakusa (Pack Luggage)",
        "costJpy": 0,
        "costMyr": 0,
        "category": "logistics",
        "halal": null,
        "transitMethod": "Walk (5 min)",
        "methodType": "walk",
        "connectedStation": "Asakusa Station",
        "stationWalk": "Walk 5 min back to Hotel Tavinos Base",
        "transitSummary": "Walk 5 min back to Hotel Tavinos Asakusa",
        "note": "Walk 5 min back to Hotel Tavinos Asakusa. Weigh and pack suitcases for departure tomorrow!",
        "mapQuery": "Hotel Tavinos Asakusa",
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
        "time": "10:00–10:30",
        "title": "Check out Hotel Tavinos Asakusa ➔ Keisei Ueno Station",
        "costJpy": 180,
        "costMyr": 5,
        "category": "transit",
        "halal": null,
        "transitMethod": "Walk (6 min) + Subway (5 min)",
        "methodType": "train",
        "connectedStation": "Keisei Ueno Station",
        "stationWalk": "Ginza Line 3 stops to Ueno (5 min, ¥180) ➔ Underground walkway (3 min) to Keisei Ueno",
        "transitSummary": "Subway 5 min to Ueno ➔ Walkway 3 min to Keisei Ueno",
        "note": "Check out Hotel Tavinos Asakusa by 10:00am. Walk 6 min to Tokyo Metro Asakusa Station ➔ Board Ginza Line 3 stops to Ueno Station (5 min, ¥180) ➔ Walk through indoor underground connection (3 min, 180m) to Keisei Ueno Station (Skyliner Terminal).",
        "mapQuery": "Keisei Ueno Station",
        "lat": 35.7118,
        "lng": 139.7735
      },
      {
        "time": "10:45–12:30",
        "title": "Early Lunch & Souvenir Browsing near Ueno",
        "costJpy": 1200,
        "costMyr": 36,
        "category": "food",
        "halal": null,
        "transitMethod": "Station Concourse Walk",
        "methodType": "walk",
        "connectedStation": "Keisei Ueno Station",
        "stationWalk": "Stroll 2 min into Ueno 3153 dining complex or Ameyoko entrance",
        "transitSummary": "Walk 2 min into Ueno dining complex / station concourse",
        "note": "Store bags in Keisei Ueno station coin lockers or keep luggage roll in hand. Stroll 2 min into Ueno 3153 dining complex or Ameyoko entrance for coffee and early lunch.",
        "mapQuery": "Keisei Ueno Station",
        "lat": 35.7118,
        "lng": 139.7735
      },
      {
        "time": "12:40–13:30",
        "title": "Keisei Skyliner Express (Keisei Ueno ➔ Narita Airport)",
        "costJpy": 2570,
        "costMyr": 75,
        "category": "transit",
        "halal": null,
        "transitMethod": "High-Speed Airport Train (160 km/h)",
        "methodType": "train",
        "connectedStation": "Narita Airport Terminal 1 & 2·3",
        "stationWalk": "Board Platform 1/2 at Keisei Ueno ➔ 41 min non-stop to Narita Terminal 1 concourse",
        "transitSummary": "Keisei Skyliner (41 min non-stop, 160 km/h, ¥2,570 pp)",
        "note": "Enter Skyliner Gates at Keisei Ueno Station (Platform 1/2). Board Keisei Skyliner Express (12:40 departure). Race across the Chiba plain at 160 km/h on the Narita Sky Access Line — non-stop to Narita Airport Terminal 2·3 Station (36 min) and Terminal 1 Station (41 min) (¥2,570 / ~RM 75 pp).",
        "mapQuery": "Narita Airport Terminal 1 Station",
        "lat": 35.7656,
        "lng": 140.3863
      },
      {
        "time": "13:30–15:30",
        "title": "Narita International Airport (Check-in & Duty-Free)",
        "costJpy": 0,
        "costMyr": 0,
        "category": "logistics",
        "halal": null,
        "transitMethod": "Airport Terminal Elevator (0 min walk)",
        "methodType": "walk",
        "connectedStation": "Narita Airport Terminal 1 Station",
        "stationWalk": "Take elevators from station platforms directly up to 4F Departures",
        "transitSummary": "Elevators connect station platform directly to 4F Departures",
        "note": "Take elevators from station platforms directly up to 4F International Departures concourse. Check in luggage at airline counters (Batik Air / Malaysia Airlines / AirAsia X). Clear security and automated immigration gates (approx 45 min). Browse terminal duty-free boutiques (Tokyo Banana, Royce' Chocolate, Shiroi Koibito cookies, Japanese tea).",
        "mapQuery": "Narita International Airport Terminal 1",
        "lat": 35.7656,
        "lng": 140.3863
      },
      {
        "time": "15:30–16:50",
        "title": "Boarding & Flight Departure (NRT ➔ KUL)",
        "costJpy": 0,
        "costMyr": 0,
        "category": "transit",
        "halal": null,
        "transitMethod": "Flight Departure",
        "methodType": "flight",
        "connectedStation": "Narita Airport Gate",
        "stationWalk": "Proceed to departure gate by 16:15 for 16:50 flight",
        "transitSummary": "Proceed to departure gate for 16:50 flight home",
        "note": "Proceed to departure gate by 16:15. Board aircraft for flight departure at 16:50 back to Kuala Lumpur (KUL). Touchdown safe and sound with unforgettable winter memories!",
        "mapQuery": "Narita Airport Departure Gate",
        "lat": 35.772,
        "lng": 140.3929
      }
    ]
  }
];

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
    "title": "Overnight Sleeper Bus: Kyoto → Tokyo",
    "dates": "20 Jan (Day 5) • 14:00–16:30",
    "category": "transit",
    "detail": "Overnight highway sleeper coach (Willer Express / JR Dream Coach) from Kyoto Station Hachijo Exit to Tokyo Station Yaesu Exit (~¥5,500 pp)."
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


