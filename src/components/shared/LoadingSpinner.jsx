import React, { useEffect } from "react";

const LoadingSpinner = ({
    fullScreen = false,
    message = "Loading...",
    size = "md",
}) => {

    const sizes = {
        sm: {
            wrapper: "w-10 h-10",
            ring: "w-8 h-8",
        },
        md: {
            wrapper: "w-14 h-14",
            ring: "w-11 h-11",
        },
        lg: {
            wrapper: "w-18 h-18",
            ring: "w-14 h-14",
        },
    };

    const currentSize = sizes[size] || sizes.md;

    // Prevent background page scrolling when fullscreen loader is active
    useEffect(() => {
        if (!fullScreen) return;

        const originalOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [fullScreen]);

    return (
        <div
            className={`
                flex items-center justify-center
                ${
                    fullScreen
                        ? "fixed inset-0 z-[9999] h-dvh w-full bg-background"
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

                    {/* Outer Ring */}
                    <div
                        className="
                            absolute inset-0
                            rounded-full
                            border-2 border-border
                        "
                    />

                    {/* Primary Rotating Ring */}
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

                    {/* Amber Center */}
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

                    {/* Inner Pulse Ring */}
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

                {/* Loading Message */}
                {message && (
                    <div className="flex flex-col items-center gap-2">

                        <p className="text-sm font-semibold text-text">
                            {message}
                        </p>

                        {/* Loading Dots */}
                        <div className="flex items-center gap-1">
                            <span
                                className="
                                    h-1.5 w-1.5
                                    rounded-full
                                    bg-primary
                                    animate-bounce
                                    [animation-delay:-0.3s]
                                "
                            />

                            <span
                                className="
                                    h-1.5 w-1.5
                                    rounded-full
                                    bg-primary
                                    animate-bounce
                                    [animation-delay:-0.15s]
                                "
                            />

                            <span
                                className="
                                    h-1.5 w-1.5
                                    rounded-full
                                    bg-secondary
                                    animate-bounce
                                "
                            />
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default LoadingSpinner;