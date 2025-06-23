"use client";

import React from "react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import AnotherChart from "./AnotherChart";
export default function PanelChart() {
  return (
    <>
      <h2 className="text-2xl font-bold">پنل مدیریت</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow space-y-6 p-4">
          <LineChart />
          <AnotherChart />
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <PieChart />
        </div>
      </div>
    </>
  );
}
