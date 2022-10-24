
import {useSelector}  from 'react-redux'

const Auth = ({children}) => {
const {login} =useSelector(state => state.login);

console.log("Login state : ",login);

 if(!login)  
   return "Not login" 

    return children
}

export default Auth