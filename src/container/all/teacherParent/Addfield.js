import React from 'react'
import {
  Form,
  Input,
  Button,
  Select,
  Row,
  Col,
  DatePicker,
  TimePicker,
} from 'antd'
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons'

const Options = [
  'altNumber',
  `childName`,
  'Any Expectation',
  'board',
  'other',
  `extra Info`,
  `demo Date`,
  'time',
  'freeTime',
  'class',
  'school Name',
].map((e) => ({ value: e, label: e }))

const App = ({ name }) => {
  const [field, setField] = React.useState('')
  return (
    <Form.List name={name}>
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Row justify="space-between">
              <Col xs={{ span: 20 }} md={{ span: 10 }} lg={{ span: 10 }}>
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
                    onChange={(e) => {
                      if (e === 'demo Date') setField('date')
                      if (e === 'freeTime') setField(`time`)
                      if (e === 'class') setField(`class`)
                      if (e === 'board') setField('board')
                    }}
                    style={{ width: '100%' }}
                    placeholder="Search to Select"
                    options={Options}
                  />
                </Form.Item>
              </Col>
              <Col xs={{ span: 20 }} md={{ span: 10 }} lg={{ span: 10 }}>
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
                  {field === 'date' ? (
                    <DatePicker.RangePicker
                      showTime={{
                        format: 'HH:mm',
                      }}
                      format="YYYY-MM-DD HH:mm"
                    />
                  ) : field === 'time' ? (
                    <TimePicker.RangePicker
                      showTime={{
                        format: 'HH:mm',
                      }}
                    />
                  ) : field === 'class' || field === 'board' ? (
                    <Select
                      allowClear
                      showSearch
                      style={{ width: '100%' }}
                      placeholder="Select user type "
                      options={
                        field === 'class'
                          ? [
                              'NC',
                              `LKG`,
                              'UKG',
                              ...new Array(10)
                                .fill(0)
                                .map((_, i) => i + 1 + ' class'),
                            ].map((e) => ({ value: e, label: e }))
                          : [
                              'BSEB',
                              `CBSE`,
                              'CISCE',
                              'ICSE',
                              'OTHER',
                            ].map((e) => ({ value: e, label: e }))
                      }
                    />
                  ) : (
                    <Input
                      style={{ width: '100%' }}
                      allowClear
                      maxLength={50}
                      placeholder=" Enter value"
                    />
                  )}
                </Form.Item>
              </Col>
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Row>
          ))}
          <Form.Item>
            <Button
              type="dashed"
              onClick={() => add()}
              block
              icon={<PlusOutlined />}
            >
              Add field
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  )
}

export default App
