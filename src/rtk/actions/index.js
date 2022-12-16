import  {userActions} from "../features/users/userSlice";
import  {allAction} from "../features/all/All";
import  {adminActions} from "../features/admin/Admin";
import  {agentActions} from "../features/agent/Agent";
import  {leadActions} from "../features/lead/lead";
import  {mainActions} from "../features/main/Main";


const action = {
    user:userActions,
    all:allAction,
    admin:adminActions,
    agent:agentActions,
    lead:leadActions,
    main:mainActions,
 };

export default action;


