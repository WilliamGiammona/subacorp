"use client";

import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Building2, MapPin, Grid2x2, X, Download, Loader2 } from "lucide-react";
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

// Define the listings data directly in this file
const solanaBeachListings = [
  {
    id: 1,
    title: "Suite 1D",
    sqft: "1112",
    price: "Price Available Upon Request",
    images: [
      "/images/solana-beach/suite1D/Suite1DPage6.jpg",
      "/images/solana-beach/suite1D/Suite1DPage3.jpg",
      "/images/solana-beach/suite1D/Suite1DPage5.jpg",
      "/images/solana-beach/suite1D/Suite1DPage2.jpg",
      "/images/solana-beach/suite1D/Suite1DFullPicPage1.jpg",
      "/images/solana-beach/suite1D/Suite1DFloorPlanPage4.png",
    ],
    imageUrl: "/images/solana-beach/suite1D/Suite1DPage6.jpg",
    type: "Office/Retail Space",
    location: "Solana Beach",
    features: [
      { name: "AC/Heating", status: "Included" },
      { name: "Bathroom", status: "Included" },
      { name: "Separate Office", status: "Included" },
      { name: "Laminate Floors", status: "Included" },
      { name: "Upgrades", status: "Allowed" },
    ],
  },
];

export default function FeaturedProperties() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [imagesLoading, setImagesLoading] = useState<Record<number, boolean>>(
    {}
  );

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handlePropertyClick = (index: number) => {
    setSelectedIndex(index);
    setSelectedImages(solanaBeachListings[index].images);

    // Initialize all images as loading
    const initialLoadingState: Record<number, boolean> = {};
    solanaBeachListings[index].images.forEach((_, imgIndex) => {
      initialLoadingState[imgIndex] = true;
    });
    setImagesLoading(initialLoadingState);
  };

  const handleImageLoad = (index: number) => {
    setImagesLoading((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  const handleImageError = (index: number) => {
    setImagesLoading((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  const handleDownload = async () => {
    if (selectedIndex === null || selectedImages.length === 0) return;

    const imageIndex = current - 1;
    if (imageIndex < 0 || imageIndex >= selectedImages.length) return;

    const imageUrl = selectedImages[imageIndex];
    const property = solanaBeachListings[selectedIndex];
    const fileName = `${property.title}-image-${current}`;

    // Get correct file extension from the URL
    const extension = imageUrl.split(".").pop() || "jpg";

    const a = document.createElement("a");
    a.href = imageUrl;
    a.download = `${fileName}.${extension}`;
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
                onClick={() => {
                  setSelectedIndex(null);
                  setSelectedImages([]);
                }}
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
                {selectedImages.map((imageUrl, index) => (
                  <CarouselItem key={index} className="h-[80vh]">
                    <div className="relative w-full h-full flex items-center justify-center">
                      {imagesLoading[index] && (
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <Loader2 className="h-12 w-12 text-white animate-spin" />
                        </div>
                      )}
                      <Image
                        src={imageUrl}
                        alt={`Property view ${index + 1}`}
                        fill
                        className="rounded-lg object-contain"
                        onLoad={() => handleImageLoad(index)}
                        onError={() => handleImageError(index)}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {selectedImages.length > 1 && (
                <>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </>
              )}
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
            Available Listings
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Discover our selection of premium commercial properties in prime
            locations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {solanaBeachListings.map((property, index) => (
            <Card
              key={property.id}
              className="hover:shadow-lg transition-all hover:-translate-y-2 cursor-pointer flex flex-col"
              onClick={() => handlePropertyClick(index)}
            >
              <div
                className="h-36 sm:h-48 w-full rounded-t-lg"
                style={{
                  backgroundImage: `url("${property.imageUrl}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">
                  {property.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
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
                    {property.sqft} sq ft
                  </div>

                  {/* Features section */}
                  {property.features && property.features.length > 0 && (
                    <div className="mt-3 pt-2 border-t">
                      <h4 className="font-medium text-sm mb-1">Features:</h4>
                      <ul className="space-y-1">
                        {property.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-sm flex justify-between"
                          >
                            <span>{feature.name}</span>
                            <span className="font-medium">
                              {feature.status}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <p className="w-full text-center font-semibold">
                  {property.price}
                </p>
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
                in Pacific Beach
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
