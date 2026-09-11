import React from "react";
import { FiMapPin, FiStar, FiUsers, FiHome } from "react-icons/fi";

const RoomInfo = ({ room }) => {
    return (
        <div className="space-y-6">
            {/* Title */}
            <div>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {room.type}
                    </span>

                    <div className="flex items-center gap-1 text-sm text-muted">
                        <FiStar className="fill-secondary text-secondary" />
                        <span className="font-semibold text-text">
                            {room.rating}
                        </span>
                        <span>·</span>
                        <span>Excellent stay</span>
                    </div>
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
                    {room.title}
                </h1>

                <div className="mt-3 flex items-center gap-2 text-sm text-muted">
                    <FiMapPin className="text-primary" />
                    <span>{room.location}</span>
                </div>
            </div>

            {/* Quick Information */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-2xl border border-border bg-card p-4">
                    <FiUsers className="mb-2 text-xl text-primary" />
                    <p className="text-xs text-muted">Guests</p>
                    <p className="mt-1 font-semibold text-text">
                        {room.guests}
                    </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-4">
                    <FiHome className="mb-2 text-xl text-primary" />
                    <p className="text-xs text-muted">Bedrooms</p>
                    <p className="mt-1 font-semibold text-text">
                        {room.bedrooms}
                    </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-4">
                    <FiStar className="mb-2 text-xl text-secondary" />
                    <p className="text-xs text-muted">Rating</p>
                    <p className="mt-1 font-semibold text-text">
                        {room.rating}
                    </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-4">
                    <FiHome className="mb-2 text-xl text-primary" />
                    <p className="text-xs text-muted">Property</p>
                    <p className="mt-1 font-semibold text-text">
                        {room.type}
                    </p>
                </div>
            </div>

            {/* Description */}
            <div className="border-t border-border pt-6">
                <h2 className="text-xl font-bold text-text">
                    About this place
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                    {room.description}
                </p>

                <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                    Enjoy a comfortable and memorable stay with convenient
                    facilities, a beautiful environment and easy access to
                    nearby attractions.
                </p>
            </div>
        </div>
    );
};

export default RoomInfo;