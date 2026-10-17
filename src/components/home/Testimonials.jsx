import { useCallback, useEffect, useRef, useState } from "react";
import {
    FiArrowLeft,
    FiArrowRight,
    FiMessageCircle,
    FiStar,
} from "react-icons/fi";

const testimonials = [
    {
        id: 1,
        name: "Sophia Bennett",
        location: "Tokyo, Japan",
        initials: "SB",
        rating: 5,
        date: "Sample review",
        review:
            "The apartment was beautiful, clean, and exactly what I needed for my trip. Finding a comfortable stay through RoomNest felt simple and convenient.",
    },
    {
        id: 2,
        name: "Daniel Carter",
        location: "Kyoto, Japan",
        initials: "DC",
        rating: 5,
        date: "Sample review",
        review:
            "I loved how easy it was to explore different properties and compare their amenities. The room details made choosing a place much easier.",
    },
    {
        id: 3,
        name: "Emily Wilson",
        location: "Osaka, Japan",
        initials: "EW",
        rating: 5,
        date: "Sample review",
        review:
            "The website feels modern and easy to navigate. I could browse different stays, check the details, and find an option that suited my travel plans.",
    },
    {
        id: 4,
        name: "Oliver Martin",
        location: "Sapporo, Japan",
        initials: "OM",
        rating: 4,
        date: "Sample review",
        review:
            "A clean and straightforward way to discover accommodation options. I especially liked the room photos, useful information, and easy browsing experience.",
    },
    {
        id: 5,
        name: "Ava Thompson",
        location: "Tokyo, Japan",
        initials: "AT",
        rating: 5,
        date: "Sample review",
        review:
            "The property cards made it easy to compare different places at a glance. The overall experience felt organized, polished, and user-friendly.",
    },
];

const Testimonials = () => {
    const scrollRef = useRef(null);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const updateScrollButtons = useCallback(() => {
        const element = scrollRef.current;

        if (!element) return;

        const maxScroll =
            element.scrollWidth - element.clientWidth;

        setCanScrollLeft(element.scrollLeft > 2);
        setCanScrollRight(
            maxScroll > 2 &&
            element.scrollLeft < maxScroll - 2
        );
    }, []);

    useEffect(() => {
        const element = scrollRef.current;

        if (!element) return;

        updateScrollButtons();

        element.addEventListener(
            "scroll",
            updateScrollButtons,
            { passive: true }
        );

        const resizeObserver = new ResizeObserver(() => {
            updateScrollButtons();
        });

        resizeObserver.observe(element);

        return () => {
            element.removeEventListener(
                "scroll",
                updateScrollButtons
            );

            resizeObserver.disconnect();
        };
    }, [updateScrollButtons]);

    const scrollReviews = (direction) => {
        const element = scrollRef.current;

        if (!element) return;

        const firstCard = element.querySelector(
            "[data-testimonial-card]"
        );

        if (!firstCard) return;

        const cardWidth =
            firstCard.getBoundingClientRect().width;

        const styles = window.getComputedStyle(element);
        const gap = parseFloat(styles.columnGap) || 0;

        element.scrollBy({
            left: direction * (cardWidth + gap),
            behavior: "smooth",
        });
    };

    return (
        <section
            aria-labelledby="testimonials-title"
            className="overflow-hidden bg-card py-16 sm:py-20 lg:py-24"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading and Controls */}
                <div className="mb-8 flex flex-col gap-6 sm:mb-10 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-xs font-semibold tracking-wider text-secondary-hover sm:text-sm">
                            <FiMessageCircle
                                size={15}
                                aria-hidden="true"
                            />
                            GUEST EXPERIENCES
                        </span>

                        <h2
                            id="testimonials-title"
                            className="mt-4 text-2xl font-bold leading-tight tracking-tight text-text sm:text-3xl md:text-4xl lg:text-5xl"
                        >
                            Stories That Inspire
                            <span className="text-primary">
                                {" "}Your Next Stay
                            </span>
                        </h2>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
                            Discover what makes finding your next
                            accommodation a more enjoyable experience
                            with RoomNest.
                        </p>
                    </div>

                    {/* Desktop and tablet controls */}
                    <div className="hidden shrink-0 items-center gap-3 sm:flex">
                        <button
                            type="button"
                            onClick={() => scrollReviews(-1)}
                            disabled={!canScrollLeft}
                            aria-label="Previous testimonials"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-text transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:bg-card disabled:hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        >
                            <FiArrowLeft size={19} />
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollReviews(1)}
                            disabled={!canScrollRight}
                            aria-label="Next testimonials"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-text transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:bg-card disabled:hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        >
                            <FiArrowRight size={19} />
                        </button>
                    </div>
                </div>

                {/* Review Cards */}
                <div
                    ref={scrollRef}
                    className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6"
                    aria-label="Guest testimonials"
                >
                    {testimonials.map((testimonial) => (
                        <article
                            key={testimonial.id}
                            data-testimonial-card
                            className="flex h-auto min-h-[310px] w-[85%] shrink-0 snap-start flex-col rounded-2xl border border-border bg-background p-5 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 sm:w-[calc((100%-1.5rem)/2)] sm:rounded-3xl sm:p-6 lg:w-[calc((100%-3rem)/3)] lg:p-7"
                        >
                            {/* Stars and Label */}
                            <div className="flex items-center justify-between gap-3">
                                <div
                                    className="flex items-center gap-1 text-secondary"
                                    aria-label={`${testimonial.rating} out of 5 stars`}
                                >
                                    {Array.from(
                                        { length: 5 },
                                        (_, index) => (
                                            <FiStar
                                                key={index}
                                                size={16}
                                                aria-hidden="true"
                                                className={
                                                    index < testimonial.rating
                                                        ? "fill-current"
                                                        : "text-border"
                                                }
                                            />
                                        )
                                    )}
                                </div>

                                <span className="rounded-full bg-primary/5 px-2.5 py-1 text-[10px] font-semibold text-primary sm:text-xs">
                                    Demo review
                                </span>
                            </div>

                            {/* Quote */}
                            <blockquote className="mt-5 flex-1 text-sm leading-7 text-body sm:text-base">
                                “{testimonial.review}”
                            </blockquote>

                            {/* Reviewer */}
                            <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                                <div
                                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary"
                                    aria-hidden="true"
                                >
                                    {testimonial.initials}
                                </div>

                                <div className="min-w-0 flex-1">
                                    <h3 className="truncate text-sm font-bold text-text sm:text-base">
                                        {testimonial.name}
                                    </h3>

                                    <p className="mt-1 truncate text-xs text-muted sm:text-sm">
                                        {testimonial.location}
                                    </p>
                                </div>

                                <span className="shrink-0 text-[10px] text-muted sm:text-xs">
                                    {testimonial.date}
                                </span>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Mobile Controls */}
                <div className="mt-4 flex items-center justify-between gap-4 sm:hidden">
                    <p className="text-xs text-muted">
                        Swipe to explore reviews
                    </p>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => scrollReviews(-1)}
                            disabled={!canScrollLeft}
                            aria-label="Previous testimonials"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-text disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        >
                            <FiArrowLeft size={18} />
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollReviews(1)}
                            disabled={!canScrollRight}
                            aria-label="Next testimonials"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-text disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        >
                            <FiArrowRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Demo content notice */}
                <p className="mt-8 text-center text-xs leading-6 text-muted">
                    The testimonials above are sample content for
                    demonstration purposes, not verified customer reviews.
                </p>
            </div>
        </section>
    );
};

export default Testimonials;