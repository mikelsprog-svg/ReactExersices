import { useGlobalContext } from "../hooks/useGlobalContext.js";
import "./AnimalCard.css";

// AnimalCard está a 2 niveles del Provider (App → AnimalGrid → AnimalCard)
// Consume el contexto directamente, sin necesitar props intermedias
export default function AnimalCard({ animal, favoritesHook }) {


  return (
    <article className={`animal-card ${fav ? "animal-card--fav" : ""}`}>

    </article>
  );
}
