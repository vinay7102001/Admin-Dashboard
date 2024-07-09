// import { ChangeEvent, useState } from "react";
import { useState } from "react";
import AdminSidebar from "../AdminSidebar";
import { OrderItemInfo, OrderItems } from "../../Type";
import { Link } from "react-router-dom";

const img1 =
  "data:image/jpeg;base64,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";

const OrderData: OrderItems[] = [
  {
    name: "hp laptop",
    photo: img1,
    price: 4000,
    quantity: 4,
    _id: "kjjffj",
  },
];

const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderItemInfo>({
    name: "person",
    address: "238 queen street near ABD ",
    city: "auko",
    country: "nazomia",
    state: "abdo",
    pinCode: 748334,
    status: "Processing",
    subtotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 4000 + 200 - 1200,
    orderItems: OrderData,
    _id: "jfjdkl",
  });

  const OrderItemCard = ({ name, photo, price, quantity, _id }: OrderItems) => {
    return (
      <div className="transction_order_card">
        <img src={photo} alt={name} />
        <Link to={`/product/${_id}`}>{name}</Link>
        <span>
          {price} X {quantity} = {price * quantity}
        </span>
      </div>
    );
  };

  const {
    name,
    address,
    city,
    state,
    country,
    pinCode,
    status,
    subtotal,
    discount,
    shippingCharges,
    tax,
    total,
  } = order;

  const ChangeStatus = () => {
    setOrder((old) => ({
      ...old,
      status: old.status == "Processing" ? "Shipped" : "Delivered",
    }));
  };

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <div className="add_new_product">
        <section style={{ padding: "1rem" }}>
          <h2>Order Item</h2>
          {order.orderItems.map((i) => (
            <OrderItemCard
              _id={i._id}
              name={i.name}
              photo={i.photo}
              price={i.price}
              quantity={i.quantity}
            />
          ))}
        </section>
        <article>
          <h2>Order Info</h2>
          <div className="transaction_order_info">
            <h5>User Info</h5>
            <p>Name: {name}</p>
            <p>
              Address: {address}, {city}, {pinCode}, {state}, {country}
            </p>

            <h5>Amount Info</h5>
            <p>Subtotal: {subtotal}</p>
            <p>Shipping Charges: {shippingCharges}</p>
            <p>Tax: {tax}</p>
            <p>Discount: {discount}</p>
            <p>Total: {total}</p>

            <h5>Status Info</h5>
            <p>
              Status{" "}
              <span
                className={
                  status == "Processing"
                    ? "red"
                    : status == "Shipped"
                    ? "green"
                    : "purple"
                }
              >
                {status}
              </span>
            </p>

            <button onClick={ChangeStatus}>Process Status</button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default TransactionManagement;
