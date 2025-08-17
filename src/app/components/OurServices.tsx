"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface VisaService {
  id: number;
  image: string;
  name: string;
  description: string;
  processingTime: string;
  fee: number;
  requiredDocuments: string[];
}

function OurServices() {
  const [services, setServices] = useState<VisaService[]>([]);

  useEffect(() => {
    fetch("/data/visaService.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error fetching visa services:", err));
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-2xl md:text-4xl p-4">Our Services</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 md:px-16">
        {services?.map((service) => (
          <div
            key={service?.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src={service?.image}
                alt={service?.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col h-full">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {service?.name}
              </h2>
              <p className="text-gray-600 text-sm flex-grow">
                {service?.description}
              </p>

              {/* Footer */}
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-blue-600 font-medium">
                  Fee: ${service?.fee}
                </span>
                <span className="text-gray-500">{service?.processingTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
