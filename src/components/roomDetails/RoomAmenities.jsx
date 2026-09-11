import React from "react";
import {
    FiCheck,
    FiWifi,
    FiTv,
    FiCoffee,
    FiWind,
    FiMapPin,
    FiDroplet,
    FiMonitor,
    FiHome,
    FiBox,
    FiUsers,
    FiSun,
} from "react-icons/fi";

const amenityIcons = {
    WiFi: FiWifi,
    TV: FiTv,
    Kitchen: FiCoffee,
    "Air Conditioning": FiWind,
    AC: FiWind,
    Parking: FiMapPin,
    Washer: FiDroplet,
    Workspace: FiMonitor,
    Balcony: FiHome,
    "Private Entrance": FiHome,
    Heating: FiSun,
    "Coffee Maker": FiCoffee,
    "Dining Area": FiUsers,
    "Storage Space": FiBox,
};

const RoomAmenities = ({ amenities = [] }) => {
    if (!amenities.length) {
        return null;
    }

    return (
        <section className="border-t border-border pt-8">
            <h2 className="text-xl font-bold text-text sm:text-2xl">
                What this place offers
            </h2>

            <p className="mt-2 text-sm leading-6 text-muted">
                Everything you need for a comfortable and enjoyable stay.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {amenities.map((amenity) => {
                    const Icon =
                        amenityIcons[amenity] || FiCheck;

                    return (
                        <div
                            key={amenity}
                            className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary hover:shadow-sm"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                                <Icon className="text-lg" />
                            </div>

                            <span className="text-sm font-medium text-text">
                                {amenity}
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default RoomAmenities;