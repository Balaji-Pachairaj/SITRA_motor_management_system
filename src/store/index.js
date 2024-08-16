import { configureStore } from "@reduxjs/toolkit";
import masterSlice from "./MasterSlice/MasterSlice";

const store = configureStore({
     reducer: {
          master: masterSlice?.reducer,
     },
});

export default store;
