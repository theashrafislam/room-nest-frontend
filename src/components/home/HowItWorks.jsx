import {
    FiSearch,
    FiHeart,
    FiCalendar,
    FiArrowRight,
    FiCheckCircle,
} from 'react-icons/fi';
import { useNavigate } from "react-router";

const steps = [
    {
        number: '01',
        icon: FiSearch,
        title: 'Find Your Perfect Stay',
        description: 'Explore rooms that match your destination and budget.',
    },
    {
        number: '02',
        icon: FiHeart,
        title: 'Choose Your Favorite',
        description: 'Compare your favorite rooms and find the right fit.',
    },
    {
        number: '03',
        icon: FiCalendar,
        title: 'Book With Confidence',
        description: 'Choose your dates and prepare for a comfortable stay.',
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
                        const StepIcon = step.icon;

                        return (
                            <div key={step.number}>
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                    <StepIcon className="h-6 w-6" />
                                </div>

                                <h3 className="mt-5 text-lg font-semibold text-text">
                                    {step.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-body">
                                    {step.description}
                                </p>
                            </div>
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