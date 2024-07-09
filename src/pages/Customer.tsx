// import React from 'react'

import AdminSidebar from "../components/AdminSidebar";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { ReactElement, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

interface DataType {
  avtar: ReactElement;
  name: string;
  gender: string;
  email: string;
  role: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avtar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const img1 =
  "data:image/jpeg;base64,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";
const img2 =
  "data:image/png;base64,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";

const arr: DataType[] = [
  {
    avtar: <img src={img1} alt="male" />,
    name: "peter",
    gender: "male",
    email: "peter78237@gmail.com",
    role: "user",
    action: (
      <Link to="/admin/customer/peter">
        <MdDelete />
      </Link>
    ),
  },
  {
    avtar: <img src={img2} alt="female" />,
    name: "piter",
    gender: "female",
    email: "piter757@gmail.com",
    role: "user",
    action: (
      <Link to="/admin/customer/piter">
        <MdDelete />
      </Link>
    ),
  },
  {
    avtar: <img src={img1} alt="male" />,
    name: "peter",
    gender: "male",
    email: "peter78237@gmail.com",
    role: "user",
    action: (
      <Link to="/admin/customer/peter">
        <MdDelete />
      </Link>
    ),
  },
  {
    avtar: <img src={img2} alt="female" />,
    name: "piter",
    gender: "female",
    email: "piter757@gmail.com",
    role: "user",
    action: (
      <Link to="/admin/customer/piter">
        <MdDelete />
      </Link>
    ),
  },
  {
    avtar: <img src={img1} alt="male" />,
    name: "peter",
    gender: "male",
    email: "peter78237@gmail.com",
    role: "user",
    action: (
      <Link to="/admin/customer/peter">
        <MdDelete />
      </Link>
    ),
  },
  {
    avtar: <img src={img2} alt="female" />,
    name: "piter",
    gender: "female",
    email: "piter757@gmail.com",
    role: "user",
    action: (
      <Link to="/admin/customer/piter">
        <MdDelete />
      </Link>
    ),
  },
  {
    avtar: <img src={img1} alt="male" />,
    name: "peter",
    gender: "male",
    email: "peter78237@gmail.com",
    role: "user",
    action: (
      <Link to="/admin/customer/peter">
        <MdDelete />
      </Link>
    ),
  },
  {
    avtar: <img src={img2} alt="female" />,
    name: "piter",
    gender: "female",
    email: "piter757@gmail.com",
    role: "user",
    action: (
      <Link to="/admin/customer/piter">
        <MdDelete />
      </Link>
    ),
  },
  {
    avtar: <img src={img1} alt="male" />,
    name: "peter",
    gender: "male",
    email: "peter78237@gmail.com",
    role: "user",
    action: (
      <Link to="/admin/customer/peter">
        <MdDelete />
      </Link>
    ),
  },
  {
    avtar: <img src={img2} alt="female" />,
    name: "piter",
    gender: "female",
    email: "piter757@gmail.com",
    role: "user",
    action: (
      <Link to="/admin/customer/piter">
        <MdDelete />
      </Link>
    ),
  },
];

const Customer = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(columns, data, "Customer_table", "Customet", true),
    []
  );

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main>
        <div className="mainContainer">{Table()}</div>
      </main>
    </div>
  );
};

export default Customer;
