import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {
  FiHeart,
  FiMapPin,
  FiUsers,
  FiArrowRight,
  FiWifi,
  FiHome,
  FiWind,
} from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const RoomCard = ({ room }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={room.image}
          alt={room.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Property Type */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-card px-3 py-1.5 text-xs font-semibold text-text shadow-sm">
            {room.type}
          </span>
        </div>

        {/* Favorite */}
        <button
          type="button"
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label={
            isFavorite ? "Remove from favorites" : "Add to favorites"
          }
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-card text-primary shadow-sm transition-all duration-300 hover:scale-105"
        >
          <FiHeart
            className={`text-lg transition-all duration-300 ${
              isFavorite ? "fill-secondary text-secondary" : ""
            }`}
          />
        </button>

        {/* Rating */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 shadow-sm">
          <FaStar className="text-sm text-secondary" />
          <span className="text-sm font-semibold text-text">
            {room.rating}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-sm text-muted">
          <FiMapPin className="text-primary" />
          <span>{room.location}</span>
        </div>

        {/* Title */}
        <Link to={`/rooms/${room.id}`}>
          <h3 className="mt-2 line-clamp-1 text-lg font-bold text-text transition-colors duration-300 group-hover:text-primary">
            {room.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
          {room.description}
        </p>

        {/* Room Info */}
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
          <span className="flex items-center gap-1.5">
            <FiHome className="text-primary" />
            {room.bedrooms} Beds
          </span>

          <span className="flex items-center gap-1.5">
            <FiUsers className="text-primary" />
            {room.guests} Guests
          </span>

          <span className="flex items-center gap-1.5">
            <FiWind className="text-primary" />
            AC
          </span>
        </div>

        {/* Amenities */}
        <div className="mt-4 flex flex-wrap gap-2">
          {room.amenities.slice(0, 3).map((amenity) => (
            <span
              key={amenity}
              className="flex items-center gap-1.5 rounded-lg bg-background px-2.5 py-1.5 text-xs font-medium text-muted"
            >
              {amenity === "WiFi" && <FiWifi />}
              {amenity}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-border" />

        {/* Bottom */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="text-xl font-bold text-primary">
              ৳{room.price.toLocaleString()}
            </span>

            <span className="ml-1 text-sm text-muted">/ night</span>
          </div>

          <Link
            to={`/rooms/${room.id}`}
            className="flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-300 hover:gap-2.5"
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