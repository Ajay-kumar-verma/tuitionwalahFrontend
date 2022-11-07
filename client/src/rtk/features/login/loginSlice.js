const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
    login:false,
    token:""
  }

const {reducer ,actions} = createSlice({
  name:"login",
  initialState,
  reducers:{
    login:(state,action)=>{
    //  console.log("login function called",state,action)
      state.login=action?.payload?.loginStatus;
      state.token=action?.payload?.token;
   }
  }
  
})

 
export const loginReducer =  reducer ;
export const loginActions = actions;