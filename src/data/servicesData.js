export const BUSINESS_INFO = {
  name: "GREEN CARZ CARE",
  tagline: "Premier Car Detailing, Steam Spa, Ceramic Studio & Mechanical Hub",
  address: "RS No. 463/2, Beside Sri Allam Sivaram Krishna House, Opp. Kids E.M. School, Eluru Road, Jangareddygudem - 534447, West Godavari District, Andhra Pradesh",
  shortAddress: "Eluru Road, Opp. Kids E.M. School, Jangareddygudem",
  phones: [
    { number: "+91 880 415 9999", clean: "918804159999", label: "Primary Booking" },
    { number: "+91 880 416 9999", clean: "918804169999", label: "Service Helpdesk" },
    { number: "+91 880 417 9999", clean: "918804179999", label: "Customer Support" },
    { number: "07947419789", clean: "07947419789", label: "Workshop Landline" }
  ],
  whatsappNumber: "918804159999",
  workingHours: "Monday to Sunday: 8:00 AM - 8:30 PM",
  email: "care@greencarzcare.com",
  googleMapsUrl: "https://maps.google.com/?q=Eluru+Road+Jangareddygudem+534447+Andhra+Pradesh",
  teluguMessage: "గత 2 సంవత్సరములుగా మా వ్యాపారాభివృద్ధికి అనేక రకాల సహాయ సహకారములు అందిస్తున్న కస్టమర్లకు, శ్రేయోభిలాషులకు, మిత్రులకు మరిన్ని ఎక్కువ సేవలు అందించే దిశగా మా ప్రయాణం కొనసాగిస్తామని తెలియజేయడానికి సంతోషిస్తున్నాము.",
  teluguTranslation: "Heartfelt gratitude to our cherished customers, well-wishers, and friends who have supported our growth over the past 2 years. We are delighted to announce our continued journey to deliver even higher standards of car care services!"
};

// Exact Package Matrix from User's Flyer
export const VEHICLE_PACKAGES = [
  {
    id: "hatchback",
    title: "HATCH BACK",
    badge: "Most Popular Daily Drivers",
    suitableFor: "Swift, i20, Tiago, Baleno, Polo, Alto, WagonR, etc.",
    icon: "Car",
    normalPrice: 5400,
    offerPrice: 1999,
    savings: 3401,
    services: [
      { name: "Water Wash (Foam + Pressure)", originalPrice: 400 },
      { name: "Intensive Interior Beautification", originalPrice: 2500 },
      { name: "Waxing (Body Buff & Gloss)", originalPrice: 1000 },
      { name: "Car Fumigation (Anti-Bacterial)", originalPrice: 500 },
      { name: "A/C Cleaning & Sanitization", originalPrice: 1000 }
    ],
    bonusCheckups: [
      "Wiper blades inspection & washer fluid top-up",
      "Engine oil level & quality test",
      "Radiator coolant level & health check",
      "Battery voltage & terminal cleaning"
    ]
  },
  {
    id: "sedan",
    title: "SEDAN",
    badge: "Executive & Family Sedans",
    suitableFor: "City, Verna, Dzire, Amaze, Ciaz, Slavia, Virtus, etc.",
    icon: "CarFront",
    normalPrice: 6300,
    offerPrice: 2999,
    savings: 3301,
    services: [
      { name: "Water Wash (Foam + Pressure)", originalPrice: 500 },
      { name: "Intensive Interior Beautification", originalPrice: 2500 },
      { name: "Waxing (Body Buff & Gloss)", originalPrice: 1500 },
      { name: "Car Fumigation (Anti-Bacterial)", originalPrice: 600 },
      { name: "A/C Cleaning & Sanitization", originalPrice: 1200 }
    ],
    bonusCheckups: [
      "Wiper blades inspection & washer fluid top-up",
      "Engine oil level & quality test",
      "Radiator coolant level & health check",
      "Brake pads & brake fluid inspection"
    ]
  },
  {
    id: "suv",
    title: "SUV",
    badge: "Compact & Mid-Size SUVs",
    suitableFor: "Creta, Seltos, Nexon, Brezza, Grand Vitara, Thar, etc.",
    icon: "ShieldAlert",
    normalPrice: 7200,
    offerPrice: 3999,
    savings: 3201,
    popular: true,
    services: [
      { name: "Water Wash (Foam + Pressure)", originalPrice: 600 },
      { name: "Intensive Interior Beautification", originalPrice: 2500 },
      { name: "Waxing (Body Buff & Gloss)", originalPrice: 2000 },
      { name: "Car Fumigation (Anti-Bacterial)", originalPrice: 600 },
      { name: "A/C Cleaning & Sanitization", originalPrice: 1500 }
    ],
    bonusCheckups: [
      "High clearance underbody pressure wash",
      "Wiper blades & washer fluid top-up",
      "Engine oil & transmission fluid check",
      "Suspension bushings & steering linkage check"
    ]
  },
  {
    id: "premium",
    title: "PREMIUM / LUXURY",
    badge: "Full-Size SUVs & Luxury Marques",
    suitableFor: "Fortuner, XUV700, Harrier, Safari, BMW, Mercedes, Audi, etc.",
    icon: "Crown",
    normalPrice: 8200,
    offerPrice: 4999,
    savings: 3201,
    services: [
      { name: "Water Wash (Foam + Pressure)", originalPrice: 600 },
      { name: "Intensive Interior Beautification", originalPrice: 2500 },
      { name: "Waxing (Body Buff & Gloss)", originalPrice: 2500 },
      { name: "Car Fumigation (Anti-Bacterial)", originalPrice: 800 },
      { name: "A/C Cleaning & Sanitization", originalPrice: 1800 }
    ],
    bonusCheckups: [
      "High-pressure underbody & chassis wash",
      "Complete 37-point health check included",
      "Leather upholstery conditioning & UV shield",
      "Wheel hub & caliper deep de-greasing"
    ]
  }
];

// All Services Listed in Flyer Categorized
export const ALL_SERVICES_CATALOG = [
  // Wash & Detailing
  {
    id: "car-wash",
    title: "Car Water Wash & Foam Spa",
    category: "wash-spa",
    categoryName: "Wash & Steam Spa",
    icon: "Sparkles",
    tag: "Everyday Essential",
    shortDesc: "High-pressure underbody rinse, dual-action foam shampooing, tyre dressing, and streak-free microfiber drying.",
    features: ["pH-neutral snow foam shampoo", "High-pressure underbody lance", "Tyre dressing & rim wipe", "Door jambs & boot cleanup"],
    estimatedTime: "45 - 60 mins"
  },
  {
    id: "steam-spa-wrap",
    title: "Care Steam Spa & Car Wrap",
    category: "wash-spa",
    categoryName: "Wash & Steam Spa",
    icon: "Flame",
    tag: "Deep Sanitization",
    shortDesc: "High-temperature steam sterilization of AC ducts, fabric, floor mats, and expert vinyl car wraps & accent styling.",
    features: ["120°C antimicrobial steam", "Odour and fungus eradication", "Custom body wraps & decals", "Zero harsh residue"],
    estimatedTime: "2 - 3 hours"
  },
  {
    id: "interior-cleaning",
    title: "Intensive Interior Beautification",
    category: "wash-spa",
    categoryName: "Wash & Steam Spa",
    icon: "Layers",
    tag: "Showroom Fresh",
    shortDesc: "Roof lining dry clean, dashboard conditioning, deep extraction of seats and carpet, AC vent cleaning and leather enrichment.",
    features: ["Deep foam injection extraction", "Leather nourishment & UV coating", "Ceiling and pillar restoration", "Disinfected steering & consoles"],
    estimatedTime: "2 - 4 hours"
  },
  {
    id: "wax-rubbing-buffing",
    title: "Wax Rubbing & High-Gloss Buffing",
    category: "wash-spa",
    categoryName: "Wash & Steam Spa",
    icon: "Disc",
    tag: "Swirl-Free Shine",
    shortDesc: "Multi-stage compound rubbing and orbital machine buffing to eliminate swirl marks, light scratches, and oxidation.",
    features: ["Dual-action orbital polishers", "Carnauba & synthetic blend wax", "Micro-scratch reduction", "Water beading hydrophobic layer"],
    estimatedTime: "2 - 3 hours"
  },
  {
    id: "car-fumigation",
    title: "Car Anti-Bacterial Fumigation",
    category: "wash-spa",
    categoryName: "Wash & Steam Spa",
    icon: "Wind",
    tag: "Health & Hygiene",
    shortDesc: "Hospital-grade mist fogging that penetrates deep into AC ducts and fabric to eradicate 99.9% of bacteria, allergens and musty smells.",
    features: ["Complete AC duct fogging", "Eliminates pet & smoke smells", "Safe for children & elders", "Long-lasting fresh aroma"],
    estimatedTime: "30 mins"
  },

  // Coatings & Protection
  {
    id: "nano-ceramic-coating",
    title: "Nano Ceramic Coating (9H / 10H)",
    category: "coatings",
    categoryName: "Protective Coatings",
    icon: "ShieldCheck",
    tag: "Ultimate Paint Shield",
    shortDesc: "Industrial-grade silica quartz shield bonding permanently to your clear coat for extreme scratch resistance, mirror gloss, and UV defense.",
    features: ["3 to 5 Year Warranty options", "Extreme hydrophobic water sheeting", "Acid rain & bird dropping immunity", "Deep candy-like gloss"],
    estimatedTime: "1 - 2 Days"
  },
  {
    id: "teflon-coating",
    title: "Teflon Paint Protection Coating",
    category: "coatings",
    categoryName: "Protective Coatings",
    icon: "Shield",
    tag: "Paint Protection",
    shortDesc: "Fluoropolymer synthetic sealant that creates an invisible slick layer preventing road grime, minor scuffs, and sun fade.",
    features: ["Affordable paint sealant", "Prevents paint oxidation", "High slickness & easy washing", "Protects against weathering"],
    estimatedTime: "3 - 5 hours"
  },
  {
    id: "under-body-painting",
    title: "Underbody Anti-Rust Painting & Coating",
    category: "coatings",
    categoryName: "Protective Coatings",
    icon: "Wrench",
    tag: "Monsoon & Coastal Defense",
    shortDesc: "Heavy-duty rubberized bitumen coating applied underneath the car to seal against water splash, stones, salt, and corrosion.",
    features: ["Corrosion & rust inhibitor", "Sound-deadening road noise barrier", "Prevents gravel chipping", "Long-lasting durability"],
    estimatedTime: "2 hours"
  },

  // Tyres, Wheels & Suspension
  {
    id: "wheel-alignment-balancing",
    title: "3D Computerized Wheel Alignment & Balancing",
    category: "tyres-wheels",
    categoryName: "Tyres & Alignment",
    icon: "Crosshair",
    tag: "Laser Precision",
    shortDesc: "High-precision 3D digital camera alignment and dynamic computer wheel balancing to ensure straight driving, zero vibration, and maximum tyre life.",
    features: ["Advanced 3D laser alignment targets", "Dynamic computerized spin balancer", "Camber, Caster & Toe calibration", "Detailed before/after angle printout"],
    estimatedTime: "30 - 45 mins"
  },
  {
    id: "branded-tyres",
    title: "Branded Tyres (Michelin & Yokohama Authorized)",
    category: "tyres-wheels",
    categoryName: "Tyres & Alignment",
    icon: "CircleDot",
    tag: "Authorized Dealer",
    shortDesc: "Official dealership for world-leading tyre brands including Yokohama, Michelin, and more with official manufacturer warranty.",
    features: ["100% Genuine factory stock", "Free installation & valve check", "Manufacturer road hazard warranty", "All hatchback, sedan & SUV sizes"],
    estimatedTime: "30 mins"
  },
  {
    id: "alloy-wheels",
    title: "Alloy Wheels Sales, Fitting & Repair",
    category: "tyres-wheels",
    categoryName: "Tyres & Alignment",
    icon: "Award",
    tag: "Custom Style",
    shortDesc: "Stunning range of diamond-cut, hyper-silver, and matte black alloy wheels designed to upgrade your car's aesthetic and handling.",
    features: ["Premium lightweight alloys", "Bend & wobble checking", "Hub-centric fitment", "Superior braking heat dissipation"],
    estimatedTime: "1 hour"
  },
  {
    id: "nitrogen-air",
    title: "N2 Pure Nitrogen Air Inflation",
    category: "tyres-wheels",
    categoryName: "Tyres & Alignment",
    icon: "Zap",
    tag: "Fuel Efficiency",
    shortDesc: "Pure nitrogen filling keeps tyre pressure steady, runs cooler at highway speeds, prevents rim oxidation, and improves fuel economy.",
    features: ["Maintains stable tyre pressure 3x longer", "Reduces risk of highway blowouts", "Prevents wheel rim rusting", "Free top-ups for 3 months"],
    estimatedTime: "15 mins"
  },
  {
    id: "suspension-checkup",
    title: "Suspension & Steering Overhaul",
    category: "tyres-wheels",
    categoryName: "Tyres & Alignment",
    icon: "Activity",
    tag: "Smooth Ride",
    shortDesc: "Complete diagnosis of shock absorbers, struts, control arm bushes, tie rods, and steering rack to eliminate cabin clunks and body roll.",
    features: ["Hydraulic shock absorber testing", "Steering rack play calibration", "Bushing & ball joint assessment", "Enhanced cornering stability"],
    estimatedTime: "1 - 2 hours"
  },
  {
    id: "wheel-bearings",
    title: "Wheel Bearings Checkup & Replacement",
    category: "tyres-wheels",
    categoryName: "Tyres & Alignment",
    icon: "RotateCw",
    tag: "Safety Check",
    shortDesc: "Diagnosis and replacement of worn or noisy front and rear wheel hub bearings to ensure smooth rolling and prevent hub seizure.",
    features: ["Noise & play vibration test", "High-temperature bearing grease", "OEM spec replacement bearings", "Smooth highway cruising"],
    estimatedTime: "1 hour"
  },

  // AC & Electricals
  {
    id: "ac-top-up-cleaning",
    title: "Car AC Top Up, Gas Refill & Cooling Service",
    category: "electrical-ac",
    categoryName: "AC & Electricals",
    icon: "Snowflake",
    tag: "Chilled Cabin",
    shortDesc: "Comprehensive air conditioning inspection, R134a/R1234yf refrigerant top-up, compressor oil check, and cooling coil cleaning.",
    features: ["Leak test with ultraviolet dye", "Compressor pressure diagnosis", "Cabin pollen filter cleaning/replacement", "Instant ice-cold airflow"],
    estimatedTime: "45 mins"
  },
  {
    id: "branded-batteries",
    title: "Branded Batteries Sales & Testing",
    category: "electrical-ac",
    categoryName: "AC & Electricals",
    icon: "BatteryCharging",
    tag: "Instant Cranking",
    shortDesc: "Digital load testing, specific gravity hydrometer checks, battery water refill, and replacement with top branded maintenance-free batteries.",
    features: ["Digital cranking & CCA analysis", "Alternator charging rate check", "Terminal corrosion de-greasing", "Hassle-free warranty registration"],
    estimatedTime: "20 mins"
  },
  {
    id: "auto-electrical-wiring",
    title: "Auto Electrical & Wiring Diagnostics",
    category: "electrical-ac",
    categoryName: "AC & Electricals",
    icon: "Cpu",
    tag: "High-Tech Diagnostics",
    shortDesc: "Specialized automotive wiring check, fuse box tracing, relay testing, and sensor diagnostics to fix battery drains and power faults.",
    features: ["Short circuit and leakage detection", "Computerized OBD-II scanner integration", "Relay and fuse replacement", "Clean harness loom insulation"],
    estimatedTime: "1 - 2 hours"
  },
  {
    id: "lighting-horns",
    title: "Lights & Horns (Head, Tail, Brake, Indicator)",
    category: "electrical-ac",
    categoryName: "AC & Electricals",
    icon: "Lightbulb",
    tag: "Night Visibility",
    shortDesc: "Testing, aiming, and replacement for headlights, taillights, high-mounted stop lights, indicator bulbs, and dual fanfare horns.",
    features: ["Headlight beam alignment", "LED and halogen bulb upgrades", "Roots/Bosch trumpet horns", "Waterproof socket crimping"],
    estimatedTime: "30 mins"
  },

  // Engine, Fluids & Mechanical
  {
    id: "engine-diagnostics",
    title: "Engine Condition Checkup & Health Report",
    category: "mechanical",
    categoryName: "Engine & Mechanical",
    icon: "Gauge",
    tag: "Engine Performance",
    shortDesc: "Comprehensive engine health check: compression balance, spark plugs/injectors, vacuum leaks, and diagnostic scanner fault readout.",
    features: ["Full OBD2 digital health scan", "Idle RPM & misfire check", "Exhaust emission & smoke test", "Clear diagnostic summary"],
    estimatedTime: "45 mins"
  },
  {
    id: "engine-oil-filters",
    title: "Engine Oil Quality Check & Fluid Flush",
    category: "mechanical",
    categoryName: "Engine & Mechanical",
    icon: "Droplets",
    tag: "Engine Life",
    shortDesc: "Viscosity testing of motor oil, precision drainage, oil filter renewal, and synthetic/semi-synthetic oil refilling to manufacturer specifications.",
    features: ["Premium synthetic lubricants", "OEM spin-on/cartridge filter replacement", "Sump plug washer renewal", "Smooth throttle response"],
    estimatedTime: "30 mins"
  },
  {
    id: "braking-systems",
    title: "Braking Systems & Brake Fluid Overhaul",
    category: "mechanical",
    categoryName: "Engine & Mechanical",
    icon: "AlertOctagon",
    tag: "Critical Safety",
    shortDesc: "Inspection of front brake pads, rear shoes/drums, disc rotor runout, caliper slide lubrication, and DOT 4 brake fluid moisture testing.",
    features: ["Brake pad wear gauge measurement", "Disc rotor thickness & scoring check", "Brake line bleeding & moisture check", "Zero squeal & firm pedal feel"],
    estimatedTime: "45 mins"
  },
  {
    id: "gearbox-clutch",
    title: "Gearbox, Clutch & Transmission Checkup",
    category: "mechanical",
    categoryName: "Engine & Mechanical",
    icon: "Sliders",
    tag: "Effortless Shifting",
    shortDesc: "Manual & automatic transmission fluid inspection, clutch pedal bite point calibration, and drive shaft CV boot inspection.",
    features: ["Transmission oil level & contamination check", "Clutch plate slip assessment", "Gear linkage bushing adjustment", "No grinding or heavy clutch"],
    estimatedTime: "45 mins"
  },
  {
    id: "coolant-radiator",
    title: "Coolant Level & Radiator Quality Service",
    category: "mechanical",
    categoryName: "Engine & Mechanical",
    icon: "Thermometer",
    tag: "Overheat Prevention",
    shortDesc: "Refractometer testing of antifreeze concentration, radiator cap pressure test, hose leak inspection, and cooling system flush.",
    features: ["Protection against engine overheating", "Rust and scale build-up prevention", "Radiator fan high/low speed test", "Pressure cap safety test"],
    estimatedTime: "30 mins"
  },
  {
    id: "timing-chain-belts",
    title: "Timing Chain, Fan Belt & Tensioner Checkup",
    category: "mechanical",
    categoryName: "Engine & Mechanical",
    icon: "Clock",
    tag: "Preventive Care",
    shortDesc: "Inspection of serpentine belts, alternator belts, AC belts, and timing belt/chain tension to prevent sudden breakdown or engine valve collision.",
    features: ["Check for belt cracks & dry rot", "Idler pulley bearing noise check", "Tensioner deflection measurement", "Prevents sudden roadside breakdown"],
    estimatedTime: "40 mins"
  },
  {
    id: "all-filters",
    title: "Air, Oil, Fuel & Cabin AC Filter Replacements",
    category: "mechanical",
    categoryName: "Engine & Mechanical",
    icon: "Filter",
    tag: "Clean Breath",
    shortDesc: "High-flow replacement of engine intake air filter, particulate cabin AC filter, fuel filter, and oil filter for maximum fuel economy.",
    features: ["Restores engine breathing & horsepower", "Cleaner cabin air free from allergens", "Prevents fuel injector clogging", "Instant mileage boost"],
    estimatedTime: "30 mins"
  },
  {
    id: "wiper-blades",
    title: "Wiper Blades, Washers & Glass Care",
    category: "mechanical",
    categoryName: "Engine & Mechanical",
    icon: "Eye",
    tag: "Rain Ready",
    shortDesc: "Inspection of rubber wiper squeegee, washer pump nozzle spray alignment, and concentrated anti-streak windshield washer fluid top-up.",
    features: ["Frameless silicone wiper blades", "Crystal clear monsoon vision", "Washer motor and jet nozzle unclogging", "Prevents glass scratches"],
    estimatedTime: "15 mins"
  }
];

// Interactive 37-Point Health Checkup Items
export const HEALTH_CHECKUP_37_POINTS = [
  { id: 1, name: "Engine Condition & Idle Health", category: "Engine & Powertrain" },
  { id: 2, name: "Engine Oil Level & Viscosity", category: "Fluids & Filters" },
  { id: 3, name: "Radiator Coolant Level & Health", category: "Fluids & Filters" },
  { id: 4, name: "Brake Fluid Level & Moisture", category: "Fluids & Filters" },
  { id: 5, name: "Transmission / Gearbox Oil Level", category: "Fluids & Filters" },
  { id: 6, name: "Windshield Washer Fluid Top-up", category: "Fluids & Filters" },
  { id: 7, name: "Air Filter Condition & Cleanliness", category: "Fluids & Filters" },
  { id: 8, name: "Cabin AC Pollen Filter Check", category: "Fluids & Filters" },
  { id: 9, name: "Fuel Filter & Line Integrity", category: "Fluids & Filters" },
  { id: 10, name: "Battery Voltage & Terminal Corrosion", category: "Electrical & AC" },
  { id: 11, name: "Battery Water Specific Gravity", category: "Electrical & AC" },
  { id: 12, name: "Alternator Charging Output Rate", category: "Electrical & AC" },
  { id: 13, name: "Starter Motor Cranking Load", category: "Electrical & AC" },
  { id: 14, name: "AC Compressor Operation & Gas Level", category: "Electrical & AC" },
  { id: 15, name: "Cabin Blower & Vent Temperature", category: "Electrical & AC" },
  { id: 16, name: "Headlights High & Low Beam Alignment", category: "Lighting & Safety" },
  { id: 17, name: "Tail Lights & Number Plate Lamp", category: "Lighting & Safety" },
  { id: 18, name: "Brake Lights & High-Mount Stop Light", category: "Lighting & Safety" },
  { id: 19, name: "Front & Rear Indicator Lights", category: "Lighting & Safety" },
  { id: 20, name: "Fog Lamps & Reverse Light", category: "Lighting & Safety" },
  { id: 21, name: "Horn Tone & Decibel Output", category: "Lighting & Safety" },
  { id: 22, name: "Front Brake Pads Thickness", category: "Brakes & Tyres" },
  { id: 23, name: "Rear Brake Shoes / Disc Rotors", category: "Brakes & Tyres" },
  { id: 24, name: "Handbrake Cable Tension & Hold", category: "Brakes & Tyres" },
  { id: 25, name: "Tyre Tread Depth & Wear Pattern", category: "Brakes & Tyres" },
  { id: 26, name: "Tyre Pressure & Valve Integrity", category: "Brakes & Tyres" },
  { id: 27, name: "Spare Tyre Condition & Inflation", category: "Brakes & Tyres" },
  { id: 28, name: "Alloy Rim Bends or Cracks Check", category: "Brakes & Tyres" },
  { id: 29, name: "Wheel Alignment & Camber Assessment", category: "Underbody & Suspension" },
  { id: 30, name: "Wheel Bearings Play & Noise Check", category: "Underbody & Suspension" },
  { id: 31, name: "Front & Rear Shock Absorber Leaks", category: "Underbody & Suspension" },
  { id: 32, name: "Suspension Bushings & Ball Joints", category: "Underbody & Suspension" },
  { id: 33, name: "Steering Rack & Tie Rod Ends Play", category: "Underbody & Suspension" },
  { id: 34, name: "Drive Shaft & CV Joint Rubber Boots", category: "Underbody & Suspension" },
  { id: 35, name: "Exhaust Pipe & Muffler Mounting", category: "Underbody & Suspension" },
  { id: 36, name: "Timing Chain / Drive Belts Tension", category: "Engine & Powertrain" },
  { id: 37, name: "Wiper Blades Rubber & Sweep Quality", category: "Lighting & Safety" }
];

// Brand Partners
export const BRAND_PARTNERS = [
  {
    name: "YOKOHAMA",
    tagline: "Japanese Precision High-Traction Tyres",
    description: "Official authorized dealer for all passenger car & SUV radial tyres.",
    logoText: "YOKOHAMA",
    speciality: "Geolandar & BluEarth Series"
  },
  {
    name: "MICHELIN",
    tagline: "World Leader in Safety & Mileage",
    description: "Authorized Michelin dealer delivering supreme comfort, wet grip and endurance.",
    logoText: "MICHELIN",
    speciality: "Primacy & Pilot Sport Series"
  },
  {
    name: "ig coatings",
    tagline: "Industrial Grade Ceramic Protection",
    description: "Certified application studio for 9H nano quartz glass & paint shield systems.",
    logoText: "IG COATINGS",
    speciality: "Graphene & Quartz Ceramic"
  }
];

// Customer Testimonials
export const TESTIMONIALS = [
  {
    name: "K. Satyanarayana Raju",
    location: "Jangareddygudem",
    vehicle: "Hyundai Creta SX (O)",
    rating: 5,
    review: "Got the SUV full detailing package and ceramic coating done at Green Carz Care. The mirror finish on black paint is unbelievable! The interior steam spa removed all bad smells and dust. Best car care center in West Godavari district.",
    date: "2 weeks ago"
  },
  {
    name: "Dr. M. Vamsi Krishna",
    location: "Eluru Road, Jangareddygudem",
    vehicle: "Honda City V",
    rating: 5,
    review: "The 3D wheel alignment and Michelin tyre replacement was completed with laser precision. Driving at 100 km/h is butter smooth now with zero steering vibration. Super clean customer waiting lounge and very polite technicians.",
    date: "1 month ago"
  },
  {
    name: "B. Srinivas Rao",
    location: "Koyyalagudem / JRG",
    vehicle: "Maruti Swift ZXi+",
    rating: 5,
    review: "Availing the Hatchback offer package at ₹1,999 is complete value for money! Normal washing outside costs ₹500 alone, but here they included interior beautification, waxing, AC fumigation and 37-point health checkup.",
    date: "3 weeks ago"
  }
];

// Frequently Asked Questions
export const FAQS = [
  {
    q: "Where is Green Carz Care located in Jangareddygudem?",
    a: "We are located on Eluru Road, RS No. 463/2, Beside Sri Allam Sivaram Krishna House, Opposite Kids E.M. School, Jangareddygudem - 534447, West Godavari District, Andhra Pradesh. We are easily accessible from main Eluru Road."
  },
  {
    q: "What is included in the Special Anniversary Package?",
    a: "Our special package includes 5 major detailing services: High-Pressure Foam Water Wash, Intensive Interior Beautification, High-Gloss Waxing, Anti-Bacterial Car Fumigation, and AC Cleaning & Sanitization, PLUS free general checkups for wiper blades, engine oil level, and coolant!"
  },
  {
    q: "Do I need to take an appointment in advance?",
    a: "Yes, to serve each vehicle with undivided attention and avoid wait times, we recommend prior appointments. You can book directly via WhatsApp or call our hotlines: +91 880 415 9999 / 880 416 9999."
  },
  {
    q: "Are Yokohama and Michelin tyres genuine and under warranty?",
    a: "Yes! We are an authorized dealership providing 100% genuine tyres directly sourced from manufacturers with official road hazard and manufacturing warranty registrations."
  },
  {
    q: "How long does a Nano Ceramic Coating take and what is the durability?",
    a: "A 9H/10H Nano Ceramic Coating takes 1 to 2 days because of meticulous multi-stage paint correction, compound rubbing, surface prep, and infrared curing. Durability ranges from 3 to 5 years with hydrophobic water sheeting and UV protection."
  },
  {
    q: "What are your workshop working hours?",
    a: "We are open 7 days a week, Monday through Sunday, from 8:00 AM to 8:30 PM."
  }
];
