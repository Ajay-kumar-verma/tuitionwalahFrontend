import { cakeActions } from "../features/cake/cakeSlice";
import { icecreamActions } from "../features/icecream/icecreamSlice";
import  {userActions} from "../features/users/userSlice";
import  {loginActions} from "../features/api/login/index";
import  {signupActions} from "../features/api/signUp/index";


// console.log("action index.js : ", userActions)
export const cake = cakeActions;
export const icecream = icecreamActions;
export const user = userActions;
export const login = loginActions;
export const signup = signupActions;


