import React from "react";
import { Bar } from "react-chartjs-2";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SectorBarChart = ({ companies }) => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Function to get company count per sector
  const getSectorData = () => {
    const sectorCount = {};

    // Count the number of companies in each sector
    companies.forEach((company) => {
      company.sector.forEach((sector) => {
        if (sectorCount[sector]) {
          sectorCount[sector] += 1;
        } else {
          sectorCount[sector] = 1;
        }
      });
    });

    return sectorCount;
  };

  const sectorData = getSectorData();

  // Preparing data for the chart
  const data = {
    labels: Object.keys(sectorData), // The sectors
    datasets: [
      {
        label: "Companies",
        data: Object.values(sectorData), // Number of companies per sector
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Chart.js options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Number of Companies by Sector",
      },
    },
    onClick: (e, activeElements) => {
      // Check if a bar is clicked
      if (activeElements.length > 0) {
        const clickedElementIndex = activeElements[0].index;
        const clickedSector = data.labels[clickedElementIndex]; // Get the clicked sector

        // Navigate to AllJobs page and pass the clicked sector
        navigate("/sector-jobs", { state: { selectedSector: clickedSector } });
      }
    },
  };

  return <Bar data={data} options={options} />;
};

export default SectorBarChart;
