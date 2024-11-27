import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Building2, MapPin, Grid2x2 } from "lucide-react";

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
    title: "Downtown Office Tower",
    location: "Financial District, NY",
    type: "Office Space",
    size: "5,000-50,000 sq ft",
    image: "/api/placeholder/600/400",
  },
  {
    id: 2,
    title: "Retail Complex",
    location: "Midtown, NY",
    type: "Retail",
    size: "2,000-20,000 sq ft",
    image: "/api/placeholder/600/400",
  },
  {
    id: 3,
    title: "Industrial Warehouse",
    location: "Brooklyn, NY",
    type: "Industrial",
    size: "10,000-100,000 sq ft",
    image: "/api/placeholder/600/400",
  },
];

export default function FeaturedProperties() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our selection of premium commercial properties in prime
            locations
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <Card
              key={property.id}
              className="hover:shadow-lg transition-shadow"
            >
              <div
                className="h-48 w-full rounded-t-lg"
                style={{
                  backgroundImage: `url(${property.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <CardHeader>
                <CardTitle>{property.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {property.location}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Building2 className="h-4 w-4 mr-2" />
                    {property.type}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Grid2x2 className="h-4 w-4 mr-2" />
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

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
}
