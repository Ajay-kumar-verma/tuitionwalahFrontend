// const {createLogger} =require('redux-logger')
import  {configureStore } from '@reduxjs/toolkit'
import  {cakeReducer} from  '../features/cake/cakeSlice'
import  {icecreamReducer} from  '../features/icecream/icecreamSlice'
import  {userReducer} from  '../features/users/userSlice'

// console.log(reducer)

const store = configureStore({
  reducer:{
    cake:cakeReducer,
    icecream:icecreamReducer,
    user:userReducer
  },
// middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger()), 

})

// console.log("Store is :",store.getState());

export default store ;