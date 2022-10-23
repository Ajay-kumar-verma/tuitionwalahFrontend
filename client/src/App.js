import {useSelector,useDispatch}  from 'react-redux'

function App() {

  const state = useSelector(state => state);
  const dispatch = useDispatch();

console.log("state is :",state);
console.log("dispatch is :",dispatch);

  return (
    <>
   Tuition Walah 
    Work is under Progress  

    </>
  );
}


export default App;
