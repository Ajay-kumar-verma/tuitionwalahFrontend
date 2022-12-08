import api from '../../api/api'
const {createAsyncThunk,createSlice} = require('@reduxjs/toolkit');

// read only 
const initialState = {
   login:false,
   loading:false,
   apiCalled:false,
   currentUser:"/",
   userType:["/"],   
   all:{},
   sentData:{}, 
   userData:{},
   message: '',
   error:'',
   loginData :{},
   contactData:{},
   createAccountData:{} 
   
  }
   
    const login = createAsyncThunk(
      'login',
      async (obj) => {
        try {
        const {data} = await api.post(`/login`,obj);
      console.log({data})
          return data;     
      } catch (error) {
           console.log("Error is : ",error);  
        }
     }
    )

  const createAccount = createAsyncThunk(
    'createAccount',
    async (obj) => {
      console.log({obj})
      const {data} = await api.post(`/createAccount`,obj);
      console.log("create account data is :",{data});
       return data;   
    }
   )


   const reset = createAsyncThunk(
    'reset',
    async (obj) => {
      const data = await   api.put(`/user/resetPassword`,obj)
      return data.data;
    }
  )
 
  const contact = createAsyncThunk(
    'contact',
    async (obj) => {
  console.log("contact ",{obj});
      try { 
  const {data} = await api.post(`/contact`,obj)
  return data;

} catch (error) {
   return error;
}
    }
  )
     
const {reducer, actions} = createSlice({
  name:"all",
  initialState,
  reducers:{
    changeUser:(state,{payload})=>{
      if(state.userType.includes(payload)){
        // console.log("chnage use is called ",payload)
         state.currentUser=payload
      }
        }
     }
  , 
    extraReducers:{
   [login.pending]:(state)=> {
      state.loading = true;
      state.login=false;
   } ,
   [login.fulfilled]: (state,{payload}) => {
     state.all = payload;
     state.loading = false ;
     const {login,token,message,user,error} =payload;
    //  console.log({payload})
     const {userType} = user;
     if((login===true) && Array.isArray(userType))
      {
       if(!!token) localStorage.setItem('token',token);
       state.login=true;  
      state.userType = userType.reverse();
      state.currentUser=userType[0];
    } else{
      localStorage.removeItem('token')
    }
    
    state.message=message;
    state.error=error;
      },
    [login.rejected]:(state,{payload}) => {
    state.all =payload; 
    state.loginData=payload;
    state.login = false;
    state.loading = false;
    state.error = payload?.error;
    state.message ="request rejected ! ";
  },
    [createAccount.pending]: state => {
       state.loading = true;
       state.login=false;
    },
    [createAccount.fulfilled]: (state,{payload}) => {
      state.all =payload;
      state.createAccountData=payload;
      state.loading = false ;
      state.message=payload.message;
      state.error=payload.error;
    },
    [createAccount.rejected]:(state,{payload}) => {
        state.all =payload;
        state.createAccountData=payload;
        state.loading = false;
        state.error = payload?.error;
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
    
  } ,  
  
})

const {changeUser} =actions;
export const allReducer =  reducer ;
export const allAction = {
   login , createAccount , reset , contact
   , changeUser  
  };
