import NavBar from "@/app/components/ui/navigation/NavBar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import Image from "next/image";

export default function MissionBay() {
  const listings = [
    {
      id: 1,
      title: "Suite 101",
      sqft: "1,200",
      price: "$2,800/month",
      imageUrl: "/images/Interior.jpg",
    },
    {
      id: 2,
      title: "Suite 102",
      sqft: "950",
      price: "$2,200/month",
      imageUrl: "/images/Interior.jpg",
    },
    {
      id: 3,
      title: "Suite 201",
      sqft: "1,500",
      price: "$3,500/month",
      imageUrl: "/images/Interior.jpg",
    },
    {
      id: 4,
      title: "Suite 202",
      sqft: "800",
      price: "$1,900/month",
      imageUrl: "/images/Interior.jpg",
    },
  ];

  const tenants = [
    {
      id: 1,
      name: "Body Quest Fitness",
      since: "2015",
      imageUrl: "/images/Interior.jpg",
    },
    {
      id: 2,
      name: "Ocean View Cleaners",
      since: "2018",
      imageUrl: "/images/Interior.jpg",
    },
    {
      id: 3,
      name: "Pacific Coffee Co.",
      since: "2019",
      imageUrl: "/images/Interior.jpg",
    },
    {
      id: 4,
      name: "Coastal Insurance Group",
      since: "2020",
      imageUrl: "/images/Interior.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavBar />

      {/* Address Section */}
      <div className="bg-white dark:bg-gray-800 shadow-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Mission Bay Location
          </h1>
          <p className="mt-2 text-xl text-gray-600 dark:text-gray-300">
            4529 Mission Bay Dr., San Diego, CA 92109, USA
          </p>
        </div>
      </div>

      {/* Available Listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Available Listings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <Card
              key={listing.id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={listing.imageUrl}
                  alt={listing.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{listing.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  {listing.sqft} sq ft
                </p>
                <p className="font-semibold mt-1">{listing.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Current Tenants */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Current Tenants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tenants.map((tenant) => (
            <Card
              key={tenant.id}
              className="hover:shadow-lg transition-shadow duration-300"
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
      </div>
    </div>
  );
}
