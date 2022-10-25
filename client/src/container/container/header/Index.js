import React from 'react';
import './AppHeader.css';
import 'antd/dist/antd.css';

import AppHeader from './AppHeader';

import { Layout } from 'antd';
const { Header  } = Layout;

function Index() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>
      </Header>
    </Layout>
  );
}

export default Index;
