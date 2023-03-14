
import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Income PayMyFood",
        },
    },
};



function Chart(props) {
    const labels = props.dataChart.date; // masukin tanggal 
    const data = {
        labels,
        datasets: [
            {
                label: "Income",
                data: props.dataChart.total, // masukin total income per tanggal
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            }
        ],
    };
    return <Line options={options} data={data} />;
}

export default Chart;
