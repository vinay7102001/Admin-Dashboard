// import React from 'react'

import AdminSidebar from "../../components/AdminSidebar";
import { DoughtChart, PieCharts } from "../../components/Charts";
import { catogories } from "../../assets/data.json";

const PieChart = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chartCOntainer">
        <h1>Pie & Doughnut Charts</h1>
        <section>
          <div className="pie_doughnut_chart">
            <PieCharts
              data_1={[12, 9, 13]}
              labels={["Processing", "Shipped", "Delivered"]}
              backgoundcolor={[
                "hsl(110,80%,80%)",
                "hsl(110,80%,50%)",
                "hsl(110,40%,50%)",
              ]}
              offset={[0, 0, 20]}
            />
          </div>
          <h3>ORDER FULFILLMENT RATIO</h3>
        </section>

        <section>
          <div className="pie_doughnut_chart">
            <DoughtChart
              data_1={catogories.map((i) => i.value)}
              labels={catogories.map((i) => i.heading)}
              backgoundcolor={catogories.map(
                (i) => `hsl(${i.value * 4},${i.value}%,50%)`
              )}
              legends={false}
              cutout={60}
              offset={[0, 0, 0, 30]}
            />
          </div>
          <h3>PRODUCT CATEGORIES RATIO</h3>
        </section>

        <section>
          <div className="pie_doughnut_chart">
            <DoughtChart
              data_1={[40, 20]}
              labels={["In Stock", "Out Of Stock"]}
              backgoundcolor={[`hsl(269,80%,40%)`, `rgb(53,162,255)`]}
              legends={false}
              cutout={80}
              offset={[0, 30]}
            />
          </div>
          <h3>STOCK AVAILABILITY</h3>
        </section>

        <section>
          <div className="pie_doughnut_chart">
            <DoughtChart
              data_1={[32, 18, 5, 20, 25]}
              labels={[
                "Marketing Cost",
                "Discount",
                "Burnt",
                "Production Cost",
                "Net Margin",
              ]}
              backgoundcolor={[
                `hsl(110,80%,40%)`,
                `hsl(19,80%,40%)`,
                `hsl(69,80%,40%)`,
                `hsl(300,80%,40%)`,
                "rgb(53,162,255)",
              ]}
              legends={false}
              cutout={60}
              offset={[0, 0, 0, 0, 30]}
              border={4}
            />
          </div>
          <h3>STOCK AVAILABILITY</h3>
        </section>

        <section>
          <div className="pie_doughnut_chart">
            <PieCharts
              data_1={[30, 250, 70]}
              labels={[
                "Teenager (Below 20)",
                "Adult (20-40)",
                "Older (above 40)",
              ]}
              backgoundcolor={[
                "hsl(10,80%,80%)",
                "hsl(10,80%,50%)",
                "hsl(10,40%,50%)",
              ]}
              offset={[0, 0, 20]}
            />
          </div>
          <h3>USER AGE GROUP</h3>
        </section>

        <section>
          <div className="pie_doughnut_chart">
            <DoughtChart
              data_1={[40, 250]}
              labels={["Admin", "Customers"]}
              backgoundcolor={[`hsl(335,100%,38%)`, `hsl(44,98%,50%)`]}
              // legends={false}
              cutout={"60%"}
              offset={[0, 30]}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default PieChart;
