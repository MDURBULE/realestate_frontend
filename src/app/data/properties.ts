// types/property.ts

export interface Property {
  slug: string;
  title: string;
  location: string;
  imageUrl: string | null;
  tag: string;
  description: string | null;
  areaRange: string;
  plotSize: number | null;
  approval: string;
  layoutStatus: string;
  whatsappLink: string | null;
  callLink: string;
}

export interface PropertyDetails {
  slug: string;
  title: string;
  location: string;
  type: string;
  areaRange: string;
  brochureUrl: string | null;
  approval: string;
  mapUrl: string;
  description: string;
  specialFeatures: string[];
  nearbyHighlights: string[];
  overview: { label: string; value: string }[];
  amenities: Record<string, string>;
  legalAndFinancialInformation: string[];
  whyChoose: string[];
  agent: {
    name: string;
    image: string;
    phone: string;
    whatsapp: string;
  };
  gallery: string[];
  similarListings: {
    slug: string;
    title: string;
    location: string;
    area: string;
    image: string;
  }[];
}

export const mockProperties: Property[] = [
  {
    slug: "mahalaxmi-nagar-30",
    title: "Mahalaxmi Nagar 30",
    location: "Pipala, Nagpur (Rural)",
    imageUrl: "/mahalaxmi-30-1.png",
    tag: "Plot",
    description: null,
    areaRange: "Varies (check layout brochure)",
    plotSize: null,
    approval: "NMRDA Sanctioned with RL + RERA Registered",
    layoutStatus: "Ongoing",
    whatsappLink:
      "https://api.whatsapp.com/send/?phone=917798561084&text=Hi...I+need+more+info+about+Mahalaxmi+developer+properties&type=phone_number&app_absent=0",
    callLink: "tel:+917798560767",
  },
  {
    slug: "mahalaxmi-nagar-31",
    title: "Mahalaxmi Nagar 31",
    location: "Pipala, Nagpur(Rural)",
    imageUrl: "/mahalaxmi-31-1.png",
    tag: "Plot",
    description: null,
    areaRange: "Varies (check layout brochure)",
    plotSize: null,
    approval: "NMRDA Sanctioned with RL + RERA Registered",
    layoutStatus: "Ongoing",
    whatsappLink: null,
    callLink: "tel:+917798560767",
  },
  {
    slug: "mahalaxmi-nagar-38",
    title: "Mahalaxmi Nagar 38",
    location: "Mhasala, Kamptee",
    imageUrl: "/mahalaxmi-38-1.png",
    tag: "Plot",
    description: null,
    areaRange: "Varies (check layout brochure)",
    plotSize: null,
    approval: "NMRDA Sanctioned with RL + RERA Registered",
    layoutStatus: "Completed",
    whatsappLink: null,
    callLink: "tel:+917798560767",
  },
  {
    slug: "mahalaxmi-nagar-39",
    title: "Mahalaxmi Nagar 39",
    location: "Chicholi, Nagpur (Rural)",
    imageUrl: "/mahalaxmi-39-1.png",
    tag: "Plot",
    description: null,
    areaRange: "Varies (check layout brochure)",
    plotSize: null,
    approval: "NMRDA Sanctioned with RL + RERA Registered",
    layoutStatus: "Completed",
    whatsappLink: null,
    callLink: "tel:+917798560767",
  },
  {
    slug: "mahalaxmi-nagar-40",
    title: "Mahalaxmi Nagar 40",
    location: "Kotewada, Hingna",
    imageUrl: "/mahalaxmi-40-1.png",
    tag: "Plot",
    description: null,
    areaRange: "Varies (check layout brochure)",
    plotSize: null,
    approval: "NMRDA Sanctioned with RL + RERA Registered",
    layoutStatus: "Ongoing",
    whatsappLink: null,
    callLink: "tel:+917798560767",
  },
  {
    slug: "mahalaxmi-nagar-41",
    title: "Mahalaxmi Nagar 41",
    location: "Shivmadka, Hingna",
    imageUrl: "/mahalaxmi-41-1.png",
    tag: "Plot",
    description: null,
    areaRange: "1049 sq feet - 1,12,893 sq feet",
    plotSize: null,
    approval: "NMRDA Sanctioned with RL + RERA Registered",
    layoutStatus: "Ongoing",
    whatsappLink: null,
    callLink: "tel:+917798560767",
  },
  {
    slug: "mahalaxmi-nagar-42",
    title: "Mahalaxmi Nagar 42",
    location: "Jamtha, Nagpur",
    imageUrl: "/mahalaxmi-42-1.png",
    tag: "Plot",
    description: null,
    areaRange: "Varies (check layout brochure)",
    plotSize: null,
    approval: "NMRDA Sanctioned with RL + RERA Registered",
    layoutStatus: "Ongoing",
    whatsappLink: null,
    callLink: "tel:+917798560767",
  },
  {
    slug: "tattva-apas",
    title: "Tattva Apas",
    location: "Beltarodi, Nagpur",
    imageUrl: "/tattva-1.png",
    tag: "Plot",
    description: null,
    areaRange: "Varies (check layout brochure)",
    plotSize: null,
    approval: "NMRDA Sanctioned with RL + RERA Registered",
    layoutStatus: "Ongoing",
    whatsappLink: null,
    callLink: "tel:+917798560767",
  },
];

export const propertyDetails: PropertyDetails[] = [
  {
    slug: "mahalaxmi-nagar-30",
    title: "Mahalaxmi Nagar 30",
    location: "Nagpur - Pipla Road",
    type: "Plot",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.1571770916186!2d79.00887057472566!3d21.043066886075733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1a69ea3b61d%3A0xc947a3904f12cb86!2sMahalaxmi%20Nagar%2038!5e0!3m2!1sen!2sin!4v1719248608664!5m2!1sen!2sin",
    areaRange: "1200 - 1800 sq.ft.",
    brochureUrl: null,
    approval: "Approved",
    description: "Spacious plots with all approvals and modern infrastructure.",
    specialFeatures: [
      "Close to schools and hospitals",
      "Ready-to-move plots",
      "Flexible payment options",
    ],
    nearbyHighlights: [
      "Just off the Outer Ring Road",
      "Close to Wardha Road & Nagpur Metro Station",
      "10 min from Nagpur Airport",
      "Near MIHAN SEZ and Samruddhi Mahamarg",
    ],
    overview: [
      { label: "Project Name", value: "Mahalaxmi Nagar 30" },
      {
        label: "Approval",
        value: "NMRDA Sanctioned with RL + RERA Registered",
      },
      { label: "RERA Number", value: "P50500053716" },
      { label: "No. of Plots", value: "268" },
      { label: "Location", value: "Pipala, Nagpur (Rural)" },
      { label: "Plot Size", value: "Varies (check layout brochure)" },
      {
        label: "Loan Facility",
        value: "75–80% loan available from nationalized banks",
      },
      {
        label: "Site Address",
        value:
          "Kh. No. 128 & 129, 133/2, 133/3, Mouza-Pipala, Tah. Nagpur(Rural), Dist. Nagpur",
      },
      {
        label: "Availability",
        value: "<span class='text-green-600 font-medium'>Ongoing</span>",
      },
    ],
    amenities: {
      Electricity: "Underground electrical wiring", // like this
      Roads: "30 & 40 feet wide internal roads",
      Drainage: "Proper drainage and sewage system",
      Security: "Gated community with security",
      Park: "Children's play area and garden",
      "Street Lights": "LED street lighting throughout",
      Connectivity: "Close to Metro, Ring Road, and Airport",
    },
    legalAndFinancialInformation: [
      "NMRDA Sanctioned Layout",
      "RL (Release Letter) Property",
      "RERA Registered (P50500053716)",
      "75–80% Home Loan Facility Available",
      "All Approvals & Documents Available on Request",
    ],
    whyChoose: [
      "Prime Location in Pipala, near upcoming growth hubs",
      "Legally clear title with NMRDA and RERA approval",
      "Site development complete with ready-to-construct plots",
      "Financial assistance available through nationalized banks",
      "Backed by the trust of Mahalaxmi Developers",
    ],
    agent: {
      name: "Mr. Anish Chhajed",
      image: "/person2.svg",
      phone: "+919823000001",
      whatsapp: "https://wa.me/919823000001",
    },
    gallery: [
      "/mahalaxmi-30-1.png",
      "/mahalaxmi-30-2.png",
      "/mahalaxmi-30-3.png",
    ],
    similarListings: [
      {
        slug: "tattva-apas",
        title: "Tattva Apas",
        location: "Nagpur, Betarodi",
        area: "1000 - 1500 sq.ft.",
        image: "/plot.png",
      },
      {
        slug: "green-valley",
        title: "Green Valley",
        location: "Nagpur, Wardha Road",
        area: "1500 - 2000 sq.ft.",
        image: "/plot.png",
      },
    ],
  },
  {
    slug: "mahalaxmi-nagar-31",
    title: "Mahalaxmi Nagar 31",
    location: "Nagpur - Pipla Road",
    type: "Plot",
    brochureUrl: "/mahalaxmi-31.pdf",
    mapUrl:
      "https://www.google.com/maps/search/Shyam+Nagari,+Kh.+No.+128+%26129,+133%2F2,+133%2F3,+Mouza-Pipla.+Tah.Nagpur(Rural)-Dist.+Nagpur/@21.0507799,79.1231851,13z/data=!3m1!4b1?hl=en&entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D",
    areaRange: "Varies (check layout brochure)",
    approval: "Approved",
    description:
      "Private community living across 20 acres with luxurious amenities and extensive greenery.",
    specialFeatures: [
      "Extensive parks and gardens",
      "Wellness and recreational facilities",
      "Abundant greenery",
    ],
    nearbyHighlights: [
      "Atharva City",
      "Pyramid City-V & VI",
      "St. Vincent Pallotti School",
      "Metro Station - 3KM",
      "Airport - 4km",
    ],
    overview: [
      { label: "Project Name", value: "Mahalaxmi Nagar 31" },
      {
        label: "Approval",
        value: "NMRDA Sanctioned with RL + RERA Registered",
      },
      {
        label: "RERA Numbers",
        value: "P50500053128, P50500053169, P50500053049",
      },
      { label: "No. of Plots", value: "154" },
      { label: "Location", value: "Pipala, Nagpur (Rural)" },
      { label: "Plot Size", value: "Varies (check layout brochure)" },
      {
        label: "Loan Facility",
        value: "75–80% loan available from nationalized banks",
      },
      {
        label: "Availability",
        value: "<span class='text-green-600 font-medium'>Ongoing</span>",
      },
    ],
    amenities: {
      Electricity: "Underground electrical wiring", // like this
      Roads: "30 & 40 feet wide internal roads",
      Drainage: "Proper drainage and sewage system",
      Security: "Gated community with security",
      Park: "Children's play area and garden",
      "Street Lights": "LED street lighting throughout",
      Connectivity: "Close to Metro, Ring Road, and Airport",
    },
    legalAndFinancialInformation: [
      "NMRDA Sanctioned Layout",
      "RL (Release Letter) Property",
      "RERA Registered (P50500053128, P50500053169, P50500053049)",
      "75–80% Home Loan Facility Available",
    ],
    whyChoose: [
      "Community-focused design",
      "Prime location with growth potential",
      "Ready-to-move layout",
      "Strong legal approvals",
    ],
    agent: {
      name: "Mr. Anish Chhajed",
      image: "/person2.svg",
      phone: "+919823000001",
      whatsapp: "https://wa.me/919823000001",
    },
    gallery: [
      "/mahalaxmi-31-1.png",
      "/mahalaxmi-31-2.png",
      "/mahalaxmi-31-3.png",
    ],
    similarListings: [],
  },
  {
    slug: "mahalaxmi-nagar-38",
    title: "Mahalaxmi Nagar 38",
    location: "Mhasala, Kamptee",
    type: "Plot",
    brochureUrl: "/mahalaxmi-38.pdf",
    mapUrl:
      "https://www.google.com/maps/place/Mahalaxmi+Nagar+38/@21.213736,79.130357,876m/data=!3m1!1e3",
    areaRange: "Varies (check layout brochure)",
    approval: "Approved",
    description:
      "Comfort & privacy at an affordable price with modern infrastructure and greenery.",
    specialFeatures: [
      "Affordability",
      "Modern amenities",
      "World-class infrastructure",
    ],
    nearbyHighlights: [
      "VCA Stadium - 1.4KM",
      "Metro Station - 3.5KM",
      "Airport - 5KM",
    ],
    overview: [
      { label: "Project Name", value: "Mahalaxmi Nagar 38" },
      {
        label: "Approval",
        value: "NMRDA Sanctioned with RL + RERA Registered",
      },
      { label: "RERA Number", value: "P50500056405" },
      { label: "No. of Plots", value: "77" },
      { label: "Location", value: "Mhasala, Kamptee" },
      { label: "Plot Size", value: "Varies (check layout brochure)" },
      {
        label: "Loan Facility",
        value: "75–80% loan available from nationalized banks",
      },
      {
        label: "Availability",
        value: "<span class='text-green-600 font-medium'>Completed</span>",
      },
    ],
    amenities: {
      Electricity: "Underground electrical wiring", // like this
      Roads: "30 & 40 feet wide internal roads",
      Drainage: "Proper drainage and sewage system",
      Security: "Gated community with security",
      Park: "Children's play area and garden",
      "Street Lights": "LED street lighting throughout",
      Connectivity: "Close to Metro, Ring Road, and Airport",
    },
    legalAndFinancialInformation: [
      "NMRDA Sanctioned Layout",
      "RL (Release Letter) Property",
      "RERA Registered (P50500056405)",
      "75–80% Home Loan Facility Available",
    ],
    whyChoose: ["Comfort and privacy", "Prime location", "Bank-financed plots"],
    agent: {
      name: "Mr. Anish Chhajed",
      image: "/person2.svg",
      phone: "+919823000001",
      whatsapp: "https://wa.me/919823000001",
    },
    gallery: [
      "/mahalaxmi-38-1.png",
      "/mahalaxmi-38-2.png",
      "/mahalaxmi-38-3.png",
    ],
    similarListings: [],
  },
  {
    slug: "mahalaxmi-nagar-39",
    title: "Mahalaxmi Nagar 39",
    location: "Chicholi, Nagpur - Rural",
    type: "Plot",
    brochureUrl: "/mahalaxmi-39.pdf",
    mapUrl:
      "https://www.google.com/maps/place/Mahalaxmi+Nagar+39/@21.198976,78.975508,876m/data=!3m1!1e3",
    areaRange: "Varies (check layout brochure)",
    approval: "Approved",
    description:
      "Rows of residential plots in a rural setting with full approvals.",
    specialFeatures: [
      "Rural tranquillity",
      "Completed development",
      "Wide roads",
    ],
    nearbyHighlights: ["Podar International School", "SB Jain Institute"],
    overview: [
      { label: "Project Name", value: "Mahalaxmi Nagar 39" },
      {
        label: "Approval",
        value: "NMRDA Sanctioned with RL + RERA Registered",
      },
      { label: "RERA Number", value: "P50500055756" },
      { label: "No. of Plots", value: "152" },
      { label: "Location", value: "Chicholi, Nagpur (Rural)" },
      { label: "Plot Size", value: "Varies (check layout brochure)" },
      {
        label: "Loan Facility",
        value: "75–80% loan available from nationalized banks",
      },
      {
        label: "Availability",
        value: "<span class='text-green-600 font-medium'>Completed</span>",
      },
    ],
    amenities: {
      Electricity: "Underground electrical wiring", // like this
      Roads: "30 & 40 feet wide internal roads",
      Drainage: "Proper drainage and sewage system",
      Security: "Gated community with security",
      Park: "Children's play area and garden",
      "Street Lights": "LED street lighting throughout",
      Connectivity: "Close to Metro, Ring Road, and Airport",
    },
    legalAndFinancialInformation: [
      "NMRDA Sanctioned Layout",
      "RL (Release Letter) Property",
      "RERA Registered (P50500055756)",
      "75–80% Home Loan Facility Available",
    ],
    whyChoose: ["Rural community plots", "Legal clearances", "Bank financing"],
    agent: {
      name: "Mr. Anish Chhajed",
      image: "/person2.svg",
      phone: "+919823000001",
      whatsapp: "https://wa.me/919823000001",
    },
    gallery: [
      "/mahalaxmi-39-1.png",
      "/mahalaxmi-39-2.png",
      "/mahalaxmi-39-3.png",
    ],
    similarListings: [],
  },
  {
    slug: "mahalaxmi-nagar-40",
    title: "Mahalaxmi Nagar 40",
    location: "Kotewada, Hingna",
    type: "Plot",
    brochureUrl: "/mahalaxmi-40.pdf",
    mapUrl: "http://google.com/maps?ll=21.029526,79.005225&z=17",
    areaRange: "Varies (check layout brochure)",
    approval: "Approved",
    description: "Well-connected Hingna plots near major highways and SEZs.",
    specialFeatures: [
      "Near Samruddhi Mahamarg",
      "Wide internal roads",
      "Modern drainage systems",
    ],
    nearbyHighlights: ["Samruddhi Mahamarg"],
    overview: [
      { label: "Project Name", value: "Mahalaxmi Nagar 40" },
      {
        label: "Approval",
        value: "NMRDA Sanctioned with RL + RERA Registered",
      },
      { label: "RERA Number", value: "P50500076800" },
      { label: "No. of Plots", value: "99" },
      { label: "Location", value: "Kotewada, Hingna" },
      { label: "Plot Size", value: "Varies (check layout brochure)" },
      {
        label: "Loan Facility",
        value: "75–80% loan available from nationalized banks",
      },
      {
        label: "Availability",
        value: "<span class='text-green-600 font-medium'>Ongoing</span>",
      },
    ],
    amenities: {
      Electricity: "Underground electrical wiring", // like this
      Roads: "30 & 40 feet wide internal roads",
      Drainage: "Proper drainage and sewage system",
      Security: "Gated community with security",
      Park: "Children's play area and garden",
      "Street Lights": "LED street lighting throughout",
      Connectivity: "Close to Metro, Ring Road, and Airport",
    },
    legalAndFinancialInformation: [
      "NMRDA Sanctioned Layout",
      "RL (Release Letter) Property",
      "RERA Registered (P50500076800)",
      "75–80% Home Loan Facility Available",
    ],
    whyChoose: [
      "Strategic location",
      "Bank-backed loans",
      "Complete approvals",
    ],
    agent: {
      name: "Mr. Anish Chhajed",
      image: "/person2.svg",
      phone: "+919823000001",
      whatsapp: "https://wa.me/919823000001",
    },
    gallery: [
      "/mahalaxmi-40-1.png",
      "/mahalaxmi-40-2.png",
      "/mahalaxmi-40-3.png",
    ],
    similarListings: [],
  },
  {
    slug: "mahalaxmi-nagar-41",
    title: "Mahalaxmi Nagar 41",
    location: "Shivmadka, Hingna",
    type: "Plot",
    brochureUrl: "/mahalaxmi-41.pdf",
    mapUrl: "https://www.google.com/maps?ll=21.019857,78.981129&z=17",
    areaRange: "1049 sq ft - 1,12,893 sq ft",
    approval: "Approved",
    description: "Spacious villa plots within a gated community at Hingna.",
    specialFeatures: [
      "Wide internal roads",
      "Heavy-duty compound walls",
      "24/7 security",
    ],
    nearbyHighlights: ["Samruddhi Mahamarg"],
    overview: [
      { label: "Project Name", value: "Mahalaxmi Nagar 41" },
      {
        label: "Approval",
        value: "NMRDA Sanctioned with RL + RERA Registered",
      },
      { label: "RERA Number", value: "P50500077213" },
      { label: "No. of Plots", value: "900" },
      { label: "Location", value: "Shivmadka, Hingna" },
      { label: "Plot Size", value: "1049 sq ft - 1,12,893 sq ft" },
      {
        label: "Loan Facility",
        value: "75–80% loan available from nationalized banks",
      },
      {
        label: "Availability",
        value: "<span class='text-green-600 font-medium'>Ongoing</span>",
      },
    ],
    amenities: {
      Electricity: "Underground electrical wiring", // like this
      Roads: "30 & 40 feet wide internal roads",
      Drainage: "Proper drainage and sewage system",
      Security: "Gated community with security",
      Park: "Children's play area and garden",
      "Street Lights": "LED street lighting throughout",
      Connectivity: "Close to Metro, Ring Road, and Airport",
    },
    legalAndFinancialInformation: [
      "NMRDA Sanctioned Layout",
      "RL (Release Letter) Property",
      "RERA Registered (P50500077213)",
      "75–80% Home Loan Facility Available",
    ],
    whyChoose: [
      "Large plot inventory",
      "Prestigious Hingna location",
      "Ready-to-build sites",
    ],
    agent: {
      name: "Mr. Anish Chhajed",
      image: "/person2.svg",
      phone: "+919823000001",
      whatsapp: "https://wa.me/919823000001",
    },
    gallery: [
      "/mahalaxmi-41-1.png",
      "/mahalaxmi-41-2.png",
      "/mahalaxmi-41-3.png",
    ],
    similarListings: [],
  },
  {
    slug: "mahalaxmi-nagar-42",
    title: "Mahalaxmi Nagar 42",
    location: "Jamtha, Nagpur",
    type: "Plot",
    brochureUrl: "/mahalaxmi-42.pdf",
    mapUrl:
      "https://www.google.com/maps/place/Mahalaxmi+Nagar+42/@21.010077,79.022846,1755m/data=!3m1!1e3",
    areaRange: "Varies (check layout brochure)",
    approval: "Approved",
    description:
      "Ready-to-develop residential plots near urban conveniences in Jamtha.",
    specialFeatures: [
      "Proximity to SEZ",
      "Wide compound walls",
      "LED street lighting",
    ],
    nearbyHighlights: ["Samruddhi Mahamarg"],
    overview: [
      { label: "Project Name", value: "Mahalaxmi Nagar 42" },
      {
        label: "Approval",
        value: "NMRDA Sanctioned with RL + RERA Registered",
      },
      { label: "RERA Number", value: "P50500079059" },
      { label: "No. of Plots", value: "139" },
      { label: "Location", value: "Jamtha, Nagpur" },
      { label: "Plot Size", value: "Varies (check layout brochure)" },
      {
        label: "Loan Facility",
        value: "75–80% loan available from nationalized banks",
      },
      {
        label: "Availability",
        value: "<span class='text-green-600 font-medium'>Ongoing</span>",
      },
    ],
    amenities: {
      Electricity: "Underground electrical wiring", // like this
      Roads: "30 & 40 feet wide internal roads",
      Drainage: "Proper drainage and sewage system",
      Security: "Gated community with security",
      Park: "Children's play area and garden",
      "Street Lights": "LED street lighting throughout",
      Connectivity: "Close to Metro, Ring Road, and Airport",
    },
    legalAndFinancialInformation: [
      "NMRDA Sanctioned Layout",
      "RL (Release Letter) Property",
      "RERA Registered (P50500079059)",
      "75–80% Home Loan Facility Available",
    ],
    whyChoose: [
      "Urban connectivity",
      "Complete legal approvals",
      "Gated community setup",
    ],
    agent: {
      name: "Mr. Anish Chhajed",
      image: "/person2.svg",
      phone: "+919823000001",
      whatsapp: "https://wa.me/919823000001",
    },
    gallery: [
      "/mahalaxmi-42-1.png",
      "/mahalaxmi-42-2.png",
      "/mahalaxmi-42-3.png",
    ],
    similarListings: [],
  },
  {
    slug: "tattva-apas",
    title: "Tattva Apas",
    location: "Beltarodi, Nagpur",
    type: "Residential",
    brochureUrl: "/tattva.pdf",
    mapUrl:
      "https://www.google.com/maps?ll=21.073829,79.073096&z=17&t=h&hl=en&gl=IN&mapclient=embed&cid=3565738506060525731",
    areaRange: "Varies (check layout brochure)",
    approval: "Approved",
    description:
      "Modern living with clubhouses, gardens, and over 250 units in a 12-acre layout.",
    specialFeatures: [
      "Private commercial clubhouse",
      "Swimming pool and gym",
      "Spacious podium gardens",
    ],
    nearbyHighlights: [
      "New Airport Metro Station - 2.5 km",
      "D-Mart - 400 meters",
      "Govt. Eng. College",
    ],
    overview: [
      { label: "Project Name", value: "Tattva Apas" },
      {
        label: "Approval",
        value: "NMRDA Sanctioned with RL + RERA Registered",
      },
      { label: "No. of Units", value: "108 Residential Flats" },
      { label: "Location", value: "Beltarodi, Nagpur" },
      { label: "Plot Size", value: "Varies (check layout brochure)" },
      {
        label: "Loan Facility",
        value: "75–80% loan available from nationalized banks",
      },
      {
        label: "Availability",
        value: "<span class='text-green-600 font-medium'>Ongoing</span>",
      },
    ],
    amenities: {
      Electricity: "Underground electrical wiring", // like this
      Roads: "30 & 40 feet wide internal roads",
      Drainage: "Proper drainage and sewage system",
      Security: "Gated community with security",
      Park: "Children's play area and garden",
      "Street Lights": "LED street lighting throughout",
      Connectivity: "Close to Metro, Ring Road, and Airport",
    },
    legalAndFinancialInformation: [
      "NMRDA Sanctioned Layout",
      "RL (Release Letter) Property",
      "RERA Registered",
      "75–80% Home Loan Facility Available",
    ],
    whyChoose: [
      "Luxury amenities",
      "Trusted developers",
      "Prime location near SEZ",
    ],
    agent: {
      name: "Mr. Anish Chhajed",
      image: "/person2.svg",
      phone: "+919823000001",
      whatsapp: "https://wa.me/919823000001",
    },
    gallery: ["/tattva-1.png", "/tattva-2.png", "/tattva-3.png"],
    similarListings: [],
  },
];
