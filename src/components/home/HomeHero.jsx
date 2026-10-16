
import { useNavigate } from "react-router";
import {
    FiArrowRight,
    FiArrowUpRight,
    FiHeart,
    FiMapPin,
    FiStar,
} from "react-icons/fi";

const HomeHero = () => {
    const navigate = useNavigate();

    return (
        <section className="overflow-hidden bg-background">
            <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
                <div className="grid min-w-0 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">

                    {/* Hero Content */}
                    <div className="order-2 min-w-0 lg:order-1">
                        {/* Eyebrow */}
                        <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-card px-3 py-2 shadow-sm sm:mb-6 sm:px-4">
                            <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />

                            <span className="text-xs font-medium text-muted sm:text-sm">
                                Find your perfect stay
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="max-w-xl text-4xl font-bold leading-[1.12] tracking-tight text-text sm:text-5xl lg:text-5xl xl:text-6xl">
                            Find your place.
                            <span className="mt-1 block text-primary">
                                Feel at home.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-5 max-w-lg text-sm leading-7 text-muted sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
                            Discover beautiful spaces with RoomNest, from
                            modern city apartments to cozy getaways. Find a
                            stay that feels just right for your next journey.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row sm:mt-8">
                            <button
                                type="button"
                                onClick={() => navigate("/rooms")}
                                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 min-[420px]:w-auto sm:px-6"
                            >
                                Explore Rooms
                                <FiArrowRight size={18} />
                            </button>

                            <button
                                type="button"
                                onClick={() => navigate("/about")}
                                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-text transition-colors duration-300 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 min-[420px]:w-auto sm:px-6"
                            >
                                Learn More
                                <FiArrowUpRight size={17} />
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-8 grid grid-cols-1 gap-4 border-t border-border pt-6 min-[420px]:grid-cols-2 sm:mt-9 sm:gap-5">
                            <div className="flex min-w-0 items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-11 sm:w-11">
                                    <FiMapPin size={19} />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-sm font-semibold text-text">
                                        Great locations
                                    </p>
                                    <p className="mt-1 text-xs leading-5 text-muted">
                                        Find your ideal area
                                    </p>
                                </div>
                            </div>

                            <div className="flex min-w-0 items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary sm:h-11 sm:w-11">
                                    <FiStar size={19} />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-sm font-semibold text-text">
                                        Memorable stays
                                    </p>
                                    <p className="mt-1 text-xs leading-5 text-muted">
                                        Comfort meets style
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="order-1 min-w-0 lg:order-2">
                        <div className="relative mx-auto w-full max-w-xl px-2 pb-5 sm:px-4 sm:pb-6 lg:px-3">
                            {/* Main Image */}
                            <div className="relative isolate aspect-[4/3.5] overflow-hidden rounded-2xl bg-border sm:aspect-[5/4] sm:rounded-3xl lg:aspect-[4/4.5]">
                                <img
                                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
                                    alt="Elegant modern living room in a premium rental home"
                                    fetchPriority="high"
                                    decoding="async"
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                                />

                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-text/70 via-text/10 to-transparent" />

                                {/* Image Caption */}
                                <div className="absolute inset-x-0 bottom-0 p-4 text-white mb-8 md:mb-0  sm:p-6 lg:p-7">
                                    <span className="inline-flex items-center rounded-full bg-card/95 px-3 py-1.5 text-xs font-semibold text-primary">
                                        Discover RoomNest
                                    </span>

                                    <h2 className="mt-2 max-w-xs text-lg font-bold leading-snug sm:mt-3 sm:text-2xl lg:text-3xl">
                                        A place to call your own.
                                    </h2>

                                    <p className="mt-1.5 max-w-xs text-xs leading-5 text-white/90 sm:mt-2 sm:text-sm sm:leading-6">
                                        Thoughtful spaces for every journey.
                                    </p>
                                </div>
                            </div>

                            {/* Floating Favorite Card */}
                            <div className="absolute left-0 top-5 flex max-w-[calc(100%-1rem)] items-center gap-2.5 rounded-xl border border-border bg-card p-2.5 shadow-md sm:-left-1 sm:top-10 sm:gap-3 sm:rounded-2xl sm:p-4">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-11 sm:w-11">
                                    <FiHeart size={19} />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-xs font-semibold text-text sm:text-sm">
                                        Find your favorite
                                    </p>
                                    <p className="mt-1 text-[11px] leading-4 text-muted sm:text-xs">
                                        Your next stay awaits
                                    </p>
                                </div>
                            </div>

                            {/* Floating Explore Card */}
                            <button
                                type="button"
                                onClick={() => navigate("/rooms")}
                                aria-label="Explore all RoomNest rooms"
                                className="absolute -bottom-0 right-0 flex max-w-[calc(100%-1rem)] items-center gap-2.5 rounded-xl border border-border bg-card p-2.5 text-left shadow-md transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:right-1 sm:gap-3 sm:rounded-2xl sm:p-4"
                            >
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary sm:h-11 sm:w-11">
                                    <FiStar size={19} />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-xs font-semibold text-text sm:text-sm">
                                        Explore our rooms
                                    </p>
                                    <p className="mt-1 text-[11px] leading-4 text-muted sm:text-xs">
                                        Find your next favorite
                                    </p>
                                </div>

                                <FiArrowUpRight
                                    className="shrink-0 text-primary"
                                    size={18}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;