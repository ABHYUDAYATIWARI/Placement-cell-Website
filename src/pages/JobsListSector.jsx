import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Data as jobData } from '../assets/data'; // Job data array
import Header from "../components/Header";

const SectorJobs = () => {
  const location = useLocation();
  const [selectedSector, setSelectedSector] = useState(null);
  const [filteredJobs, setFilteredJobs] = useState([]);

  // Extract the selected sector from location state
  useEffect(() => {
    if (location.state && location.state.selectedSector) {
      setSelectedSector(location.state.selectedSector);
    }
  }, [location.state]);

  // Filter jobs based on the selected sector
  useEffect(() => {
    if (selectedSector) {
      const jobs = jobData.filter((job) => job.sector.includes(selectedSector));
      setFilteredJobs(jobs);
    } else {
      setFilteredJobs(jobData); // Show all jobs if no sector is selected
    }
  }, [selectedSector]);

  return (
    <>
    <Header/>
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-semibold mb-6">
        {selectedSector ? `Jobs in ${selectedSector}` : "All Jobs"}
      </h1>

      <ul className="space-y-4">
        {filteredJobs.map((job, index) => (
          <li key={index} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{job.name}</h2>
            <p>Sector: {job.sector.join(", ")}</p>
            <p>Category: {job.category}</p>
            <p>Location: {job.postalAddress}</p>
            <a href={job.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              {job.website}
            </a>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default SectorJobs;
