const Auth = ({children}) => {
    const token =localStorage.getItem('token');
   if(token===null){
       window.location.href="/"
    }

    console.log({children,token})
    return children;
    
    
    
}

export default Auth