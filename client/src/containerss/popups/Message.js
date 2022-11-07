import {  message } from 'antd';

 const success = (msg) => {
   msg = msg?msg: 'This is success message'; 
  message.success(msg ,5);
};

 const error = (msg) => {
  message.error(msg |'This is an error message',5);
}; 

 const warning = (msg) => {
  message.warning(msg |'This is a warning message',5);
};

const warn = (msg) => {
    message.warn(msg |'This is a warning message',5);
  };
const info = (msg) =>{
    message.info(msg |'Loading finished is finished', 2.5);
}  

const loading = (msg) =>{
    message.loading(msg |'Action in progress..', 2.5)
}

const sequence = (msg1,msg2,msg3) => {
    message
      .loading(msg1 |'Action in progress..', 2.5)
      .then(() => message.success(msg2 |'Loading finished', 2.5))
      .then(() => message.info(msg3 |'Loading finished is finished', 2.5));
  };

export default {success,error,warning,warn,info,loading,sequence}
