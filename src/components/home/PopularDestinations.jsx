import {
    useRef,
    useState,
    useEffect,
    useCallback,
} from "react";
import { useNavigate } from "react-router";
import {
    FiArrowLeft,
    FiArrowRight,
    FiArrowUpRight,
    FiMapPin,
} from "react-icons/fi";

const destinations = [
    {
        id: 1,
        name: "Tokyo",
        country: "Japan",
        description: "Modern city living",
        image:
            "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=85",
    },
    {
        id: 2,
        name: "Kyoto",
        country: "Japan",
        description: "Tradition & tranquility",
        image:
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=85",
    },
    {
        id: 3,
        name: "Bali",
        country: "Indonesia",
        description: "Tropical escapes",
        image:
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=85",
    },
    {
        id: 4,
        name: "Paris",
        country: "France",
        description: "Romantic city stays",
        image:
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=85",
    },
    {
        id: 5,
        name: "Osaka",
        country: "Japan",
        description: "Food, culture & fun",
        image:
            "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=800&q=85",
    },
    {
        id: 6,
        name: "Santorini",
        country: "Greece",
        description: "Coastal island retreats",
        image:
            "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=800&q=85",
    },
];

const PopularDestinations = () => {
    const navigate = useNavigate();
    const scrollRef = useRef(null);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    // Synchronize navigation buttons with the scroll position.
    const updateScrollButtons = useCallback(() => {
        const element = scrollRef.current;

        if (!element) return;

        const maxScroll = element.scrollWidth - element.clientWidth;

        setCanScrollLeft(element.scrollLeft > 2);
        setCanScrollRight(
            maxScroll > 2 && element.scrollLeft < maxScroll - 2
        );
    }, []);

    // Update controls on scrolling, resizing and image loading.
    useEffect(() => {
        const element = scrollRef.current;

        if (!element) return;

        updateScrollButtons();

        element.addEventListener("scroll", updateScrollButtons, {
            passive: true,
        });

        const resizeObserver = new ResizeObserver(() => {
            updateScrollButtons();
        });

        resizeObserver.observe(element);

        Array.from(element.children).forEach((card) => {
            resizeObserver.observe(card);
        });

        const images = element.querySelectorAll("img");

        const handleImageLoad = () => updateScrollButtons();

        images.forEach((img) => {
            if (!img.complete) {
                img.addEventListener("load", handleImageLoad);
                img.addEventListener("error", handleImageLoad);
            }
        });

        return () => {
            element.removeEventListener("scroll", updateScrollButtons);
            resizeObserver.disconnect();

            images.forEach((img) => {
                img.removeEventListener("load", handleImageLoad);
                img.removeEventListener("error", handleImageLoad);
            });
        };
    }, [updateScrollButtons]);

    // Scroll by one card plus the actual responsive gap.
    const scrollDestinations = (direction) => {
        const element = scrollRef.current;

        if (!element) return;

        const firstCard = element.querySelector(
            "[data-destination-card]"
        );

        if (!firstCard) return;

        const cardWidth = firstCard.getBoundingClientRect().width;
        const styles = window.getComputedStyle(element);
        const gap = parseFloat(styles.columnGap) || 0;

        element.scrollBy({
            left: direction * (cardWidth + gap),
            behavior: "smooth",
        });
    };

    // Navigate to rooms filtered by destination.
    const handleDestinationClick = (destination) => {
        navigate(
            `/rooms?location=${encodeURIComponent(destination.name)}`
        );
    };

    return (
        <section
            aria-labelledby="popular-destinations-heading"
            className="overflow-hidden bg-background py-12 sm:py-14 lg:py-20"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
                    <div className="min-w-0 max-w-2xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary sm:text-sm">
                            <FiMapPin size={15} />
                            EXPLORE PLACES
                        </span>

                        <h2
                            id="popular-destinations-heading"
                            className="mt-3 text-2xl font-bold tracking-tight text-text sm:text-3xl lg:text-4xl"
                        >
                            Popular{" "}
                            <span className="text-primary">
                                Destinations
                            </span>
                        </h2>

                        <p className="mt-2 max-w-xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
                            Discover beautiful places around the world
                            and find the perfect stay for your next
                            unforgettable journey.
                        </p>
                    </div>

                    {/* Desktop View All */}
                    <button
                        type="button"
                        onClick={() => navigate("/rooms")}
                        className="group hidden shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary/5 sm:inline-flex"
                    >
                        Explore all
                        <FiArrowUpRight
                            size={17}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </button>
                </div>

                {/* Destination Carousel */}
                <div className="relative">

                    {/* Desktop Scroll Controls */}
                    <div className="mb-4 hidden items-center justify-end gap-2 sm:flex">
                        <button
                            type="button"
                            onClick={() => scrollDestinations(-1)}
                            disabled={!canScrollLeft}
                            aria-label="Scroll to previous destinations"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-text shadow-sm transition-all duration-300 hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-border disabled:hover:text-text sm:h-11 sm:w-11"
                        >
                            <FiArrowLeft size={18} />
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollDestinations(1)}
                            disabled={!canScrollRight}
                            aria-label="Scroll to next destinations"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-text shadow-sm transition-all duration-300 hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-border disabled:hover:text-text sm:h-11 sm:w-11"
                        >
                            <FiArrowRight size={18} />
                        </button>
                    </div>

                    {/* Scrollable Track */}
                    <div
                        ref={scrollRef}
                        className="
                            flex gap-4
                            overflow-x-auto overflow-y-hidden
                            overscroll-x-contain
                            snap-x snap-proximity
                            scroll-smooth touch-pan-x
                            pb-5
                            sm:gap-5 sm:snap-mandatory
                            lg:gap-6
                        "
                        style={{
                            scrollbarWidth: "none",
                            WebkitOverflowScrolling: "touch",
                        }}
                    >
                        {destinations.map((destination) => (
                            <button
                                key={destination.id}
                                type="button"
                                data-destination-card
                                onClick={() =>
                                    handleDestinationClick(destination)
                                }
                                aria-label={`Explore stays in ${destination.name}, ${destination.country}`}
                                className="
                                    group relative
                                    w-[85%] min-w-0 shrink-0
                                    snap-start overflow-hidden
                                    rounded-2xl border border-border
                                    bg-card text-left shadow-sm
                                    transition-all duration-300
                                    hover:-translate-y-1 hover:shadow-md
                                    min-[420px]:w-[76%]
                                    sm:w-[47%]
                                    lg:w-[calc((100%-3rem)/3)]
                                "
                            >
                                {/* Destination Image */}
                                <div className="relative aspect-[4/5] overflow-hidden bg-border">
                                    <img
                                        src={destination.image}
                                        alt={`${destination.name}, ${destination.country}`}
                                        loading="lazy"
                                        decoding="async"
                                        draggable="false"
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* Image Overlay */}
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                                    {/* Country Badge */}
                                    <span className="absolute left-3 top-3 inline-flex max-w-[80%] items-center gap-1.5 truncate rounded-lg bg-card/95 px-3 py-1.5 text-xs font-semibold text-text shadow-sm backdrop-blur-sm sm:left-4 sm:top-4">
                                        <FiMapPin
                                            className="shrink-0 text-primary"
                                            size={14}
                                        />
                                        {destination.country}
                                    </span>

                                    {/* Destination Details */}
                                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                                        <h3 className="text-xl font-bold text-white sm:text-2xl">
                                            {destination.name}
                                        </h3>

                                        <p className="mt-1.5 text-sm text-white/85">
                                            {destination.description}
                                        </p>

                                        <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/25 pt-3">
                                            <span className="text-xs font-medium text-white/90 sm:text-sm">
                                                Explore stays
                                            </span>

                                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-card text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                                                <FiArrowRight
                                                    size={17}
                                                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Mobile Bottom Controls */}
                    <div className="mt-2 flex items-center justify-between gap-3 sm:hidden">
                        <p className="text-xs leading-5 text-muted">
                            Swipe to explore
                            <span className="ml-1 text-primary">→</span>
                        </p>

                        <div className="flex shrink-0 items-center gap-2">
                            <button
                                type="button"
                                onClick={() => scrollDestinations(-1)}
                                disabled={!canScrollLeft}
                                aria-label="Previous destinations"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-text transition-all duration-200 hover:border-primary hover:text-primary active:scale-95 disabled:cursor-not-allowed disabled:opacity-35"
                            >
                                <FiArrowLeft size={18} />
                            </button>

                            <button
                                type="button"
                                onClick={() => scrollDestinations(1)}
                                disabled={!canScrollRight}
                                aria-label="Next destinations"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-text transition-all duration-200 hover:border-primary hover:text-primary active:scale-95 disabled:cursor-not-allowed disabled:opacity-35"
                            >
                                <FiArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile View All */}
                <div className="mt-5 flex justify-center sm:hidden">
                    <button
                        type="button"
                        onClick={() => navigate("/rooms")}
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                        Explore all destinations
                        <FiArrowRight size={17} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default PopularDestinations;