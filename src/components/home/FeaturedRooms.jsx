import { useRef, useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router";
import {
    FiArrowLeft,
    FiArrowRight,
    FiArrowUpRight,
    FiHeart,
    FiMapPin,
    FiStar,
    FiUsers,
} from "react-icons/fi";

import { roomsData } from "../../data/roomsData";

const FeaturedRooms = () => {
    const navigate = useNavigate();
    const scrollRef = useRef(null);

    const [favorites, setFavorites] = useState([]);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    // Display up to six featured rooms.
    const featuredRooms = roomsData.slice(0, 6);

    // Keep navigation buttons synchronized with the scroll position.
    const updateScrollButtons = useCallback(() => {
        const element = scrollRef.current;

        if (!element) return;

        const maxScroll = element.scrollWidth - element.clientWidth;

        setCanScrollLeft(element.scrollLeft > 2);
        setCanScrollRight(
            maxScroll > 2 && element.scrollLeft < maxScroll - 2
        );
    }, []);

    useEffect(() => {
        const element = scrollRef.current;

        if (!element) return;

        updateScrollButtons();

        element.addEventListener("scroll", updateScrollButtons, {
            passive: true,
        });

        // Observe changes in track and card dimensions.
        const resizeObserver = new ResizeObserver(() => {
            updateScrollButtons();
        });

        resizeObserver.observe(element);

        Array.from(element.children).forEach((card) => {
            resizeObserver.observe(card);
        });

        // Recalculate after images load.
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
    }, [featuredRooms.length, updateScrollButtons]);

    // Scroll exactly one card, accounting for the responsive gap.
    const scrollRooms = (direction) => {
        const element = scrollRef.current;

        if (!element) return;

        const firstCard = element.querySelector("[data-room-card]");

        if (!firstCard) return;

        const cardWidth = firstCard.getBoundingClientRect().width;
        const styles = window.getComputedStyle(element);
        const gap = parseFloat(styles.columnGap) || 0;

        element.scrollBy({
            left: direction * (cardWidth + gap),
            behavior: "smooth",
        });
    };

    // Toggle a room's favorite state.
    const toggleFavorite = (roomId) => {
        setFavorites((previous) =>
            previous.includes(roomId)
                ? previous.filter((id) => id !== roomId)
                : [...previous, roomId]
        );
    };

    const formatPrice = (price) =>
        new Intl.NumberFormat("en-US").format(Number(price) || 0);

    const getRoomImage = (room) => {
        if (Array.isArray(room.images)) {
            return room.images[0] || room.image || "";
        }

        return room.images || room.image || "";
    };

    const getRoomLocation = (location) => {
        if (typeof location === "string") return location;

        if (location && typeof location === "object") {
            return (
                location.address ||
                location.city ||
                location.name ||
                "Explore this destination"
            );
        }

        return "Explore this destination";
    };

    return (
        <section
            aria-labelledby="featured-rooms-heading"
            className="overflow-hidden bg-background py-12 sm:py-14 lg:py-20"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
                    <div className="min-w-0 max-w-2xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary sm:text-sm">
                            <span className="h-2 w-2 rounded-full bg-secondary" />
                            HANDPICKED FOR YOU
                        </span>

                        <h2
                            id="featured-rooms-heading"
                            className="mt-3 text-2xl font-bold tracking-tight text-text sm:text-3xl lg:text-4xl"
                        >
                            Featured{" "}
                            <span className="text-primary">Rooms</span>
                        </h2>

                        <p className="mt-2 max-w-xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
                            Discover exceptional stays selected for
                            comfort, style, and unforgettable experiences.
                        </p>
                    </div>

                    {/* Desktop View All */}
                    <Link
                        to="/rooms"
                        className="group hidden shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary/5 sm:inline-flex"
                    >
                        View all rooms
                        <FiArrowUpRight
                            size={17}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </Link>
                </div>

                {/* Featured Rooms Carousel */}
                {featuredRooms.length > 0 ? (
                    <div className="relative">

                        {/* Desktop Scroll Controls */}
                        <div className="mb-4 hidden items-center justify-end gap-2 sm:flex">
                            <button
                                type="button"
                                onClick={() => scrollRooms(-1)}
                                disabled={!canScrollLeft}
                                aria-label="Scroll to previous rooms"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-text shadow-sm transition-all duration-300 hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-border disabled:hover:text-text sm:h-11 sm:w-11"
                            >
                                <FiArrowLeft size={18} />
                            </button>

                            <button
                                type="button"
                                onClick={() => scrollRooms(1)}
                                disabled={!canScrollRight}
                                aria-label="Scroll to next rooms"
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
                                scroll-smooth
                                touch-pan-x
                                pb-5
                                sm:gap-5 sm:snap-mandatory
                                lg:gap-6
                            "
                            style={{
                                scrollbarWidth: "none",
                                WebkitOverflowScrolling: "touch",
                            }}
                        >
                            {featuredRooms.map((room, index) => {
                                const roomId = room.id ?? room._id ?? index;
                                const isFavorite = favorites.includes(roomId);
                                const image = getRoomImage(room);
                                const location = getRoomLocation(room.location);

                                const amenities = Array.isArray(room.amenities)
                                    ? room.amenities.slice(0, 3)
                                    : [];

                                const title =
                                    room.title || room.name || "Beautiful Room";

                                const guests = Number(room.guests) || 1;

                                return (
                                    <article
                                        key={roomId}
                                        data-room-card
                                        className="
                                            group flex
                                            w-[85%] min-w-0 shrink-0
                                            snap-start flex-col
                                            overflow-hidden
                                            rounded-2xl border border-border
                                            bg-card shadow-sm
                                            transition-all duration-300
                                            hover:-translate-y-1 hover:shadow-md
                                            min-[420px]:w-[76%]
                                            sm:w-[47%]
                                            lg:w-[calc((100%-3rem)/3)]
                                        "
                                    >
                                        {/* Room Image */}
                                        <div className="relative aspect-[4/3] shrink-0 overflow-hidden bg-border">
                                            {image ? (
                                                <img
                                                    src={image}
                                                    alt={title}
                                                    loading="lazy"
                                                    decoding="async"
                                                    draggable="false"
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="flex h-full items-center justify-center text-sm text-muted">
                                                    Room image unavailable
                                                </div>
                                            )}

                                            {/* Image Overlay */}
                                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-text/25 via-transparent to-transparent" />

                                            {/* Room Type */}
                                            <span className="absolute left-3 top-3 max-w-[65%] truncate rounded-lg bg-card/95 px-3 py-1.5 text-xs font-semibold text-text shadow-sm backdrop-blur-sm sm:left-4 sm:top-4">
                                                {room.type || room.category || "Room Rental"}
                                            </span>

                                            {/* Favorite Button */}
                                            <button
                                                type="button"
                                                onClick={() => toggleFavorite(roomId)}
                                                aria-label={
                                                    isFavorite
                                                        ? "Remove from favorites"
                                                        : "Add to favorites"
                                                }
                                                aria-pressed={isFavorite}
                                                className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full shadow-sm backdrop-blur-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:right-4 sm:top-4 ${
                                                    isFavorite
                                                        ? "bg-primary text-white"
                                                        : "bg-card/95 text-text hover:bg-primary hover:text-white"
                                                }`}
                                            >
                                                <FiHeart
                                                    size={18}
                                                    className={isFavorite ? "fill-current" : ""}
                                                />
                                            </button>

                                            {/* Rating */}
                                            {room.rating != null && (
                                                <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-lg bg-card/95 px-3 py-2 text-sm font-semibold text-text shadow-sm backdrop-blur-sm sm:bottom-4 sm:left-4">
                                                    <FiStar
                                                        className="fill-secondary text-secondary"
                                                        size={15}
                                                    />

                                                    {Number(room.rating).toFixed(1)}

                                                    {room.reviewsCount != null && (
                                                        <span className="font-normal text-muted">
                                                            ({room.reviewsCount})
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                        </div>

                                        {/* Room Details */}
                                        <div className="flex flex-1 flex-col p-4 sm:p-5">
                                            {/* Location */}
                                            <div className="mb-2 flex min-w-0 items-center gap-2">
                                                <FiMapPin
                                                    className="shrink-0 text-primary"
                                                    size={16}
                                                />

                                                <p className="truncate text-sm text-muted">
                                                    {location}
                                                </p>
                                            </div>

                                            {/* Title */}
                                            <h3 className="line-clamp-2 min-h-12 text-lg font-bold leading-6 text-text transition-colors duration-300 group-hover:text-primary sm:text-xl">
                                                {title}
                                            </h3>

                                            {/* Guest Capacity */}
                                            <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
                                                <FiUsers
                                                    className="shrink-0 text-primary"
                                                    size={17}
                                                />

                                                <span>
                                                    {guests}{" "}
                                                    {guests === 1 ? "Guest" : "Guests"}
                                                </span>

                                                {room.bedrooms != null && (
                                                    <>
                                                        <span
                                                            aria-hidden="true"
                                                            className="text-border"
                                                        >
                                                            |
                                                        </span>

                                                        <span>
                                                            {room.bedrooms}{" "}
                                                            {room.bedrooms === 1
                                                                ? "Bedroom"
                                                                : "Bedrooms"}
                                                        </span>
                                                    </>
                                                )}
                                            </div>

                                            {/* Amenities */}
                                            {amenities.length > 0 && (
                                                <div className="mt-4 flex flex-wrap gap-2">
                                                    {amenities.map((amenity, amenityIndex) => (
                                                        <span
                                                            key={`${roomId}-${amenity}-${amenityIndex}`}
                                                            className="max-w-full truncate rounded-lg bg-background px-2.5 py-1.5 text-xs font-medium text-muted"
                                                        >
                                                            {amenity}
                                                        </span>
                                                    ))}

                                                    {room.amenities.length > 3 && (
                                                        <span className="rounded-lg bg-primary/5 px-2.5 py-1.5 text-xs font-semibold text-primary">
                                                            +{room.amenities.length - 3} more
                                                        </span>
                                                    )}
                                                </div>
                                            )}

                                            {/* Price & Details */}
                                            <div className="mt-auto">
                                                <div className="my-4 border-t border-border" />

                                                <div className="flex items-center justify-between gap-3">
                                                    <div className="min-w-0">
                                                        <p className="text-xs text-muted">
                                                            Starting from
                                                        </p>

                                                        <p className="mt-1 text-xl font-bold text-text sm:text-2xl">
                                                            <span className="text-secondary">
                                                                $
                                                            </span>
                                                            {formatPrice(room.price)}

                                                            <span className="ml-1 text-xs font-medium text-muted sm:text-sm">
                                                                / night
                                                            </span>
                                                        </p>
                                                    </div>

                                                    <Link
                                                        to={`/rooms/${roomId}`}
                                                        aria-label={`View details for ${title}`}
                                                        className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-3.5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:px-4"
                                                    >
                                                        Details
                                                        <FiArrowRight size={16} />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>

                        {/* Mobile Swipe Hint & Controls */}
                        <div className="mt-2 flex items-center justify-between gap-3 sm:hidden">
                            <p className="text-xs leading-5 text-muted">
                                Swipe to explore rooms
                                <span className="ml-1 text-primary">→</span>
                            </p>

                            <div className="flex shrink-0 items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => scrollRooms(-1)}
                                    disabled={!canScrollLeft}
                                    aria-label="Previous rooms"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-text transition-all duration-200 hover:border-primary hover:text-primary active:scale-95 disabled:cursor-not-allowed disabled:opacity-35"
                                >
                                    <FiArrowLeft size={18} />
                                </button>

                                <button
                                    type="button"
                                    onClick={() => scrollRooms(1)}
                                    disabled={!canScrollRight}
                                    aria-label="Next rooms"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-text transition-all duration-200 hover:border-primary hover:text-primary active:scale-95 disabled:cursor-not-allowed disabled:opacity-35"
                                >
                                    <FiArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="rounded-2xl border border-border bg-card px-5 py-12 text-center">
                        <h3 className="text-lg font-bold text-text">
                            No featured rooms yet
                        </h3>

                        <p className="mt-2 text-sm text-muted">
                            Please check back soon for available stays.
                        </p>
                    </div>
                )}

                {/* Bottom CTA */}
                <div className="mt-6 flex justify-center sm:mt-8">
                    <button
                        type="button"
                        onClick={() => navigate("/rooms")}
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                        Explore all rooms
                        <FiArrowRight size={17} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedRooms;