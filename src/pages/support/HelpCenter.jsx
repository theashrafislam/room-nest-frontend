import { Link } from "react-router";
import {
    FiSearch,
    FiMessageCircle,
    FiMail,
    FiPhone,
    FiBookOpen,
    FiCalendar,
    FiCreditCard,
    FiHome,
    FiUser,
    FiChevronDown,
    FiArrowRight,
} from "react-icons/fi";

import Button from "../../components/shared/Button";

const HelpCenter = () => {
    const categories = [
        {
            icon: <FiCalendar />,
            title: "Bookings",
            description: "Learn about reservations, dates, availability and booking management.",
        },
        {
            icon: <FiCreditCard />,
            title: "Payments",
            description: "Get help with payments, transactions, refunds and billing.",
        },
        {
            icon: <FiHome />,
            title: "Hosting",
            description: "Everything you need to know about listing and managing your property.",
        },
        {
            icon: <FiUser />,
            title: "Account",
            description: "Manage your profile, account settings and security.",
        },
    ];

    const faqs = [
        {
            question: "How do I book a room?",
            answer:
                "Search for a property, select your preferred dates, review the room details and complete the booking process.",
        },
        {
            question: "Can I cancel my booking?",
            answer:
                "Cancellation depends on the property's cancellation policy. You can review the applicable policy before confirming your booking.",
        },
        {
            question: "How can I become a host?",
            answer:
                "Registered guests can request a host role from their dashboard. Once approved by an administrator, host features become available.",
        },
        {
            question: "How can I contact a host?",
            answer:
                "You can use the available communication options associated with your booking or contact RoomNest support when assistance is required.",
        },
        {
            question: "Are payments secure?",
            answer:
                "RoomNest uses secure payment processing to help protect your transaction and payment information.",
        },
    ];

    return (
        <main className="min-h-screen bg-background text-text">
            {/* Hero */}

            <section className="bg-primary">
                <div className="mx-auto max-w-7xl px-4 lg:px-0 py-16 lg:py-20">
                    <div className="mx-auto max-w-3xl text-center text-white">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                            <FiBookOpen size={16} />
                            RoomNest Support
                        </span>

                        <h1 className="mt-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
                            How can we help?
                        </h1>

                        <p className="mt-4 text-sm font-medium leading-7 text-teal-50 sm:text-base">
                            Find answers, learn how RoomNest works, or get in touch with our
                            support team.
                        </p>

                        {/* Search */}

                        <div className="mx-auto mt-8 flex max-w-2xl items-center rounded-xl bg-card p-2 shadow-lg">
                            <FiSearch
                                size={20}
                                className="ml-3 shrink-0 text-muted"
                            />

                            <input
                                type="search"
                                placeholder="Search for help..."
                                className="h-11 w-full bg-transparent px-3 text-sm font-medium text-text outline-none placeholder:text-muted"
                            />

                            <Button
                                variant="primary"
                                className="hidden sm:inline-flex"
                            >
                                Search
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}

            <section className="bg-background">
                <div className="mx-auto max-w-7xl px-4 lg:px-0 py-14 lg:py-18">
                    <div className="text-center">
                        <span className="text-sm font-bold uppercase tracking-wider text-primary">
                            Browse Topics
                        </span>

                        <h2 className="mt-3 text-2xl font-bold text-text sm:text-3xl">
                            What do you need help with?
                        </h2>
                    </div>

                    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {categories.map((category) => (
                            <div
                                key={category.title}
                                className="group rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                                    {category.icon}
                                </div>

                                <h3 className="mt-5 text-base font-bold text-text">
                                    {category.title}
                                </h3>

                                <p className="mt-2 text-sm font-medium leading-6 text-muted">
                                    {category.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}

            <section className="border-y border-border bg-card">
                <div className="mx-auto max-w-4xl px-4 lg:px-0 py-14 lg:py-18">
                    <div className="text-center">
                        <span className="text-sm font-bold uppercase tracking-wider text-primary">
                            FAQ
                        </span>

                        <h2 className="mt-3 text-2xl font-bold text-text sm:text-3xl">
                            Frequently asked questions
                        </h2>
                    </div>

                    <div className="mt-10 space-y-3">
                        {faqs.map((faq) => (
                            <details
                                key={faq.question}
                                className="group rounded-2xl border border-border bg-background"
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-bold text-text">
                                    {faq.question}

                                    <FiChevronDown className="shrink-0 transition duration-300 group-open:rotate-180" />
                                </summary>

                                <div className="border-t border-border px-5 pb-5 pt-4">
                                    <p className="text-sm font-medium leading-7 text-muted">
                                        {faq.answer}
                                    </p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Support */}

            <section className="bg-background">
                <div className="mx-auto max-w-5xl px-4 lg:px-0 py-14 lg:py-20">
                    <div className="rounded-2xl bg-primary p-7 text-white sm:p-10 lg:p-12">
                        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div>
                                <h2 className="text-2xl font-bold sm:text-3xl">
                                    Still need help?
                                </h2>

                                <p className="mt-3 max-w-xl text-sm font-medium leading-7 text-teal-50 sm:text-base">
                                    Our support team is ready to help you with bookings,
                                    payments, accounts and hosting.
                                </p>
                            </div>

                            <Link to="/contact">
                                <Button
                                    variant="secondary"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2"
                                >
                                    <span>Contact Support</span>
                                    <FiArrowRight size={17} className="shrink-0" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Contact */}

            <section className="border-t border-border bg-card">
                <div className="mx-auto max-w-5xl px-4 lg:px-0 py-12">
                    <div className="grid gap-5 sm:grid-cols-2">
                        <a
                            href="mailto:support@roomnest.com"
                            className="group flex items-center gap-4 rounded-2xl border border-border p-5 transition duration-300 hover:border-primary/30 hover:shadow-md"
                        >
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <FiMail />
                            </div>

                            <div>
                                <p className="text-sm font-bold text-text">
                                    Email Support
                                </p>

                                <p className="mt-1 text-sm font-medium text-muted">
                                    support@roomnest.com
                                </p>
                            </div>
                        </a>

                        <a
                            href="tel:+8801234567890"
                            className="group flex items-center gap-4 rounded-2xl border border-border p-5 transition duration-300 hover:border-primary/30 hover:shadow-md"
                        >
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <FiPhone />
                            </div>

                            <div>
                                <p className="text-sm font-bold text-text">
                                    Call Support
                                </p>

                                <p className="mt-1 text-sm font-medium text-muted">
                                    +880 1234-567890
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HelpCenter;