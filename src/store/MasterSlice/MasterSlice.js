import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     auth: {
          isAuth: false,
          email: "",
          username: "",
          password: "",
          id: "",
     },
};

const masterSlice = createSlice({
     name: "MASTER_SLICE_STATE_MANAGEMENT",
     initialState,
     reducers: {
          // Update Authentication
          updateAuth(state, action) {
               console.log(action.payload);
               return {
                    ...state,
                    auth: {
                         ...state.auth,
                         id: action.payload?.id,
                         email: action.payload?.email,
                         username: action.payload?.username,
                         password: action?.payload?.email,
                    },
               };
          },
     },
});

export const masterSliceActions = masterSlice?.actions;
export default masterSlice;
