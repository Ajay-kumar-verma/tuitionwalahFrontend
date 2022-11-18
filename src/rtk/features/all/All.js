import api from '../../api/api'
const {createAsyncThunk,createSlice} = require('@reduxjs/toolkit');

// read only 
const initialState = {
   login:false,
   userType:["/"],   
   loading:false,
   all:{},
   sentData:{}, 
   userData:{},
   message: '',
   error:'',
   apiCalled:false,
   loginData :{},
   contactData:{},
   createAccountData:{} 
   
  }
   
    const login = createAsyncThunk(
      'login',
      async (obj) => {
        // console.log("Login",{obj})
        try {
        const {data} = await api.post(`/login`,obj);
      // console.log({data})
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
      const {data} = await api.post(`/user`,obj);
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
  const {data} = await   api.put(`/user/contact`,obj)
  return data;

} catch (error) {
   return error;
}
    }
  )
  
   
const {reducer} = createSlice({
  name:"all",
  initialState,
   extraReducers:{
   [login.pending]:(state)=> {
      state.loading = true;
      state.login=false;
   },
   [login.fulfilled]: (state,{payload}) => {
     state.all = payload;
     state.loading = false ;
     const {login,token,userType,message,error} =payload;
     if((token && login===true) && Array.isArray(userType))
       {
      localStorage.setItem('token',token);
      state.login=true;  
      state.userType = userType.reverse(); 
       }else{
        localStorage.removeItem('token');
       }
     state.message=message;
     state.error=error;
      },
    [login.rejected]:(state,{payload}) => {
    state.all =payload; 
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
      state.loading = false ;
      state.message=payload.message;
      state.error=payload.error;
    },
    [createAccount.rejected]:(state,{payload}) => {
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
    
  

  } ,  
   
  

})


export const allReducer =  reducer ;
export const allAction = {
   login , createAccount , reset , contact
};
