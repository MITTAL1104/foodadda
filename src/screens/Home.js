import React, { useState, useEffect } from "react";
// import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Carousel from "../components/Carousel";

const Home = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:8000/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      setFoodItem(response[0]);
      setFoodCat(response[1]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Carousel />
      </div>
      <div className="container">
        {Array.isArray(foodCat) && foodCat.length > 0 ? (
          foodCat.map((data) => (
            <div className="row mb-3" key={data._id}>
              <div className="fs-1 m-3 text-center">{data.CategoryName}</div>
              <hr />
              {foodItem ? (
                foodItem
                  .filter((item) => item.CategoryName === data.CategoryName)
                  .map((filterItems) => (
                    <div
                      key={filterItems._id}
                      className="col-12 col-md-6 col-lg-3"
                    >
                      <Cards
                        foodName={filterItems.name}
                        options={filterItems.options[0]}
                        imgSrc={filterItems.img}
                        desc={filterItems.description}
                      />
                    </div>
                  ))
              ) : (
                <div>No such data found</div>
              )}
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
