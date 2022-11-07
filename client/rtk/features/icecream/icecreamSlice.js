import  {createSlice} from '@reduxjs/toolkit';
// const {cakeActions} = require('../../features/cake/cakeSlice');

const initialState = {
    numOfIcecream:70
}

const {reducer , actions} = createSlice({
  name:"icecream",
  initialState,
  reducers:{
    ordered: (state)=> {
        state.numOfIcecream--;
    },
    reStocked:(state,action)=>{
        state.numOfIcecream+=action.payload
    },
  },

//  extraReducers : {
//     ['cake/ordered']:(state)=>{
//         state.numOfIcecream--;
//     }
//  }

// extraReducers:(builder) => {
//   builder.addCase(cakeActions.ordered,state =>{
//     state.numOfIcecream--
//   })
// }

})

// console.log(cakeSlice)

// module.exports = icecreamSlice.reducer;
// module.exports.icecreamActions = icecreamSlice.actions;

export const icecreamReducer = reducer;
export const icecreamActions = actions;
// export const cakeReducer=reducer;
