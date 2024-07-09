// import React from "react";

import { ChangeEvent, useState } from "react";
import AdminSidebar from "../AdminSidebar";

const NewProduct = () => {
  const [name, setName] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [photo, setPhoto] = useState<string>();

  const ChangePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const render: FileReader = new FileReader();

    if (file) {
      render.readAsDataURL(file);
      render.onloadend = () => {
        if (typeof render.result === "string") {
          setPhoto(render.result);
        }
      };
    }
  };

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <div className="add_new_product">
        <article>
          <form>
            <h2>New Product</h2>
            <div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Price</label>
              <input
                type="number"
                placeholder="price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Stock</label>
              <input
                type="number"
                placeholder="stock"
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Photo</label>
              <input
                type="file"
                placeholder="Choose file"
                onChange={ChangePhoto}
              />
            </div>

            {photo && <img src={photo} alt="new Image" />}
            <button type="submit">Create</button>
          </form>
          {/* {console.log(name, price, stock)} */}
        </article>
      </div>
    </div>
  );
};

export default NewProduct;
