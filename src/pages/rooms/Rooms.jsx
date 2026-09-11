import React, { useEffect, useMemo, useState } from "react";
import {
    FiSearch,
    FiMapPin,
    FiUsers,
    FiSliders,
    FiChevronDown,
    FiX,
    FiHome,
} from "react-icons/fi";
import RoomCard from "../../components/rooms/RoomCard";
import RoomFilters from "../../components/rooms/RoomFilters";
import RoomPagination from "../../components/rooms/RoomPagination";


const roomsData = [
    {
        id: 1,
        title: "Modern Tokyo City Apartment",
        location: "Shinjuku, Tokyo",
        type: "Apartment",
        price: 8500,
        rating: 4.9,
        guests: 4,
        bedrooms: 2,
        description:
            "A stylish modern apartment in the heart of Tokyo with excellent city access.",
        image:
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "Kitchen", "AC"],
    },

    {
        id: 2,
        title: "Premium Tokyo City Suite",
        location: "Shibuya, Tokyo",
        type: "Suite",
        price: 10500,
        rating: 4.8,
        guests: 3,
        bedrooms: 1,
        description:
            "Enjoy a premium suite with elegant interiors and beautiful Tokyo city views.",
        image:
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "TV", "Kitchen"],
    },

    {
        id: 3,
        title: "Traditional Kyoto Residence",
        location: "Gion, Kyoto",
        type: "House",
        price: 9200,
        rating: 4.9,
        guests: 5,
        bedrooms: 2,
        description:
            "A peaceful traditional-style residence located near the historic streets of Kyoto.",
        image:
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "Kitchen", "Parking"],
    },

    {
        id: 4,
        title: "Minimal Kyoto Studio",
        location: "Higashiyama, Kyoto",
        type: "Studio",
        price: 6800,
        rating: 4.7,
        guests: 2,
        bedrooms: 1,
        description:
            "A minimalist and peaceful studio perfect for couples and solo travelers.",
        image:
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "AC", "TV"],
    },

    {
        id: 5,
        title: "Luxury Osaka Apartment",
        location: "Namba, Osaka",
        type: "Apartment",
        price: 7800,
        rating: 4.8,
        guests: 4,
        bedrooms: 2,
        description:
            "A comfortable luxury apartment close to Osaka's popular shopping and dining areas.",
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "Parking", "AC"],
    },

    {
        id: 6,
        title: "Cozy Osaka Urban Retreat",
        location: "Umeda, Osaka",
        type: "Apartment",
        price: 6200,
        rating: 4.6,
        guests: 2,
        bedrooms: 1,
        description:
            "A cozy urban stay with modern facilities and convenient access to central Osaka.",
        image:
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "Kitchen", "TV"],
    },

    {
        id: 7,
        title: "Grand Family Villa",
        location: "Kita, Sapporo",
        type: "Villa",
        price: 12500,
        rating: 5.0,
        guests: 8,
        bedrooms: 4,
        description:
            "A spacious luxury villa perfect for families visiting beautiful Sapporo.",
        image:
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "Parking", "Kitchen"],
    },

    {
        id: 8,
        title: "Contemporary Sapporo Home",
        location: "Chuo, Sapporo",
        type: "House",
        price: 8900,
        rating: 4.8,
        guests: 5,
        bedrooms: 2,
        description:
            "A contemporary home with clean interiors and easy access to Sapporo attractions.",
        image:
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "AC", "Kitchen"],
    },

    {
        id: 9,
        title: "Fukuoka Modern Apartment",
        location: "Hakata, Fukuoka",
        type: "Apartment",
        price: 5900,
        rating: 4.7,
        guests: 3,
        bedrooms: 1,
        description:
            "A modern apartment in Hakata offering comfort and convenient city transportation.",
        image:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "Kitchen", "AC"],
    },

    {
        id: 10,
        title: "Elegant Fukuoka Suite",
        location: "Tenjin, Fukuoka",
        type: "Suite",
        price: 7200,
        rating: 4.9,
        guests: 4,
        bedrooms: 2,
        description:
            "An elegant suite located near Fukuoka's shopping, restaurants and entertainment.",
        image:
            "https://images.unsplash.com/photo-1600566753051-8c9c7b5e7c6b?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "TV", "Kitchen"],
    },

    {
        id: 11,
        title: "Yokohama Bay View Apartment",
        location: "Minato Mirai, Yokohama",
        type: "Apartment",
        price: 9800,
        rating: 4.9,
        guests: 4,
        bedrooms: 2,
        description:
            "A premium apartment with beautiful bay views and modern city facilities.",
        image:
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "Parking", "AC"],
    },

    {
        id: 12,
        title: "Peaceful Yokohama Studio",
        location: "Naka, Yokohama",
        type: "Studio",
        price: 5600,
        rating: 4.6,
        guests: 2,
        bedrooms: 1,
        description:
            "A peaceful compact studio for travelers looking for a comfortable city stay.",
        image:
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "TV", "AC"],
    },

    {
        id: 13,
        title: "Nagoya Executive Residence",
        location: "Naka Ward, Nagoya",
        type: "House",
        price: 7600,
        rating: 4.8,
        guests: 5,
        bedrooms: 3,
        description:
            "A spacious executive residence with modern interiors and excellent city access.",
        image:
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "Kitchen", "Parking"],
    },

    {
        id: 14,
        title: "Modern Nagoya City Suite",
        location: "Sakae, Nagoya",
        type: "Suite",
        price: 6800,
        rating: 4.7,
        guests: 3,
        bedrooms: 1,
        description:
            "A modern suite located in a vibrant part of Nagoya with excellent facilities.",
        image:
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "TV", "Kitchen"],
    },

    {
        id: 15,
        title: "Luxury Hakone Retreat",
        location: "Hakone, Kanagawa",
        type: "Villa",
        price: 14500,
        rating: 5.0,
        guests: 6,
        bedrooms: 3,
        description:
            "A luxurious private retreat surrounded by peaceful natural scenery in Hakone.",
        image:
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "Parking", "Kitchen"],
    },

    {
        id: 16,
        title: "Traditional Hakone House",
        location: "Gora, Hakone",
        type: "House",
        price: 11200,
        rating: 4.9,
        guests: 6,
        bedrooms: 3,
        description:
            "A beautiful traditional-inspired home offering a relaxing Japanese countryside experience.",
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "Kitchen", "Parking"],
    },

    {
        id: 17,
        title: "Premium Nara Guest Apartment",
        location: "Nara Park, Nara",
        type: "Apartment",
        price: 6400,
        rating: 4.8,
        guests: 4,
        bedrooms: 2,
        description:
            "A comfortable apartment near Nara's famous historical attractions and peaceful parks.",
        image:
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "AC", "Kitchen"],
    },

    {
        id: 18,
        title: "Elegant Kobe Harbor Suite",
        location: "Harborland, Kobe",
        type: "Suite",
        price: 8300,
        rating: 4.9,
        guests: 3,
        bedrooms: 1,
        description:
            "An elegant suite near Kobe Harbor with modern interiors and relaxing city views.",
        image:
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "TV", "AC"],
    },

    {
        id: 19,
        title: "Quiet Hiroshima Urban Home",
        location: "Naka Ward, Hiroshima",
        type: "House",
        price: 6100,
        rating: 4.7,
        guests: 5,
        bedrooms: 2,
        description:
            "A comfortable urban home located near Hiroshima's major attractions and transport links.",
        image:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "Kitchen", "Parking"],
    },

    {
        id: 20,
        title: "Luxury Okinawa Beach Villa",
        location: "Naha, Okinawa",
        type: "Villa",
        price: 13800,
        rating: 5.0,
        guests: 7,
        bedrooms: 4,
        description:
            "A beautiful luxury villa perfect for families seeking a relaxing Okinawa getaway.",
        image:
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
        amenities: ["WiFi", "Parking", "Kitchen"],
    },
];

const Rooms = () => {

    const [searchInput, setSearchInput] = useState("");
    const [search, setSearch] = useState("");

    const [sortBy, setSortBy] = useState("recommended");

    const [priceRange, setPriceRange] = useState([
        1000,
        10000,
    ]);

    const [selectedTypes, setSelectedTypes] = useState([]);

    const [selectedGuests, setSelectedGuests] = useState(0);

    const [showMobileFilters, setShowMobileFilters] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const roomsPerPage = 6;

    // Filter + Search + Sort

    const filteredRooms = useMemo(() => {
        let result = [...roomsData];

        // Search

        if (search.trim()) {
            const keyword = search.toLowerCase().trim();

            result = result.filter((room) => {
                return (
                    room.title.toLowerCase().includes(keyword) ||
                    room.location.toLowerCase().includes(keyword) ||
                    room.type.toLowerCase().includes(keyword)
                );
            });
        }

        // price 

        result = result.filter(
            (room) =>
                room.price >= priceRange[0] &&
                room.price <= priceRange[1]
        );

        // Property Type

        if (selectedTypes.length > 0) {
            result = result.filter((room) =>
                selectedTypes.includes(room.type)
            );
        }

        // Guests

        if (selectedGuests > 0) {
            result = result.filter(
                (room) => room.guests >= selectedGuests
            );
        }

        //  Sorting


        if (sortBy === "price-low") {
            result.sort((a, b) => a.price - b.price);
        }

        if (sortBy === "price-high") {
            result.sort((a, b) => b.price - a.price);
        }

        if (sortBy === "rating") {
            result.sort((a, b) => b.rating - a.rating);
        }

        return result;
    }, [
        search,
        priceRange,
        selectedTypes,
        selectedGuests,
        sortBy,
    ]);

    // clear filters 

    const clearFilters = () => {
        setSearch("");
        setPriceRange([1000, 10000]);
        setSelectedTypes([]);
        setSelectedGuests(0);
    };


    // pagination works 
    useEffect(() => {
        setCurrentPage(1);
    }, [search, priceRange, selectedTypes, selectedGuests, sortBy]);

    const totalPages = Math.ceil(filteredRooms.length / roomsPerPage);

    const startIndex = (currentPage - 1) * roomsPerPage;

    const currentRooms = filteredRooms.slice(
        startIndex,
        startIndex + roomsPerPage
    );

    return (
        <main className="min-h-screen bg-background">

            {/* hero section   */}

            <section className="border-b border-border bg-card">
                <div className="mx-auto max-w-7xl px-4 lg:px-0 py-12 lg:py-16">
                    {/* Heading */}
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                            RoomNest
                        </span>

                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
                            Find a place you'll
                            <span className="text-primary">
                                {" "}
                                love to stay
                            </span>
                        </h1>

                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
                            Discover beautiful, comfortable and premium
                            stays for your next journey.
                        </p>
                    </div>

                    {/* Search */}
                    <div className="mx-auto mt-8 max-w-5xl">
                        <div className="rounded-2xl border border-border bg-background p-3 shadow-sm">
                            <div className="grid gap-3 lg:grid-cols-[1fr_auto_auto_auto]">
                                {/* Search Input */}
                                <div className="relative">
                                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-primary" />

                                    <input
                                        type="text"
                                        value={searchInput}
                                        onChange={(e) => {
                                            const value = e.target.value;

                                            setSearchInput(value);

                                            if (value.trim() === "") {
                                                setSearch("");
                                            }
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                setSearch(searchInput);
                                            }
                                        }}
                                        placeholder="Search rooms, locations..."
                                        className="h-12 w-full rounded-xl border border-border bg-card pl-11 pr-4 text-sm text-text outline-none transition-all duration-300 placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/10"
                                    />
                                </div>

                                {/* Location */}
                                <div className="flex h-12 items-center gap-3 rounded-xl border border-border bg-card px-4">
                                    <FiMapPin className="shrink-0 text-lg text-primary" />

                                    <div className=" min-w-[120px] sm:block">
                                        <p className="text-xs text-muted">
                                            Location
                                        </p>

                                        <p className="text-sm font-semibold text-text">
                                            Dhaka
                                        </p>
                                    </div>
                                </div>

                                {/* Guests */}
                                <div className="flex h-12 items-center gap-3 rounded-xl border border-border bg-card px-4">
                                    <FiUsers className="shrink-0 text-lg text-primary" />

                                    <div className="min-w-[100px] sm:block">
                                        <p className="text-xs text-muted">
                                            Guests
                                        </p>

                                        <p className="text-sm font-semibold text-text">
                                            Any guests
                                        </p>
                                    </div>
                                </div>

                                {/* Search Button */}
                                <button
                                    onClick={() => setSearch(searchInput)}
                                    type="button"
                                    className="flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-md"
                                >
                                    <FiSearch />
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* content  */}

            <section className="mx-auto max-w-7xl px-4 py-10 lg:px-0">
                {/* Top Header */}
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm font-medium text-muted">
                            {filteredRooms.length}{" "}
                            {filteredRooms.length === 1
                                ? "property"
                                : "properties"}{" "}
                            available
                        </p>

                        <h2 className="mt-1 text-2xl font-bold text-text sm:text-3xl">
                            Explore our stays
                        </h2>
                    </div>

                    {/* Right Controls */}
                    <div className="flex items-center gap-3">
                        {/* Mobile Filter Button */}
                        <button
                            type="button"
                            onClick={() =>
                                setShowMobileFilters(true)
                            }
                            className="flex h-11 items-center gap-2 rounded-xl border border-border bg-card px-4 text-sm font-semibold text-text transition-all duration-300 hover:border-primary hover:text-primary lg:hidden"
                        >
                            <FiSliders />
                            Filters
                        </button>

                        {/* Sort */}
                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(e) =>
                                    setSortBy(e.target.value)
                                }
                                className="h-11 appearance-none rounded-xl border border-border bg-card pl-4 pr-10 text-sm font-medium text-text outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/10"
                            >
                                <option value="recommended">
                                    Recommended
                                </option>

                                <option value="price-low">
                                    Price: Low to High
                                </option>

                                <option value="price-high">
                                    Price: High to Low
                                </option>

                                <option value="rating">
                                    Highest Rated
                                </option>
                            </select>

                            <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted" />
                        </div>
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
                    {/* Desktop Filters */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-24">
                            <RoomFilters
                                priceRange={priceRange}
                                setPriceRange={setPriceRange}
                                selectedTypes={selectedTypes}
                                setSelectedTypes={setSelectedTypes}
                                selectedGuests={selectedGuests}
                                setSelectedGuests={setSelectedGuests}
                                onClear={clearFilters}
                            />
                        </div>
                    </aside>

                    {/* Rooms */}
                    <div>
                        {filteredRooms.length > 0 ? (
                            <>
                                {/* Room Cards */}
                                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                                    {currentRooms.map((room) => (
                                        <RoomCard key={room.id} room={room} />
                                    ))}
                                </div>

                                {/* Pagination */}
                                <RoomPagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={setCurrentPage}
                                />
                            </>
                        ) : (
                            /* Empty State */
                            <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-border bg-card px-6 text-center shadow-sm">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                    <FiHome className="text-2xl text-primary" />
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-text">
                                    No rooms found
                                </h3>

                                <p className="mt-2 max-w-md text-sm leading-6 text-muted">
                                    We couldn't find any rooms matching
                                    your current search or filters.
                                </p>

                                <button
                                    type="button"
                                    onClick={clearFilters}
                                    className="mt-6 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-hover"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* MOBILE FILTER DRAWER */}

            {showMobileFilters && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    {/* Overlay */}
                    <button
                        type="button"
                        aria-label="Close filters"
                        onClick={() =>
                            setShowMobileFilters(false)
                        }
                        className="absolute inset-0 bg-text/40"
                    />

                    {/* Drawer */}
                    <div className="absolute bottom-0 left-0 right-0 max-h-[90vh] overflow-y-auto rounded-t-2xl bg-card p-5 shadow-lg sm:p-6">
                        {/* Drawer Header */}
                        <div className="mb-5 flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-text">
                                    Filter Rooms
                                </h3>

                                <p className="mt-1 text-sm text-muted">
                                    Refine your search
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() =>
                                    setShowMobileFilters(false)
                                }
                                className="flex h-10 w-10 items-center justify-center rounded-xl bg-background text-text transition-all duration-300 hover:text-primary"
                            >
                                <FiX className="text-xl" />
                            </button>
                        </div>

                        {/* Filters */}
                        <RoomFilters
                            priceRange={priceRange}
                            setPriceRange={setPriceRange}
                            selectedTypes={selectedTypes}
                            setSelectedTypes={setSelectedTypes}
                            selectedGuests={selectedGuests}
                            setSelectedGuests={setSelectedGuests}
                        />

                        {/* Actions */}
                        <div className="mt-5 flex gap-3">
                            <button
                                type="button"
                                onClick={clearFilters}
                                className="flex-1 rounded-xl border border-border px-4 py-3 text-sm font-semibold text-text transition-all duration-300 hover:border-primary hover:text-primary"
                            >
                                Clear
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    setShowMobileFilters(false)
                                }
                                className="flex-1 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-hover"
                            >
                                Show {filteredRooms.length} Rooms
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Rooms;