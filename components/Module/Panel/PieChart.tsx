"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const data = {
  labels: [
    "کاربران فعال",
    "کاربران غیرفعال",
    "کاربران جدید",
    "کاربران حذف شده",
  ],
  datasets: [
    {
      label: "کاربران",
      data: [400, 300, 300, 200],
      backgroundColor: [
        "#033884",
        "rgba(54, 162, 235, 0.7)",
        "rgba(255, 206, 86, 0.7)",
        "rgba(75, 192, 192, 0.7)",
      ],
      borderColor: ["#011f4b", "#043a63", "#665c00", "#1f5f5f"],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "right" as const },
    title: { display: true, text: "وضعیت کاربران" },
  },
};

export default function PieChart() {
  return <Pie data={data} options={options} />;
}
