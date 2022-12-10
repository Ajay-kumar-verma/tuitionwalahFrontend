import api from '../../api/api'
const {createAsyncThunk,createSlice} = require('@reduxjs/toolkit');


// read only 
const initialState = {
    agent:{apiCall:false, data:{}},
 
}



const agent = createAsyncThunk(
    'agent',
    async (obj)=>{
      try {
        const {data} = await  api.post(`/agent/client`,obj)
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
   [agent.pending]: state => {
    state.loading = true; 
    },
    [agent.fulfilled]:(state,{payload}) => {
    state.all =payload;
    state.agent.data = payload;
    state.agent.apiCall = true;
    state.loading = false ;
    state.message=payload?.message;
    state.error=payload?.error; 
    },
    [agent.rejected]:(state,{payload}) => {
    state.all =payload; 
    state.loading = false;
    state.error = payload.error;
    state.message ="request rejected ! ";
   }, 
    
    } ,  
  
  })
  
  
  export const agentReducer =  reducer ;
  
  export const agentActions = {agent};
  