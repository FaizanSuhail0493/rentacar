
import CarRentalPage from "./components/CarRentalPage";
import Filters from "./components/Filters";
import Hero from "./components/Hero";
import Popular from "./components/Popular";


export default function Home() {
  return (
    <div className="bg-gray-200"> 
    <Hero />
    <Filters />
    <Popular />
      <CarRentalPage />
    </div>
  );
}
