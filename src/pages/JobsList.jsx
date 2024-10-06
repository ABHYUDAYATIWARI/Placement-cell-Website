import { useState } from 'react'
import '../App.css'

import JobFilters from '../components/Filter'
import JobList from '../components/Jobs'
import { Data as jobData } from '../assets/data'
import Header from '../components/Header'

const AllJobs = () => {
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Unique sectors and categories for filtering
  const sectors = [...new Set(jobData.flatMap((job) => job.sector))];
  const categories = [...new Set(jobData.flatMap((job) => job.category))];
  // console.log(categories);
  
  // Filter jobs based on selected filters
  const filteredJobs = jobData.filter((job) => {
    const sectorMatch = selectedSector ? job.sector.includes(selectedSector) : true;
    const categoryMatch = selectedCategory ? job.category.includes(selectedCategory)  : true;
    return sectorMatch && categoryMatch;
  });

  return (
    <div className="app">
      <header>
        <Header/>
      </header>
      <JobFilters
        sectors={sectors}
        categories={categories}
        selectedSector={selectedSector}
        setSelectedSector={setSelectedSector}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <JobList jobs={filteredJobs} />

    </div>
  );
};

export default AllJobs;