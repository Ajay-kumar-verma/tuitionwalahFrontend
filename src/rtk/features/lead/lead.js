import api from '../../api/api'
const {createAsyncThunk,createSlice} = require('@reduxjs/toolkit');

// read only 
const initialState = {
  client:{apiCall:false, data:{}},
  all:{},
  loading:false, 
  error:"",
  message:""
}

const add = createAsyncThunk(
    'lead',
    async (obj)=>{
      try {
        const {data} = await  api().post(`/lead/client`,obj)
          return data; 
       } catch (error) {
         console.log("error",error);
         return error;   
       }
    }
  )

  const list = createAsyncThunk(
    'lead',
    async ()=>{
      try {
        const {data} = await  api().get(`/lead/client`);
          return data; 
       } catch (error) {
         console.log("error",error);
         return error;   
       }
    }
  )

  
const {reducer } = createSlice({
  name:"lead",
  initialState,
    extraReducers:{
   [add.pending]: state => {
    state.loading = true; 
    },
    [add.fulfilled]:(state,{payload}) => {
    state.all =payload;
    state.loading = false ;
    state.message=payload?.message;
    state.error=payload?.error; 
    },
    [add.rejected]:(state,{payload}) => {
    state.all =payload; 
    state.loading = false;
    state.error = payload.error;
    state.message ="request rejected ! ";
   }, 
   [list.pending]: state => {
    state.loading = true; 
    },
   [list.fulfilled]:(state,{payload}) => {
    state.all =payload;
    state.client.data= payload;
    state.client.apiCall = true;
    state.loading = false ;
    state.message=payload?.message;
    state.error=payload?.error; 
    },
   [list.rejected]:(state,{payload}) => {
    state.all =payload; 
    state.loading = false;
    state.error = payload.error;
    state.message ="request rejected ! ";
   }, 
    } ,  
  
  })
  
  
  export const leadReducer =  reducer ;
  
  export const leadActions = {add,list};
  