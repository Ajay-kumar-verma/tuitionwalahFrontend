import React from 'react';
import 'antd/dist/antd.css';
import AppHeader from '../container/container/header/Navbar';
import Login from '../../src/container/pages/login/Login';
import CreateAccount from '../../src/container/pages/signup/SignUp';
import Contact from '../../src/container/pages/contact/Contact';

// import AppFooter from './components/common/footer';
// import AppHome from './views/home';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function Home() {
  return (
  <>
    <AppHeader/>
   <Content>
   <div className="main">
      <Login/>
      <CreateAccount/>
      {/* <About/> */}
      {/* <AppFaq/> */}
      <Contact/>
    </div> 
   </Content>
   
      {/* <Footer> */}
        {/* <AppFooter/>   */}
      {/* </Footer>       */}
  </>
 );
}

export default Home;
