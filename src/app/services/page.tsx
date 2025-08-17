"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

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

  useEffect(() => {
    fetch("/data/visaService.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error fetching visa services:", err));
  }, []);

  return (
    <div
      className="relative md:h-[100vh] flex flex-col items-start justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/HfPPD1VC/visa-banner.jpg')",
      }}
    >
      <div className="md:px-16">
        <Navbar />
        <h1 className="text-2xl font-bold mb-4">Visa Services</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="border p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{service.name}</h2>
              <p className="text-gray-400 text-xs">{service.description}</p>
              <p className="mt-2 text-sm">
                Processing Time: {service.processingTime}
              </p>
              <p className="text-sm">Fee: ${service.fee}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
