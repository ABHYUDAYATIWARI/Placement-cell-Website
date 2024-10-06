import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const GraphForCompany = (props) => {
    //   const recruitmentData = {
    //     yearWiseRecruitmentTrends: [
    //       {
    //         year: 2021,
    //         totalHires: 100,
    //         hiredBranches: { CSE: 50, IT: 30, ECE: 20 },
    //         averageCTC: 600000,
    //         highestCTC: 1200000,
    //         lowestCTC: 300000
    //       },
    //       {
    //         year: 2022,
    //         totalHires: 120,
    //         hiredBranches: { CSE: 60, IT: 40, ECE: 20 },
    //         averageCTC: 700000,
    //         highestCTC: 1500000,
    //         lowestCTC: 350000
    //       },
    //       {
    //         year: 2023,
    //         totalHires: 150,
    //         hiredBranches: { CSE: 70, IT: 50, ECE: 30 },
    //         averageCTC: 800000,
    //         highestCTC: 1800000,
    //         lowestCTC: 400000
    //       },
    //       {
    //         year: 2024,
    //         totalHires: 180,
    //         hiredBranches: { CSE: 90, IT: 60, ECE: 30 },
    //         averageCTC: 900000,
    //         highestCTC: 2000000,
    //         lowestCTC: 450000
    //       }
    //     ]
    //   };
    const recruitmentData = props.recruitmentData;
    console.log(recruitmentData);

    const years = recruitmentData.yearWiseRecruitmentTrends.map(item => item.year);
    const totalHires = recruitmentData.yearWiseRecruitmentTrends.map(item => item.totalHires);
    const averageCTC = recruitmentData.yearWiseRecruitmentTrends.map(item => item.averageCTC / 100000); // Convert to lakhs
    const highestCTC = recruitmentData.yearWiseRecruitmentTrends.map(item => item.highestCTC / 100000); // Convert to lakhs
    const lowestCTC = recruitmentData.yearWiseRecruitmentTrends.map(item => item.lowestCTC / 100000); // Convert to lakhs

    // Data for total hires
    const hiresData = {
        labels: years,
        datasets: [
            {
                label: 'Total Hires',
                data: totalHires,
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true,
                tension: 0.4
            }
        ]
    };

    // Data for CTC trends
    const ctcData = {
        labels: years,
        datasets: [
            {
                label: 'Average CTC (Lakhs)',
                data: averageCTC,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Highest CTC (Lakhs)',
                data: highestCTC,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Lowest CTC (Lakhs)',
                data: lowestCTC,
                borderColor: 'rgba(255, 206, 86, 1)',
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                fill: true,
                tension: 0.4
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Recruitment Trends'
            }
        }
    };

    return (
        <div className="max-w-4xl mx-auto ">
            <h2 className="text-2xl font-bold text-center mb-4">Yearly Recruitment Trends</h2>
            <div className='w-full flex'>
                {/* Total Hires Graph */}
                <div className="mb-8 w-3/4">
                    <h3 className="text-xl font-semibold text-center mb-4">Total Hires</h3>
                    <Line data={hiresData} options={{ ...options, title: { text: 'Total Hires Over Years' } }} />
                </div>

                {/* CTC Trends Graph */}
                <div className='w-3/4'>
                    <h3 className="text-xl font-semibold text-center mb-4">CTC Trends (Lakhs)</h3>
                    <Line data={ctcData} options={{ ...options, title: { text: 'CTC Trends Over Years' } }} />
                </div>
            </div>
        </div>
    );
};

export default GraphForCompany;