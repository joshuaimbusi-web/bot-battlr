import React from "react";

const classes = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

function SortBar({ sortBy, setSortBy, filters, setFilters }) {
  function handleSortChange(e) {
    setSortBy(e.target.value);
  }

  function handleFilterChange(e) {
    const value = e.target.value;
    if (filters.includes(value)) {
      setFilters(filters.filter(f => f !== value));
    } else {
      setFilters([...filters, value]);
    }
  }

  return (
    <div className="sort-bar">
      <div>
        <label>Sort by: </label>
        <select value={sortBy} onChange={handleSortChange}>
          <option value="">None</option>
          <option value="health">Health</option>
          <option value="damage">Damage</option>
          <option value="armor">Armor</option>
        </select>
      </div>

      <div className="filters">
        {classes.map(c => (
          <label key={c}>
            <input
              type="checkbox"
              value={c}
              checked={filters.includes(c)}
              onChange={handleFilterChange}
            />
            {c}
          </label>
        ))}
      </div>
    </div>
  );
}

export default SortBar;
