import React from "react";
import { NavLink } from "react-router";
import GooglePlayIcon from "../../assets/icons/google-play-icon.svg"
import Instagram from "../../assets/icons/instagram-logo.svg"

const Footer = () => {
  return (
    <footer className="footer mt-[100px] bg-[#F2F4F7]">
      <div className="container">
        <div className="footer__wrapper flex justify-between p-6">
          <div>
            <p className="font-bold">Biz haqimizda</p>
            <ul className="flex flex-col mt-2">
              <li>
                <NavLink>
                  <span className="text-[#8b8e99]">Topshirish punktlari</span>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <span className="text-[#8b8e99]">Vakansiyalar</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Foydalanuvchilarga</p>
            <ul className="flex flex-col mt-2">
              <li>
                <NavLink>
                  <span className="text-[#8b8e99]">Biz bilan bog'lanish</span>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <span className="text-[#8b8e99]">Savol-Javob</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Tadbirkorlarga</p>
            <ul className="flex flex-col mt-2">
              <li>
                <NavLink>
                  <span className="text-[#8b8e99]">Uzumda soting</span>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <span className="text-[#8b8e99]">
                    Sotuvchi kabinetiga kirish
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <span className="text-[#8b8e99]">
                    Topshirish punktini ochish
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-bold">Ilovani yuklab olish</p>
            <div className="flex gap-2">
                <span className="flex gap-1">
                    <img src="" alt="" />
                    <span>AppStore</span>
                </span>
                <span className="flex gap-1">
                    <img src={GooglePlayIcon} alt="" />
                    <span>Google Play</span>
                </span>
            </div>
            <p className="mt-3">Uzum ijtimoiy tarmoqlarda</p>
            <div className="mt-2 flex gap-[5px]">
                <img src={Instagram} alt="" />
                <img src={Instagram} alt="" />
                <img src={Instagram} alt="" />
                <img src={Instagram} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
