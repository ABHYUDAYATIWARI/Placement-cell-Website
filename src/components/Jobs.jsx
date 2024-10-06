import React from "react";

const JobList = ({ jobs }) => {
  return (
    <div className="job-list">
      {jobs.length > 0 ? (
        jobs.map((job, idx) => (
          <div key={idx} className="job-card">
            <h2>{job.jobDesignation}</h2>
            <p><strong>Company:</strong> {job.name}</p>
            <p><strong>Sector:</strong> {job.sector.join(", ")}</p>
            <p><strong>Category:</strong> {job.category}</p>
            <p><strong>Location:</strong> {job.jobLocation}</p>
            <p><strong>Joining Date:</strong> {job.joiningDate}</p>
            <p><strong>Description:</strong> {job.description}</p>
          </div>
        ))
      ) : (
        <p>No jobs found matching your criteria.</p>
      )}
    </div>
  );
};

export default JobList;
