import React from "react";
import { useNavigate } from "react-router-dom";

const JobList = ({ jobs }) => {
  const navigate = useNavigate();
  const toDetails = (job) => {
    navigate(`/job-detail/${job.id}`); // Assuming each job has a unique 'id' field
  };

  return (
    <div className="job-list">
      {jobs.length > 0 ? (
        jobs.map((job, idx) => (
          <div key={idx} className="job-card">
            <button onClick={() => toDetails(job)}>
              <h2>{job.jobDesignation}</h2>
              <p><strong>Company:</strong> {job.name}</p>
              <p><strong>Sector:</strong> {job.sector.join(", ")}</p>
              <p><strong>Category:</strong> {job.category}</p>
              <p><strong>Location:</strong> {job.jobLocation}</p>
              <p><strong>Joining Date:</strong> {job.joiningDate}</p>
              <p><strong>Description:</strong> {job.description}</p>
            </button>
          </div>
        ))
      ) : (
        <p>No jobs found matching your criteria.</p>
      )}
    </div>
  );
};

export default JobList;
