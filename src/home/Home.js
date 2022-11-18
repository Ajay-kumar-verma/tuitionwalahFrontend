import React from 'react';
// import './Home.css'

import 'antd/dist/antd.css';

import AppHeader from './common/header';
// import AppFooter from './common/footer';
import AppHome from './view/AppHome';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function Home() {
  return (<>
        <AppHeader/>
          <AppHome />  
          

    {/* // <Layout className="mainLayout">
    //   <Header>
    //   </Header>
    //   <Content>
    //     <AppHome/>
    //   </Content>
    //   <Footer>
    //     <AppFooter/>  
    //   </Footer>      
    // </Layout> */}
  </>
 );
}

export default Home;
