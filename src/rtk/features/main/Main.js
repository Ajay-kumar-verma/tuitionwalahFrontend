import api from '../../api/api'
const {createAsyncThunk,createSlice} = require('@reduxjs/toolkit');

// read only 
const initialState = {
   all:{},
    user:{loading:false,apiCall:false, data:{}},
    permission:{loading:false,apiCall:false, data:{}},
  }
  
    const user = createAsyncThunk(
      'user',
      async (obj)=>{
      try {
       const {data} = await  api().get(`/main/users`,obj)
           return data; 
      } catch (error) {
        console.log("error",error);
        return error;   
      }
          }
 )

  
 const permission = createAsyncThunk(
  'permission',
  async (obj)=>{
    // console.log({obj})
    try {
   const {data} = await  api().post(`/main/permission`,obj)
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
      state.user.loading = true;
   },
   [user.fulfilled]:(state,{payload}) => {
     state.all = payload;
     state.user.loading = false ;
     state.message=payload?.message;
     state.error=payload?.error;
     state.user.data=payload;
     state.user.apiCall=false;
    },
   [user.rejected]:(state,{payload}) => {
     state.user =payload; 
     state.user.loading = false;
     state.error = payload?.error;
     state.user.data=payload;
     state.message ="request rejected ! ";
    },  
  
   [permission.pending]: state => {
      state.permission.loading = true;
   },
   [permission.fulfilled]:(state,{payload}) => {
     state.all = payload;
     state.permission.loading = false ;
     state.permission.data=payload;
     state.permission.apiCall=false;
    },
   [user.rejected]:(state,{payload}) => {
     state.permission =payload; 
     state.permission.loading = false;
     state.error = payload?.error;
     state.permission.data=payload;
     state.message ="request rejected ! ";
    },  
    
  } ,  

})

export const mainReducer =  reducer ;

export const mainActions = { user ,permission};
