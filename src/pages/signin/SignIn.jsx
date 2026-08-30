import { Link, useNavigate } from "react-router";
import { FaGoogle } from "react-icons/fa";
import { FiMail, FiLock } from "react-icons/fi";
import Button from "../../components/shared/Button";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";


const SignIn = () => {

  const { loginUser, loginWithGoogle } = useAuth();
    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;
    const password = target.password.value;

    // console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        // console.log(result)
        if (result?.user?.uid) {
          navigate('/')
          toast.success("Welcome back! You have logged in successfully.");
          target.reset();
        }
      })
      .catch((error) => {
        const errorCode = error.code;

        if (
          errorCode === "auth/invalid-credential" ||
          errorCode === "auth/user-not-found" ||
          errorCode === "auth/wrong-password"
        ) {
          toast.error("Invalid email or password. Please try again.");
        } else if (errorCode === "auth/invalid-email") {
          toast.error("Please enter a valid email address.");
        } else if (errorCode === "auth/too-many-requests") {
          toast.error(
            "Too many failed login attempts. Please try again later."
          );
        } else {
          toast.error(
            "Unable to sign in. Please check your credentials and try again."
          );
        }

        // console.log(error);
      });
  }

  const handleGoogleButton = () => {
    loginWithGoogle()
      .then((result) => {
        if (result?.user?.uid) {
           navigate('/')
          toast.success("Welcome! You have signed in with Google successfully.");
        }

        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;

        if (errorCode === "auth/popup-closed-by-user") {
          toast.error("Google sign-in was cancelled. Please try again.");
        } else if (errorCode === "auth/popup-blocked") {
          toast.error(
            "The Google sign-in popup was blocked. Please allow popups and try again."
          );
        } else if (errorCode === "auth/account-exists-with-different-credential") {
          toast.error(
            "An account already exists with this email using a different sign-in method."
          );
        } else if (errorCode === "auth/network-request-failed") {
          toast.error(
            "Network error. Please check your internet connection and try again."
          );
        } else {
          toast.error(
            "Unable to sign in with Google. Please try again later."
          );
        }

        // console.log(error);
      });
  };

  return (
    <section className="min-h-screen bg-background">
      <div className="min-h-screen grid lg:grid-cols-2">

        {/* Branding Section */}
        <div className="relative hidden overflow-hidden bg-primary lg:flex">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10" />

          <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-secondary/20" />

          <div className="relative z-10 flex w-full items-center justify-center p-12">
            <div className="max-w-lg text-white">

              <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                Welcome to Room Nest
              </span>

              <h1 className="mt-6 text-5xl font-bold leading-tight xl:text-6xl">
                Find a place you'll love to stay.
              </h1>

              <p className="mt-6 max-w-md text-lg leading-8 text-teal-50">
                Discover beautiful rooms, peaceful villas, and memorable
                stays curated just for you.
              </p>

              <div className="mt-10 flex items-center gap-3">
                <div className="h-1 w-12 rounded-full bg-secondary" />

                <span className="text-sm text-teal-100">
                  Comfortable stays. Memorable journeys.
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Login Section */}
        <div className="flex items-center justify-center px-5 py-10 sm:px-8 lg:px-12">
          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <div className="mb-8 text-center lg:hidden">
              <Link
                to="/"
                className="text-3xl font-extrabold text-primary"
              >
                Stay<span className="text-secondary">Vista</span>
              </Link>
            </div>

            {/* Heading */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-text sm:text-4xl">
                Welcome back
              </h2>

              <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
                Sign in to continue exploring your next stay.
              </p>
            </div>

            {/* Google */}
            <button
              onClick={handleGoogleButton}
              type="button"
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-card px-5 py-3 font-semibold text-text shadow-sm transition duration-300 hover:border-primary hover:shadow-md"
            >
              <FaGoogle className="text-[#4285F4]" />
              Continue with Google
            </button>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />

              <span className="text-sm text-muted">
                or continue with email
              </span>

              <div className="h-px flex-1 bg-border" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-text"
                >
                  Email Address
                </label>

                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />

                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-border bg-card py-3 pl-11 pr-4 text-text outline-none transition duration-300 placeholder:text-muted focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-text"
                  >
                    Password
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-sm font-semibold text-primary hover:text-primary-hover"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />

                  <input
                    id="password"
                    type="password"
                    name="password"
                    required
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-border bg-card py-3 pl-11 pr-4 text-text outline-none transition duration-300 placeholder:text-muted focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full"
              >
                Sign In
              </Button>

            </form>

            {/* Register */}
            <p className="mt-7 text-center text-sm text-muted">
              Don't have an account?{" "}
              <Link
                to="/sign-up"
                className="font-bold text-primary hover:text-primary-hover"
              >
                Create an account
              </Link>
            </p>

            <div className="mt-6 text-center">
              <Link
                to="/"
                className="text-sm font-medium text-muted transition hover:text-primary"
              >
                ← Back to Home
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SignIn;