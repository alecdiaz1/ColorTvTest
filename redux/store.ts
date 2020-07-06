import {configureStore} from "@reduxjs/toolkit";
import appReducer from "./modules/reducer";

const store = configureStore({
    reducer: appReducer
})

export { store };
