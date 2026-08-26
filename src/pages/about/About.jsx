import { Link } from "react-router";
import {
    FiArrowRight,
    FiCheckCircle,
    FiHome,
    FiHeart,
    FiShield,
    FiUsers,
    FiStar,
    FiGlobe,
    FiSearch,
    FiCalendar,
    FiMessageCircle,
} from "react-icons/fi";

import Button from "../../components/shared/Button";

const About = () => {
    return (
        <main className="min-h-screen bg-background text-text">

            {/* HERO SECTION */}


            <section className="bg-background">
                <div className="mx-auto max-w-7xl px-4 lg:px-0 py-14 sm:py-20 lg:py-24">
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                        {/* Content */}

                        <div className="max-w-xl">
                            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-primary shadow-sm">
                                <FiHome size={16} />

                                About RoomNest
                            </span>

                            <h1 className="mt-6 text-3xl font-bold leading-tight text-text sm:text-4xl lg:text-5xl xl:text-6xl">
                                A better way to find your{" "}
                                <span className="text-primary">perfect stay.</span>
                            </h1>

                            <p className="mt-6 text-sm font-medium leading-7 text-muted sm:text-base lg:text-lg">
                                RoomNest makes it simple to discover comfortable places,
                                connect with trusted hosts, and create memorable stays wherever
                                your journey takes you.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <Link to="/rooms">
                                    <Button
                                        variant="primary"
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2"
                                    >
                                        Explore Rooms

                                        <FiArrowRight className="inline" size={17} />
                                    </Button>
                                </Link>

                                <Link to="/contact">
                                    <Button
                                        variant="outline"
                                        className="w-full sm:w-auto"
                                    >
                                        Contact Us
                                    </Button>
                                </Link>
                            </div>

                            {/* Trust */}

                            <div className="mt-9 flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-primary text-xs font-bold text-white">
                                        R
                                    </div>

                                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-secondary text-xs font-bold text-white">
                                        N
                                    </div>

                                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-slate-400 text-xs font-bold text-white">
                                        +
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center gap-1 text-secondary">
                                        <FiStar size={14} fill="currentColor" />
                                        <FiStar size={14} fill="currentColor" />
                                        <FiStar size={14} fill="currentColor" />
                                        <FiStar size={14} fill="currentColor" />
                                        <FiStar size={14} fill="currentColor" />
                                    </div>

                                    <p className="mt-1 text-xs font-medium text-muted">
                                        Trusted by guests and hosts
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Visual */}

                        <div className="relative">
                            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-sm">
                                <div className="overflow-hidden rounded-xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                                        alt="Beautiful modern RoomNest accommodation"
                                        className="h-[360px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[460px]"
                                    />
                                </div>
                            </div>

                            {/* Floating card */}

                            <div className="absolute -bottom-5 left-4 rounded-2xl border border-border bg-card p-4 shadow-lg sm:left-8 sm:p-5">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                                        <FiHeart
                                            size={20}
                                            fill="currentColor"
                                        />
                                    </div>

                                    <div>
                                        <p className="text-sm font-bold text-text">
                                            Made for memorable stays
                                        </p>

                                        <p className="mt-1 text-xs font-medium text-muted">
                                            Comfort you can count on
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* STATS */}


            <section className="border-y border-border bg-card">
                <div className="mx-auto max-w-7xl px-4 lg:px-0 py-10 lg:py-12">
                    <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                        <Stat
                            value="10K+"
                            label="Happy Guests"
                        />

                        <Stat
                            value="2K+"
                            label="Available Rooms"
                        />

                        <Stat
                            value="500+"
                            label="Trusted Hosts"
                        />

                        <Stat
                            value="4.9/5"
                            label="Guest Rating"
                        />
                    </div>
                </div>
            </section>


            {/* OUR STORY */}


            <section className="bg-background">
                <div className="mx-auto max-w-7xl px-4 lg:px-0 py-16 lg:py-20">
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                        {/* Image */}

                        <div className="relative order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=85"
                                    alt="Modern living room"
                                    className="h-56 w-full rounded-2xl object-cover sm:h-72"
                                />

                                <img
                                    src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=85"
                                    alt="Elegant bedroom"
                                    className="mt-8 h-56 w-full rounded-2xl object-cover sm:h-72"
                                />
                            </div>
                        </div>

                        {/* Content */}

                        <div className="order-1 lg:order-2">
                            <span className="text-sm font-bold uppercase tracking-wider text-primary">
                                Our Story
                            </span>

                            <h2 className="mt-3 text-2xl font-bold leading-tight text-text sm:text-3xl lg:text-4xl">
                                More than a place to stay.
                            </h2>

                            <p className="mt-5 text-sm font-medium leading-7 text-muted sm:text-base">
                                We believe finding a place to stay should feel exciting, not
                                complicated. RoomNest was created to bring travelers and
                                property owners together through a simple, reliable, and
                                enjoyable booking experience.
                            </p>

                            <p className="mt-4 text-sm font-medium leading-7 text-muted sm:text-base">
                                From cozy rooms to beautiful homes, we help guests discover
                                spaces that feel right for their journey while giving hosts the
                                tools they need to share their properties with confidence.
                            </p>

                            <div className="mt-7 space-y-4">
                                <FeatureItem text="Carefully presented properties" />

                                <FeatureItem text="Simple and secure booking experience" />

                                <FeatureItem text="Trusted guests and responsible hosts" />

                                <FeatureItem text="Dedicated customer support" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* WHY ROOMNEST */}


            <section className="border-y border-border bg-card">
                <div className="mx-auto max-w-7xl px-4 lg:px-0 py-16 lg:py-20">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="text-sm font-bold uppercase tracking-wider text-primary">
                            Why RoomNest
                        </span>

                        <h2 className="mt-3 text-2xl font-bold text-text sm:text-3xl lg:text-4xl">
                            Designed around your experience
                        </h2>

                        <p className="mt-4 text-sm font-medium leading-7 text-muted sm:text-base">
                            Everything we build is focused on making accommodation discovery
                            and booking easier, safer, and more enjoyable.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        <ValueCard
                            icon={<FiSearch />}
                            title="Easy Discovery"
                            description="Find the right room quickly with intuitive search and useful filters."
                        />

                        <ValueCard
                            icon={<FiShield />}
                            title="Secure Booking"
                            description="Your booking and payment experience is designed with security in mind."
                        />

                        <ValueCard
                            icon={<FiHeart />}
                            title="Comfort First"
                            description="Discover spaces selected to help make every stay comfortable."
                        />

                        <ValueCard
                            icon={<FiUsers />}
                            title="Trusted Community"
                            description="Connect with guests and hosts through a reliable platform."
                        />
                    </div>
                </div>
            </section>

            {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

            <section className="bg-background">
                <div className="mx-auto max-w-7xl px-4 lg:px-0 py-16 lg:py-20">
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                        {/* Content */}

                        <div>
                            <span className="text-sm font-bold uppercase tracking-wider text-primary">
                                How It Works
                            </span>

                            <h2 className="mt-3 text-2xl font-bold leading-tight text-text sm:text-3xl lg:text-4xl">
                                Your next stay is just a few steps away.
                            </h2>

                            <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-muted sm:text-base">
                                RoomNest keeps the entire journey simple—from discovering a
                                property to completing your reservation.
                            </p>

                            <div className="mt-8 space-y-7">
                                <Step
                                    number="01"
                                    icon={<FiSearch />}
                                    title="Find your stay"
                                    description="Search through rooms and properties based on your destination, dates, and preferences."
                                />

                                <Step
                                    number="02"
                                    icon={<FiCalendar />}
                                    title="Choose your dates"
                                    description="Check availability and select the dates that work best for your trip."
                                />

                                <Step
                                    number="03"
                                    icon={<FiCheckCircle />}
                                    title="Book with confidence"
                                    description="Complete your reservation securely and get ready for your stay."
                                />
                            </div>
                        </div>

                        {/* Visual */}

                        <div className="relative">
                            <div className="overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-sm">
                                <img
                                    src="https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1000&q=85"
                                    alt="Luxury accommodation"
                                    className="h-[420px] w-full rounded-xl object-cover sm:h-[500px]"
                                />
                            </div>

                            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-border bg-card p-5 shadow-lg sm:left-10 sm:right-auto sm:max-w-sm">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <FiGlobe size={19} />
                                    </div>

                                    <div>
                                        <p className="text-sm font-bold text-text">
                                            Stay somewhere special
                                        </p>

                                        <p className="mt-1 text-xs font-medium leading-5 text-muted">
                                            Discover unique spaces for every kind of journey.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* HOST CTA */}


            <section className="bg-card">
                <div className="mx-auto max-w-7xl px-4 lg:px-0 py-16 lg:py-20">
                    <div className="overflow-hidden rounded-2xl bg-primary">
                        <div className="grid items-center lg:grid-cols-[1.2fr_0.8fr]">
                            {/* Content */}

                            <div className="p-7 text-white sm:p-10 lg:p-12">
                                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                                    <FiHome size={16} />

                                    Become a Host
                                </span>

                                <h2 className="mt-6 max-w-2xl text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                                    Have a space worth sharing?
                                </h2>

                                <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-teal-50 sm:text-base">
                                    Join RoomNest and turn your property into an opportunity.
                                    Share your space with guests and manage your listings from
                                    one simple dashboard.
                                </p>

                                <div className="mt-7">
                                    <Link to="/dashboard">
                                        <Button
                                            variant="secondary"
                                            className="w-full sm:w-auto"
                                        >
                                            Become a Host

                                            <FiArrowRight size={17} />
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Decorative Area */}

                            <div className="hidden h-full min-h-[280px] lg:block">
                                <img
                                    src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85"
                                    alt="Beautiful property for hosting"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* FINAL CTA */}


            <section className="border-t border-border bg-background">
                <div className="mx-auto max-w-4xl px-4 lg:px-0 py-16 text-center  lg:py-20">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                        <FiMessageCircle size={25} />
                    </div>

                    <h2 className="mt-6 text-2xl font-bold text-text sm:text-3xl lg:text-4xl">
                        Ready to find your next stay?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-muted sm:text-base">
                        Explore beautiful rooms, connect with trusted hosts, and discover
                        a place that feels right for your next journey.
                    </p>

                    <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                        <Link to="/rooms">
                            <Button
                                variant="primary"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2"
                            >
                                Explore Rooms

                                <FiArrowRight className="inline" size={17} />
                            </Button>
                        </Link>

                        <Link to="/contact">
                            <Button
                                variant="outline"
                                className="w-full sm:w-auto"
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};


//    STAT


const Stat = ({ value, label }) => {
    return (
        <div className="text-center">
            <p className="text-2xl font-bold text-primary sm:text-3xl">
                {value}
            </p>

            <p className="mt-1 text-xs font-semibold text-muted sm:text-sm">
                {label}
            </p>
        </div>
    );
};


//    FEATURE ITEM


const FeatureItem = ({ text }) => {
    return (
        <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <FiCheckCircle size={15} />
            </div>

            <span className="text-sm font-semibold text-text">
                {text}
            </span>
        </div>
    );
};


//    VALUE CARD


const ValueCard = ({
    icon,
    title,
    description,
}) => {
    return (
        <div className="group rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                {icon}
            </div>

            <h3 className="mt-5 text-base font-bold text-text">
                {title}
            </h3>

            <p className="mt-2 text-sm font-medium leading-6 text-muted">
                {description}
            </p>
        </div>
    );
};


//    STEP


const Step = ({
    number,
    icon,
    title,
    description,
}) => {
    return (
        <div className="flex gap-4">
            {/* Number */}

            <div className="shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white">
                    {number}
                </div>
            </div>

            {/* Content */}

            <div>
                <div className="flex items-center gap-2">
                    <span className="text-primary">
                        {icon}
                    </span>

                    <h3 className="text-base font-bold text-text">
                        {title}
                    </h3>
                </div>

                <p className="mt-2 text-sm font-medium leading-6 text-muted">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default About;