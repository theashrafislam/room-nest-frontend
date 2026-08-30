import { useState } from "react";
import { Link, NavLink } from "react-router";
import {
    FiMenu,
    FiX,
    FiUser,
    FiLogIn,
    FiLogOut,
} from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { user, logOut } = useAuth();
    console.log(user)

    const navItems = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Rooms",
            path: "/rooms",
        },
        {
            name: "About",
            path: "/about",
        },
        {
            name: "Contact",
            path: "/contact",
        },
    ];

    const navLinkStyle = ({ isActive }) =>
        `relative text-sm font-semibold transition-colors duration-300 ${
            isActive
                ? "text-primary"
                : "text-text hover:text-primary"
        }`;

    const handleLogout = async () => {
        try {
            await logOut();
            setIsOpen(false);
             toast.success("Logged out successfully!");
        } catch (error) {
            console.error("Logout failed:", error);
            toast.error("Logout failed. Please try again.");
        }
    };

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
            <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 lg:px-0">

                {/* Logo */}
                <Link
                    to="/"
                    className="shrink-0 text-2xl font-extrabold tracking-tight text-primary"
                >
                    Room
                    <span className="text-secondary">
                        Nest
                    </span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={navLinkStyle}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden items-center gap-3 md:flex">

                    {!user ? (
                        <>
                            {/* Sign In */}
                            <Link
                                to="/sign-in"
                                className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-text transition duration-300 hover:bg-primary/10 hover:text-primary"
                            >
                                <FiLogIn size={17} />
                                Sign In
                            </Link>

                            {/* Get Started */}
                            <Link
                                to="/sign-up"
                                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:bg-primary-hover hover:shadow-md"
                            >
                                <FiUser size={17} />
                                Get Started
                            </Link>
                        </>
                    ) : (
                        <>
                            {/* User Profile */}
                            <Link
                                to="/profile"
                                className="flex items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-primary/10"
                            >
                                {/* Avatar */}
                                <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-primary/10 text-primary">
                                    {user?.photoURL ? (
                                        <img
                                            src={user?.photoURL}
                                            alt={user?.displayName || "User"}
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <FiUser size={18} />
                                    )}
                                </div>

                                {/* User Name */}
                                <div className="hidden lg:block">
                                    <p className="max-w-32 truncate text-sm font-semibold text-text">
                                        {user?.displayName || "User"}
                                    </p>

                                    <p className="text-xs text-muted">
                                        View Profile
                                    </p>
                                </div>
                            </Link>

                            {/* Logout */}
                            <button
                                type="button"
                                onClick={handleLogout}
                                className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-text transition duration-300 hover:bg-red-50 hover:text-danger border-red-500 border-2"
                            >
                                <FiLogOut size={17} />
                                Logout
                            </button>
                        </>
                    )}

                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="rounded-lg p-2 text-text transition hover:bg-primary/10 hover:text-primary md:hidden"
                    aria-label="Toggle navigation menu"
                >
                    {isOpen ? (
                        <FiX size={24} />
                    ) : (
                        <FiMenu size={24} />
                    )}
                </button>

            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="border-t border-border bg-card md:hidden">

                    <nav className="mx-auto max-w-7xl px-5 py-5 sm:px-6">

                        {/* Mobile User Info */}
                        {user && (
                            <Link
                                to="/profile"
                                onClick={() => setIsOpen(false)}
                                className="mb-4 flex items-center gap-3 rounded-xl border border-border bg-background p-3"
                            >
                                {/* Avatar */}
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary/10 text-primary">
                                    {user?.photoURL ? (
                                        <img
                                            src={user.photoURL}
                                            alt={user.displayName || "User"}
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <FiUser size={21} />
                                    )}
                                </div>

                                <div className="min-w-0">
                                    <p className="truncate text-sm font-bold text-text">
                                        {user?.displayName || "User"}
                                    </p>

                                    <p className="truncate text-xs text-muted">
                                        {user?.email}
                                    </p>
                                </div>
                            </Link>
                        )}

                        {/* Navigation */}
                        <div className="flex flex-col gap-2">

                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `rounded-xl px-4 py-3 text-sm font-semibold transition ${
                                            isActive
                                                ? "bg-primary/10 text-primary"
                                                : "text-text hover:bg-primary/5 hover:text-primary"
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}

                        </div>

                        {/* Mobile Actions */}
                        <div className="mt-4 grid grid-cols-2 gap-3 border-t border-border pt-4">

                            {!user ? (
                                <>
                                    {/* Sign In */}
                                    <Link
                                        to="/sign-in"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold text-text transition hover:border-primary hover:text-primary"
                                    >
                                        <FiLogIn size={17} />
                                        Sign In
                                    </Link>

                                    {/* Register */}
                                    <Link
                                        to="/sign-up"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
                                    >
                                        <FiUser size={17} />
                                        Register
                                    </Link>
                                </>
                            ) : (
                                <>
                                    {/* Profile */}
                                    <Link
                                        to="/profile"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold text-text transition hover:border-primary hover:text-primary"
                                    >
                                        <FiUser size={17} />
                                        Profile
                                    </Link>

                                    {/* Logout */}
                                    <button
                                        type="button"
                                        onClick={handleLogout}
                                        className="flex items-center justify-center gap-2 rounded-xl border border-red-200 px-4 py-3 text-sm font-semibold text-danger transition hover:bg-red-50"
                                    >
                                        <FiLogOut size={17} />
                                        Logout
                                    </button>
                                </>
                            )}

                        </div>

                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;