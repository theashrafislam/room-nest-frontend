import {
    FiSearch,
    FiHeart,
    FiCalendarCheck,
    FiArrowRight,
    FiCheckCircle,
} from "react-icons/fi";
import { useNavigate } from "react-router";

const steps = [
    {
        id: 1,
        number: "01",
        title: "Find Your Perfect Stay",
        description:
            "Explore beautiful rooms, apartments, and villas. Use search and filters to discover a stay that matches your needs.",
        icon: FiSearch,
        features: ["Easy room discovery", "Smart search & filters"],
    },
    {
        id: 2,
        number: "02",
        title: "Choose Your Favorite",
        description:
            "Compare prices, explore room details, check amenities, and find the perfect place for your next journey.",
        icon: FiHeart,
        features: ["Detailed room information", "Save your favorites"],
    },
    {
        id: 3,
        number: "03",
        title: "Book With Confidence",
        description:
            "Choose your dates, select the number of guests, and complete your booking through a simple and convenient process.",
        icon: FiCalendarCheck,
        features: ["Simple booking process", "Clear pricing details"],
    },
];

const HowItWorks = () => {
    const navigate = useNavigate();

    return (
        <section
            aria-labelledby="how-it-works-title"
            className="overflow-hidden bg-background py-16 sm:py-20 lg:py-24"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
                    <span className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-xs font-semibold tracking-wider text-primary sm:text-sm">
                        SIMPLE & CONVENIENT
                    </span>

                    <h2
                        id="how-it-works-title"
                        className="mt-4 text-2xl font-bold leading-tight tracking-tight text-text sm:text-3xl md:text-4xl lg:text-5xl"
                    >
                        Your Next Stay,
                        <span className="text-primary">
                            {" "}Made Simple
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
                        Finding your perfect place should be effortless.
                        Follow three simple steps and make your next trip
                        more comfortable with RoomNest.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3 lg:gap-8">
                    {steps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <article
                                key={step.id}
                                className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 sm:rounded-3xl sm:p-7 lg:p-8"
                            >
                                {/* Card Top */}
                                <div className="flex items-center justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white sm:h-14 sm:w-14">
                                        <Icon
                                            size={25}
                                            strokeWidth={1.8}
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <span className="text-3xl font-bold tracking-tight text-border transition-colors duration-300 group-hover:text-primary/20 sm:text-4xl">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Card Content */}
                                <h3 className="mt-6 text-lg font-bold leading-snug text-text sm:text-xl">
                                    {step.title}
                                </h3>

                                <p className="mt-3 flex-1 text-sm leading-7 text-body sm:text-base">
                                    {step.description}
                                </p>

                                {/* Features */}
                                <ul className="mt-5 space-y-3 border-t border-border pt-5">
                                    {step.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-2.5 text-sm text-muted"
                                        >
                                            <FiCheckCircle
                                                className="mt-0.5 shrink-0 text-primary"
                                                size={17}
                                                aria-hidden="true"
                                            />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Decorative Accent */}
                                <div className="absolute bottom-0 left-5 right-5 h-0.5 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100 sm:left-7 sm:right-7 lg:left-8 lg:right-8" />
                            </article>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-10 flex flex-col items-center gap-4 text-center sm:mt-12">
                    <p className="text-sm text-muted sm:text-base">
                        Your perfect stay is just a few clicks away.
                    </p>

                    <button
                        type="button"
                        onClick={() => navigate("/rooms")}
                        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-auto sm:min-w-48"
                    >
                        Explore All Rooms
                        <FiArrowRight
                            size={18}
                            aria-hidden="true"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;