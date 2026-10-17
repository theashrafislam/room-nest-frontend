import { useState } from "react";
import { Link } from "react-router";
import {
    FiUser,
    FiMail,
    FiPhone,
    FiMapPin,
    FiCalendar,
    FiHeart,
    FiShield,
    FiBell,
    FiEdit2,
    FiCheck,
    FiArrowRight,
    FiLogOut,
    FiHome,
    FiClock,
    FiCheckCircle,
    FiSettings,
    FiChevronRight,
    FiStar,
    FiX,
} from "react-icons/fi";

const defaultUser = {
    name: "Alex Morgan",
    email: "alex@example.com",
    phone: "+880 1XXX-XXXXXX",
    location: "Dhaka, Bangladesh",
    bio: "I love discovering beautiful places and comfortable stays.",
    avatar: "",
    joinedAt: "October 2026",
};

const menuItems = [
    { label: "My Profile", icon: FiUser, href: "#profile" },
    { label: "My Bookings", icon: FiCalendar, href: "#bookings" },
    { label: "Wishlist", icon: FiHeart, href: "/rooms" },
    { label: "Notifications", icon: FiBell, href: "#settings" },
    { label: "Security", icon: FiShield, href: "#settings" },
];

const Profile = ({
    user: initialUser,
    bookings = [],
    onUpdateProfile,
    onLogout,
}) => {
    const [user, setUser] = useState({
        ...defaultUser,
        ...(initialUser || {}),
    });

    const [formData, setFormData] = useState({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        location: user.location || "",
        bio: user.bio || "",
    });

    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const upcomingBookings = bookings.filter(
        (booking) =>
            booking.status?.toLowerCase() === "confirmed" ||
            booking.status?.toLowerCase() === "upcoming"
    );

    const completedBookings = bookings.filter(
        (booking) =>
            booking.status?.toLowerCase() === "completed"
    );

    const stats = [
        {
            label: "Total Bookings",
            value: bookings.length,
            icon: FiHome,
            description: "All your reservations",
        },
        {
            label: "Upcoming Stays",
            value: upcomingBookings.length,
            icon: FiClock,
            description: "Your next adventures",
        },
        {
            label: "Completed Stays",
            value: completedBookings.length,
            icon: FiCheckCircle,
            description: "Places you've explored",
        },
    ];

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSave = async (event) => {
        event.preventDefault();

        setMessage("");
        setError("");

        if (!formData.name.trim() || !formData.email.trim()) {
            setError("Name and email are required.");
            return;
        }

        try {
            setIsSaving(true);

            const updatedUser = {
                ...user,
                ...formData,
            };

            if (onUpdateProfile) {
                await onUpdateProfile(updatedUser);
            }

            setUser(updatedUser);
            setIsEditing(false);
            setMessage(
                onUpdateProfile
                    ? "Your profile has been updated."
                    : "Changes updated in this page. Connect your API to save them permanently."
            );
        } catch (err) {
            setError(
                err?.message || "Unable to update your profile. Please try again."
            );
        } finally {
            setIsSaving(false);
        }
    };

    const handleCancel = () => {
        setFormData({
            name: user.name || "",
            email: user.email || "",
            phone: user.phone || "",
            location: user.location || "",
            bio: user.bio || "",
        });

        setIsEditing(false);
        setMessage("");
        setError("");
    };

    const initials = (user.name || "Guest")
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((part) => part[0])
        .join("")
        .toUpperCase();

    return (
        <main className="min-h-screen bg-slate-50 pb-12 text-slate-800">
            {/* Page heading */}
            <section className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
                                <Link
                                    to="/"
                                    className="transition hover:text-teal-700"
                                >
                                    Home
                                </Link>
                                <FiChevronRight size={14} />
                                <span className="font-medium text-teal-700">
                                    My Profile
                                </span>
                            </div>

                            <p className="mb-2 text-sm font-semibold tracking-wide text-teal-700">
                                YOUR ROOMNEST ACCOUNT
                            </p>

                            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                                Welcome back, {user.name.split(" ")[0]}!
                            </h1>

                            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                                Manage your personal details, keep track of
                                your stays, and make your next trip special.
                            </p>
                        </div>

                        <Link
                            to="/rooms"
                            className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
                        >
                            Explore rooms
                            <FiArrowRight size={17} />
                        </Link>
                    </div>
                </div>
            </section>

            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                {/* Profile banner */}
                <section className="relative mb-6 overflow-hidden rounded-2xl bg-teal-800 p-5 text-white shadow-sm sm:p-7 lg:p-8">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border border-white/10"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-32 right-24 h-64 w-64 rounded-full border border-white/10"
                    />

                    <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex min-w-0 items-center gap-4 sm:gap-5">
                            <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-2 border-white/20 bg-white/15 text-2xl font-bold text-white sm:h-24 sm:w-24 sm:text-3xl">
                                {user.avatar ? (
                                    <img
                                        src={user.avatar}
                                        alt={`${user.name}'s profile`}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    initials
                                )}
                            </div>

                            <div className="min-w-0">
                                <div className="mb-2 flex flex-wrap items-center gap-2">
                                    <h2 className="break-words text-xl font-bold sm:text-2xl">
                                        {user.name}
                                    </h2>

                                    <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium text-teal-50">
                                        <FiCheck size={13} />
                                        Member
                                    </span>
                                </div>

                                <p className="break-all text-sm text-teal-100">
                                    {user.email}
                                </p>

                                <p className="mt-2 flex items-center gap-1.5 text-xs text-teal-100 sm:text-sm">
                                    <FiCalendar size={14} />
                                    Member since {user.joinedAt || "Recently"}
                                </p>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => {
                                setIsEditing(true);
                                setMessage("");
                                setError("");
                                document
                                    .getElementById("profile")
                                    ?.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                            }}
                            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm font-semibold transition hover:bg-white/20 sm:w-auto"
                        >
                            <FiEdit2 size={16} />
                            Edit profile
                        </button>
                    </div>
                </section>

                {/* Stats */}
                <section
                    aria-label="Booking statistics"
                    className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3"
                >
                    {stats.map((stat) => {
                        const Icon = stat.icon;

                        return (
                            <article
                                key={stat.label}
                                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-teal-200 hover:shadow-md sm:p-6"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <p className="text-sm font-medium text-slate-500">
                                            {stat.label}
                                        </p>
                                        <p className="mt-2 text-3xl font-bold tabular-nums text-slate-900">
                                            {stat.value}
                                        </p>
                                        <p className="mt-1 text-xs text-slate-500">
                                            {stat.description}
                                        </p>
                                    </div>

                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                                        <Icon size={21} />
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </section>

                {/* Main layout */}
                <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
                    {/* Sidebar */}
                    <aside className="space-y-5 lg:col-span-4 xl:col-span-3">
                        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
                            <p className="px-3 pb-3 pt-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                                Account menu
                            </p>

                            <nav className="space-y-1">
                                {menuItems.map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            className={`group flex items-center justify-between rounded-xl px-3 py-3 transition ${
                                                index === 0
                                                    ? "bg-teal-50 font-semibold text-teal-800"
                                                    : "text-slate-600 hover:bg-slate-50 hover:text-teal-800"
                                            }`}
                                        >
                                            <span className="flex items-center gap-3">
                                                <Icon size={18} />
                                                <span className="text-sm">
                                                    {item.label}
                                                </span>
                                            </span>

                                            <FiChevronRight
                                                size={16}
                                                className="text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-teal-700"
                                            />
                                        </a>
                                    );
                                })}
                            </nav>

                            <div className="my-3 border-t border-slate-100" />

                            <button
                                type="button"
                                onClick={onLogout}
                                disabled={!onLogout}
                                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                <FiLogOut size={18} />
                                Sign out
                            </button>
                        </div>

                        {/* Support card */}
                        <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-5 sm:p-6">
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                                <FiStar size={20} />
                            </div>

                            <h3 className="font-bold text-slate-900">
                                Need a hand?
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Have a question about your stay or account?
                                We're here to help.
                            </p>

                            <Link
                                to="/help"
                                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-800 hover:text-teal-900"
                            >
                                Visit Help Center
                                <FiArrowRight size={16} />
                            </Link>
                        </div>
                    </aside>

                    {/* Main content */}
                    <div className="space-y-6 lg:col-span-8 xl:col-span-9">
                        {/* Personal information */}
                        <section
                            id="profile"
                            className="scroll-mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
                        >
                            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                                        Personal information
                                    </h2>
                                    <p className="mt-1 text-sm text-slate-500">
                                        Your details, your way.
                                    </p>
                                </div>

                                {!isEditing && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsEditing(true);
                                            setMessage("");
                                            setError("");
                                        }}
                                        className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-800"
                                    >
                                        <FiEdit2 size={15} />
                                        Edit details
                                    </button>
                                )}
                            </div>

                            {message && (
                                <div
                                    role="status"
                                    className="mb-5 rounded-xl border border-teal-200 bg-teal-50 px-4 py-3 text-sm leading-6 text-teal-800"
                                >
                                    {message}
                                </div>
                            )}

                            {error && (
                                <div
                                    role="alert"
                                    className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                                >
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSave}>
                                <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="profile-name"
                                            className="mb-2 block text-sm font-semibold text-slate-700"
                                        >
                                            Full name
                                        </label>

                                        <div className="relative">
                                            <FiUser
                                                size={17}
                                                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                            />

                                            <input
                                                id="profile-name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                disabled={!isEditing || isSaving}
                                                required
                                                autoComplete="name"
                                                placeholder="Your full name"
                                                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-600/10 disabled:cursor-default disabled:opacity-90"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="profile-email"
                                            className="mb-2 block text-sm font-semibold text-slate-700"
                                        >
                                            Email address
                                        </label>

                                        <div className="relative">
                                            <FiMail
                                                size={17}
                                                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                            />

                                            <input
                                                id="profile-email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                disabled={!isEditing || isSaving}
                                                required
                                                autoComplete="email"
                                                placeholder="you@example.com"
                                                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-600/10 disabled:cursor-default disabled:opacity-90"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="profile-phone"
                                            className="mb-2 block text-sm font-semibold text-slate-700"
                                        >
                                            Phone number
                                        </label>

                                        <div className="relative">
                                            <FiPhone
                                                size={17}
                                                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                            />

                                            <input
                                                id="profile-phone"
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                disabled={!isEditing || isSaving}
                                                autoComplete="tel"
                                                placeholder="Enter phone number"
                                                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-600/10 disabled:cursor-default disabled:opacity-90"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="profile-location"
                                            className="mb-2 block text-sm font-semibold text-slate-700"
                                        >
                                            Location
                                        </label>

                                        <div className="relative">
                                            <FiMapPin
                                                size={17}
                                                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                            />

                                            <input
                                                id="profile-location"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleInputChange}
                                                disabled={!isEditing || isSaving}
                                                autoComplete="address-level2"
                                                placeholder="City, Country"
                                                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-600/10 disabled:cursor-default disabled:opacity-90"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="profile-bio"
                                            className="mb-2 block text-sm font-semibold text-slate-700"
                                        >
                                            About me
                                        </label>

                                        <textarea
                                            id="profile-bio"
                                            name="bio"
                                            rows={4}
                                            maxLength={300}
                                            value={formData.bio}
                                            onChange={handleInputChange}
                                            disabled={!isEditing || isSaving}
                                            placeholder="Tell us a little about yourself..."
                                            className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-600/10 disabled:cursor-default disabled:opacity-90"
                                        />

                                        {isEditing && (
                                            <p className="mt-1 text-right text-xs text-slate-400">
                                                {formData.bio.length}/300
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {isEditing && (
                                    <div className="mt-6 flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
                                        <button
                                            type="button"
                                            onClick={handleCancel}
                                            disabled={isSaving}
                                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 disabled:opacity-50"
                                        >
                                            <FiX size={16} />
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            disabled={isSaving}
                                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                        >
                                            <FiCheck size={17} />
                                            {isSaving
                                                ? "Saving..."
                                                : "Save changes"}
                                        </button>
                                    </div>
                                )}
                            </form>
                        </section>

                        {/* Bookings */}
                        <section
                            id="bookings"
                            className="scroll-mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
                        >
                            <div className="mb-5 flex items-center justify-between gap-3">
                                <div>
                                    <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                                        Recent bookings
                                    </h2>
                                    <p className="mt-1 text-sm text-slate-500">
                                        Keep your trips organized.
                                    </p>
                                </div>

                                <Link
                                    to="/rooms"
                                    className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-teal-700 transition hover:text-teal-900"
                                >
                                    Find stays
                                    <FiArrowRight size={16} />
                                </Link>
                            </div>

                            {bookings.length > 0 ? (
                                <div className="space-y-3">
                                    {bookings.slice(0, 4).map((booking, index) => (
                                        <article
                                            key={
                                                booking._id ||
                                                booking.id ||
                                                index
                                            }
                                            className="flex flex-col gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-teal-200 sm:flex-row sm:items-center"
                                        >
                                            <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-teal-50 text-teal-700">
                                                {booking.room?.images?.[0] ||
                                                booking.image ? (
                                                    <img
                                                        src={
                                                            booking.room
                                                                ?.images?.[0] ||
                                                            booking.image
                                                        }
                                                        alt=""
                                                        className="h-full w-full object-cover"
                                                    />
                                                ) : (
                                                    <FiHome size={23} />
                                                )}
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <h3 className="break-words font-semibold text-slate-900">
                                                    {booking.room?.title ||
                                                        booking.roomName ||
                                                        booking.title ||
                                                        "Room reservation"}
                                                </h3>

                                                <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                                                    <FiCalendar size={14} />
                                                    {booking.checkIn ||
                                                        booking.startDate ||
                                                        "Date not provided"}
                                                </p>
                                            </div>

                                            <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end">
                                                <span
                                                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                                                        booking.status?.toLowerCase() ===
                                                        "cancelled"
                                                            ? "bg-red-50 text-red-700"
                                                            : booking.status?.toLowerCase() ===
                                                                "completed"
                                                              ? "bg-slate-100 text-slate-600"
                                                              : "bg-teal-50 text-teal-800"
                                                    }`}
                                                >
                                                    {booking.status ||
                                                        "Pending"}
                                                </span>

                                                {booking.totalPrice != null && (
                                                    <p className="font-bold text-slate-900">
                                                        ৳
                                                        {Number(
                                                            booking.totalPrice
                                                        ).toLocaleString()}
                                                    </p>
                                                )}
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            ) : (
                                <div className="rounded-xl border border-dashed border-slate-200 px-4 py-10 text-center sm:py-12">
                                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                                        <FiCalendar size={25} />
                                    </div>

                                    <h3 className="mt-4 font-bold text-slate-900">
                                        No bookings yet
                                    </h3>

                                    <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
                                        Your next memorable stay is waiting.
                                        Explore our rooms and find a place
                                        that feels like home.
                                    </p>

                                    <Link
                                        to="/rooms"
                                        className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
                                    >
                                        Explore rooms
                                        <FiArrowRight size={16} />
                                    </Link>
                                </div>
                            )}
                        </section>

                        {/* Settings */}
                        <section
                            id="settings"
                            className="scroll-mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
                        >
                            <div className="mb-5">
                                <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                                    Account & preferences
                                </h2>
                                <p className="mt-1 text-sm text-slate-500">
                                    Quick access to account resources.
                                </p>
                            </div>

                            <div className="divide-y divide-slate-100">
                                <Link
                                    to="/privacy"
                                    className="group flex items-center gap-4 py-4 first:pt-0 last:pb-0"
                                >
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition group-hover:bg-teal-100">
                                        <FiShield size={20} />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-sm font-semibold text-slate-800">
                                            Privacy & security
                                        </h3>
                                        <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                                            Learn how your personal information
                                            is handled.
                                        </p>
                                    </div>

                                    <FiChevronRight
                                        size={18}
                                        className="shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-teal-700"
                                    />
                                </Link>

                                <Link
                                    to="/help"
                                    className="group flex items-center gap-4 py-4"
                                >
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 transition group-hover:bg-amber-100">
                                        <FiSettings size={20} />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-sm font-semibold text-slate-800">
                                            Help & support
                                        </h3>
                                        <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                                            Get help with bookings and your
                                            account.
                                        </p>
                                    </div>

                                    <FiChevronRight
                                        size={18}
                                        className="shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-teal-700"
                                    />
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Bottom note */}
                <footer className="mt-8 border-t border-slate-200 pt-5 text-center">
                    <p className="text-xs leading-6 text-slate-500 sm:text-sm">
                        Made for better stays, with{" "}
                        <FiHeart
                            size={13}
                            className="mx-0.5 inline text-amber-500"
                        />{" "}
                        by RoomNest.
                    </p>
                </footer>
            </div>
        </main>
    );
};

export default Profile;