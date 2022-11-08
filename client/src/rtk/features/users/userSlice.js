import api from '../../api/api'
const {createAsyncThunk,createSlice} = require('@reduxjs/toolkit');

// read only 
const initialState = {
   login:false,
   userType:'',
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
   
    const login = createAsyncThunk(
      'login',
      async (obj) => {
        try {
          console.log("slice 25",{obj});
      const {data} = await api.post(`/login`,obj);
      console.log({data})
          return data;     
      } catch (error) {
           console.log("Error is : ",error);  
        }
     }
    )

  
  // CREATE ACCOUNT
  const createAccount = createAsyncThunk(
    'createAccount',
    async (obj) => {
      // console.log('login data is ',obj)
     const {FirstName,LastName, Mobile ,Gender, DateOfBirth} =obj;
      // console.log("User details is :",{FirstName,LastName, Mobile ,Gender, DateOfBirth}) 

      const data = await api.post(`/user`,{FirstName,LastName, Mobile ,Gender, DateOfBirth})
      // console.log("Server data is  ",data.data);     
       return data.data;
   
    }
    )

 
 // RESET PASSWORD  
   const reset = createAsyncThunk(
    'reset',
    async (obj) => {
      // console.log('login data is ',obj)
      const {Mobile } =obj;
      const data = await   api.put(`/user/resetPassword`,{Mobile})
      // console.log("Server data is  ",data.data);     
      return data.data;
   
    }
  )
  
  //DELETE

  
 // RESET PASSWORD  
 const deleteUser = createAsyncThunk(
  'delete',
  async () => {
    // console.log('login data is ',obj)
    // const {Mobile } =obj;
    const {token} = initialState; 
    const data = await   api.delete(`/user`,{token})
    // console.log("Server data is  ",data.data);     
     return data.data;
 
  }
)


   // HOME
    const home = createAsyncThunk(
      'home',
      async ()=>{
        // console.log("Home api is called ..!");
       try {
        const data = await api.get(`/user`)
        console.log("response is :",data);
         return data.data; 
      } catch (error) {
        console.log("error",error);
        return error;   
      }
     
          }
      )


  // ADDRESS
    const address = createAsyncThunk(
      'address',
      async (address)=>{
        // console.log("address api is called ..!");
      try {
       const data = await  api.post(`/user/address`,address)
        // console.log("response is :",data);
         return data.data; 
      } catch (error) {
        console.log("error",error);
        return error;   
      }
          }
      )


   const otherDetail = createAsyncThunk(
      'otherDetail',
    async (otherDetail)=>{
    //  console.log("other details api is called ..!");
      try {
         const data = await  api.post(`/user/otherDetail`,otherDetail)
          // console.log("response is :",data);
           return data.data; 
        } catch (error) {
          console.log("error",error);
          return error;   
        }
            }
        )






// REDUCER 
const {reducer ,actions } = createSlice({
  name:"user",
  initialState,
  reducers:{
  userType :(state,action) => {
    state.sentData =action.payload;
    state.userType =action.payload.userType
  },

  loginUsertype :(state,{payload:{login,userType}}) => {
     if(login===true){
       state.login = true;
       state.userType=userType;
        }else{
     state.login =false;
     state.userType='user';
      }
    
  },
},

  // login
  extraReducers:{

    [login.pending]:(state)=> {
      console.log("Pending state is called ")
      state.loading = true;
      state.login=false;
   },
   [login.fulfilled]: (state,{payload}) => {
     state.all = payload;
     state.loading = false ;
     const {login,token,userType,message,error} =payload;
    
     if(token && login===true &&
       (userType === 'user' || userType === 'admin' || userType==='main'))
       {
      localStorage.setItem('token',token);
      state.login=true;  
      state.userType = userType; 
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
   
   
 
  //  },
  //  (builder) => {
   
  //   builder.addCase(deleteUser.pending, state => {
  //      state.loading = true;
  //      state.login=false;
  //   })
    
  //   builder.addCase(deleteUser.fulfilled, (state,action) => {
  //     state.all =action.payload;
  //     state.loading = false ;
  //     state.login = action.payload.login;
  //     state.message=action.payload.message;
  //     state.error=action.payload.error;
  //   })
    
  //   builder.addCase(deleteUser.rejected,(state,action) => {
  //     state.all =action.payload;
  //     state.loading = false;
  //     state.login = action.payload.login;
  //     state.error = action.payload.error;
  //     state.message ="request rejected ! ";
  //    })  
 
  //  }
   
  // ]

 

})

// console.log("slice in redux : ",actions)

const {userType,loginUsertype} =actions;

export const userReducer =  reducer ;
export const userActions = {
  login,home , userType,
  loginUsertype,createAccount,
  deleteUser ,reset ,address,otherDetail
};
