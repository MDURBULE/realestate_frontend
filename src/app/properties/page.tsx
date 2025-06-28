"use client";
import { useState, useMemo } from "react";
import FilterSidebar from "../components/FilterSidebar";
import PropertyCard from "../components/PropertyCard";
import { mockProperties } from "../data/properties";

// Extract unique options from data
function getUnique<T, K extends keyof T>(arr: T[], key: K): T[K][] {
  return Array.from(new Set(arr.map((item) => item[key])));
}

const defaultDraft = {
  location: "",
  plotSize: "",
  budget: 100000000 as number,
  approval: "",
  layoutStatus: "",
};

export default function PropertiesPage() {
  // Extract filter options
  const locationOptions: string[] = getUnique(
    mockProperties,
    "location"
  ) as string[];
  const plotSizeOptions: number[] = (
    getUnique(mockProperties, "plotSize") as number[]
  ).sort((a, b) => a - b);
  const approvalOptions: string[] = getUnique(
    mockProperties,
    "approval"
  ) as string[];
  const layoutStatusOptions: string[] = getUnique(
    mockProperties,
    "layoutStatus"
  ) as string[];

  // Draft filter state (for sidebar inputs)
  const [draft, setDraft] = useState({ ...defaultDraft });
  // Applied filter state (for filtering)
  const [applied, setApplied] = useState({ ...defaultDraft });

  // Filtering logic uses applied state
  const filteredProperties = useMemo(() => {
    return mockProperties.filter((property) => {
      const matchesLocation =
        !applied.location || property.location === applied.location;

      const matchesPlotSize =
        !applied.plotSize || property.plotSize === Number(applied.plotSize);

      // const matchesBudget =
      //   !applied.budget || property.plotSize * 1000 <= applied.budget;

      const matchesApproval =
        !applied.approval || property.approval === applied.approval;

      const matchesLayoutStatus =
        !applied.layoutStatus || property.layoutStatus === applied.layoutStatus;

      return (
        matchesLocation &&
        matchesPlotSize &&
        // matchesBudget &&
        matchesApproval &&
        matchesLayoutStatus
      );
    });
  }, [applied]);

  // Handlers for sidebar
  const handleApply = () => {
    setApplied({ ...draft });
  };
  const handleReset = () => {
    setDraft({ ...defaultDraft });
    setApplied({ ...defaultDraft });
  };

  return (
    <main className="bg-gray-100 min-h-screen font-inter px-4 py-10 text-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        <FilterSidebar
          locationOptions={locationOptions}
          plotSizeOptions={plotSizeOptions}
          approvalOptions={approvalOptions}
          layoutStatusOptions={layoutStatusOptions}
          location={draft.location}
          setLocation={(val) => setDraft((d) => ({ ...d, location: val }))}
          plotSize={draft.plotSize}
          setPlotSize={(val) => setDraft((d) => ({ ...d, plotSize: val }))}
          budget={draft.budget}
          setBudget={(val) => setDraft((d) => ({ ...d, budget: val }))}
          approval={draft.approval}
          setApproval={(val) => setDraft((d) => ({ ...d, approval: val }))}
          layoutStatus={draft.layoutStatus}
          setLayoutStatus={(val) =>
            setDraft((d) => ({ ...d, layoutStatus: val }))
          }
          onApply={handleApply}
          onReset={handleReset}
        />

        <div className="flex flex-col gap-6">
          <h1 className="text-4xl text-[#002657] font-bold mb-2">
            Find Your Ideal Plot in Nagpur
          </h1>
          <div className="mb-6">
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-y-2 text-[#002657] text-sm sm:text-base">
              <p>RERA Approved Layouts</p>
              <p>Clear Titles</p>
              <p>Prime Locations</p>
              <p>EMI Options</p>
              <p>Nagpur&apos;s Trusted Real Estate Developer</p>
              <p>Affordable Open Plots</p>
              <p>Site Visit Available</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.slug}
                {...property}
                href={`/property/${property.slug}`}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
