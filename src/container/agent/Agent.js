import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import action from '../../rtk/actions/index'

import { Collapse,Select } from 'antd';
const { Panel } = Collapse;

const {Option} = Select;

const Agent = ()=>{
  const dispatch = useDispatch() 
  const state = useSelector(({all:{userType}})=>userType)
  const options =state.map(e=><Option value={e} >{e}</Option>)
   options.reverse()
  console.log({options})
  
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    dispatch(action.all.changeUser(value))
  };
  

return (
<div className="form">

  
  <Select
    defaultValue="lucy"
    style={{
      width: 200,
    }}
    onChange={handleChange}
  >
      {options}
  </Select>

<Collapse accordion>

    <Panel header="ADD TEACHERS" extra="शिक्षक को जोड़" key="1">
      <p>{'text'}</p>
    </Panel>
   
    <Panel header="ADD STUDENTS" extra="छात्र को जोड़" key="2">
      <p>{'text'}</p>
    </Panel>

    <Panel header="ADD PARENTS" extra="माता-पिता को जोड़" key="3">
      <p>{'text'}</p>
    </Panel>
  
    <Panel header="TOTAL TEACHERS" extra="कुल शिक्षक" key="4">
      <p>{'text'}</p>
    </Panel>

    <Panel header="TOTAL STUDENTS" extra="कुल छात्र " key="5">
      <p>{'text'}</p>
    </Panel>
    <Panel header="TOTAL PARENTS" extra="कुल माता-पिता " key="6">
      <p>{'text'}</p>
    </Panel>
  
  </Collapse>


</div>
)

}

export default Agent