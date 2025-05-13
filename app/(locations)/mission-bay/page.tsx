"use client";

import NavBar from "@/app/components/ui/navigation/NavBar";
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

export default function MissionBay() {
  const [selectedListingIndex, setSelectedListingIndex] = useState<
    number | null
  >(null);
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

  useEffect(() => {
    if (!api) return;

    api.scrollTo(0);
  }, [api, selectedListingIndex]);

  const handleListingClick = (index: number) => {
    setSelectedListingIndex(index);

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
    if (selectedListingIndex === null) return;

    const imageIndex = current - 1;
    const listing = listings[selectedListingIndex];

    if (imageIndex < 0 || imageIndex >= listing.images.length) return;

    const imageUrl = listing.images[imageIndex];
    const fileName = `${listing.title}-image-${current}`;

    // Get correct file extension from the URL
    const extension = imageUrl.split(".").pop() || "jpg";

    const a = document.createElement("a");
    a.href = imageUrl;
    a.download = `${fileName}.${extension}`;
    a.click();
  };

  // Available listings
  // Available listings
  const listings = [
    {
      id: 1,
      title: "Suite 1C-E",
      sqft: "3,339",
      price: "Price Available Upon Request",
      images: [
        "/images/mission-bay/suite1CDE/PageFiveSuite1CDE.jpg",
        "/images/mission-bay/suite1CDE/PageTwoSuite1CDE.jpg",
        "/images/mission-bay/suite1CDE/PageThreeSuite1CDE.jpg",
        "/images/mission-bay/suite1CDE/PageFourSuite1CDE.jpg",
        "/images/mission-bay/suite1CDE/PageOneSuite1CDE.jpg",
        "/images/mission-bay/suite1CDE/PageSixSuite1CDE.jpg",
        "/images/mission-bay/suite1CDE/PageSixSuite1CDE.jpg",
        "/images/mission-bay/suite1CDE/PageSevenSuite1CDE.jpg",
        "/images/mission-bay/suite1CDE/PageEightSuite1CDE.jpg",
        "/images/mission-bay/suite1CDE/PageNineSuite1CDE.jpg",
        "/images/mission-bay/suite1CDE/PageTenSuite1CDE.jpg",
        "/images/mission-bay/suite1CDE/PageElevenSuite1CDE.jpg",
        "/images/mission-bay/suite1CDE/PageTwelveSuite1CDE.jpg",
      ],
      imageUrl: "/images/mission-bay/suite1CDE/PageFiveSuite1CDE.jpg",
      type: "Office Space",
      location: "Mission Bay",
      features: [
        { name: "Private Exam Rooms", status: "Included" },
        { name: "Waiting Area", status: "Included" },
        { name: "Staff Area", status: "Included" },
        { name: "Bathrooms", status: "Included" },
        { name: "Break room", status: "Included" },
      ],
    },
  ];

  const featuredTenants = [
    {
      id: 1,
      name: "Sushi Ota",
      website: "www.sushi-ota.com",
      imageUrl: "/images/mission-bay/current-tenants/SushiOta.jpg",
    },
    {
      id: 2,
      name: "Ocean Physical Therapy",
      website: "www.oceanpt.net",
      imageUrl: "/images/mission-bay/current-tenants/OceanPt.jpg",
    },
    {
      id: 3,
      name: "Smiling Buddha Bodywork",
      website: "www.smilingbuddhabodywork.com",
      imageUrl: "/images/mission-bay/current-tenants/SmilingBuddha.jpg",
    },
    {
      id: 4,
      name: "The Notary San Diego by Chris Arbuckle",
      website: "www.thenotarysandiego.com",
      imageUrl: "/images/mission-bay/current-tenants/Notary.jpg",
    },
    {
      id: 5,
      name: "Shawn Gartner Insurance Agent",
      website: "www.goosehead.com/agents/ca/san-diego/shawn-gartner",
      imageUrl: "/images/mission-bay/current-tenants/ShawnGartnerInsurance.jpg",
    },
  ];

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
                {selectedListingIndex !== null &&
                  listings[selectedListingIndex].images.map(
                    (imageUrl, index) => (
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
                    )
                  )}
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

      <div className="bg-white dark:bg-[#111827] shadow-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Mission Bay Center Location
          </h1>
          <p className="mt-2 text-xl text-gray-600 dark:text-gray-300">
            4501 Mission Bay Dr., San Diego, CA 92109
          </p>
          <p className="mt-8 text-gray-600 dark:text-gray-300 text-sm md:text-base">
            Mission Bay Professional Center is conveniently located in a
            high-traffic (approximately 31,360 ADT), high visibility area in the
            Pacific Beach area of San Diego.
            <br />
            <br />
            The building has:
            <br />
            - Easy access to Highways 5 and 52
            <br />
            - Ample parking for customers
            <br />
            - Award winning restaurants, a convenience store, and many medical
            and professional tenants.
            <br />
            <br />
            It is near:
            <br />
            - Mission Bay Golf Course
            <br />
            - The beach
            <br />
            - Hotels, restaurans, other retail stores
            <br />
            <br />
            The median income is approximately $71,000 with the average home
            price being $982,000. <br /> The surrounding population is 48,000
            with a density of 6,250 people per square mile.
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
            <div
              key={listing.id}
              className="bg-white dark:bg-[#111827] rounded-lg shadow overflow-hidden hover:shadow-lg transition-all hover:-translate-y-2 cursor-pointer flex flex-col"
              onClick={() => handleListingClick(index)}
            >
              <div
                className="h-48 w-full"
                style={{
                  backgroundImage: `url(${listing.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {listing.title}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin className="h-4 w-4 mr-2" />
                    {listing.location}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Building2 className="h-4 w-4 mr-2" />
                    {listing.type}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
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
              </div>
              <div className="border-t p-4 mt-auto">
                <p className="w-full text-center font-semibold">
                  {listing.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Featured Tenants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTenants.map((tenant) => (
            <div
              key={tenant.id}
              className="bg-white dark:bg-[#111827] rounded-lg shadow p-6 hover:shadow-lg transition-all hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {tenant.name}
              </h3>
              <a
                href={`https://${tenant.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {tenant.website}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
