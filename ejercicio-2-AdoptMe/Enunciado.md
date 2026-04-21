# 🐾 AdoptaMe – Ejercicio de Hooks en React

## Objetivo

Construir una mini-aplicación de refugio de animales llamada **AdoptaMe** que ponga en práctica los principales hooks de React: `useState`, `useEffect` en sus tres variantes, `useContext` y la creación de un **Custom Hook** propio.

La app debe permitir ver animales disponibles para adopción, filtrarlos por especie, marcarlos como favoritos y cambiar el tema visual de la interfaz.

---

## Descripción de la aplicación

La pantalla está dividida en tres zonas:

```
┌────────────────────────────────────────────────────────────────────┐
│  🐾 AdoptaMe   Encuentra tu compañero ideal    👤 Ada  ☀️/🌙     │ ← Header
├───────────────────────────────────────┬────────────────────────────┤
│  Filtrar por: [Todos][Perros][Gatos]  │                            │
│              [Conejos]                │  ❤️ Favoritos de Ada       │
│                                       │  ─────────────────────     │
│  X animales disponibles               │  🐶 Rocky  · Labrador  ✕  │
│                                       │  🐱 Misu   · Siamés    ✕  │
│  ┌────────┐ ┌────────┐ ┌────────┐    │                            │
│  │  🐶    │ │  🐕    │ │  🦮    │    │  2 animales guardados      │
│  │ Rocky  │ │ Luna   │ │  Max   │    │                            │
│  │Labrador│ │B.Collie│ │Golden  │    │                            │
│  │ 2 años │ │ 4 años │ │ 1 año  │    │                            │
│  │[❤️ Fav]│ │[🤍 Add]│ │[🤍 Add]│    │                            │
│  └────────┘ └────────┘ └────────┘    │                            │
│   ... más animales ...                │                            │
├───────────────────────────────────────┴────────────────────────────┤
│   🔄 Renders del componente raíz: 5  ← el contador sube con       │
│   Este contador aumenta con cada interacción (useEffect sin [])    │
└────────────────────────────────────────────────────────────────────┘
```

---

## Requisitos técnicos

- Proyecto creado con **React + Vite** (sin TypeScript).
- CSS plano (sin Tailwind, sin MUI ni similares).

---

## Hooks que debes implementar

### 1. `useState`

Gestiona las variables de estado de la aplicación:
- La **especie seleccionada** en el filtro (`"all"`, `"dog"`, `"cat"`, `"rabbit"`).
- La lista de **IDs de animales favoritos** (dentro de un custom hook).
- El **tema** visual de la app (`"dark"` / `"light"`).
- El **mensaje de resultados** (`"X animales disponibles"`).

### 2. `useEffect` — tres variantes obligatorias

| Variante | Dónde | Qué hace |
|---|---|---|
| **Sin array de dependencias** | `App.jsx` | Actualiza `document.title` con el número de renders del componente. Se ejecuta en cada render. |
| **Con `[]` (array vacío)** | `useAnimals.js` (custom hook) | Simula la carga inicial de datos (con un `setTimeout` que imita un fetch). Solo se ejecuta al montar. Debe gestionar estados `loading` y `error`. |
| **Con variables** `[animals, loading]` | `AnimalGrid.jsx` | Actualiza el mensaje "X animales disponibles" cada vez que cambia la lista filtrada. |

### 3. `useContext`

Crea un contexto `AppProvider` que exponga globalmente:
- `userName` — nombre del usuario (cadena fija, como `"Ada Lovelace"`).
- `theme` — tema actual (`"dark"` / `"light"`).
- `toggleTheme()` — función para cambiar el tema.

El contexto debe consumirse en **al menos dos componentes distintos** que estén a más de un nivel de profundidad respecto al `Provider`, demostrando así que evita el prop drilling.

### 4. Custom Hook: `useFavorites`

Crea un hook `useFavorites` en `src/hooks/useFavorites.js` que:
hooks---

## Estructura de carpetas sugerida

```
src/
├── main.jsx
├── index.css                     ← reset + variables CSS (:root y :root.light)
├── context/
│   └── AppProvider.jsx             ← createContext + AppProvider + useAppContext
├── hooks/
│   ├── useFavorites.js            ← Custom Hook: gestión de favoritos
│   └── useAnimals.js              ← Custom Hook: carga y filtrado de animales
└── components/
    ├── App.jsx                    ← useEffect sin deps, orquesta todo
    ├── App.css
    ├── Header.jsx                 ← consume useContext
    ├── Header.css
    ├── FilterBar.jsx              ← botones de filtro
    ├── FilterBar.css
    ├── AnimalGrid.jsx             ← useEffect con [animals]
    ├── AnimalGrid.css
    ├── AnimalCard.jsx             ← consume useContext + useFavorites
    ├── AnimalCard.css
    ├── FavoritesSidebar.jsx       ← reutiliza useFavorites
    ├── FavoritesSidebar.css
    ├── RenderCounter.jsx          ← muestra el contador de renders
    └── RenderCounter.css
```

---

## Datos de los animales

Crea los datos directamente en `useAnimals.js` como una constante (sin fetch real). Cada animal debe tener: `id`, `name`, `species`, `emoji`, `breed`, `age`.

```js
const MOCK_DATA = [
  { id: "d1", name: "Rocky",   species: "dog",    emoji: "🐶", breed: "Labrador",       age: 2 },
  { id: "d2", name: "Luna",    species: "dog",    emoji: "🐕", breed: "Border Collie",  age: 4 },
  { id: "d3", name: "Max",     species: "dog",    emoji: "🦮", breed: "Golden Retriever", age: 1 },
  { id: "c1", name: "Misu",    species: "cat",    emoji: "🐱", breed: "Siamés",         age: 3 },
  { id: "c2", name: "Olivia",  species: "cat",    emoji: "🐈", breed: "Maine Coon",     age: 5 },
  { id: "c3", name: "Simba",   species: "cat",    emoji: "😸", breed: "Persa",          age: 2 },
  { id: "r1", name: "Pelusa",  species: "rabbit", emoji: "🐰", breed: "Angora",         age: 1 },
  { id: "r2", name: "Thumper", species: "rabbit", emoji: "🐇", breed: "Holandés",       age: 3 },
];
```

---

## Criterios de evaluación

- ✅ `useEffect` sin array: se ejecuta en cada render y tiene un efecto observable (título o contador).
- ✅ `useEffect` con `[]`: carga inicial de datos con estados `loading` / `error`.
- ✅ `useEffect` con variables: reacciona visiblemente al cambio de filtro.
- ✅ `useContext`: evita pasar props a través de componentes intermedios (prop drilling).
- ✅ `useFavorites` es un custom hook reutilizado en más de un componente.
- ✅ El tema claro/oscuro funciona y el cambio es visible en la UI.
- ✅ El filtro por especie actualiza la lista de animales.

---

## Pistas

- Un **custom hook** es simplemente una función cuyo nombre empieza por `use` y puede llamar a otros hooks. No tiene nada especial de React, es solo una convención.
- Para el tema visual: aplica una clase `.light` al `<html>` (`document.documentElement`) y define las variables CSS para esa clase en `index.css`.
- Para el `useEffect []`: recuerda devolver una función de limpieza si usas `setTimeout`.
- El `useContext` no elimina la necesidad de pasar props entre componentes hermanos — solo sirve para datos verdaderamente **globales** (tema, usuario, idioma...).
- `useRef` puede ser útil para llevar el contador de renders sin causar re-renders adicionales.

---

## Recursos oficiales

- [useState – React Docs](https://react.dev/reference/react/useState)
- [useEffect – React Docs](https://react.dev/reference/react/useEffect)
- [useContext – React Docs](https://react.dev/reference/react/useContext)
- [createContext – React Docs](https://react.dev/reference/react/createContext)
- [Custom Hooks – React Docs](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [Sincronización con efectos (guía extensa)](https://react.dev/learn/synchronizing-with-effects)
