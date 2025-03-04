"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import NavBar from "./components/ui/navigation/NavBar";
import Hero from "./Hero";
import FeaturedProperties from "./FeaturedProperties";
import Services from "./services";

export default function Home() {
  const { isLoaded, userId } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // If not authenticated, show under development page
  if (!userId) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white bg-opacity-90 bg-cover bg-center">
        <h1 className="text-5xl font-bold mb-8">SUBA CORP</h1>
        <div className="text-6xl font-light mb-12">Launching Soon</div>
        <button
          onClick={() => router.push("/sign-in")}
          className="px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition-colors"
        >
          Admin Access
        </button>
      </div>
    );
  }

  // Check if the user has the authorized email
  const userEmail = user?.primaryEmailAddress?.emailAddress;
  const isAuthorized = userEmail === "wgiammona@gmail.com";

  // If user is logged in but not authorized, show unauthorized message
  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-3xl font-bold mb-4">Unauthorized Access</h1>
        <p className="mb-6">
          You don&apos;t have permission to view this site.
        </p>
        <button
          onClick={() => router.push("/sign-out")}
          className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200"
        >
          Sign Out
        </button>
      </div>
    );
  }

  // If authenticated and authorized, show the full site
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <FeaturedProperties />
      <Services />
    </div>
  );
}
