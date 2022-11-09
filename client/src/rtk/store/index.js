// const {createLogger} =require('redux-logger')
import  {configureStore } from '@reduxjs/toolkit'
import  {userReducer} from  '../features/users/userSlice'
import  {allReducer} from  '../features/all/All'


const store = configureStore({
  reducer:{
    user:userReducer,
    all:allReducer
  },

})

export default store ;