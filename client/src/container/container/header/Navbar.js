import React, { useState } from 'react';
import './Navbar.css'
import { Anchor, Drawer, Button } from 'antd';
import { AiOutlineBars ,AiOutlineClose } from "react-icons/ai";
const { Link } = Anchor;

function Navbar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
          <div className="logo">
          <i className="fas fa-chalkboard-teacher"></i>
          <a href="https://www.tuitionwalah.com">TuitionWalah</a>
        </div>

        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#hero" title="login" />
            <Link href="#createAccount" title="create Account" />
            <Link href="#about" title="About" />
            <Link href="#faq" title="FAQ" />
            <Link href="#contact" title="Contact" />
          </Anchor>
        </div>

        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
          <AiOutlineBars size={25} />
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <AiOutlineClose style={{margin:"10px"}}    size={25} 
             onClick={onClose} />
           
            <Anchor style={{margin:"10px"}} targetOffset="65">  
         
            <Link href="#hero" title="login" />
            <Link href="#createAccount" title="create Account" />
            <Link href="#about" title="About" />
            <Link href="#faq" title="FAQ" />
            <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
 
  );
}

export default Navbar;