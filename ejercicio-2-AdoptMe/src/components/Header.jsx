import { useGlobalContext } from "../hooks/useGlobalContext.js";
import "./Header.css";

// Header consume el contexto directamente → NO necesita recibir props
// Demuestra cómo useContext evita el prop drilling
export default function Header() {
  const { userName, theme, toggleTheme } = useGlobalContext();

  return (
    <header className="header">

    </header>
  );
}
