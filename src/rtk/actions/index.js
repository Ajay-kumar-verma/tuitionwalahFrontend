import  {userActions} from "../features/users/userSlice";
import  {allAction} from "../features/all/All";
import  {adminActions} from "../features/admin/Admin";

 

const user =userActions;
const all = allAction;
const action = {user ,all,admin:adminActions};

export default action;


