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
    'add',
    async (obj)=>{
      try {
        const {data} = await  api().post(`/agent/client`,obj)
          return data; 
       } catch (error) {
         console.log("error",error);
         return error;   
       }
    }
  )

  const clients = createAsyncThunk(
    'clients',
    async ()=>{
      try {
        const {data} = await  api().get(`/agent/client`)
          return data; 
       } catch (error) {
         console.log("error",error);
         return error;   
       }
    }
  )
  
const {reducer } = createSlice({
  name:"agent",
  initialState,
    extraReducers:{
   
   [add.pending]: state => {
    state.loading = true; 
    },
    [add.fulfilled]:(state,{payload}) => {
    state.all =payload;
    },
    [add.rejected]:(state,{payload}) => {
    state.all =payload; 
    state.loading = false;
    state.error = payload.error;
    state.message ="request rejected ! ";
   }, 
    
   [clients.pending]: state => {
    state.loading = true; 
    },
    [clients.fulfilled]:(state,{payload}) => {
    state.all =payload;
    state.client.data = payload;
    state.client.apiCall = true;
    state.loading = false ;
    state.message=payload?.message;
    state.error=payload?.error; 
    },
    [clients.rejected]:(state,{payload}) => {
    state.all =payload; 
    state.loading = false;
    state.error = payload.error;
    state.message ="request rejected ! ";
   }, 
    } ,  
  
  })
  
  
  export const agentReducer =  reducer ;
  
  export const agentActions = {add,clients};
  