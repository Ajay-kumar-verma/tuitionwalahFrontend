import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import  axios from 'axios';

// import {Endpoint} from  '../../../Endpoint'
// console.log("End point ",Endpoint);

const initialState = {
  loading:false,
  error:"",
  login:false,
  token:"",
  apiCalled:false,
  other:{},
}


// Generate pending, fulfilled and rejected action types   
const login =  createAsyncThunk('user/login', async (...obj) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users")
   return res.data;
   
    // console.log("login api is callled :",obj[0]);
    //  return 'Api is called ...!';
    // const {apiCall} = obj[0];
    
}) 

const { reducer } = createSlice({
  name:"login",
  initialState,
  extraReducers:builder => {
    builder.addCase(login.pending, state => {
       state.loading = true;
    })
    builder.addCase(login.fulfilled, (state,action) => {
      state.loading = false ;
      state.token = action.payload;
      state.error = "";
      state.login=true;
      state.apiCalled=true; 
    })
    builder.addCase(login.rejected,(state,action) => {
        state.loading = false;
        state.error = action.error.message;
        state.apiCalled=true; 
    })  

  }
  
})

export const loginReducer =  reducer ;
export const loginActions = login;