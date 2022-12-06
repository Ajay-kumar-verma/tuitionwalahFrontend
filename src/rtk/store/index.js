// const {createLogger} =require('redux-logger')
import  {configureStore } from '@reduxjs/toolkit'
import  {userReducer} from  '../features/users/userSlice'
import  {allReducer} from  '../features/all/All'
import  {adminReducer} from  '../features/admin/Admin'


const store = configureStore({
  reducer:{
    user:userReducer,
    all:allReducer,
    admin:adminReducer
  },

})

export default store ;