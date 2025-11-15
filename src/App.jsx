import React, { useState } from "react";
import "./App.css";

const dictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

export default function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearched(true);

    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      setResult("");
      return;
    }

    const found = dictionary.find(item => item.word.toLowerCase() === trimmed);
    if (found) {
      setResult(found.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div className="app-container">
      <h1>Dictionary App</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a word..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="search-input"
        />
        <button type="submit">Search</button>
      </form>

      <h3>Definition:</h3>

      {searched && (
        <p>{result}</p>
      )}
    </div>
  );
}
