export const roomsData = [
    {
        id: 1,
        title: "Modern Tokyo City Apartment",
        location: "Shinjuku, Tokyo",
        type: "Apartment",

        price: 8500,
        rating: 4.9,
        reviewsCount: 128,

        guests: 4,
        bedrooms: 2,
        beds: 2,
        bathrooms: 1,

        description:
            "A stylish modern apartment in the heart of Tokyo, perfect for couples, families, and business travelers. Enjoy comfortable interiors, excellent city access, and everything you need for a relaxing stay.",

        images: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        ],

        amenities: [
            "WiFi",
            "Kitchen",
            "Air Conditioning",
            "TV",
            "Workspace",
            "Washing Machine",
            "Heating",
            "Parking",
        ],

        houseRules: [
            "Check-in after 3:00 PM",
            "Check-out before 11:00 AM",
            "No smoking",
            "No parties or events",
            "Pets allowed",
        ],

        cancellationPolicy:
            "Free cancellation up to 48 hours before check-in.",

        locationDetails: {
            station: "Shinjuku Station — 5 min walk",
            convenienceStore: "7-Eleven — 2 min walk",
            attraction: "Shinjuku Gyoen — 10 min walk",
        },

        reviews: [
            {
                id: 1,
                user: "Sarah Johnson",
                avatar:
                    "https://i.pravatar.cc/150?img=32",
                rating: 5,
                date: "August 2026",
                comment:
                    "Beautiful apartment in a great location. Everything was clean, comfortable, and exactly as described.",
            },
            {
                id: 2,
                user: "Daniel Kim",
                avatar:
                    "https://i.pravatar.cc/150?img=12",
                rating: 4.8,
                date: "July 2026",
                comment:
                    "Excellent stay with easy access to transportation and restaurants. The host was very helpful.",
            },
            {
                id: 3,
                user: "Ashraful Islam",
                avatar:
                    "https://i.pravatar.cc/150?img=12",
                rating: 4.9,
                date: "July 2027",
                comment:
                    "Hello, I am Ashraful Islam. Its for test.",
            },
        ],
    },

    {
        id: 2,
        title: "Premium Tokyo City Suite",
        location: "Shibuya, Tokyo",
        type: "Suite",

        price: 10500,
        rating: 4.8,
        reviewsCount: 96,

        guests: 3,
        bedrooms: 1,
        beds: 2,
        bathrooms: 1,

        description:
            "Enjoy a premium city suite in the heart of Shibuya with elegant interiors, modern facilities, and beautiful Tokyo city views. A perfect choice for couples and business travelers.",

        images: [
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
        ],

        amenities: [
            "WiFi",
            "Kitchen",
            "TV",
            "Air Conditioning",
            "Workspace",
            "Elevator",
            "Heating",
        ],

        houseRules: [
            "Check-in after 3:00 PM",
            "Check-out before 11:00 AM",
            "No smoking",
            "No parties or events",
        ],

        cancellationPolicy:
            "Free cancellation up to 48 hours before check-in.",

        locationDetails: {
            station: "Shibuya Station — 4 min walk",
            convenienceStore: "FamilyMart — 2 min walk",
            attraction: "Shibuya Crossing — 6 min walk",
        },

        reviews: [
            {
                id: 1,
                user: "Michael Brown",
                avatar:
                    "https://i.pravatar.cc/150?img=14",
                rating: 5,
                date: "August 2026",
                comment:
                    "Amazing location and a beautiful suite. The room was modern and very comfortable.",
            },
            {
                id: 2,
                user: "Emma Wilson",
                avatar:
                    "https://i.pravatar.cc/150?img=44",
                rating: 4.7,
                date: "June 2026",
                comment:
                    "Very convenient location with everything nearby. Great experience overall.",
            },
        ],
    },

    {
        id: 3,
        title: "Traditional Kyoto Residence",
        location: "Gion, Kyoto",
        type: "House",

        price: 9200,
        rating: 4.9,
        reviewsCount: 114,

        guests: 5,
        bedrooms: 2,
        beds: 3,
        bathrooms: 2,

        description:
            "Experience the charm of traditional Kyoto in this peaceful residence near the historic streets of Gion. The property combines Japanese-inspired details with modern comfort.",

        images: [
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
        ],

        amenities: [
            "WiFi",
            "Kitchen",
            "Parking",
            "Air Conditioning",
            "Traditional Bath",
            "TV",
            "Heating",
        ],

        houseRules: [
            "Check-in after 3:00 PM",
            "Check-out before 11:00 AM",
            "No smoking",
            "No parties",
            "Respect quiet hours",
        ],

        cancellationPolicy:
            "Free cancellation up to 5 days before check-in.",

        locationDetails: {
            station: "Gion-Shijo Station — 7 min walk",
            convenienceStore: "Lawson — 3 min walk",
            attraction: "Yasaka Shrine — 5 min walk",
        },

        reviews: [
            {
                id: 1,
                user: "Olivia Smith",
                avatar:
                    "https://i.pravatar.cc/150?img=5",
                rating: 5,
                date: "August 2026",
                comment:
                    "A wonderful traditional Kyoto experience. The location was peaceful and beautiful.",
            },
            {
                id: 2,
                user: "James Anderson",
                avatar:
                    "https://i.pravatar.cc/150?img=13",
                rating: 4.8,
                date: "July 2026",
                comment:
                    "Beautiful home and excellent hospitality. Highly recommended for families.",
            },
        ],
    },

    {
        id: 4,
        title: "Minimal Kyoto Studio",
        location: "Higashiyama, Kyoto",
        type: "Studio",

        price: 6800,
        rating: 4.7,
        reviewsCount: 78,

        guests: 2,
        bedrooms: 1,
        beds: 1,
        bathrooms: 1,

        description:
            "A minimalist and peaceful studio designed for couples and solo travelers. Enjoy a quiet neighborhood while staying close to Kyoto's famous attractions.",

        images: [
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
        ],

        amenities: [
            "WiFi",
            "Air Conditioning",
            "TV",
            "Kitchen",
            "Heating",
            "Workspace",
        ],

        houseRules: [
            "Check-in after 3:00 PM",
            "Check-out before 11:00 AM",
            "No smoking",
            "No parties",
        ],

        cancellationPolicy:
            "Free cancellation up to 48 hours before check-in.",

        locationDetails: {
            station: "Higashiyama Station — 6 min walk",
            convenienceStore: "FamilyMart — 3 min walk",
            attraction: "Kiyomizu-dera — 12 min walk",
        },

        reviews: [
            {
                id: 1,
                user: "Sophia Lee",
                avatar:
                    "https://i.pravatar.cc/150?img=49",
                rating: 5,
                date: "August 2026",
                comment:
                    "Small but very comfortable studio. Perfect for a short Kyoto trip.",
            },
            {
                id: 2,
                user: "Noah Martin",
                avatar:
                    "https://i.pravatar.cc/150?img=60",
                rating: 4.5,
                date: "July 2026",
                comment:
                    "Clean, quiet and convenient. The neighborhood was lovely.",
            },
        ],
    },

    {
        id: 5,
        title: "Luxury Osaka Apartment",
        location: "Namba, Osaka",
        type: "Apartment",

        price: 7800,
        rating: 4.8,
        reviewsCount: 103,

        guests: 4,
        bedrooms: 2,
        beds: 2,
        bathrooms: 1,

        description:
            "A comfortable luxury apartment close to Osaka's most popular shopping, dining, and entertainment areas. Ideal for families and small groups.",

        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        ],

        amenities: [
            "WiFi",
            "Parking",
            "Air Conditioning",
            "Kitchen",
            "TV",
            "Washing Machine",
            "Elevator",
        ],

        houseRules: [
            "Check-in after 3:00 PM",
            "Check-out before 11:00 AM",
            "No smoking",
            "No parties",
        ],

        cancellationPolicy:
            "Free cancellation up to 48 hours before check-in.",

        locationDetails: {
            station: "Namba Station — 5 min walk",
            convenienceStore: "7-Eleven — 2 min walk",
            attraction: "Dotonbori — 8 min walk",
        },

        reviews: [
            {
                id: 1,
                user: "Ethan Davis",
                avatar:
                    "https://i.pravatar.cc/150?img=8",
                rating: 5,
                date: "August 2026",
                comment:
                    "Great apartment with an excellent location. Everything we needed was nearby.",
            },
            {
                id: 2,
                user: "Mia Taylor",
                avatar:
                    "https://i.pravatar.cc/150?img=45",
                rating: 4.7,
                date: "July 2026",
                comment:
                    "Very comfortable stay and the apartment was exactly as shown in the photos.",
            },
        ],
    },

    {
        id: 6,
        title: "Cozy Osaka Urban Retreat",
        location: "Umeda, Osaka",
        type: "Apartment",

        price: 6200,
        rating: 4.6,
        reviewsCount: 67,

        guests: 2,
        bedrooms: 1,
        beds: 1,
        bathrooms: 1,

        description:
            "A cozy urban stay with modern facilities and convenient access to central Osaka. Perfect for solo travelers and couples.",

        images: [
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
        ],

        amenities: [
            "WiFi",
            "Kitchen",
            "TV",
            "Air Conditioning",
            "Heating",
            "Workspace",
        ],

        houseRules: [
            "Check-in after 3:00 PM",
            "Check-out before 11:00 AM",
            "No smoking",
            "No parties",
        ],

        cancellationPolicy:
            "Free cancellation up to 48 hours before check-in.",

        locationDetails: {
            station: "Umeda Station — 6 min walk",
            convenienceStore: "Lawson — 2 min walk",
            attraction: "Umeda Sky Building — 10 min walk",
        },

        reviews: [
            {
                id: 1,
                user: "Lucas Wilson",
                avatar:
                    "https://i.pravatar.cc/150?img=69",
                rating: 5,
                date: "August 2026",
                comment:
                    "A cozy and convenient place for a short stay in Osaka.",
            },
            {
                id: 2,
                user: "Grace Miller",
                avatar:
                    "https://i.pravatar.cc/150?img=25",
                rating: 4.4,
                date: "June 2026",
                comment:
                    "Clean room and very convenient transportation nearby.",
            },
        ],
    },

    {
        id: 7,
        title: "Grand Family Villa",
        location: "Kita, Sapporo",
        type: "Villa",

        price: 12500,
        rating: 5.0,
        reviewsCount: 91,

        guests: 8,
        bedrooms: 4,
        beds: 5,
        bathrooms: 2,

        description:
            "A spacious luxury villa perfect for families visiting beautiful Sapporo. Enjoy generous living spaces, modern amenities, and a relaxing residential environment.",

        images: [
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        ],

        amenities: [
            "WiFi",
            "Parking",
            "Kitchen",
            "Air Conditioning",
            "TV",
            "Washing Machine",
            "Heating",
            "Garden",
        ],

        houseRules: [
            "Check-in after 3:00 PM",
            "Check-out before 11:00 AM",
            "No smoking",
            "No parties",
            "Quiet hours after 10:00 PM",
        ],

        cancellationPolicy:
            "Free cancellation up to 5 days before check-in.",

        locationDetails: {
            station: "Kita Station — 8 min walk",
            convenienceStore: "7-Eleven — 3 min walk",
            attraction: "Odori Park — 12 min walk",
        },

        reviews: [
            {
                id: 1,
                user: "William Clark",
                avatar:
                    "https://i.pravatar.cc/150?img=57",
                rating: 5,
                date: "August 2026",
                comment:
                    "Perfect villa for our family trip. Plenty of space and everything was well maintained.",
            },
            {
                id: 2,
                user: "Emily White",
                avatar:
                    "https://i.pravatar.cc/150?img=20",
                rating: 5,
                date: "July 2026",
                comment:
                    "Beautiful property with excellent facilities. We had a wonderful stay.",
            },
        ],
    },

    {
        id: 8,
        title: "Contemporary Sapporo Home",
        location: "Chuo, Sapporo",
        type: "House",

        price: 8900,
        rating: 4.8,
        reviewsCount: 84,

        guests: 5,
        bedrooms: 2,
        beds: 3,
        bathrooms: 1,

        description:
            "A contemporary home with clean interiors and easy access to Sapporo attractions. A comfortable choice for families and small groups.",

        images: [
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        ],

        amenities: [
            "WiFi",
            "Air Conditioning",
            "Kitchen",
            "TV",
            "Parking",
            "Heating",
        ],

        houseRules: [
            "Check-in after 3:00 PM",
            "Check-out before 11:00 AM",
            "No smoking",
            "No parties",
        ],

        cancellationPolicy:
            "Free cancellation up to 48 hours before check-in.",

        locationDetails: {
            station: "Sapporo Station — 7 min walk",
            convenienceStore: "FamilyMart — 2 min walk",
            attraction: "Sapporo Clock Tower — 10 min walk",
        },

        reviews: [
            {
                id: 1,
                user: "Henry Walker",
                avatar:
                    "https://i.pravatar.cc/150?img=3",
                rating: 5,
                date: "August 2026",
                comment:
                    "Very clean and comfortable home. Great choice for families.",
            },
            {
                id: 2,
                user: "Ava Moore",
                avatar:
                    "https://i.pravatar.cc/150?img=16",
                rating: 4.6,
                date: "July 2026",
                comment:
                    "Nice modern interior and easy access to the city.",
            },
        ],
    },

    {
        id: 9,
        title: "Fukuoka Modern Apartment",
        location: "Hakata, Fukuoka",
        type: "Apartment",

        price: 5900,
        rating: 4.7,
        reviewsCount: 72,

        guests: 3,
        bedrooms: 1,
        beds: 2,
        bathrooms: 1,

        description:
            "A modern apartment in Hakata offering comfortable interiors, essential facilities, and convenient access to public transportation.",

        images: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
        ],

        amenities: [
            "WiFi",
            "Kitchen",
            "Air Conditioning",
            "TV",
            "Workspace",
            "Washing Machine",
        ],

        houseRules: [
            "Check-in after 3:00 PM",
            "Check-out before 11:00 AM",
            "No smoking",
            "No parties",
        ],

        cancellationPolicy:
            "Free cancellation up to 48 hours before check-in.",

        locationDetails: {
            station: "Hakata Station — 5 min walk",
            convenienceStore: "7-Eleven — 2 min walk",
            attraction: "Canal City Hakata — 9 min walk",
        },

        reviews: [
            {
                id: 1,
                user: "Liam Harris",
                avatar:
                    "https://i.pravatar.cc/150?img=10",
                rating: 5,
                date: "August 2026",
                comment:
                    "Very convenient apartment with easy access to transportation.",
            },
            {
                id: 2,
                user: "Ella Thompson",
                avatar:
                    "https://i.pravatar.cc/150?img=38",
                rating: 4.5,
                date: "July 2026",
                comment:
                    "Clean, modern and comfortable for our trip.",
            },
        ],
    },

    {
        id: 10,
        title: "Elegant Fukuoka Suite",
        location: "Tenjin, Fukuoka",
        type: "Suite",

        price: 7200,
        rating: 4.9,
        reviewsCount: 88,

        guests: 4,
        bedrooms: 2,
        beds: 2,
        bathrooms: 1,

        description:
            "An elegant suite located near Fukuoka's shopping, restaurants, and entertainment. Designed for travelers who value comfort and modern style.",

        images: [
            "https://images.unsplash.com/photo-1600566753051-8c9c7b5e7c6b?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        ],

        amenities: [
            "WiFi",
            "TV",
            "Kitchen",
            "Air Conditioning",
            "Workspace",
            "Elevator",
            "Heating",
        ],

        houseRules: [
            "Check-in after 3:00 PM",
            "Check-out before 11:00 AM",
            "No smoking",
            "No parties",
        ],

        cancellationPolicy:
            "Free cancellation up to 48 hours before check-in.",

        locationDetails: {
            station: "Tenjin Station — 4 min walk",
            convenienceStore: "FamilyMart — 2 min walk",
            attraction: "Tenjin Underground Mall — 5 min walk",
        },

        reviews: [
            {
                id: 1,
                user: "Charlotte King",
                avatar:
                    "https://i.pravatar.cc/150?img=33",
                rating: 5,
                date: "August 2026",
                comment:
                    "Beautiful suite in a fantastic location. Highly recommended.",
            },
            {
                id: 2,
                user: "Benjamin Scott",
                avatar:
                    "https://i.pravatar.cc/150?img=70",
                rating: 4.8,
                date: "July 2026",
                comment:
                    "Very stylish and comfortable. Great place for a city trip.",
            },
        ],
    },

    {
        id: 11,
        title: "Yokohama Bay View Apartment",
        location: "Minato Mirai, Yokohama",
        type: "Apartment",

        price: 9800,
        rating: 4.9,
        reviewsCount: 119,

        guests: 4,
        bedrooms: 2,
        beds: 2,
        bathrooms: 1,

        description:
            "A premium apartment featuring beautiful bay views, modern interiors, and excellent access to Yokohama's waterfront attractions.",

        images: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        ],

        amenities: [
            "WiFi",
            "Parking",
            "Air Conditioning",
            "Kitchen",
            "TV",
            "Balcony",
            "Elevator",
        ],

        houseRules: [
            "Check-in after 3:00 PM",
            "Check-out before 11:00 AM",
            "No smoking",
            "No parties",
        ],

        cancellationPolicy: "Free cancellation up to 48 hours before check-in.",

        locationDetails: {
            station: "Minato Mirai Station — 5 min walk",
            convenienceStore: "7-Eleven — 3 min walk",
            attraction: "Yokohama Landmark Tower — 8 min walk",
        },

        reviews: [
            {
                id: 1,
                user: "Daniel Taylor",
                avatar:
                    "https://i.pravatar.cc/150?img=71",
                rating: 5,
                date: "August 2026",
                comment:
                    "The bay view was incredible. Beautiful apartment and excellent location.",
            },
            {
                id: 2,
                user: "Isabella Adams",
                avatar:
                    "https://i.pravatar.cc/150?img=41",
                rating: 4.8,
                date: "July 2026",
                comment:
                    "Very comfortable apartment with an amazing view.",
            },
        ],
    },

    {
        id: 12,
        title: "Peaceful Yokohama Studio",
        location: "Naka, Yokohama",
        type: "Studio",

        price: 5600,
        rating: 4.6,
        reviewsCount: 59,

        guests: 2,
        bedrooms: 1,
        beds: 1,
        bathrooms: 1,

        description:
            "A peaceful compact studio for travelers looking for an affordable and comfortable city stay near Yokohama's attractions.",

        images: [
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
        ],

        amenities: [
            "WiFi",
            "TV",
            "Air Conditioning",
            "Kitchen",
            "Heating",
            "Workspace",
        ],

        houseRules: [
            "Check-in after 3:00 PM",
            "Check-out before 11:00 AM",
            "No smoking",
            "No parties",
        ],

        cancellationPolicy:
            "Free cancellation up to 48 hours before check-in.",

        locationDetails: {
            station: "Kannai Station — 7 min walk",
            convenienceStore: "Lawson — 2 min walk",
            attraction: "Yokohama Chinatown — 12 min walk",
        },

        reviews: [
            {
                id: 1,
                user: "Jack Wilson",
                avatar:
                    "https://i.pravatar.cc/150?img=56",
                rating: 5,
                date: "August 2026",
                comment:
                    "Simple, clean and comfortable. Great value for the price.",
            },
            {
                id: 2,
                user: "Chloe Evans",
                avatar:
                    "https://i.pravatar.cc/150?img=37",
                rating: 4.4,
                date: "June 2026",
                comment:
                    "Nice little studio in a convenient location.",
            },
        ],
    },

    {
        id: 13,
        title: "Nagoya Executive Residence",
        location: "Naka Ward, Nagoya",
        type: "House",

        price: 7600,
        rating: 4.8,
        reviewsCount: 76,

        guests: 5,
        bedrooms: 3,
        beds: 3,
        bathrooms: 2,

        description:
            "A spacious executive residence featuring modern interiors, comfortable living spaces, and excellent access to central Nagoya.",

        images: [
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
        ],

        amenities: [
            "WiFi",
            "Kitchen",
            "Parking",
            "Air Conditioning",
            "TV",
            "Workspace",
            "Washing Machine",
        ],

        houseRules: [
            "Check-in after 3:00 PM",
            "Check-out before 11:00 AM",
            "No smoking",
            "No parties",
        ],

        cancellationPolicy:
            "Free cancellation up to 48 hours before check-in.",

        locationDetails: {
            station: "Sakae Station — 5 min walk",
            convenienceStore: "7-Eleven — 2 min walk",
            attraction: "Nagoya TV Tower — 8 min walk",
        },

        reviews: [
            {
                id: 1,
                user: "Matthew Young",
                avatar:
                    "https://i.pravatar.cc/150?img=17",
                rating: 5,
                date: "August 2026",
                comment:
                    "Spacious and very comfortable residence. Perfect for our group.",
            },
            {
                id: 2,
                user: "Amelia Hall",
                avatar:
                    "https://i.pravatar.cc/150?img=42",
                rating: 4.6,
                date: "July 2026",
                comment:
                    "Great facilities and a very comfortable stay.",
            },
        ],
    },

    {
        id: 14,
        title: "Modern Nagoya City Suite",
        location: "Sakae, Nagoya",
        type: "Suite",

        price: 6800,
        rating: 4.7,
        reviewsCount: 63,

        guests: 3,
        bedrooms: 1,
        beds: 2,
        bathrooms: 1,

        description:
            "A modern suite located in a vibrant part of Nagoya with excellent facilities, restaurants, shopping, and entertainment nearby.",

        images: [
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
        ],

        amenities: [
            "WiFi",
            "TV",
            "Kitchen",
            "Air Conditioning",
            "Elevator",
            "Workspace",
        ],

        houseRules: [
            "Check-in after 3:00 PM",
            "Check-out before 11:00 AM",
            "No smoking",
            "No parties",
        ],

        cancellationPolicy:
            "Free cancellation up to 48 hours before check-in.",

        locationDetails: {
            station: "Sakae Station — 4 min walk",
            convenienceStore: "FamilyMart — 2 min walk",
            attraction: "Oasis 21 — 6 min walk",
        },
        reviews: [
            {
                id: 1,
                user: "Henry Lewis",
                avatar:
                    "https://i.pravatar.cc/150?img=4",
                rating: 5,
                date: "August 2026",
                comment:
                    "Excellent location and very stylish interior.",
            },
            {
                id: 2,
                user: "Lily Robinson",
                avatar:
                    "https://i.pravatar.cc/150?img=35",
                rating: 4.5,
                date: "July 2026",
                comment:
                    "Comfortable suite and very convenient for exploring Nagoya.",
            },
        ],
    },

    {
        id: 15,
        title: "Luxury Hakone Retreat",
        location: "Hakone, Kanagawa",
        type: "Villa",

        price: 14500,
        rating: 5.0,
        reviewsCount: 137,

        guests: 6,
        bedrooms: 3,
        beds: 4,
        bathrooms: 2,

        description:
            "A luxurious private retreat surrounded by peaceful natural scenery in Hakone. Designed for guests seeking privacy, comfort, and a relaxing getaway.",

        images: [
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        ],

        amenities: [
            "WiFi",
            "Parking",
            "Kitchen",
            "Private Garden",
            "Air Conditioning",
            "TV",
            "Heating",
            "Hot Tub",
        ],

        houseRules: [
            "Check-in after 3:00 PM",
            "Check-out before 11:00 AM",
            "No smoking",
            "No parties",
            "Quiet hours after 10:00 PM",
        ],

        cancellationPolicy:
            "Free cancellation up to 7 days before check-in.",

        locationDetails: {
            station: "Gora Station — 8 min walk",
            convenienceStore: "Lawson — 5 min walk",
            attraction: "Hakone Open-Air Museum — 12 min walk",
        },

        reviews: [
            {
                id: 1,
                user: "Robert Walker",
                avatar:
                    "https://i.pravatar.cc/150?img=6",
                rating: 5,
                date: "August 2026",
                comment:
                    "Absolutely beautiful retreat. The surroundings were peaceful and the villa was stunning.",
            },
            {
                id: 2,
                user: "Sophie Carter",
                avatar:
                    "https://i.pravatar.cc/150?img=47",
                rating: 5,
                date: "July 2026",
                comment:
                    "One of the best stays we have ever had. Everything was perfect.",
            },
        ],
    },

    {
        id: 16,
        title: "Traditional Hakone House",
        location: "Gora, Hakone",
        type: "House",

        price: 11200,
        rating: 4.9,
        reviewsCount: 101,

        guests: 6,
        bedrooms: 3,
        beds: 4,
        bathrooms: 2,

        description:
            "A beautiful traditional-inspired home offering a relaxing Japanese countryside experience with comfortable rooms and peaceful surroundings.",

        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
        ],

        amenities: [
            "WiFi",
            "Kitchen",
            "Parking",
            "Heating",
            "Traditional Bath",
            "Garden",
            "TV",
        ],

        houseRules: [
            "Check-in after 3:00 PM",
            "Check-out before 11:00 AM",
            "No smoking",
            "No parties",
            "Respect quiet hours",
        ],

        cancellationPolicy:
            "Free cancellation up to 5 days before check-in.",

        locationDetails: {
            station: "Gora Station — 6 min walk",
            convenienceStore: "FamilyMart — 4 min walk",
            attraction: "Gora Park — 7 min walk",
        },

        reviews: [
            {
                id: 1,
                user: "George Turner",
                avatar:
                    "https://i.pravatar.cc/150?img=7",
                rating: 5,
                date: "August 2026",
                comment:
                    "A wonderful traditional Japanese experience. Very peaceful and relaxing.",
            },
            {
                id: 2,
                user: "Emma Harris",
                avatar:
                    "https://i.pravatar.cc/150?img=31",
                rating: 4.8,
                date: "July 2026",
                comment:
                    "Beautiful home and very friendly host. Would definitely return.",
            },
        ],
    },

    {
        id: 17,
        title: "Premium Nara Guest Apartment",
        location: "Nara Park, Nara",
        type: "Apartment",

        price: 6400,
        rating: 4.8,
        reviewsCount: 69,

        guests: 4,
        bedrooms: 2,
        beds: 2,
        bathrooms: 1,

        description:
            "A comfortable apartment near Nara's famous historical attractions and peaceful parks. A great choice for couples and families exploring Nara.",

        images: [
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
        ],

        amenities: [
            "WiFi",
            "Air Conditioning",
            "Kitchen",
            "TV",
            "Heating",
            "Workspace",
        ],

        houseRules: [
            "Check-in after 3:00 PM",
            "Check-out before 11:00 AM",
            "No smoking",
            "No parties",
        ],

        cancellationPolicy:
            "Free cancellation up to 48 hours before check-in.",

        locationDetails: {
            station: "Kintetsu Nara Station — 8 min walk",
            convenienceStore: "7-Eleven — 3 min walk",
            attraction: "Nara Park — 5 min walk",
        },

        reviews: [
            {
                id: 1,
                user: "Lucas Brown",
                avatar:
                    "https://i.pravatar.cc/150?img=18",
                rating: 5,
                date: "August 2026",
                comment:
                    "Great apartment near the park. Very convenient for sightseeing.",
            },
            {
                id: 2,
                user: "Amelia Wilson",
                avatar:
                    "https://i.pravatar.cc/150?img=27",
                rating: 4.6,
                date: "July 2026",
                comment:
                    "Comfortable apartment and a very nice neighborhood.",
            },
        ],
    },

    {
        id: 18,
        title: "Elegant Kobe Harbor Suite",
        location: "Harborland, Kobe",
        type: "Suite",

        price: 8300,
        rating: 4.9,
        reviewsCount: 97,

        guests: 3,
        bedrooms: 1,
        beds: 2,
        bathrooms: 1,

        description:
            "An elegant suite near Kobe Harbor featuring modern interiors, relaxing city views, and convenient access to restaurants and attractions.",

        images: [
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        ],

        amenities: [
            "WiFi",
            "TV",
            "Air Conditioning",
            "Kitchen",
            "Balcony",
            "Elevator",
            "Workspace",
        ],

        houseRules: [
            "Check-in after 3:00 PM",
            "Check-out before 11:00 AM",
            "No smoking",
            "No parties",
        ],

        cancellationPolicy:
            "Free cancellation up to 48 hours before check-in.",

        locationDetails: {
            station: "Harborland Station — 5 min walk",
            convenienceStore: "Lawson — 2 min walk",
            attraction: "Kobe Harborland — 4 min walk",
        },

        reviews: [
            {
                id: 1,
                user: "Oliver Smith",
                avatar:
                    "https://i.pravatar.cc/150?img=21",
                rating: 5,
                date: "August 2026",
                comment:
                    "Beautiful suite with a great harbor location. Very comfortable.",
            },
            {
                id: 2,
                user: "Ella Brown",
                avatar:
                    "https://i.pravatar.cc/150?img=34",
                rating: 4.8,
                date: "July 2026",
                comment:
                    "Stylish interior and very convenient location.",
            },
        ],
    },

    {
        id: 19,
        title: "Quiet Hiroshima Urban Home",
        location: "Naka Ward, Hiroshima",
        type: "House",

        price: 6100,
        rating: 4.7,
        reviewsCount: 58,

        guests: 5,
        bedrooms: 2,
        beds: 3,
        bathrooms: 1,

        description:
            "A comfortable urban home located near Hiroshima's major attractions and transport links, offering a peaceful base for exploring the city.",

        images: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
        ],

        amenities: [
            "WiFi",
            "Kitchen",
            "Parking",
            "Air Conditioning",
            "TV",
            "Heating",
            "Washing Machine",
        ],

        houseRules: [
            "Check-in after 3:00 PM",
            "Check-out before 11:00 AM",
            "No smoking",
            "No parties",
        ],

        cancellationPolicy:
            "Free cancellation up to 48 hours before check-in.",

        locationDetails: {
            station: "Hiroshima Station — 8 min walk",
            convenienceStore: "7-Eleven — 3 min walk",
            attraction: "Peace Memorial Park — 12 min walk",
        },

        reviews: [
            {
                id: 1,
                user: "James Miller",
                avatar:
                    "https://i.pravatar.cc/150?img=62",
                rating: 5,
                date: "August 2026",
                comment:
                    "Quiet and comfortable home with good transportation nearby.",
            },
            {
                id: 2,
                user: "Sophia Davis",
                avatar:
                    "https://i.pravatar.cc/150?img=46",
                rating: 4.5,
                date: "July 2026",
                comment:
                    "Good value and a comfortable place to stay.",
            },
        ],
    },

    {
        id: 20,
        title: "Luxury Okinawa Beach Villa",
        location: "Naha, Okinawa",
        type: "Villa",

        price: 13800,
        rating: 5.0,
        reviewsCount: 142,

        guests: 7,
        bedrooms: 4,
        beds: 5,
        bathrooms: 2,

        description:
            "A beautiful luxury villa perfect for families seeking a relaxing Okinawa getaway. Enjoy spacious interiors, modern facilities, and easy access to the beach and local attractions.",

        images: [
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        ],

        amenities: [
            "WiFi",
            "Parking",
            "Kitchen",
            "Air Conditioning",
            "TV",
            "Private Garden",
            "Balcony",
            "Washing Machine",
            "Beach Access",
        ],

        houseRules: [
            "Check-in after 3:00 PM",
            "Check-out before 11:00 AM",
            "No smoking",
            "No parties",
            "Quiet hours after 10:00 PM",
        ],

        cancellationPolicy:
            "Free cancellation up to 7 days before check-in.",

        locationDetails: {
            station: "Naha Bus Terminal — 7 min walk",
            convenienceStore: "FamilyMart — 2 min walk",
            attraction: "Kokusai Street — 6 min walk",
        },

        reviews: [
            {
                id: 1,
                user: "Daniel Johnson",
                avatar:
                    "https://i.pravatar.cc/150?img=72",
                rating: 5,
                date: "August 2026",
                comment:
                    "Amazing villa for a family vacation. Beautiful, spacious and very comfortable.",
            },
            {
                id: 2,
                user: "Sophie Williams",
                avatar:
                    "https://i.pravatar.cc/150?img=28",
                rating: 5,
                date: "July 2026",
                comment:
                    "Absolutely loved our stay. The villa was beautiful and the location was perfect.",
            },
        ],
    },
];