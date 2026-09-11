import React from "react";
import {
    FiMapPin,
    FiNavigation,
    FiShoppingBag,
    FiMap,
} from "react-icons/fi";

const LocationInfo = ({ location, details }) => {
    if (!details) {
        return null;
    }

    const locationItems = [
        {
            label: "Location",
            value: location,
            icon: FiMapPin,
        },
        {
            label: "Nearby station",
            value: details.station,
            icon: FiNavigation,
        },
        {
            label: "Convenience",
            value: details.convenienceStore,
            icon: FiShoppingBag,
        },
        {
            label: "Nearby attraction",
            value: details.attraction,
            icon: FiMap,
        },
    ];

    return (
        <section className="border-t border-border pt-8">
            <h2 className="text-xl font-bold text-text sm:text-2xl">
                Where you'll stay
            </h2>

            <p className="mt-2 text-sm leading-6 text-muted">
                Explore the neighborhood and nearby places from your stay.
            </p>

            <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-card">
                {locationItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.label}
                            className="flex gap-4 border-b border-border p-4 last:border-b-0"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <Icon />
                            </div>

                            <div>
                                <p className="text-xs text-muted">
                                    {item.label}
                                </p>

                                <p className="mt-1 text-sm font-medium leading-6 text-text">
                                    {item.value}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            
        </section>
    );
};

export default LocationInfo;