// import React from 'react'

import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../components/AdminSidebar";
import { FaRegBell } from "react-icons/fa";
import profile from "../assets/profile.jpg";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { BiMaleFemale } from "react-icons/bi";
import data from "../assets/data.json";
import { BarCharst, DoughtChart } from "../components/Charts";
import Table from "../components/DashboardTable";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users docs" />
          <FaRegBell />
          <img src={profile} alt="profile image" />
        </div>
        <section>
          <DataPalet
            text="Revenue"
            amount="700000"
            percentage={40}
            color="red"
            value={true}
          />
          <DataPalet
            text="Revenue"
            amount="8000"
            percentage={-40}
            color="yellow"
            value={true}
          />
          <DataPalet
            text="Revenue"
            amount="40000"
            percentage={-70}
            color="pink"
            value={true}
          />
          <DataPalet
            text="Revenue"
            amount="20000"
            percentage={30}
            color="green"
            value={true}
          />
        </section>
        <div className="revenue_inventory_section">
          <div className="revenue_chart">
            <h2>REVENUE & TRANSACTION</h2>
            <BarCharst
              data_1={[300, 144, 433, 655, 237, 245, 755]}
              data_2={[200, 444, 343, 556, 778, 455, 990]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgb(0,115,255)"
              bgColor_2="rgba(53,162,235,0.8)"
            />
          </div>

          <div className="inventory">
            <h2>INVENTORY</h2>
            {data.catogories.map((i) => {
              return (
                <InventoryBar
                  key={i.heading}
                  heading={i.heading}
                  value={i.value}
                  color={`hsl(${i.value * 5},${i.value}%,50%)`}
                />
              );
            })}
          </div>
        </div>
        <div className="pie-table">
          <div className="pie">
            <h2>Gender Ratio</h2>
            <div>
              <DoughtChart
                data_1={[12, 18]}
                labels={["male", "female"]}
                backgoundcolor={["rgb(200,0,0)", "rgb(0,0,200)"]}
              />
              <BiMaleFemale />
            </div>
          </div>
          <div className="table_data">
            <Table data={data.transcation} />
          </div>
        </div>
      </main>
    </div>
  );
};

interface dataformet {
  text: string;
  amount: string;
  percentage: number;
  color: string;
  value?: boolean;
}

const DataPalet = ({ text, amount, percentage, color, value }: dataformet) => {
  let deg = Math.abs(percentage) * 3.6;
  return (
    <article>
      <div className="wedgetdata">
        <p>{text}</p>
        <h2>{value ? `$${amount}` : `${amount}`}</h2>
        {percentage > 0 ? (
          <span className="green">
            <FaArrowTrendUp />+{percentage}%
          </span>
        ) : (
          <span className="red">
            <FaArrowTrendDown /> -{percentage}%
          </span>
        )}
      </div>
      <div
        className="circle"
        style={{
          background: `conic-gradient(${color} ${deg}deg, white ${deg}deg)`,
        }}
      >
        <span style={{ color }}>{percentage}%</span>
      </div>
    </article>
  );
};

interface InventoryBarStructure {
  heading: string;
  value: number;
  color: string;
}

const InventoryBar = ({ heading, value, color }: InventoryBarStructure) => {
  return (
    <div>
      <span>{heading}</span>
      <div className="inv_bar">
        <div
          style={{
            backgroundColor: color,
            width: `${value}%`,
            height: "0.5rem",
          }}
        ></div>
      </div>
      <p>{value}%</p>
    </div>
  );
};

export default Dashboard;
