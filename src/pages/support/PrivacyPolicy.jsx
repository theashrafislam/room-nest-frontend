import { Link } from "react-router";
import {
  FiShield,
  FiUser,
  FiDatabase,
  FiLock,
  FiMail,
  FiArrowLeft,
} from "react-icons/fi";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background text-text">
      {/* Header */}

      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 lg:px-12 lg:py-18">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition duration-300 hover:text-primary"
          >
            <FiArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="mt-8 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <FiShield size={23} />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-text sm:text-4xl">
                Privacy Policy
              </h1>

              <p className="mt-2 text-sm font-medium text-muted">
                Last updated: August 26, 2026
              </p>
            </div>
          </div>

          <p className="mt-7 max-w-3xl text-sm font-medium leading-7 text-muted sm:text-base">
            At RoomNest, we respect your privacy and are committed to
            protecting the personal information you share with us. This policy
            explains what information we collect, how we use it, and how we
            protect it.
          </p>
        </div>
      </section>

      {/* Content */}

      <section>
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="space-y-10">
            <PolicySection
              icon={<FiUser />}
              number="01"
              title="Information We Collect"
            >
              <p>
                When you create an account, make a booking, list a property, or
                contact us, we may collect information such as your name, email
                address, profile photo, contact information, booking details,
                and other information you choose to provide.
              </p>
            </PolicySection>

            <PolicySection
              icon={<FiDatabase />}
              number="02"
              title="How We Use Your Information"
            >
              <p>
                We use your information to provide and improve RoomNest
                services, process bookings, manage accounts, communicate with
                users, provide customer support, and maintain platform
                security.
              </p>
            </PolicySection>

            <PolicySection
              icon={<FiLock />}
              number="03"
              title="Data Security"
            >
              <p>
                We take reasonable technical and organizational measures to
                protect your information against unauthorized access, loss,
                misuse, or disclosure. However, no online service can guarantee
                absolute security.
              </p>
            </PolicySection>

            <PolicySection
              number="04"
              title="Payment Information"
            >
              <p>
                Payments are processed through secure payment providers. RoomNest
                does not intentionally store complete payment card information
                on its own servers.
              </p>
            </PolicySection>

            <PolicySection
              number="05"
              title="Cookies and Similar Technologies"
            >
              <p>
                RoomNest may use cookies and similar technologies to maintain
                sessions, remember preferences, improve functionality, and
                understand how users interact with the platform.
              </p>
            </PolicySection>

            <PolicySection
              number="06"
              title="Information Sharing"
            >
              <p>
                We may share relevant information when necessary to provide our
                services, process transactions, comply with legal obligations,
                prevent fraud, or protect the rights and safety of RoomNest,
                our users, and others.
              </p>
            </PolicySection>

            <PolicySection
              number="07"
              title="Your Choices"
            >
              <p>
                You may review and update certain account information through
                your profile. If you have questions about your personal data or
                want to request assistance, please contact our support team.
              </p>
            </PolicySection>

            <PolicySection
              icon={<FiMail />}
              number="08"
              title="Contact Us"
            >
              <p>
                If you have questions about this Privacy Policy or how RoomNest
                handles your information, please contact us.
              </p>

              <a
                href="mailto:privacy@roomnest.com"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover"
              >
                <FiMail size={16} />
                privacy@roomnest.com
              </a>
            </PolicySection>
          </div>
        </div>
      </section>
    </main>
  );
};

const PolicySection = ({
  number,
  icon,
  title,
  children,
}) => {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
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

export default PrivacyPolicy;