import { useState } from "react";
import { Link, NavLink } from "react-router";
import {
  FiMenu,
  FiX,
  FiUser,
  FiLogIn,
} from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 lg:px-0">

{/* logo  */}
        <Link
          to="/"
          className="shrink-0 text-2xl font-extrabold tracking-tight text-primary"
        >
          Room
          <span className="text-secondary">
            Nest
          </span>
        </Link>

{/* desktop menu  */}
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

{/* desktop action  */}
        <div className="hidden items-center gap-3 md:flex">

          <Link
            to="/sign-in"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-text transition duration-300 hover:bg-primary/10 hover:text-primary"
          >
            <FiLogIn size={17} />
            Sign In
          </Link>

          <Link
            to="/sign-up"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:bg-primary-hover hover:shadow-md"
          >
            <FiUser size={17} />
            Get Started
          </Link>

        </div>

{/* mobile menu ui  */}
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

{/* mobile menu  */}
      {isOpen && (
        <div className="border-t border-border bg-card md:hidden">

          <nav className="mx-auto max-w-7xl px-5 py-5 sm:px-6">

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

              <Link
                to="/sign-in"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold text-text transition hover:border-primary hover:text-primary"
              >
                <FiLogIn size={17} />
                Sign In
              </Link>

              <Link
                to="/sign-up"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
              >
                <FiUser size={17} />
                Register
              </Link>

            </div>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;