import React from "react";
import { Link, useParams } from "react-router";
import { FiArrowLeft } from "react-icons/fi";

import RoomGallery from "../../components/roomDetails/RoomGallery";
import RoomInfo from "../../components/roomDetails/RoomInfo";
import RoomAmenities from "../../components/roomDetails/RoomAmenities";
import RoomHighlights from "../../components/roomDetails/RoomHighlights";
import HouseRules from "../../components/roomDetails/HouseRules";
import LocationInfo from "../../components/roomDetails/LocationInfo";
import Reviews from "../../components/roomDetails/Reviews";
import BookingCard from "../../components/roomDetails/BookingCard";

import { roomsData } from "../../data/roomsData";
import CancellationPolicy from "../../components/roomDetails/CancellationPolicy";



const RoomDetails = () => {
    const { id } = useParams();

    const room = roomsData.find(
        (item) => item.id === Number(id)
    );


    // Room not found
    if (!room) {
        return (
            <main className="min-h-screen bg-background px-4 py-16">
                <div className="mx-auto flex max-w-3xl flex-col items-center justify-center rounded-2xl border border-border bg-card px-6 py-16 text-center shadow-sm">
                    <h1 className="text-2xl font-bold text-text sm:text-3xl">
                        Room not found
                    </h1>

                    <p className="mt-3 max-w-md text-sm leading-6 text-muted">
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
            <div className="mx-auto max-w-7xl px-4 py-6 sm:py-8 lg:px-0">

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

                {/* Content */}
                <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start lg:gap-10">

                    {/* Left Content */}
                    <div className="min-w-0 space-y-10">

                        <RoomInfo room={room} />

                        <RoomHighlights highlights={room.highlights}/>

                        <RoomAmenities amenities={room.amenities}/>

                        {/* Rules + Location */}
                        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">

                            <HouseRules rules={room.houseRules} />

                            <LocationInfo location={room.location} details={room.locationDetails}/>

                        </div>

                        <CancellationPolicy policy={room?.cancellationPolicy} />

                        <Reviews reviews={room?.reviews} />

                    </div>

                    {/* Booking */}
                    <aside className="lg:sticky lg:top-24">
                        <BookingCard room={room} />
                    </aside>
                </div>
            </div>
        </main>
    );
};

export default RoomDetails;