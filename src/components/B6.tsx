// src/components/LanguageSwitcher.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleLanguage } from "../store/reducers/toggleLanguage";

const LanguageSwitcher = () => {
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>B6</h1>
      <p>
        Current Language: {state.changeLang === "en" ? "English" : "Vietnamese"}
      </p>
      <button onClick={() => dispatch(toggleLanguage())}>
        Switch to {state.changeLang === "en" ? "Vietnamese" : "English"}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
