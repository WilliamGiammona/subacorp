import { Button } from "./components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative ">
      <div className="relative h-[calc(100vh-60px)] md:h-[calc(100vh-80px)]">
        {/* Background Image with Blue Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("/images/SolanaBeachPicWithCleanersAndBodyQuestRemoved.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.8) contrast(1.2)",
          }}
        >
          {/* Dark Blue Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-black/50" />
        </div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-center h-full pt-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white max-w-6xl leading-tight text-center">
              Commercial Real Estate in {""}
              <br />
              <span className="text-blue-400">San Diego</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-200 max-w-2xl text-center">
              Creating Value in Middle Market Commercial Real Estate
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link href="/solana-beach">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10 px-8"
                >
                  Solana Beach
                </Button>
              </Link>
              <Link href="/mission-bay">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10 px-8"
                >
                  Mission Bay
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
