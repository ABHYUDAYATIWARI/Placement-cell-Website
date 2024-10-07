import { useState } from 'react';
import '../App.css';

import JobFilters from '../components/Filter';
import JobCard from '../components/JobCard';
import { Data as jobData } from '../assets/data';
import Header from '../components/Header';

const AllJobs = () => {
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState(""); // State for sort option

  // Unique sectors and categories for filtering
  const sectors = [...new Set(jobData.flatMap((job) => job.sector))];
  const categories = [...new Set(jobData.flatMap((job) => job.category))];

  // Filter jobs based on selected filters
  const filteredJobs = jobData.filter((job) => {
    const sectorMatch = selectedSector ? job.sector.includes(selectedSector) : true;
    const categoryMatch = selectedCategory ? job.category.includes(selectedCategory) : true;
    return sectorMatch && categoryMatch;
  });

  // Sort filtered jobs based on CTC
  const sortedJobs = filteredJobs.sort((a, b) => {
    if (sortOption === "asc") {
      
      return a.recruitmentData.yearWiseRecruitmentTrends.at(-1).averageCTC - b.recruitmentData.yearWiseRecruitmentTrends.at(-1).averageCTC; // Sort ascending
    } else if (sortOption === "desc") {
      return b.recruitmentData.yearWiseRecruitmentTrends.at(-1).averageCTC - a.recruitmentData.yearWiseRecruitmentTrends.at(-1).averageCTC; // Sort descending
    } else {
      return 0; // Default no sorting
    }
  });

  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <JobFilters
        sectors={sectors}
        categories={categories}
        selectedSector={selectedSector}
        setSelectedSector={setSelectedSector}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortOption={sortOption} // Pass sort option
        setSortOption={setSortOption} // Pass setSortOption function
      />
      <JobCard jobs={sortedJobs} /> {/* Use sorted jobs */}

    </div>
  );
};

export default AllJobs;
