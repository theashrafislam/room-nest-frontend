import React, { useEffect, useMemo, useRef, useState } from "react";
import {
    FiCalendar,
    FiChevronLeft,
    FiChevronRight,
    FiMinus,
    FiPlus,
    FiUsers,
    FiX,
} from "react-icons/fi";

const BookingCard = ({ room }) => {
    const [guests, setGuests] = useState(1);
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [activePicker, setActivePicker] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const calendarRef = useRef(null);

    /* =========================================
       DATE HELPERS
    ========================================= */

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    };

    const parseDate = (value) => {
        if (!value) return null;

        const [year, month, day] = value.split("-").map(Number);

        return new Date(year, month - 1, day);
    };

    const today = useMemo(() => {
        const date = new Date();
        date.setHours(0, 0, 0, 0);

        return date;
    }, []);

    const formatDisplayDate = (value) => {
        if (!value) return "Select date";

        const date = parseDate(value);

        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    /* =========================================
       NIGHTS
    ========================================= */

    const nights = useMemo(() => {
        if (!checkIn || !checkOut) return 0;

        const start = parseDate(checkIn);
        const end = parseDate(checkOut);

        const difference = end.getTime() - start.getTime();

        if (difference <= 0) return 0;

        return Math.ceil(
            difference / (1000 * 60 * 60 * 24)
        );
    }, [checkIn, checkOut]);

    const total = nights > 0 ? room.price * nights : room.price;

    /* =========================================
       CALENDAR DAYS
    ========================================= */

    const calendarDays = useMemo(() => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();

        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);

        const startingDay = firstDay.getDay();
        const daysInMonth = lastDay.getDate();

        const previousMonthLastDay = new Date(
            year,
            month,
            0
        ).getDate();

        const days = [];

        // Previous month
        for (let i = startingDay - 1; i >= 0; i--) {
            days.push({
                date: new Date(
                    year,
                    month - 1,
                    previousMonthLastDay - i
                ),
                currentMonth: false,
            });
        }

        // Current month
        for (let day = 1; day <= daysInMonth; day++) {
            days.push({
                date: new Date(year, month, day),
                currentMonth: true,
            });
        }

        // Next month
        const remainingDays = 42 - days.length;

        for (let day = 1; day <= remainingDays; day++) {
            days.push({
                date: new Date(year, month + 1, day),
                currentMonth: false,
            });
        }

        return days;
    }, [currentMonth]);

    const monthTitle = currentMonth.toLocaleDateString(
        "en-US",
        {
            month: "long",
            year: "numeric",
        }
    );

    /* =========================================
       MONTH NAVIGATION
    ========================================= */

    const previousMonth = () => {
        setCurrentMonth(
            new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth() - 1,
                1
            )
        );
    };

    const nextMonth = () => {
        setCurrentMonth(
            new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth() + 1,
                1
            )
        );
    };

    /* =========================================
       DATE STATUS
    ========================================= */

    const isPastDate = (date) => {
        return date < today;
    };

    const isCheckIn = (date) => {
        return formatDate(date) === checkIn;
    };

    const isCheckOut = (date) => {
        return formatDate(date) === checkOut;
    };

    const isSelected = (date) => {
        return isCheckIn(date) || isCheckOut(date);
    };

    const isInRange = (date) => {
        if (!checkIn || !checkOut) return false;

        const current = date.getTime();
        const start = parseDate(checkIn).getTime();
        const end = parseDate(checkOut).getTime();

        return current > start && current < end;
    };

    const isDisabled = (date) => {
        if (isPastDate(date)) return true;

        if (
            activePicker === "checkOut" &&
            checkIn &&
            date <= parseDate(checkIn)
        ) {
            return true;
        }

        return false;
    };

    /* =========================================
       OPEN CALENDAR
    ========================================= */

    const openPicker = (picker) => {
        setActivePicker(picker);

        const selectedDate =
            picker === "checkIn" ? checkIn : checkOut;

        if (selectedDate) {
            const date = parseDate(selectedDate);

            setCurrentMonth(
                new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    1
                )
            );

            return;
        }

        if (picker === "checkOut" && checkIn) {
            const date = parseDate(checkIn);

            setCurrentMonth(
                new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    1
                )
            );

            return;
        }

        setCurrentMonth(
            new Date(
                today.getFullYear(),
                today.getMonth(),
                1
            )
        );
    };

    /* =========================================
       DATE SELECTION
    ========================================= */

    const handleDateSelect = (date) => {
        const selectedDate = formatDate(date);

        if (activePicker === "checkIn") {
            setCheckIn(selectedDate);

            // Reset invalid checkout
            if (
                checkOut &&
                parseDate(checkOut) <= date
            ) {
                setCheckOut("");
            }

            // Automatically move to checkout
            setActivePicker("checkOut");

            return;
        }

        if (activePicker === "checkOut") {
            if (
                checkIn &&
                date > parseDate(checkIn)
            ) {
                setCheckOut(selectedDate);
                setActivePicker(null);
            }
        }
    };

    /* =========================================
       CLOSE ON OUTSIDE CLICK
    ========================================= */

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                calendarRef.current &&
                !calendarRef.current.contains(event.target)
            ) {
                setActivePicker(null);
            }
        };

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);

    /* =========================================
       GUEST CONTROLS
    ========================================= */

    const decreaseGuests = () => {
        setGuests((prev) => Math.max(1, prev - 1));
    };

    const increaseGuests = () => {
        setGuests((prev) =>
            Math.min(room.guests, prev + 1)
        );
    };


    return (
        <div className="rounded-2xl border border-border bg-card p-4 shadow-lg sm:p-5">
            {/* price  */}

            <div className="flex items-center justify-between gap-3">
                <div className="flex items-baseline">
                    <span className="text-xl font-bold text-text sm:text-2xl">
                        $ {room.price.toLocaleString()}
                    </span>

                    <span className="ml-1 text-xs text-muted sm:text-sm">
                        / night
                    </span>
                </div>

                <div className="flex items-center gap-1 rounded-lg bg-secondary/10 px-2 py-1">
                    <span className="text-sm text-secondary">
                        ★
                    </span>

                    <span className="text-xs font-semibold text-text sm:text-sm">
                        {room.rating}
                    </span>
                </div>
            </div>

            {/* date picker  */}

            <div
                ref={calendarRef}
                className="relative mt-5"
            >
                <div className="overflow-hidden rounded-xl border border-border">
                    <div className="grid grid-cols-2">
                        {/* CHECK IN */}

                        <button
                            type="button"
                            onClick={() =>
                                openPicker("checkIn")
                            }
                            className={`min-w-0 border-r border-border px-3 py-2.5 text-left transition-colors duration-300 hover:bg-background ${activePicker === "checkIn"
                                    ? "bg-background"
                                    : ""
                                }`}
                        >
                            <div className="flex items-center gap-1.5">
                                <FiCalendar className="shrink-0 text-xs text-primary" />

                                <span className="text-[9px] font-semibold uppercase tracking-wider text-muted sm:text-[10px]">
                                    Check-in
                                </span>
                            </div>

                            <p
                                className={`mt-1.5 truncate text-xs font-semibold sm:text-sm ${checkIn
                                        ? "text-text"
                                        : "text-muted"
                                    }`}
                            >
                                {formatDisplayDate(
                                    checkIn
                                )}
                            </p>
                        </button>

                        {/* CHECK OUT */}

                        <button
                            type="button"
                            onClick={() =>
                                openPicker("checkOut")
                            }
                            className={`min-w-0 px-3 py-2.5 text-left transition-colors duration-300 hover:bg-background ${activePicker === "checkOut"
                                    ? "bg-background"
                                    : ""
                                }`}
                        >
                            <div className="flex items-center gap-1.5">
                                <FiCalendar className="shrink-0 text-xs text-primary" />

                                <span className="text-[9px] font-semibold uppercase tracking-wider text-muted sm:text-[10px]">
                                    Check-out
                                </span>
                            </div>

                            <p
                                className={`mt-1.5 truncate text-xs font-semibold sm:text-sm ${checkOut
                                        ? "text-text"
                                        : "text-muted"
                                    }`}
                            >
                                {formatDisplayDate(
                                    checkOut
                                )}
                            </p>
                        </button>
                    </div>
                </div>

                {/* compact calendar  */}

                {activePicker && (
                    <div className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-xl sm:left-auto sm:right-0 sm:w-[350px] sm:p-4">
                        {/* Calendar Top */}

                        <div className="flex items-center justify-between">
                            <button
                                type="button"
                                onClick={previousMonth}
                                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-text transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary"
                                aria-label="Previous month"
                            >
                                <FiChevronLeft className="text-sm" />
                            </button>

                            <div className="text-center">
                                <p className="text-xs font-bold text-text sm:text-sm">
                                    {monthTitle}
                                </p>

                                <p className="mt-0.5 text-[9px] text-muted sm:text-[10px]">
                                    {activePicker === "checkIn"
                                        ? "Select check-in"
                                        : "Select check-out"}
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={nextMonth}
                                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-text transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary"
                                aria-label="Next month"
                            >
                                <FiChevronRight className="text-sm" />
                            </button>
                        </div>

                        {/* Weekdays */}

                        <div className="mt-3 grid grid-cols-7">
                            {[
                                "S",
                                "M",
                                "T",
                                "W",
                                "T",
                                "F",
                                "S",
                            ].map((day, index) => (
                                <div
                                    key={`${day}-${index}`}
                                    className="py-1.5 text-center text-[9px] font-semibold text-muted sm:text-[10px]"
                                >
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Days */}

                        <div className="grid grid-cols-7 gap-y-0.5">
                            {calendarDays.map(
                                (
                                    {
                                        date,
                                        currentMonth:
                                        isCurrentMonth,
                                    },
                                    index
                                ) => {
                                    const disabled =
                                        isDisabled(
                                            date
                                        );

                                    const selected =
                                        isSelected(
                                            date
                                        );

                                    const range =
                                        isInRange(date);

                                    const checkInDate =
                                        isCheckIn(date);

                                    const checkOutDate =
                                        isCheckOut(
                                            date
                                        );

                                    const isToday =
                                        formatDate(
                                            date
                                        ) ===
                                        formatDate(today);

                                    return (
                                        <div
                                            key={`${formatDate(
                                                date
                                            )}-${index}`}
                                            className={`relative flex h-8 items-center justify-center sm:h-9 ${range
                                                    ? "bg-primary/10"
                                                    : ""
                                                }`}
                                        >
                                            <button
                                                type="button"
                                                disabled={
                                                    disabled
                                                }
                                                onClick={() =>
                                                    handleDateSelect(
                                                        date
                                                    )
                                                }
                                                className={`
                                                    flex h-7 w-7 items-center justify-center rounded-lg text-[10px] font-medium transition-all duration-200 sm:h-8 sm:w-8 sm:text-xs
                                                    ${selected
                                                        ? "bg-primary font-semibold text-white shadow-sm"
                                                        : ""
                                                    }
                                                    ${!selected &&
                                                        !disabled &&
                                                        isCurrentMonth
                                                        ? "text-text hover:bg-primary/10 hover:text-primary"
                                                        : ""
                                                    }
                                                    ${!isCurrentMonth
                                                        ? "text-muted/25"
                                                        : ""
                                                    }
                                                    ${disabled
                                                        ? "cursor-not-allowed text-muted/20"
                                                        : ""
                                                    }
                                                    ${isToday &&
                                                        !selected
                                                        ? "font-bold text-primary ring-1 ring-primary/30"
                                                        : ""
                                                    }
                                                `}
                                            >
                                                {date.getDate()}
                                            </button>
                                        </div>
                                    );
                                }
                            )}
                        </div>

                        {/* Compact Footer */}

                        <div className="mt-3 flex items-center justify-between border-t border-border pt-2.5">
                            <div className="flex items-center gap-1.5">
                                <span className="h-2 w-2 rounded-full bg-primary" />

                                <span className="text-[9px] text-muted sm:text-[10px]">
                                    Selected date
                                </span>
                            </div>

                            <button
                                type="button"
                                onClick={() =>
                                    setActivePicker(null)
                                }
                                className="flex items-center gap-1 text-[10px] font-semibold text-muted transition-colors duration-300 hover:text-primary"
                            >
                                <FiX className="text-xs" />
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* guests  */}

            <div className="mt-3 rounded-xl border border-border px-3 py-2.5">
                <div className="flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-2.5">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <FiUsers className="text-sm" />
                        </div>

                        <div className="min-w-0">
                            <p className="text-xs font-semibold text-text sm:text-sm">
                                Guests
                            </p>

                            <p className="truncate text-[10px] text-muted sm:text-xs">
                                Maximum {room.guests} guests
                            </p>
                        </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-1.5">
                        <button
                            type="button"
                            onClick={decreaseGuests}
                            disabled={guests === 1}
                            className="flex h-7 w-7 items-center justify-center rounded-lg border border-border text-text transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                            aria-label="Decrease guests"
                        >
                            <FiMinus className="text-xs" />
                        </button>

                        <span className="w-5 text-center text-xs font-semibold text-text">
                            {guests}
                        </span>

                        <button
                            type="button"
                            onClick={increaseGuests}
                            disabled={
                                guests === room.guests
                            }
                            className="flex h-7 w-7 items-center justify-center rounded-lg border border-border text-text transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                            aria-label="Increase guests"
                        >
                            <FiPlus className="text-xs" />
                        </button>
                    </div>
                </div>
            </div>


            {/* reserve  */}

            <button
                type="button"
                className="mt-4 flex h-11 w-full items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-md active:scale-[0.98]"
            >
                Reserve
            </button>

            <p className="mt-2 text-center text-[10px] text-muted sm:text-xs">
                You won't be charged yet
            </p>

            {/* price summary  */}

            <div className="mt-5 space-y-2.5 border-t border-border pt-4">
                <div className="flex items-start justify-between gap-4 text-xs text-muted sm:text-sm">
                    <span>
                        $ {room.price.toLocaleString()} ×{" "}
                        {nights || 1}{" "}
                        {nights === 1
                            ? "night"
                            : "nights"}
                    </span>

                    <span className="shrink-0 text-text">
                        $ {total.toLocaleString()}
                    </span>
                </div>

                <div className="flex items-center justify-between border-t border-border pt-3 text-sm font-bold text-text sm:text-base">
                    <span>Total</span>

                    <span>
                        $ {total.toLocaleString()}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;