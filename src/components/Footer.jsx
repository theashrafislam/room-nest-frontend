import { Link } from "react-router";
import {
    FiFacebook,
    FiInstagram,
    FiTwitter,
    FiMail,
    FiMapPin,
    FiPhone,
    FiArrowUpRight,
} from "react-icons/fi";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-card">

            <div className="mx-auto max-w-7xl px-4 lg:px-0 py-14 lg:py-16">

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

                    <div className="sm:col-span-2 lg:col-span-1">

                        <Link
                            to="/"
                            className="text-3xl font-extrabold tracking-tight text-primary"
                        >
                            Stay
                            <span className="text-secondary">
                                Vista
                            </span>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
                            Discover beautiful stays, comfortable rooms,
                            and unforgettable experiences with StayVista.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-6 flex items-center gap-3">

                            <a
                                href="#"
                                aria-label="Facebook"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition duration-300 hover:border-primary hover:bg-primary hover:text-white"
                            >
                                <FiFacebook size={18} />
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition duration-300 hover:border-primary hover:bg-primary hover:text-white"
                            >
                                <FiInstagram size={18} />
                            </a>

                            <a
                                href="#"
                                aria-label="Twitter"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition duration-300 hover:border-primary hover:bg-primary hover:text-white"
                            >
                                <FiTwitter size={18} />
                            </a>

                        </div>

                    </div>


                    <div className="grid grid-cols-2 gap-8 lg:col-span-2">
                        <div>
                            <h3 className="text-base font-bold text-text">
                                Quick Links
                            </h3>

                            <ul className="mt-5 space-y-3">

                                <li>
                                    <Link
                                        to="/"
                                        className="text-sm text-muted transition hover:text-primary"
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/rooms"
                                        className="text-sm text-muted transition hover:text-primary"
                                    >
                                        Browse Rooms
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/about"
                                        className="text-sm text-muted transition hover:text-primary"
                                    >
                                        About Us
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/contact"
                                        className="text-sm text-muted transition hover:text-primary"
                                    >
                                        Contact
                                    </Link>
                                </li>

                            </ul>
                        </div>


                        <div>
                            <h3 className="text-base font-bold text-text">
                                Support
                            </h3>

                            <ul className="mt-5 space-y-3">

                                <li>
                                    <Link
                                        to="/help"
                                        className="inline-flex items-center gap-1 text-sm text-muted transition hover:text-primary"
                                    >
                                        Help Center
                                        <FiArrowUpRight size={14} />
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/privacy"
                                        className="text-sm text-muted transition hover:text-primary"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/terms"
                                        className="text-sm text-muted transition hover:text-primary"
                                    >
                                        Terms & Conditions
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/cancellation"
                                        className="text-sm text-muted transition hover:text-primary"
                                    >
                                        Cancellation Policy
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-base font-bold text-text">
                            Contact Us
                        </h3>

                        <div className="mt-5 space-y-4">

                            {/* Location */}
                            <div className="flex gap-3">

                                <FiMapPin
                                    className="mt-1 shrink-0 text-primary"
                                    size={18}
                                />

                                <p className="text-sm leading-6 text-muted">
                                    Dhaka, Bangladesh
                                </p>

                            </div>

                            {/* Email */}
                            <a
                                href="mailto:hello@stayvista.com"
                                className="flex items-center gap-3 text-sm text-muted transition hover:text-primary"
                            >
                                <FiMail
                                    className="shrink-0 text-primary"
                                    size={18}
                                />

                                hello@stayvista.com
                            </a>

                            {/* Phone */}
                            <a
                                href="tel:+8801234567890"
                                className="flex items-center gap-3 text-sm text-muted transition hover:text-primary"
                            >
                                <FiPhone
                                    className="shrink-0 text-primary"
                                    size={18}
                                />

                                +880 1234-567890
                            </a>

                        </div>
                    </div>

                </div>
            </div>



            <div className="border-t border-border">

                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center sm:flex-row sm:px-6 lg:px-8 sm:text-left">

                    <p className="text-sm text-muted">
                        © {currentYear} StayVista. All rights reserved.
                    </p>

                    <p className="text-sm text-muted">
                        Made with{" "}
                        <span className="font-semibold text-secondary">
                            care
                        </span>{" "}
                        for better stays.
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;