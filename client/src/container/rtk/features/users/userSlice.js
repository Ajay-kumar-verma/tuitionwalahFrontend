const {createSlice,createAsyncThunk} = require('@reduxjs/toolkit');
const axios = require('axios');

const initialState = {
  loading:false,
  users:{},
  error:""
}



// Generate pending, fulfilled and rejected action types   
const fetchUsers =  createAsyncThunk('user/fetchUsers', async () => {
  const res = await axios.get("https://jsonplaceholders.typicode.com/users/1")
     return res.data;

}) 


const {reducer ,actions} = createSlice({
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
      // console.log("dfsf",action)
    })
    builder.addCase(fetchUsers.rejected,(state,action) => {
      state.loading = false;
      // state.loading = [];
      state.error = action.error.message;
    })  

  }
  
})

// console.log(userSlice)
// module.exports = userSlice.reducer;
// module.exports.fetchUsers = fetchUsers;
//  fetchUsers();
 
export const userReducer =  reducer ;
export const userActions = fetchUsers;