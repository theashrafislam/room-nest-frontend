import React from "react";
import {
    FiClock,
    FiLogOut,
    FiSlash,
    FiHeart,
    FiUsers,
} from "react-icons/fi";

const HouseRules = ({ rules }) => {
    if (!rules) {
        return null;
    }

    const rulesData = [
        {
            label: "Check-in",
            value: rules.checkIn,
            icon: FiClock,
        },
        {
            label: "Check-out",
            value: rules.checkOut,
            icon: FiLogOut,
        },
        {
            label: "Smoking",
            value: rules.smoking,
            icon: FiSlash,
        },
        {
            label: "Pets",
            value: rules.pets,
            icon: FiHeart,
        },
        {
            label: "Parties",
            value: rules.parties,
            icon: FiUsers,
        },
    ];

    return (
        <section className="border-t border-border pt-8">
            <h2 className="text-xl font-bold text-text sm:text-2xl">
                House rules
            </h2>

            <p className="mt-2 text-sm leading-6 text-muted">
                Please review the house rules before making your reservation.
            </p>

            <div className="mt-5 divide-y divide-border rounded-2xl border border-border bg-card">
                {rulesData.map((rule) => {
                    const Icon = rule.icon;

                    return (
                        <div
                            key={rule.label}
                            className="flex items-center justify-between gap-4 p-4"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Icon />
                                </div>

                                <span className="text-sm font-medium text-text">
                                    {rule.label}
                                </span>
                            </div>

                            <span className="text-right text-sm text-muted">
                                {rule.value}
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default HouseRules;