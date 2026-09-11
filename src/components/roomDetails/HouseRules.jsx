import React from "react";
import {
    FiClock,
    FiLogOut,
    FiSlash,
    FiHeart,
    FiUsers,
    FiCheckCircle,
} from "react-icons/fi";

const HouseRules = ({ rules }) => {
    if (!Array.isArray(rules) || rules.length === 0) {
        return null;
    }

    const getRuleIcon = (rule) => {
        const text = rule.toLowerCase();

        if (text.includes("check-in")) {
            return FiClock;
        }

        if (text.includes("check-out")) {
            return FiLogOut;
        }

        if (text.includes("smoking")) {
            return FiSlash;
        }

        if (text.includes("pets")) {
            return FiHeart;
        }

        if (text.includes("parties") || text.includes("events")) {
            return FiUsers;
        }

        return FiCheckCircle;
    };

    return (
        <section className="border-t border-border pt-8">
            {/* Section Header */}
            <div>
                <h2 className="text-xl font-bold text-text sm:text-2xl">
                    House rules
                </h2>

                <p className="mt-2 text-sm leading-6 text-muted">
                    Please review the house rules before making your reservation.
                </p>
            </div>

            {/* Rules */}
            <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-card">
                {rules.map((rule, index) => {
                    const Icon = getRuleIcon(rule);

                    return (
                        <div
                            key={`${rule}-${index}`}
                            className={`flex items-center gap-4 p-5 ${
                                index !== rules.length - 1
                                    ? "border-b border-border"
                                    : ""
                            }`}
                        >
                            {/* Icon */}
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <Icon className="text-lg" />
                            </div>

                            {/* Rule */}
                            <p className="text-sm font-medium leading-6 text-text sm:text-base">
                                {rule}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default HouseRules;