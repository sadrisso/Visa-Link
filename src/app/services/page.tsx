"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";

interface VisaService {
  id: number;
  image: string;
  name: string;
  description: string;
  processingTime: string;
  fee: number;
  requiredDocuments: string[];
}

export default function VisaServices() {
  const [services, setServices] = useState<VisaService[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFee, setSelectedFee] = useState("all");

  useEffect(() => {
    fetch("/data/visaService.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error fetching visa services:", err));
  }, []);

  // Filter & Search Logic
  const filteredServices = services.filter((service) => {
    const matchesSearch = service.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesFee =
      selectedFee === "all" ||
      (selectedFee === "low" && service.fee < 100) ||
      (selectedFee === "medium" && service.fee >= 100 && service.fee <= 500) ||
      (selectedFee === "high" && service.fee > 500);

    return matchesSearch && matchesFee;
  });

  return (
    <div
      className="relative min-h-screen flex flex-col items-start justify-start bg-cover bg-center p-4"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/QvrXdnj2/banner-2.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative w-full md:px-16 md:pt-10">
        <Navbar />

        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-bold mt-6 mb-4 text-white drop-shadow-lg">
          Visa Services
        </h1>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 w-full">
          {/* Search */}
          <input
            type="text"
            placeholder="Search Visa Service..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border border-gray-800 focus:outline-none focus:ring-2 text-gray-800 focus:ring-blue-400 bg-white/90"
          />

          {/* Fee Filter */}
          <select
            value={selectedFee}
            onChange={(e) => setSelectedFee(e.target.value)}
            className="px-4 text-gray-800 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/90"
          >
            <option value="all">All Fees</option>
            <option value="low">Low (&lt; $100)</option>
            <option value="medium">Medium ($100 - $500)</option>
            <option value="high">High (&gt; $500)</option>
          </select>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <Link
                href={`services/${service?.id}`}
                key={service.id}
                className="bg-white/95 border p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h2 className="text-lg text-black font-semibold">
                  {service.name}
                </h2>
                <p className="text-gray-500 text-sm line-clamp-2">
                  {service.description}
                </p>
                <p className="mt-2 text-sm text-gray-700">
                  Processing Time:{" "}
                  <span className="font-medium">{service.processingTime}</span>
                </p>
              </Link>
            ))
          ) : (
            <p className="text-white text-lg">No services found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
