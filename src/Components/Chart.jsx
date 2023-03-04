
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

const labels = ["1","2","3","4"];

export const data = {
    labels,
    datasets: [
        {
            label: "Income",
            data: [100,200,300,400],
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        }
    ],
};

function Chart() {
    return <Line options={options} data={data} />;
}

export default Chart;
