import { Button } from "./components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative h-[70vh] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: 'url("/api/placeholder/1920/1080")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          opacity: 0.7,
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Premium Commercial Real Estate Solutions
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl">
          Discover exceptional properties and investment opportunities across
          prime locations
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            View Properties
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-black"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
