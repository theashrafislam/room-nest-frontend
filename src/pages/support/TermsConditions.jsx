import { Link } from "react-router";
import {
  FiFileText,
  FiUser,
  FiHome,
  FiCalendar,
  FiCreditCard,
  FiShield,
  FiArrowLeft,
} from "react-icons/fi";

const TermsConditions = () => {
  return (
    <main className="min-h-screen bg-background text-text">
      {/* Header */}

      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 lg:px-0 py-14 lg:py-18">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition duration-300 hover:text-primary"
          >
            <FiArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="mt-8 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <FiFileText size={23} />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-text sm:text-4xl">
                Terms & Conditions
              </h1>

              <p className="mt-2 text-sm font-medium text-muted">
                Last updated: August 26, 2026
              </p>
            </div>
          </div>

          <p className="mt-7 max-w-3xl text-sm font-medium leading-7 text-muted sm:text-base">
            These Terms & Conditions govern your use of RoomNest and explain
            the responsibilities of guests, hosts, and other users of the
            platform.
          </p>
        </div>
      </section>

      {/* Content */}

      <section>
        <div className="mx-auto max-w-6xl px-4 lg:px-0 py-12 lg:py-16">
          <div className="space-y-10">
            <TermsSection
              number="01"
              icon={<FiUser />}
              title="Using RoomNest"
            >
              <p>
                You must provide accurate information when creating an account
                and using RoomNest. You are responsible for maintaining the
                confidentiality of your account credentials and for activities
                performed through your account.
              </p>
            </TermsSection>

            <TermsSection
              number="02"
              icon={<FiHome />}
              title="Host Responsibilities"
            >
              <p>
                Hosts are responsible for providing accurate property
                descriptions, pricing, availability, amenities, photos, and
                other listing information.
              </p>

              <p>
                Hosts must ensure that their properties comply with applicable
                laws, safety requirements, and platform rules.
              </p>
            </TermsSection>

            <TermsSection
              number="03"
              icon={<FiCalendar />}
              title="Bookings"
            >
              <p>
                Guests are responsible for reviewing property information,
                pricing, availability, and applicable policies before
                completing a booking.
              </p>

              <p>
                A booking becomes subject to the applicable reservation and
                cancellation terms once the booking process has been completed.
              </p>
            </TermsSection>

            <TermsSection
              number="04"
              icon={<FiCreditCard />}
              title="Payments"
            >
              <p>
                Payments must be completed through the payment methods made
                available by RoomNest. Users agree not to attempt to bypass
                platform payment procedures for transactions initiated through
                RoomNest.
              </p>
            </TermsSection>

            <TermsSection
              number="05"
              title="Prohibited Activities"
            >
              <p>Users must not:</p>

              <ul className="list-disc space-y-2 pl-5">
                <li>Provide intentionally false information.</li>
                <li>Use the platform for unlawful activities.</li>
                <li>Attempt to access another user's account.</li>
                <li>Abuse or interfere with platform functionality.</li>
                <li>Use RoomNest to facilitate fraudulent transactions.</li>
              </ul>
            </TermsSection>

            <TermsSection
              number="06"
              icon={<FiShield />}
              title="Account Suspension"
            >
              <p>
                RoomNest may restrict, suspend, or terminate accounts when
                there is reasonable evidence of fraud, abuse, policy
                violations, security risks, or unlawful activity.
              </p>
            </TermsSection>

            <TermsSection
              number="07"
              title="Property Information"
            >
              <p>
                RoomNest provides a platform for guests and hosts to connect.
                Property information is primarily supplied by hosts, and users
                should carefully review listing details before making decisions.
              </p>
            </TermsSection>

            <TermsSection
              number="08"
              title="Changes to These Terms"
            >
              <p>
                We may update these Terms & Conditions when necessary to reflect
                changes to our services, legal requirements, or platform
                policies. Updated terms will be published on this page.
              </p>
            </TermsSection>

            <TermsSection
              number="09"
              title="Contact"
            >
              <p>
                If you have questions about these Terms & Conditions, please
                contact the RoomNest support team.
              </p>

              <Link
                to="/contact"
                className="mt-3 inline-flex font-bold text-primary hover:text-primary-hover"
              >
                Contact RoomNest Support
              </Link>
            </TermsSection>
          </div>
        </div>
      </section>
    </main>
  );
};

const TermsSection = ({
  number,
  icon,
  title,
  children,
}) => {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          {icon || number}
        </div>

        <div className="min-w-0">
          <h2 className="text-xl font-bold text-text">
            {title}
          </h2>

          <div className="mt-4 space-y-4 text-sm font-medium leading-7 text-muted">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
};

export default TermsConditions;