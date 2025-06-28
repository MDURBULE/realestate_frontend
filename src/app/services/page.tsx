import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive real estate services including property buying, selling, investment advisory, property management, and legal assistance. Expert guidance for all your real estate needs.",
  keywords: [
    "real estate services",
    "property buying",
    "property selling",
    "investment advisory",
    "property management",
    "legal assistance",
    "real estate consulting",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Premium Real Estate Solutions",
    description:
      "Comprehensive real estate services including property buying, selling, investment advisory, and more.",
    url: "https://your-domain.com/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Comprehensive real estate solutions tailored to your needs. From
            buying and selling to investment advisory.
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Buying Service */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Buying Properties
              </h2>
              <p className="text-gray-600 mb-6">
                Find your perfect home with our expert guidance. We&apos;ll help
                you navigate the entire buying process from search to closing.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Property search and shortlisting
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Market analysis and pricing
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Negotiation support
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Closing assistance
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
                Learn More
              </button>
            </div>

            {/* Selling Service */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Selling Properties
              </h2>
              <p className="text-gray-600 mb-6">
                Maximize your property&apos;s value with our comprehensive
                selling services. We&apos;ll help you get the best price in the
                shortest time.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Property valuation and pricing
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Marketing and promotion
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Buyer screening and negotiation
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Transaction management
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700">
                Learn More
              </button>
            </div>

            {/* Investment Advisory */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Investment Advisory
              </h2>
              <p className="text-gray-600 mb-6">
                Build wealth through strategic real estate investments. Our
                experts will guide you through profitable investment
                opportunities.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Market analysis and trends
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  ROI calculations and projections
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Portfolio diversification strategies
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Risk assessment and mitigation
                </li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700">
                Learn More
              </button>
            </div>

            {/* Property Management */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Property Management
              </h2>
              <p className="text-gray-600 mb-6">
                Hassle-free property management services. We handle everything
                from tenant screening to maintenance and rent collection.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Tenant screening and placement
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Rent collection and accounting
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Maintenance and repairs
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Legal compliance and documentation
                </li>
              </ul>
              <button className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Additional Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Legal Assistance
              </h3>
              <p className="text-gray-600 text-sm">
                Complete legal support for contracts, documentation, and
                compliance.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Property Valuation
              </h3>
              <p className="text-gray-600 text-sm">
                Accurate property valuations from certified experts.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Market Research
              </h3>
              <p className="text-gray-600 text-sm">
                Comprehensive market analysis and trend reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Our Process
          </h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Consultation
                </h3>
                <p className="text-gray-600">
                  We start with a comprehensive consultation to understand your
                  needs, goals, and preferences.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Strategy Development
                </h3>
                <p className="text-gray-600">
                  Based on your requirements, we develop a customized strategy
                  to achieve your real estate goals.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Implementation
                </h3>
                <p className="text-gray-600">
                  Our expert team executes the strategy with precision, keeping
                  you informed at every step.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Follow-up Support
                </h3>
                <p className="text-gray-600">
                  We provide ongoing support and assistance to ensure your
                  continued satisfaction and success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Contact our team today to discuss your real estate needs and
            discover how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100 font-semibold">
              Schedule Consultation
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-md hover:bg-white hover:text-blue-600 font-semibold">
              View Properties
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
