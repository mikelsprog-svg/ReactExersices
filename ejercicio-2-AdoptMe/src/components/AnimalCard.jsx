import { useGlobalContext } from "../hooks/useGlobalContext.js";
import "./AnimalCard.css";

// AnimalCard está a 2 niveles del Provider (App → AnimalGrid → AnimalCard)
// Consume el contexto directamente, sin necesitar props intermedias
export default function AnimalCard({ animal, favoritesHook }) {
  //const { userName } = useGlobalContext(); // ← useContext en acción
  const { isFavorite, toggleFavorite } = favoritesHook;
  const fav = isFavorite(animal.id);
// { id: "d1", name: "Rocky",   species: "dog",  emoji: "🐶", breed: "Labrador",      age: 2 },
  return (
    <article className={`animal-card ${fav ? "animal-card--fav" : ""}`}>

      <p> Name : {animal.name }</p>
      <p> Species : {animal.species }</p>
      <p> Emoji : {animal.emoji }</p>
      <p> Breed : {animal.breed }</p>
      <button onClick={()=>toggleFavorite(animal.id)} type="button">
        {fav?"Ya es favorito" : "Añade afavorito"}
      </button>
    </article>
  );
}
