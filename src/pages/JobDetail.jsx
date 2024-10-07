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
      <Header />
      <div className="container mx-auto p-8 flex space-x-8">

        {/* Left section with main job details */}
        <div className="w-3/4 bg-white p-8 rounded-lg shadow-lg">

          <h1 className="text-4xl font-bold text-gray-800 mb-6">{jobData.name}</h1>

          <div className="mb-4 text-gray-700">
            <span className="text-lg font-semibold text-blue-700">Sectors: </span>
            {jobData.sector.join(', ')}
          </div>

          <div className="mb-4 text-gray-700">
            <span className="text-lg font-semibold text-blue-700">Website: </span>
            <a
              href={jobData.website}
              className="text-blue-800 underline hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {jobData.website}
            </a>
          </div>

          <div className="mb-4 text-gray-700">
            <span className="text-lg font-semibold text-blue-700">Category: </span>
            {jobData.category.join(', ')}
          </div>

          <div className="mb-4 text-gray-700">
            <span className="text-lg font-semibold text-blue-700">Postal Address: </span>
            {jobData.postalAddress}
          </div>

          {/* Job Details */}
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Job Details</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li><strong>Designation:</strong> {jobData.jobDetails.jobDesignation}</li>
            <li><strong>Tentative No of Hires:</strong> {jobData.jobDetails.tentativeNoOfHires}</li>
            <li><strong>Tentative Joining Date:</strong> {jobData.jobDetails.tentativeJoiningDate}</li>
            <li><strong>Tentative Job Location:</strong> {jobData.jobDetails.tentativeJobLocation}</li>
            <li><strong>Job Description:</strong> {jobData.jobDetails.jobDescription}</li>
          </ul>

          {/* Contact Details */}
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Details</h2>
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900">Head HR</h3>
            <p className="text-gray-700"><strong>Name:</strong> {jobData.contactDetails.headHR.name}</p>
            <p className="text-gray-700"><strong>Designation:</strong> {jobData.contactDetails.headHR.designation}</p>
            <p className="text-gray-700"><strong>Mobile:</strong> {jobData.contactDetails.headHR.mobileNumber}</p>
            <p className="text-gray-700"><strong>Telephone:</strong> {jobData.contactDetails.headHR.telephoneNumber}</p>
            <p className="text-gray-700"><strong>Email:</strong>
              <a
                href={`mailto:${jobData.contactDetails.headHR.emailId}`}
                className="text-blue-800 underline hover:text-blue-600 transition-colors"
              >
                {jobData.contactDetails.headHR.emailId}
              </a>
            </p>
          </div>

          {/* Point of Contact 1 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900">Point of Contact 1</h3>
            <p className="text-gray-700"><strong>Name:</strong> {jobData.contactDetails.POC1.name}</p>
            <p className="text-gray-700"><strong>Designation:</strong> {jobData.contactDetails.POC1.designation}</p>
            <p className="text-gray-700"><strong>Mobile:</strong> {jobData.contactDetails.POC1.mobileNumber}</p>
            <p className="text-gray-700"><strong>Telephone:</strong> {jobData.contactDetails.POC1.telephoneNumber}</p>
            <p className="text-gray-700"><strong>Email:</strong>
              <a
                href={`mailto:${jobData.contactDetails.POC1.emailId}`}
                className="text-blue-800 underline hover:text-blue-600 transition-colors"
              >
                {jobData.contactDetails.POC1.emailId}
              </a>
            </p>
          </div>

          {/* Eligible Branches */}
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Eligible Branches</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            {jobData.eligibleBranches.map((branch, index) => (
              <li key={index}>{branch}</li>
            ))}
          </ul>

          {/* Graph */}
          <GraphForCompany recruitmentData={jobData.recruitmentData} />

        </div>

        {/* Right sidebar */}
        <div className="w-1/4 bg-gray-50 p-6 rounded-lg shadow-md fixed top-20 right-3">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Company Overview</h2>
          <p className="text-gray-700 mb-4"><strong>Industry:</strong> {jobData.sector.join(', ')}</p>
          <p className="text-gray-700 mb-4"><strong>Category:</strong> {jobData.category.join(', ')}</p>
          <p className="text-gray-700 mb-6">
            <strong>Website:</strong>{' '}
            <a
              href={jobData.website}
              className="text-blue-800 underline hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {jobData.website}
            </a>
          </p>

          {/* Quick Links */}
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
         <a href="#" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Apply Now</a>
        </div>
      </div>

    </>
  );
};

export default JobDetailPage;
