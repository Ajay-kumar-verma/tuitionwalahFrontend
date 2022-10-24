import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import  axios from 'axios';

// import {Endpoint} from  '../../../Endpoint'
// console.log("End point ",Endpoint);

const initialState = {
  loading:false,
  token:"",
  apiCalled:false,
  signup:false,
  message:{} ,
  error:"",
  other:{},
}



const signup =  createAsyncThunk('user/signup', async (...obj) => {
    const data = obj[0];
    console.log("data sent ..!",data);
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/5")
    return res.data;
   
    // console.log("login api is callled :",obj[0]);
    //  return 'Api is called ...!';
    
}) 

const { reducer } = createSlice({
  name:"signup",
  initialState,
  extraReducers:builder => {
    builder.addCase(signup.pending, state => {
       state.loading = true;
    })
    builder.addCase(signup.fulfilled, (state,action) => {
      state.loading = false ;
      state.token = action.payload;
      state.error = "";
      state.apiCalled=true; 
    })
    builder.addCase(signup.rejected,(state,action) => {
        state.loading = false;
        state.error = action.error.message;
        state.apiCalled=true; 
    })  

  }
  
})

export const signupReducer =  reducer ;
export const signupActions = signup;