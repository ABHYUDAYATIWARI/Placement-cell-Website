import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Data as jobData } from '../assets/data'; // Job data array
import Header from "../components/Header";

const CategoryJob = () => {
    const location = useLocation();
    const [selectedSector, setSelectedSector] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredJobs, setFilteredJobs] = useState([]);

    // Extract the selected sector and category from location state
    useEffect(() => {
        if (location.state && location.state.selectedSector) {
            setSelectedSector(location.state.selectedSector);
        }
        if (location.state && location.state.selectedCategory) {
            setSelectedCategory(location.state.selectedCategory);
        }
    }, [location.state]);

    // Filter jobs based on the selected sector or category
    useEffect(() => {
        let jobs = jobData;
        if (selectedSector) {
            jobs = jobs.filter((job) => job.sector.includes(selectedSector));
        }
        if (selectedCategory) {
            jobs = jobs.filter((job) => job.category.includes(selectedCategory));
        }
        setFilteredJobs(jobs);
    }, [selectedSector, selectedCategory]);
    const navigate = useNavigate();    
  const toDetails = (job) => {
    navigate(`/job-detail/${job.id}`); // Assuming each job has a unique 'id' field
  };
  const logo="https://img.freepik.com/premium-vector/minimalist-logo-design-any-corporate-brand-business-company_1253202-77511.jpg"

    return (
        <>
            <Header/>
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-3xl font-semibold mb-6">
                    {selectedSector
                        ? `Jobs in Sector: ${selectedSector}`
                        : selectedCategory
                            ? `Jobs in Category: ${selectedCategory}`
                            : "All Jobs"}
                </h1>

                <ul className="space-y-4">
                    {filteredJobs.map((job, idx) => (
                        <div key={idx} className="job-card flex">
                        <img src={logo} alt="" className="w-52 h-52"  />
                        <button onClick={() => toDetails(job)}>
                          <h2>{job.jobDesignation}</h2>
                          <p><strong>Company:</strong> {job.name}</p>
                          <p><strong>Sector:</strong> {job.sector.join(", ")}</p>
                          <p><strong>Category:</strong> {job.category}</p>
                          <p><strong>CTC:</strong> {job.recruitmentData.yearWiseRecruitmentTrends.at(-1).averageCTC}</p>
                          <p><strong>Joining Date:</strong> {job.jobDetails.tentativeJoiningDate}</p>
                          <p><strong>Location:</strong> {job.jobDetails.tentativeJobLocation}</p>
                        </button>
                      </div>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default CategoryJob;
