import { useGlobalContext } from "../hooks/useGlobalContext.js";
import "./FavoritesSidebar.css";

// FavoritesSidebar reutiliza el mismo hook useFavorites que AnimalCard.
// Demuestra que un custom hook puede ser consumido por componentes independientes
// sin compartir estado de forma directa → el estado se "sube" (lifting state up) a App.
export default function FavoritesSidebar({ animals, favoritesHook }) {
  const { userName } = useGlobalContext(); // ← useContext también aquí
  const { favorites,isFavorite, toggleFavorite } = favoritesHook;
  const favAnimals = [];
  for (let i = 0; i < animals.length; i++)
  {
    if(isFavorite(animals[i].id))
    {
      favAnimals.push(animals[i]);
    }
  }

  // Convertimos los IDs de favoritos en objetos completos de animal
//recibe todos los animales, la lista de id de favoritos a traves del hook de favoritos
  return (
    <aside className="fav-sidebar">
      <h3>Animales favoritos</h3>
      <ul className="favorites">
        {favAnimals.map(favAnimal => (
            <li key={favAnimal.id}>
                {favAnimal.name}   {favAnimal.id}
          <button onClick={()=>toggleFavorite(favAnimal.id)}> Remove Favorite</button>
        </li> ))}
      </ul>
    </aside>
  );
}
