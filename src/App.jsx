import { useState } from "react";
import Search from "./components/Search";
import Results from "./components/Results";
import Details from "./components/Details";

function App() {
  const [results, setResults] = useState([]);
  const [selected_item, setSelectedItem] = useState(null);
  const [search_type, setSearchType] = useState("repositories");

  const handleSearch = async (query, type) => {
    setSearchType(type);
    setSelectedItem(null);

    const response = await fetch(
      `https://api.github.com/search/${type}?q=${query}`
    );
    const data = await response.json();
    setResults(data.items || []);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  const handleBack = () => {
    setSelectedItem(null);
  };

  return (
    <div className="container p-2">
      <h1 className="mb-4 text-center">Search on GitHub</h1>
      <Search onSearch={handleSearch} />
      {!selected_item && (
        <Results results={results} type={search_type} onSelect={handleSelect} />
      )}
      {selected_item && (
        <Details item={selected_item} type={search_type} onBack={handleBack} />
      )}
    </div>
  );
}

export default App;
