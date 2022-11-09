import api from '../../api/api'
const {createAsyncThunk,createSlice} = require('@reduxjs/toolkit');

// read only 
const initialState = {
   login:false,
   userType:'/',
   all:{},
   sentData:{}, 
   loading:false,
   userData:{},
   message: '',
   error:'',
   apiCalled:false,
   home:{},
   address:{},
   otherDetail:{}
  }
  
  const home = createAsyncThunk(
    'home',
    async ()=>{
     try {
      const {data} = await api.get(`/user`)
       return data; 
    } catch (error) {
      return error;   
    }
        }
    )
   
    
    const address = createAsyncThunk(
      'address',
      async (obj)=>{
      try {
       const {data} = await  api.post(`/user/address`,obj)
         return data; 
      } catch (error) {
        console.log("error",error);
        return error;   
      }
          }
 )

 const education = createAsyncThunk(
  'education',
  async (obj)=>{
  try {
   const {data} = await  api.post(`/user/address`,obj)
     return data; 
  } catch (error) {
    console.log("error",error);
    return error;   
  }
      }
)


const  document = createAsyncThunk(
  'document',
  async (obj)=>{
  try {
   const {data} = await  api.post(`/user/document`,obj)
     return data; 
  } catch (error) {
    console.log("error",error);
    return error;   
  }
      }
)



const otherDetail = createAsyncThunk(
  'otherDetail',
  async (obj)=>{
  try {
   const {data} = await  api.post(`/user/otherDetail`,obj)
     return data; 
  } catch (error) {
    console.log("error",error);
    return error;   
  }
      }
)

const settingChangePassword = createAsyncThunk(
  'settingChangePassword',
  async (obj)=>{
  try {
   const {data} = await  api.post(`/user/`,obj)
     return data; 
  } catch (error) {
    console.log("error",error);
    return error;   
  }
      }
)



const settingResetPassword = createAsyncThunk(
  'settingResetPassword',
  async (obj)=>{
  try {
   const {data} = await  api.post(`/user/settingResetPassword`,obj)
     return data; 
  } catch (error) {
    console.log("error",error);
    return error;   
  }
      }
)



const settingDeleteAccount = createAsyncThunk(
  'settingDeleteAccount',
  async (obj)=>{
  try {
   const {data} = await  api.post(`/user/settingDeleteAccount`,obj)
     return data; 
  } catch (error) {
    console.log("error",error);
    return error;   
  }
      }
)



const teacherTeacherDetail = createAsyncThunk(
  'teacherTeacherDetail',
  async (obj)=>{
  try {
   const {data} = await  api.post(`/user/teacherTeacherDetail`,obj)
     return data; 
  } catch (error) {
    console.log("error",error);
    return error;   
  }
      }
)



const parentParentDetail = createAsyncThunk(
  'parentParentDetail',
  async (obj)=>{
  try {
   const {data} = await  api.post(`/user/parentParentDetail`,obj)
     return data; 
  } catch (error) {
    console.log("error",error);
    return error;   
  }
      }
)



const parentChildrenDetail = createAsyncThunk(
  'parentChildrenDetail',
  async (obj)=>{
  try {
   const {data} = await  api.post(`/user/parentChildrenDetail`,obj)
     return data; 
  } catch (error) {
    console.log("error",error);
    return error;   
  }
      }
)

const reset = createAsyncThunk(
  'reset',
  async (obj) => {
    const data = await   api.put(`/user/resetPassword`,obj)
    return data.data;
  }
)



 const deleteUser = createAsyncThunk(
  'delete',
  async () => {
    try {
    const data = await   api.delete(`/user`)
    return data.data;
    } catch (error) {
       return error;    
    }
  }
)

const {reducer ,actions } = createSlice({
  name:"user",
  initialState,
  reducers:{
  userType :(state,{payload}) => {
  state.userType =payload.userType
  },
  logout:_ => {
     localStorage.removeItem('token');
     window.location.href="/"
  } , 
 
},

  extraReducers:{
    [home.pending]: state => {
      state.loading = true;
   },
   [home.fulfilled]:(state,{payload}) => {
     state.home = payload;
     state.loading = false ;
     state.message=payload?.message;
     state.error=payload?.error;
   },
   [home.rejected]:(state,{payload}) => {
     state.home =payload; 
     state.loading = false;
     state.error = payload.error;
     state.message ="request rejected ! ";
    },  
     
 [address.pending]: state => {
  state.loading = true; 
  },
  [address.fulfilled]:(state,{payload}) => {
  state.all =payload;
  state.address = payload.address;
  state.loading = false ;
  state.message=payload?.message;
  state.error=payload?.error; 
  },
  [address.rejected]:(state,{payload}) => {
  state.all =payload; 
  state.loading = false;
  state.error = payload.error;
  state.message ="request rejected ! ";
 }, 
  
    
   
   [reset.pending]:state => {
      state.loading = true;
      state.login=false;
   },
   [reset.fulfilled]: (state,{payload}) => {
     state.all =payload;
     state.loading = false ;
     state.message=payload.message;
     state.error=payload.error;
   },
   [reset.rejected]:(state,{payload}) => {
     state.all =payload;
     state.loading = false;
     state.login = payload.login;
     state.error = payload.error;
     state.message ="request rejected ! ";
    },  
   
  
  [otherDetail.pending]: state => {
    state.loading = true;
 },
  [otherDetail.fulfilled]:(state,{payload}) => {
   state.all =payload;
   state.otherDetail = payload.otherDetail;
   state.loading = false ;
   state.message=payload?.message;
   state.error=payload?.error;
 },
  [otherDetail.rejected]:(state,{payload}) => {
   state.all =payload; 
   state.loading = false;
   state.error = payload.error;
   state.message ="request rejected ! ";
  },  

  } ,  

})

const {userType,logout} =actions;

export const userReducer =  reducer ;
export const userActions = { userType,logout ,
home ,address,education ,document,otherDetail,
settingChangePassword ,settingResetPassword ,settingDeleteAccount,
teacherTeacherDetail ,reset,
parentParentDetail ,parentChildrenDetail,deleteUser
};
