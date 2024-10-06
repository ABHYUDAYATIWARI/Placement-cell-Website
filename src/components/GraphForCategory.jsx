import React from "react";
import { Pie } from "react-chartjs-2";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryPieChart = ({ companies }) => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Function to get company count per category
  const getCategoryData = () => {
    const categoryCount = {};

    // Count the number of companies in each category
    companies.forEach((company) => {
      const category = company.category[0]; // Only one category per company
      if (categoryCount[category]) {
        categoryCount[category] += 1;
      } else {
        categoryCount[category] = 1;
      }
    });

    return categoryCount;
  };

  const categoryData = getCategoryData();

  // Preparing data for the chart
  const data = {
    labels: Object.keys(categoryData), // The categories
    datasets: [
      {
        label: "Number of Companies",
        data: Object.values(categoryData), // Number of companies per category
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // Colors for each slice
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(201, 203, 207, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(201, 203, 207, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart.js options with onClick event
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Number of Companies by Category",
      },
    },
    onClick: (e, activeElements) => {
      // Check if a slice is clicked
      if (activeElements.length > 0) {
        const clickedElementIndex = activeElements[0].index;
        const clickedCategory = data.labels[clickedElementIndex]; // Get the clicked category

        // Navigate to AllJobs page and pass the clicked category
        navigate("/category-jobs", { state: { selectedCategory: clickedCategory } });
      }
    },
  };

  return <Pie data={data} options={options} />;
};

export default CategoryPieChart;
