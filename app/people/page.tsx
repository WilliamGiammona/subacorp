"use client";

import React from "react";
import NavBar from "@/app/components/ui/navigation/NavBar";

const PersonCard = ({ name, title }: { name: string; title: string }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {name}
      </h3>
      <p className="text-muted-foreground">{title}</p>
    </div>
  );
};

export default function People() {
  const personnel = [
    {
      name: "Barbara Giammona",
      title: "President and Chief Executive Officer",
    },
    {
      name: "Joseph Giammona",
      title: "Vice-President and Chief Legal Officer",
    },
    {
      name: "Christina Orsatti",
      title: "Property Manager",
    },
    {
      name: "Patti Orsatti",
      title: "Executive Assistant",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Team
          </h1>
          <p className="text-lg text-muted-foreground">
            Meet the people behind SUBA Corporation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {personnel.map((person) => (
            <PersonCard
              key={person.name}
              name={person.name}
              title={person.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
