import React from "react";
import {
    FiMapPin,
    FiStar,
    FiUsers,
    FiHome,
    FiMoon,
    FiDroplet,
} from "react-icons/fi";

const RoomInfo = ({ room }) => {
    return (
        <div className="space-y-8">

            {/* Header */}
            <div>
                <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {room.type}
                    </span>

                    <div className="flex items-center gap-1.5 text-sm text-muted">
                        <FiStar className="fill-secondary text-secondary" />

                        <span className="font-semibold text-text">
                            {room.rating}
                        </span>

                        <span>·</span>

                        <span>
                            {room.reviewCount} reviews
                        </span>
                    </div>
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
                    {room.title}
                </h1>

                <div className="mt-4 flex items-center gap-2 text-sm text-muted">
                    <FiMapPin className="shrink-0 text-primary" />
                    <span>{room.location}</span>
                </div>
            </div>

            {/* Quick Information */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

                <div className="rounded-2xl border border-border bg-card p-4 transition-shadow duration-300 hover:shadow-sm">
                    <FiUsers className="mb-3 text-xl text-primary" />

                    <p className="text-xs text-muted">
                        Guests
                    </p>

                    <p className="mt-1 font-semibold text-text">
                        {room.guests}
                    </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-4 transition-shadow duration-300 hover:shadow-sm">
                    <FiHome className="mb-3 text-xl text-primary" />

                    <p className="text-xs text-muted">
                        Bedrooms
                    </p>

                    <p className="mt-1 font-semibold text-text">
                        {room.bedrooms}
                    </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-4 transition-shadow duration-300 hover:shadow-sm">
                    <FiMoon className="mb-3 text-xl text-primary" />

                    <p className="text-xs text-muted">
                        Beds
                    </p>

                    <p className="mt-1 font-semibold text-text">
                        {room.beds}
                    </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-4 transition-shadow duration-300 hover:shadow-sm">
                    <FiDroplet className="mb-3 text-xl text-primary" />

                    <p className="text-xs text-muted">
                        Bathrooms
                    </p>

                    <p className="mt-1 font-semibold text-text">
                        {room.bathrooms}
                    </p>
                </div>
            </div>

            {/* Description */}
            <div className="border-t border-border pt-7">
                <h2 className="text-xl font-bold text-text sm:text-2xl">
                    About this place
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                    {room.description}
                </p>
            </div>
        </div>
    );
};

export default RoomInfo;