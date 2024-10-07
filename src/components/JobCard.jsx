import React from "react";
import { useNavigate } from "react-router-dom";

const JobCard = ({ jobs }) => {
  const navigate = useNavigate();
  const toDetails = (job) => {
    navigate(`/job-detail/${job.id}`); // Assuming each job has a unique 'id' field
  };
  const logo="https://img.freepik.com/premium-vector/minimalist-logo-design-any-corporate-brand-business-company_1253202-77511.jpg"
  return (
    <div className="job-list">
      {jobs.length > 0 ? (
        jobs.map((job, idx) => (
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
        ))
      ) : (
        <p>No jobs found matching your criteria.</p>
      )}
    </div>
  );
};

export default JobCard;
