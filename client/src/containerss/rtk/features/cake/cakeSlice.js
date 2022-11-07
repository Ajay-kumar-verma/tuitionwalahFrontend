import  {createSlice} from '@reduxjs/toolkit';

const initialState = {
    numOfCake:10
}

const {reducer,actions} = createSlice({
  name:"cake",
  initialState,
  reducers:{
    ordered: (state)=> {
        state.numOfCake--;
    },
    reStocked:(state,action)=>{
      // console.log("action in cakeSlice page : ",action)
      state.numOfCake+=action.payload
    },
  },
})

// console.log(cakeSlice)

// module.exports = cakeSlice.reducer;
// module.exports.cakeActions = cakeSlice.actions;

export const cakeReducer=reducer;
export const   cakeActions = actions;
