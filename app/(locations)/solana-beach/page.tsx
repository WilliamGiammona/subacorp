"use client";

import NavBar from "@/app/components/ui/navigation/NavBar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X, Download, MapPin, Building2, Grid2x2, Loader2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../../components/ui/carousel";

type Feature = {
  name: string;
  status: string;
};

type Listing = {
  id: number;
  title: string;
  sqft: string;
  price: string;
  images: string[];
  imageUrl: string;
  type: string;
  location: string;
  features: Feature[];
};

export default function SolanaBeach() {
  const listings: Listing[] = [
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

  const featuredTenants = [
    {
      id: 1,
      name: "Architects Orange",
      website: "www.aoarchitects.com",
      // imageUrl: "/images/solana-beach/current-tenants/aoarchitects.jpg",
    },
    {
      id: 2,
      name: "Solana Flooring",
      website: "www.solanaflooring.com",
      // imageUrl: "/images/solana-beach/current-tenants/SolanaFlooring.jpg",
    },
    {
      id: 3,
      name: "The Enchanted Treehouse",
      website: "www.theenchantedtreehouse.org",
      // imageUrl: "/images/solana-beach/current-tenants/enchantedtreehouse.jpg",
    },
    {
      id: 4,
      name: "San Diego Rejuvenation",
      website: "www.sdrejuv.com",
      // imageUrl: "/images/solana-beach/current-tenants/SDRejuvination.jpg",
    },
    {
      id: 5,
      name: "Marisa McBride Financial Planner",
      website: "www.marisamcbrideea.com",
      // imageUrl: "/images/solana-beach/current-tenants/MarisaMcbrideFinancialPlanner.jpg",
    },
  ];

  const [selectedListingIndex, setSelectedListingIndex] = useState<
    number | null
  >(null);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
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

  const handleListingClick = (index: number) => {
    setSelectedListingIndex(index);
    setSelectedImages(listings[index].images);

    // Initialize all images as loading
    const initialLoadingState: Record<number, boolean> = {};
    listings[index].images.forEach((_, imgIndex) => {
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
    if (selectedListingIndex === null || selectedImages.length === 0) return;

    const imageIndex = current - 1;
    if (imageIndex < 0 || imageIndex >= selectedImages.length) return;

    const imageUrl = selectedImages[imageIndex];
    const fileName = `${listings[selectedListingIndex].title}-image-${current}`;

    // Get correct file extension from the URL
    const extension = imageUrl.split(".").pop() || "jpg";

    const a = document.createElement("a");
    a.href = imageUrl;
    a.download = `${fileName}.${extension}`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavBar />

      {/* Modal */}
      {selectedListingIndex !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur">
          <div className="relative max-w-4xl w-full h-[80vh]">
            <div className="absolute top-0 right-0 z-[60] flex items-center gap-4 text-white">
              <span>
                {current} / {count}
              </span>
              <button
                onClick={() => {
                  setSelectedListingIndex(null);
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

      <div className="bg-white dark:bg-[#111827] shadow-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Mercado Del Sol Location
          </h1>
          <p className="mt-2 text-xl text-gray-600 dark:text-gray-300">
            731 Hwy 101, Solana Beach, CA 92075
          </p>
          <p className="mt-8  text-gray-600 dark:text-gray-300 text-sm md:text-base">
            Mercado Del Sol is conveniently located in the coastal community of
            Solana Beach, near the edge of Del Mar, giving it a very prestigious
            location between two very desirable and affluent cities. This
            commercial center is located on Highway 101 and has easy access to
            Interstate 5 Freeway. The property is home to Bangkok Bay Thai
            restaurant, a continuous winner of the best restaurant year after
            year in the North County area of San Diego County. There are also
            several retail shops and professional offices in the center. The
            population in Solana Beach is approximately 12,675 and Del Mar has a
            population of approximately 3,921. The median household income for
            Solana Beach is $150,820.00 and Del Mar is $192,845.00. The center
            has sufficient free parking and there is also plenty of street
            parking on adjacent streets. Besides the fantastic tenants and their
            offerings and services, it is located near other restaurants,
            shopping, world class beaches, The Del Mar Racetrack, The
            Coaster/Amtrak station and many other great services. We have
            several new spaces coming up for lease over the next few months.
            <br />
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Available Listings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {listings.map((listing, index) => (
            <Card
              key={listing.id}
              className="hover:shadow-lg transition-all hover:-translate-y-2 cursor-pointer flex flex-col"
              onClick={() => handleListingClick(index)}
            >
              <div
                className="h-48 w-full rounded-t-lg"
                style={{
                  backgroundImage: `url(${listing.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <CardHeader>
                <CardTitle>{listing.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-2">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {listing.location}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Building2 className="h-4 w-4 mr-2" />
                    {listing.type}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Grid2x2 className="h-4 w-4 mr-2" />
                    {listing.sqft} sq ft
                  </div>

                  {/* Features section */}
                  {listing.features && listing.features.length > 0 && (
                    <div className="mt-3 pt-2 border-t">
                      <h4 className="font-medium text-sm mb-1">Features:</h4>
                      <ul className="space-y-1">
                        {listing.features.map((feature, idx) => (
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
              <CardFooter className="border-t pt-4 mt-auto">
                <p className="w-full text-center font-semibold">
                  {listing.price}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Featured Tenants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTenants.map((tenant) => (
            <Card
              key={tenant.id}
              className="hover:shadow-lg transition-all hover:-translate-y-2 overflow-hidden"
            >
              <div
                className="h-48 w-full"
                style={{
                  // backgroundImage: `url(${tenant.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <CardHeader>
                <CardTitle>{tenant.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={`https://${tenant.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {tenant.website}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
