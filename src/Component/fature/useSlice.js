import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value:null,
  },
  reducers: {
    Signin: (state,action) => {
      state.value = action.payload
    },
    Signout: (state) => { // Changed the key to closeSendMessage
      state.value = null
    },

  
  },
});


export const {Signin,Signout} = userSlice.actions;

export const selectuser = (state) => state.user.value;


export default  userSlice.reducer; // Changed .reducers to .reducer
