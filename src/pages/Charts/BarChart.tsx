// import React from 'react'

import AdminSidebar from "../../components/AdminSidebar";
import { BarCharst } from "../../components/Charts";

const BarChart = () => {
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
        <h1>Bar Charts</h1>
        <section>
          <div className="bar_chart">
            <BarCharst
              data_1={[100, 200, 400, 140, 800, 645, 900]}
              data_2={[120, 50, 300, 180, 100, 800, 200]}
              title_1="Products"
              title_2="Customers"
              bgColor_1={"hsl(220,50%,50%"}
              bgColor_2={"hsl(360,90%,90%"}
            />
          </div>
          <h3>TOP SELLING PRODUCTS & TOP CUSTOMERS</h3>
        </section>

        <section>
          <div className="bar_chart">
            <BarCharst
              horizontal={true}
              data_1={[
                600, 700, 400, 640, 800, 905, 1200, 1252, 890, 909, 890, 200,
              ]}
              data_2={[]}
              title_1="Orders"
              title_2=""
              bgColor_1={"hsl(180,40%,50%"}
              bgColor_2=""
              labels={months}
            />
          </div>
          <h3>TOP SELLING PRODUCTS & TOP CUSTOMERS</h3>
        </section>
      </main>
    </div>
  );
};

export default BarChart;
