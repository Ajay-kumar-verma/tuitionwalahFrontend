import  {userActions} from "../features/users/userSlice";
import  {allAction} from "../features/all/All";
import  {adminActions} from "../features/admin/Admin";
import  {agentActions} from "../features/agent/Agent";


const action = {
    user:userActions,
    all:allAction,
    admin:adminActions,
    agent:agentActions
 };

export default action;


