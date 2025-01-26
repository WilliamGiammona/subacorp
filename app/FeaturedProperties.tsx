"use client";

import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Building2, MapPin, Grid2x2 } from "lucide-react";
import Link from "next/link";

interface Property {
  id: number;
  title: string;
  location: string;
  type: string;
  size: string;
  image: string;
}

const featuredProperties: Property[] = [
  {
    id: 1,
    title: "Space One",
    location: "Mission Bay Center",
    type: "Office Space",
    size: "10,000 sq ft",
    image: "/api/placeholder/600/400",
  },
  {
    id: 2,
    title: "Space Two",
    location: "Solana Beach Center",
    type: "Office Space",
    size: "20,000 sq ft",
    image: "/api/placeholder/600/400",
  },
  {
    id: 3,
    title: "Space Three",
    location: "Mission Bay Center",
    type: "Office Space",
    size: "10,000sq ft",
    image: "/api/placeholder/600/400",
  },
];

export default function FeaturedProperties() {
  return (
    <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Featured Properties
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Discover our selection of premium commercial properties in prime
            locations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {featuredProperties.map((property) => (
            <Card
              key={property.id}
              className="hover:shadow-lg transition-all hover:-translate-y-2 cursor-pointer"
            >
              <div
                className="h-36 sm:h-48 w-full rounded-t-lg"
                style={{
                  backgroundImage: `url("/images/Interior.jpg")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">
                  {property.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center text-muted-foreground text-sm sm:text-base">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    {property.location}
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm sm:text-base">
                    <Building2 className="h-4 w-4 mr-2 flex-shrink-0" />
                    {property.type}
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm sm:text-base">
                    <Grid2x2 className="h-4 w-4 mr-2 flex-shrink-0" />
                    {property.size}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/solana-beach">
            <Button
              className="w-full sm:w-auto py-4 sm:py-8 transition-all hover:scale-105"
              variant="outline"
              size="lg"
            >
              <span className="text-sm sm:text-base">
                View All Properties
                <br />
                in Solana Beach
              </span>
            </Button>
          </Link>
          <Link href="/mission-bay">
            <Button
              className="w-full sm:w-auto py-4 sm:py-8 transition-all hover:scale-105"
              variant="outline"
              size="lg"
            >
              <span className="text-sm sm:text-base">
                View All Properties
                <br />
                in Mission Bay
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
