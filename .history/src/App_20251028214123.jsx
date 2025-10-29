import { useState } from "react";
import HPspell from "./components/HPspell";
import "./App.css";

function App() {
  const [spell, setSpell] = useState(null);

  const handleFetch = async () => {
    if (spell.length === 0) {
      const res = await fetch(
        "https://www.potterapi.com/v1/spells?key=$2a$10$eImiTXuWVxfM37uY4JANjQ=="
      );
      const data = await res.json();
      const formatted = data.messsage.map((url, index) => ({
        id: index,
        name: url.name,
        image: url.image,
        description: url.description,
      }));
      setSpell(formatted);
    } else {
      setSpell([]);
    }
  };

  return (
    <div className="app">
      <button onClick={handleFetch}>
        {spell && spell.length > 0 ? "Hide Spells" : "Show Spells"}
      </button>
      <div className="spell-list">
        {spell &&
          spell.map((spell) => (
            <HPspell
              key={spell.id}
              name={spell.name}
              image={spell.image}
              description={spell.description}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
