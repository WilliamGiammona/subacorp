import NavBar from "./components/ui/navigation/NavBar";
import Hero from "./Hero";
import FeaturedProperties from "./FeaturedProperties";
import Services from "./services";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <FeaturedProperties />
      <Services />
    </div>
  );
}
