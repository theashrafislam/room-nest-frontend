import React from "react";
import { FiCalendar, FiCheckCircle } from "react-icons/fi";

const CancellationPolicy = ({ policy }) => {
    if (!policy) {
        return null;
    }

    return (
        <section className="border-t border-border pt-8">
            <h2 className="text-xl font-bold text-text sm:text-2xl">
                Cancellation policy
            </h2>

            <div className="mt-5 flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FiCalendar className="text-xl" />
                </div>

                {/* Content */}
                <div className="min-w-0">
                    <div className="flex items-center gap-2">
                        <FiCheckCircle className="shrink-0 text-primary" />

                        <h3 className="text-sm font-semibold text-text sm:text-base">
                            Flexible cancellation
                        </h3>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-muted sm:text-base">
                        {policy}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CancellationPolicy;