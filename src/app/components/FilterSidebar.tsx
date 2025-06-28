"use client";
import React, { useState } from "react";

interface FilterSidebarProps {
  locationOptions: string[];
  plotSizeOptions: number[];
  approvalOptions: string[];
  layoutStatusOptions: string[];
  location: string;
  setLocation: (val: string) => void;
  plotSize: string;
  setPlotSize: (val: string) => void;
  budget: number;
  setBudget: (val: number) => void;
  approval: string;
  setApproval: (val: string) => void;
  layoutStatus: string;
  setLayoutStatus: (val: string) => void;
  onApply: () => void;
  onReset: () => void;
}

const BUDGET_MIN = 0;
const BUDGET_MAX = 100000000;
const BUDGET_STEP = 100000;

const formatINR = (val: number) =>
  `₹${val.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  locationOptions,
  plotSizeOptions,
  approvalOptions,
  layoutStatusOptions,
  location,
  setLocation,
  plotSize,
  setPlotSize,
  approval,
  setApproval,
  layoutStatus,
  setLayoutStatus,
  onApply,
  onReset,
}) => {
  const [budget, setBudget] = useState<number>(BUDGET_MAX); // or any default

  return (
    <div className="bg-white p-6 font-inter rounded-2xl h-fit text-black shadow-lg w-full max-w-xs">
      <h2 className="text-2xl font-bold text-[#1e293b] mb-6">Filters</h2>

      {/* Location Dropdown */}
      <select
        className="w-full border rounded-md p-3 mb-4 focus:outline-none"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="">Location</option>
        {locationOptions.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      {/* Plot Size Dropdown */}
      {/* <select
        className="w-full border rounded-md p-3 mb-4 focus:outline-none"
        value={plotSize}
        onChange={(e) => setPlotSize(e.target.value)}
      >
        <option value="">Plot Size</option>
        {plotSizeOptions.map((size) => (
          <option key={size} value={size}>
            {size} sq.ft.
          </option>
        ))}
      </select> */}

      {/* Budget Single Slider */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Max Budget
        </label>
        <div className="flex items-center justify-between text-sm mb-2">
          <span>{formatINR(BUDGET_MIN)}</span>
          <span>{formatINR(budget)}</span>
        </div>
        <input
          type="range"
          min={BUDGET_MIN}
          max={BUDGET_MAX}
          step={BUDGET_STEP}
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="w-full accent-blue-600"
        />
      </div>

      {/* Approval Dropdown */}
      <select
        className="w-full border rounded-md p-3 mb-4 focus:outline-none"
        value={approval}
        onChange={(e) => setApproval(e.target.value)}
      >
        <option value="">Approval</option>
        {approvalOptions.map((appr) => (
          <option key={appr} value={appr}>
            {appr}
          </option>
        ))}
      </select>

      {/* Layout Status Dropdown */}
      <select
        className="w-full border rounded-md p-3 mb-6 focus:outline-none"
        value={layoutStatus}
        onChange={(e) => setLayoutStatus(e.target.value)}
      >
        <option value="">Layout Status</option>
        {layoutStatusOptions.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          className="bg-gray-400 text-white py-2 px-6 rounded-md"
          onClick={onReset}
        >
          Reset
        </button>
        <button
          className="bg-blue-600 text-white py-2 px-6 rounded-md"
          onClick={onApply}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
