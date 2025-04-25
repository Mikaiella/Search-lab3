import { useState } from "react";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");
  const [search_type, setSearchType] = useState("repositories");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query, search_type);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 d-flex flex-column ">
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Enter search query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="form-check form-check-inline">
        <input
          className="form-check-input mb-2"
          type="radio"
          name="searchType"
          id="repositories"
          value="repositories"
          checked={search_type === "repositories"}
          onChange={(e) => setSearchType(e.target.value)}
        />
        <label className="form-check-label" htmlFor="repositories">
          Repositories
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input mb-2"
          type="radio"
          name="searchType"
          id="users"
          value="users"
          checked={search_type === "users"}
          onChange={(e) => setSearchType(e.target.value)}
        />
        <label className="form-check-label" htmlFor="users">
          Users
        </label>
      </div>
      <button className="btn btn-primary mt-2" type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
