import React from 'react';
import GraphS from '../components/GraphForSector';
import GraphC from '../components/GraphForCategory';
import { Data as jobData } from '../assets/data';
import Header from '../components/Header';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <Header />

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">Companies Overview</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


          {/* Sector Graph */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-700 mb-4">Companies by Sector</h2>
            <div className="h-64">
              <GraphS companies={jobData} />
            </div>
          </div>
          {/* Category Graph */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-700 mb-4">Companies by Category</h2>
            <div className="w-80">
              <GraphC companies={jobData} />
            </div>
          </div>
        </div>
      </div>
      <center>
        <a href="/all-jobs" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 focus:outline-none ">
          All Jobs
        </a>
      </center>
    </div>
  );
}

export default Home;
