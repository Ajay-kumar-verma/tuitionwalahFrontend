import api from '../../api/api'
const {createAsyncThunk,createSlice} = require('@reduxjs/toolkit');

// read only 
const initialState = {
   all:{},
   loading:false,
   message: '',
   error:'',
 
   user:{apiCall:false, data:{}},
   student:{apiCall:false, data:{}},
   teacher:{apiCall:false, data:{}},
   parent:{apiCall:false, data:{}},
   agent:{apiCall:false, data:{}},
   team:{apiCall:false, data:{}},
   admin:{apiCall:false, data:{}},
   
  }
  
    const user = createAsyncThunk(
      'user',
      async (obj)=>{
      try {
       const {data} = await  api.post(`/admin/user`,obj)
         return data; 
      } catch (error) {
        console.log("error",error);
        return error;   
      }
          }
 )

 const student = createAsyncThunk(
  'student',
  async (obj)=>{
  try {
   const {data} = await  api.post(`/admin/student`,obj)
     return data; 
  } catch (error) {
    console.log("error",error);
    return error;   
  }
      }
)


const teacher = createAsyncThunk(
  'teacher',
  async (obj)=>{
    try {
      const {data} = await  api.post(`/admin/teacher`,obj)
        return data; 
     } catch (error) {
       console.log("error",error);
       return error;   
     }
  }
)

const parent = createAsyncThunk(
  'parent',
  async (obj)=>{
  try {
   const {data} = await  api.post(`/admin/parent`,obj)
     return data; 
  } catch (error) {
    console.log("error",error);
    return error;   
  }
      }
)

const agent = createAsyncThunk(
  'agent',
  async (obj)=>{
  try {
   const {data} = await  api.post(`/admin/agent`,obj)
     return data; 
  } catch (error) {
    console.log("error",error);
    return error;   
  }
      }
)



const team = createAsyncThunk(
  'team',
  async (obj)=>{
  try {
   const {data} = await  api.post(`/admin/team`,obj)
     return data; 
  } catch (error) {
    console.log("error",error);
    return error;   
  }
      }
)

const admin = createAsyncThunk(
  'admin',
  async (obj)=>{
  try {
   const {data} = await  api.post(`/admin/admin`,obj)
     return data; 
  } catch (error) {
    console.log("error",error);
    return error;   
  }
      }
)


const {reducer ,actions } = createSlice({
  name:"admin",
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
     
   [student.pending]: state => {
      state.loading = true;
   },
   [student.fulfilled]:(state,{payload}) => {
     state.all = payload;
     state.loading = false ;
     state.message=payload?.message;
     state.error=payload?.error;
     state.student.data=payload;
     state.student.apiCall=false;
    },
   [student.rejected]:(state,{payload}) => {
     state.all =payload; 
     state.loading = false;
     state.student.data=payload;
     state.error = payload?.error;
     state.message ="request rejected ! ";
    },  
  [teacher.pending]: state => {
  state.loading = true; 
  },

  [parent.fulfilled]:(state,{payload}) => {
  state.all =payload;
  state.parent.data = payload;
  state.parent.apiCall = true;
  state.loading = false ;
  state.message=payload?.message;
  state.error=payload?.error; 
  },
  [parent.rejected]:(state,{payload}) => {
  state.all =payload; 
  state.loading = false;
  state.error = payload.error;
  state.message ="request rejected ! ";
 }, 
   
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
    
   
   
 [team.pending]: state => {
  state.loading = true; 
  },
  [team.fulfilled]:(state,{payload}) => {
  state.all =payload;
  state.team.data = payload;
  state.team.apiCall = true;
  state.loading = false ;
  state.message=payload?.message;
  state.error=payload?.error; 
  },
  [team.rejected]:(state,{payload}) => {
  state.all =payload; 
  state.loading = false;
  state.error = payload.error;
  state.message ="request rejected ! ";
 }, 

  
  [admin.pending]: state => {
  state.loading = true; 
  },
  
  [admin.fulfilled]:(state,{payload}) => {
  state.all =payload;
  state.admin.data = payload;
  state.admin.apiCall = true;
  state.loading = false ;
  state.message=payload?.message;
  state.error=payload?.error; 
  },

  [admin.rejected]:(state,{payload}) => {
  state.all =payload; 
  state.loading = false;
  state.error = payload.error;
  state.message ="request rejected ! ";
 }, 
 
  } ,  

})

export const adminReducer =  reducer ;

export const adminActions = { 
user,student , teacher , parent , agent , team , admin
};
