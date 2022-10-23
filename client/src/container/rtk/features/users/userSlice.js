import {createSlice,createAsyncThunk} from  '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading:false,
  users:{},
  error:""
}

// Generate pending, fulfilled and rejected action types   
const fetchUsers =  createAsyncThunk('user/fetchUsers', async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users/1")
     return res.data;
}) 


const { reducer } = createSlice({
  name:"user",
  initialState,

  extraReducers:builder => {
    builder.addCase(fetchUsers.pending, state => {
       state.loading = true;
    })

    builder.addCase(fetchUsers.fulfilled, (state,action) => {
      state.loading = false ;
      state.users = action.payload;
      state.error = "";
    })

    builder.addCase(fetchUsers.rejected,(state,action) => {
      state.loading = false;
      // state.loading = [];
      state.error = action.error.message;
    })  
  }
})


export const userReducer =  reducer ;
export const userActions = fetchUsers ;
