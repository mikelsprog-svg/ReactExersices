import { useState, useEffect } from "react";
import AnimalCard from "./AnimalCard.jsx";
import "./AnimalGrid.css";

export default function AnimalGrid({ animals, loading, favoritesHook }) {
  const [resultMsg, setResultMsg] = useState("");





  return (
    <div>
        {animals.map((animal) =>
            <AnimalCard
                key={animal.id}
                animal={animal}
                favoritesHook={favoritesHook} />
        )}
    </div>
  );
}
