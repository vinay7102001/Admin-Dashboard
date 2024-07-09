// import React from 'react'

import AdminSidebar from "../../components/AdminSidebar";
import { LineCharts } from "../../components/Charts";

const LineChart = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chartCOntainer">
        <h1>Line Charts</h1>
        <section>
          <div className="bar_chart">
            <LineCharts
              data_1={[
                200, 444, 444, 566, 778, 455, 990, 1444, 256, 447, 1000, 1200,
              ]}
              backgoundcolor="rgba(53,162,255,0.5)"
              bordercolor="rgb(53,162,255)"
              label="Users"
              labels={months}
            />
          </div>
          <h3>ACTIVE USERS</h3>
        </section>

        <section>
          <div className="bar_chart">
            <LineCharts
              data_1={[40, 60, 244, 100, 143, 120, 41, 47, 50, 56, 32]}
              backgoundcolor={`hsl(269,80%,40%,0.4)`}
              bordercolor={`hsl(269,80%,40%)`}
              label="Products"
              labels={months}
            />
          </div>
          <h3>TOTAL PRODUCTS (SKU)</h3>
        </section>

        <section>
          <div className="bar_chart">
            <LineCharts
              data_1={[
                24000, 14400, 24100, 34300, 90000, 20000, 25600, 44700, 99000,
                144400, 100000, 120000,
              ]}
              backgoundcolor={`hsl(129,80%,40%,0.4)`}
              bordercolor={`hsl(129,80%,40%)`}
              label="Revenue"
              labels={months}
            />
          </div>
          <h3>TOTAL REVENUE</h3>
        </section>

        <section>
          <div className="bar_chart">
            <LineCharts
              data_1={[
                9000, 12000, 12000, 9000, 1000, 5000, 4000, 1200, 1000, 1500,
                2000, 5000,
              ]}
              backgoundcolor={`hsl(29,80%,40%,0.4)`}
              bordercolor={`hsl(29,80%,40%)`}
              label="Discount"
              labels={months}
            />
          </div>
          <h3>DISCOUNT ALLOTTED</h3>
        </section>
      </main>
    </div>
  );
};

export default LineChart;
