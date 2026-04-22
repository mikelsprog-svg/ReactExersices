import { useState, useEffect, useRef } from "react";
import { AppProvider } from "../context/global/AppProvider.jsx";
import { useFavorites } from "../hooks/useFavorites.js";
import { useAnimals } from "../hooks/useAnimals.js";
import Header from "./Header.jsx";
import FilterBar from "./FilterBar.jsx";
import AnimalGrid from "./AnimalGrid.jsx";
import FavoritesSidebar from "./FavoritesSidebar.jsx";
import RenderCounter from "./RenderCounter.jsx";
import "./App.css";

function AppContent() {

    const [species, setSpecies]     = useState("all");
    const { animals, loading, error } = useAnimals(species);
    const favoritesHook             = useFavorites();

  // useEffect(() => {
  //   document.title = `AdoptaMe 🐾 | Render #${renderCount.current}`;
  // }); // <── sin segundo argumento: se ejecuta siempre

  return (
    <div className="app-layout">
      <Header />
        <AnimalGrid animals={animals} loading={loading} favoritesHook={favoritesHook} />
        <FavoritesSidebar animals={animals}  favoritesHook={favoritesHook} />

    </div>
  );
}
//     <RenderCounter count={renderCount.current} />
// App envuelve todo con el Provider para que el contexto esté disponible
export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
