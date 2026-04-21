import { useGlobalContext } from "../hooks/useGlobalContext.js";
import "./FavoritesSidebar.css";

// FavoritesSidebar reutiliza el mismo hook useFavorites que AnimalCard.
// Demuestra que un custom hook puede ser consumido por componentes independientes
// sin compartir estado de forma directa → el estado se "sube" (lifting state up) a App.
export default function FavoritesSidebar({ animals, favoritesHook }) {
  return (
    <aside className="fav-sidebar">

    </aside>
  );
}
