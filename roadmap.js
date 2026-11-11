/**
 * JAPAN WINTER 2027 - LIVE DAILY ROADMAP & TRANSIT ENGINE
 * High-Speed Rail & Transit Explorer powered by CARTO Voyager & OpenRailwayMap.
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
        "title": "Arrive KIX & Clear Customs",
        "icon": "✈️",
        "time": "09:45"
      },
      {
        "type": "transit",
        "title": "Nankai Express Train",
        "icon": "🚆",
        "time": "11:45",
        "transitNote": "~45 min direct to Namba"
      },
      {
        "type": "station",
        "title": "Namba Station",
        "icon": "🚉",
        "time": "12:45",
        "transitNote": "Walk ~8 min to hotel"
      },
      {
        "type": "hotel",
        "title": "Plum Hotel (Luggage Drop)",
        "icon": "🏨",
        "time": "13:00"
      },
      {
        "type": "food",
        "title": "Halal Ramen Naniwaya",
        "icon": "🍜",
        "time": "13:45",
        "transitNote": "Walk ~4 min"
      },
      {
        "type": "hotel",
        "title": "Plum Hotel (3pm Check-in & Prayer)",
        "icon": "🏨",
        "time": "15:00"
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
        "time": "20:00"
      },
      {
        "type": "hotel",
        "title": "Return to Plum Hotel",
        "icon": "🏨",
        "time": "21:30"
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
      "line": "Overnight Sleeper Bus (Willer Express / JR Dream Coach)",
      "route": "Kyoto Station (Hachijo) ➔ Tokyo Station (Yaesu)",
      "time": "7 hrs overnight",
      "cost": "~¥5,500 (RM 165)"
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
        "title": "Kyoto Station (Hachijo)",
        "icon": "🚉",
        "time": "12:00",
        "transitNote": "Hachijo Bus Terminal"
      },
      {
        "type": "transit",
        "title": "Overnight Sleeper Bus (Kyoto ➔ Tokyo)",
        "icon": "🚌",
        "time": "14:00",
        "transitNote": "7h overnight highway coach to Tokyo"
      },
      {
        "type": "station",
        "title": "Tokyo Station (Yaesu Exit)",
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
// =============================================================
// HOTEL BASES & ACCOMMODATION HUBS
// =============================================================
const HOTEL_BASES = {
  1: {
    id: 'plum-hotel-osaka',
    name: 'Plum Hotel Osaka',
    city: 'Osaka (Namba Minami)',
    lat: 34.6565,
    lng: 135.4985,
    nights: '2 Nights (Days 1–2)',
    checkIn: '3:00pm (Day 1 • Luggage drop from 1:00pm)',
    checkOut: '9:00am (Day 3)',
    nearestStation: 'Daikokucho Station / Namba Station',
    stationLat: 34.6558,
    stationLng: 135.4980,
    walkTime: '3 min walk from Daikokucho Exit 1 (~8 min from Namba)',
    notes: 'Central base in South Osaka. Luggage drop upon arrival (~1:00pm); standard room check-in from 3:00pm. Easy access to Dotonbori, Shinsekai & Kuromon Market.',
    mapQuery: 'Plum Hotel Osaka'
  },
  2: {
    id: 'plum-hotel-osaka',
    name: 'Plum Hotel Osaka',
    city: 'Osaka (Namba Minami)',
    lat: 34.6565,
    lng: 135.4985,
    nights: 'Night 2 of 2 in Osaka',
    checkIn: 'Luggage stored',
    checkOut: '9:00am (Tomorrow Day 3)',
    nearestStation: 'Daikokucho Station / Namba Station',
    stationLat: 34.6558,
    stationLng: 135.4980,
    walkTime: '3 min walk from Daikokucho Exit 1 (~8 min from Namba)',
    notes: 'Central base in South Osaka. Fast Kintetsu train access to Nara Park deer.',
    mapQuery: 'Plum Hotel Osaka'
  },
  3: {
    id: 'rinn-shirakawa-kyoto',
    name: 'Rinn Shirakawa South Kyoto',
    city: 'Kyoto (Gion / Shirakawa)',
    lat: 35.0062,
    lng: 135.7760,
    nights: '2 Nights in Kyoto (Days 3–4)',
    checkIn: '3:00pm (Day 3)',
    checkOut: '12:00pm (Day 5)',
    nearestStation: 'Gion-Shijo Station (Keihan) / Kyoto-Kawaramachi (Hankyu)',
    stationLat: 35.0037,
    stationLng: 135.7725,
    walkTime: '5 min walk along historic Shirakawa canal',
    notes: 'Atmospheric boutique base in Gion. Walk to Kamogawa, Kiyomizu-dera & Nishiki Market.',
    mapQuery: 'Rinn Shirakawa South Kyoto'
  },
  4: {
    id: 'rinn-shirakawa-kyoto',
    name: 'Rinn Shirakawa South Kyoto',
    city: 'Kyoto (Gion / Shirakawa)',
    lat: 35.0062,
    lng: 135.7760,
    nights: 'Night 2 of 2 in Kyoto',
    checkIn: 'Stay active',
    checkOut: '12:00pm (Tomorrow Day 5)',
    nearestStation: 'Gion-Shijo Station (Keihan)',
    stationLat: 35.0037,
    stationLng: 135.7725,
    walkTime: '5 min walk along historic Shirakawa canal',
    notes: 'Atmospheric boutique base in Gion. Steps from Tatsumi Bridge & Yasaka Shrine.',
    mapQuery: 'Rinn Shirakawa South Kyoto'
  },
  5: {
    id: 'hotel-tavinos-asakusa',
    name: 'Hotel Tavinos Asakusa Tokyo',
    city: 'Tokyo (Asakusa)',
    lat: 35.7171,
    lng: 139.7915,
    nights: '4 Nights Base in Tokyo (Days 5–8)',
    checkIn: '3:00pm (Day 5)',
    checkOut: '10:00am (Day 9)',
    nearestStation: 'Asakusa Station (Tsukuba Express & Tokyo Metro)',
    stationLat: 35.7144,
    stationLng: 139.7925,
    walkTime: '3 min walk from TX Asakusa (6 min walk through Senso-ji grounds to Metro)',
    notes: 'Modern manga-themed Tokyo hub. Fast transit to Ueno, Akiba, Shinjuku, and Narita Skyliner.',
    mapQuery: 'Hotel Tavinos Asakusa Tokyo'
  },
  6: {
    id: 'hotel-tavinos-asakusa',
    name: 'Hotel Tavinos Asakusa Tokyo',
    city: 'Tokyo (Asakusa)',
    lat: 35.7171,
    lng: 139.7915,
    nights: 'Night 2 of 4 in Tokyo (GALA Snow Day)',
    checkIn: 'Tokyo Base',
    checkOut: '10:00am (Day 9)',
    nearestStation: 'Asakusa Station ➔ Tokyo Station Shinkansen',
    stationLat: 35.7144,
    stationLng: 139.7925,
    walkTime: 'Direct subway to Tokyo Station Shinkansen gate',
    notes: 'Return base after full day of skiing and snow activities at GALA Yuzawa.',
    mapQuery: 'Hotel Tavinos Asakusa Tokyo'
  },
  7: {
    id: 'hotel-tavinos-asakusa',
    name: 'Hotel Tavinos Asakusa Tokyo',
    city: 'Tokyo (Asakusa)',
    lat: 35.7171,
    lng: 139.7915,
    nights: 'Night 3 of 4 in Tokyo (Mt. Fuji Day)',
    checkIn: 'Tokyo Base',
    checkOut: '10:00am (Day 9)',
    nearestStation: 'Asakusa Station ➔ Shinjuku Station',
    stationLat: 35.7144,
    stationLng: 139.7925,
    walkTime: 'Subway to Shinjuku Expressway Bus Terminal',
    notes: 'Return base after day trip to Chureito Pagoda & Lake Kawaguchiko.',
    mapQuery: 'Hotel Tavinos Asakusa Tokyo'
  },
  8: {
    id: 'hotel-tavinos-asakusa',
    name: 'Hotel Tavinos Asakusa Tokyo',
    city: 'Tokyo (Asakusa)',
    lat: 35.7171,
    lng: 139.7915,
    nights: 'Final Night in Japan',
    checkIn: 'Tokyo Base',
    checkOut: '10:00am (Tomorrow Day 9)',
    nearestStation: 'Asakusa Station (Subway Ginza / Asakusa Line)',
    stationLat: 35.7144,
    stationLng: 139.7925,
    walkTime: '3 min walk from TX Asakusa',
    notes: 'Pack luggage tonight before morning checkout and Keisei Skyliner flight departure.',
    mapQuery: 'Hotel Tavinos Asakusa Tokyo'
  },
  9: {
    id: 'hotel-tavinos-asakusa',
    name: 'Hotel Tavinos Asakusa Tokyo',
    city: 'Tokyo (Asakusa)',
    lat: 35.7171,
    lng: 139.7915,
    nights: 'Departure Day (Check-out 10:00am)',
    checkIn: 'Check-out completed',
    checkOut: '10:00am Sharp',
    nearestStation: 'Asakusa Station ➔ Keisei Ueno Station',
    stationLat: 35.7144,
    stationLng: 139.7925,
    walkTime: 'Subway Ginza Line to Keisei Ueno for Skyliner (5 min ride)',
    notes: 'Board Keisei Skyliner (160 km/h) non-stop to Narita Airport Terminal 1.',
    mapQuery: 'Hotel Tavinos Asakusa Tokyo'
  }
};

// =============================================================
// DETAILED TRAIN ROUTES (Shinkansen, Airport Express & Commuter)
// =============================================================
const TRAIN_ROUTES = {
  // 1. Overnight Sleeper Bus: Kyoto Station Hachijo -> Tokyo Station Yaesu
  kyotoTokyoSleeperBus: {
    id: 'kyotoTokyoSleeperBus',
    name: 'Overnight Sleeper Highway Coach (Willer Express / JR Dream Coach)',
    type: 'bus',
    badge: '🚌 Overnight Sleeper Bus (~7 hrs)',
    route: 'Kyoto Station (Hachijo) ➔ Tokyo Station (Yaesu)',
    duration: 'Approx. 7 hrs overnight',
    speed: '80–100 km/h (Expressway)',
    color: '#F59E0B',
    stations: [
      { name: 'Kyoto Station Hachijo Exit', lat: 34.9840, lng: 135.7592, note: 'Board overnight coach (Kyoto Station Hachijo Bus Terminal)' },
      { name: 'Kusatsu Rest Area', lat: 35.0089, lng: 135.9869, note: 'Meishin Expressway rest stop' },
      { name: 'Nagoya Expressway Hub', lat: 35.1709, lng: 136.8815, note: 'Chubu expressway transit corridor' },
      { name: 'Hamana-ko Service Area', lat: 34.7645, lng: 137.5647, note: 'Lake Hamana midnight rest pause' },
      { name: 'Shizuoka Expressway Rest Stop', lat: 34.9961, lng: 138.4114, note: 'Tomei Expressway mid-journey stop' },
      { name: 'Ashigara Service Area', lat: 35.3050, lng: 138.9772, note: 'Mt. Fuji foothills morning pause' },
      { name: 'Ebina Rest Area', lat: 35.4389, lng: 139.3908, note: 'Kanagawa expressway gate' },
      { name: 'Tokyo Station Yaesu Exit', lat: 35.6812, lng: 139.7690, note: 'Arrival at Tokyo Station Yaesu Highway Bus Terminal' }
    ]
  },

  // Tokaido Shinkansen (Bullet Train): Kyoto Station -> Tokyo Station
  tokaidoShinkansen: {
    id: 'tokaidoShinkansen',
    name: 'JR Tokaido Shinkansen (Nozomi / Hikari)',
    type: 'shinkansen',
    badge: '🚅 Tokaido Shinkansen (285 km/h)',
    route: 'Kyoto Station ➔ Tokyo Station',
    duration: '2 hrs 15 min',
    speed: 'Up to 285 km/h',
    color: '#00E5FF',
    stations: [
      { name: 'Kyoto Station', lat: 34.9858, lng: 135.7588, note: 'Board Shinkansen Platform 11/12 • Tokaido Trunk Line' },
      { name: 'Maibara Station', lat: 35.3142, lng: 136.2905, note: 'Lake Biwa junction & Hokuriku line connector' },
      { name: 'Gifu-Hashima', lat: 35.3157, lng: 136.6858, note: 'Nobi Plain corridor' },
      { name: 'Nagoya Station', lat: 35.1709, lng: 136.8815, note: 'Major Chubu megacity rail hub (35 min from Kyoto)' },
      { name: 'Mikawa-Anjo', lat: 34.9691, lng: 137.0609, note: 'Aichi manufacturing heartland' },
      { name: 'Toyohashi', lat: 34.7628, lng: 137.3817, note: 'Aichi-Shizuoka border' },
      { name: 'Hamamatsu Station', lat: 34.7037, lng: 137.7346, note: 'Lake Hamana eel & gyoza capital' },
      { name: 'Kakegawa', lat: 34.7694, lng: 138.0149, note: 'Shizuoka green tea hills' },
      { name: 'Shizuoka Station', lat: 34.9717, lng: 138.3891, note: 'Suruga Bay capital & Mt. Fuji approach' },
      { name: 'Shin-Fuji Station', lat: 35.1423, lng: 138.6636, note: 'Prime Mt. Fuji window view (Left side seat E facing North!)' },
      { name: 'Mishima Station', lat: 35.1270, lng: 138.9108, note: 'Izu Peninsula & Hakone south gateway' },
      { name: 'Atami Station', lat: 35.1037, lng: 139.0778, note: 'Sagami Bay onsen coast' },
      { name: 'Odawara Station', lat: 35.2562, lng: 139.1558, note: 'Hakone entrance & Kanagawa coastal entry' },
      { name: 'Shin-Yokohama Station', lat: 35.5074, lng: 139.6176, note: 'Kanagawa bullet train hub (17 min to Tokyo)' },
      { name: 'Shinagawa Station', lat: 35.6284, lng: 139.7387, note: 'Tokyo southern gateway & Yamanote Line junction' },
      { name: 'Tokyo Station', lat: 35.6812, lng: 139.7671, note: 'Arrive Tokyo Central Station (Marunouchi / Yaesu gates)' }
    ]
  },

  // 2. Joetsu Shinkansen (Bullet Train): Tokyo Station -> GALA Yuzawa Ski Station
  joetsuShinkansen: {
    id: 'joetsuShinkansen',
    name: 'JR Joetsu Shinkansen (Max Tanigawa)',
    type: 'shinkansen',
    badge: '🚅 Joetsu Snow Shinkansen (240 km/h)',
    route: 'Tokyo Station ➔ GALA Yuzawa Ski Station',
    duration: '75 min direct',
    speed: 'Up to 240 km/h',
    color: '#38BDF8',
    stations: [
      { name: 'Tokyo Station', lat: 35.6812, lng: 139.7671, note: 'Board Joetsu Shinkansen Platform 20–23' },
      { name: 'Ueno Station', lat: 35.7141, lng: 139.7774, note: 'Underground Shinkansen platforms (5 min from Tokyo)' },
      { name: 'Omiya Station', lat: 35.9063, lng: 139.6240, note: 'Saitama mega rail junction & Railway Museum stop' },
      { name: 'Kumagaya Station', lat: 36.1397, lng: 139.3897, note: 'North Kanto plain' },
      { name: 'Honjo-Waseda', lat: 36.2185, lng: 139.1789, note: 'Saitama-Gunma border' },
      { name: 'Takasaki Station', lat: 36.3225, lng: 139.0129, note: 'Gunma gateway • Split between Joetsu & Hokuriku Shinkansen' },
      { name: 'Jomo-Kogen', lat: 36.6836, lng: 138.9767, note: 'Tone River valley foothills into Tanigawa mountains' },
      { name: 'Echigo-Yuzawa Station', lat: 36.9357, lng: 138.8094, note: 'Exits the 22.2km Daishimizu Tunnel into Snow Country' },
      { name: 'GALA Yuzawa Station', lat: 36.9508, lng: 138.8005, note: 'Ski terminal directly inside station! Exit train to gondola lift' }
    ]
  },

  // 3. Nankai Airport Express / Rapi:t: KIX Airport -> Osaka Namba
  nankaiAirportExpress: {
    id: 'nankaiAirportExpress',
    name: 'Nankai Airport Line & Main Line (Airport Express / Rapi:t)',
    type: 'airport-express',
    badge: '✈️🚆 Nankai Airport Express',
    route: 'Kansai Airport (KIX) ➔ Namba Station',
    duration: '~45 min',
    speed: '120 km/h',
    color: '#06B6D4',
    stations: [
      { name: 'Kansai Airport Station (KIX)', lat: 34.4347, lng: 135.2443, note: 'Terminal 1 railway concourse • Ticket gate B' },
      { name: 'Sky Gate Bridge R', lat: 34.4262, lng: 135.2810, note: '3.75 km double-deck bridge spanning Osaka Bay' },
      { name: 'Rinku Town Station', lat: 34.4116, lng: 135.2974, note: 'Rinku Premium Outlets & Bay Ferris Wheel' },
      { name: 'Izumisano Station', lat: 34.4072, lng: 135.3168, note: 'Junction into Nankai Main Line tracks' },
      { name: 'Kaizuka Station', lat: 34.4442, lng: 135.3582, note: 'Senshu coastal strip' },
      { name: 'Kishiwada Station', lat: 34.4604, lng: 135.3780, note: 'Historic Danjiri castle town' },
      { name: 'Izumi-Otsu Station', lat: 34.5028, lng: 135.4243, note: 'High speed quad-track viaduct' },
      { name: 'Sakai Station', lat: 34.5828, lng: 135.4678, note: 'Ancient trading port & Japanese knife crafting city' },
      { name: 'Tengachaya Station', lat: 34.6469, lng: 135.4996, note: 'Direct cross-platform transfer to Osaka Metro Sakaisuji Line' },
      { name: 'Shin-Imamiya Station', lat: 34.6501, lng: 135.5009, note: 'Transfer to JR Osaka Loop Line & Tsutenkaku Tower' },
      { name: 'Namba Station (Nankai)', lat: 34.6629, lng: 135.5003, note: 'Terminus in Minami Osaka • 8 min walk to Plum Hotel' }
    ]
  },

  // 4. Kintetsu Nara Line: Osaka-Namba -> Kintetsu-Nara (Nara Park)
  kintetsuNaraLine: {
    id: 'kintetsuNaraLine',
    name: 'Kintetsu Nara Line (Rapid Express)',
    type: 'commuter-rail',
    badge: '🦌 Kintetsu Nara Rapid (38 min)',
    route: 'Osaka-Namba ➔ Kintetsu-Nara Station',
    duration: '~38 min',
    speed: '105 km/h',
    color: '#F59E0B',
    stations: [
      { name: 'Osaka-Namba Station', lat: 34.6669, lng: 135.5003, note: 'Board Kintetsu Rapid Express Platform 1/2' },
      { name: 'Kintetsu-Nippombashi', lat: 34.6670, lng: 135.5065, note: 'Kuromon Market & Denden Town stop' },
      { name: 'Osaka-Uehommachi', lat: 34.6659, lng: 135.5218, note: 'Historic Kintetsu terminus & department store' },
      { name: 'Tsuruhashi Station', lat: 34.6653, lng: 135.5303, note: 'Koreatown BBQ & JR Loop Line transfer' },
      { name: 'Fuse Station', lat: 34.6644, lng: 135.5623, note: 'Double-deck elevated express junction' },
      { name: 'Higashi-Hanazono', lat: 34.6631, lng: 135.6263, note: 'Base of Mt. Ikoma range' },
      { name: 'Ishikiri Station', lat: 34.6780, lng: 135.6534, note: 'Climbing steep grade with view over Osaka plain' },
      { name: 'Ikoma Station', lat: 34.6925, lng: 135.7005, note: 'Through 3.4km Shin-Ikoma Tunnel into Nara Prefecture' },
      { name: 'Gakuen-mae', lat: 34.6968, lng: 135.7483, note: 'Nara cultural hills' },
      { name: 'Yamato-Saidaiji Station', lat: 34.6937, lng: 135.7828, note: 'Famous 4-way diamond railway junction near Heijo Palace' },
      { name: 'Shin-Omiya', lat: 34.6860, lng: 135.8118, note: 'Saho River cherry canal' },
      { name: 'Kintetsu-Nara Station', lat: 34.6841, lng: 135.8282, note: 'Underground terminal • 5 min walk straight into Nara Park & Deer!' }
    ]
  },

  // 5. JR Kyoto Line / Tokaido Main Line: Osaka -> Kyoto
  jrKyotoLine: {
    id: 'jrKyotoLine',
    name: 'JR Tokaido Main Line (Kyoto Line Special Rapid)',
    type: 'commuter-rail',
    badge: '🚆 JR Special Rapid (130 km/h)',
    route: 'Osaka / Shin-Osaka ➔ Kyoto Station',
    duration: '~29 min',
    speed: '130 km/h',
    color: '#3B82F6',
    stations: [
      { name: 'Osaka Station (Umeda)', lat: 34.7024, lng: 135.4959, note: 'JR Osaka Grand Front Concourse Platform 7–10' },
      { name: 'Shin-Osaka Station', lat: 34.7335, lng: 135.5003, note: 'Shinkansen transfer hub across the Yodo River' },
      { name: 'Suita Station', lat: 34.7628, lng: 135.5244, note: 'Hokusetsu plain' },
      { name: 'Ibaraki Station', lat: 34.8159, lng: 135.5630, note: 'Expressway interchange hub' },
      { name: 'Takatsuki Station', lat: 34.8504, lng: 135.6178, note: 'Special Rapid designated passing stop' },
      { name: 'Shimamoto', lat: 34.8812, lng: 135.6660, note: 'Suntory Yamazaki whisky distillery springs' },
      { name: 'Yamazaki Station', lat: 34.8920, lng: 135.6795, note: 'Crossing Osaka-Kyoto prefecture border' },
      { name: 'Nagaokakyo Station', lat: 34.9234, lng: 135.7001, note: 'Ancient capital of Japan (AD 784)' },
      { name: 'Katsuragawa', lat: 34.9650, lng: 135.7118, note: 'Crossing Katsura River into Kyoto valley' },
      { name: 'Kyoto Station', lat: 34.9858, lng: 135.7588, note: 'Kyoto Central Concourse & Karasuma subway gate' }
    ]
  },

  // 6. Chuo Line & Fujikyu Railway (Fuji Excursion) / Highway Bus: Tokyo -> Mt. Fuji
  fujiExcursionRoute: {
    id: 'fujiExcursionRoute',
    name: 'JR Chuo Line & Fujikyu Railway (Fuji Excursion) / Highway Express',
    type: 'fuji-express',
    badge: '🗻 Fuji Scenic Mountain Express',
    route: 'Shinjuku (Tokyo) ➔ Otsuki ➔ Lake Kawaguchiko',
    duration: '~1 hr 45 min',
    speed: 'Scenic Mountain Transit',
    color: '#EC4899',
    stations: [
      { name: 'Shinjuku Station', lat: 35.6909, lng: 139.7000, note: 'Busta Shinjuku Expressway Bus / JR Chuo Platform 9/10' },
      { name: 'Nakano Station', lat: 35.7058, lng: 139.6658, note: 'Chuo Line rapid tracks' },
      { name: 'Mitaka Station', lat: 35.7027, lng: 139.5606, note: 'Ghibli woodland district' },
      { name: 'Tachikawa Station', lat: 35.6980, lng: 139.4138, note: 'Tama regional center' },
      { name: 'Hachioji Station', lat: 35.6554, lng: 139.3389, note: 'West Tokyo junction' },
      { name: 'Takao Station', lat: 35.6425, lng: 139.2818, note: 'Entering the Chuo mountain pass & Kanto range' },
      { name: 'Uenohara', lat: 35.6322, lng: 139.1098, note: 'Katsura River canyon' },
      { name: 'Otsuki Station', lat: 35.6133, lng: 138.9427, note: 'Junction where Fuji Excursion transitions onto Fujikyu track' },
      { name: 'Tsurushi', lat: 35.5562, lng: 138.9056, note: 'Mt. Fuji mountain foothills' },
      { name: 'Shimoyoshida Station', lat: 35.4988, lng: 138.8052, note: 'Stop for Arakurayama Sengen Park & Chureito Pagoda!' },
      { name: 'Mt. Fuji Station (Fujisan)', lat: 35.4839, lng: 138.7956, note: 'Switchback station directly facing Fuji summit' },
      { name: 'Kawaguchiko Station', lat: 35.4982, lng: 138.7688, note: 'Terminus for Lake Kawaguchi & Oishi Park retro buses' }
    ]
  },

  // 7. Keisei Skyliner: Tokyo (Ueno / Nippori) -> Narita Airport (NRT)
  keiseiSkyliner: {
    id: 'keiseiSkyliner',
    name: 'Keisei Skyliner Express (Narita Sky Access Line)',
    type: 'airport-express',
    badge: '⚡ Keisei Skyliner (160 km/h)',
    route: 'Keisei Ueno / Nippori ➔ Narita Airport',
    duration: '41 min direct',
    speed: '160 km/h (Fastest non-Shinkansen train in Japan)',
    color: '#0284C7',
    stations: [
      { name: 'Keisei Ueno Station', lat: 35.7118, lng: 139.7735, note: 'Underground terminal right beside Ueno Park' },
      { name: 'Nippori Station', lat: 35.7278, lng: 139.7709, note: 'Primary Yamanote Line transfer gate (fast 3 min transfer)' },
      { name: 'Aoto Station', lat: 35.7509, lng: 139.8548, note: 'East Tokyo junction' },
      { name: 'Keisei Takasago', lat: 35.7511, lng: 139.8667, note: 'Hokusou Line start' },
      { name: 'Higashi-Matsudo', lat: 35.7702, lng: 139.9442, note: 'JR Musashino Line cross' },
      { name: 'Shin-Kamagaya Station', lat: 35.7797, lng: 139.9984, note: 'North Chiba junction' },
      { name: 'Chiba New Town Chuo', lat: 35.8042, lng: 140.1139, note: 'High speed run through Chiba plain' },
      { name: 'Imba-Nihon-Idai', lat: 35.8037, lng: 140.2014, note: 'Accelerating to top speed of 160 km/h across Lake Inba' },
      { name: 'Narita Airport Terminal 2·3 Station', lat: 35.7728, lng: 140.3876, note: 'Direct airport terminal rail concourse' },
      { name: 'Narita Airport Terminal 1 Station', lat: 35.7656, lng: 140.3863, note: 'Terminus for international departures home' }
    ]
  },

  // 8. Tokyo Urban Rail Loop: Shinjuku -> Akiba -> Ueno
  tokyoRailLoop: {
    id: 'tokyoRailLoop',
    name: 'JR Yamanote Line & Chuo-Sobu Line',
    type: 'metro',
    badge: '🚆 JR Yamanote / Chuo Line',
    route: 'Asakusa ➔ Shinjuku ➔ Akihabara ➔ Ueno',
    duration: '~15 min between hubs',
    speed: 'Tokyo Urban Network',
    color: '#10B981',
    stations: [
      { name: 'Asakusa Station (Tokyo Metro)', lat: 35.7126, lng: 139.7983, note: 'Ginza Line to Kanda / Akihabara' },
      { name: 'Shinjuku Station (Kabukicho / Godzilla)', lat: 35.6909, lng: 139.7000, note: 'Busiest train station in the world' },
      { name: 'Ochanomizu Station', lat: 35.6996, lng: 139.7650, note: 'Iconic Kanda River cross on Chuo-Sobu line' },
      { name: 'Akihabara Station', lat: 35.6983, lng: 139.7731, note: 'Electric Town & Tsukuba Express exit' },
      { name: 'Okachimachi Station', lat: 35.7075, lng: 139.7744, note: 'Direct entrance to Ameyoko market street' },
      { name: 'Ueno Station', lat: 35.7141, lng: 139.7774, note: 'Ueno Park, museums & Keisei Skyliner transfer' }
    ]
  }
};

// Day-to-Train Mapping
const DAY_TRAIN_MAPPING = {
  0: ['kyotoTokyoSleeperBus', 'joetsuShinkansen', 'nankaiAirportExpress', 'kintetsuNaraLine', 'jrKyotoLine', 'fujiExcursionRoute', 'keiseiSkyliner'],
  1: ['nankaiAirportExpress'],
  2: ['kintetsuNaraLine'],
  3: ['jrKyotoLine'],
  4: [],
  5: ['kyotoTokyoSleeperBus'],
  6: ['joetsuShinkansen'],
  7: ['fujiExcursionRoute'],
  8: ['tokyoRailLoop'],
  9: ['keiseiSkyliner']
};

/**
 * Finds the nearest train station and walking link for any activity/place
 */
function getActivityStationLink(act, dayNumber) {
  const title = (act.title || '').toLowerCase();
  const query = (act.mapQuery || '').toLowerCase();

  // Day 1 (Osaka)
  if (dayNumber === 1) {
    if (title.includes('airport')) {
      return { stationName: 'Kansai Airport Station (KIX)', lat: 34.4347, lng: 135.2443, walk: 'Direct inside airport (0 min)', isDirect: true };
    }
    if (title.includes('plum hotel') || query.includes('plum hotel')) {
      return { stationName: 'Daikokucho Station / Namba', lat: 34.6558, lng: 135.4980, walk: '3 min walk from Daikokucho Exit 1 (~8 min from Namba Station)', isHotel: true };
    }
    if (title.includes('naniwaya') || query.includes('naniwaya')) {
      return { stationName: 'Daikokucho Station', lat: 34.6558, lng: 135.4980, walk: '4 min walk (320m)' };
    }
    if (title.includes('dotonbori') || query.includes('dotonbori') || title.includes('shinsaibashi')) {
      return { stationName: 'Osaka-Namba Station', lat: 34.6669, lng: 135.5003, walk: '4 min walk from Exit 14' };
    }
    if (title.includes('matsuri')) {
      return { stationName: 'Nodahanshin Station', lat: 34.6945, lng: 135.4746, walk: '5 min walk (400m)' };
    }
  }

  // Day 2 (Nara & Umeda)
  if (dayNumber === 2) {
    if (title.includes('plum hotel')) {
      return { stationName: 'Daikokucho Station', lat: 34.6558, lng: 135.4980, walk: 'Hotel Base', isHotel: true };
    }
    if (title.includes('nara park') || title.includes('todai-ji') || title.includes('deer') || query.includes('nara')) {
      return { stationName: 'Kintetsu-Nara Station', lat: 34.6841, lng: 135.8282, walk: '5 min walk directly into park grounds' };
    }
    if (title.includes('umeda sky') || query.includes('umeda sky')) {
      return { stationName: 'JR Osaka / Umeda Station', lat: 34.7024, lng: 135.4959, walk: '9 min walk via underground walkway' };
    }
    if (title.includes('ali') || query.includes('ali')) {
      return { stationName: 'Shinsaibashi Station', lat: 34.6750, lng: 135.5003, walk: '3 min walk from Exit 6' };
    }
  }

  // Day 3 (Osaka -> Kyoto)
  if (dayNumber === 3) {
    if (title.includes('plum hotel')) {
      return { stationName: 'Daikokucho Station', lat: 34.6558, lng: 135.4980, walk: 'Depart hotel', isHotel: true };
    }
    if (title.includes('rinn shirakawa') || query.includes('rinn shirakawa')) {
      return { stationName: 'Gion-Shijo Station (Keihan)', lat: 35.0037, lng: 135.7725, walk: '5 min walk along Shirakawa canal', isHotel: true };
    }
    if (title.includes('ayam ya') || query.includes('ayam ya')) {
      return { stationName: 'Karasuma Station', lat: 35.0037, lng: 135.7592, walk: '4 min walk (300m)' };
    }
    if (title.includes('gion') || title.includes('canal') || query.includes('gion')) {
      return { stationName: 'Gion-Shijo Station', lat: 35.0037, lng: 135.7725, walk: '3 min walk to canal bridges' };
    }
    if (title.includes('panga') || query.includes('panga')) {
      return { stationName: 'Gion-Shijo Station', lat: 35.0037, lng: 135.7725, walk: '5 min walk (350m)' };
    }
  }

  // Day 4 (Kyoto Classics)
  if (dayNumber === 4) {
    if (title.includes('rinn shirakawa')) {
      return { stationName: 'Gion-Shijo Station', lat: 35.0037, lng: 135.7725, walk: 'Hotel Base', isHotel: true };
    }
    if (title.includes('kiyomizu') || title.includes('sannenzaka') || query.includes('kiyomizu')) {
      return { stationName: 'Gion-Shijo / Kiyomizu-Gojo', lat: 34.9961, lng: 135.7694, walk: '15 min scenic stroll / Bus 206' };
    }
    if (title.includes('nishiki') || query.includes('nishiki')) {
      return { stationName: 'Kyoto-Kawaramachi Station', lat: 35.0039, lng: 135.7695, walk: '3 min walk from Exit 9' };
    }
    if (title.includes('kinkaku') || query.includes('kinkaku')) {
      return { stationName: 'Kita-Oji Station (Bus #205)', lat: 35.0441, lng: 135.7589, walk: 'Direct Kyoto City Bus #205 (10 min)' };
    }
  }

  // Day 5 (Kyoto -> Tokyo Shinkansen)
  if (dayNumber === 5) {
    if (title.includes('rinn shirakawa')) {
      return { stationName: 'Gion-Shijo Station', lat: 35.0037, lng: 135.7725, walk: 'Check-out', isHotel: true };
    }
    if (title.includes('kyoto station') || title.includes('shinkansen')) {
      return { stationName: 'Kyoto Station', lat: 34.9858, lng: 135.7588, walk: 'Direct Shinkansen Platform 11/12', isDirect: true };
    }
    if (title.includes('tokyo station')) {
      return { stationName: 'Tokyo Station', lat: 35.6812, lng: 139.7671, walk: 'Direct Shinkansen Gates', isDirect: true };
    }
    if (title.includes('tavinos') || query.includes('tavinos') || title.includes('hotel base')) {
      return { stationName: 'Asakusa Station (TX / Metro)', lat: 35.7144, lng: 139.7925, walk: '3 min walk from TX Asakusa (6 min from Metro)', isHotel: true };
    }
    if (title.includes('halal sakura') || query.includes('halal sakura')) {
      return { stationName: 'Asakusa Station', lat: 35.7126, lng: 139.7983, walk: '8 min walk along Kototoi-dori' };
    }
    if (title.includes('senso-ji') || query.includes('senso-ji')) {
      return { stationName: 'Asakusa Station', lat: 35.7126, lng: 139.7983, walk: '4 min walk through Kaminarimon Gate' };
    }
  }

  // Day 6 (GALA Yuzawa Snow Day)
  if (dayNumber === 6) {
    if (title.includes('tavinos')) {
      return { stationName: 'Asakusa Station', lat: 35.7144, lng: 139.7925, walk: 'Tokyo Base Hotel', isHotel: true };
    }
    if (title.includes('tokyo station')) {
      return { stationName: 'Tokyo Station', lat: 35.6812, lng: 139.7671, walk: 'Shinkansen Gate', isDirect: true };
    }
    if (title.includes('gala yuzawa') || query.includes('gala')) {
      return { stationName: 'GALA Yuzawa Station', lat: 36.9508, lng: 138.8005, walk: 'Direct inside ski resort! 0 min walk to gondola', isDirect: true };
    }
    if (title.includes('gyumon')) {
      return { stationName: 'Asakusa Station', lat: 35.7126, lng: 139.7983, walk: '5 min walk' };
    }
  }

  // Day 7 (Mt. Fuji Kawaguchiko)
  if (dayNumber === 7) {
    if (title.includes('tavinos')) {
      return { stationName: 'Asakusa Station', lat: 35.7144, lng: 139.7925, walk: 'Tokyo Base Hotel', isHotel: true };
    }
    if (title.includes('shinjuku')) {
      return { stationName: 'Shinjuku Station', lat: 35.6909, lng: 139.7000, walk: 'Busta Expressway Bus / JR Chuo Platform', isDirect: true };
    }
    if (title.includes('chureito') || title.includes('arakurayama') || query.includes('arakurayama')) {
      return { stationName: 'Shimoyoshida Station', lat: 35.4988, lng: 138.8052, walk: '8 min walk to pagoda stairway' };
    }
    if (title.includes('kawaguchi') || title.includes('oishi') || query.includes('oishi')) {
      return { stationName: 'Kawaguchiko Station', lat: 35.4982, lng: 138.7688, walk: 'Retro Sightseeing Bus from station (15 min)' };
    }
  }

  // Day 8 (Tokyo Hubs)
  if (dayNumber === 8) {
    if (title.includes('tavinos')) {
      return { stationName: 'Asakusa Station', lat: 35.7144, lng: 139.7925, walk: 'Tokyo Base Hotel', isHotel: true };
    }
    if (title.includes('godzilla') || query.includes('godzilla') || query.includes('gracery')) {
      return { stationName: 'JR Shinjuku Station', lat: 35.6909, lng: 139.7000, walk: '5 min walk from East Exit through Kabukicho' };
    }
    if (title.includes('akihabara') || query.includes('yodobashi')) {
      return { stationName: 'JR Akihabara Station', lat: 35.6983, lng: 139.7731, walk: '1 min walk from Electric Town Exit', isDirect: true };
    }
    if (title.includes('don quijote') || query.includes('don quijote')) {
      return { stationName: 'JR Akihabara Station', lat: 35.6983, lng: 139.7731, walk: '4 min walk' };
    }
    if (title.includes('ameyoko') || query.includes('ameyoko') || title.includes('ueno')) {
      return { stationName: 'JR Ueno / Okachimachi Station', lat: 35.7075, lng: 139.7744, walk: '1 min walk right beside station under tracks', isDirect: true };
    }
    if (title.includes('halal sakura')) {
      return { stationName: 'Asakusa Station', lat: 35.7126, lng: 139.7983, walk: '8 min walk' };
    }
  }

  // Day 9 (Narita Skyliner Departure)
  if (dayNumber === 9) {
    if (title.includes('tavinos')) {
      return { stationName: 'Asakusa Station', lat: 35.7144, lng: 139.7925, walk: 'Final Check-out', isHotel: true };
    }
    if (title.includes('keisei ueno') || query.includes('keisei ueno')) {
      return { stationName: 'Keisei Ueno Station', lat: 35.7118, lng: 139.7735, walk: 'Direct Skyliner Terminal concourse', isDirect: true };
    }
    if (title.includes('skyliner')) {
      return { stationName: 'Keisei Ueno / Nippori Station', lat: 35.7278, lng: 139.7709, walk: 'Board 160 km/h Skyliner to Narita', isDirect: true };
    }
    if (title.includes('narita') || title.includes('flight') || query.includes('narita')) {
      return { stationName: 'Narita Airport Terminal 1 & 2·3 Stations', lat: 35.7656, lng: 140.3863, walk: 'Direct airport terminal elevator (0 min)', isDirect: true };
    }
  }

  return null;
}

/**
 * Draws authentic high-contrast railway tracks with casing, ties, and stations
 */
function drawTrainRouteOnLayer(layerGroup, routeConfig, options = {}) {
  const { showStations = true } = options;
  if (!routeConfig || !routeConfig.stations || routeConfig.stations.length < 2) return;

  const latlngs = routeConfig.stations.map(st => [st.lat, st.lng]);

  // Outer dark railway ballast casing
  L.polyline(latlngs, {
    color: '#0F172A',
    weight: 8,
    opacity: 0.9,
    lineCap: 'round',
    lineJoin: 'round'
  }).addTo(layerGroup);

  // Inner track line (rail ties styling with dashed pattern)
  const innerTrack = L.polyline(latlngs, {
    color: routeConfig.color || '#38BDF8',
    weight: 4,
    opacity: 0.95,
    dashArray: '10, 8',
    lineCap: 'butt',
    lineJoin: 'round'
  }).addTo(layerGroup);

  // High-speed glow for bullet trains
  if (routeConfig.type === 'shinkansen') {
    L.polyline(latlngs, {
      color: routeConfig.color || '#00E5FF',
      weight: 16,
      opacity: 0.22,
      lineCap: 'round',
      lineJoin: 'round'
    }).addTo(layerGroup);
  }

  // Interactive Popup on the Train Line
  const linePopupHtml = [
    '<div class="p-3 bg-[#090D15] text-slate-200 min-w-[260px] rounded-xl font-sans text-xs space-y-2">',
    '  <div class="flex items-center justify-between border-b border-white/10 pb-1.5">',
    '    <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold" style="background: ' + (routeConfig.color || '#38BDF8') + '22; color: ' + (routeConfig.color || '#38BDF8') + '; border: 1px solid ' + (routeConfig.color || '#38BDF8') + '55;">' + routeConfig.badge + '</span>',
    '    <span class="text-[10px] font-mono text-gold font-bold">' + routeConfig.duration + '</span>',
    '  </div>',
    '  <div class="font-bold text-white text-sm font-mincho">' + routeConfig.name + '</div>',
    '  <div class="text-[11px] text-slate-300 font-mono">Route: ' + routeConfig.route + '</div>',
    '  <div class="flex items-center justify-between pt-1 border-t border-white/10 text-[10px] font-mono text-slate-400">',
    '    <span>Speed: ' + routeConfig.speed + '</span>',
    '    <span class="text-cyan-400">' + routeConfig.stations.length + ' Stations</span>',
    '  </div>',
    '</div>'
  ].join('');

  innerTrack.bindPopup(linePopupHtml);

  // Station Pins Along Route
  if (showStations) {
    routeConfig.stations.forEach((st, stIdx) => {
      const isEndpoint = stIdx === 0 || stIdx === routeConfig.stations.length - 1;
      const isKeyStop = isEndpoint || (st.note && (st.note.includes('transfer') || st.note.includes('hub') || st.note.includes('Fuji') || st.note.includes('Ski')));

      const pinColor = isEndpoint ? '#E83929' : (isKeyStop ? '#D4AF37' : routeConfig.color || '#38BDF8');
      const pinIcon = isEndpoint ? '🚉' : (routeConfig.type === 'shinkansen' ? '🚅' : '🚆');
      const pinSize = isEndpoint ? 30 : 22;

      const stationIcon = L.divIcon({
        className: 'custom-roadmap-marker',
        html: [
          '<div class="train-station-pin ' + (isEndpoint ? 'is-endpoint' : '') + '" style="background: #090D15; border: 2px solid ' + pinColor + '; color: ' + pinColor + '; width: ' + pinSize + 'px; height: ' + pinSize + 'px; font-size: ' + (isEndpoint ? '13px' : '10px') + ';">',
          '  <span>' + pinIcon + '</span>',
          '</div>'
        ].join(''),
        iconSize: [pinSize, pinSize],
        iconAnchor: [pinSize / 2, pinSize / 2],
        popupAnchor: [0, -pinSize / 2]
      });

      const stationPopupHtml = [
        '<div class="p-3 bg-[#090D15] text-slate-200 min-w-[240px] max-w-[290px] rounded-xl font-sans text-xs space-y-1.5">',
        '  <div class="flex items-center justify-between border-b border-white/10 pb-1">',
        '    <span class="px-2 py-0.5 rounded text-[9px] font-mono font-bold" style="background: ' + pinColor + '22; color: ' + pinColor + '; border: 1px solid ' + pinColor + '55;">' + routeConfig.badge + '</span>',
        '    <span class="text-[10px] font-mono text-slate-400">Station #' + (stIdx + 1) + '</span>',
        '  </div>',
        '  <div class="font-bold text-white text-sm font-mincho">' + st.name + '</div>',
        '  <p class="text-slate-300 text-[11px] leading-relaxed">' + st.note + '</p>',
        '  <div class="pt-1 border-t border-white/10 flex items-center justify-between">',
        '    <span class="text-[10px] font-mono text-gold">' + routeConfig.name + '</span>',
        '    <a href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(st.name + ' Japan') + '" target="_blank" rel="noopener noreferrer" class="text-vermilion font-bold text-[10px] hover:underline">Station Map ↗</a>',
        '  </div>',
        '</div>'
      ].join('');

      L.marker([st.lat, st.lng], { icon: stationIcon })
        .bindPopup(stationPopupHtml)
        .addTo(layerGroup);
    });
  }
}

/**
 * Draws the Station Connector Line linking a place to its train station
 */
function drawStationConnector(layerGroup, fromCoord, toCoord, options = {}) {
  const { color = '#38BDF8', label = 'Walk from Station', isHotel = false } = options;
  if (!fromCoord || !toCoord) return;

  const connectorColor = isHotel ? '#D4AF37' : color;

  const line = L.polyline([fromCoord, toCoord], {
    color: connectorColor,
    weight: isHotel ? 2.5 : 2,
    opacity: 0.85,
    dashArray: '4, 6',
    className: 'station-connector-path'
  }).addTo(layerGroup);

  if (label) {
    line.bindTooltip(label, {
      sticky: true,
      className: 'font-mono text-[10px]'
    });
  }
}

/**
 * Renders the prominent Hotel Base Beacon on the map
 */
function renderHotelBaseMarker(layerGroup, hotel, dayNumber) {
  if (!hotel) return;

  const hotelIcon = L.divIcon({
    className: 'custom-roadmap-marker',
    html: [
      '<div class="hotel-base-beacon-pin" title="Hotel Base: ' + hotel.name + '">',
      '  <span class="hotel-base-beacon-pulse"></span>',
      '  <span class="text-lg">🏨</span>',
      '</div>'
    ].join(''),
    iconSize: [42, 42],
    iconAnchor: [21, 21],
    popupAnchor: [0, -22]
  });

  const popupHtml = [
    '<div class="p-4 bg-[#090D15] text-slate-200 min-w-[270px] max-w-[310px] rounded-xl font-sans text-xs space-y-2 border border-gold/40">',
    '  <div class="flex items-center justify-between border-b border-gold/30 pb-1.5">',
    '    <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-gold text-black uppercase">🏨 YOUR PLACE TO STAY</span>',
    '    <span class="text-[10px] font-mono text-gold font-bold">DAY ' + dayNumber + ' BASE</span>',
    '  </div>',
    '  <div class="font-bold text-white text-base font-mincho leading-tight">' + hotel.name + '</div>',
    '  <div class="text-[11px] text-slate-300">' + hotel.city + ' • <span class="text-gold font-mono">' + hotel.nights + '</span></div>',
    '  <div class="p-2.5 rounded-lg bg-[#05070B] border border-white/10 space-y-1 text-[11px] font-mono">',
    '    <div class="text-slate-400">Check-in: <span class="text-white font-bold">' + hotel.checkIn + '</span> | Check-out: <span class="text-white font-bold">' + hotel.checkOut + '</span></div>',
    '    <div class="text-cyan-300">🚉 Nearest Station: <span class="font-bold">' + hotel.nearestStation + '</span></div>',
    '    <div class="text-[10px] text-slate-400">🚶 ' + hotel.walkTime + '</div>',
    '  </div>',
    '  <p class="text-[11px] text-slate-300 leading-relaxed">' + hotel.notes + '</p>',
    '  <div class="pt-1 border-t border-white/10 flex items-center justify-between">',
    '    <span class="text-[10px] font-mono text-gold font-bold">Base Hotel</span>',
    '    <a href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(hotel.mapQuery) + '" target="_blank" rel="noopener noreferrer" class="text-gold font-bold text-[11px] hover:underline">Hotel Map ↗</a>',
    '  </div>',
    '</div>'
  ].join('');

  L.marker([hotel.lat, hotel.lng], { icon: hotelIcon })
    .bindPopup(popupHtml)
    .addTo(layerGroup);

  // Station Connector for Hotel
  if (hotel.stationLat && hotel.stationLng) {
    drawStationConnector(layerGroup, [hotel.stationLat, hotel.stationLng], [hotel.lat, hotel.lng], {
      isHotel: true,
      label: '🚶 ' + hotel.walkTime
    });
  }
}

// -------------------------------------------------------------
// STEP COORDINATE RESOLVER
// -------------------------------------------------------------
function resolveStepCoordinate(st, dayNumber) {
  const hotel = HOTEL_BASES[dayNumber];
  const dayData = ROADMAP_DATA.find(d => d.day === dayNumber);
  const activities = dayData ? dayData.activities : [];
  const sTitle = (st.title || '').toLowerCase();
  const sType = (st.type || '').toLowerCase();

  // 1. Hotel / Accommodation
  if (sType === 'hotel' || sTitle.includes('hotel') || sTitle.includes('plum') || sTitle.includes('rinn') || sTitle.includes('tavinos') || sTitle.includes('check-in') || sTitle.includes('check-out') || sTitle.includes('bag drop') || sTitle.includes('rest & prayer') || sTitle.includes('pack')) {
    if (hotel) return { lat: hotel.lat, lng: hotel.lng, title: hotel.name, isHotel: true };
  }

  // 2. Narita Airport (prioritize before generic airport check)
  if (sTitle.includes('narita') || sTitle.includes('nrt')) {
    return { lat: 35.7720, lng: 140.3929, title: 'Narita International Airport (NRT)' };
  }

  // 3. Kansai Airport
  if (sType === 'flight' || sType === 'airport' || sTitle.includes('kix') || sTitle.includes('kansai')) {
    return { lat: 34.4347, lng: 135.2443, title: 'Kansai International Airport (KIX)' };
  }

  // 4. Exact or substring match in activities
  for (const act of activities) {
    const aTitle = (act.title || '').toLowerCase();
    if (aTitle.includes(sTitle) || sTitle.includes(aTitle)) {
      return { lat: act.lat, lng: act.lng, title: act.title, act };
    }
  }

  // 5. Significant keyword overlap with activities
  const keywords = sTitle.split(/[\s➔\(\)\/,\-]+/).filter(w => w.length > 3 && !['train', 'metro', 'line', 'station', 'bus'].includes(w));
  for (const act of activities) {
    const aTitle = (act.title || '').toLowerCase();
    for (const kw of keywords) {
      if (aTitle.includes(kw)) {
        return { lat: act.lat, lng: act.lng, title: act.title, act };
      }
    }
  }

  // 6. Check train route stations
  const trainKeys = DAY_TRAIN_MAPPING[dayNumber] || [];
  for (const tKey of trainKeys) {
    const tRoute = TRAIN_ROUTES[tKey];
    if (tRoute && tRoute.stations) {
      for (const stObj of tRoute.stations) {
        const stName = stObj.name.toLowerCase();
        if (sTitle.includes(stName) || stName.includes(sTitle.replace(/station/g, '').trim())) {
          return { lat: stObj.lat, lng: stObj.lng, title: stObj.name };
        }
      }
    }
  }

  // 7. Nearest station fallback
  if (hotel && (sType === 'station' || sTitle.includes('station'))) {
    if (hotel.stationLat && hotel.stationLng) {
      return { lat: hotel.stationLat, lng: hotel.stationLng, title: hotel.nearestStation };
    }
  }

  // 8. Activity fallback
  if (activities.length > 0) {
    return { lat: activities[0].lat, lng: activities[0].lng, title: activities[0].title, act: activities[0] };
  }

  return hotel ? { lat: hotel.lat, lng: hotel.lng, title: hotel.name, isHotel: true } : null;
}

// -------------------------------------------------------------
// CONNECTED JOURNEY PIPELINE BUILDER (Morning ➔ Afternoon ➔ Evening)
// -------------------------------------------------------------
function buildConnectedJourneyPipelineHTML(dayNumber, clickHandlerName, focusHotelHandlerName) {
  // Day 0: All 9 Days Nationwide Corridor
  if (dayNumber === 0) {
    const nationwideHubs = [
      { name: 'Kansai Int Airport (KIX)', lat: 34.4347, lng: 135.2443, icon: '✈️', day: 'Day 1', note: 'Touchdown in Osaka', phase: 'Kansai Hub' },
      { name: 'Plum Hotel Osaka', lat: 34.6565, lng: 135.4985, icon: '🏨', day: 'Days 1–2', note: 'Namba Minami Base', phase: 'Kansai Hub' },
      { name: 'Nara Park (Todai-ji)', lat: 34.6851, lng: 135.8430, icon: '🦌', day: 'Day 2', note: 'Sacred Bowing Deer', phase: 'Kansai Hub' },
      { name: 'Rinn Shirakawa Kyoto', lat: 35.0062, lng: 135.7760, icon: '🏨', day: 'Days 3–4', note: 'Gion Canal Base', phase: 'Kyoto Hub' },
      { name: 'Kiyomizu-dera & Gion', lat: 34.9949, lng: 135.7850, icon: '⛩️', day: 'Day 4', note: 'Historic Temples', phase: 'Kyoto Hub' },
      { name: 'Kyoto ➔ Tokyo Sleeper Bus', lat: 35.1709, lng: 136.8815, icon: '🚌', day: 'Day 5', note: 'Overnight Highway Coach', phase: 'Overnight Transit' },
      { name: 'Hotel Tavinos Asakusa', lat: 35.7171, lng: 139.7915, icon: '🏨', day: 'Days 5–8', note: 'Tokyo Base Hotel', phase: 'Tokyo Hub' },
      { name: 'GALA Yuzawa Ski Resort', lat: 36.9508, lng: 138.8005, icon: '⛷️', day: 'Day 6', note: 'Snow Shinkansen', phase: 'Excursion' },
      { name: 'Mt. Fuji & Kawaguchiko', lat: 35.5015, lng: 138.8016, icon: '🗻', day: 'Day 7', note: 'Chureito Pagoda View', phase: 'Excursion' },
      { name: 'Akihabara & Shinjuku', lat: 35.6987, lng: 139.7747, icon: '⚡', day: 'Day 8', note: 'Tokyo Pop Culture', phase: 'Tokyo Hub' },
      { name: 'Narita Airport (NRT)', lat: 35.7720, lng: 140.3929, icon: '🛫', day: 'Day 9', note: 'Flight Departure Home', phase: 'Departure' }
    ];

    return [
      '<div class="space-y-2.5">',
      '  <div class="flex flex-wrap items-center justify-between gap-2 px-1">',
      '    <div class="flex items-center gap-2">',
      '      <span class="w-2 h-2 rounded-full bg-gold"></span>',
      '      <span class="text-xs font-mono font-bold uppercase tracking-wider text-gold">9-Day Japan Connected Corridor Flow</span>',
      '    </div>',
      '    <span class="text-[11px] font-mono text-slate-400">Click any destination to fly to map</span>',
      '  </div>',
      '  <div class="p-3.5 rounded-2xl bg-[#070B12] border border-white/10 shadow-card-oled">',
      '    <div class="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">',
      nationwideHubs.map((hub, hIdx) => [
        '<div class="flex items-center gap-2 flex-shrink-0">',
        '  <div onclick="' + clickHandlerName + '(' + hIdx + ')" class="journey-pipeline-card hover:border-gold/50" data-hub-idx="' + hIdx + '">',
        '    <div class="flex items-center justify-between mb-1">',
        '      <span class="journey-phase-tag bg-gold/15 text-gold border border-gold/30">' + hub.day + '</span>',
        '      <span class="text-base">' + hub.icon + '</span>',
        '    </div>',
        '    <div class="text-xs font-bold text-white truncate font-mincho">' + hub.name + '</div>',
        '    <div class="text-[10px] text-slate-400 truncate mt-0.5">' + hub.note + '</div>',
        '  </div>',
        (hIdx < nationwideHubs.length - 1 ? '<div class="journey-pipeline-connector text-slate-600"><span class="font-bold text-sm">➔</span></div>' : ''),
        '</div>'
      ].join('')).join(''),
      '    </div>',
      '  </div>',
      '</div>'
    ].join('');
  }

  // Single Day Flow (Days 1 to 9)
  const dayData = ROADMAP_DATA.find(d => d.day === dayNumber);
  const transitFlowData = DAILY_TRANSIT_FLOW[dayNumber];
  const hotel = HOTEL_BASES[dayNumber];
  if (!dayData) return '';

  // Header Bar with Hotel Base & Main Train Route
  const headerHtml = [
    '<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">',
    '  <div class="p-3 rounded-2xl bg-[#090D15] border border-gold/40 shadow-[0_0_15px_rgba(212,175,55,0.12)] flex items-center justify-between gap-3">',
    '    <div class="flex items-center gap-2.5 min-w-0 cursor-pointer" onclick="' + focusHotelHandlerName + '()">',
    '      <div class="w-9 h-9 rounded-xl bg-gold/20 text-gold flex items-center justify-center text-base flex-shrink-0">🏨</div>',
    '      <div class="min-w-0">',
    '        <div class="text-[9px] font-mono font-bold uppercase tracking-wider text-gold">BASE HOTEL (DAY ' + dayNumber + ')</div>',
    '        <div class="text-xs font-bold text-white truncate font-mincho hover:text-gold transition-colors">' + (hotel ? hotel.name : 'Base Hotel') + '</div>',
    '        <div class="text-[10px] text-slate-400 truncate">🚉 ' + (hotel ? hotel.nearestStation.split('/')[0].trim() : '') + '</div>',
    '      </div>',
    '    </div>',
    '    <button onclick="' + focusHotelHandlerName + '()" class="px-2 py-1 rounded-lg bg-gold/20 hover:bg-gold/30 text-gold font-mono font-bold text-[10px] border border-gold/40 flex-shrink-0 transition-all">Focus Map</button>',
    '  </div>',
    '  <div class="p-3 rounded-2xl bg-[#090D15] border border-cyan-500/30 flex items-center gap-3">',
    '    <div class="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-base flex-shrink-0">🚆</div>',
    '    <div class="min-w-0 flex-grow">',
    '      <div class="text-[9px] font-mono font-bold uppercase tracking-wider text-cyan-400">TRANSIT ARTERY</div>',
    '      <div class="text-xs font-bold text-white truncate font-mono">' + (transitFlowData ? transitFlowData.mainTrain.line : 'Connected Transit') + '</div>',
    '      <div class="text-[10px] text-slate-400 truncate">' + (transitFlowData ? transitFlowData.mainTrain.route + ' (' + transitFlowData.mainTrain.time + ')' : '') + '</div>',
    '    </div>',
    '    ' + (transitFlowData ? '<span class="text-[10px] font-mono text-cyan-300 font-bold bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800 flex-shrink-0">' + transitFlowData.mainTrain.cost + '</span>' : ''),
    '  </div>',
    '</div>'
  ].join('');

  // Build Connected Pipeline Steps
  const pipelineStepsHtml = dayData.activities.map((act, actIdx) => {
    const { start } = parseActivityMinutes(act.time);
    const badge = getStopCategoryBadge(act);
    const isLast = actIdx === dayData.activities.length - 1;

    // Determine Phase Label
    let phaseBadge = '';
    if (start < 12 * 60) {
      phaseBadge = '<span class="journey-phase-tag bg-amber-500/15 text-amber-300 border border-amber-500/30">🌅 Morning</span>';
    } else if (start < 17 * 60 + 30) {
      phaseBadge = '<span class="journey-phase-tag bg-sky-500/15 text-sky-300 border border-sky-500/30">☀️ Afternoon</span>';
    } else {
      phaseBadge = '<span class="journey-phase-tag bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">🌙 Evening</span>';
    }

    const transitText = act.transit || (act.category === 'food' ? 'Dining stop' : 'Walk/Visit');
    const stLink = getActivityStationLink(act, dayNumber);
    const transitConnectorNote = stLink ? '🚶 ' + stLink.walk : (act.transit ? '🚆 ' + act.transit.split('(')[0].trim().substring(0, 20) : 'Next Stop');

    return [
      '<div class="flex items-center gap-2 flex-shrink-0">',
      '  <div onclick="' + clickHandlerName + '(' + actIdx + ')" class="journey-pipeline-card hover:border-gold/50" data-stop-idx="' + actIdx + '">',
      '    <div class="flex items-center justify-between gap-1 mb-1">',
      phaseBadge,
      '      <span class="font-mono text-[10px] font-bold text-gold">' + act.time + '</span>',
      '    </div>',
      '    <div class="flex items-start gap-2 mt-1">',
      '      <span class="text-base flex-shrink-0">' + badge.icon + '</span>',
      '      <div class="min-w-0">',
      '        <div class="text-xs font-bold text-white truncate font-mincho">' + act.title + '</div>',
      '        <div class="text-[9px] ' + (act.halal ? 'text-emerald-400 font-bold' : 'text-slate-400') + ' truncate mt-0.5">' + (act.halal ? '🌱 ' + (act.halalNote || 'Halal Certified') : transitText) + '</div>',
      '      </div>',
      '    </div>',
      '  </div>',
      (!isLast ? [
        '<div class="journey-pipeline-connector">',
        '  <span class="text-slate-600 font-bold text-xs">➔</span>',
        '  <span class="text-[9px] text-cyan-400 text-center leading-tight truncate max-w-[80px]">' + transitConnectorNote + '</span>',
        '</div>'
      ].join('') : ''),
      '</div>'
    ].join('');
  }).join('');

  return [
    '<div class="space-y-2.5">',
    headerHtml,
    '  <div class="p-3.5 rounded-2xl bg-[#070B12] border border-white/10 shadow-card-oled">',
    '    <div class="flex items-center justify-between mb-2 px-1">',
    '      <div class="flex items-center gap-2">',
    '        <span class="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Connected Daily Flow:</span>',
    '        <span class="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-white/5 text-slate-300 border border-white/10">' + dayData.activities.length + ' Stops</span>',
    '      </div>',
    '      <button onclick="document.getElementById(\'recenter-master-roadmap-btn\')?.click() || document.getElementById(\'recenter-day-roadmap-btn\')?.click()" class="text-[10px] font-mono text-cyan-400 hover:underline cursor-pointer">🎯 Fit Map</button>',
    '    </div>',
    '    <div class="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">',
    pipelineStepsHtml,
    '    </div>',
    '  </div>',
    '</div>'
  ].join('');
}

// -------------------------------------------------------------
// MASTER ROADMAP (For index.html)
// -------------------------------------------------------------
function initMasterRoadmap(containerId = 'master-roadmap-map') {
  let currentSelectedDay = 1;
  let currentBounds = null;

  const mapEl = document.getElementById(containerId);
  if (!mapEl) return;

  if (mapInstances[containerId]) {
    mapInstances[containerId].remove();
  }

  // Prevent Lenis smooth scroll from capturing wheel events over the map
  mapEl.setAttribute('data-lenis-prevent', 'true');
  mapEl.addEventListener('wheel', (e) => {
    e.stopPropagation();
  }, { passive: false });

  const map = L.map(containerId, {
    zoomControl: true,
    scrollWheelZoom: true,
    doubleClickZoom: true,
    touchZoom: true,
    dragging: true,
    boxZoom: true,
    keyboard: true,
    attributionControl: true
  });
  mapInstances[containerId] = map;

  // Base Layers: Clean, High Resolution Travel Maps
  const baseLayers = {
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

  // Dedicated Map Layers
  const markersLayer = L.layerGroup().addTo(map);
  const connectorsLayer = L.layerGroup().addTo(map);
  const trainRouteLayer = L.layerGroup().addTo(map);

  const ormTileLayer = L.tileLayer('https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png', {
    maxZoom: 19,
    subdomains: 'abc',
    attribution: 'Data &copy; <a href="https://www.openrailwaymap.org">OpenRailwayMap</a>'
  });

  const overlayLayers = {
    '🚆 OpenRailwayMap (All Rails & Tracks)': ormTileLayer,
    '🚅 Shinkansen & Train Routes': trainRouteLayer,
    '🚶 Station Walk Connectors': connectorsLayer
  };

  // Default to CARTO Voyager
  baseLayers['🗺️ CARTO Voyager (Travel & Stations)'].addTo(map);
  L.control.layers(baseLayers, overlayLayers, { position: 'topright' }).addTo(map);

  // Floating Navigation Toolbar (Fit Route, Rail Tracks, Expand Map)
  const navToolbarControl = L.control({ position: 'bottomleft' });
  navToolbarControl.onAdd = function() {
    const div = L.DomUtil.create('div', 'map-floating-toolbar');
    div.innerHTML = [
      '<button id="recenter-master-roadmap-btn" class="map-floating-btn" title="Re-center map to fit current route">',
      '  <span>🎯 Fit Route</span>',
      '</button>',
      '<button id="toggle-openrailwaymap-master-btn" class="map-floating-btn" title="Toggle OpenRailwayMap Rail Tracks">',
      '  <span>🚆 Rail Tracks</span>',
      '</button>',
      '<button id="expand-master-roadmap-btn" class="map-floating-btn" title="Expand / Shrink map view">',
      '  <span id="expand-btn-text">⛶ Expand Map</span>',
      '</button>'
    ].join('');
    L.DomEvent.disableClickPropagation(div);

    const fitBtn = div.querySelector('#recenter-master-roadmap-btn');
    fitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (currentBounds) {
        map.fitBounds(currentBounds, { padding: [45, 45], maxZoom: 15 });
      }
    });

    const railBtn = div.querySelector('#toggle-openrailwaymap-master-btn');
    railBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (map.hasLayer(ormTileLayer)) {
        map.removeLayer(ormTileLayer);
        railBtn.classList.remove('active');
        railBtn.style.color = '#94A3B8';
        railBtn.style.borderColor = 'rgba(255, 255, 255, 0.2)';
      } else {
        map.addLayer(ormTileLayer);
        railBtn.classList.add('active');
        railBtn.style.color = '#38BDF8';
        railBtn.style.borderColor = '#38BDF8';
      }
    });

    const expandBtn = div.querySelector('#expand-master-roadmap-btn');
    const expandText = div.querySelector('#expand-btn-text');
    expandBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      mapEl.classList.toggle('is-expanded');
      const isExpanded = mapEl.classList.contains('is-expanded');
      expandText.textContent = isExpanded ? '✕ Shrink Map' : '⛶ Expand Map';
      expandBtn.classList.toggle('active', isExpanded);
      setTimeout(() => {
        map.invalidateSize();
        if (currentBounds) {
          map.fitBounds(currentBounds, { padding: [45, 45], maxZoom: 15 });
        }
      }, 320);
    });

    return div;
  };
  navToolbarControl.addTo(map);

  setTimeout(() => map.invalidateSize(), 200);
  window.addEventListener('resize', () => map.invalidateSize());

  function renderView(options = {}) {
    const shouldFit = options && options.fit === true;

    markersLayer.clearLayers();
    connectorsLayer.clearLayers();
    trainRouteLayer.clearLayers();

    if (currentSelectedDay === 0) {
      renderAllJapanOverview(shouldFit);
      renderMasterPipeline(currentSelectedDay);
      return;
    }

    const dayData = ROADMAP_DATA.find(d => d.day === currentSelectedDay);
    if (!dayData) return;

    const latlngs = [];

    // 1. Draw Day's Specific Train Route(s)
    const trainKeys = DAY_TRAIN_MAPPING[currentSelectedDay] || [];
    trainKeys.forEach(tKey => {
      const tRoute = TRAIN_ROUTES[tKey];
      if (tRoute) {
        drawTrainRouteOnLayer(trainRouteLayer, tRoute, { showStations: true });
        tRoute.stations.forEach(st => latlngs.push([st.lat, st.lng]));
      }
    });

    // 2. Render Place to Stay (HOTEL BASE) with Prominent Golden Beacon
    const hotel = HOTEL_BASES[currentSelectedDay];
    if (hotel) {
      renderHotelBaseMarker(markersLayer, hotel, currentSelectedDay);
      latlngs.push([hotel.lat, hotel.lng]);
    }

    // 3. Render Activity Markers & Station Connector Lines
    dayData.activities.forEach((act, idx) => {
      const lat = act.lat || 35.6812;
      const lng = act.lng || 139.7671;
      const pos = [lat, lng];
      latlngs.push(pos);

      const badge = getStopCategoryBadge(act);

      const icon = L.divIcon({
        className: 'custom-roadmap-marker',
        html: [
          '<div class="roadmap-pin" style="border-color: ' + badge.border + '; background: ' + badge.bg + '; color: ' + badge.color + ';" id="marker-pin-' + containerId + '-' + idx + '">',
          '  <span class="text-xs">' + badge.icon + '</span>',
          '</div>'
        ].join(''),
        iconSize: [36, 36],
        iconAnchor: [18, 18],
        popupAnchor: [0, -18]
      });

      // Find Connected Train Station
      const stLink = getActivityStationLink(act, currentSelectedDay);
      if (stLink && !stLink.isDirect && !stLink.isHotel) {
        drawStationConnector(connectorsLayer, [stLink.lat, stLink.lng], pos, {
          color: '#38BDF8',
          label: '🚶 ' + stLink.walk + ' from ' + stLink.stationName
        });
      }

      const halalPill = act.halal 
        ? '<div class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 font-mono text-[10px] border border-emerald-800/60">🌱 ' + (act.halalNote || 'Halal Certified') + '</div>' 
        : '';
      const stationPill = stLink 
        ? '<div class="p-2 rounded-lg bg-[#05070B] border border-cyan-500/30 text-[10px] font-mono text-cyan-300">🚉 <b>' + stLink.stationName + '</b><br><span class="text-slate-400">🚶 ' + stLink.walk + '</span></div>' 
        : (act.transit ? '<div class="p-2 rounded-lg bg-[#05070B] border border-white/5 text-[10px] font-mono text-cyan-300">🚆 ' + act.transit + '</div>' : '');

      const popupHtml = [
        '<div class="p-4 bg-[#090D15] text-slate-200 min-w-[270px] max-w-[320px] rounded-xl font-sans text-xs space-y-2">',
        '  <div class="flex items-center justify-between border-b border-white/10 pb-2">',
        '    <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold" style="background: ' + badge.bg + '; color: ' + badge.color + '; border: 1px solid ' + badge.border + ';">' + badge.icon + ' ' + badge.label + ' #' + (idx + 1) + '</span>',
        '    <span class="font-mono font-bold text-gold">' + act.time + '</span>',
        '  </div>',
        '  <div class="font-bold text-sm text-white font-mincho leading-tight">' + act.title + '</div>',
        halalPill,
        stationPill,
        '  <p class="text-slate-400 text-[11px] leading-relaxed">' + (act.note || '') + '</p>',
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

    if (latlngs.length > 0) {
      currentBounds = L.latLngBounds(latlngs);
      if (shouldFit) {
        map.fitBounds(currentBounds, { padding: [45, 45], maxZoom: 15 });
      }
    }

    renderMasterPipeline(currentSelectedDay);
  }

  function renderAllJapanOverview(shouldFit = false) {
    markersLayer.clearLayers();
    connectorsLayer.clearLayers();
    trainRouteLayer.clearLayers();

    // 1. Draw ALL major train lines across Japan
    const allTrainKeys = ['kyotoTokyoSleeperBus', 'joetsuShinkansen', 'nankaiAirportExpress', 'kintetsuNaraLine', 'jrKyotoLine', 'fujiExcursionRoute', 'keiseiSkyliner'];
    const allBoundsLatLngs = [];

    allTrainKeys.forEach(tKey => {
      const tRoute = TRAIN_ROUTES[tKey];
      if (tRoute) {
        drawTrainRouteOnLayer(trainRouteLayer, tRoute, { showStations: true });
        tRoute.stations.forEach(st => allBoundsLatLngs.push([st.lat, st.lng]));
      }
    });

    // 2. Render ALL 3 Hotel Bases with Golden Beacons
    const allHotels = [HOTEL_BASES[1], HOTEL_BASES[3], HOTEL_BASES[5]];
    allHotels.forEach(h => {
      renderHotelBaseMarker(markersLayer, h, h.id.includes('osaka') ? '1–2' : (h.id.includes('kyoto') ? '3–4' : '5–8'));
      allBoundsLatLngs.push([h.lat, h.lng]);
    });

    // 3. Key Excursion Destinations & Airports
    const hubs = [
      { name: 'Kansai Int Airport (KIX)', lat: 34.4347, lng: 135.2443, day: 'Day 1', type: '✈️ Airport', note: 'Touchdown in Osaka • Nankai Express to city' },
      { name: 'Nara Park (Todai-ji)', lat: 34.6851, lng: 135.8430, day: 'Day 2', type: '🦌 Excursion', note: 'Kintetsu Rapid Express to sacred deer' },
      { name: 'GALA Yuzawa Ski Resort', lat: 36.9508, lng: 138.8005, day: 'Day 6', type: '🚅 Shinkansen Snow', note: '75 min direct Joetsu bullet train to Niigata' },
      { name: 'Mt. Fuji (Lake Kawaguchiko)', lat: 35.5015, lng: 138.8016, day: 'Day 7', type: '🗻 Fuji Trip', note: 'Chureito Pagoda & Oishi Park' },
      { name: 'Narita Int Airport (NRT)', lat: 35.7720, lng: 140.3929, day: 'Day 9', type: '🛫 Departure', note: 'Keisei Skyliner 41m non-stop to flight home' }
    ];

    hubs.forEach((hub) => {
      allBoundsLatLngs.push([hub.lat, hub.lng]);
      const icon = L.divIcon({
        className: 'custom-roadmap-marker',
        html: '<div class="roadmap-pin" style="background: #090D15; border-color: #D4AF37; color: #D4AF37;"><span class="text-xs font-bold">' + hub.type.split(' ')[0] + '</span></div>',
        iconSize: [36, 36],
        iconAnchor: [18, 18],
        popupAnchor: [0, -18]
      });

      const popupHtml = [
        '<div class="p-3.5 bg-[#090D15] text-slate-200 min-w-[230px] rounded-xl font-sans text-xs space-y-1.5">',
        '  <div class="flex items-center justify-between border-b border-white/10 pb-1.5">',
        '    <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-gold text-black">' + hub.day + '</span>',
        '    <span class="font-mono text-slate-400 text-[10px]">' + hub.type + '</span>',
        '  </div>',
        '  <div class="font-bold text-white text-sm font-mincho">' + hub.name + '</div>',
        '  <p class="text-slate-300 text-[11px] leading-relaxed">' + hub.note + '</p>',
        '</div>'
      ].join('');

      L.marker([hub.lat, hub.lng], { icon }).bindPopup(popupHtml).addTo(markersLayer);
    });

    if (allBoundsLatLngs.length > 0) {
      currentBounds = L.latLngBounds(allBoundsLatLngs);
      if (shouldFit) {
        map.fitBounds(currentBounds, { padding: [40, 40] });
      }
    }
  }

  function renderMasterPipeline(dayNumber) {
    const pipelineContainer = document.getElementById('master-journey-pipeline-container');
    if (!pipelineContainer) return;
    pipelineContainer.innerHTML = buildConnectedJourneyPipelineHTML(dayNumber, 'window.roadmapFocusStop', 'window.roadmapFocusHotel');
  }

  window.roadmapFocusHub = function(hIdx) {
    const nationwideHubs = [
      { name: 'Kansai Int Airport (KIX)', lat: 34.4347, lng: 135.2443 },
      { name: 'Plum Hotel Osaka', lat: 34.6565, lng: 135.4985 },
      { name: 'Nara Park (Todai-ji)', lat: 34.6851, lng: 135.8430 },
      { name: 'Rinn Shirakawa Kyoto', lat: 35.0062, lng: 135.7760 },
      { name: 'Kiyomizu-dera & Gion', lat: 34.9949, lng: 135.7850 },
      { name: 'Kyoto ➔ Tokyo Sleeper Bus', lat: 35.1709, lng: 136.8815 },
      { name: 'Hotel Tavinos Asakusa', lat: 35.7171, lng: 139.7915 },
      { name: 'GALA Yuzawa Ski Resort', lat: 36.9508, lng: 138.8005 },
      { name: 'Mt. Fuji & Kawaguchiko', lat: 35.5015, lng: 138.8016 },
      { name: 'Akihabara & Shinjuku', lat: 35.6987, lng: 139.7747 },
      { name: 'Narita Airport (NRT)', lat: 35.7720, lng: 140.3929 }
    ];
    const hub = nationwideHubs[hIdx];
    if (!hub) return;

    map.flyTo([hub.lat, hub.lng], 14, { duration: 1 });

    markersLayer.eachLayer(layer => {
      if (layer instanceof L.Marker) {
        const p = layer.getLatLng();
        if (Math.abs(p.lat - hub.lat) < 0.05 && Math.abs(p.lng - hub.lng) < 0.05) {
          layer.openPopup();
        }
      }
    });

    document.querySelectorAll('#master-journey-pipeline-container .journey-pipeline-card').forEach((c) => {
      if (c.getAttribute('data-hub-idx') === String(hIdx)) {
        c.classList.add('is-focused');
        c.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      } else {
        c.classList.remove('is-focused');
      }
    });
  };

  window.roadmapFocusHotel = function() {
    const hotel = HOTEL_BASES[currentSelectedDay];
    if (!hotel) return;
    map.flyTo([hotel.lat, hotel.lng], 16, { duration: 1 });
    markersLayer.eachLayer(layer => {
      if (layer instanceof L.Marker) {
        const p = layer.getLatLng();
        if (Math.abs(p.lat - hotel.lat) < 0.0005 && Math.abs(p.lng - hotel.lng) < 0.0005) {
          layer.openPopup();
        }
      }
    });
  };

  window.roadmapFocusStop = function(target) {
    if (currentSelectedDay === 0) {
      window.roadmapFocusHub(target);
      return;
    }

    const idx = parseInt(target, 10);
    const dayData = ROADMAP_DATA.find(d => d.day === currentSelectedDay);
    if (!dayData) return;
    const act = dayData.activities[idx];
    if (!act) return;

    map.flyTo([act.lat, act.lng], 16, { duration: 1 });
    
    markersLayer.eachLayer(layer => {
      if (layer instanceof L.Marker) {
        const p = layer.getLatLng();
        if (Math.abs(p.lat - act.lat) < 0.0005 && Math.abs(p.lng - act.lng) < 0.0005) {
          layer.openPopup();
        }
      }
    });

    highlightStopCard(idx);
  };

  function highlightStopCard(idx) {
    document.querySelectorAll('#master-journey-pipeline-container .journey-pipeline-card').forEach((c) => {
      if (c.getAttribute('data-stop-idx') === String(idx)) {
        c.classList.add('is-focused');
        c.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      } else {
        c.classList.remove('is-focused');
      }
    });
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
      renderView({ fit: true });
    });
  });

  // Initial render: frame day route cleanly
  renderView({ fit: true });
}

// -------------------------------------------------------------
// SINGLE DAY ROADMAP (For day-1.html to day-9.html)
// -------------------------------------------------------------
function initDayRoadmap(dayNumber, containerId = 'day-roadmap-map') {
  const dayData = ROADMAP_DATA.find(d => d.day === dayNumber);
  const hotel = HOTEL_BASES[dayNumber];
  const mapEl = document.getElementById(containerId);
  if (!dayData || !mapEl) return;

  if (mapInstances[containerId]) {
    mapInstances[containerId].remove();
  }

  // Prevent Lenis smooth scroll from capturing wheel events over the map
  mapEl.setAttribute('data-lenis-prevent', 'true');
  mapEl.addEventListener('wheel', (e) => {
    e.stopPropagation();
  }, { passive: false });

  let currentBounds = null;

  const map = L.map(containerId, {
    zoomControl: true,
    scrollWheelZoom: true,
    doubleClickZoom: true,
    touchZoom: true,
    dragging: true,
    boxZoom: true,
    keyboard: true
  });
  mapInstances[containerId] = map;

  // Base Layers: Clean, High Resolution Travel Maps
  const baseLayers = {
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

  const markersLayer = L.layerGroup().addTo(map);
  const connectorsLayer = L.layerGroup().addTo(map);
  const trainRouteLayer = L.layerGroup().addTo(map);

  const ormTileLayer = L.tileLayer('https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png', {
    maxZoom: 19,
    subdomains: 'abc',
    attribution: 'Data &copy; <a href="https://www.openrailwaymap.org">OpenRailwayMap</a>'
  });

  const overlayLayers = {
    '🚆 OpenRailwayMap (All Rails & Tracks)': ormTileLayer,
    '🚅 Train Route': trainRouteLayer,
    '🚶 Station Walk Connectors': connectorsLayer
  };

  // Default to CARTO Voyager
  baseLayers['🗺️ CARTO Voyager (Travel & Stations)'].addTo(map);
  L.control.layers(baseLayers, overlayLayers, { position: 'topright' }).addTo(map);

  // Floating Navigation Toolbar (Fit Route, Rail Tracks, Expand Map)
  const navToolbarControl = L.control({ position: 'bottomleft' });
  navToolbarControl.onAdd = function() {
    const div = L.DomUtil.create('div', 'map-floating-toolbar');
    div.innerHTML = [
      '<button id="recenter-day-roadmap-btn" class="map-floating-btn" title="Re-center map to fit day route">',
      '  <span>🎯 Fit Route</span>',
      '</button>',
      '<button id="toggle-openrailwaymap-day-btn" class="map-floating-btn" title="Toggle OpenRailwayMap Rail Tracks">',
      '  <span>🚆 Rail Tracks</span>',
      '</button>',
      '<button id="expand-day-roadmap-btn" class="map-floating-btn" title="Expand / Shrink map view">',
      '  <span id="day-expand-btn-text">⛶ Expand Map</span>',
      '</button>'
    ].join('');
    L.DomEvent.disableClickPropagation(div);

    const fitBtn = div.querySelector('#recenter-day-roadmap-btn');
    fitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (currentBounds) {
        map.fitBounds(currentBounds, { padding: [40, 40], maxZoom: 15 });
      }
    });

    const railBtn = div.querySelector('#toggle-openrailwaymap-day-btn');
    railBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (map.hasLayer(ormTileLayer)) {
        map.removeLayer(ormTileLayer);
        railBtn.classList.remove('active');
        railBtn.style.color = '#94A3B8';
        railBtn.style.borderColor = 'rgba(255, 255, 255, 0.2)';
      } else {
        map.addLayer(ormTileLayer);
        railBtn.classList.add('active');
        railBtn.style.color = '#38BDF8';
        railBtn.style.borderColor = '#38BDF8';
      }
    });

    const expandBtn = div.querySelector('#expand-day-roadmap-btn');
    const expandText = div.querySelector('#day-expand-btn-text');
    expandBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      mapEl.classList.toggle('is-expanded');
      const isExpanded = mapEl.classList.contains('is-expanded');
      expandText.textContent = isExpanded ? '✕ Shrink Map' : '⛶ Expand Map';
      expandBtn.classList.toggle('active', isExpanded);
      setTimeout(() => {
        map.invalidateSize();
        if (currentBounds) {
          map.fitBounds(currentBounds, { padding: [40, 40], maxZoom: 15 });
        }
      }, 320);
    });

    return div;
  };
  navToolbarControl.addTo(map);

  setTimeout(() => map.invalidateSize(), 200);
  window.addEventListener('resize', () => map.invalidateSize());

  function render(options = {}) {
    const shouldFit = options && options.fit === true;

    markersLayer.clearLayers();
    connectorsLayer.clearLayers();
    trainRouteLayer.clearLayers();

    const latlngs = [];

    // 1. Draw Day's Train Route(s)
    const trainKeys = DAY_TRAIN_MAPPING[dayNumber] || [];
    trainKeys.forEach(tKey => {
      const tRoute = TRAIN_ROUTES[tKey];
      if (tRoute) {
        drawTrainRouteOnLayer(trainRouteLayer, tRoute, { showStations: true });
        tRoute.stations.forEach(st => latlngs.push([st.lat, st.lng]));
      }
    });

    // 2. Render Place to Stay (HOTEL BASE) with Prominent Golden Beacon
    if (hotel) {
      renderHotelBaseMarker(markersLayer, hotel, dayNumber);
      latlngs.push([hotel.lat, hotel.lng]);
    }

    // 3. Draw Activity Markers & Station Connector Lines
    dayData.activities.forEach((act, idx) => {
      const lat = act.lat || 35.6812;
      const lng = act.lng || 139.7671;
      const pos = [lat, lng];
      latlngs.push(pos);

      const badge = getStopCategoryBadge(act);

      const icon = L.divIcon({
        className: 'custom-roadmap-marker',
        html: [
          '<div class="roadmap-pin" style="border-color: ' + badge.border + '; background: ' + badge.bg + '; color: ' + badge.color + ';" id="marker-day-' + dayNumber + '-' + idx + '">',
          '  <span class="text-xs">' + badge.icon + '</span>',
          '</div>'
        ].join(''),
        iconSize: [34, 34],
        iconAnchor: [17, 17],
        popupAnchor: [0, -16]
      });

      // Find Connected Train Station
      const stLink = getActivityStationLink(act, dayNumber);
      if (stLink && !stLink.isDirect && !stLink.isHotel) {
        drawStationConnector(connectorsLayer, [stLink.lat, stLink.lng], pos, {
          color: '#38BDF8',
          label: '🚶 ' + stLink.walk + ' from ' + stLink.stationName
        });
      }

      const halalBadge = act.halal 
        ? '<div class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 font-mono text-[10px]">🌱 ' + (act.halalNote || 'Halal') + '</div>'
        : '';
      const stationBadge = stLink 
        ? '<div class="p-1.5 rounded-lg bg-[#05070B] border border-cyan-500/30 text-[10px] font-mono text-cyan-300">🚉 <b>' + stLink.stationName + '</b><br><span class="text-slate-400">🚶 ' + stLink.walk + '</span></div>'
        : (act.transit ? '<div class="p-1.5 rounded-lg bg-[#05070B] border border-white/5 text-[10px] font-mono text-cyan-300">🚆 ' + act.transit + '</div>' : '');

      const popupHtml = [
        '<div class="p-3.5 bg-[#090D15] text-slate-200 min-w-[250px] max-w-[300px] rounded-xl font-sans text-xs space-y-1.5">',
        '  <div class="flex items-center justify-between border-b border-white/10 pb-1.5">',
        '    <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold" style="background: ' + badge.bg + '; color: ' + badge.color + '; border: 1px solid ' + badge.border + ';">' + badge.icon + ' ' + badge.label + ' #' + (idx + 1) + '</span>',
        '    <span class="font-mono font-bold text-gold">' + act.time + '</span>',
        '  </div>',
        '  <div class="font-bold text-white text-sm font-mincho">' + act.title + '</div>',
        halalBadge,
        stationBadge,
        '  <p class="text-slate-400 text-[11px] leading-relaxed">' + (act.note || '') + '</p>',
        '  <div class="pt-1 border-t border-white/10 flex items-center justify-between">',
        '    <span class="text-[10px] font-mono text-slate-400">' + act.category.toUpperCase() + '</span>',
        '    <a href="https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(act.mapQuery) + '" target="_blank" rel="noopener noreferrer" class="text-vermilion font-bold text-[11px] hover:underline">Transit Route ↗</a>',
        '  </div>',
        '</div>'
      ].join('');

      const m = L.marker(pos, { icon }).bindPopup(popupHtml).addTo(markersLayer);
      m.on('click', () => {
        highlightDayTimelineCard(idx);
        highlightDayPipelineCard(idx);
      });
    });

    if (latlngs.length > 0) {
      currentBounds = L.latLngBounds(latlngs);
      if (shouldFit) {
        map.fitBounds(currentBounds, { padding: [40, 40], maxZoom: 15 });
      }
    }

    // Render Connected Journey Pipeline directly above map
    const pipelineContainer = document.getElementById('day-journey-pipeline-container');
    if (pipelineContainer) {
      pipelineContainer.innerHTML = buildConnectedJourneyPipelineHTML(dayNumber, 'window.dayRoadmapFocusStop', 'window.dayRoadmapFocusHotel');
    }
  }

  window.dayRoadmapFocusHotel = function() {
    if (!hotel) return;
    map.flyTo([hotel.lat, hotel.lng], 16, { duration: 0.8 });
    markersLayer.eachLayer(layer => {
      if (layer instanceof L.Marker) {
        const p = layer.getLatLng();
        if (Math.abs(p.lat - hotel.lat) < 0.0005 && Math.abs(p.lng - hotel.lng) < 0.0005) {
          layer.openPopup();
        }
      }
    });
  };

  window.dayRoadmapFocusStop = function(actIdx) {
    const act = dayData.activities[actIdx];
    if (!act) return;

    map.flyTo([act.lat, act.lng], 16, { duration: 0.8 });
    markersLayer.eachLayer(layer => {
      if (layer instanceof L.Marker) {
        const p = layer.getLatLng();
        if (Math.abs(p.lat - act.lat) < 0.0005 && Math.abs(p.lng - act.lng) < 0.0005) {
          layer.openPopup();
        }
      }
    });

    highlightDayPipelineCard(actIdx);
    highlightDayTimelineCard(actIdx);
  };

  function highlightDayPipelineCard(idx) {
    document.querySelectorAll('#day-journey-pipeline-container .journey-pipeline-card').forEach((c) => {
      if (c.getAttribute('data-stop-idx') === String(idx)) {
        c.classList.add('is-focused');
        c.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      } else {
        c.classList.remove('is-focused');
      }
    });
  }

  function highlightDayTimelineCard(idx) {
    const cards = document.querySelectorAll('.timeline-card[data-activity-index]');
    cards.forEach((c) => {
      const cIdx = parseInt(c.getAttribute('data-activity-index'), 10);
      if (cIdx === idx) {
        c.scrollIntoView({ behavior: 'smooth', block: 'center' });
        c.classList.add('ring-2', 'ring-vermilion', 'bg-white/5');
        setTimeout(() => c.classList.remove('ring-2', 'ring-vermilion', 'bg-white/5'), 2500);
      }
    });
  }

  // Connect chronological timeline cards to map
  document.querySelectorAll('.timeline-card[data-activity-index]').forEach((card) => {
    const actIdx = parseInt(card.getAttribute('data-activity-index'), 10);
    if (!isNaN(actIdx) && actIdx >= 0 && actIdx < dayData.activities.length) {
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        const act = dayData.activities[actIdx];
        if (act) {
          map.flyTo([act.lat, act.lng], 16, { duration: 0.8 });
          markersLayer.eachLayer(layer => {
            if (layer instanceof L.Marker) {
              const p = layer.getLatLng();
              if (Math.abs(p.lat - act.lat) < 0.0005 && Math.abs(p.lng - act.lng) < 0.0005) {
                layer.openPopup();
              }
            }
          });
          highlightDayPipelineCard(actIdx);
        }
      });
    }
  });

  // Initial render: frame day route cleanly
  render({ fit: true });
}

window.initMasterRoadmap = initMasterRoadmap;
window.initDayRoadmap = initDayRoadmap;
window.ROADMAP_DATA = ROADMAP_DATA;
window.DAILY_TRANSIT_FLOW = DAILY_TRANSIT_FLOW;
window.TRAIN_ROUTES = TRAIN_ROUTES;
window.HOTEL_BASES = HOTEL_BASES;
