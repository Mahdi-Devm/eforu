"use client";

import React from "react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

export default function PanelChart() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">پنل مدیریت</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <LineChart />
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <PieChart />
        </div>
      </div>
    </>
  );
}
