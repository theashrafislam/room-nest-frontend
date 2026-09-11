import React from "react";
import { FiStar, FiUser } from "react-icons/fi";

const Reviews = ({ reviews = [], }) => {
    return (
        <section className="border-t border-border pt-8">
            {/* Header */}
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                    <h2 className="text-xl font-bold text-text sm:text-2xl">
                        Guest reviews
                    </h2>

                    <div className="mt-2 flex items-center gap-1">
                        <FiStar className="fill-secondary text-secondary" />

                        <span className="font-semibold text-text">{reviews?.rating}</span>

                        <span className="text-sm text-muted">{reviews?.length} reviews</span>
                    </div>
                </div>
            </div>

            {/* Reviews List */}
            {reviews?.length > 0 ? (
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {reviews?.map((review) => (
                        <article
                            key={review?.id}
                            className="rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
                        >
                            {/* Reviewer */}
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex min-w-0 items-center gap-3">
                                    {/* Avatar */}
                                    {review?.avatar ? (
                                        <img
                                            src={review.avatar}
                                            alt={review.user}
                                            className="h-10 w-10 shrink-0 rounded-full object-cover"
                                        />
                                    ) : (
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <FiUser />
                                        </div>
                                    )}

                                    {/* User Info */}
                                    <div className="min-w-0">
                                        <h3 className="truncate text-sm font-semibold text-text">
                                            {review?.user}
                                        </h3>

                                        <p className="mt-0.5 text-xs text-muted">
                                            {review?.date}
                                        </p>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex shrink-0 items-center gap-1">
                                    <FiStar className="fill-secondary text-secondary" />

                                    <span className="text-sm font-semibold text-text">
                                        {review?.rating}
                                    </span>
                                </div>
                            </div>

                            {/* Comment */}
                            <p className="mt-4 text-sm leading-6 text-muted">
                                “{review?.comment}”
                            </p>

                            {/* Verified */}
                            <div className="mt-4 text-xs font-medium text-primary">
                                ✓ Verified guest
                            </div>
                        </article>
                    ))}
                </div>
            ) : (
                <div className="mt-6 rounded-2xl border border-border bg-card p-8 text-center">
                    <p className="text-sm text-muted">
                        No reviews available yet.
                    </p>
                </div>
            )}
        </section>
    );
};

export default Reviews;