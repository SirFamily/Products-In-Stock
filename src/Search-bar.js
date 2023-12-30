import React from "react";

function SearchBar({
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange
  }) {
    return (
      <form>
        <input 
          type="text" 
          className="Search"
          value={filterText} placeholder="Search..." 
          onChange={(e) => onFilterTextChange(e.target.value)} />
        <label>
          <input 
            type="checkbox" 
            className="check"
            checked={inStockOnly} 
            onChange={(e) => onInStockOnlyChange(e.target.checked)} />
          {' '}

        </label>
      </form>
    );
  }export default SearchBar;