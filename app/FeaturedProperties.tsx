"use client";

import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Building2, MapPin, Grid2x2, X, Download } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/app/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

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
    location: "Mercado Del Sol Center",
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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;

    if (selectedIndex !== null) {
      api.scrollTo(selectedIndex);
    }
  }, [api, selectedIndex]);

  const handleDownload = async () => {
    if (selectedIndex === null) return;
    const property = featuredProperties[current - 1];
    const a = document.createElement("a");
    a.href = "/images/Interior.jpg";
    a.download = `${property.title}.jpg`;
    a.click();
  };

  return (
    <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur">
          <div className="relative max-w-4xl w-full h-[80vh]">
            <div className="absolute top-0 right-0 z-[60] flex items-center gap-4 text-white">
              <span>
                {current} / {count}
              </span>
              <button
                onClick={() => setSelectedIndex(null)}
                className="hover:text-gray-300"
              >
                <X size={24} />
              </button>
            </div>

            <Carousel
              className="w-full h-full"
              setApi={setApi}
              opts={{ loop: true }}
            >
              <CarouselContent>
                {featuredProperties.map((property) => (
                  <CarouselItem key={property.id} className="h-[80vh]">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/Interior.jpg"
                        alt={property.title}
                        fill
                        className="rounded-lg object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>

            <div className="absolute bottom-4 right-4">
              <button
                className="text-white hover:text-gray-300"
                onClick={handleDownload}
              >
                <Download size={24} />
              </button>
            </div>
          </div>
        </div>
      )}

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
          {featuredProperties.map((property, index) => (
            <Card
              key={property.id}
              className="hover:shadow-lg transition-all hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedIndex(index)}
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
