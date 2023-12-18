import React, { useState } from "react";
import useCartContext from "../CartContext";
import foodData from "./dummyData";

const Menu = () => {
  const { addToCart } = useCartContext();

  const [foodItems, setFoodItems] = useState(foodData);

  return (
    <div>
      <header class="bg-warning text-white">
        <div className="container py-1" styles="perspective:500">
          <h1 className="fw-bold display-3 text-center page-title">
            Saute Grill Offers
          </h1>
          <h3 className="text-center sub-title">Molto Sapotitio!!</h3>

          {/* <div class="input-group mt-3 w-75 mx-auto my-input">

    <!-- input group is used to add multiple items to input like icon without caring for alignment margin etc -->

  <input type="text" className="form-control"/>
  <button className="btn btn-primary"> <i className="fa-solid fa-magnifying-glass"></i> </button>

  </div> */}

          {/* <!-- form-control for styling of input mx-auto for alignment along x axis --> */}
        </div>
      </header>

      <section className="container">
        <div className="row mt-5">
          {foodItems.map((food) => (
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  className="card-img-top my-img"
                  src={food.image}
                  alt="Camera"
                />
                <div className="card-body">
                  <p class="fw-bold h4 text-muted">{food.title}</p>
                  {/* <h3>E06 R10</h3> */}
                  <p>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star-half-stroke text-warning"></i>{" "}
                    {food.rating} Stars form {food.review}+ Reviews
                  </p>
                  <h2>₹{food.price}</h2>
                </div>

                <div className="card-footer">
                  <button className="btn btn-warning">
                    {" "}
                    <i class="fa-solid fa-cart-shopping"></i> Order Now{" "}
                  </button>
                  <button
                    className="mx-3 btn btn-outline-warning"
                    onClick={() => {
                      addToCart(food);
                    }}
                  >
                    {" "}
                    <i class="fa-solid fa-bolt"></i> Add to Basket{" "}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;
