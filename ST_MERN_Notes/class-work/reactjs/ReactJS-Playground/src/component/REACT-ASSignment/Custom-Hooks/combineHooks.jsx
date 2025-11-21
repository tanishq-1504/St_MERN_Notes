import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import useDarkMode from "../hooks/useDarkMode";


function PokiApi(){
const [name, setName] = useState("pikachu");
  const [darkMode, toggleDarkMode, styles] = useDarkMode(false);

  const { data, loading, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  return (
    <>
    <div style={styles}>
      <button
        onClick={toggleDarkMode}
        className="cursor-pointer px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <p className="mt-4 text-lg font-medium pb-10">
        {darkMode ? " Dark mode is ON" : " Light mode is ON"}
      </p>
      <>
      <h2>Pokémon Viewer</h2>
      <input
        value={name}
        onChange={e => setName(e.target.value.toLowerCase())}
        placeholder="Enter Pokémon name"
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && (
        <div>
          <h3>{data.name}</h3>
          <img src={data.sprites.front_default} alt={data.name} />
          <p>Height: {data.height}</p>
          <p>Weight: {data.weight}</p>
        </div>
      )}
    </>
    </div>  
    </>
  );
}
export default PokiApi;