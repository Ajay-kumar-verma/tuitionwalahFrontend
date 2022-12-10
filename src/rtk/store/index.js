// const {createLogger} =require('redux-logger')
import  {configureStore } from '@reduxjs/toolkit'
import  {userReducer} from  '../features/users/userSlice'
import  {allReducer} from  '../features/all/All'
import  {adminReducer} from  '../features/admin/Admin'
import  {agentReducer} from  '../features/agent/Agent'


const store = configureStore({
  reducer:{
    user:userReducer,
    all:allReducer,
    admin:adminReducer,
    agent:agentReducer
  },

})

export default store ;