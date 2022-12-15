import React from 'react';
import { Collapse } from 'antd';
const { Panel } = Collapse;

const App = () => (
  <Collapse className="form"  style={{marginTop:"50px"}} accordion>
    <Panel header="How we work !" key="1">
     We developed platform where Students ,teachers and Parents can connect . 
    </Panel>
    <Panel header="Who we are !" key="2">
     We are engineers !
    </Panel>

    <Panel header="What our aim is !" key="3">
     Providing Tutor for all required student  at their Home . 
      </Panel>
    <Panel header="How many students has  joinned so far !  " key="4">
    More than 500   
     </Panel>
  
      <Panel header="How many teacher has  joinned so far ! " key="5">
     more than 150  
      </Panel>
  
  </Collapse>
);
export default App;