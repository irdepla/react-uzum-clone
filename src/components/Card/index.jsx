import React, { useEffect, useState } from "react";
import { meta } from "@eslint/js";
import StarIcon from "../../assets/icons/star-icon.svg"
const API_BASE_URL = meta;
import { apiClient } from "../../API/axios";
import { NavLink } from "react-router";

const Card = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("")

  async function getProducts() {
    try {
      const res = await apiClient.get("/products?search=" + search);
      setProducts(res.data.data);
      console.log(res.data.data);
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, [search]);

  function handleSearch(e){
    setSearch(e.target.value)
  }

  return (
    <section className="popular__cards">
      <div className="container">
        <div className="popular__cards__wrapper flex flex-col gap-7">
            <div>
                <h1 className="font-bold text-2xl">Mashhur</h1>
                <input onChange={handleSearch} className="border border-black p-4" type="text" placeholder="Search something here" />
            </div>
            <div className=" grid grid-cols-4 gap-3">
            {products.map((product) => (
                <div className="products__wrapper flex flex-col gap-1">
                    <img className="rounded-[8px]" src={product.image} alt="products-images" />
                    <h2 className="product__name">
                        <NavLink to={"product-details/" + product.id}>
                            <span>{product.name}</span>
                        </NavLink>
                        </h2>
                    <span className="flex gap-1">
                        <img src={StarIcon} alt="" />
                        <span>{product.rating}</span>
                    </span>
                    <p className=" text-[#1F2026] font-bold">${product.price}</p>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
