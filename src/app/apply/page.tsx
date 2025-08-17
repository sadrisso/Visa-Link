"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useState, useEffect } from "react";

interface ApplicationData {
  name: string;
  passportNo: string;
  visaType: string;
  progress: string;
}

const ApplicationForm: React.FC = () => {
  const router = useRouter()
  const [formData, setFormData] = useState<ApplicationData>({
    name: "",
    passportNo: "",
    visaType: "",
    progress: "Submitted",
  });

  // Save to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem("applicationData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-6 text-gray-600">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Visa Application Form
        </h1>

        {/* Name */}
        <label className="block mb-3">
          <span className="font-medium">Full Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter your name"
          />
        </label>

        {/* Passport Number */}
        <label className="block mb-3">
          <span className="font-medium">Passport No.</span>
          <input
            type="text"
            name="passportNo"
            value={formData.passportNo}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter passport number"
          />
        </label>

        {/* Visa Type */}
        <label className="block mb-3">
          <span className="font-medium">Visa Type</span>
          <select
            name="visaType"
            value={formData.visaType}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          >
            <option value="">Select Visa Type</option>
            <option value="Tourist">Tourist</option>
            <option value="Business">Business</option>
            <option value="Student">Student</option>
            <option value="Work">Work</option>
          </select>
        </label>

        {/* Progress */}
        <label className="block mb-4">
          <span className="font-medium">Application Progress</span>
          <select
            name="progress"
            value={formData.progress}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-green-300"
          >
            <option value="Submitted">Submitted</option>
            <option value="Processing">Processing</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </label>

        <div className="flex gap-2 justify-center">
          <button
            className="mt-4 w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors duration-300"
            onClick={() =>
              router.push("/")
            }
          >
            Save Application
          </button>
          <Link href="/">
          <button className="mt-4 w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors duration-300">
            Home
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
