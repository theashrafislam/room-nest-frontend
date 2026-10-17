import {
    FiShield,
    FiHeart,
    FiAward,
    FiHeadphones,
    FiCheckCircle,
    FiArrowRight,
} from "react-icons/fi";
import { useNavigate } from "react-router";

const benefits = [
    {
        id: 1,
        icon: FiShield,
        title: "Trusted & Secure",
        description:
            "Enjoy peace of mind with a reliable booking experience designed to keep your stay safe and comfortable.",
        iconStyle: "bg-primary/10 text-primary",
    },
    {
        id: 2,
        icon: FiHeart,
        title: "Stays You'll Love",
        description:
            "Explore carefully presented rooms and welcoming spaces that help make every trip feel special.",
        iconStyle: "bg-secondary/15 text-secondary-hover",
    },
    {
        id: 3,
        icon: FiAward,
        title: "Quality Comes First",
        description:
            "Find comfortable accommodation options with useful details to help you choose the right stay.",
        iconStyle: "bg-primary/10 text-primary",
    },
    {
        id: 4,
        icon: FiHeadphones,
        title: "Here to Help",
        description:
            "Get the information you need to navigate your booking journey with greater confidence.",
        iconStyle: "bg-secondary/15 text-secondary-hover",
    },
];

const highlights = [
    "A simple room discovery experience",
    "Room details to guide your decision",
    "Options for different travel needs",
];

const WhyChooseRoomNest = () => {
    const navigate = useNavigate();

    return (
        <section
            aria-labelledby="why-choose-roomnest-heading"
            className="overflow-hidden bg-background py-14 sm:py-16 lg:py-24"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section Heading */}
                <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary sm:text-sm">
                        <span className="h-2 w-2 rounded-full bg-secondary" />
                        THE ROOMNEST DIFFERENCE
                    </span>

                    <h2
                        id="why-choose-roomnest-heading"
                        className="mt-4 text-2xl font-bold leading-tight tracking-tight text-text sm:text-3xl lg:text-4xl"
                    >
                        Why Choose{" "}
                        <span className="text-primary">
                            RoomNest?
                        </span>
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
                        Finding your next stay should feel simple.
                        We make it easier to explore rooms, compare
                        your options, and plan a stay that suits you.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">

                    {/* Left: Benefits */}
                    <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:gap-5">
                        {benefits.map((benefit) => {
                            const Icon = benefit.icon;

                            return (
                                <article
                                    key={benefit.id}
                                    className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md sm:p-6"
                                >
                                    <div
                                        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14 ${benefit.iconStyle}`}
                                    >
                                        <Icon
                                            size={24}
                                            strokeWidth={1.8}
                                        />
                                    </div>

                                    <h3 className="text-base font-bold leading-6 text-text sm:text-lg">
                                        {benefit.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-muted">
                                        {benefit.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>

                    {/* Right: Brand Story */}
                    <div className="min-w-0 lg:pl-2">
                        <div className="relative overflow-hidden rounded-2xl bg-card p-5 sm:p-8 lg:p-9">

                            {/* Decorative Elements */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/8"
                            />

                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -bottom-16 -left-12 h-48 w-48 rounded-full bg-secondary/10"
                            />

                            <div className="relative">
                                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                                    <FiHeart
                                        size={17}
                                        className="fill-primary/10"
                                    />
                                    A BETTER WAY TO STAY
                                </span>

                                <h3 className="mt-4 max-w-lg text-2xl font-bold leading-tight tracking-tight text-text sm:text-3xl lg:text-4xl">
                                    Your comfort.
                                    <br />
                                    Your journey.
                                    <br />
                                    <span className="text-primary">
                                        Your RoomNest.
                                    </span>
                                </h3>

                                <p className="mt-4 max-w-lg text-sm leading-7 text-muted sm:text-base">
                                    Whether you're planning a city
                                    adventure or a relaxing getaway,
                                    RoomNest helps you discover
                                    accommodation options in one place.
                                    Explore the details and find a stay
                                    that feels right for your journey.
                                </p>

                                {/* Key Highlights */}
                                <ul className="mt-6 space-y-3 sm:mt-7">
                                    {highlights.map((highlight) => (
                                        <li
                                            key={highlight}
                                            className="flex items-start gap-3"
                                        >
                                            <FiCheckCircle
                                                size={19}
                                                className="mt-0.5 shrink-0 text-primary"
                                            />

                                            <span className="text-sm font-medium leading-6 text-text sm:text-base">
                                                {highlight}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <button
                                    type="button"
                                    onClick={() => navigate("/rooms")}
                                    className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 min-[480px]:w-auto sm:mt-8"
                                >
                                    Explore Our Rooms
                                    <FiArrowRight
                                        size={18}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseRoomNest;