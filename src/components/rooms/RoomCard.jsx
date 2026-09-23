import React, { useState } from "react";
import {
    FiHeart,
    FiMapPin,
    FiUsers,
    FiArrowRight,
    FiWifi,
    FiHome,
    FiWind,
    FiCoffee,
    FiTv,
    FiMonitor,
    FiDroplet,
} from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";


//    Amenity Configuration

const amenityConfig = {
    WiFi: {
        label: "WiFi",
        icon: FiWifi,
    },

    Kitchen: {
        label: "Kitchen",
        icon: FiCoffee,
    },

    "Air Conditioning": {
        label: "AC",
        icon: FiWind,
    },

    TV: {
        label: "TV",
        icon: FiTv,
    },

    Workspace: {
        label: "Workspace",
        icon: FiMonitor,
    },

    "Washing Machine": {
        label: "Washer",
        icon: FiDroplet,
    },

    Heating: {
        label: "Heating",
        icon: FiWind,
    },

    Parking: {
        label: "Parking",
        icon: FiMapPin,
    },
};



const RoomCard = ({ room }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const mainImage = room.images?.[0];

    const visibleAmenities = room.amenities?.slice(0, 3) || [];

    const remainingAmenities =
        room.amenities?.length > 3
            ? room.amenities.length - 3
            : 0;

    return (
        <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            {/* Image */}

            <div className="relative aspect-[4/3] overflow-hidden bg-background">
                {mainImage ? (
                    <img
                        src={mainImage}
                        alt={room.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-sm text-muted">
                        No image available
                    </div>
                )}

                {/* Property Type */}

                <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-card/95 px-3 py-1.5 text-xs font-semibold text-text shadow-sm backdrop-blur-sm">
                        {room.type}
                    </span>
                </div>

                {/* Favorite */}

                <button
                    type="button"
                    onClick={() =>
                        setIsFavorite((prev) => !prev)
                    }
                    aria-label={
                        isFavorite
                            ? "Remove from favorites"
                            : "Add to favorites"
                    }
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-card/95 text-primary shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:text-secondary"
                >
                    <FiHeart
                        className={`text-lg transition-all duration-300 ${
                            isFavorite
                                ? "fill-secondary text-secondary"
                                : ""
                        }`}
                    />
                </button>

                {/* Rating */}

                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-card/95 px-3 py-1.5 shadow-sm backdrop-blur-sm">
                    <FaStar className="text-sm text-secondary" />

                    <span className="text-sm font-semibold text-text">
                        {room.rating}
                    </span>

                    <span className="text-xs text-muted">
                        ({room.reviewsCount})
                    </span>
                </div>
            </div>

            {/* Content */}

            <div className="p-5">
                {/* Location */}

                <div className="flex items-center gap-1.5 text-sm text-muted">
                    <FiMapPin className="shrink-0 text-primary" />

                    <span className="truncate">
                        {room.location}
                    </span>
                </div>

                {/* Title */}

                <Link
                    to={`/room/${room.id}`}
                    className="block"
                >
                    <h3 className="mt-2 line-clamp-1 text-lg font-bold text-text transition-colors duration-300 group-hover:text-primary">
                        {room.title}
                    </h3>
                </Link>

                {/* Description */}

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
                    {room.description}
                </p>

                {/* Room Information */}

                <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted">
                    {/* Guests */}

                    <span className="flex items-center gap-1.5">
                        <FiUsers className="shrink-0 text-primary" />

                        <span>
                            {room.guests} Guests
                        </span>
                    </span>

                    {/* Bedrooms */}

                    <span className="flex items-center gap-1.5">
                        <FiHome className="shrink-0 text-primary" />

                        <span>
                            {room.bedrooms} Bedrooms
                        </span>
                    </span>

                    {/* Beds */}

                    <span className="flex items-center gap-1.5">
                        <FiHome className="shrink-0 text-primary" />

                        <span>
                            {room.beds} Beds
                        </span>
                    </span>

                    {/* Bathrooms */}

                    <span className="flex items-center gap-1.5">
                        <FiDroplet className="shrink-0 text-primary" />

                        <span>
                            {room.bathrooms} Bathroom
                            {room.bathrooms > 1 ? "s" : ""}
                        </span>
                    </span>
                </div>

                {/* Amenities */}

                {visibleAmenities.length > 0 && (
                    <div className="mt-4 flex items-center gap-2 overflow-hidden">
                        {visibleAmenities.map((amenity) => {
                            const config =
                                amenityConfig[amenity];

                            if (!config) return null;

                            const Icon = config.icon;

                            return (
                                <span
                                    key={amenity}
                                    title={amenity}
                                    className="flex shrink-0 items-center gap-1.5 rounded-lg bg-background px-2.5 py-1.5 text-xs font-medium text-muted"
                                >
                                    <Icon className="shrink-0 text-primary" />

                                    <span>
                                        {config.label}
                                    </span>
                                </span>
                            );
                        })}

                        {/* Remaining Amenities */}

                        {remainingAmenities > 0 && (
                            <span className="shrink-0 px-1 text-xs font-semibold text-primary">
                                +{remainingAmenities}
                            </span>
                        )}
                    </div>
                )}

                {/* Divider */}

                <div className="my-4 border-t border-border" />

                {/* bottom section  */}

                <div className="flex items-center justify-between gap-4">
                    {/* Price */}

                    <div className="min-w-0">
                        <span className="text-xl font-bold text-primary">
                            ¥{room.price.toLocaleString()}
                        </span>

                        <span className="ml-1 text-sm text-muted">
                            / night
                        </span>
                    </div>

                    {/* View Details */}

                    <Link
                        to={`/room/${room.id}`}
                        className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-300 hover:gap-2.5"
                    >
                        View
                        <FiArrowRight />
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default RoomCard;