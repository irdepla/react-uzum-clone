import React from "react";
import LocationIcon from "../../assets/icons/Location-icon.svg";
import UzbFlagIcon from "../../assets/icons/uzb-flag-icon.svg";
import { NavLink } from "react-router";
import Home from "../../pages/Home";
import { i18nInstance } from "../../i18";
import { useTranslation } from "react-i18next";

const TopHeader = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="top-header bg-[#F2F4F7]">
      <div className="container">
        <div className="top-header__wrapper flex justify-between items-center py-[6px]">
          <div className="top-header__locations flex gap-6">
            <span className="flex gap-[6px]">
              <img src={LocationIcon} alt="" />
              <NavLink>
                <span className="underline">{t("Toshkent")}</span>
              </NavLink>
            </span>
            <span>
              <NavLink>
                <span>Topshirish punktlari</span>
              </NavLink>
            </span>
          </div>
          <div className="flex gap-4">
            <NavLink>
              <span className=" text-[#7f4dff]">Sotuvchi bo‘lish</span>
            </NavLink>
            <NavLink>
              <span className=" text-[#7f4dff]">
                Topshirish punktini ochish
              </span>
            </NavLink>
            <NavLink>
              <span> Savol-javob</span>
            </NavLink>
            <NavLink>
              <span> Buyurtmalarim </span>
            </NavLink>
                <img src={UzbFlagIcon} alt="" />
                    <button onClick={() => i18n.changeLanguage("uz")} value="O'zbekcha">
                    O'zbekcha
                    </button>
                    <button onClick={() => i18n.changeLanguage("ru")} value="O'zbekcha">
                    Русский
                    </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
