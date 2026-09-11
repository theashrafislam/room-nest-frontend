import React from "react";
import {
    FiCheckCircle,
    FiMapPin,
    FiKey,
    FiUsers,
} from "react-icons/fi";

const highlightIcons = [
    FiMapPin,
    FiKey,
    FiUsers,
    FiCheckCircle,
];

const RoomHighlights = ({ highlights = [] }) => {
    if (!highlights.length) {
        return null;
    }

    return (
        <section className="border-t border-border pt-8">
            <h2 className="text-xl font-bold text-text sm:text-2xl">
                Highlights
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {highlights.map((highlight, index) => {
                    const Icon =
                        highlightIcons[
                            index % highlightIcons.length
                        ];

                    return (
                        <div
                            key={highlight}
                            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary hover:shadow-sm"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <Icon />
                            </div>

                            <span className="text-sm font-medium text-text">
                                {highlight}
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default RoomHighlights;