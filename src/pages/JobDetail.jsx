import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Data } from '../assets/data';
import GraphForCompany from '../components/GraphForCompany';
import Header from '../components/Header';

const JobDetailPage = () => {
  const [jobData, setJobData] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const job = Data.find((e) => e.id === parseInt(id));
    setJobData(job);
    setLoading(false);
    console.log(job);
  }, [id]);

  return loading ? (
    <div>Loading</div>
  ) : (
    <>
    <Header/>
      <div className="container mx-auto p-5 flex">
        {/* Left section with main job details */}
        <div className="w-3/4">
          <h1 className="text-4xl font-bold text-black mb-4">{jobData.name}</h1>
          <div className="mb-6">
            <span className="text-lg font-semibold text-blue-700">Sectors: </span>
            {jobData.sector.join(', ')}
          </div>
          <div className="mb-6">
            <span className="text-lg font-semibold text-blue-700">Website: </span>
            <a
              href={jobData.website}
              className="text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {jobData.website}
            </a>
          </div>
          <div className="mb-6">
            <span className="text-lg font-semibold text-blue-700">Category: </span>
            {jobData.category.join(', ')}
          </div>
          <div className="mb-6">
            <span className="text-lg font-semibold text-blue-700">Postal Address: </span>
            {jobData.postalAddress}
          </div>

          <h2 className="text-2xl font-bold text-blue-800 mb-4">Job Details</h2>
          <ul className="list-disc ml-6 mb-6">
            <li>
              <strong>Designation:</strong> {jobData.jobDetails.jobDesignation}
            </li>
            <li>
              <strong>Tentative No of Hires:</strong> {jobData.jobDetails.tentativeNoOfHires}
            </li>
            <li>
              <strong>Tentative Joining Date:</strong> {jobData.jobDetails.tentativeJoiningDate}
            </li>
            <li>
              <strong>Tentative Job Location:</strong> {jobData.jobDetails.tentativeJobLocation}
            </li>
            <li>
              <strong>Job Description:</strong> {jobData.jobDetails.jobDescription}
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-800 mb-4">Contact Details</h2>
          <div className="mb-6">
            <h3 className="font-semibold">Head HR</h3>
            <p>
              <strong>Name:</strong> {jobData.contactDetails.headHR.name}
            </p>
            <p>
              <strong>Designation:</strong> {jobData.contactDetails.headHR.designation}
            </p>
            <p>
              <strong>Mobile:</strong> {jobData.contactDetails.headHR.mobileNumber}
            </p>
            <p>
              <strong>Telephone:</strong> {jobData.contactDetails.headHR.telephoneNumber}
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a
                href={`mailto:${jobData.contactDetails.headHR.emailId}`}
                className="text-blue-800 underline"
              >
                {jobData.contactDetails.headHR.emailId}
              </a>
            </p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold">Point of Contact 1</h3>
            <p>
              <strong>Name:</strong> {jobData.contactDetails.POC1.name}
            </p>
            <p>
              <strong>Designation:</strong> {jobData.contactDetails.POC1.designation}
            </p>
            <p>
              <strong>Mobile:</strong> {jobData.contactDetails.POC1.mobileNumber}
            </p>
            <p>
              <strong>Telephone:</strong> {jobData.contactDetails.POC1.telephoneNumber}
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a
                href={`mailto:${jobData.contactDetails.POC1.emailId}`}
                className="text-blue-800 underline"
              >
                {jobData.contactDetails.POC1.emailId}
              </a>
            </p>
          </div>

          <h2 className="text-2xl font-bold text-blue-800 mb-4">Eligible Branches</h2>
          <ul className="list-disc ml-6 mb-6">
            {jobData.eligibleBranches.map((branch, index) => (
              <li key={index}>{branch}</li>
            ))}
          </ul>

          <GraphForCompany recruitmentData={jobData.recruitmentData} />
        </div>

        {/* Right sidebar */}
        <div className="w-1/4 ml-6 bg-gray-50 p-4 rounded-lg shadow-md fixed top-20 right-5">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Company Overview</h2>
          <p className="mb-4">
            <strong>Industry:</strong> {jobData.sector.join(', ')}
          </p>
          <p className="mb-4">
            <strong>Category:</strong> {jobData.category.join(', ')}
          </p>
          <p className="mb-4">
            <strong>Website:</strong>{' '}
            <a
              href={jobData.website}
              className="text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {jobData.website}
            </a>
          </p>

          <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Links</h3>
          <ul className="list-disc ml-4">
            <li>
              <a href={jobData.website} className="text-blue-800 underline">
                Company Website
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-800 underline">
                Similar Jobs
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-800 underline">
                Apply Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default JobDetailPage;
