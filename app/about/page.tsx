"use client";

import NavBar from "@/app/components/ui/navigation/NavBar";
import { Building2, History, MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            About Us
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <History className="w-6 h-6 text-primary mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-2">Our Legacy</h2>
                <p className="text-muted-foreground">
                  For 40 years, we've been a cornerstone of San Diego's
                  commercial real estate landscape, providing premium retail and
                  office spaces that foster business growth and community
                  development.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Building2 className="w-6 h-6 text-primary mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-2">Our Properties</h2>
                <p className="text-muted-foreground">
                  We manage two premier commercial centers in San Diego County:
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Mercado Del Sol - Encinitas
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Mission Bay Center - Mission Bay
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
            <p className="text-muted-foreground mb-6">
              We're dedicated to providing exceptional commercial spaces that
              serve both our tenants and the local community. Our properties are
              strategically located in San Diego's most vibrant areas, offering
              businesses prime locations to thrive.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Location Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Prime locations in San Diego's most sought-after areas
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Property Management</h3>
                <p className="text-sm text-muted-foreground">
                  Professional management and maintenance services
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Tenant Support</h3>
                <p className="text-sm text-muted-foreground">
                  Dedicated support for business success
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Community Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Contributing to local community growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
