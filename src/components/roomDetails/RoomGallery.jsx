import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiHeart } from "react-icons/fi";

const RoomGallery = ({ room }) => {
    const [activeImage, setActiveImage] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);

    const images = [
        room.image,
        room.image,
        room.image,
        room.image,
    ];

    const nextImage = () => {
        setActiveImage((prev) => (prev + 1) % images.length);
    };

    const previousImage = () => {
        setActiveImage(
            (prev) => (prev - 1 + images.length) % images.length
        );
    };

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div className="group relative overflow-hidden rounded-2xl bg-card">
                <img
                    src={images[activeImage]}
                    alt={room.title}
                    className="h-[320px] w-full object-cover transition-transform duration-500 sm:h-[450px] lg:h-[520px]"
                />

                {/* Favorite */}
                <button
                    type="button"
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-card/90 text-text shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:text-danger"
                    aria-label="Add to favorites"
                >
                    <FiHeart
                        className={isFavorite ? "fill-current text-danger" : ""}
                    />
                </button>

                {/* Previous */}
                <button
                    type="button"
                    onClick={previousImage}
                    className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-text shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:text-primary"
                    aria-label="Previous image"
                >
                    <FiChevronLeft />
                </button>

                {/* Next */}
                <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-text shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:text-primary"
                    aria-label="Next image"
                >
                    <FiChevronRight />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 rounded-full bg-text/80 px-3 py-1.5 text-xs font-medium text-white">
                    {activeImage + 1} / {images.length}
                </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
                {images.map((image, index) => (
                    <button
                        key={`${image}-${index}`}
                        type="button"
                        onClick={() => setActiveImage(index)}
                        className={`overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                            activeImage === index
                                ? "border-primary"
                                : "border-transparent"
                        }`}
                    >
                        <img
                            src={image}
                            alt={`${room.title} ${index + 1}`}
                            className="h-20 w-full object-cover transition-transform duration-300 hover:scale-105 sm:h-24"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default RoomGallery;