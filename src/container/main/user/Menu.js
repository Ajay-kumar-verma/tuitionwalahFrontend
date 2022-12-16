import React from 'react';
import { Dropdown } from 'antd';
const items = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];
const App = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={['contextMenu']}
  >
    <div
      className="site-dropdown-context-menu"
      style={{
        textAlign: 'center',
        height: 200,
        lineHeight: '200px',
      }}
    >
      Right Click on here
    </div>
  </Dropdown>
);
export default App;