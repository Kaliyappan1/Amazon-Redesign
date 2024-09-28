import React, { useState, useEffect } from "react";
import Header from "../pages/header";
import FilterOptions from "../components/FilterOptions";
import ProductCard from "../components/ProductCard";
import Toast from "../components/Toast";
import Modal from "../components/Modal"; 
// Mock product data
const allProducts = [
  {
    id: 1,
    name: "TechMaster Laptop",
    category: "Electronics",
    brand: "TechMaster",
    price: 999.99,
    discount: 10,
    rating: 4.5,
    reviews: 120,
    date: "2023-01-01",
    description: "An innovative product that meets your needs.",
    specifications: {
      weight: "1.5 kg",
      dimensions: "15 x 10 x 5 cm",
      material: "Aluminum",
      processor: "Intel Core i7",
      ram: "16 GB",
      storage: "512 GB SSD",
      batteryLife: "Up to 10 hours",
      os: "Windows 11"
    },
    features: [
      "Feature 1: Lightweight design",
      "Feature 2: Fast charging capability",
      "Feature 3: Stylish appearance",
      "Feature 4: High-resolution display",
      "Feature 5: Backlit keyboard"
    ],
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "FitTech Smartwatch",
    category: "Electronics",
    brand: "FitTech",
    price: 199.99,
    discount: 0,
    rating: 2.0,
    reviews: 60,
    date: "2023-05-10",
    description: "Stay connected and healthy with the FitTech Smartwatch. Monitor your fitness levels and receive notifications directly on your wrist.",
    specifications: {
      weight: "0.5 kg",
      dimensions: "4.5 x 4.5 x 1 cm",
      batteryLife: "Up to 5 days",
      waterResistance: "IP68"
    },
    features: [
      "Feature 1: Heart rate monitoring",
      "Feature 2: Sleep tracking",
      "Feature 3: Built-in GPS",
      "Feature 4: Customizable watch faces",
      "Feature 5: Call and message notifications"
    ],
    image: "https://images.unsplash.com/photo-1523475496153-3d6cc0f0bf19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "PowerUp Portable Charger",
    category: "Electronics",
    brand: "PowerUp",
    price: 49.99,
    discount: 5,
    rating: 2.8,
    reviews: 200,
    date: "2023-03-15",
    description: "Never run out of battery with the PowerUp Portable Charger. Compact and powerful, it's the perfect companion for on-the-go charging.",
    specifications: {
      weight: "0.3 kg",
      dimensions: "10 x 5 x 2 cm",
      batteryCapacity: "10000 mAh",
      outputPorts: "2 USB ports"
    },
    features: [
      "Feature 1: Dual USB output",
      "Feature 2: Fast charging technology",
      "Feature 3: LED battery indicator",
      "Feature 4: Compact and lightweight design",
      "Feature 5: Compatible with all USB devices"
    ],
    image: "https://images.unsplash.com/photo-1525858907241-d230b66fb9fa?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "SecureView Home Camera",
    category: "Electronics",
    brand: "SecureView",
    price: 149.99,
    discount: 15,
    rating: 3.2,
    reviews: 90,
    date: "2023-07-20",
    description: "Keep an eye on your home with the SecureView Home Camera. Features night vision and motion detection for enhanced security.",
    specifications: {
      weight: "0.5 kg",
      dimensions: "10 x 10 x 5 cm",
      resolution: "1080p HD",
      connectivity: "Wi-Fi",
      batteryLife: "Up to 30 days on standby"
    },
    features: [
      "Feature 1: Night vision capability",
      "Feature 2: Mobile app integration",
      "Feature 3: Motion detection alerts",
      "Feature 4: Two-way audio",
      "Feature 5: Cloud storage options"
    ],
    image: "https://plus.unsplash.com/premium_photo-1725767834338-810d439c8307?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "DentalTech Electric Toothbrush",
    category: "Personal Care",
    brand: "DentalTech",
    price: 89.99,
    discount: 0,
    rating: 4.6,
    reviews: 45,
    date: "2023-08-12",
    description: "Achieve a brighter smile with the DentalTech Electric Toothbrush. Offers multiple brushing modes and a timer for effective cleaning.",
    specifications: {
      weight: "0.2 kg",
      dimensions: "6 x 3 x 3 cm",
      batteryLife: "Up to 2 weeks on a full charge",
      chargingTime: "4 hours"
    },
    features: [
      "Feature 1: Multiple brushing modes",
      "Feature 2: Built-in timer",
      "Feature 3: Ergonomic handle design",
      "Feature 4: Rechargeable battery",
      "Feature 5: Travel case included"
    ],
    image: "https://images.unsplash.com/photo-1597961509090-45101abfa9cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    category: "Electronics",
    brand: "SoundWave",
    price: 79.99,
    discount: 10,
    rating: 4.4,
    reviews: 85,
    date: "2023-06-05",
    description: "Enjoy wireless freedom with the SoundWave Wireless Earbuds. Features high-quality sound and a comfortable fit for all-day wear.",
    specifications: {
      weight: "0.05 kg",
      dimensions: "2.5 x 2.5 x 2.5 cm",
      batteryLife: "Up to 5 hours per charge",
      chargingCase: "Includes portable charging case"
    },
    features: [
      "Feature 1: Superior sound quality",
      "Feature 2: Touch controls",
      "Feature 3: Sweat and water-resistant",
      "Feature 4: Noise isolation",
      "Feature 5: Built-in microphone"
    ],
    image: "https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "AirPurify Smart Air Purifier",
    category: "Home Appliances",
    brand: "AirPure",
    price: 199.99,
    discount: 20,
    rating: 4.7,
    reviews: 110,
    date: "2023-04-10",
    description: "Breathe cleaner air with the AirPurify Smart Air Purifier. Features multiple filtration levels for optimal air quality.",
    specifications: {
      weight: "2.5 kg",
      dimensions: "25 x 25 x 50 cm",
      noiseLevel: "Quiet operation",
      coverageArea: "Up to 500 sq ft"
    },
    features: [
      "Feature 1: HEPA filtration system",
      "Feature 2: Smart app control",
      "Feature 3: Air quality indicator",
      "Feature 4: Timer function",
      "Feature 5: Energy-efficient design"
    ],
    image: "https://m.media-amazon.com/images/I/71FMo4u6Z0L.jpg",
  },
  {
    id: 8,
    name: "PowerBlender Pro",
    category: "Home Appliances",
    brand: "PowerBlend",
    price: 149.99,
    discount: 15,
    rating: 4.5,
    reviews: 70,
    date: "2023-02-18",
    description: "Make smoothies and soups with the PowerBlender Pro. Powerful motor and multiple speed settings for all your blending needs.",
    specifications: {
      weight: "1.8 kg",
      dimensions: "20 x 20 x 40 cm",
      capacity: "1.5 liters",
      power: "1200 watts"
    },
    features: [
      "Feature 1: Easy-to-clean design",
      "Feature 2: Pulse function for precision blending",
      "Feature 3: Durable glass pitcher",
      "Feature 4: Non-slip base",
      "Feature 5: Recipe book included"
    ],
    image: "https://m.media-amazon.com/images/I/61LgA5Q49FL.jpg",
  },
  {
    id: 9,
    name: "Gourmet Chef Knife",
    category: "Kitchen",
    brand: "Chef's Choice",
    price: 69.99,
    discount: 10,
    rating: 4.9,
    reviews: 150,
    date: "2023-09-05",
    description: "Slice and dice like a pro with the Gourmet Chef Knife. Made from high-quality stainless steel for durability and precision.",
    specifications: {
      weight: "0.3 kg",
      dimensions: "35 x 4 x 2 cm",
      bladeMaterial: "High-carbon stainless steel",
      handleMaterial: "Ergonomic wood"
    },
    features: [
      "Feature 1: Razor-sharp edge",
      "Feature 2: Handcrafted design",
      "Feature 3: Easy to sharpen",
      "Feature 4: Comfortable grip",
      "Feature 5: Comes with a protective sheath"
    ],
    image: "https://roshcookwares.in/cdn/shop/products/1177.1chef1bg.jpg?v=1679033938",
  },
  {
    id: 10,
    name: "Yoga Mat Pro",
    category: "Fitness",
    brand: "FitZone",
    price: 39.99,
    discount: 5,
    rating: 4.3,
    reviews: 75,
    date: "2023-08-30",
    description: "Enhance your yoga practice with the Yoga Mat Pro. Non-slip surface and extra cushioning for comfort during workouts.",
    specifications: {
      weight: "1 kg",
      dimensions: "183 x 61 x 0.6 cm",
      material: "Eco-friendly PVC",
      thickness: "6 mm"
    },
    features: [
      "Feature 1: Non-toxic material",
      "Feature 2: Lightweight and portable",
      "Feature 3: Easy to clean",
      "Feature 4: Ideal for all types of yoga",
      "Feature 5: Includes carrying strap"
    ],
    image: "https://m.media-amazon.com/images/I/61xlsFZiMpL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 11,
    name: "Gaming Mouse Pro",
    category: "Electronics",
    brand: "GameX",
    price: 69.99,
    discount: 5,
    rating: 4.3,
    reviews: 50,
    date: "2023-02-20",
    description: "Elevate your gaming experience with the Gaming Mouse Pro. Designed for precision and comfort, this mouse features customizable RGB lighting and programmable buttons.",
    specifications: {
      weight: "0.15 kg",
      dimensions: "12 x 6 x 4 cm",
      connectivity: "Wired",
      sensorType: "Optical"
    },
    features: [
      "Feature 1: High-precision optical sensor for accurate tracking",
      "Feature 2: Customizable RGB lighting",
      "Feature 3: Ergonomic design for long gaming sessions",
      "Feature 4: Six programmable buttons",
      "Feature 5: Compatible with multiple operating systems"
    ],
    image: "https://images.unsplash.com/photo-1620332326501-584c3d6bf607?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    name: "Mechanical Keyboard RGB",
    category: "Electronics",
    brand: "KeyMaster",
    price: 129.99,
    discount: 15,
    rating: 4.6,
    reviews: 35,
    date: "2023-01-30",
    description: "Experience responsive typing with the Mechanical Keyboard RGB. With customizable backlighting and tactile feedback, it's perfect for gaming and productivity.",
    specifications: {
      weight: "1.0 kg",
      dimensions: "45 x 15 x 4 cm",
      connectivity: "Wired",
      switchType: "Cherry MX Blue"
    },
    features: [
      "Feature 1: Customizable RGB backlighting",
      "Feature 2: Tactile and audible feedback",
      "Feature 3: Anti-ghosting technology",
      "Feature 4: Durable key switches for longevity",
      "Feature 5: Detachable cable for convenience"
    ],
    image: "https://images.unsplash.com/photo-1664813398384-035636e083f9?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    name: "4K Drone Camera",
    category: "Electronics",
    brand: "SkyView",
    price: 799.99,
    discount: 10,
    rating: 4.7,
    reviews: 100,
    date: "2023-08-05",
    description: "Capture stunning aerial footage with the 4K Drone Camera. Equipped with advanced stabilization and intelligent flight modes for the perfect shot.",
    specifications: {
      weight: "1.5 kg",
      dimensions: "30 x 30 x 10 cm",
      batteryLife: "30 minutes",
      resolution: "4K"
    },
    features: [
      "Feature 1: 4K video resolution for high-quality footage",
      "Feature 2: GPS-assisted flight for stability",
      "Feature 3: Intelligent flight modes for easy operation",
      "Feature 4: Adjustable camera angle",
      "Feature 5: Compact design for portability"
    ],
    image: "https://plus.unsplash.com/premium_photo-1714618849685-89cad85746b1?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    name: "Smart Refrigerator 600L",
    category: "Home Appliances",
    brand: "CoolMax",
    price: 1199.99,
    discount: 20,
    rating: 4.5,
    reviews: 60,
    date: "2023-04-25",
    description: "Keep your food fresh with the Smart Refrigerator 600L. With advanced cooling technology and a sleek design, it's perfect for any modern kitchen.",
    specifications: {
      weight: "80 kg",
      dimensions: "180 x 70 x 70 cm",
      energyRating: "A++",
      capacity: "600L"
    },
    features: [
      "Feature 1: Energy-efficient operation",
      "Feature 2: Multiple compartments for organization",
      "Feature 3: Smart temperature control",
      "Feature 4: LED lighting for visibility",
      "Feature 5: Fingerprint-resistant finish"
    ],
    image: "https://images.unsplash.com/photo-1716193696093-9c54b6a290e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    name: "Premium Coffee Maker",
    category: "Home Appliances",
    brand: "BrewMaster",
    price: 149.99,
    discount: 0,
    rating: 2.8,
    reviews: 80,
    date: "2023-06-15",
    description: "Brew your perfect cup of coffee with the Premium Coffee Maker. Featuring programmable settings and a sleek design, it's a must-have for coffee lovers.",
    specifications: {
      weight: "1.2 kg",
      dimensions: "30 x 20 x 30 cm",
      capacity: "12 cups",
      power: "900W"
    },
    features: [
      "Feature 1: Programmable brewing options",
      "Feature 2: Built-in grinder for fresh coffee",
      "Feature 3: Easy-to-read water level indicator",
      "Feature 4: Auto shut-off for safety",
      "Feature 5: Sleek stainless steel design"
    ],
    image: "https://images.unsplash.com/photo-1628195441391-e444b7a0516c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    name: "Luxury Massage Chair",
    category: "Furniture",
    brand: "ComfortZone",
    price: 1299.99,
    discount: 15,
    rating: 3.9,
    reviews: 25,
    date: "2023-05-20",
    description: "Relax in style with the Luxury Massage Chair. Equipped with multiple massage modes and heated seating, it’s perfect for unwinding after a long day.",
    specifications: {
      weight: "50 kg",
      dimensions: "100 x 80 x 120 cm",
      material: "Leather",
      power: "150W"
    },
    features: [
      "Feature 1: Multiple massage settings for personalized comfort",
      "Feature 2: Heated seating for added relaxation",
      "Feature 3: Adjustable recline angle",
      "Feature 4: Durable leather upholstery",
      "Feature 5: Easy to operate with remote control"
    ],
    image: "https://plus.unsplash.com/premium_photo-1683141507095-7a8e587663aa?q=80&w=1874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 17,
    name: "Ergonomic Office Chair",
    category: "Furniture",
    brand: "OfficePro",
    price: 249.99,
    discount: 10,
    rating: 3.5,
    reviews: 40,
    date: "2023-02-05",
    description: "Enhance your workspace with the Ergonomic Office Chair. Designed for comfort and support, it features adjustable height and lumbar support.",
    specifications: {
      weight: "15 kg",
      dimensions: "60 x 60 x 110 cm",
      material: "Mesh",
      weightCapacity: "120 kg"
    },
    features: [
      "Feature 1: Adjustable height for optimal comfort",
      "Feature 2: Breathable mesh back for ventilation",
      "Feature 3: Lumbar support to reduce back strain",
      "Feature 4: Smooth-rolling casters for mobility",
      "Feature 5: Sturdy construction for durability"
    ],
    image: "https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 18,
    name: "Gaming Desktop PC",
    category: "Electronics",
    brand: "GameMaster",
    price: 1499.99,
    discount: 0,
    rating: 4.8,
    reviews: 110,
    date: "2023-03-30",
    description: "Power your gaming with the Gaming Desktop PC. Equipped with high-end components for smooth performance and stunning graphics.",
    specifications: {
      weight: "10 kg",
      dimensions: "45 x 20 x 40 cm",
      cpu: "Intel i7",
      ram: "16 GB",
      storage: "1 TB SSD"
    },
    features: [
      "Feature 1: High-performance Intel i7 processor",
      "Feature 2: 16 GB RAM for multitasking",
      "Feature 3: 1 TB SSD for fast storage",
      "Feature 4: Dedicated graphics card for gaming",
      "Feature 5: RGB lighting for aesthetics"
    ],
    image: "https://images.unsplash.com/photo-1701960804409-ca945c8f1286?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 19,
    name: "High-End DSLR Camera",
    category: "Electronics",
    brand: "CapturePro",
    price: 2499.99,
    discount: 5,
    rating: 5,
    reviews: 80,
    date: "2023-02-25",
    image: "https://images.unsplash.com/photo-1625361060573-cf704b979b18?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Capture stunning photos and videos with the CapturePro High-End DSLR Camera, perfect for both amateurs and professionals.",
    specifications: {
      sensor: "Full-frame 35mm",
      resolution: "24.2 MP",
      ISO: "100-12800",
      video: "4K at 30fps",
      weight: "1.2 kg"
    },
    features: [
      "Interchangeable lenses",
      "Built-in Wi-Fi and Bluetooth",
      "Weather-sealed body",
      "High-speed continuous shooting"
    ]
  },
  {
    id: 20,
    name: "Luxury Electric Fireplace",
    category: "Home Decor",
    brand: "FireGlow",
    price: 999.99,
    discount: 10,
    rating: 4.6,
    reviews: 65,
    date: "2023-07-15",
    image: "https://images.unsplash.com/photo-1586299576722-e14abcdcfcb3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Enhance your home with the FireGlow Luxury Electric Fireplace, offering a realistic flame effect and customizable settings.",
    specifications: {
      dimensions: "40 x 25 x 10 inches",
      heat_output: "1500 watts",
      material: "Tempered glass and steel",
      weight: "50 lbs"
    },
    features: [
      "Remote control operation",
      "Adjustable flame brightness",
      "Energy-efficient heating",
      "Safe for indoor use"
    ]
  },
  {
    id: 21,
    name: "Smart Security System",
    category: "Home Security",
    brand: "SecureHome",
    price: 349.99,
    discount: 20,
    rating: 2.7,
    reviews: 70,
    date: "2023-08-25",
    image: "https://plus.unsplash.com/premium_photo-1681400654156-92eb27e62f0c?q=80&w=1779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Protect your home with the SecureHome Smart Security System, featuring advanced monitoring and alert capabilities.",
    specifications: {
      camera: "1080p HD",
      connectivity: "Wi-Fi",
      app_compatibility: "iOS and Android",
      battery_life: "Up to 6 months"
    },
    features: [
      "Real-time alerts",
      "Two-way audio",
      "Night vision",
      "Cloud storage options"
    ]
  },
  {
    id: 22,
    name: "GamerPro RGB Mouse",
    category: "Electronics",
    brand: "GamerPro",
    price: 59.99,
    discount: 10,
    rating: 4.7,
    reviews: 75,
    date: "2023-06-01",
    image: "https://images.unsplash.com/photo-1616296425622-4560a2ad83de?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Get precise control in gaming with the GamerPro RGB Mouse, featuring customizable DPI settings and dynamic lighting.",
    specifications: {
      DPI: "100 to 16000",
      connection: "Wired",
      weight: "150 grams",
      cable_length: "1.8 meters"
    },
    features: [
      "Customizable RGB lighting",
      "Programmable buttons",
      "Ergonomic design",
      "On-the-fly DPI adjustment"
    ]
  },
  {
    id: 23,
    name: "SoundWave Headphones",
    category: "Electronics",
    brand: "SoundWave",
    price: 129.99,
    discount: 20,
    rating: 4.5,
    reviews: 150,
    date: "2023-02-20",
    image: "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Experience immersive sound with SoundWave Headphones, featuring noise cancellation and comfortable ear cushions.",
    specifications: {
      type: "Over-ear",
      connectivity: "Bluetooth and wired",
      battery_life: "20 hours",
      weight: "300 grams"
    },
    features: [
      "Active noise cancellation",
      "Built-in microphone",
      "Foldable design",
      "Voice assistant compatibility"
    ]
  },
  {
    id: 24,
    name: "HomeChef Air Fryer",
    category: "Home Appliances",
    brand: "HomeChef",
    price: 99.99,
    discount: 5,
    rating: 2.6,
    reviews: 85,
    date: "2023-04-25",
    image: "https://plus.unsplash.com/premium_photo-1672192166833-c8ae84e5e127?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Cook healthy meals with the HomeChef Air Fryer, providing crispy results with less oil.",
    specifications: {
      capacity: "4 quarts",
      temperature_range: "180°F to 400°F",
      power: "1500 watts",
      weight: "10 lbs"
    },
    features: [
      "Digital touchscreen",
      "Multiple cooking presets",
      "Dishwasher-safe parts",
      "Timer function"
    ]
  },
  {
    id: 25,
    name: "SmartHome Hub",
    category: "Electronics",
    brand: "SmartHome",
    price: 89.99,
    discount: 15,
    rating: 4.3,
    reviews: 40,
    date: "2023-03-30",
    image: "https://images.unsplash.com/photo-1616578273461-3a99ce422de6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Control your smart home devices seamlessly with the SmartHome Hub, compatible with various brands and protocols.",
    specifications: {
      connectivity: "Wi-Fi, Zigbee, Z-Wave",
      compatibility: "iOS and Android",
      dimensions: "5 x 5 x 2 inches",
      weight: "1 lb"
    },
    features: [
      "Voice control capability",
      "Easy setup",
      "Remote access",
      "Custom automation routines"
    ]
  },
  {
    id: 26,
    name: "EcoClean Robot Vacuum",
    category: "Home Appliances",
    brand: "EcoClean",
    price: 299.99,
    discount: 10,
    rating: 1.7,
    reviews: 120,
    date: "2023-01-15",
    image: "https://plus.unsplash.com/premium_photo-1723514542304-d87d8f1e3c58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Keep your floors spotless with the EcoClean Robot Vacuum, designed for hassle-free cleaning with smart navigation.",
    specifications: {
      battery_life: "120 minutes",
      suction_power: "2000 Pa",
      dimensions: "12 x 12 x 3 inches",
      weight: "5.5 lbs"
    },
    features: [
      "Automatic charging",
      "App control",
      "Multiple cleaning modes",
      "HEPA filtration"
    ]
  },
  {
    id: 27,
    name: "Gourmet Coffee Maker",
    category: "Home Appliances",
    brand: "Gourmet",
    price: 149.99,
    discount: 15,
    rating: 1.6,
    reviews: 200,
    date: "2023-07-10",
    image:
      "https://images.unsplash.com/photo-1707241358597-bafcc8a8e73d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Brew your favorite coffee effortlessly with this Gourmet Coffee Maker, designed for coffee lovers who appreciate quality and convenience.",
    specifications: {
      brew_capacity: "10 cups",
      dimensions: "12 x 10 x 15 inches",
      weight: "8 lbs",
      color: "Black"
    },
    features: [
      "Programmable settings",
      "Built-in grinder",
      "Automatic shut-off",
      "Dishwasher-safe parts"
    ]
  },
  {
    id: 28,
    name: "FitnessPro Resistance Bands",
    category: "Sports",
    brand: "FitnessPro",
    price: 29.99,
    discount: 5,
    rating: 4.8,
    reviews: 55,
    date: "2023-05-05",
    image:
      "https://plus.unsplash.com/premium_photo-1671028547976-4b1e3300a350?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Achieve your fitness goals with the FitnessPro Resistance Bands, perfect for home workouts and on-the-go training.",
    specifications: {
      resistance_levels: "Light, Medium, Heavy",
      material: "Natural latex",
      length: "12 inches"
    },
    features: [
      "Versatile for multiple exercises",
      "Portable and lightweight",
      "Durable and tear-resistant",
      "Ideal for strength training and stretching"
    ]
  },
  {
    id: 29,
    name: "TravelSmart Backpack",
    category: "Travel",
    brand: "TravelSmart",
    price: 69.99,
    discount: 20,
    rating: 3.4,
    reviews: 40,
    date: "2023-08-02",
    image:
      "https://images.unsplash.com/photo-1536584754829-12214d404f32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The TravelSmart Backpack combines style and functionality, making it the perfect companion for your adventures.",
    specifications: {
      capacity: "25 liters",
      dimensions: "18 x 12 x 6 inches",
      weight: "2 lbs",
      material: "Water-resistant fabric"
    },
    features: [
      "Padded laptop compartment",
      "Multiple pockets for organization",
      "Comfortable shoulder straps",
      "USB charging port"
    ]
  },
  {
    id: 30,
    name: "PetTracker GPS Collar",
    category: "Pet Care",
    brand: "PetTracker",
    price: 79.99,
    discount: 10,
    rating: 4.5,
    reviews: 65,
    date: "2023-07-15",
    image:
      "https://images.unsplash.com/photo-1633230329619-70ae2e6d50bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Keep your pets safe and secure with the PetTracker GPS Collar, ensuring you always know their location.",
    specifications: {
      battery_life: "7 days",
      range: "Up to 5 miles",
      dimensions: "1.5 x 1.5 x 0.75 inches",
      weight: "1.2 oz"
    },
    features: [
      "Real-time location tracking",
      "Geofencing alerts",
      "Durable and waterproof",
      "Easy to use mobile app"
    ]
  },
  {
    id: 31,
    name: "SmartLight LED Bulbs",
    category: "Home Improvement",
    brand: "SmartLight",
    price: 39.99,
    discount: 5,
    rating: 4.7,
    reviews: 100,
    date: "2023-08-20",
    image:
      "https://plus.unsplash.com/premium_photo-1723579326053-e4b827a2d397?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Transform your home lighting with SmartLight LED Bulbs, offering energy efficiency and customizable brightness.",
    specifications: {
      wattage: "10W",
      brightness: "800 lumens",
      lifespan: "25,000 hours",
      color_temperature: "Warm White (2700K)"
    },
    features: [
      "Dimmable",
      "Smart home compatible",
      "Energy-saving",
      "Easy installation"
    ]
  },
  {
    id: 32,
    name: "UltraSkin Facial Cleansing Brush",
    category: "Personal Care",
    brand: "UltraSkin",
    price: 49.99,
    discount: 15,
    rating: 4.6,
    reviews: 30,
    date: "2023-06-10",
    image:
      "https://images.unsplash.com/photo-1650664370914-f026578ec2a4?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Achieve radiant skin with the UltraSkin Facial Cleansing Brush, designed to enhance your skincare routine.",
    specifications: {
      battery_life: "Rechargeable",
      brush_heads: "2 types (sensitive and exfoliating)",
      dimensions: "7 x 2.5 inches",
      weight: "0.5 lbs"
    },
    features: [
      "Waterproof design",
      "Multiple speed settings",
      "Compact and travel-friendly",
      "Gentle on all skin types"
    ]
  },
  {
    id: 33,
    name: "MultiCooker Pro",
    category: "Home Appliances",
    brand: "MultiCooker",
    price: 179.99,
    discount: 10,
    rating: 4.8,
    reviews: 110,
    date: "2023-08-30",
    image:
      "https://www.tefal.com.hk/medias/?context=bWFzdGVyfGltYWdlc3w0NjI5MHxpbWFnZS9qcGVnfGFXMWhaMlZ6TDJneE5pOW9OelV2TVRRMk1EZ3dNREl6TVRnek5qWXVhbkJufGViNTk5Yjg2NTFlNWU2NTg1YjM0YTAxOTE5NmE0ZTcxOWEyNGI5YjBmMTliMDQzODg1ZGU5ZDNlMzAxMTljMDE",
    description: "Cook like a pro with the MultiCooker Pro, offering versatile cooking methods for all your favorite meals.",
    specifications: {
      capacity: "6 quarts",
      cooking_modes: "Pressure, slow, sauté, steam, rice",
      dimensions: "14 x 12 x 12 inches",
      weight: "10 lbs"
    },
    features: [
      "One-touch cooking",
      "Built-in safety features",
      "Easy to clean",
      "Recipe book included"
    ]
  },
  {
    id: 34,
    name: "CozyBlanket Throw Blanket",
    category: "Home & Living",
    brand: "CozyBlanket",
    price: 34.99,
    discount: 20,
    rating: 4.9,
    reviews: 95,
    date: "2023-09-10",
    image:
      "https://images-cdn.ubuy.ae/64561a6d39cef075d13f91b7-bedsure-white-fleece-blanket-throw.jpg",
    description: "Snuggle up in comfort with the CozyBlanket Throw Blanket, perfect for cozy nights in or as a decorative piece.",
    specifications: {
      material: "Fleece",
      dimensions: "50 x 60 inches",
      weight: "2 lbs",
      colors: "Available in multiple colors"
    },
    features: [
      "Soft and warm",
      "Machine washable",
      "Lightweight and portable",
      "Great for home décor"
    ]
  },
  {
    id: 35,
    name: "YogaFlow Mat",
    category: "Sports",
    brand: "YogaFlow",
    price: 49.99,
    discount: 15,
    rating: 4.7,
    reviews: 70,
    date: "2023-09-20",
    image:
      "https://www.dallasgritfitness.com/uploads/1/1/0/6/11066170/screenshot-2023-01-03-at-10-41-09-pm_orig.png",
    description: "Enhance your yoga practice with the YogaFlow Mat, designed for stability and comfort during workouts.",
    specifications: {
      thickness: "6 mm",
      dimensions: "72 x 24 inches",
      weight: "3 lbs",
      material: "Eco-friendly PVC"
    },
    features: [
      "Non-slip surface",
      "Lightweight and portable",
      "Durable and long-lasting",
      "Easy to clean"
    ]
  },
  {
    id: 36,
    name: "UltraSlim Laptop Stand",
    category: "Electronics",
    brand: "UltraSlim",
    price: 39.99,
    discount: 10,
    rating: 4.6,
    reviews: 90,
    date: "2023-09-05",
    image:
      "https://images-cdn.ubuy.co.in/635252ab8441df572e023bf8-native-union-rise-laptop-stand.jpg",
    description: "Optimize your workspace with the UltraSlim Laptop Stand, designed for improved ergonomics and airflow.",
    specifications: {
      material: "Aluminum",
      dimensions: "10 x 9 x 3 inches",
      weight: "1.5 lbs",
      compatibility: "Fits most laptops up to 15 inches"
    },
    features: [
      "Adjustable height for comfort",
      "Compact and portable design",
      "Enhances laptop cooling",
      "Non-slip pads for stability"
    ]
  },
  {
    id: 37,
    name: "AeroBreeze Portable Fan",
    category: "Home Appliances",
    brand: "AeroBreeze",
    price: 29.99,
    discount: 15,
    rating: 4.5,
    reviews: 120,
    date: "2023-08-15",
    image:
      "https://m.media-amazon.com/images/I/71OhLdT8bfL.jpg",
    description: "Stay cool on the go with the AeroBreeze Portable Fan, perfect for any outdoor or indoor setting.",
    specifications: {
      battery: "Rechargeable Lithium-ion",
      dimensions: "6 x 6 x 8 inches",
      weight: "0.8 lbs",
      speed_settings: "3 adjustable speeds"
    },
    features: [
      "Lightweight and portable",
      "Quiet operation",
      "Built-in rechargeable battery",
      "360-degree rotation"
    ]
  },
  {
    id: 38,
    name: "EcoTherm Electric Kettle",
    category: "Home Appliances",
    brand: "EcoTherm",
    price: 49.99,
    discount: 10,
    rating: 4.4,
    reviews: 65,
    date: "2023-07-25",
    image:
      "https://m.media-amazon.com/images/I/717V4glGOsL._AC_UF894,1000_QL80_.jpg",
    description: "Boil water quickly and efficiently with the EcoTherm Electric Kettle, featuring a sleek design and safety features.",
    specifications: {
      capacity: "1.7 liters",
      power: "1500 watts",
      material: "Stainless steel",
      dimensions: "9 x 6 x 10 inches"
    },
    features: [
      "Automatic shut-off",
      "Boil-dry protection",
      "Easy-to-read water level indicator",
      "Cordless design"
    ]
  },
  {
    id: 39,
    name: "VisionPro Smart Glasses",
    category: "Electronics",
    brand: "VisionPro",
    price: 299.99,
    discount: 20,
    rating: 4.8,
    reviews: 55,
    date: "2023-06-05",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVx35zabIXZINp3GOxUr5QvH8hjyQx_TEXQ&s",
    description: "Experience augmented reality with VisionPro Smart Glasses, combining style with cutting-edge technology.",
    specifications: {
      battery_life: "Up to 6 hours",
      connectivity: "Bluetooth 5.0",
      weight: "1.2 lbs",
      lens_type: "Anti-glare"
    },
    features: [
      "Hands-free control",
      "Voice command functionality",
      "Built-in camera for photos and videos",
      "Customizable display settings"
    ]
  },
  {
    id: 40,
    name: "PetComfort Bed",
    category: "Pet Care",
    brand: "PetComfort",
    price: 69.99,
    discount: 10,
    rating: 4.7,
    reviews: 80,
    date: "2023-08-25",
    image:
      "https://obuddy.eu/wp-content/uploads/2023/05/Fenji.png",
    description: "Give your pet the comfort they deserve with the PetComfort Bed, featuring plush cushioning and durable materials.",
    specifications: {
      dimensions: "30 x 20 x 5 inches",
      weight: "3 lbs",
      material: "Memory foam",
      colors: "Available in various colors"
    },
    features: [
      "Removable and washable cover",
      "Non-slip bottom",
      "Water-resistant material",
      "Eco-friendly filling"
    ]
  },
  {
    id: 41,
    name: "TravelSmart Luggage Set",
    category: "Travel",
    brand: "TravelSmart",
    price: 199.99,
    discount: 15,
    rating: 4.5,
    reviews: 65,
    date: "2023-09-01",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_b8AMY-lMII3aUWansVHgnI_L9j-5nNPpQ&s",
    description: "Travel in style with the TravelSmart Luggage Set, designed for durability and ease of use.",
    specifications: {
      material: "Polycarbonate",
      dimensions: "20, 24, 28 inches (H)",
      weight: "8 lbs (total)",
      features: "4-wheel spinner system"
    },
    features: [
      "Built-in TSA-approved locks",
      "Expandable for extra packing space",
      "Multiple compartments for organization",
      "Lightweight design"
    ]
  },
  {
    id: 42,
    name: "SmartYoga Mat",
    category: "Sports",
    brand: "SmartYoga",
    price: 49.99,
    discount: 5,
    rating: 4.6,
    reviews: 90,
    date: "2023-07-20",
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/YogiFi_Gen-2_Mat.png?VersionId=jNHrYbH4XJhjc4LQQwQHV4qGTxvI3m3T&size=690:388",
    description: "Enhance your yoga practice with the SmartYoga Mat, offering stability and comfort during your sessions.",
    specifications: {
      thickness: "8 mm",
      dimensions: "72 x 24 inches",
      weight: "2.5 lbs",
      material: "Eco-friendly TPE"
    },
    features: [
      "Non-slip surface",
      "Lightweight and portable",
      "Durable and long-lasting",
      "Easy to clean"
    ]
  },
  {
    id: 43,
    name: "Culinary Pro Knife Set",
    category: "Home & Kitchen",
    brand: "Culinary Pro",
    price: 89.99,
    discount: 15,
    rating: 4.9,
    reviews: 130,
    date: "2023-09-10",
    image:
      "https://seidoknives.com/cdn/shop/products/SEIDOKnivesSignatureJapaneseMasterChefKnifeSet_8-piececulinaryknifesetmain_750x750.jpg?v=1663304893",
    description: "Elevate your cooking with the Culinary Pro Knife Set, featuring high-quality, precision-forged blades.",
    specifications: {
      number_of_pieces: "8",
      material: "High-carbon stainless steel",
      handle: "Ergonomic, slip-resistant",
      dishwasher_safe: "No"
    },
    features: [
      "Includes chef's knife, paring knife, utility knife, and more",
      "Sturdy wooden block for storage",
      "Lifetime warranty",
      "Professional-grade quality"
    ]
  },
  {
    id: 44,
    name: "Rechargeable Hand Warmer",
    category: "Personal Care",
    brand: "WarmTech",
    price: 39.99,
    discount: 10,
    rating: 4.5,
    reviews: 70,
    date: "2023-09-15",
    image:
      "https://m.media-amazon.com/images/I/61tnH4eDpWL._AC_UF894,1000_QL80_.jpg",
    description: "Keep warm during cold days with the Rechargeable Hand Warmer, perfect for outdoor activities.",
    specifications: {
      battery_life: "Up to 8 hours",
      dimensions: "4 x 3 x 1 inches",
      weight: "0.5 lbs",
      material: "Aluminum alloy"
    },
    features: [
      "Fast heating technology",
      "Can also be used as a power bank",
      "Compact and lightweight design",
      "Multiple heat settings"
    ]
  },
  {
    id: 45,
    name: "Mini Projector",
    category: "Electronics",
    brand: "VisionTech",
    price: 129.99,
    discount: 20,
    rating: 4.6,
    reviews: 80,
    date: "2023-08-05",
    image:
      "https://image.made-in-china.com/202f0j00fsJYaUqchPoK/4K-HD-Optoma-LED-Android-Home-Theater-DLP-Mini-Projector-for-Phone.jpg",
    description: "Transform your space into a home theater with the Mini Projector, offering stunning visuals in a compact size.",
    specifications: {
      resolution: "1080p HD",
      brightness: "3000 lumens",
      weight: "1.2 lbs",
      projection_size: "40-150 inches"
    },
    features: [
      "Built-in Wi-Fi and Bluetooth",
      "Multiple input options (HDMI, USB)",
      "Portable and easy to set up",
      "Supports streaming apps"
    ]
  },
  {
    id: 46,
    name: "Electric Wine Opener",
    category: "Home & Kitchen",
    brand: "WineTech",
    price: 29.99,
    discount: 10,
    rating: 4.4,
    reviews: 150,
    date: "2023-09-20",
    image:
      "https://b2bgiftsshop.com/cdn/shop/products/HUGOBOSSELERCTRICWINEOPERNER.jpg?v=1676262658",
    description: "Effortlessly open your wine bottles with the Electric Wine Opener, designed for convenience and style.",
    specifications: {
      battery: "Rechargeable",
      weight: "0.9 lbs",
      dimensions: "2 x 7 x 2 inches",
      material: "Stainless steel"
    },
    features: [
      "Opens up to 30 bottles on a single charge",
      "Includes foil cutter",
      "Ergonomic design",
      "LED charging indicator"
    ]
  },
  {
    id: 47,
    name: "Smartphone Photography Kit",
    category: "Electronics",
    brand: "PhotoSmart",
    price: 49.99,
    discount: 15,
    rating: 4.8,
    reviews: 60,
    date: "2023-08-28",
    image:
      "https://filpz.com/cdn/shop/articles/Upgrade_Your_Camera_Experience_with_the_Xiaomi_14_Ultra_Photography_Kit.webp?v=1711044649",
    description: "Elevate your mobile photography with the Smartphone Photography Kit, perfect for capturing stunning images.",
    specifications: {
      compatibility: "Universal (fits most smartphones)",
      weight: "1.1 lbs",
      dimensions: "8 x 6 x 2 inches",
      included_accessories: "Tripod, lenses, LED light"
    },
    features: [
      "Versatile tripod with adjustable height",
      "High-quality lenses for different effects",
      "Portable and easy to use",
      "Includes a carrying case"
    ]
  }
];

const ProductList = () => {
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [minRating, setMinRating] = useState(0);
  const [sortOption, setSortOption] = useState("featured");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [toast, setToast] = useState({ message: "", visible: false });
  const [cartCount, setCartCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product

  // Filter products based on search term and other criteria
  useEffect(() => {
    const result = allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "All" || product.category === selectedCategory) &&
        (selectedBrand === "All" || product.brand === selectedBrand) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        product.rating >= minRating
    );

    // Sort products based on selected option
    switch (sortOption) {
      case "priceLowToHigh":
        result.sort((a, b) => a.price - b.price);
        break;
      case "priceHighToLow":
        result.sort((a, b) => b.price - a.price);
        break;
      case "customerReviews":
        result.sort((a, b) => b.reviews - a.reviews);
        break;
      case "newestArrivals":
        result.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  }, [
    searchTerm,
    selectedCategory,
    selectedBrand,
    priceRange,
    minRating,
    sortOption,
  ]);

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (productName) => {
    showToast(`${productName} has been added to your cart.`);
    setCartCount((prevCount) => prevCount + 1);
  };

  const showToast = (message) => {
    setToast({ message, visible: true });
    setTimeout(() => {
      setToast({ message: "", visible: false });
    }, 3000); // Duration for the toast to be visible
  };

  // Function to open the product details modal
  const handleProductClick = (product) => {
    setSelectedProduct(product); // Set the selected product
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProduct(null); // Clear the selected product
  };

  return (
    <div>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cartCount={cartCount}
      />
      <div className="pt-20 flex container mx-auto p-2">
        <div className="w-1/4 h-screen p-4 sticky top-20">
          <FilterOptions
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            sortOption={sortOption}
            setSortOption={setSortOption}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            minRating={minRating}
            setMinRating={setMinRating}
          />
        </div>
        <div className="w-3/4 p-4 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 cursor-pointer lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div onClick={() => handleProductClick(product)} key={product.id}>
                <ProductCard
                  product={product}
                  toggleFavorite={toggleFavorite}
                  addToCart={addToCart}
                  isFavorite={favorites.includes(product.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Show the toast message */}
      {toast.visible && <Toast message={toast.message} />}

      {/* Render the modal if a product is selected */}
      <Modal product={selectedProduct} onClose={closeModal} />
    </div>
  );
};

export default ProductList;