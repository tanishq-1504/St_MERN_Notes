import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

function PokemonViewer() {
  const [name, setName] = useState("pikachu");

  const { data, loading, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );

  return (
    <div style={{ padding: 20 }}>
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
    </div>
  );
}

export default PokemonViewer;
