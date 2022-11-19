import React from 'react';
import { Collapse } from 'antd';
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const App = () => (
  <Collapse className="form"  accordion>
    <Panel header="How we work !" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="What we are !" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="What our aim is !" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>
);
export default App;