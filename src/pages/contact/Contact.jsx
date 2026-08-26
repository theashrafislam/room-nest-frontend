import React, { useState } from "react";

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiMessageCircle,
  FiCheckCircle,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitted(false);

    // Replace this with your backend API request.
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-background text-text">

      {/* hero section  */}

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-0 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-primary shadow-sm">
              <FiMessageCircle size={16} />
              We&apos;re here to help
            </div>

            <h1 className="text-3xl font-bold leading-tight text-text sm:text-4xl lg:text-5xl">
              Get in touch with{" "}
              <span className="text-primary">RoomNest</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-muted sm:text-lg">
              Have a question about a property, booking, payment, or your
              account? Our team is always happy to help you.
            </p>
          </div>
        </div>
      </section>

      {/* contact information  */}

      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-4 lg:px-0 py-12 lg:py-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <ContactInfoCard
              icon={<FiMail />}
              title="Email Us"
              description="Send us an email anytime."
              value="support@roomnest.com"
              href="mailto:support@roomnest.com"
            />

            <ContactInfoCard
              icon={<FiPhone />}
              title="Call Us"
              description="Talk with our support team."
              value="+880 1234-567890"
              href="tel:+8801234567890"
            />

            <ContactInfoCard
              icon={<FiMapPin />}
              title="Visit Us"
              description="Our office location."
              value="Dhaka, Bangladesh"
            />

            <ContactInfoCard
              icon={<FiClock />}
              title="Working Hours"
              description="Monday - Friday"
              value="9:00 AM - 6:00 PM"
            />
          </div>
        </div>
      </section>

      {/* contact form  */}

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-0 py-16 lg:py-20">
          <div className="grid overflow-hidden rounded-2xl border border-border bg-card shadow-sm lg:grid-cols-[0.8fr_1.2fr]">
            {/* LEFT SIDE */}

            <div className="bg-primary p-7 text-white sm:p-10 lg:p-12">
              <div className="max-w-md">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                  <FiMessageCircle size={16} />
                  Contact Support
                </div>

                <h2 className="mt-6 text-2xl font-bold leading-tight sm:text-3xl">
                  Let&apos;s make your RoomNest experience better.
                </h2>

                <p className="mt-5 text-sm font-medium leading-7 text-white/80 sm:text-base">
                  Whether you are looking for your next stay or managing a
                  property, our support team is ready to assist you.
                </p>

                {/* SUPPORT FEATURES */}

                <div className="mt-8 space-y-5">
                  <SupportItem text="Fast response from our support team" />

                  <SupportItem text="Help with bookings and reservations" />

                  <SupportItem text="Payment and account assistance" />

                  <SupportItem text="Host and property support" />
                </div>

                {/* SOCIAL */}

                <div className="mt-10 border-t border-white/15 pt-7">
                  <p className="text-sm font-semibold text-white/80">
                    Follow RoomNest
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <SocialButton
                      icon={<FiFacebook />}
                      label="Facebook"
                    />

                    <SocialButton
                      icon={<FiInstagram />}
                      label="Instagram"
                    />

                    <SocialButton
                      icon={<FiTwitter />}
                      label="Twitter"
                    />

                    <SocialButton
                      icon={<FiLinkedin />}
                      label="LinkedIn"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}

            <div className="p-7 sm:p-10 lg:p-12">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-text sm:text-3xl">
                  Send us a message
                </h2>

                <p className="mt-2 text-sm font-medium leading-6 text-muted">
                  Fill out the form below and our team will get back to you
                  as soon as possible.
                </p>
              </div>

              {/* SUCCESS MESSAGE */}

              {submitted && (
                <div className="mb-6 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <FiCheckCircle
                    size={20}
                    className="mt-0.5 shrink-0 text-primary"
                  />

                  <div>
                    <p className="text-sm font-semibold text-text">
                      Message sent successfully!
                    </p>

                    <p className="mt-1 text-sm font-medium text-muted">
                      Thanks for contacting RoomNest. We&apos;ll get back to
                      you shortly.
                    </p>
                  </div>
                </div>
              )}

              {/* FORM */}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* NAME + EMAIL */}

                <div className="grid gap-5 sm:grid-cols-2">
                  <InputField
                    label="Your Name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <InputField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* SUBJECT */}

                <InputField
                  label="Subject"
                  name="subject"
                  type="text"
                  placeholder="How can we help you?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                {/* MESSAGE */}

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-text"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-text outline-none transition-all duration-300 placeholder:text-muted/70 focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                </div>

                {/* SUBMIT BUTTON */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FiSend size={17} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* help center cta  */}

      <section className="bg-card">
        <div className="mx-auto max-w-4xl px-4 lg:px-0 py-16 text-center lg:py-20">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
            <FiMessageCircle size={25} />
          </div>

          <h2 className="mt-6 text-2xl font-bold text-text sm:text-3xl">
            Looking for quick answers?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-7 text-muted sm:text-base">
            Check our frequently asked questions for quick information about
            bookings, payments, cancellations, hosting, and more.
          </p>

          <button
            type="button"
            className="mt-7 inline-flex h-12 items-center justify-center rounded-xl border border-border bg-card px-6 text-sm font-semibold text-text transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-sm"
          >
            Visit Help Center
          </button>
        </div>
      </section>
    </main>
  );
};

// contact infomation card 

const ContactInfoCard = ({
  icon,
  title,
  description,
  value,
  href,
}) => {
  const content = (
    <>
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
        {icon}
      </div>

      <div className="mt-5">
        <h3 className="text-base font-bold text-text">
          {title}
        </h3>

        <p className="mt-1 text-sm font-medium text-muted">
          {description}
        </p>

        <p className="mt-3 break-words text-sm font-semibold text-primary">
          {value}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md">
      {content}
    </div>
  );
};

// suppot team 

const SupportItem = ({ text }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10">
        <FiCheckCircle size={15} />
      </div>

      <span className="text-sm font-medium text-white/90">
        {text}
      </span>
    </div>
  );
};

// social button 

const SocialButton = ({ icon, label }) => {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-primary"
    >
      {icon}
    </a>
  );
};

// input feild 

const InputField = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-text"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm font-medium text-text outline-none transition-all duration-300 placeholder:text-muted/70 focus:border-primary focus:ring-4 focus:ring-primary/10"
      />
    </div>
  );
};

export default Contact;