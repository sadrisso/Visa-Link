"use client";
import Image from "next/image";
import Link from "next/link";
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

interface VisaDetailsProps {
  params: {
    id: string;
  };
}

export default function VisaDetails({ params }: VisaDetailsProps) {
  const id = params.id;
  const [service, setService] = useState<VisaService | null>(null);

  useEffect(() => {
    const getSingleData = async () => {
      try {
        const res = await fetch("/data/visaService.json");
        const data: VisaService[] = await res.json();
        const single = data.find((item) => item.id === Number(id));
        setService(single || null);
      } catch (error) {
        console.error("Error fetching visa data:", error);
      }
    };

    getSingleData();
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">{service.name}</h1>
        <Image
          width={100}
          height={100}
          src={service.image}
          alt={service.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <p className="text-gray-700 mb-2">{service.description}</p>
        <p className="text-gray-700 mb-1">
          <span className="font-medium">Processing Time:</span>{" "}
          {service.processingTime}
        </p>
        <p className="text-gray-700 mb-1">
          <span className="font-medium">Fee:</span> ${service.fee}
        </p>
        <p className="text-gray-700 mb-1 font-medium">Required Documents:</p>
        <ul className="list-disc list-inside text-gray-600">
          {service.requiredDocuments.map((doc, index) => (
            <li key={index}>{doc}</li>
          ))}
        </ul>
        <Link href="/">
          <button className="mt-4 w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors duration-300">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}
