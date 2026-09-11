import React from "react";
import { FiSliders } from "react-icons/fi";

const RoomFilters = ({
  priceRange,
  setPriceRange,
  selectedTypes,
  setSelectedTypes,
  selectedGuests,
  setSelectedGuests,
}) => {
  const roomTypes = [
    "Apartment",
    "Suite",
    "House",
    "Studio",
    "Villa",
  ];

  const handleTypeChange = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(
        selectedTypes.filter((item) => item !== type)
      );
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-text">Filters</h3>

          <p className="mt-1 text-sm text-muted">
            Refine your search
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-background">
          <FiSliders className="text-lg text-primary" />
        </div>
      </div>

      {/* Price */}
      <div className="border-b border-border pb-6">
        <h4 className="mb-4 font-semibold text-text">
          Price Range
        </h4>

        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex-1 rounded-xl border border-border bg-background px-3 py-2">
            <p className="text-xs text-muted">Minimum</p>

            <p className="mt-0.5 text-sm font-semibold text-text">
              ৳{priceRange[0].toLocaleString()}
            </p>
          </div>

          <span className="text-muted">—</span>

          <div className="flex-1 rounded-xl border border-border bg-background px-3 py-2">
            <p className="text-xs text-muted">Maximum</p>

            <p className="mt-0.5 text-sm font-semibold text-text">
              ৳{priceRange[1].toLocaleString()}
            </p>
          </div>
        </div>

        <input
          type="range"
          min="1000"
          max="10000"
          step="500"
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([
              priceRange[0],
              Number(e.target.value),
            ])
          }
          className="w-full accent-primary"
        />
      </div>

      {/* Property Type */}
      <div className="border-b border-border py-6">
        <h4 className="mb-4 font-semibold text-text">
          Property Type
        </h4>

        <div className="space-y-3">
          {roomTypes.map((type) => (
            <label
              key={type}
              className="flex cursor-pointer items-center justify-between rounded-xl px-2 py-1.5 text-sm text-muted transition-colors duration-300 hover:bg-background"
            >
              <span>{type}</span>

              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => handleTypeChange(type)}
                className="h-4 w-4 cursor-pointer rounded border-border accent-primary"
              />
            </label>
          ))}
        </div>
      </div>

      {/* Guests */}
      <div className="pt-6">
        <h4 className="mb-4 font-semibold text-text">
          Guests
        </h4>

        <select
          value={selectedGuests}
          onChange={(e) =>
            setSelectedGuests(Number(e.target.value))
          }
          className="h-12 w-full rounded-xl border border-border bg-card px-4 text-sm text-text outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/10"
        >
          <option value={0}>Any number of guests</option>
          <option value={1}>1+ Guest</option>
          <option value={2}>2+ Guests</option>
          <option value={4}>4+ Guests</option>
          <option value={6}>6+ Guests</option>
          <option value={8}>8+ Guests</option>
        </select>
      </div>
    </div>
  );
};

export default RoomFilters;