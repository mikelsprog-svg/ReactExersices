import "./FilterBar.css";

const SPECIES = [
  { value: "all",    label: "🐾 Todos" },
  { value: "dog",    label: "🐶 Perros" },
  { value: "cat",    label: "🐱 Gatos" },
  { value: "rabbit", label: "🐰 Conejos" },
];

export default function FilterBar({ activeSpecie, onSpeciesChange }) {



  return (
    <div className="filter-bar">
      {SPECIES.map( specie => (

<button onClick={()=>onSpeciesChange(specie.value)}> {specie.label} </button>

          ))}

    </div>
  );
}
