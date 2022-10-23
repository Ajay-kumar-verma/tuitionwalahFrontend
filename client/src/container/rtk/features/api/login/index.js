import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import  axios from 'axios';

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
   
    // console.log("login api is callled :",obj[0]);

    //  return 'Api is called ...!';
    const {apiCall} = obj[0];
    if(apiCall){
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
     return res.data;
    }else{
        return "Api is called "
    }

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
      // console.log("dfsf",action)
    })
    builder.addCase(login.rejected,(state,action) => {
        state.loading = false;
      state.error = action.error.message;
    })  

  }
  
})

export const loginReducer =  reducer ;
export const loginActions = login;