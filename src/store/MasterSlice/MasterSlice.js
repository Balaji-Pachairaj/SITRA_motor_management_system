import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     auth: {
          isAuth: false,
          obj: {},
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
                         obj: action.payload,
                    },
               };
          },
     },
});

export const masterSliceActions = masterSlice?.actions;
export default masterSlice;
