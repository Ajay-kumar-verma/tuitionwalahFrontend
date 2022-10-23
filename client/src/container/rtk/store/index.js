// const {createLogger} =require('redux-logger')
import  {configureStore } from '@reduxjs/toolkit'
import  {cakeReducer} from  '../features/cake/cakeSlice'
import  {icecreamReducer} from  '../features/icecream/icecreamSlice'
import  {userReducer} from  '../features/users/userSlice'
import {loginReducer} from '../features/api/login/';
// console.log(reducer)

const store = configureStore({
  reducer:{
    cake:cakeReducer,
    icecream:icecreamReducer,
    user:userReducer,
    login:loginReducer
  },

})

export default store ;