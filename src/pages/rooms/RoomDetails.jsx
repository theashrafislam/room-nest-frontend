import React from "react";
import { Link, useParams } from "react-router";
import { FiArrowLeft } from "react-icons/fi";

// import roomsData from "../../data/roomsData";

import RoomGallery from "../../components/roomDetails/RoomGallery";
import RoomInfo from "../../components/roomDetails/RoomInfo";
import RoomAmenities from "../../components/roomDetails/RoomAmenities";
import BookingCard from "../../components/roomDetails/BookingCard";



const roomsData = [
    {
        id: 1,
        title: "Modern Tokyo City Apartment",
        location: "Shinjuku, Tokyo",
        type: "Apartment",
        price: 8500,
        rating: 4.9,
        guests: 4,
        bedrooms: 2,
        description:
            "A stylish modern apartment in the heart of Tokyo with excellent city access.",
        image:
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "Kitchen", "AC"],
    },

    {
        id: 2,
        title: "Premium Tokyo City Suite",
        location: "Shibuya, Tokyo",
        type: "Suite",
        price: 10500,
        rating: 4.8,
        guests: 3,
        bedrooms: 1,
        description:
            "Enjoy a premium suite with elegant interiors and beautiful Tokyo city views.",
        image:
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "TV", "Kitchen"],
    },

    {
        id: 3,
        title: "Traditional Kyoto Residence",
        location: "Gion, Kyoto",
        type: "House",
        price: 9200,
        rating: 4.9,
        guests: 5,
        bedrooms: 2,
        description:
            "A peaceful traditional-style residence located near the historic streets of Kyoto.",
        image:
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "Kitchen", "Parking"],
    },

    {
        id: 4,
        title: "Minimal Kyoto Studio",
        location: "Higashiyama, Kyoto",
        type: "Studio",
        price: 6800,
        rating: 4.7,
        guests: 2,
        bedrooms: 1,
        description:
            "A minimalist and peaceful studio perfect for couples and solo travelers.",
        image:
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "AC", "TV"],
    },

    {
        id: 5,
        title: "Luxury Osaka Apartment",
        location: "Namba, Osaka",
        type: "Apartment",
        price: 7800,
        rating: 4.8,
        guests: 4,
        bedrooms: 2,
        description:
            "A comfortable luxury apartment close to Osaka's popular shopping and dining areas.",
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "Parking", "AC"],
    },

    {
        id: 6,
        title: "Cozy Osaka Urban Retreat",
        location: "Umeda, Osaka",
        type: "Apartment",
        price: 6200,
        rating: 4.6,
        guests: 2,
        bedrooms: 1,
        description:
            "A cozy urban stay with modern facilities and convenient access to central Osaka.",
        image:
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "Kitchen", "TV"],
    },

    {
        id: 7,
        title: "Grand Family Villa",
        location: "Kita, Sapporo",
        type: "Villa",
        price: 12500,
        rating: 5.0,
        guests: 8,
        bedrooms: 4,
        description:
            "A spacious luxury villa perfect for families visiting beautiful Sapporo.",
        image:
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "Parking", "Kitchen"],
    },

    {
        id: 8,
        title: "Contemporary Sapporo Home",
        location: "Chuo, Sapporo",
        type: "House",
        price: 8900,
        rating: 4.8,
        guests: 5,
        bedrooms: 2,
        description:
            "A contemporary home with clean interiors and easy access to Sapporo attractions.",
        image:
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "AC", "Kitchen"],
    },

    {
        id: 9,
        title: "Fukuoka Modern Apartment",
        location: "Hakata, Fukuoka",
        type: "Apartment",
        price: 5900,
        rating: 4.7,
        guests: 3,
        bedrooms: 1,
        description:
            "A modern apartment in Hakata offering comfort and convenient city transportation.",
        image:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "Kitchen", "AC"],
    },

    {
        id: 10,
        title: "Elegant Fukuoka Suite",
        location: "Tenjin, Fukuoka",
        type: "Suite",
        price: 7200,
        rating: 4.9,
        guests: 4,
        bedrooms: 2,
        description:
            "An elegant suite located near Fukuoka's shopping, restaurants and entertainment.",
        image:
            "https://images.unsplash.com/photo-1600566753051-8c9c7b5e7c6b?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "TV", "Kitchen"],
    },

    {
        id: 11,
        title: "Yokohama Bay View Apartment",
        location: "Minato Mirai, Yokohama",
        type: "Apartment",
        price: 9800,
        rating: 4.9,
        guests: 4,
        bedrooms: 2,
        description:
            "A premium apartment with beautiful bay views and modern city facilities.",
        image:
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "Parking", "AC"],
    },

    {
        id: 12,
        title: "Peaceful Yokohama Studio",
        location: "Naka, Yokohama",
        type: "Studio",
        price: 5600,
        rating: 4.6,
        guests: 2,
        bedrooms: 1,
        description:
            "A peaceful compact studio for travelers looking for a comfortable city stay.",
        image:
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "TV", "AC"],
    },

    {
        id: 13,
        title: "Nagoya Executive Residence",
        location: "Naka Ward, Nagoya",
        type: "House",
        price: 7600,
        rating: 4.8,
        guests: 5,
        bedrooms: 3,
        description:
            "A spacious executive residence with modern interiors and excellent city access.",
        image:
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "Kitchen", "Parking"],
    },

    {
        id: 14,
        title: "Modern Nagoya City Suite",
        location: "Sakae, Nagoya",
        type: "Suite",
        price: 6800,
        rating: 4.7,
        guests: 3,
        bedrooms: 1,
        description:
            "A modern suite located in a vibrant part of Nagoya with excellent facilities.",
        image:
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "TV", "Kitchen"],
    },

    {
        id: 15,
        title: "Luxury Hakone Retreat",
        location: "Hakone, Kanagawa",
        type: "Villa",
        price: 14500,
        rating: 5.0,
        guests: 6,
        bedrooms: 3,
        description:
            "A luxurious private retreat surrounded by peaceful natural scenery in Hakone.",
        image:
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "Parking", "Kitchen"],
    },

    {
        id: 16,
        title: "Traditional Hakone House",
        location: "Gora, Hakone",
        type: "House",
        price: 11200,
        rating: 4.9,
        guests: 6,
        bedrooms: 3,
        description:
            "A beautiful traditional-inspired home offering a relaxing Japanese countryside experience.",
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "Kitchen", "Parking"],
    },

    {
        id: 17,
        title: "Premium Nara Guest Apartment",
        location: "Nara Park, Nara",
        type: "Apartment",
        price: 6400,
        rating: 4.8,
        guests: 4,
        bedrooms: 2,
        description:
            "A comfortable apartment near Nara's famous historical attractions and peaceful parks.",
        image:
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "AC", "Kitchen"],
    },

    {
        id: 18,
        title: "Elegant Kobe Harbor Suite",
        location: "Harborland, Kobe",
        type: "Suite",
        price: 8300,
        rating: 4.9,
        guests: 3,
        bedrooms: 1,
        description:
            "An elegant suite near Kobe Harbor with modern interiors and relaxing city views.",
        image:
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "TV", "AC"],
    },

    {
        id: 19,
        title: "Quiet Hiroshima Urban Home",
        location: "Naka Ward, Hiroshima",
        type: "House",
        price: 6100,
        rating: 4.7,
        guests: 5,
        bedrooms: 2,
        description:
            "A comfortable urban home located near Hiroshima's major attractions and transport links.",
        image:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "Kitchen", "Parking"],
    },

    {
        id: 20,
        title: "Luxury Okinawa Beach Villa",
        location: "Naha, Okinawa",
        type: "Villa",
        price: 13800,
        rating: 5.0,
        guests: 7,
        bedrooms: 4,
        description:
            "A beautiful luxury villa perfect for families seeking a relaxing Okinawa getaway.",
        image:
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "Parking", "Kitchen"],
    },
];




const RoomDetails = () => {
    const { id } = useParams();

    const room = roomsData.find(
        (item) => item.id === Number(id)
    );

    // Room not found
    if (!room) {
        return (
            <main className="min-h-screen bg-background px-4 py-16">
                <div className="mx-auto flex max-w-3xl flex-col items-center justify-center rounded-2xl border border-border bg-card px-6 py-16 text-center">
                    <h1 className="text-3xl font-bold text-text">
                        Room not found
                    </h1>

                    <p className="mt-3 text-sm text-muted">
                        The room you are looking for does not exist or may
                        have been removed.
                    </p>

                    <Link
                        to="/rooms"
                        className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-hover"
                    >
                        <FiArrowLeft />
                        Back to Rooms
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background">
            <div className="mx-auto max-w-7xl px-4 py-8 lg:px-0">
                {/* Back */}
                <Link
                    to="/rooms"
                    className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors duration-300 hover:text-primary"
                >
                    <FiArrowLeft />
                    Back to all rooms
                </Link>

                {/* Gallery */}
                <RoomGallery room={room} />

                {/* Main Content */}
                <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
                    {/* Left */}
                    <div className="min-w-0 space-y-8">
                        <RoomInfo room={room} />

                        <RoomAmenities
                            amenities={room.amenities}
                        />
                    </div>

                    {/* Right */}
                    <aside className="lg:sticky lg:top-24">
                        <BookingCard room={room} />
                    </aside>
                </div>
            </div>
        </main>
    );
};

export default RoomDetails;