import { Link } from "react-router";
import {
  FiCalendar,
  FiClock,
  FiCreditCard,
  FiRefreshCw,
  FiAlertCircle,
  FiCheckCircle,
  FiArrowLeft,
} from "react-icons/fi";

const CancellationPolicy = () => {
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
              <FiRefreshCw size={23} />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-text sm:text-4xl">
                Cancellation Policy
              </h1>

              <p className="mt-2 text-sm font-medium text-muted">
                Last updated: August 26, 2026
              </p>
            </div>
          </div>

          <p className="mt-7 max-w-3xl text-sm font-medium leading-7 text-muted sm:text-base">
            RoomNest aims to make cancellations clear and predictable. The
            cancellation terms for a booking may vary depending on the
            property and reservation conditions.
          </p>
        </div>
      </section>

      {/* Policy Overview */}

      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="grid gap-5 sm:grid-cols-3">
            <PolicyCard
              icon={<FiCalendar />}
              title="Before Check-in"
              description="Review the cancellation terms shown for your reservation."
            />

            <PolicyCard
              icon={<FiClock />}
              title="Cancellation Time"
              description="Cancellation eligibility can depend on the property's policy."
            />

            <PolicyCard
              icon={<FiCreditCard />}
              title="Refunds"
              description="Eligible refunds are processed according to the applicable policy."
            />
          </div>
        </div>
      </section>

      {/* Main Content */}

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="space-y-8">
            <CancellationSection
              number="01"
              title="Review the Property Policy"
            >
              <p>
                Each property may have its own cancellation terms. Before
                completing a booking, carefully review the cancellation
                information displayed on the property and booking pages.
              </p>
            </CancellationSection>

            <CancellationSection
              number="02"
              title="How to Cancel a Booking"
            >
              <p>
                You can manage eligible reservations from your RoomNest
                dashboard. Open the relevant booking and follow the available
                cancellation options.
              </p>
            </CancellationSection>

            <CancellationSection
              number="03"
              title="Refund Eligibility"
            >
              <p>
                If your booking qualifies for a refund, the amount may depend
                on the cancellation terms associated with that reservation.
              </p>

              <p>
                Processing times may also vary depending on the payment
                provider and the original payment method.
              </p>
            </CancellationSection>

            <CancellationSection
              number="04"
              title="Non-Refundable Reservations"
            >
              <p>
                Some properties or booking options may be offered with
                non-refundable terms. If you select such an option, cancelling
                the reservation may not result in a refund.
              </p>
            </CancellationSection>

            <CancellationSection
              number="05"
              title="Host-Initiated Cancellation"
            >
              <p>
                In exceptional circumstances, a host may need to cancel a
                confirmed reservation. RoomNest may contact the affected guest
                and provide available assistance depending on the situation.
              </p>
            </CancellationSection>

            <CancellationSection
              number="06"
              title="Special Circumstances"
            >
              <p>
                Certain exceptional circumstances may require additional review
                by RoomNest. Supporting information may be requested when
                necessary.
              </p>
            </CancellationSection>

            {/* Important Notice */}

            <div className="flex items-start gap-4 rounded-2xl border border-secondary/20 bg-secondary/5 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <FiAlertCircle />
              </div>

              <div>
                <h3 className="text-base font-bold text-text">
                  Important
                </h3>

                <p className="mt-2 text-sm font-medium leading-7 text-muted">
                  Always review the cancellation terms for your specific
                  reservation before confirming your booking. The policy shown
                  for the reservation takes priority over general guidance on
                  this page.
                </p>
              </div>
            </div>

            {/* Contact */}

            <div className="rounded-2xl bg-primary p-7 text-white sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle size={18} />

                    <h3 className="text-lg font-bold">
                      Need help with a cancellation?
                    </h3>
                  </div>

                  <p className="mt-2 max-w-xl text-sm font-medium leading-6 text-teal-50">
                    Our support team can help you understand the cancellation
                    terms associated with your reservation.
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex h-11 shrink-0 items-center justify-center rounded-xl bg-secondary px-5 text-sm font-semibold text-white transition duration-300 hover:bg-secondary-hover"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const PolicyCard = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>

      <h3 className="mt-5 text-base font-bold text-text">
        {title}
      </h3>

      <p className="mt-2 text-sm font-medium leading-6 text-muted">
        {description}
      </p>
    </div>
  );
};

const CancellationSection = ({
  number,
  title,
  children,
}) => {
  return (
    <article className="rounded-2xl border border-border bg-background p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white">
          {number}
        </div>

        <div>
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

export default CancellationPolicy;