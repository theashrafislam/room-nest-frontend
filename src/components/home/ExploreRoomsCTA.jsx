
import { useNavigate } from "react-router";
import {
    FiArrowRight,
    FiArrowUpRight,
    FiCheckCircle,
    FiCompass,
    FiHeart,
    FiMapPin,
    FiShield,
    FiStar,
} from "react-icons/fi";

const ExploreRoomsCTA = () => {
    const navigate = useNavigate();

    const highlights = [
        { icon: FiCheckCircle, label: "Handpicked stays" },
        { icon: FiShield, label: "Secure booking" },
        { icon: FiHeart, label: "Comfort you deserve" },
    ];

    return (
        <section className="w-full overflow-hidden bg-background px-3 py-8 min-[375px]:px-4 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
            <div className="mx-auto w-full max-w-7xl">
                <div className="relative isolate overflow-hidden rounded-2xl bg-primary shadow-xl sm:rounded-3xl lg:rounded-[2rem]">
                    {/* Decorative elements */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full border border-white/10 sm:h-72 sm:w-72"
                    />

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-24 -left-20 h-48 w-48 rounded-full border border-white/10 sm:h-72 sm:w-72"
                    />

                    <div className="relative grid min-w-0 grid-cols-1 items-center gap-8 p-4 min-[375px]:p-5 sm:gap-10 sm:p-8 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:p-12 xl:p-16">
                        {/* Text content */}
                        <div className="min-w-0 text-center lg:text-left">
                            <div className="mb-4 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[10px] font-semibold tracking-[0.08em] text-white min-[375px]:text-xs sm:mb-5 sm:px-4 sm:text-sm">
                                <FiCompass
                                    size={16}
                                    className="shrink-0 text-secondary"
                                />
                                <span>YOUR NEXT STAY STARTS HERE</span>
                            </div>

                            <h2 className="mx-auto max-w-xl break-words text-[clamp(1.8rem,7.5vw,3.75rem)] font-bold leading-[1.15] tracking-tight text-white lg:mx-0">
                                Ready to Find Your
                                <span className="mt-1 block text-secondary">
                                    Perfect Stay?
                                </span>
                            </h2>

                            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/80 min-[375px]:text-[15px] min-[375px]:leading-7 sm:mt-5 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg">
                                Your next favorite place is waiting. Discover
                                comfortable rooms, beautiful spaces, and stays
                                that make every trip feel special with RoomNest.
                            </p>

                            {/* Benefits */}
                            <div className="mx-auto mt-5 flex max-w-md flex-col items-start gap-3 min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:items-center min-[480px]:justify-center min-[480px]:gap-x-4 min-[480px]:gap-y-3 lg:mx-0 lg:justify-start">
                                {highlights.map(({ icon: Icon, label }) => (
                                    <div
                                        key={label}
                                        className="flex min-w-0 items-center gap-2 text-left text-xs font-medium text-white/90 min-[375px]:text-sm"
                                    >
                                        <Icon
                                            size={16}
                                            className="shrink-0 text-secondary"
                                        />
                                        <span>{label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="mt-7 flex w-full flex-col gap-3 min-[420px]:flex-row min-[420px]:items-stretch min-[420px]:justify-center sm:mt-8 sm:gap-4 lg:justify-start">
                                <button
                                    type="button"
                                    onClick={() => navigate("/rooms")}
                                    className="group inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-xl bg-card px-4 py-3 text-sm font-semibold text-primary shadow-sm transition-colors duration-300 hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary min-[420px]:w-auto min-[420px]:flex-1 min-[420px]:px-4 sm:min-h-14 sm:flex-none sm:px-6 sm:text-base"
                                >
                                    <span>Explore All Rooms</span>
                                    <FiArrowRight
                                        size={18}
                                        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </button>

                                <button
                                    type="button"
                                    onClick={() => navigate("/about")}
                                    className="group inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary min-[420px]:w-auto min-[420px]:flex-1 min-[420px]:px-4 sm:min-h-14 sm:flex-none sm:px-6 sm:text-base"
                                >
                                    <span>Learn More</span>
                                    <FiArrowUpRight
                                        size={18}
                                        className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </button>
                            </div>

                            <p className="mt-4 text-xs leading-5 text-white/60 sm:mt-5 sm:text-sm">
                                Find your space. Make yourself at home.
                            </p>
                        </div>

                        {/* Visual card */}
                        <div className="relative mx-auto w-full min-w-0 max-w-lg lg:max-w-none">
                            <div className="rounded-2xl border border-white/20 bg-white/10 p-2.5 shadow-2xl backdrop-blur-sm min-[375px]:p-3 sm:rounded-3xl sm:p-4">
                                <div className="min-w-0 rounded-xl bg-card p-3 min-[375px]:p-4 sm:rounded-2xl sm:p-5">
                                    {/* Card heading */}
                                    <div className="flex min-w-0 items-center justify-between gap-3">
                                        <div className="min-w-0">
                                            <p className="text-[10px] font-medium tracking-wide text-muted min-[375px]:text-xs">
                                                YOUR NEXT ADVENTURE
                                            </p>

                                            <h3 className="mt-1 break-words text-base font-bold leading-snug text-text min-[375px]:text-lg sm:text-xl">
                                                Find your happy place
                                            </h3>
                                        </div>

                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-background text-primary min-[375px]:h-10 min-[375px]:w-10 sm:h-12 sm:w-12">
                                            <FiCompass size={21} />
                                        </div>
                                    </div>

                                    {/* Image */}
                                    <div className="relative mt-4 overflow-hidden rounded-xl sm:mt-5 sm:rounded-2xl">
                                        <img
                                            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85"
                                            alt="Elegant modern living room with a comfortable sofa"
                                            loading="lazy"
                                            className="h-44 w-full object-cover min-[375px]:h-48 sm:h-56 lg:h-56 xl:h-64"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-text/70 via-transparent to-transparent" />

                                        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 min-[375px]:p-4">
                                            <div className="min-w-0">
                                                <p className="text-[9px] font-medium tracking-wide text-white/80 min-[375px]:text-[10px]">
                                                    MADE FOR YOUR COMFORT
                                                </p>

                                                <p className="mt-1 break-words text-sm font-bold leading-snug text-white min-[375px]:text-base sm:text-xl">
                                                    Feel at home, anywhere.
                                                </p>
                                            </div>

                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-card text-primary shadow-md min-[375px]:h-10 min-[375px]:w-10">
                                                <FiArrowUpRight size={20} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom details */}
                                    <div className="mt-4 flex min-w-0 flex-col gap-3 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between sm:mt-5">
                                        <div className="flex min-w-0 items-center gap-2.5">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-background text-primary min-[375px]:h-10 min-[375px]:w-10">
                                                <FiMapPin size={18} />
                                            </div>

                                            <div className="min-w-0">
                                                <p className="break-words text-xs font-semibold text-text min-[375px]:text-sm">
                                                    Your next destination
                                                </p>
                                                <p className="mt-0.5 break-words text-[11px] leading-4 text-muted min-[375px]:text-xs">
                                                    A stay worth remembering
                                                </p>
                                            </div>
                                        </div>

                                        <div className="inline-flex w-fit max-w-full items-center gap-1.5 self-start rounded-lg bg-background px-2.5 py-2 min-[420px]:shrink-0 min-[420px]:self-auto min-[375px]:px-3">
                                            <FiStar
                                                className="shrink-0 fill-secondary text-secondary"
                                                size={15}
                                            />
                                            <span className="text-[10px] font-semibold text-text min-[375px]:text-xs">
                                                Find your favorite
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating accent: hidden on small screens */}
                            <div className="absolute -right-3 top-7 hidden items-center gap-2 rounded-xl border border-border bg-card px-3 py-2.5 shadow-lg sm:flex lg:-right-4 lg:top-8">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-background text-primary">
                                    <FiHeart size={17} />
                                </span>

                                <div>
                                    <p className="text-xs font-semibold text-text">
                                        Your kind of stay
                                    </p>
                                    <p className="mt-0.5 text-[11px] text-muted">
                                        Find it with RoomNest
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExploreRoomsCTA;