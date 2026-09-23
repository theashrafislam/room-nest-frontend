import React from "react";

const LoadingSpinner = ({ fullScreen = false, message = "Loading...", size = "md", }) => {

    const sizes = {
        sm: {
            wrapper: "w-10 h-10",
            ring: "w-8 h-8",
            dot: "w-1 h-1",
        },
        md: {
            wrapper: "w-14 h-14",
            ring: "w-11 h-11",
            dot: "w-1.5 h-1.5",
        },
        lg: {
            wrapper: "w-18 h-18",
            ring: "w-14 h-14",
            dot: "w-2 h-2",
        },
    };

    const currentSize = sizes[size] || sizes.md;

    return (
        <div
            className={`
                flex items-center justify-center
                ${fullScreen
                    ? "fixed inset-0 z-50 min-h-dvh bg-background/90 backdrop-blur-md"
                    : "w-full py-12"
                }
            `}
        >
            <div className="flex flex-col items-center gap-5">

                {/* Spinner */}
                <div
                    className={`
                        ${currentSize.wrapper}
                        relative flex items-center justify-center
                    `}
                >

                    {/* Outer rotating ring */}
                    <div
                        className={`
                            absolute inset-0
                            rounded-full
                            border-2 border-border
                        `}
                    />

                    {/* Primary rotating ring */}
                    <div
                        className={`
                            ${currentSize.ring}
                            absolute
                            rounded-full
                            border-[3px]
                            border-transparent
                            border-t-primary
                            border-r-primary
                            animate-spin
                        `}
                    />

                    {/* Amber accent */}
                    <div
                        className="
                            absolute
                            h-2.5 w-2.5
                            rounded-full
                            bg-secondary
                            shadow-sm
                            animate-pulse
                        "
                    />

                    {/* Inner subtle ring */}
                    <div
                        className="
                            absolute
                            h-5 w-5
                            rounded-full
                            border
                            border-secondary/30
                            animate-ping
                        "
                    />
                </div>

                {/* Loading message */}
                {message && (
                    <div className="flex flex-col items-center gap-2">

                        <p className="text-sm font-semibold text-text">
                            {message}
                        </p>

                        {/* Animated loading dots */}
                        <div className="flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                            <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-bounce" />
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default LoadingSpinner;