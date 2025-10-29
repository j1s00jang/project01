import { useState } from "react";
import CharacterList from "./components/CharacterList";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);

  const handleFetch = async () => {
    if (characters.length === 0) {
      const res = await fetch("https://hp-api.onrender.com/api/characters");
      const data = await res.json();
      const selected = data.slice(0, 5).map((item, index) => ({
        id: index,
        title: item.name || "Unknown",
        image:
          item.image || "https://via.placeholder.com/200x250?text=No+Image",
        caption: item.house ? `House: ${item.house}` : "No house info",
      }));
      setCharacters(selected);
    } else {
      setCharacters([]);
    }
  };

  return (
    <div className="app">
      <h1>🪄 Harry Potter Characters</h1>

      <button onClick={handleFetch}>
        {characters.length === 0 ? "Fetch Data" : "Clear Data"}
      </button>

      {characters.length === 0 ? (
        <p className="empty-state">No data fetched yet ✨</p>
      ) : (
        <CharacterList characters={characters} />
      )}
    </div>
  );
}

export default App;
