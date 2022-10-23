import { cakeActions } from "../features/cake/cakeSlice";
import { icecreamActions } from "../features/icecream/icecreamSlice";
import  {userActions} from "../features/users/userSlice";

// console.log("action index.js : ", userActions)
export const cake = cakeActions;
export const icecream = icecreamActions;
export const user = userActions;

