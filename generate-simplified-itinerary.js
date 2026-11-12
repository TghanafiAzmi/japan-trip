const fs = require('fs');

// Detailed simplified itinerary data with highlighted activities, icons, concise bullets, and transit metadata
const daysData = [
  // DAY 1 (Osaka)
  {
    day: 1,
    title: "Day 1 Chronological Timeline & Connected Transit",
    stops: "8 Connected Stops",
    activities: [
      {
        time: "09:45–11:45",
        title: "Kansai International Airport (Arrive KIX & Customs)",
        mapQuery: "Kansai International Airport",
        category: { label: "Flight Arrival", icon: "plane-landing", badgeBg: "bg-cyan-950/80", badgeText: "text-cyan-300", badgeBorder: "border-cyan-800/80" },
        costJpy: 0,
        costMyr: 0,
        costDisplay: "Free / Included",
        highlights: [
          { icon: "plane-landing", label: "Touchdown KIX T1 (09:45)", color: "text-cyan-400" },
          { icon: "file-check-2", label: "Immigration & Customs (~11:30+)", color: "text-emerald-400" },
          { icon: "credit-card", label: "Top-up ICOCA Card (2F)", color: "text-gold" }
        ],
        bullets: [
          { icon: "check-circle-2", iconColor: "text-emerald-400", text: "Flight touchdown at Terminal 1 (09:45). Clear immigration, collect baggage, and pass customs (clearing after ~11:30am)." },
          { icon: "footprints", iconColor: "text-amber-400", text: "Walk 3 min across the 2F covered walkway straight to Kansai Airport Railway Station ticket machines." }
        ],
        transit: { icon: "train", station: "Kansai Airport Station (KIX)", detail: "2F Covered Walkway (150m / 3 min)" }
      },
      {
        time: "11:45–13:00",
        title: "Airport → Osaka Namba (Nankai Airport Express)",
        mapQuery: "Namba Station Osaka",
        category: { label: "Train Transit", icon: "train", badgeBg: "bg-sky-950/80", badgeText: "text-sky-300", badgeBorder: "border-sky-800/80" },
        costJpy: 970,
        costMyr: 29,
        costDisplay: "¥970 • ~RM 29",
        highlights: [
          { icon: "train", label: "Nankai Airport Express", color: "text-sky-400" },
          { icon: "compass", label: "Cross Sky Gate Bridge", color: "text-amber-400" },
          { icon: "map-pin", label: "Direct to Namba 3F (44 min)", color: "text-emerald-400" }
        ],
        bullets: [
          { icon: "check-circle-2", iconColor: "text-emerald-400", text: "Board Nankai Airport Express at Platform 1/2 (~11:55 / 12:05 departure)." },
          { icon: "navigation", iconColor: "text-cyan-400", text: "Scenic 44-min ride across Osaka Bay Sky Gate Bridge direct into Namba Station 3F concourse (11 stops, ¥970)." }
        ],
        transit: { icon: "train", station: "Namba Station (Nankai)", detail: "Platform 1/2 ➔ Direct to Namba 3F concourse (44 min)" }
      },
      {
        time: "13:00–13:45",
        title: "Namba Station ➔ Plum Hotel (Luggage Drop)",
        mapQuery: "Plum Hotel Osaka",
        category: { label: "Hotel Logistics", icon: "hotel", badgeBg: "bg-purple-950/80", badgeText: "text-purple-300", badgeBorder: "border-purple-800/80" },
        costJpy: 0,
        costMyr: 0,
        costDisplay: "Free / Included",
        highlights: [
          { icon: "luggage", label: "Drop Luggage at Front Desk", color: "text-purple-400" },
          { icon: "footprints", label: "8-min Walk via Daikoku St", color: "text-amber-400" },
          { icon: "clock", label: "Prep for Lunch", color: "text-gold" }
        ],
        bullets: [
          { icon: "footprints", iconColor: "text-amber-400", text: "From Namba South Exit, walk 8 min (600m) south down Daikoku shopping street (or Subway 1 stop to Daikokucho Exit 1)." },
          { icon: "check-circle-2", iconColor: "text-emerald-400", text: "Safely drop all suitcases at Plum Hotel front desk so you can explore unencumbered." }
        ],
        transit: { icon: "hotel", station: "Plum Hotel Osaka Base", detail: "Walk 8 min (600m) from Namba South Exit or 3 min from Daikokucho Exit 1" }
      },
      {
        time: "13:45–15:00",
        title: "Lunch: Halal Ramen Naniwaya",
        mapQuery: "Halal Ramen Naniwaya Osaka",
        category: { label: "Halal Dining", icon: "utensils", badgeBg: "bg-emerald-950/80", badgeText: "text-emerald-300", badgeBorder: "border-emerald-800/80" },
        costJpy: 1500,
        costMyr: 45,
        costDisplay: "¥1,500 • ~RM 45",
        highlights: [
          { icon: "utensils", label: "Chicken Paitan Ramen", color: "text-emerald-400" },
          { icon: "sparkles", label: "Crispy Gyoza & Karaage", color: "text-gold" },
          { icon: "shield-check", label: "100% Halal Certified", color: "text-cyan-400" }
        ],
        bullets: [
          { icon: "footprints", iconColor: "text-amber-400", text: "Walk east 4 min (320m) from Plum Hotel directly to Halal Ramen Naniwaya." },
          { icon: "utensils", iconColor: "text-emerald-400", text: "Warm up with rich Halal chicken & beef broth ramen, freshly pan-fried dumplings, and karaage." }
        ],
        transit: { icon: "footprints", station: "Halal Ramen Naniwaya", detail: "Walk 4 min (320m) east from Plum Hotel" }
      },
      {
        time: "15:00–17:30",
        title: "Plum Hotel Check-in & Settle in / Prayer",
        mapQuery: "Plum Hotel Osaka",
        category: { label: "Hotel Logistics", icon: "key", badgeBg: "bg-purple-950/80", badgeText: "text-purple-300", badgeBorder: "border-purple-800/80" },
        costJpy: 0,
        costMyr: 0,
        costDisplay: "Free / Included",
        highlights: [
          { icon: "key", label: "Official Check-in (3:00 PM)", color: "text-gold" },
          { icon: "bed-double", label: "Unpack Winter Layers", color: "text-purple-400" },
          { icon: "heart", label: "Dhuhr & Asr Prayer Break", color: "text-emerald-400" }
        ],
        bullets: [
          { icon: "check-circle-2", iconColor: "text-emerald-400", text: "Standard room check-in opens at 3:00pm. Collect keys, head up to your room, and unpack." },
          { icon: "clock", iconColor: "text-gold", text: "Perform Dhuhr and Asr prayers, recharge devices, and rest before heading into Dotonbori." }
        ],
        transit: { icon: "hotel", station: "Plum Hotel Osaka Base", detail: "3:00pm standard room check-in" }
      },
      {
        time: "17:30–20:00",
        title: "Dotonbori & Shinsaibashi Night Walk",
        mapQuery: "Dotonbori Glico Man Sign Osaka",
        category: { label: "Sightseeing", icon: "camera", badgeBg: "bg-rose-950/80", badgeText: "text-rose-300", badgeBorder: "border-rose-800/80" },
        costJpy: 190,
        costMyr: 6,
        costDisplay: "¥190 • ~RM 6",
        highlights: [
          { icon: "camera", label: "Glico Running Man Photo", color: "text-rose-400" },
          { icon: "sparkles", label: "Dotonbori Canal Neon Walk", color: "text-gold" },
          { icon: "shopping-bag", label: "Shinsaibashi Arcades", color: "text-cyan-400" }
        ],
        bullets: [
          { icon: "train", iconColor: "text-sky-400", text: "Take Midosuji Line 1 stop from Daikokucho to Namba (2 min, ¥190) ➔ Exit 14 onto Ebisu Bridge." },
          { icon: "camera", iconColor: "text-rose-400", text: "Pose with the famous giant Glico sign, Kani Doraku moving crab, and explore bustling neon arcades." }
        ],
        transit: { icon: "subway", station: "Osaka-Namba Station (Exit 14)", detail: "Midosuji Line 1 stop ➔ Walk 3 min (250m) to Ebisu Bridge" }
      },
      {
        time: "20:00–21:30",
        title: "Dinner: Halal Restaurant Matsuri",
        mapQuery: "Halal Restaurant Matsuri Osaka",
        category: { label: "Halal Dining", icon: "utensils", badgeBg: "bg-emerald-950/80", badgeText: "text-emerald-300", badgeBorder: "border-emerald-800/80" },
        costJpy: 2200,
        costMyr: 65,
        costDisplay: "¥2,200 • ~RM 65",
        highlights: [
          { icon: "utensils", label: "DIY Takoyaki & Sukiyaki", color: "text-emerald-400" },
          { icon: "flame", label: "Hot Okonomiyaki Grill", color: "text-gold" },
          { icon: "heart", label: "Dedicated Prayer Space", color: "text-cyan-400" }
        ],
        bullets: [
          { icon: "train", iconColor: "text-sky-400", text: "From Namba, take Sennichimae Line 4 stops to Nodahanshin Station (7 min, ¥240) ➔ Exit 7, walk 4 min." },
          { icon: "utensils", iconColor: "text-emerald-400", text: "Experience table-side DIY Halal takoyaki, okonomiyaki, and sukiyaki with dedicated on-site prayer space." }
        ],
        transit: { icon: "subway", station: "Nodahanshin Station (Exit 7)", detail: "Sennichimae Line 4 stops ➔ Walk 4 min (300m)" }
      },
      {
        time: "21:30–22:30",
        title: "Return to Plum Hotel Osaka",
        mapQuery: "Plum Hotel Osaka",
        category: { label: "Hotel Logistics", icon: "hotel", badgeBg: "bg-purple-950/80", badgeText: "text-purple-300", badgeBorder: "border-purple-800/80" },
        costJpy: 240,
        costMyr: 7,
        costDisplay: "¥240 • ~RM 7",
        highlights: [
          { icon: "subway", label: "Subway Back to Daikokucho", color: "text-purple-400" },
          { icon: "moon", label: "Rest & Recovery", color: "text-gold" },
          { icon: "sparkles", label: "Prep for Nara Deer Day 2", color: "text-emerald-400" }
        ],
        bullets: [
          { icon: "train", iconColor: "text-sky-400", text: "Sennichimae Line to Namba, transfer to Midosuji Line 1 stop to Daikokucho Station Exit 1 (¥240)." },
          { icon: "bed-double", iconColor: "text-purple-400", text: "Walk 3 min back to Plum Hotel. Get a deep night's sleep ahead of Nara Park deer tomorrow!" }
        ],
        transit: { icon: "hotel", station: "Daikokucho Station (Exit 1)", detail: "Subway 10 min ➔ Walk 3 min (250m) to Plum Hotel" }
      }
    ]
  },

  // DAY 2 (Osaka + Nara)
  {
    day: 2,
    title: "Day 2 Chronological Timeline & Connected Transit",
    stops: "8 Connected Stops",
    activities: [
      {
        time: "08:30–09:00",
        title: "Plum Hotel ➔ Osaka-Namba Station",
        mapQuery: "Osaka-Namba Station",
        category: { label: "Walk Transit", icon: "footprints", badgeBg: "bg-sky-950/80", badgeText: "text-sky-300", badgeBorder: "border-sky-800/80" },
        costJpy: 0,
        costMyr: 0,
        costDisplay: "Free / Included",
        highlights: [
          { icon: "footprints", label: "Morning Walk North (8 min)", color: "text-amber-400" },
          { icon: "train", label: "Kintetsu Ticket Concourse", color: "text-sky-400" }
        ],
        bullets: [
          { icon: "footprints", iconColor: "text-amber-400", text: "Depart Plum Hotel Osaka; walk north 8 min (650m) along Daikokucho avenue." },
          { icon: "navigation", iconColor: "text-cyan-400", text: "Enter Osaka-Namba Station direct into Kintetsu underground gates for the Nara Express." }
        ],
        transit: { icon: "footprints", station: "Osaka-Namba Station", detail: "Walk 8 min (650m) north to Kintetsu ticket gates" }
      },
      {
        time: "09:00–10:00",
        title: "Osaka-Namba ➔ Nara (Kintetsu Rapid Express)",
        mapQuery: "Kintetsu-Nara Station",
        category: { label: "Train Transit", icon: "train", badgeBg: "bg-sky-950/80", badgeText: "text-sky-300", badgeBorder: "border-sky-800/80" },
        costJpy: 680,
        costMyr: 20,
        costDisplay: "¥680 • ~RM 20",
        highlights: [
          { icon: "train", label: "Kintetsu Rapid Express", color: "text-sky-400" },
          { icon: "mountain", label: "Pass Mt. Ikoma Tunnel", color: "text-purple-400" },
          { icon: "clock", label: "38-min Direct Ride", color: "text-gold" }
        ],
        bullets: [
          { icon: "train", iconColor: "text-sky-400", text: "Board Kintetsu Nara Line Rapid Express (Platform 1/2, 38 min direct, ¥680)." },
          { icon: "map-pin", iconColor: "text-emerald-400", text: "Smooth express transit through Mt. Ikoma Tunnel straight into Kintetsu-Nara terminal." }
        ],
        transit: { icon: "train", station: "Kintetsu-Nara Station", detail: "Platform 1/2 ➔ 38 min direct (6 stops, ¥680)" }
      },
      {
        time: "10:00–14:00",
        title: "Nara Park & Todai-ji (Sacred Bowing Deer)",
        mapQuery: "Todai-ji Temple Nara",
        category: { label: "Sightseeing", icon: "camera", badgeBg: "bg-rose-950/80", badgeText: "text-rose-300", badgeBorder: "border-rose-800/80" },
        costJpy: 600,
        costMyr: 18,
        costDisplay: "¥600 • ~RM 18",
        highlights: [
          { icon: "sparkles", label: "Feed Bowing Sika Deer", color: "text-amber-400" },
          { icon: "landmark", label: "Todai-ji Great Bronze Buddha", color: "text-gold" },
          { icon: "trees", label: "Ancient Nara Pine Forest", color: "text-emerald-400" }
        ],
        bullets: [
          { icon: "sparkles", iconColor: "text-gold", text: "Exit 2 into Nara Park; purchase deer crackers (¥200) to feed friendly bowing deer." },
          { icon: "landmark", iconColor: "text-amber-400", text: "Walk to Todai-ji Daibutsuden (entry ¥600) to see the monumental 15-meter bronze Buddha." }
        ],
        transit: { icon: "footprints", station: "Kintetsu-Nara Station (Exit 2)", detail: "Walk 5 min (400m) east on Noborioji-dori into park" }
      },
      {
        time: "14:00–15:00",
        title: "Nara ➔ Osaka-Namba (Return Train)",
        mapQuery: "Osaka-Namba Station",
        category: { label: "Train Transit", icon: "train", badgeBg: "bg-sky-950/80", badgeText: "text-sky-300", badgeBorder: "border-sky-800/80" },
        costJpy: 680,
        costMyr: 20,
        costDisplay: "¥680 • ~RM 20",
        highlights: [
          { icon: "train", label: "Rapid Express Return", color: "text-sky-400" },
          { icon: "hotel", label: "Plum Hotel Afternoon Rest", color: "text-purple-400" }
        ],
        bullets: [
          { icon: "train", iconColor: "text-sky-400", text: "Catch Kintetsu Rapid Express back to Osaka-Namba Station (38 min, ¥680)." },
          { icon: "footprints", iconColor: "text-amber-400", text: "Walk 8 min to Plum Hotel for a quick afternoon rest, freshen up, and prayer." }
        ],
        transit: { icon: "train", station: "Osaka-Namba Station", detail: "Kintetsu train 38 min ➔ Walk 8 min back to Plum Hotel" }
      },
      {
        time: "16:00–16:30",
        title: "Plum Hotel ➔ Umeda Station (Subway)",
        mapQuery: "Umeda Station Osaka",
        category: { label: "Subway Transit", icon: "subway", badgeBg: "bg-sky-950/80", badgeText: "text-sky-300", badgeBorder: "border-sky-800/80" },
        costJpy: 240,
        costMyr: 7,
        costDisplay: "¥240 • ~RM 7",
        highlights: [
          { icon: "subway", label: "Midosuji Line Northbound", color: "text-sky-400" },
          { icon: "navigation", label: "Underground Walkway (9 min)", color: "text-cyan-400" }
        ],
        bullets: [
          { icon: "subway", iconColor: "text-sky-400", text: "Board Midosuji Line at Daikokucho direct to Umeda Station (12 min, 5 stops, ¥240)." },
          { icon: "footprints", iconColor: "text-amber-400", text: "Exit North Central Gate; follow underground pedestrian tunnel (9 min) to Umeda Sky Building." }
        ],
        transit: { icon: "subway", station: "JR Osaka / Umeda Station", detail: "Midosuji Line 12 min ➔ Walk 9 min (650m) via underground walkway" }
      },
      {
        time: "16:30–18:30",
        title: "Umeda Sky Building Floating Garden (Sunset View)",
        mapQuery: "Umeda Sky Building Osaka",
        category: { label: "Sightseeing", icon: "camera", badgeBg: "bg-rose-950/80", badgeText: "text-rose-300", badgeBorder: "border-rose-800/80" },
        costJpy: 1500,
        costMyr: 45,
        costDisplay: "¥1,500 • ~RM 45",
        highlights: [
          { icon: "sunset", label: "Floating Garden Sunset (17:05)", color: "text-gold" },
          { icon: "navigation", label: "Glass Tube Escalator (35F)", color: "text-cyan-400" },
          { icon: "camera", label: "360° Open-Air Skyline View", color: "text-rose-400" }
        ],
        bullets: [
          { icon: "navigation", iconColor: "text-cyan-400", text: "Ascend the futuristic glass tube escalator bridging the twin 173m towers to Kuchu Teien Observatory." },
          { icon: "sunset", iconColor: "text-gold", text: "Watch the panoramic winter sunset over Osaka Bay and Yodo River (entry ¥1,500)." }
        ],
        transit: { icon: "landmark", station: "Kuchu Teien Observatory", detail: "Glass elevator to 35F + tube escalator to open-air rooftop" }
      },
      {
        time: "18:30–20:30",
        title: "Dinner: Ali's Kitchen Pakistani (Shinsaibashi)",
        mapQuery: "Alis Kitchen Shinsaibashi Osaka",
        category: { label: "Halal Dining", icon: "utensils", badgeBg: "bg-emerald-950/80", badgeText: "text-emerald-300", badgeBorder: "border-emerald-800/80" },
        costJpy: 2000,
        costMyr: 60,
        costDisplay: "¥2,000 • ~RM 60",
        highlights: [
          { icon: "award", label: "Michelin Bib Gourmand Biryani", color: "text-gold" },
          { icon: "utensils", label: "Garlic Naan & Mutton Karahi", color: "text-emerald-400" },
          { icon: "shield-check", label: "100% Halal Verified", color: "text-cyan-400" }
        ],
        bullets: [
          { icon: "subway", iconColor: "text-sky-400", text: "Take Midosuji Line from Umeda to Shinsaibashi Station (6 min, ¥240) ➔ Exit 1, walk 2 min." },
          { icon: "utensils", iconColor: "text-emerald-400", text: "Feast on award-winning Halal Pakistani aromatic biryani, sizzling kebabs, and fresh naan." }
        ],
        transit: { icon: "subway", station: "Shinsaibashi Station (Exit 1)", detail: "Midosuji Line 3 stops (6 min) ➔ Walk 2 min (150m)" }
      },
      {
        time: "20:30–21:30",
        title: "Return to Plum Hotel Osaka",
        mapQuery: "Plum Hotel Osaka",
        category: { label: "Hotel Logistics", icon: "hotel", badgeBg: "bg-purple-950/80", badgeText: "text-purple-300", badgeBorder: "border-purple-800/80" },
        costJpy: 190,
        costMyr: 6,
        costDisplay: "¥190 • ~RM 6",
        highlights: [
          { icon: "subway", label: "Subway 1 Stop to Base", color: "text-purple-400" },
          { icon: "luggage", label: "Pack for Kyoto Move Tomorrow", color: "text-gold" }
        ],
        bullets: [
          { icon: "subway", iconColor: "text-sky-400", text: "Hop on Midosuji Line from Namba to Daikokucho Station Exit 1 (2 min, ¥190) ➔ Walk 3 min to hotel." },
          { icon: "luggage", iconColor: "text-gold", text: "Pack suitcases and prepare for hotel checkout and transit to Kyoto in the morning." }
        ],
        transit: { icon: "hotel", station: "Plum Hotel Osaka Base", detail: "Subway to Daikokucho Exit 1 ➔ Walk 3 min (250m) to Plum Hotel" }
      }
    ]
  },

  // DAY 3 (Kyoto)
  {
    day: 3,
    title: "Day 3 Chronological Timeline & Connected Transit",
    stops: "8 Connected Stops",
    activities: [
      {
        time: "09:00–10:00",
        title: "Check out Plum Hotel ➔ Transit to Umeda",
        mapQuery: "Hankyu Osaka-Umeda Station",
        category: { label: "Transit", icon: "train", badgeBg: "bg-sky-950/80", badgeText: "text-sky-300", badgeBorder: "border-sky-800/80" },
        costJpy: 240,
        costMyr: 7,
        costDisplay: "¥240 • ~RM 7",
        highlights: [
          { icon: "check-circle", label: "Plum Hotel Checkout (9:00 AM)", color: "text-emerald-400" },
          { icon: "subway", label: "Midosuji Line to Umeda", color: "text-sky-400" },
          { icon: "train", label: "Hankyu Kyoto Terminal", color: "text-gold" }
        ],
        bullets: [
          { icon: "check-circle-2", iconColor: "text-emerald-400", text: "Check out of Plum Hotel Osaka by 9:00am with luggage." },
          { icon: "subway", iconColor: "text-sky-400", text: "Take Midosuji Line to Umeda (12 min, ¥240) ➔ 3-min indoor walk to Hankyu Osaka-Umeda Station." }
        ],
        transit: { icon: "train", station: "Hankyu Osaka-Umeda Station", detail: "Subway 12 min ➔ Walk 3 min (200m) to Hankyu gates" }
      },
      {
        time: "10:00–11:00",
        title: "Osaka ➔ Kyoto-Kawaramachi (Hankyu Limited Express)",
        mapQuery: "Kyoto-Kawaramachi Station",
        category: { label: "Train Transit", icon: "train", badgeBg: "bg-sky-950/80", badgeText: "text-sky-300", badgeBorder: "border-sky-800/80" },
        costJpy: 410,
        costMyr: 12,
        costDisplay: "¥410 • ~RM 12",
        highlights: [
          { icon: "train", label: "Hankyu Limited Express", color: "text-sky-400" },
          { icon: "clock", label: "43-min Direct to Kyoto", color: "text-gold" },
          { icon: "map-pin", label: "Arrive Downtown Kawaramachi", color: "text-emerald-400" }
        ],
        bullets: [
          { icon: "train", iconColor: "text-sky-400", text: "Board Hankyu Kyoto Line Limited Express at Osaka-Umeda (Platform 1/2/3)." },
          { icon: "navigation", iconColor: "text-cyan-400", text: "Fast 43-min comfortable direct ride arriving directly at Kyoto-Kawaramachi Station next to Gion (¥410)." }
        ],
        transit: { icon: "train", station: "Kyoto-Kawaramachi Station", detail: "Hankyu train 43 min direct (Platform 1/2/3, ¥410)" }
      },
      {
        time: "11:00–12:00",
        title: "Kyoto-Kawaramachi ➔ Rinn Shirakawa South (Luggage Drop)",
        mapQuery: "Rinn Shirakawa South Kyoto",
        category: { label: "Hotel Logistics", icon: "hotel", badgeBg: "bg-purple-950/80", badgeText: "text-purple-300", badgeBorder: "border-purple-800/80" },
        costJpy: 0,
        costMyr: 0,
        costDisplay: "Free / Included",
        highlights: [
          { icon: "footprints", label: "Cross Shijo Bridge over Kamogawa", color: "text-amber-400" },
          { icon: "trees", label: "Shirakawa Willow Canal Walk", color: "text-emerald-400" },
          { icon: "luggage", label: "Drop Bags at Rinn Reception", color: "text-purple-400" }
        ],
        bullets: [
          { icon: "footprints", iconColor: "text-amber-400", text: "Exit 1B; stroll east 8 min across Shijo Bridge into historic Gion along Shirakawa canal." },
          { icon: "check-circle-2", iconColor: "text-emerald-400", text: "Drop suitcases at Rinn Shirakawa South reception so you can head out light for ramen." }
        ],
        transit: { icon: "hotel", station: "Rinn Shirakawa South Base", detail: "Walk 8 min (600m) east across Shijo Bridge along Shirakawa canal" }
      },
      {
        time: "12:00–14:00",
        title: "Lunch: Halal Ramen Ayam Ya Karasuma",
        mapQuery: "Ayam-YA Karasuma Kyoto",
        category: { label: "Halal Dining", icon: "utensils", badgeBg: "bg-emerald-950/80", badgeText: "text-emerald-300", badgeBorder: "border-emerald-800/80" },
        costJpy: 1300,
        costMyr: 39,
        costDisplay: "¥1,300 • ~RM 39",
        highlights: [
          { icon: "utensils", label: "Tori Paitan Rich Chicken Ramen", color: "text-emerald-400" },
          { icon: "flame", label: "Spicy Tsukemen Dip Noodles", color: "text-gold" },
          { icon: "shield-check", label: "Halal Certified Kitchen", color: "text-cyan-400" }
        ],
        bullets: [
          { icon: "train", iconColor: "text-sky-400", text: "Take Hankyu Line 1 stop to Karasuma Station (2 min, ¥170) ➔ Exit 13, walk 4 min." },
          { icon: "utensils", iconColor: "text-emerald-400", text: "Kyoto's top Halal ramen spot—famous for thick, savory chicken paitan broth and crispy karaage." }
        ],
        transit: { icon: "subway", station: "Karasuma Station (Exit 13)", detail: "Hankyu 1 stop (2 min) ➔ Walk 4 min (300m)" }
      },
      {
        time: "15:00–16:30",
        title: "Check in Rinn Shirakawa South & Settle in",
        mapQuery: "Rinn Shirakawa South Kyoto",
        category: { label: "Hotel Logistics", icon: "key", badgeBg: "bg-purple-950/80", badgeText: "text-purple-300", badgeBorder: "border-purple-800/80" },
        costJpy: 0,
        costMyr: 0,
        costDisplay: "Free / Included",
        highlights: [
          { icon: "key", label: "Kyoto Machiya Check-in (3:00 PM)", color: "text-gold" },
          { icon: "sparkles", label: "Traditional Wooden Aesthetics", color: "text-purple-400" },
          { icon: "heart", label: "Solat / Prayer Break", color: "text-emerald-400" }
        ],
        bullets: [
          { icon: "check-circle-2", iconColor: "text-emerald-400", text: "Check-in opens at 3:00pm. Collect keys for your traditional Kyoto machiya-style room." },
          { icon: "clock", iconColor: "text-gold", text: "Unpack, perform afternoon prayers, and prepare for the evening twilight walk." }
        ],
        transit: { icon: "hotel", station: "Rinn Shirakawa South Base", detail: "3:00pm standard room check-in" }
      },
      {
        time: "16:30–18:30",
        title: "Gion Shirakawa Canal & Kamogawa Twilight Walk",
        mapQuery: "Gion Shirakawa Canal Kyoto",
        category: { label: "Sightseeing", icon: "camera", badgeBg: "bg-rose-950/80", badgeText: "text-rose-300", badgeBorder: "border-rose-800/80" },
        costJpy: 0,
        costMyr: 0,
        costDisplay: "Free / Included",
        highlights: [
          { icon: "camera", label: "Tatsumi Bridge Photography", color: "text-rose-400" },
          { icon: "landmark", label: "Preserved Machiya Teahouses", color: "text-amber-400" },
          { icon: "sunset", label: "Kamogawa Twilight Riverwalk", color: "text-gold" }
        ],
        bullets: [
          { icon: "footprints", iconColor: "text-amber-400", text: "Step directly outside into the Gion Shirakawa preservation district along stone-paved canal paths." },
          { icon: "camera", iconColor: "text-rose-400", text: "Photograph weeping willows, wooden tea houses, and the Kamogawa riverbanks during twilight hour." }
        ],
        transit: { icon: "footprints", station: "Gion Shirakawa District", detail: "Direct outside hotel doorstep" }
      },
      {
        time: "18:30–20:30",
        title: "Dinner: Halal Wagyu Yakiniku Panga Gion",
        mapQuery: "Halal Wagyu Yakiniku Panga Gion Kyoto",
        category: { label: "Halal Dining", icon: "utensils", badgeBg: "bg-emerald-950/80", badgeText: "text-emerald-300", badgeBorder: "border-emerald-800/80" },
        costJpy: 4500,
        costMyr: 135,
        costDisplay: "¥4,500 • ~RM 135",
        highlights: [
          { icon: "award", label: "A5 Halal Japanese Wagyu", color: "text-gold" },
          { icon: "flame", label: "Table-side Charcoal BBQ", color: "text-emerald-400" },
          { icon: "shield-check", label: "100% Halal Verified Meat", color: "text-cyan-400" }
        ],
        bullets: [
          { icon: "footprints", iconColor: "text-amber-400", text: "Walk 5 min south (350m) along Yamatooji-dori directly to Wagyu Panga Gion." },
          { icon: "utensils", iconColor: "text-emerald-400", text: "Savor premium Halal-certified A5 Japanese Wagyu cuts grilled table-side." }
        ],
        transit: { icon: "footprints", station: "Halal Wagyu Panga Gion", detail: "Walk 5 min (350m) south along Yamatooji-dori" }
      },
      {
        time: "20:30–21:30",
        title: "Return to Rinn Shirakawa South Kyoto",
        mapQuery: "Rinn Shirakawa South Kyoto",
        category: { label: "Hotel Logistics", icon: "hotel", badgeBg: "bg-purple-950/80", badgeText: "text-purple-300", badgeBorder: "border-purple-800/80" },
        costJpy: 0,
        costMyr: 0,
        costDisplay: "Free / Included",
        highlights: [
          { icon: "footprints", label: "Tranquil Night Canal Stroll", color: "text-amber-400" },
          { icon: "moon", label: "Rest for Kiyomizu-dera Day 4", color: "text-gold" }
        ],
        bullets: [
          { icon: "footprints", iconColor: "text-amber-400", text: "Stroll 5 min north along the quiet, illuminated Shirakawa canal back to Rinn Shirakawa South." },
          { icon: "bed-double", iconColor: "text-purple-400", text: "Rest well in traditional tatami rooms ahead of full historic temple exploration tomorrow!" }
        ],
        transit: { icon: "hotel", station: "Rinn Shirakawa South Base", detail: "Walk 5 min north back to hotel" }
      }
    ]
  },

  // DAY 4 (Kyoto)
  {
    day: 4,
    title: "Day 4 Chronological Timeline & Connected Transit",
    stops: "8 Connected Stops",
    activities: [
      {
        time: "08:00–08:30",
        title: "Rinn Shirakawa South ➔ Kiyomizu-dera (Bus)",
        mapQuery: "Kiyomizu-michi Bus Stop Kyoto",
        category: { label: "Bus Transit", icon: "bus", badgeBg: "bg-indigo-950/80", badgeText: "text-indigo-300", badgeBorder: "border-indigo-800/80" },
        costJpy: 230,
        costMyr: 7,
        costDisplay: "¥230 • ~RM 7",
        highlights: [
          { icon: "bus", label: "Kyoto City Bus #207", color: "text-indigo-400" },
          { icon: "footprints", label: "Kiyomizu-zaka Slope Walk", color: "text-amber-400" }
        ],
        bullets: [
          { icon: "bus", iconColor: "text-indigo-400", text: "Walk 5 min to Gion bus stop ➔ Board Kyoto City Bus #207 eastbound to Kiyomizumichi (8 min, ¥230)." },
          { icon: "footprints", iconColor: "text-amber-400", text: "Walk 8 min (500m) up the scenic Kiyomizu-zaka shopping slope to the temple gate." }
        ],
        transit: { icon: "bus", station: "Kiyomizu-michi Bus Stop", detail: "Bus #207 8 min ➔ Walk 8 min (500m) up Kiyomizu-zaka" }
      },
      {
        time: "08:30–10:30",
        title: "Kiyomizu-dera Temple (Pure Water Stage)",
        mapQuery: "Kiyomizu-dera Temple Kyoto",
        category: { label: "Sightseeing", icon: "camera", badgeBg: "bg-rose-950/80", badgeText: "text-rose-300", badgeBorder: "border-rose-800/80" },
        costJpy: 400,
        costMyr: 12,
        costDisplay: "¥400 • ~RM 12",
        highlights: [
          { icon: "landmark", label: "Iconic Wooden Stage (13m High)", color: "text-gold" },
          { icon: "sparkles", label: "Otowa Sacred Waterfall", color: "text-cyan-400" },
          { icon: "camera", label: "Maple Forest Valley View", color: "text-rose-400" }
        ],
        bullets: [
          { icon: "landmark", iconColor: "text-gold", text: "Stand on the massive 13-meter-high wooden stage built entirely without nails overlooking Kyoto valley." },
          { icon: "sparkles", iconColor: "text-cyan-400", text: "Visit Otowa Waterfall below to drink from three sacred streams for health, longevity, and wisdom." }
        ],
        transit: { icon: "landmark", station: "Kiyomizu-dera Main Hall", detail: "Deva Gate entrance ➔ Wooden stage & Otowa Waterfall" }
      },
      {
        time: "10:30–12:00",
        title: "Sannenzaka & Ninenzaka Historic Slopes Stroll",
        mapQuery: "Sannenzaka Ninenzaka Kyoto",
        category: { label: "Sightseeing", icon: "camera", badgeBg: "bg-rose-950/80", badgeText: "text-rose-300", badgeBorder: "border-rose-800/80" },
        costJpy: 0,
        costMyr: 0,
        costDisplay: "Free / Included",
        highlights: [
          { icon: "landmark", label: "Yasaka Pagoda Photo View", color: "text-gold" },
          { icon: "footprints", label: "Cobblestone Alleys & Machiya", color: "text-amber-400" },
          { icon: "coffee", label: "Tatami Starbucks Cafe", color: "text-emerald-400" }
        ],
        bullets: [
          { icon: "footprints", iconColor: "text-amber-400", text: "Walk down preserved stone-paved stairs of Sannenzaka and Ninenzaka past wooden artisan shops." },
          { icon: "camera", iconColor: "text-rose-400", text: "Capture the quintessential Kyoto postcard view framing the 5-story Yasaka Pagoda (Hokan-ji)." }
        ],
        transit: { icon: "footprints", station: "Sannenzaka / Ninenzaka Alleys", detail: "Direct pedestrian path down from Kiyomizu-dera" }
      },
      {
        time: "12:30–14:30",
        title: "Nishiki Market (Kyoto's 400-Year Food Alley)",
        mapQuery: "Nishiki Market Kyoto",
        category: { label: "Sightseeing", icon: "shopping-bag", badgeBg: "bg-amber-950/80", badgeText: "text-amber-300", badgeBorder: "border-amber-800/80" },
        costJpy: 1500,
        costMyr: 45,
        costDisplay: "¥1,500 • ~RM 45",
        highlights: [
          { icon: "shopping-bag", label: "Kyoto's 400-Year Kitchen", color: "text-amber-400" },
          { icon: "utensils", label: "Fresh Strawberries & Daifuku", color: "text-rose-400" },
          { icon: "sparkles", label: "Roasted Chestnuts & Matcha", color: "text-emerald-400" }
        ],
        bullets: [
          { icon: "footprints", iconColor: "text-amber-400", text: "Walk 15 min through Yasaka Shrine and across Shijo Bridge into covered Nishiki Market arcade." },
          { icon: "shopping-bag", iconColor: "text-gold", text: "Browse 100+ stalls offering giant winter strawberries, roasted chestnuts, pickles, and Japanese cookware." }
        ],
        transit: { icon: "footprints", station: "Nishiki Market Arcade", detail: "Enter via Teramachi Street ➔ Walk 400m through market" }
      },
      {
        time: "15:00–15:30",
        title: "Nishiki Market ➔ Kinkaku-ji (Direct Bus #12/#205)",
        mapQuery: "Kinkaku-ji Kyoto",
        category: { label: "Bus Transit", icon: "bus", badgeBg: "bg-indigo-950/80", badgeText: "text-indigo-300", badgeBorder: "border-indigo-800/80" },
        costJpy: 230,
        costMyr: 7,
        costDisplay: "¥230 • ~RM 7",
        highlights: [
          { icon: "bus", label: "Direct Kyoto Bus #12 / #205", color: "text-indigo-400" },
          { icon: "clock", label: "35-min Scenic City Route", color: "text-gold" }
        ],
        bullets: [
          { icon: "bus", iconColor: "text-indigo-400", text: "Board Bus #12 at Shijo-Karasuma direct to Kinkakuji-mae (35 min, ¥230)." },
          { icon: "navigation", iconColor: "text-cyan-400", text: "Alight at Kinkakuji-michi stop; walk 2 min to the Golden Pavilion entrance." }
        ],
        transit: { icon: "bus", station: "Kinkakuji-michi Bus Stop", detail: "Kyoto Bus #12 direct (35 min, ¥230) ➔ Walk 2 min" }
      },
      {
        time: "15:30–17:00",
        title: "Kinkaku-ji (The Golden Pavilion)",
        mapQuery: "Kinkaku-ji Temple Kyoto",
        category: { label: "Sightseeing", icon: "camera", badgeBg: "bg-rose-950/80", badgeText: "text-rose-300", badgeBorder: "border-rose-800/80" },
        costJpy: 500,
        costMyr: 15,
        costDisplay: "¥500 • ~RM 15",
        highlights: [
          { icon: "landmark", label: "Pure Gold Leaf Facade", color: "text-gold" },
          { icon: "sparkles", label: "Mirror Pond Reflection", color: "text-cyan-400" },
          { icon: "trees", label: "Winter Pine Garden Stroll", color: "text-emerald-400" }
        ],
        bullets: [
          { icon: "landmark", iconColor: "text-gold", text: "Gaze at the top two floors gilded entirely in pure gold leaf shimmering over Mirror Pond (entry ¥500)." },
          { icon: "camera", iconColor: "text-rose-400", text: "Follow the garden trail through historic tea gardens and stone pagoda paths in golden afternoon light." }
        ],
        transit: { icon: "landmark", station: "Kinkaku-ji Golden Pavilion", detail: "Entrance path ➔ Mirror Pond vantage point ➔ Garden exit" }
      },
      {
        time: "17:00–18:00",
        title: "Kinkaku-ji ➔ Gion Base (Return Bus #12/#205)",
        mapQuery: "Gion Kyoto",
        category: { label: "Bus Transit", icon: "bus", badgeBg: "bg-indigo-950/80", badgeText: "text-indigo-300", badgeBorder: "border-indigo-800/80" },
        costJpy: 230,
        costMyr: 7,
        costDisplay: "¥230 • ~RM 7",
        highlights: [
          { icon: "bus", label: "Return Bus #12 / #205", color: "text-indigo-400" },
          { icon: "hotel", label: "Drop Bags at Rinn Base", color: "text-purple-400" }
        ],
        bullets: [
          { icon: "bus", iconColor: "text-indigo-400", text: "Board Bus #12 or #205 back to Shijo-Kawaramachi / Gion bus stop (35–40 min, ¥230)." },
          { icon: "footprints", iconColor: "text-amber-400", text: "Walk 5 min back to Rinn Shirakawa South to freshen up before dinner." }
        ],
        transit: { icon: "bus", station: "Shijo-Kawaramachi / Gion Stop", detail: "Bus #12 direct (35 min) ➔ Walk 5 min to hotel" }
      },
      {
        time: "18:30–20:30",
        title: "Dinner: Halal Wagyu Panga or Ayam Ya",
        mapQuery: "Halal Wagyu Yakiniku Panga Gion Kyoto",
        category: { label: "Halal Dining", icon: "utensils", badgeBg: "bg-emerald-950/80", badgeText: "text-emerald-300", badgeBorder: "border-emerald-800/80" },
        costJpy: 2500,
        costMyr: 75,
        costDisplay: "¥2,500 • ~RM 75",
        highlights: [
          { icon: "flame", label: "Halal Wagyu BBQ or Ramen", color: "text-gold" },
          { icon: "luggage", label: "Pack for Overnight Bus Tomorrow", color: "text-purple-400" }
        ],
        bullets: [
          { icon: "utensils", iconColor: "text-emerald-400", text: "Enjoy your favorite Kyoto Halal dinner: Wagyu Yakiniku Panga in Gion or comforting Ayam Ya tori paitan." },
          { icon: "luggage", iconColor: "text-gold", text: "Return to hotel and pack suitcases for the overnight sleeper bus journey to Tokyo tomorrow!" }
        ],
        transit: { icon: "hotel", station: "Rinn Shirakawa South Base", detail: "Walk 5 min back to hotel base" }
      }
    ]
  },

  // DAY 5 (Kyoto → Tokyo)
  {
    day: 5,
    title: "Day 5 Chronological Timeline & Connected Transit",
    stops: "8 Connected Stops",
    activities: [
      {
        time: "11:30–12:00",
        title: "Check out Rinn Shirakawa South ➔ Kyoto Station",
        mapQuery: "Kyoto Station",
        category: { label: "Transit", icon: "bus", badgeBg: "bg-indigo-950/80", badgeText: "text-indigo-300", badgeBorder: "border-indigo-800/80" },
        costJpy: 230,
        costMyr: 7,
        costDisplay: "¥230 • ~RM 7",
        highlights: [
          { icon: "check-circle", label: "Kyoto Checkout (11:30 AM)", color: "text-emerald-400" },
          { icon: "bus", label: "Bus #206 to Kyoto Station", color: "text-indigo-400" },
          { icon: "train", label: "Hachijo Exit Concourse", color: "text-gold" }
        ],
        bullets: [
          { icon: "check-circle-2", iconColor: "text-emerald-400", text: "Check out of Rinn Shirakawa South with all suitcases by 11:30am." },
          { icon: "bus", iconColor: "text-indigo-400", text: "Board Bus #206 at Gion-Shijo (15 min, ¥230) or take a quick 10-min taxi direct to Kyoto Station." }
        ],
        transit: { icon: "bus", station: "Kyoto Station (Hachijo Exit)", detail: "Bus #206 15 min or 10 min taxi" }
      },
      {
        time: "12:00–14:00",
        title: "Kyoto Station Grand Atrium & Ekiben / Lunch",
        mapQuery: "Kyoto Station Building",
        category: { label: "Dining", icon: "utensils", badgeBg: "bg-emerald-950/80", badgeText: "text-emerald-300", badgeBorder: "border-emerald-800/80" },
        costJpy: 1200,
        costMyr: 36,
        costDisplay: "¥1,200 • ~RM 36",
        highlights: [
          { icon: "landmark", label: "15-Story Futuristic Glass Atrium", color: "text-cyan-400" },
          { icon: "utensils", label: "Halal Ekiben & Bento Boxes", color: "text-emerald-400" },
          { icon: "sparkles", label: "Matcha Treats & Souvenirs", color: "text-gold" }
        ],
        bullets: [
          { icon: "landmark", iconColor: "text-cyan-400", text: "Explore the dramatic 15-story cathedral-like Kyoto Station glass atrium and skyway stairs." },
          { icon: "utensils", iconColor: "text-emerald-400", text: "Pick up travel snacks, Halal bento, and famous Kyoto matcha sweets before departure." }
        ],
        transit: { icon: "landmark", station: "Kyoto Station Grand Atrium", detail: "Central concourse & 15F observation stairs" }
      },
      {
        time: "14:00–16:30",
        title: "Kyoto ➔ Tokyo (Overnight Sleeper Bus)",
        mapQuery: "Kyoto Station Hachijo Exit Bus Terminal",
        category: { label: "Sleeper Bus", icon: "bus", badgeBg: "bg-indigo-950/80", badgeText: "text-indigo-300", badgeBorder: "border-indigo-800/80" },
        costJpy: 5500,
        costMyr: 165,
        costDisplay: "¥5,500 • ~RM 165",
        highlights: [
          { icon: "bus", label: "Overnight Highway Sleeper Coach", color: "text-indigo-400" },
          { icon: "moon", label: "Deep Reclining Canopy Seats", color: "text-purple-400" },
          { icon: "map-pin", label: "Direct to Tokyo Yaesu Exit", color: "text-emerald-400" }
        ],
        bullets: [
          { icon: "bus", iconColor: "text-indigo-400", text: "Board premium highway sleeper bus at Kyoto Station Hachijo Exit (Willer Express / JR Dream Coach)." },
          { icon: "moon", iconColor: "text-purple-400", text: "Relax in private canopy pod seats with power ports and blanket as you travel across the Tomei highway." }
        ],
        transit: { icon: "bus", station: "Kyoto Station Hachijo Bus Terminal", detail: "Overnight Sleeper Bus direct to Tokyo Station Yaesu Exit" }
      },
      {
        time: "16:30–17:00",
        title: "Tokyo Station ➔ Hotel Tavinos Asakusa",
        mapQuery: "Hotel Tavinos Asakusa Tokyo",
        category: { label: "Subway Transit", icon: "subway", badgeBg: "bg-sky-950/80", badgeText: "text-sky-300", badgeBorder: "border-sky-800/80" },
        costJpy: 180,
        costMyr: 5,
        costDisplay: "¥180 • ~RM 5",
        highlights: [
          { icon: "subway", label: "Ginza Line to Asakusa", color: "text-sky-400" },
          { icon: "hotel", label: "Arrive 4-Night Tokyo Base", color: "text-purple-400" }
        ],
        bullets: [
          { icon: "subway", iconColor: "text-sky-400", text: "Walk 4 min to Nihombashi Station ➔ Take Tokyo Metro Ginza Line direct to Asakusa (12 min, ¥180)." },
          { icon: "footprints", iconColor: "text-amber-400", text: "Exit 1 or Tsukuba Express Exit A1 ➔ Walk 4 min to Hotel Tavinos Asakusa." }
        ],
        transit: { icon: "subway", station: "Asakusa Station (Ginza Line)", detail: "Ginza Line 6 stops (12 min) ➔ Walk 4 min to Tavinos" }
      },
      {
        time: "17:00–18:30",
        title: "Check in Hotel Tavinos Asakusa & Unpack",
        mapQuery: "Hotel Tavinos Asakusa Tokyo",
        category: { label: "Hotel Logistics", icon: "key", badgeBg: "bg-purple-950/80", badgeText: "text-purple-300", badgeBorder: "border-purple-800/80" },
        costJpy: 0,
        costMyr: 0,
        costDisplay: "Free / Included",
        highlights: [
          { icon: "key", label: "Comic Pop-Art Room Check-in", color: "text-gold" },
          { icon: "bed-double", label: "Unpack for 4 Nights in Tokyo", color: "text-purple-400" },
          { icon: "heart", label: "Solat / Prayer Break", color: "text-emerald-400" }
        ],
        bullets: [
          { icon: "check-circle-2", iconColor: "text-emerald-400", text: "Check into Hotel Tavinos Asakusa; settle into the stylish manga pop-art themed rooms." },
          { icon: "clock", iconColor: "text-gold", text: "Unpack luggage for your 4-night stay, perform prayer, and get ready for dinner." }
        ],
        transit: { icon: "hotel", station: "Hotel Tavinos Asakusa", detail: "4-Night Tokyo Base Check-in" }
      },
      {
        time: "18:30–20:00",
        title: "Dinner: HALAL SAKURA (Asakusa)",
        mapQuery: "HALAL SAKURA Asakusa Tokyo",
        category: { label: "Halal Dining", icon: "utensils", badgeBg: "bg-emerald-950/80", badgeText: "text-emerald-300", badgeBorder: "border-emerald-800/80" },
        costJpy: 2200,
        costMyr: 65,
        costDisplay: "¥2,200 • ~RM 65",
        highlights: [
          { icon: "utensils", label: "Halal Sukiyaki & Hotpot Nabe", color: "text-emerald-400" },
          { icon: "flame", label: "Japanese Beef Curry & Ramen", color: "text-gold" },
          { icon: "shield-check", label: "100% Halal Certified Kitchen", color: "text-cyan-400" }
        ],
        bullets: [
          { icon: "footprints", iconColor: "text-amber-400", text: "Walk north 8 min (600m) along Kototoi-dori straight to HALAL SAKURA." },
          { icon: "utensils", iconColor: "text-emerald-400", text: "Enjoy comforting Japanese sukiyaki nabe, simmered beef sets, and hot ramen bowls." }
        ],
        transit: { icon: "footprints", station: "HALAL SAKURA Asakusa", detail: "Walk 8 min (600m) north along Kototoi-dori" }
      },
      {
        time: "20:00–21:30",
        title: "Senso-ji Temple & Kaminarimon Illumination Walk",
        mapQuery: "Senso-ji Temple Asakusa Tokyo",
        category: { label: "Sightseeing", icon: "camera", badgeBg: "bg-rose-950/80", badgeText: "text-rose-300", badgeBorder: "border-rose-800/80" },
        costJpy: 0,
        costMyr: 0,
        costDisplay: "Free / Included",
        highlights: [
          { icon: "camera", label: "Giant Kaminarimon Red Lantern", color: "text-rose-400" },
          { icon: "landmark", label: "Illuminated 5-Story Pagoda", color: "text-gold" },
          { icon: "sparkles", label: "Crowd-Free Night Temple Walk", color: "text-cyan-400" }
        ],
        bullets: [
          { icon: "landmark", iconColor: "text-gold", text: "Walk 4 min to Senso-ji, Tokyo's oldest temple (founded 628 AD), beautifully illuminated at night." },
          { icon: "camera", iconColor: "text-rose-400", text: "Enjoy peaceful crowd-free photos under the giant Kaminarimon lantern and five-story pagoda." }
        ],
        transit: { icon: "landmark", station: "Senso-ji Temple Grounds", detail: "Walk 4 min south into temple courtyard" }
      },
      {
        time: "21:30–22:00",
        title: "Return to Hotel Tavinos Asakusa",
        mapQuery: "Hotel Tavinos Asakusa Tokyo",
        category: { label: "Hotel Logistics", icon: "hotel", badgeBg: "bg-purple-950/80", badgeText: "text-purple-300", badgeBorder: "border-purple-800/80" },
        costJpy: 0,
        costMyr: 0,
        costDisplay: "Free / Included",
        highlights: [
          { icon: "moon", label: "Early Night Rest", color: "text-purple-400" },
          { icon: "snowflake", label: "Prep for GALA Yuzawa Snow Ski", color: "text-cyan-400" }
        ],
        bullets: [
          { icon: "footprints", iconColor: "text-amber-400", text: "Stroll 5 min north through the quiet courtyard back to Hotel Tavinos." },
          { icon: "snowflake", iconColor: "text-cyan-400", text: "Rest well for early morning Shinkansen to the snow mountains of GALA Yuzawa!" }
        ],
        transit: { icon: "hotel", station: "Hotel Tavinos Asakusa", detail: "Walk 5 min north back to hotel" }
      }
    ]
  },

  // DAY 6 (Tokyo Yuzawa)
  {
    day: 6,
    title: "Day 6 Chronological Timeline & Connected Transit",
    stops: "8 Connected Stops",
    activities: [
      {
        time: "06:15–06:45",
        title: "Hotel Tavinos Asakusa ➔ Tokyo / Ueno Station",
        mapQuery: "Ueno Station Tokyo",
        category: { label: "Subway Transit", icon: "subway", badgeBg: "bg-sky-950/80", badgeText: "text-sky-300", badgeBorder: "border-sky-800/80" },
        costJpy: 180,
        costMyr: 5,
        costDisplay: "¥180 • ~RM 5",
        highlights: [
          { icon: "subway", label: "Ginza Line 3 Stops to Ueno", color: "text-sky-400" },
          { icon: "train", label: "Shinkansen Concourse Gates", color: "text-gold" }
        ],
        bullets: [
          { icon: "subway", iconColor: "text-sky-400", text: "Walk 6 min to Asakusa Station ➔ Take Ginza Line 3 stops direct to Ueno (5 min, ¥180)." },
          { icon: "navigation", iconColor: "text-cyan-400", text: "Walk through underground passage (3 min) to JR Ueno Shinkansen gates (Platform 19/20)." }
        ],
        transit: { icon: "subway", station: "JR Ueno Station Shinkansen Gates", detail: "Ginza Line 5 min ➔ Walk 3 min to Shinkansen gates" }
      },
      {
        time: "07:00–08:30",
        title: "Tokyo / Ueno ➔ GALA Yuzawa (Joetsu Shinkansen)",
        mapQuery: "Gala Yuzawa Station",
        category: { label: "Bullet Train", icon: "train", badgeBg: "bg-sky-950/80", badgeText: "text-sky-300", badgeBorder: "border-sky-800/80" },
        costJpy: 7000,
        costMyr: 205,
        costDisplay: "¥7,000 • ~RM 205",
        highlights: [
          { icon: "train", label: "Joetsu Shinkansen Tanigawa", color: "text-sky-400" },
          { icon: "mountain", label: "22km Daishimizu Mountain Tunnel", color: "text-purple-400" },
          { icon: "snowflake", label: "Train Alights Inside Ski Resort!", color: "text-cyan-400" }
        ],
        bullets: [
          { icon: "train", iconColor: "text-sky-400", text: "Board Joetsu Shinkansen Tanigawa; speed through Tanigawa mountain range (75 min direct)." },
          { icon: "snowflake", iconColor: "text-cyan-400", text: "Train arrives directly inside the GALA Yuzawa ski center terminal!" }
        ],
        transit: { icon: "train", station: "GALA Yuzawa Station", detail: "Joetsu Shinkansen 75 min direct (Covered by JR Tokyo Wide Pass)" }
      },
      {
        time: "08:30–15:30",
        title: "GALA Yuzawa Snow Resort (Gondola, Sledding & Play)",
        mapQuery: "GALA Yuzawa Snow Resort",
        category: { label: "Snow Resort", icon: "snowflake", badgeBg: "bg-cyan-950/80", badgeText: "text-cyan-300", badgeBorder: "border-cyan-800/80" },
        costJpy: 3500,
        costMyr: 105,
        costDisplay: "¥3,500 • ~RM 105",
        highlights: [
          { icon: "cable-car", label: "Diligence Gondola to Mountain Summit", color: "text-cyan-400" },
          { icon: "snowflake", label: "Snow Sledding & Powder Snow Play", color: "text-gold" },
          { icon: "mountain", label: "Niigata Snow Alps Panoramic View", color: "text-rose-400" }
        ],
        bullets: [
          { icon: "cable-car", iconColor: "text-cyan-400", text: "Ride 8-seater Diligence Gondola up to Central Area (800m summit) with rental snow gear." },
          { icon: "snowflake", iconColor: "text-gold", text: "Enjoy sledding slopes, snow play park, observation deck, and warm mountain cafe." }
        ],
        transit: { icon: "cable-car", station: "GALA Mountain Summit", detail: "Direct gondola lift from train station concourse" }
      },
      {
        time: "15:30–16:00",
        title: "Gondola Down to GALA Yuzawa Concourse",
        mapQuery: "Gala Yuzawa Station",
        category: { label: "Resort Transit", icon: "cable-car", badgeBg: "bg-cyan-950/80", badgeText: "text-cyan-300", badgeBorder: "border-cyan-800/80" },
        costJpy: 0,
        costMyr: 0,
        costDisplay: "Free / Included",
        highlights: [
          { icon: "cable-car", label: "Scenic Mountain Descent Gondola", color: "text-cyan-400" },
          { icon: "check-circle", label: "Return Rental Gear & Freshen Up", color: "text-emerald-400" }
        ],
        bullets: [
          { icon: "cable-car", iconColor: "text-cyan-400", text: "Take gondola back down to base terminal; return rental boots and jackets." },
          { icon: "shopping-bag", iconColor: "text-gold", text: "Browse Niigata local rice snacks, sake chocolates, and prepare for Shinkansen." }
        ],
        transit: { icon: "cable-car", station: "GALA Base Terminal", detail: "Return gear at 2F rental counters" }
      },
      {
        time: "16:00–17:30",
        title: "GALA Yuzawa ➔ Tokyo (Return Joetsu Shinkansen)",
        mapQuery: "Ueno Station Tokyo",
        category: { label: "Bullet Train", icon: "train", badgeBg: "bg-sky-950/80", badgeText: "text-sky-300", badgeBorder: "border-sky-800/80" },
        costJpy: 7000,
        costMyr: 205,
        costDisplay: "¥7,000 • ~RM 205",
        highlights: [
          { icon: "train", label: "Return Joetsu Shinkansen", color: "text-sky-400" },
          { icon: "clock", label: "75-min Fast Ride Back to City", color: "text-gold" }
        ],
        bullets: [
          { icon: "train", iconColor: "text-sky-400", text: "Board return Shinkansen Tanigawa direct from GALA Yuzawa Station back to Ueno (75 min)." },
          { icon: "moon", iconColor: "text-purple-400", text: "Relax in spacious reclining seats as you transition from snow alps back to Tokyo." }
        ],
        transit: { icon: "train", station: "JR Ueno / Tokyo Station", detail: "Joetsu Shinkansen 75 min direct" }
      },
      {
        time: "17:30–18:00",
        title: "Ueno Station ➔ Hotel Tavinos Asakusa",
        mapQuery: "Hotel Tavinos Asakusa Tokyo",
        category: { label: "Subway Transit", icon: "subway", badgeBg: "bg-sky-950/80", badgeText: "text-sky-300", badgeBorder: "border-sky-800/80" },
        costJpy: 180,
        costMyr: 5,
        costDisplay: "¥180 • ~RM 5",
        highlights: [
          { icon: "subway", label: "Ginza Line Back to Asakusa", color: "text-sky-400" },
          { icon: "hotel", label: "Freshen Up at Tavinos", color: "text-purple-400" }
        ],
        bullets: [
          { icon: "subway", iconColor: "text-sky-400", text: "Take Ginza Line 3 stops from Ueno to Asakusa (5 min, ¥180) ➔ Walk 4 min to hotel." },
          { icon: "hotel", iconColor: "text-purple-400", text: "Drop snow gear, shower, change, and recharge before dinner." }
        ],
        transit: { icon: "hotel", station: "Hotel Tavinos Asakusa", detail: "Ginza Line 5 min ➔ Walk 4 min to hotel" }
      },
      {
        time: "18:30–20:30",
        title: "Dinner: Gyumon Halal Ramen & Yakiniku Asakusa",
        mapQuery: "Gyumon Asakusa Tokyo",
        category: { label: "Halal Dining", icon: "utensils", badgeBg: "bg-emerald-950/80", badgeText: "text-emerald-300", badgeBorder: "border-emerald-800/80" },
        costJpy: 3000,
        costMyr: 90,
        costDisplay: "¥3,000 • ~RM 90",
        highlights: [
          { icon: "flame", label: "Sizzling Halal Yakiniku Beef", color: "text-gold" },
          { icon: "utensils", label: "Warm Beef Broth Ramen", color: "text-emerald-400" },
          { icon: "shield-check", label: "Certified Halal Wagyu Cuts", color: "text-cyan-400" }
        ],
        bullets: [
          { icon: "footprints", iconColor: "text-amber-400", text: "Walk 6 min into Asakusa culinary quarter to Gyumon." },
          { icon: "utensils", iconColor: "text-emerald-400", text: "Warm up with tender grilled Halal beef cuts and rich hot beef ramen after a snowy day." }
        ],
        transit: { icon: "footprints", station: "Gyumon Asakusa", detail: "Walk 6 min from hotel into central Asakusa" }
      },
      {
        time: "20:30–21:30",
        title: "Return to Hotel Tavinos Asakusa",
        mapQuery: "Hotel Tavinos Asakusa Tokyo",
        category: { label: "Hotel Logistics", icon: "hotel", badgeBg: "bg-purple-950/80", badgeText: "text-purple-300", badgeBorder: "border-purple-800/80" },
        costJpy: 0,
        costMyr: 0,
        costDisplay: "Free / Included",
        highlights: [
          { icon: "moon", label: "Deep Rest & Sleep", color: "text-purple-400" },
          { icon: "mountain", label: "Prep for Mt. Fuji Chureito Day 7", color: "text-gold" }
        ],
        bullets: [
          { icon: "footprints", iconColor: "text-amber-400", text: "Walk 5 min back to Hotel Tavinos Asakusa." },
          { icon: "bed-double", iconColor: "text-purple-400", text: "Recharge for tomorrow's scenic day trip to Mount Fuji & Kawaguchiko!" }
        ],
        transit: { icon: "hotel", station: "Hotel Tavinos Asakusa", detail: "Walk 5 min back to hotel" }
      }
    ]
  },

  // DAY 7 (Tokyo ↔ Mt. Fuji)
  {
    day: 7,
    title: "Day 7 Chronological Timeline & Connected Transit",
    stops: "8 Connected Stops",
    activities: [
      {
        time: "07:30–08:30",
        title: "Hotel Tavinos Asakusa ➔ Busta Shinjuku (Express Bus Terminal)",
        mapQuery: "Busta Shinjuku Expressway Bus Terminal",
        category: { label: "Subway Transit", icon: "subway", badgeBg: "bg-sky-950/80", badgeText: "text-sky-300", badgeBorder: "border-sky-800/80" },
        costJpy: 280,
        costMyr: 8,
        costDisplay: "¥280 • ~RM 8",
        highlights: [
          { icon: "subway", label: "Subway to Shinjuku", color: "text-sky-400" },
          { icon: "bus", label: "Busta Shinjuku 4F Terminal", color: "text-gold" }
        ],
        bullets: [
          { icon: "subway", iconColor: "text-sky-400", text: "Take Asakusa Line 1 stop to Kuramae, transfer to Oedo Line to Shinjuku (22 min, ¥280)." },
          { icon: "navigation", iconColor: "text-cyan-400", text: "Take New South Gate elevator directly up to 4F Busta Shinjuku expressway bus gates." }
        ],
        transit: { icon: "bus", station: "Busta Shinjuku 4F", detail: "Subway 22 min ➔ Elevator to 4F bus terminal" }
      },
      {
        time: "08:30–10:30",
        title: "Shinjuku ➔ Mt. Fuji / Kawaguchiko (Direct Highway Coach)",
        mapQuery: "Kawaguchiko Station",
        category: { label: "Highway Coach", icon: "bus", badgeBg: "bg-indigo-950/80", badgeText: "text-indigo-300", badgeBorder: "border-indigo-800/80" },
        costJpy: 2200,
        costMyr: 65,
        costDisplay: "¥2,200 • ~RM 65",
        highlights: [
          { icon: "bus", label: "Chuo Highway Express Coach", color: "text-indigo-400" },
          { icon: "mountain", label: "Scenic Fuji Foothills Drive", color: "text-purple-400" },
          { icon: "map-pin", label: "Arrive Kawaguchiko Station", color: "text-emerald-400" }
        ],
        bullets: [
          { icon: "bus", iconColor: "text-indigo-400", text: "Board Chuo Highway Express Coach from Busta Shinjuku (depart 08:45, ¥2,200)." },
          { icon: "mountain", iconColor: "text-purple-400", text: "1h 45m scenic mountain drive with reserved seats, USB chargers, and luggage hold." }
        ],
        transit: { icon: "bus", station: "Kawaguchiko Station Terminal", detail: "Direct highway coach 1h 45m (¥2,200)" }
      },
      {
        time: "10:45–12:45",
        title: "Chureito Pagoda (Arakurayama Sengen Park)",
        mapQuery: "Chureito Pagoda Fujiyoshida",
        category: { label: "Sightseeing", icon: "camera", badgeBg: "bg-rose-950/80", badgeText: "text-rose-300", badgeBorder: "border-rose-800/80" },
        costJpy: 310,
        costMyr: 9,
        costDisplay: "¥310 • ~RM 9",
        highlights: [
          { icon: "landmark", label: "Iconic Vermilion 5-Story Pagoda", color: "text-rose-400" },
          { icon: "mountain", label: "Classic Snow-Capped Mt. Fuji View", color: "text-cyan-400" },
          { icon: "footprints", label: "398 Stone Steps Climb", color: "text-gold" }
        ],
        bullets: [
          { icon: "train", iconColor: "text-sky-400", text: "Fujikyu Railway 4 stops to Shimoyoshida (12 min, ¥310) ➔ Walk 8 min through village." },
          { icon: "camera", iconColor: "text-rose-400", text: "Climb 398 steps to Japan's most famous viewpoint: red pagoda framing snow-capped Mt. Fuji!" }
        ],
        transit: { icon: "landmark", station: "Arakurayama Sengen Park", detail: "Train to Shimoyoshida ➔ Walk 8 min ➔ Climb 398 steps" }
      },
      {
        time: "12:45–13:30",
        title: "Shimoyoshida ➔ Lake Kawaguchi (Return Train)",
        mapQuery: "Kawaguchiko Station",
        category: { label: "Train Transit", icon: "train", badgeBg: "bg-sky-950/80", badgeText: "text-sky-300", badgeBorder: "border-sky-800/80" },
        costJpy: 310,
        costMyr: 9,
        costDisplay: "¥310 • ~RM 9",
        highlights: [
          { icon: "train", label: "Fujikyu Retro Local Train", color: "text-sky-400" },
          { icon: "bus", label: "Connect to Red Line Sightseeing Bus", color: "text-gold" }
        ],
        bullets: [
          { icon: "footprints", iconColor: "text-amber-400", text: "Walk 8 min down to Shimoyoshida Station ➔ Board train back to Kawaguchiko Station (12 min, ¥310)." },
          { icon: "bus", iconColor: "text-indigo-400", text: "Head to Platform 1 for the Lake Kawaguchiko Retro Bus." }
        ],
        transit: { icon: "train", station: "Kawaguchiko Station", detail: "Train 12 min (¥310) ➔ Transfer to Red Line bus" }
      },
      {
        time: "13:30–16:00",
        title: "Lake Kawaguchi & Oishi Park (Fuji Reflection Promenade)",
        mapQuery: "Oishi Park Kawaguchiko",
        category: { label: "Sightseeing", icon: "camera", badgeBg: "bg-rose-950/80", badgeText: "text-rose-300", badgeBorder: "border-rose-800/80" },
        costJpy: 500,
        costMyr: 15,
        costDisplay: "¥500 • ~RM 15",
        highlights: [
          { icon: "mountain", label: "Unobstructed Lake Fuji Panorama", color: "text-cyan-400" },
          { icon: "camera", label: "Lakeside Flower Promenade", color: "text-rose-400" },
          { icon: "sparkles", label: "Fuji Soft-Serve & Lavender Gift Shop", color: "text-gold" }
        ],
        bullets: [
          { icon: "bus", iconColor: "text-indigo-400", text: "Board Red Line Retro Bus to terminus stop #20 Oishi Park (25 min, ¥500)." },
          { icon: "camera", iconColor: "text-rose-400", text: "Stroll along the waterfront promenade with grand, crystal-clear views of Mt. Fuji across the lake." }
        ],
        transit: { icon: "bus", station: "Oishi Park (Stop #20)", detail: "Red Line Retro Bus 25 min along north lakeshore" }
      },
      {
        time: "16:30–18:30",
        title: "Kawaguchiko Station ➔ Busta Shinjuku (Return Coach)",
        mapQuery: "Busta Shinjuku Tokyo",
        category: { label: "Highway Coach", icon: "bus", badgeBg: "bg-indigo-950/80", badgeText: "text-indigo-300", badgeBorder: "border-indigo-800/80" },
        costJpy: 2200,
        costMyr: 65,
        costDisplay: "¥2,200 • ~RM 65",
        highlights: [
          { icon: "bus", label: "Return Highway Express Coach", color: "text-indigo-400" },
          { icon: "sunset", label: "Sunset Mountain Highway Journey", color: "text-gold" }
        ],
        bullets: [
          { icon: "bus", iconColor: "text-indigo-400", text: "Bus back to Kawaguchiko Station ➔ Board 16:30 Chuo Highway Express Coach to Shinjuku (1h 45m, ¥2,200)." },
          { icon: "navigation", iconColor: "text-cyan-400", text: "Direct return to 4F Busta Shinjuku terminal right into Tokyo." }
        ],
        transit: { icon: "bus", station: "Busta Shinjuku 4F", detail: "Highway Coach 1h 45m direct (¥2,200)" }
      },
      {
        time: "18:30–20:30",
        title: "Dinner: Halal Wagyu Yakiniku Panga / Sakura",
        mapQuery: "HALAL SAKURA Asakusa Tokyo",
        category: { label: "Halal Dining", icon: "utensils", badgeBg: "bg-emerald-950/80", badgeText: "text-emerald-300", badgeBorder: "border-emerald-800/80" },
        costJpy: 2500,
        costMyr: 75,
        costDisplay: "¥2,500 • ~RM 75",
        highlights: [
          { icon: "flame", label: "Warm Halal Sukiyaki & Yakiniku", color: "text-gold" },
          { icon: "shield-check", label: "100% Halal Verified", color: "text-emerald-400" }
        ],
        bullets: [
          { icon: "subway", iconColor: "text-sky-400", text: "Take JR Yamanote Line from Shinjuku to Kanda ➔ Ginza Line to Asakusa (25 min, ¥350)." },
          { icon: "utensils", iconColor: "text-emerald-400", text: "Enjoy a hearty Halal hotpot or yakiniku dinner after a brisk day in the Fuji winter air." }
        ],
        transit: { icon: "subway", station: "Asakusa Station", detail: "Subway 25 min ➔ Walk to restaurant" }
      },
      {
        time: "20:30–21:30",
        title: "Return to Hotel Tavinos Asakusa",
        mapQuery: "Hotel Tavinos Asakusa Tokyo",
        category: { label: "Hotel Logistics", icon: "hotel", badgeBg: "bg-purple-950/80", badgeText: "text-purple-300", badgeBorder: "border-purple-800/80" },
        costJpy: 0,
        costMyr: 0,
        costDisplay: "Free / Included",
        highlights: [
          { icon: "moon", label: "Rest & Recovery", color: "text-purple-400" },
          { icon: "shopping-bag", label: "Prep for Akihabara & Pop Culture Day 8", color: "text-gold" }
        ],
        bullets: [
          { icon: "footprints", iconColor: "text-amber-400", text: "Walk 5 min back to Hotel Tavinos Asakusa." },
          { icon: "bed-double", iconColor: "text-purple-400", text: "Rest well for Tokyo electronics, anime, thrifting, and Godzilla day tomorrow!" }
        ],
        transit: { icon: "hotel", station: "Hotel Tavinos Asakusa", detail: "Walk 5 min back to hotel" }
      }
    ]
  },

  // DAY 8 (Tokyo)
  {
    day: 8,
    title: "Day 8 Chronological Timeline & Connected Transit",
    stops: "8 Connected Stops",
    activities: [
      {
        time: "09:00–10:00",
        title: "Hotel Tavinos Asakusa ➔ Shinjuku Kabukicho",
        mapQuery: "Kabukicho Shinjuku Tokyo",
        category: { label: "Subway Transit", icon: "subway", badgeBg: "bg-sky-950/80", badgeText: "text-sky-300", badgeBorder: "border-sky-800/80" },
        costJpy: 280,
        costMyr: 8,
        costDisplay: "¥280 • ~RM 8",
        highlights: [
          { icon: "subway", label: "Oedo Line to Shinjuku-Nishiguchi", color: "text-sky-400" },
          { icon: "sparkles", label: "Kabukicho Entertainment Gateway", color: "text-gold" }
        ],
        bullets: [
          { icon: "subway", iconColor: "text-sky-400", text: "Asakusa Line to Kuramae, transfer to Oedo Line to Shinjuku-nishiguchi Station (22 min, ¥280)." },
          { icon: "footprints", iconColor: "text-amber-400", text: "Exit D3; stroll 5 min through Kabukicho arcade directly to Hotel Gracery." }
        ],
        transit: { icon: "subway", station: "Shinjuku-nishiguchi (Exit D3)", detail: "Subway 22 min ➔ Walk 5 min (400m) to Kabukicho" }
      },
      {
        time: "10:00–11:00",
        title: "Hotel Gracery Shinjuku (Godzilla Head Photo Stop)",
        mapQuery: "Godzilla Head Hotel Gracery Shinjuku",
        category: { label: "Sightseeing", icon: "camera", badgeBg: "bg-rose-950/80", badgeText: "text-rose-300", badgeBorder: "border-rose-800/80" },
        costJpy: 0,
        costMyr: 0,
        costDisplay: "Free / Included",
        highlights: [
          { icon: "camera", label: "Life-Sized Godzilla Head Terrace (8F)", color: "text-rose-400" },
          { icon: "flame", label: "Smoke & Roar Sound Effects", color: "text-gold" },
          { icon: "landmark", label: "Shinjuku Skyscraper Backdrop", color: "text-cyan-400" }
        ],
        bullets: [
          { icon: "navigation", iconColor: "text-cyan-400", text: "Take elevator up to 8F outdoor lobby terrace of Hotel Gracery Shinjuku." },
          { icon: "camera", iconColor: "text-rose-400", text: "Stand face-to-face with the iconic giant Godzilla head peering over the skyline." }
        ],
        transit: { icon: "landmark", station: "Hotel Gracery 8F Terrace", detail: "Elevator to 8F hotel lobby & terrace" }
      },
      {
        time: "11:15–11:45",
        title: "Shinjuku ➔ Akihabara (JR Chuo-Sobu Line)",
        mapQuery: "JR Akihabara Station",
        category: { label: "Train Transit", icon: "train", badgeBg: "bg-sky-950/80", badgeText: "text-sky-300", badgeBorder: "border-sky-800/80" },
        costJpy: 180,
        costMyr: 5,
        costDisplay: "¥180 • ~RM 5",
        highlights: [
          { icon: "train", label: "JR Chuo-Sobu Line Direct", color: "text-sky-400" },
          { icon: "zap", label: "Electric Town Gate Exit (Denki-gai)", color: "text-gold" }
        ],
        bullets: [
          { icon: "train", iconColor: "text-sky-400", text: "Board JR Chuo-Sobu Yellow Line at Shinjuku Platform 13/16 direct to Akihabara (14 min, ¥180)." },
          { icon: "navigation", iconColor: "text-cyan-400", text: "Exit via Electric Town Gate (Denki-gai) right into the anime and tech hub plaza." }
        ],
        transit: { icon: "train", station: "JR Akihabara Station", detail: "JR train 14 min direct ➔ Electric Town Exit" }
      },
      {
        time: "12:00–15:00",
        title: "Akihabara Electric Town & Yodobashi-Akiba",
        mapQuery: "Yodobashi-Akiba Akihabara Tokyo",
        category: { label: "Shopping", icon: "shopping-bag", badgeBg: "bg-amber-950/80", badgeText: "text-amber-300", badgeBorder: "border-amber-800/80" },
        costJpy: 0,
        costMyr: 0,
        costDisplay: "Free / Included",
        highlights: [
          { icon: "gamepad-2", label: "Radio Kaikan & Mandarake Towers", color: "text-purple-400" },
          { icon: "cpu", label: "Yodobashi-Akiba (9 Tech Floors)", color: "text-cyan-400" },
          { icon: "sparkles", label: "Duty-Free Electronics & Gachapon", color: "text-gold" }
        ],
        bullets: [
          { icon: "gamepad-2", iconColor: "text-purple-400", text: "Explore multi-level anime figure shops, retro games, and gachapon alleys at Radio Kaikan." },
          { icon: "shopping-bag", iconColor: "text-gold", text: "Browse Yodobashi Camera Multimedia Akiba across 9 massive floors of electronics and gadgets." }
        ],
        transit: { icon: "shopping-bag", station: "Akihabara Electric Town", detail: "Direct outside Electric Town Exit" }
      },
      {
        time: "15:15–16:45",
        title: "Don Quijote Akihabara (Souvenirs & Tax-Free)",
        mapQuery: "Don Quijote Akihabara Tokyo",
        category: { label: "Shopping", icon: "shopping-bag", badgeBg: "bg-amber-950/80", badgeText: "text-amber-300", badgeBorder: "border-amber-800/80" },
        costJpy: 0,
        costMyr: 0,
        costDisplay: "Free / Included",
        highlights: [
          { icon: "shopping-bag", label: "Tax-Free Souvenir Shopping", color: "text-gold" },
          { icon: "sparkles", label: "Matcha KitKats & Japanese Snacks", color: "text-emerald-400" },
          { icon: "badge-percent", label: "Duty-Free Passport Checkout (5F)", color: "text-cyan-400" }
        ],
        bullets: [
          { icon: "footprints", iconColor: "text-amber-400", text: "Walk 4 min north along Chuo-dori avenue into Don Quijote Akihabara." },
          { icon: "shopping-bag", iconColor: "text-gold", text: "5 floors of souvenirs, matcha chocolates, skincare, and novelty gifts with tax-free checkout." }
        ],
        transit: { icon: "shopping-bag", station: "Don Quijote Akihabara", detail: "Walk 4 min (300m) north on Chuo-dori" }
      },
      {
        time: "17:15–19:00",
        title: "Ameyoko Shopping Street & Ueno Park (Thrifting & Bargains)",
        mapQuery: "Ameyoko Shopping District Ueno Tokyo",
        category: { label: "Shopping", icon: "shopping-bag", badgeBg: "bg-amber-950/80", badgeText: "text-amber-300", badgeBorder: "border-amber-800/80" },
        costJpy: 150,
        costMyr: 4,
        costDisplay: "¥150 • ~RM 4",
        highlights: [
          { icon: "shopping-bag", label: "Vintage Streetwear & Sneakers", color: "text-amber-400" },
          { icon: "sparkles", label: "Bustling Open-Air Market Alley", color: "text-gold" },
          { icon: "trees", label: "Ueno Park Evening Walk", color: "text-emerald-400" }
        ],
        bullets: [
          { icon: "footprints", iconColor: "text-amber-400", text: "Stroll 10 min north along railway arches to Okachimachi / Ameyoko (or JR Yamanote 1 stop, ¥150)." },
          { icon: "shopping-bag", iconColor: "text-gold", text: "Bargain-hunt for Japanese jackets, sneaker boutiques, dried fruit, and stroll into Ueno Park." }
        ],
        transit: { icon: "shopping-bag", station: "Ameyoko Street / Okachimachi", detail: "Walk 10 min north along JR railway arches" }
      },
      {
        time: "19:00–20:30",
        title: "Farewell Halal Dinner: HALAL SAKURA",
        mapQuery: "HALAL SAKURA Asakusa Tokyo",
        category: { label: "Halal Dining", icon: "utensils", badgeBg: "bg-emerald-950/80", badgeText: "text-emerald-300", badgeBorder: "border-emerald-800/80" },
        costJpy: 2200,
        costMyr: 65,
        costDisplay: "¥2,200 • ~RM 65",
        highlights: [
          { icon: "utensils", label: "Grand Farewell Japanese Hotpot", color: "text-emerald-400" },
          { icon: "heart", label: "Trip Memories Celebration", color: "text-rose-400" }
        ],
        bullets: [
          { icon: "subway", iconColor: "text-sky-400", text: "Take Ginza Line 3 stops from Ueno to Asakusa (5 min, ¥180) ➔ Walk to HALAL SAKURA." },
          { icon: "utensils", iconColor: "text-emerald-400", text: "Celebrate your final night in Japan with delicious Halal sukiyaki, nabe hotpot, and ramen." }
        ],
        transit: { icon: "footprints", station: "HALAL SAKURA Asakusa", detail: "Ginza Line 5 min ➔ Walk to restaurant" }
      },
      {
        time: "20:30–22:00",
        title: "Return to Hotel Tavinos Asakusa (Pack Luggage)",
        mapQuery: "Hotel Tavinos Asakusa Tokyo",
        category: { label: "Hotel Logistics", icon: "hotel", badgeBg: "bg-purple-950/80", badgeText: "text-purple-300", badgeBorder: "border-purple-800/80" },
        costJpy: 0,
        costMyr: 0,
        costDisplay: "Free / Included",
        highlights: [
          { icon: "luggage", label: "Weigh & Pack Suitcases", color: "text-gold" },
          { icon: "moon", label: "Prepare for Flight Departure Tomorrow", color: "text-purple-400" }
        ],
        bullets: [
          { icon: "footprints", iconColor: "text-amber-400", text: "Walk 5 min back to Hotel Tavinos Asakusa." },
          { icon: "luggage", iconColor: "text-gold", text: "Weigh, organize, and pack all your souvenirs and winter gear for tomorrow's flight home!" }
        ],
        transit: { icon: "hotel", station: "Hotel Tavinos Asakusa", detail: "Walk 5 min back to hotel base" }
      }
    ]
  },

  // DAY 9 (Tokyo → Narita)
  {
    day: 9,
    title: "Day 9 Chronological Timeline & Connected Transit",
    stops: "5 Connected Stops",
    activities: [
      {
        time: "10:00–10:30",
        title: "Check out Hotel Tavinos Asakusa ➔ Keisei Ueno Station",
        mapQuery: "Keisei Ueno Station Tokyo",
        category: { label: "Subway Transit", icon: "subway", badgeBg: "bg-sky-950/80", badgeText: "text-sky-300", badgeBorder: "border-sky-800/80" },
        costJpy: 180,
        costMyr: 5,
        costDisplay: "¥180 • ~RM 5",
        highlights: [
          { icon: "check-circle", label: "Hotel Tavinos Final Checkout (10:00 AM)", color: "text-emerald-400" },
          { icon: "subway", label: "Ginza Line to Ueno Station", color: "text-sky-400" },
          { icon: "train", label: "Keisei Skyliner Concourse", color: "text-gold" }
        ],
        bullets: [
          { icon: "check-circle-2", iconColor: "text-emerald-400", text: "Check out of Hotel Tavinos by 10:00am with all bags." },
          { icon: "subway", iconColor: "text-sky-400", text: "Take Ginza Line 3 stops to Ueno (5 min, ¥180) ➔ 3-min underground walkway to Keisei Ueno Station." }
        ],
        transit: { icon: "train", station: "Keisei Ueno Station", detail: "Ginza Line 5 min ➔ Indoor connection 3 min (180m)" }
      },
      {
        time: "10:45–12:30",
        title: "Early Lunch & Souvenir Browsing near Ueno",
        mapQuery: "Ueno 3153 Tokyo",
        category: { label: "Dining", icon: "utensils", badgeBg: "bg-emerald-950/80", badgeText: "text-emerald-300", badgeBorder: "border-emerald-800/80" },
        costJpy: 1200,
        costMyr: 36,
        costDisplay: "¥1,200 • ~RM 36",
        highlights: [
          { icon: "lock", label: "Station Coin Lockers for Bags", color: "text-purple-400" },
          { icon: "utensils", label: "Relaxed Pre-Flight Lunch", color: "text-emerald-400" },
          { icon: "shopping-bag", label: "Final Tokyo Souvenir Grab", color: "text-gold" }
        ],
        bullets: [
          { icon: "lock", iconColor: "text-purple-400", text: "Store luggage in Keisei Ueno station coin lockers or roll bags along." },
          { icon: "utensils", iconColor: "text-emerald-400", text: "Enjoy coffee, light lunch, and pick up last-minute snacks at Ueno 3153 or Ameyoko entrance." }
        ],
        transit: { icon: "shopping-bag", station: "Keisei Ueno Station Area", detail: "Station lockers & Ueno 3153 dining complex" }
      },
      {
        time: "12:40–13:30",
        title: "Keisei Skyliner Express (Keisei Ueno ➔ Narita Airport)",
        mapQuery: "Narita Airport Terminal 1",
        category: { label: "Express Train", icon: "train", badgeBg: "bg-sky-950/80", badgeText: "text-sky-300", badgeBorder: "border-sky-800/80" },
        costJpy: 2570,
        costMyr: 75,
        costDisplay: "¥2,570 • ~RM 75",
        highlights: [
          { icon: "train", label: "Keisei Skyliner Express (160 km/h)", color: "text-sky-400" },
          { icon: "clock", label: "36-min Non-Stop to Airport", color: "text-gold" },
          { icon: "plane", label: "Arrive Directly at Terminal 1/2", color: "text-emerald-400" }
        ],
        bullets: [
          { icon: "train", iconColor: "text-sky-400", text: "Board Skyliner Express (12:40 departure) at Keisei Ueno Platform 1/2." },
          { icon: "zap", iconColor: "text-gold", text: "Fastest route to Narita: 160 km/h non-stop across Chiba straight to Terminal 1 & 2 (36–41 min, ¥2,570)." }
        ],
        transit: { icon: "train", station: "Narita Airport Station (NRT)", detail: "Keisei Skyliner 36-41 min non-stop (Platform 1/2, ¥2,570)" }
      },
      {
        time: "13:30–15:30",
        title: "Narita International Airport (Check-in & Duty-Free)",
        mapQuery: "Narita International Airport Terminal 1",
        category: { label: "Airport Logistics", icon: "plane", badgeBg: "bg-cyan-950/80", badgeText: "text-cyan-300", badgeBorder: "border-cyan-800/80" },
        costJpy: 0,
        costMyr: 0,
        costDisplay: "Free / Included",
        highlights: [
          { icon: "luggage", label: "Check-in Luggage at Airline Counters", color: "text-gold" },
          { icon: "file-check-2", label: "Automated Immigration & Security", color: "text-emerald-400" },
          { icon: "shopping-bag", label: "Duty-Free: Tokyo Banana & Royce", color: "text-rose-400" }
        ],
        bullets: [
          { icon: "plane", iconColor: "text-cyan-400", text: "Take elevator up to 4F International Departures; drop luggage at airline counters (Batik Air / MAS / AirAsia)." },
          { icon: "shopping-bag", iconColor: "text-gold", text: "Clear automated security gates, then shop duty-free treats: Tokyo Banana, Royce' Chocolate & Shiroi Koibito." }
        ],
        transit: { icon: "plane", station: "Narita Airport Terminal 4F", detail: "Elevator from train station to 4F Departures Concourse" }
      },
      {
        time: "15:30–16:50",
        title: "Boarding & Flight Departure (NRT ➔ KUL)",
        mapQuery: "Narita Airport Departure Gates",
        category: { label: "Flight Departure", icon: "plane-takeoff", badgeBg: "bg-cyan-950/80", badgeText: "text-cyan-300", badgeBorder: "border-cyan-800/80" },
        costJpy: 0,
        costMyr: 0,
        costDisplay: "Free / Included",
        highlights: [
          { icon: "clock", label: "Gate Boarding by 16:15", color: "text-gold" },
          { icon: "plane-takeoff", label: "Flight Takeoff 16:50 to KUL", color: "text-cyan-400" },
          { icon: "heart", label: "Home Sweet Home with Winter Memories", color: "text-rose-400" }
        ],
        bullets: [
          { icon: "clock", iconColor: "text-gold", text: "Arrive at your assigned departure gate by 16:15 for aircraft boarding." },
          { icon: "plane-takeoff", iconColor: "text-cyan-400", text: "Depart Narita at 16:50 bound for Kuala Lumpur (KUL). Touchdown safe and sound!" }
        ],
        transit: { icon: "plane-takeoff", station: "Departure Gate", detail: "Boarding closes 16:25 • Takeoff 16:50" }
      }
    ]
  }
];

// Helper to render an activity card
function renderActivityCard(act, index) {
  const highlightsHtml = act.highlights.map(h => `
        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#05070B] text-slate-100 border border-white/10 font-mono text-xs font-semibold shadow-sm">
          <i data-lucide="${h.icon}" class="w-3.5 h-3.5 ${h.color}"></i>
          <span>${h.label}</span>
        </span>`).join('');

  const bulletsHtml = act.bullets.map(b => `
      <div class="flex items-start gap-2.5">
        <i data-lucide="${b.icon}" class="w-4 h-4 ${b.iconColor} shrink-0 mt-0.5"></i>
        <span>${b.text}</span>
      </div>`).join('');

  const transitHtml = act.transit ? `
    <div class="pt-3 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-300 font-medium">
        <i data-lucide="${act.transit.icon}" class="w-3.5 h-3.5 text-cyan-400"></i>
        <span>${act.transit.station}</span>
      </span>
      <span class="text-slate-500">•</span>
      <span class="text-slate-300 text-[11px]">${act.transit.detail}</span>
    </div>` : '';

  return `      <!-- Timeline Activity Card -->
      <div class="timeline-card p-5 sm:p-6 shadow-card-oled relative group" data-activity-index="${index}">
        
        <!-- Header Row: Time + Category (Left) & Cost (Right) -->
        <div class="flex flex-wrap items-center justify-between gap-2.5 pb-3 border-b border-white/10">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gold/15 text-gold border border-gold/30 font-mono font-bold text-xs sm:text-sm tracking-wide">
              <i data-lucide="clock" class="w-3.5 h-3.5 text-gold"></i>
              <span>${act.time}</span>
            </span>
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${act.category.badgeBg} ${act.category.badgeText} border ${act.category.badgeBorder} font-mono font-semibold text-xs">
              <i data-lucide="${act.category.icon}" class="w-3.5 h-3.5"></i>
              <span>${act.category.label}</span>
            </span>
          </div>

          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-xs font-semibold text-slate-300">
            <i data-lucide="wallet" class="w-3.5 h-3.5 text-gold"></i>
            <span class="text-white font-bold">${act.costDisplay}</span>
          </div>
        </div>

        <!-- Title & Google Maps Button -->
        <div class="flex items-start justify-between gap-3 pt-3.5 pb-2.5">
          <h3 class="text-lg sm:text-xl font-bold text-white tracking-tight font-mincho group-hover:text-gold transition-colors">
            ${act.title}
          </h3>
          <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(act.mapQuery)}" target="_blank" rel="noopener noreferrer" class="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-vermilion/20 text-slate-300 hover:text-vermilion border border-white/10 hover:border-vermilion/40 text-xs font-mono transition-colors" title="Open in Google Maps">
            <i data-lucide="map-pin" class="w-3.5 h-3.5 text-vermilion"></i>
            <span class="hidden sm:inline">Map</span>
            <i data-lucide="external-link" class="w-3 h-3 opacity-60"></i>
          </a>
        </div>

        <!-- HIGHLIGHT ACTIVITY (Prominent Visual Banner) -->
        <div class="my-3 p-3 rounded-xl bg-gradient-to-r from-vermilion/15 via-[#0C121D] to-[#05070B] border border-vermilion/30">
          <div class="flex items-center gap-1.5 text-[10px] font-mono font-bold text-vermilion uppercase tracking-widest mb-2">
            <i data-lucide="sparkles" class="w-3.5 h-3.5 text-vermilion animate-pulse"></i>
            <span>HIGHLIGHT ACTIVITY</span>
          </div>
          <div class="flex flex-wrap gap-2">
${highlightsHtml}
          </div>
        </div>

        <!-- Simplified Action Steps (Concise Bullets with Icons) -->
        <div class="space-y-2 my-3 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
${bulletsHtml}
        </div>

        <!-- Connected Route / Transit Pill -->
${transitHtml}

      </div>`;
}

// Update all 9 HTML files
daysData.forEach(day => {
  const filePath = `day-${day.day}.html`;
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }

  let html = fs.readFileSync(filePath, 'utf8');
  const startMarker = "<!-- Timeline Schedule with BIG HIGHLIGHTED TIME -->";
  const endMarker = "<!-- Prev & Next Bottom Footer -->";

  const startIndex = html.indexOf(startMarker);
  const endIndex = html.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1) {
    console.error(`Markers not found in ${filePath}`);
    return;
  }

  const cardsHtml = day.activities.map((act, i) => renderActivityCard(act, i)).join('\n\n');

  const newSection = `<!-- Timeline Schedule with BIG HIGHLIGHTED TIME -->
    <div class="space-y-4">
      <div class="flex items-center justify-between pb-2 border-b border-white/10">
        <h2 class="font-mincho text-xl sm:text-2xl font-bold text-white">
          ${day.title}
        </h2>
        <span class="text-xs font-mono text-gold font-bold">${day.stops}</span>
      </div>

      <div class="space-y-4">
${cardsHtml}
      </div>
    </div>\n\n    `;

  const updatedHtml = html.substring(0, startIndex) + newSection + html.substring(endIndex);
  fs.writeFileSync(filePath, updatedHtml, 'utf8');
  console.log(`Updated ${filePath} with ${day.activities.length} simplified & activity-highlighted cards.`);
});

console.log("All days successfully processed!");

module.exports = { daysData };

