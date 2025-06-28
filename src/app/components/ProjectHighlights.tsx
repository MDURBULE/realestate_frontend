import { ChevronRight } from "lucide-react";

const data = [
  {
    title: "Completed layout images",
    images: ["", "", "", ""],
  },
  {
    title: "Road infrastructure photos",
    images: ["", "", "", ""],
  },
  {
    title: "Registration event snapshots",
    images: ["", "", "", ""],
  },
  {
    title: "Site development work",
    images: ["", "", "", ""],
  },
];

export default function ProjectHighlights() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
        Project Highlights
      </h2>

      <div className="space-y-10">
        {data.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-sm font-medium text-gray-800 mb-4">
              {section.title}
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {section.images.map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-200 aspect-[4/3] rounded-md flex items-center justify-center relative group"
                >
                  {/* Show arrow only in last image box */}
                  {i === section.images.length - 1 && (
                    <ChevronRight className="w-6 h-6 text-gray-500 group-hover:text-gray-700" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
