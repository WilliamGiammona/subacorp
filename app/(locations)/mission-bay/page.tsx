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
import { X, Download, MapPin, Building2, Grid2x2 } from "lucide-react";
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
  const [selectedTenantIndex, setSelectedTenantIndex] = useState<number | null>(
    null
  );
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

    if (selectedListingIndex !== null) {
      api.scrollTo(selectedListingIndex);
    } else if (selectedTenantIndex !== null) {
      api.scrollTo(selectedTenantIndex);
    }
  }, [api, selectedListingIndex, selectedTenantIndex]);

  const handleDownload = async () => {
    const currentItem =
      selectedListingIndex !== null
        ? listings[current - 1]
        : tenants[current - 1];

    const fileName =
      "listing" +
      ("title" in currentItem ? currentItem.title : currentItem.name);

    const a = document.createElement("a");
    a.href = currentItem.imageUrl;
    a.download = `${fileName}.jpg`;
    a.click();
  };

  const listings = [
    {
      id: 1,
      title: "Suite 101",
      sqft: "1,200",
      price: "$2,800/month",
      imageUrl: "/images/Interior.jpg",
      type: "Office Space",
      location: "Mission Bay",
    },
    {
      id: 2,
      title: "Suite 102",
      sqft: "950",
      price: "$2,200/month",
      imageUrl: "/images/Interior.jpg",
      type: "Office Space",
      location: "Mission Bay",
    },
    {
      id: 3,
      title: "Suite 201",
      sqft: "1,500",
      price: "$3,500/month",
      imageUrl: "/images/Interior.jpg",
      type: "Office Space",
      location: "Mission Bay",
    },
    {
      id: 4,
      title: "Suite 202",
      sqft: "800",
      price: "$1,900/month",
      imageUrl: "/images/Interior.jpg",
      type: "Office Space",
      location: "Mission Bay",
    },
  ];

  const tenants = [
    {
      id: 1,
      name: "Sushi Ota",
      since: "2015",
      imageUrl: "/images/Interior.jpg",
    },
    {
      id: 2,
      name: "Lanna Thai",
      since: "2018",
      imageUrl: "/images/Interior.jpg",
    },
    {
      id: 3,
      name: "7 Eleven",
      since: "2019",
      imageUrl: "/images/Interior.jpg",
    },
    {
      id: 4,
      name: "Cloud Dry Cleaning",
      since: "2020",
      imageUrl: "/images/Interior.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavBar />

      {/* Modal */}
      {(selectedListingIndex !== null || selectedTenantIndex !== null) && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur">
          <div className="relative max-w-4xl w-full h-[80vh]">
            <div className="absolute top-0 right-0 z-[60] flex items-center gap-4 text-white">
              <span>
                {current} / {count}
              </span>
              <button
                onClick={() => {
                  setSelectedListingIndex(null);
                  setSelectedTenantIndex(null);
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
                {(selectedListingIndex !== null ? listings : tenants).map(
                  (item) => (
                    <CarouselItem key={item.id} className="h-[80vh]">
                      <div className="relative w-full h-full">
                        <Image
                          src={item.imageUrl}
                          alt="Property view"
                          fill
                          className="rounded-lg object-contain"
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
          <p className="mt-8  text-gray-600 dark:text-gray-300 text-sm md:text-base">
            Mission Bay Professional Center is conveniently located in a high
            traffic/high visibility location in the Mission Bay area of San
            Diego. The building has easy access to Highways 5 and 52 as well as
            ample parking for customers, and currently has award winning
            restaurants, a convenience store, and many medical and professional
            tenants. It is near the Mission Bay Golf Course as well as the
            beach! The traffic count is approximately 31,360 ADT. The median
            income is approximately $71,000 with the average home price being
            $982,000. The immediate surrounding population is 48,000 with a
            density of 6,250 people per square mile. Nearby points of interest
            include many fine dining restaurants, retail stores, Mission Bay,
            Mission Bay Golf Course, and of course the beach! We have several
            new spaces coming up for lease over the next few months.
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
              className="hover:shadow-lg transition-all hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedListingIndex(index)}
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
              <CardContent>
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
                </div>
              </CardContent>
              <CardFooter>
                <p className="w-full text-center font-semibold">
                  {listing.price}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Current Tenants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tenants.map((tenant, index) => (
            <Card
              key={tenant.id}
              className="hover:shadow-lg transition-all hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedTenantIndex(index)}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={tenant.imageUrl}
                  alt={tenant.name}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{tenant.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Tenant since {tenant.since}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div> */}
    </div>
  );
}
