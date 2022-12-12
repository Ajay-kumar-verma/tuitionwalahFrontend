import api from '../../api/api'
const {createAsyncThunk,createSlice} = require('@reduxjs/toolkit');

// read only 
const initialState = {
    lead:{apiCall:false, data:{}},
}


const lead = createAsyncThunk(
    'lead',
    async (obj)=>{
      try {
        const {data} = await  api.post(`/lead/client`,obj)
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
   [lead.pending]: state => {
    state.loading = true; 
    },
    [lead.fulfilled]:(state,{payload}) => {
    state.all =payload;
    state.lead.data = payload;
    state.lead.apiCall = true;
    state.loading = false ;
    state.message=payload?.message;
    state.error=payload?.error; 
    },
    [lead.rejected]:(state,{payload}) => {
    state.all =payload; 
    state.loading = false;
    state.error = payload.error;
    state.message ="request rejected ! ";
   }, 
    
    } ,  
  
  })
  
  
  export const leadReducer =  reducer ;
  
  export const leadActions = {lead};
  