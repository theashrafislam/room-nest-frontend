
import { useState } from "react";
import {
    FiUser,
    FiMail,
    FiPhone,
    FiMapPin,
    FiEdit2,
    FiCheck,
    FiX,
    FiShield,
    FiLock,
    FiChevronRight,
    FiCamera,
    FiArrowLeft,
} from "react-icons/fi";
import { Link } from "react-router";

const Profile = ({
    user = {},
    onUpdateProfile,
}) => {
    const getProfileData = (data) => ({
        name: data.name || "",
        email: data.email || "",
        phone: data.phone || "",
        location: data.location || "",
        bio: data.bio || "",
        avatar: data.avatar || data.photoURL || "",
    });

    const [profile, setProfile] = useState(() =>
        getProfileData(user)
    );

    const [formData, setFormData] = useState(() =>
        getProfileData(user)
    );

    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const initials =
        profile.name
            .trim()
            .split(/\s+/)
            .slice(0, 2)
            .map((part) => part[0])
            .join("")
            .toUpperCase() || "U";

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleEdit = () => {
        setFormData({ ...profile });
        setMessage("");
        setError("");
        setIsEditing(true);
    };

    const handleCancel = () => {
        setFormData({ ...profile });
        setIsEditing(false);
        setMessage("");
        setError("");
    };

    const handleSave = async (event) => {
        event.preventDefault();

        setMessage("");
        setError("");

        if (!formData.name.trim() || !formData.email.trim()) {
            setError("Name and email address are required.");
            return;
        }

        try {
            setIsSaving(true);

            const updatedProfile = {
                ...formData,
                name: formData.name.trim(),
                email: formData.email.trim(),
                phone: formData.phone.trim(),
                location: formData.location.trim(),
                bio: formData.bio.trim(),
            };

            if (onUpdateProfile) {
                await onUpdateProfile(updatedProfile);
            }

            setProfile(updatedProfile);
            setFormData(updatedProfile);
            setIsEditing(false);

            setMessage(
                onUpdateProfile
                    ? "Your profile has been updated successfully."
                    : "Profile updated in this session. Connect your API to save changes permanently."
            );
        } catch (err) {
            setError(
                err?.message ||
                    "Unable to update your profile. Please try again."
            );
        } finally {
            setIsSaving(false);
        }
    };

    const inputClass =
        "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:bg-white focus:ring-4 focus:ring-teal-600/10 disabled:cursor-default disabled:opacity-90";

    const fields = [
        {
            label: "Full name",
            name: "name",
            icon: FiUser,
            placeholder: "Enter your full name",
            autoComplete: "name",
            required: true,
        },
        {
            label: "Email address",
            name: "email",
            icon: FiMail,
            type: "email",
            placeholder: "Enter your email address",
            autoComplete: "email",
            required: true,
        },
        {
            label: "Phone number",
            name: "phone",
            icon: FiPhone,
            type: "tel",
            placeholder: "Enter your phone number",
            autoComplete: "tel",
        },
        {
            label: "Location",
            name: "location",
            icon: FiMapPin,
            placeholder: "City, Country",
            autoComplete: "address-level2",
        },
    ];

    return (
        <main className="min-h-screen bg-slate-50 pb-12 text-slate-800">
            {/* Page header */}
            <section className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-6xl px-4 py-7 sm:px-6 sm:py-9 lg:px-8">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Link
                            to="/"
                            className="transition hover:text-teal-700"
                        >
                            Home
                        </Link>

                        <FiChevronRight size={14} />

                        <span className="font-medium text-teal-700">
                            My Profile
                        </span>
                    </div>

                    <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-700 sm:text-sm">
                                Account settings
                            </p>

                            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                                My Profile
                            </h1>

                            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                                Manage your personal information and keep
                                your account details up to date.
                            </p>
                        </div>

                        <Link
                            to="/dashboard"
                            className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-800"
                        >
                            <FiArrowLeft size={16} />
                            Back to Dashboard
                        </Link>
                    </div>
                </div>
            </section>

            <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                {/* Profile overview */}
                <section className="relative mb-6 overflow-hidden rounded-2xl bg-teal-800 p-5 text-white shadow-sm sm:p-7 lg:p-8">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10"
                    />

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-36 right-24 h-64 w-64 rounded-full border border-white/10"
                    />

                    <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex min-w-0 items-center gap-4 sm:gap-5">
                            <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-2 border-white/20 bg-white/15 text-2xl font-bold sm:h-24 sm:w-24 sm:text-3xl">
                                {profile.avatar ? (
                                    <img
                                        src={profile.avatar}
                                        alt={`${profile.name || "User"} avatar`}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    initials
                                )}
                            </div>

                            <div className="min-w-0">
                                <h2 className="break-words text-xl font-bold sm:text-2xl">
                                    {profile.name || "Your Name"}
                                </h2>

                                <p className="mt-1 break-all text-sm text-teal-100">
                                    {profile.email || "Add your email address"}
                                </p>

                                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-teal-50">
                                    <FiShield size={14} />
                                    Account information
                                </div>
                            </div>
                        </div>

                        {!isEditing && (
                            <button
                                type="button"
                                onClick={handleEdit}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold transition hover:bg-white/20 sm:w-auto"
                            >
                                <FiEdit2 size={16} />
                                Edit profile
                            </button>
                        )}
                    </div>
                </section>

                {/* Notifications */}
                {message && (
                    <div
                        role="status"
                        className="mb-5 rounded-xl border border-teal-200 bg-teal-50 px-4 py-3 text-sm leading-6 text-teal-800"
                    >
                        {message}
                    </div>
                )}

                {error && (
                    <div
                        role="alert"
                        className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
                    >
                        {error}
                    </div>
                )}

                <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
                    {/* Personal information */}
                    <section className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:col-span-8">
                        <div className="mb-6">
                            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                                Personal information
                            </h2>

                            <p className="mt-1 text-sm leading-6 text-slate-500">
                                Your personal details help us keep your
                                account information accurate.
                            </p>
                        </div>

                        <form onSubmit={handleSave}>
                            <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
                                {fields.map((field) => {
                                    const Icon = field.icon;

                                    return (
                                        <div key={field.name}>
                                            <label
                                                htmlFor={`profile-${field.name}`}
                                                className="mb-2 block text-sm font-semibold text-slate-700"
                                            >
                                                {field.label}
                                                {field.required && (
                                                    <span className="ml-1 text-red-500">
                                                        *
                                                    </span>
                                                )}
                                            </label>

                                            <div className="relative">
                                                <Icon
                                                    size={17}
                                                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                                />

                                                <input
                                                    id={`profile-${field.name}`}
                                                    name={field.name}
                                                    type={field.type || "text"}
                                                    value={formData[field.name]}
                                                    onChange={handleChange}
                                                    disabled={!isEditing || isSaving}
                                                    required={field.required}
                                                    autoComplete={field.autoComplete}
                                                    placeholder={field.placeholder}
                                                    className={`${inputClass} pl-10`}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="profile-bio"
                                        className="mb-2 block text-sm font-semibold text-slate-700"
                                    >
                                        About me{" "}
                                        <span className="font-normal text-slate-400">
                                            (Optional)
                                        </span>
                                    </label>

                                    <textarea
                                        id="profile-bio"
                                        name="bio"
                                        rows={4}
                                        maxLength={300}
                                        value={formData.bio}
                                        onChange={handleChange}
                                        disabled={!isEditing || isSaving}
                                        placeholder="Write a short introduction about yourself..."
                                        className={`${inputClass} resize-y leading-6`}
                                    />

                                    {isEditing && (
                                        <p className="mt-1.5 text-right text-xs text-slate-400">
                                            {formData.bio.length}/300
                                        </p>
                                    )}
                                </div>
                            </div>

                            {isEditing && (
                                <div className="mt-6 flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
                                    <button
                                        type="button"
                                        onClick={handleCancel}
                                        disabled={isSaving}
                                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 disabled:opacity-50"
                                    >
                                        <FiX size={16} />
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        disabled={isSaving}
                                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        <FiCheck size={17} />
                                        {isSaving ? "Saving..." : "Save changes"}
                                    </button>
                                </div>
                            )}
                        </form>
                    </section>

                    {/* Account information sidebar */}
                    <aside className="space-y-5 lg:col-span-4">
                        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                            <div className="mb-5 flex items-center gap-3">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                                    <FiShield size={21} />
                                </div>

                                <div>
                                    <h2 className="font-bold text-slate-900">
                                        Account security
                                    </h2>
                                    <p className="mt-1 text-xs text-slate-500">
                                        Keep your account protected.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                                <div className="flex items-start gap-3">
                                    <FiLock
                                        size={18}
                                        className="mt-0.5 shrink-0 text-slate-500"
                                    />

                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-sm font-semibold text-slate-800">
                                            Password & security
                                        </h3>

                                        <p className="mt-1 text-xs leading-5 text-slate-500">
                                            Manage your password and account
                                            security settings.
                                        </p>
                                    </div>
                                </div>

                                <Link
                                    to="/change-password"
                                    className="mt-4 inline-flex w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-800"
                                >
                                    Change password
                                    <FiChevronRight size={16} />
                                </Link>
                            </div>

                            <p className="mt-4 text-xs leading-5 text-slate-500">
                                If your project uses Google or another
                                provider to sign in, password management
                                may need to happen through that provider.
                            </p>
                        </section>

                        <section className="rounded-2xl border border-amber-100 bg-amber-50/70 p-5 sm:p-6">
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                                <FiUser size={20} />
                            </div>

                            <h2 className="font-bold text-slate-900">
                                Need help?
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Have a question about your account? Visit
                                our help center for assistance.
                            </p>

                            <Link
                                to="/help"
                                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-800 transition hover:text-teal-950"
                            >
                                Visit Help Center
                                <FiChevronRight size={16} />
                            </Link>
                        </section>

                        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                            <div className="flex items-start gap-3">
                                <FiShield
                                    size={19}
                                    className="mt-0.5 shrink-0 text-teal-700"
                                />

                                <div>
                                    <h2 className="text-sm font-bold text-slate-900">
                                        Your privacy matters
                                    </h2>

                                    <p className="mt-1 text-xs leading-5 text-slate-500">
                                        Review how your personal information
                                        is handled.
                                    </p>

                                    <Link
                                        to="/privacy"
                                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-900"
                                    >
                                        Privacy policy
                                        <FiChevronRight size={15} />
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </aside>
                </div>

                <footer className="mt-8 border-t border-slate-200 pt-5 text-center">
                    <p className="text-xs leading-6 text-slate-500">
                        RoomNest · Your account, your way.
                    </p>
                </footer>
            </div>
        </main>
    );
};

export default Profile;
