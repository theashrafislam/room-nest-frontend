import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
    FiArrowLeft,
    FiArrowRight,
    FiArrowUpRight,
} from "react-icons/fi";

const categories = [
    {
        id: 1,
        name: "Apartments",
        description: "Modern city living.",
        type: "Apartment",
        image:
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80",
        imageAlt: "Modern apartment interior",
    },
    {
        id: 2,
        name: "Houses",
        description: "Comfortable spaces to call home.",
        type: "House",
        image:
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=700&q=80",
        imageAlt: "Contemporary house exterior",
    },
    {
        id: 3,
        name: "Villas",
        description: "Room for a special getaway.",
        type: "Villa",
        image:
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=700&q=80",
        imageAlt: "Luxury villa with swimming pool",
    },
    {
        id: 4,
        name: "Studios",
        description: "Smart, stylish spaces.",
        type: "Studio",
        image:
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=700&q=80",
        imageAlt: "Comfortable studio accommodation",
    },
    {
        id: 5,
        name: "hello",
        description: "Smart, stylish spaces.",
        type: "Studio",
        image:
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=700&q=80",
        imageAlt: "Comfortable studio accommodation",
    },
];

const ExploreByCategory = () => {
    const navigate = useNavigate();
    const scrollRef = useRef(null);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateScrollButtons = () => {
        const element = scrollRef.current;

        if (!element) return;

        setCanScrollLeft(element.scrollLeft > 2);

        setCanScrollRight(
            element.scrollLeft + element.clientWidth <
                element.scrollWidth - 2
        );
    };

    useEffect(() => {
        const element = scrollRef.current;

        if (!element) return;

        updateScrollButtons();

        element.addEventListener("scroll", updateScrollButtons, {
            passive: true,
        });

        const resizeObserver = new ResizeObserver(updateScrollButtons);
        resizeObserver.observe(element);

        return () => {
            element.removeEventListener("scroll", updateScrollButtons);
            resizeObserver.disconnect();
        };
    }, []);

    const scrollCategories = (direction) => {
        const element = scrollRef.current;

        if (!element) return;

        const firstCard = element.querySelector("[data-category-card]");
        const cardWidth = firstCard?.getBoundingClientRect().width ?? 240;

        const gap = 20;

        element.scrollBy({
            left: direction * (cardWidth + gap),
            behavior: "smooth",
        });
    };

    const handleCategoryClick = (type) => {
        navigate(`/rooms?type=${encodeURIComponent(type)}`);
    };

    return (
        <section
            aria-labelledby="explore-category-heading"
            className="overflow-hidden bg-background py-12 sm:py-14 lg:py-16"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
                    <div className="min-w-0">
                        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-primary sm:text-sm">
                            <span className="h-2 w-2 rounded-full bg-secondary" />
                            Find your kind of stay
                        </span>

                        <h2
                            id="explore-category-heading"
                            className="mt-3 text-2xl font-bold tracking-tight text-text sm:text-3xl"
                        >
                            Explore by{" "}
                            <span className="text-primary">Category</span>
                        </h2>

                        <p className="mt-2 max-w-lg text-sm leading-6 text-muted sm:text-base">
                            Discover a stay that suits your style.
                        </p>
                    </div>

                    {/* Desktop View All */}
                    <button
                        type="button"
                        onClick={() => navigate("/rooms")}
                        className="hidden shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary/5 sm:inline-flex"
                    >
                        View all
                        <FiArrowUpRight size={17} />
                    </button>
                </div>

                {/* Category Carousel */}
                <div className="relative">

                    {/* Left / Right Controls */}
                    <div className="mb-4 flex items-center justify-end gap-2">
                        <button
                            type="button"
                            onClick={() => scrollCategories(-1)}
                            disabled={!canScrollLeft}
                            aria-label="Scroll to previous categories"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-text shadow-sm transition-all duration-300 hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-border disabled:hover:text-text"
                        >
                            <FiArrowLeft size={18} />
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollCategories(1)}
                            disabled={!canScrollRight}
                            aria-label="Scroll to next categories"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-text shadow-sm transition-all duration-300 hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-border disabled:hover:text-text"
                        >
                            <FiArrowRight size={18} />
                        </button>
                    </div>

                    {/* Scrollable Track */}
                    <div
                        ref={scrollRef}
                        className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 sm:gap-5"
                        style={{
                            scrollbarWidth: "none",
                            WebkitOverflowScrolling: "touch",
                        }}
                    >
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                data-category-card
                                type="button"
                                onClick={() =>
                                    handleCategoryClick(category.type)
                                }
                                aria-label={`Explore ${category.name}`}
                                className="group w-[76%] min-w-0 shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 min-[420px]:w-[62%] sm:w-[44%] md:w-[32%] lg:w-[calc((100%-3.75rem)/4)]"
                            >
                                {/* Image */}
                                <div className="relative aspect-[5/3.5] overflow-hidden bg-border">
                                    <img
                                        src={category.image}
                                        alt={category.imageAlt}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-text/40 via-transparent to-transparent" />

                                    <span className="absolute bottom-3 left-3 rounded-full bg-card/95 px-3 py-1.5 text-xs font-semibold text-primary backdrop-blur-sm">
                                        {category.name}
                                    </span>

                                    <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-card text-primary shadow-sm transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                                        <FiArrowUpRight size={16} />
                                    </span>
                                </div>

                                {/* Compact Card Content */}
                                <div className="p-3.5 sm:p-4">
                                    <h3 className="text-sm font-semibold text-text transition-colors duration-300 group-hover:text-primary sm:text-base">
                                        {category.name}
                                    </h3>

                                    <p className="mt-1 text-xs leading-5 text-muted sm:text-sm">
                                        {category.description}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Mobile View All */}
                <div className="mt-3 flex justify-center sm:hidden">
                    <button
                        type="button"
                        onClick={() => navigate("/rooms")}
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors duration-300 hover:border-primary"
                    >
                        View all rooms
                        <FiArrowRight size={17} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ExploreByCategory;