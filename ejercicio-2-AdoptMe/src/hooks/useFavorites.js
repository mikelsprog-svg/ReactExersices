import { useState } from "react";


export function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  function addFavorites(id)
  {
    //si es favorito retorna el estado previo sino nada
    if (!isFavorite(id))
    {
      setFavorites((prevFavorites) => [...prevFavorites, id]);
    }
    else
    {
      setFavorites((prevFavorites) => prevFavorites);
    }
  }
  function removeFavourite(id)
  {
    setFavorites((prev) => prev.filter((fav) => fav !== id));
  }
  function isFavorite(id)
  {
     return  favorites.includes(id);

  }
  function toggleFavorite(id)
  {
    if (isFavorite(id))
    {
      removeFavourite(id);
    }
    else
    {
      addFavorites(id);
    }
  }

  return {favorites, addFavorites, removeFavourite,isFavorite,toggleFavorite}

}
