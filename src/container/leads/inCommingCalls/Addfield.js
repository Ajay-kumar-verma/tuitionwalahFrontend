import React from 'react'
import { Form, Input, Button, Select, Row, Col} from 'antd';
import { PlusOutlined,MinusCircleOutlined} from '@ant-design/icons'
  
const Options = ['altNumber',`childName`,
'Any Expectation','borad','other'].map(e=>({value:e,label:e}));
  
 const App =({name})=>{
 return (
    <Form.List name={name}>
    {(fields, { add, remove }) => (
      <>
        {fields.map(({ key, name, ...restField }) => (
          <Row justify="space-between">
          <Col
              xs={{span:20}}
              md={{span:10}}
              lg={{span:10}}
       >
         <Form.Item
              {...restField}
              name={[name, 'type']}
              rules={[
                {
                  required: true,
                  message: 'Missing type ',
                },
              ]}
              >
 
     <Select  
      allowClear
   showSearch
    style={{width: '100%',}}
placeholder="Search to Select"
optionFilterProp="children"
filterOption={(input, option) => (option?.label ?? '').includes(input)}
filterSort={(optionA, optionB) =>
  (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
}
options={Options}
/>
</Form.Item>
</Col>
<Col
      xs={{span:20}}
      md={{span:10}}
      lg={{span:10}}
>

          <Form.Item
              {...restField}
              name={[name, 'value']}
              rules={[
                {
                  required: true,
                  message: 'Missing value',
                },
              ]}
            >
  
         <Input 
         style={{width: '100%',}}
         allowClear maxLength={50}
           placeholder=" Enter value" />
       </Form.Item>
</Col>
<MinusCircleOutlined onClick={() => remove(name)} />
</Row>
))}
        <Form.Item>
          <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
            Add field
          </Button>
        </Form.Item>
      </>
    )}

    </Form.List>


)
 
}

export default App;
