import NavBar from "./components/ui/navigation/NavBar";
import Hero from "./Hero";
import FeaturedProperties from "./FeaturedProperties";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <FeaturedProperties />
    </div>
  );
}
