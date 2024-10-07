import React from "react";

const JobFilters = ({ sectors, categories, selectedSector, setSelectedSector, selectedCategory, setSelectedCategory, sortOption, setSortOption }) => {
  return (
    <div className="filter-section">
      <h3>Filter Jobs</h3>
      
      {/* Filter by Sector */}
      <label htmlFor="sector">Sector:</label>
      <select value={selectedSector} onChange={(e) => setSelectedSector(e.target.value)}>
        <option value="">All Sectors</option>
        {sectors.map((sector, idx) => (
          <option key={idx} value={sector}>{sector}</option>
        ))}
      </select>

      {/* Filter by Category */}
      <label htmlFor="category">Category:</label>
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category, idx) => (
          <option key={idx} value={category}>{category}</option>
        ))}
      </select>
      
      {/* Sort by CTC */}
      <label htmlFor="sort">Sort by CTC:</label>
      <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
        <option value="">Default</option>
        <option value="asc">Lowest to Highest</option>
        <option value="desc">Highest to Lowest</option>
      </select>
    </div>
  );
};

export default JobFilters;
