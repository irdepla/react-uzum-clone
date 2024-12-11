import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import uz from "../src/localization/uz.json"
import ru from "../src/localization/ru.json"



export const i18nInstance = i18n.use(initReactI18next).init({
    resources: {
      uz: {
        translation: uz,
      },
      ru: {
        translation: ru,
      },
    },
    lng: "uz", 
    fallbackLng: "uz",

    interpolation: {
      escapeValue: false 
    }
  });
