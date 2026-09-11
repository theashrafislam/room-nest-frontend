import React from "react";
import {
    FiCheck,
    FiWifi,
    FiTv,
    FiCoffee,
    FiWind,
    FiMapPin,
} from "react-icons/fi";

const amenityIcons = {
    WiFi: FiWifi,
    TV: FiTv,
    Kitchen: FiCoffee,
    AC: FiWind,
    Parking: FiMapPin,
};

const RoomAmenities = ({ amenities = [] }) => {
    return (
        <section className="border-t border-border pt-8">
            <h2 className="text-2xl font-bold text-text">
                What this place offers
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity] || FiCheck;

                    return (
                        <div
                            key={amenity}
                            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <Icon />
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