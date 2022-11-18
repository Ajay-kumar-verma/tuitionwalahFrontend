import React, { useState } from 'react';
import './nav.css'

import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;

function AppHeader({menuList}) {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  
  
  const list =()=>{
    return ( <Anchor targetOffset="65">
      {menuList.map(({href,title})=><Link href={`#${href}`} title={title} />)}
    </Anchor>)
  }

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-book-reader"></i>
          <a href="11" onClick={(e)=>{e.preventDefault()}} >TUITION WALAH</a>
        </div>
        <div className="mobileHidden">
           {list()}
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            {list()}
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;