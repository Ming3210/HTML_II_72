import { configureStore } from "@reduxjs/toolkit";

import countReducer from "./reducers/countReducer";
import listNumberReducer from "./reducers/listNumber"
import changeUI from "./reducers/darkMode";
import displayReducer from "./reducers/displayReducer";
import resizeReducer from "./reducers/resizeReducer";
import changeLang from "./reducers/toggleLanguage";
import favoriteReducer from "./reducers/favoriteReducer";

const store = configureStore({
  reducer: {
    countReducer:countReducer,
    listNumber:listNumberReducer,
    changeUI:changeUI,
    displayReducer,
    resizeReducer,
    changeLang,
    favoriteReducer
  },
});

export default store;