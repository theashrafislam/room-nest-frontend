import { useState } from "react";
import { Link } from "react-router";
import { FaGoogle } from "react-icons/fa";
import {
  FiUser,
  FiMail,
  FiLock,
  FiCamera,
} from "react-icons/fi";

import Button from "../../components/shared/Button";
import toast from "react-hot-toast";

const SignUp = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const target = e.target;
    const email = target.email.value;
    const password = target.password.value;
    const confirmPassword = target.confirmPassword.value;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match. Please check your confirm password.");
      return;
    }

    const userData = { email, password }
    console.log(userData);
  }

  return (
    <section className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">


        {/* LEFT SIDE - REGISTER FORM */}

        <div className="flex items-center justify-center px-5 py-10 sm:px-8 lg:px-12">
          <div className="w-full max-w-2xl lg:max-w-xl">

            {/* Mobile Logo */}
            <div className="mb-8 text-center lg:hidden">
              <Link
                to="/"
                className="text-3xl font-extrabold text-primary"
              >
                Stay
                <span className="text-secondary">
                  Vista
                </span>
              </Link>
            </div>

            {/* Heading */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-text sm:text-4xl">
                Create your account
              </h2>

              <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
                Join Room Nest and discover your next perfect
                getaway.
              </p>
            </div>


            {/* GOOGLE SIGN UP */}

            <button
              type="button"
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-card px-5 py-3 font-semibold text-text shadow-sm transition duration-300 hover:border-primary hover:shadow-md"
            >
              <FaGoogle className="text-[#4285F4]" />

              Continue with Google
            </button>


            {/* DIVIDER */}

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />

              <span className="shrink-0 text-sm text-muted">
                or create with email
              </span>

              <div className="h-px flex-1 bg-border" />
            </div>


            {/* REGISTER FORM */}

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >


              {/* NAME + EMAIL */}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-text"
                  >
                    Full Name
                  </label>

                  <div className="relative">
                    <FiUser
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                    />

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className={`w-full rounded-xl border bg-card py-3 pl-11 pr-4 text-text outline-none transition duration-300 placeholder:text-muted focus:ring-4 focus:ring-primary/10 `}
                    />
                  </div>


                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-text"
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <FiMail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className={`w-full rounded-xl border bg-card py-3 pl-11 pr-4 text-text outline-none transition duration-300 placeholder:text-muted focus:ring-4 focus:ring-primary/10 `}
                    />
                  </div>
                </div>
              </div>

              {/* PASSWORD + CONFIRM PASSWORD */}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-semibold text-text"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <FiLock
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                    />

                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      placeholder="Create password"
                      className={`w-full rounded-xl border bg-card py-3 pl-11 pr-4 text-text outline-none transition duration-300 placeholder:text-muted focus:ring-4 focus:ring-primary/10 `}
                    />
                  </div>

                </div>

                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-semibold text-text"
                  >
                    Confirm Password
                  </label>

                  <div className="relative">
                    <FiLock
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                    />

                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      required
                      placeholder="Confirm password"
                      className={`w-full rounded-xl border bg-card py-3 pl-11 pr-4 text-text outline-none transition duration-300 placeholder:text-muted focus:ring-4 focus:ring-primary/10 `}
                    />
                  </div>
                </div>
              </div>

              {/* PROFILE PHOTO */}

              <div>
                <label
                  htmlFor="photo"
                  className="mb-2 block text-sm font-semibold text-text"
                >
                  Profile Photo
                </label>

                <div className="relative">
                  <FiCamera
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                  />

                  <input
                    id="photo"
                    name="photo"
                    type="file"
                    accept="image/*"
                    // onChange={handleChange}
                    className={`w-full rounded-xl border bg-card py-2.5 pl-11 pr-3 text-sm text-muted outline-none transition  file:mr-4 file:rounded-lg file:border-0 file:bg-primary/10 file:px-3 file:py-2 file:font-semibold file:text-primary hover:file:bg-primary/20`}
                  />
                </div>


              </div>


              {/* SUBMIT BUTTON */}

              <Button
                type="submit"
                variant="primary"
                className="w-full"
              >
                Create Account
              </Button>
            </form>


            {/* SIGN IN LINK */}

            <p className="mt-6 text-center text-sm text-muted">
              Already have an account?{" "}
              <Link
                to="/sign-in"
                className="font-bold text-primary transition hover:text-primary-hover"
              >
                Sign in
              </Link>
            </p>

            {/* Back Home */}
            <div className="mt-5 text-center">
              <Link
                to="/"
                className="text-sm font-medium text-muted transition hover:text-primary"
              >
                ← Back to Home
              </Link>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE - BRANDING */}

        <div className="relative hidden overflow-hidden bg-primary lg:flex">

          {/* Decorative Circle */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />

          <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-secondary/20" />

          {/* Content */}
          <div className="relative z-10 flex w-full items-center justify-center p-12">
            <div className="max-w-lg text-white">

              <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                Your journey starts here
              </span>

              <h1 className="mt-6 text-5xl font-bold leading-tight xl:text-6xl">
                Make every stay worth remembering.
              </h1>

              <p className="mt-6 max-w-md text-lg leading-8 text-teal-50">
                Create your Room Nest account and discover
                beautiful accommodations and unforgettable
                experiences.
              </p>

              {/* Stats */}
              <div className="mt-10 grid max-w-sm grid-cols-2 gap-4">

                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-bold">
                    500+
                  </p>

                  <p className="mt-1 text-sm text-teal-100">
                    Beautiful stays
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-bold">
                    4.9/5
                  </p>

                  <p className="mt-1 text-sm text-teal-100">
                    Guest rating
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SignUp;