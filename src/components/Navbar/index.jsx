import React from 'react';
import { NavLink } from 'react-router';
import UzumLogo from "../../assets/icons/uzum-logo.svg"
import CatalogIcon from "../../assets/icons/catalog-icon.svg"

const Navbar = () => {
    return (
        <>
        <nav className="nav mt-[17px] mb-[12px]">
      <div className="container">
        <div
          className="nav__wrapper flex flex-col justify-between items-center gap-[10px]"
        >
          <div className="flex items-center">
            <div className="uzum-logo">
              <img src={UzumLogo} alt="uzum-logo" />
            </div>
            <button
              className="catalog__btn flex gap-2 items-center ml-8 px-[18.2px] py-2 border bg-[#e5e5ff] hover:bg-[#ceccff] rounded-[8px]"
            >
              <img src={CatalogIcon} alt="catalog" />
              <span className="text-[#7000FF]">Katalog</span>
            </button>
            <div className="flex ml-[7px] border">
              <input
                type="text"
                placeholder="Mahsulotlar va turkumlar izlash"
                className="pt-[10px] pb-[12px] pl-[16px] outline-none"
              />
              <button className="px-[27px] py-2 bg-[#F2F4F7] ml-[226px]">
                <img src="./icons/search-btn.svg" alt="" />
              </button>
            </div>
            <button
              className="login__btn flex items-center gap-3 ml-6 px-2 py-2 hover:bg-[#dee0e5] hover:rounded"
            >
              <img src="./icons/person-img.svg" alt="person-img" />
              <span>Kirish</span>
            </button>
            <button
              className="saved__btn flex items-center gap-3 ml-4 px-2 py-2 hover:bg-[#dee0e5] hover:rounded"
            >
              <img src="./icons/heart-img.svg" alt="person-img" />
              <span>Saralangan</span>
            </button>
            <button
              className="shopping__btn flex items-center gap-3 ml-4 px-2 py-2 hover:bg-[#dee0e5] hover:rounded"
            >
              <img src="./icons/basket-icon.svg" alt="person-img" />
              <span>Savat</span>
            </button>
          </div>
          <div className="navigation-links text-[12px] flex gap-[13px]">
            <a
              href="#"
              className="flex items-center gap-1 font-semibold text-[#1f2026]"
            >
              <img
                src="./images/sales-date.png"
                alt="sale-img"
                className="w-6 h-6"
              />
              <span>11.11</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-1 font-semibold text-[#1f2026]"
            >
              <img
                src="https://static.uzum.uz/fast_categories/%20vyg.png"
                alt="sale-img"
                className="w-6 h-6"
              />
              <span>Har kuni foyda</span>
            </a>
            <a href="#" className="nav-links">
              <span>Elektronika</span>
            </a>
            <a href="#" className="nav-links">
              <span>Maishiy texnika</span>
            </a>
            <a href="#" className="nav-links">
              <span>Kiyim</span>
            </a>
            <a href="#" className="nav-links">
              <span>Poyabzallar</span>
            </a>
            <a href="#" className="nav-links">
              <span>Aksessuarlar</span>
            </a>
            <a href="#" className="nav-links">
              <span>Goʻzallik va parvarish</span>
            </a>
            <a href="#" className="nav-links">
              <span>Salomatlik</span>
            </a>
            <a href="#" className="nav-links">
              <span>Uy-roʻzgʻor buyumlari</span>
            </a>
            <select
              name="example"
              id="example"
              className="text-[#1f2026] opacity-[0.87] hover:opacity-[1]"
            >
              <option  className="outline-none" value="">
                Yana
              </option>
            </select>
          </div>
        </div>
      </div>
    </nav>
        </>
    );
}

export default Navbar;
