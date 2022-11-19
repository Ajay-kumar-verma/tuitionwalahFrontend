import React from 'react';
import { Button, Result } from 'antd';
const App = () => (
  <Result
    status="404"
    title="404"
    subTitle="PAGE NOT FOUND !"
    extra={<Button onClick={()=>{window.location.href="/"}} type="primary">Back Home</Button>}
  />
);
export default App;