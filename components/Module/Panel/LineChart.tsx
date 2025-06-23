"use client";

import React, { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { ChartOptions, ChartData } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function FancyLineChart() {
  const chartRef = useRef<ChartJS<"line"> | null>(null);

  const gradientBackground = (ctx: CanvasRenderingContext2D) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(3, 56, 132, 0.5)");
    gradient.addColorStop(1, "rgba(3, 56, 132, 0.05)");
    return gradient;
  };

  const data: ChartData<"line"> = {
    labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"],
    datasets: [
      {
        label: "تعداد کاربران",
        data: [400, 300, 500, 200, 278, 189],
        borderColor: "#033884",
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx } = chart;
          return gradientBackground(ctx);
        },
        fill: true,
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: "#033884",
        pointHoverRadius: 8,
        pointBorderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "روند کاربران در ۶ ماه گذشته",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    animation: {
      duration: 1500,
      easing: "easeOutQuart",
    },
  };

  return <Line ref={chartRef} data={data} options={options} />;
}
