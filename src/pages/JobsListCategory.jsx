import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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

export default CategoryJob;
