import api from '../../api/api'
const {createAsyncThunk,createSlice} = require('@reduxjs/toolkit');

// read only 
const initialState = {
   all:{},
   loading:false,
   message: '',
   error:'',
   user:{apiCall:false, data:{}},
  }
  
    const user = createAsyncThunk(
      'user',
      async (obj)=>{
      try {
       const {data} = await  api().get(`/main/user`,obj)
           return data; 
      } catch (error) {
        console.log("error",error);
        return error;   
      }
          }
 )


const {reducer } = createSlice({
  name:"main",
  initialState,
  extraReducers:{
    [user.pending]: state => {
      state.loading = true;
   },
   [user.fulfilled]:(state,{payload}) => {
     state.all = payload;
     state.loading = false ;
     state.message=payload?.message;
     state.error=payload?.error;
     state.user.data=payload;
     state.user.apiCall=false;
    },
   [user.rejected]:(state,{payload}) => {
     state.user =payload; 
     state.loading = false;
     state.error = payload?.error;
     state.user.data=payload;
     state.message ="request rejected ! ";
    },  
  
  } ,  

})

export const mainReducer =  reducer ;

export const mainActions = { user };
