import React ,{memo} from 'react'
import { useDispatch } from 'react-redux'
import action from '../../../rtk/actions/index'
import {
  Form,
  Input,
  Button,
  notification,
  Select,
  Divider,
  Row,
  Col,
} from 'antd'
import AddField from './Addfield'
const zipList = [
  ...new Array(30).fill(0).map((_, i) => 800000 + (i + 1)),
  801105,
  801113,
  801503,
  801505,
  801506,
  801507,
  804453,
  'other',
].map((e) => String(e))

const option = (list) =>
  list.map((name) => (
    <Select.Option allowClear key={name}>
      {name}
    </Select.Option>
  ))
const selectOption = (placeholder, list) => (
  <Select placeholder={placeholder} mode="tags" style={{ width: '100%' }}>
    {option(list)}
  </Select>
)

const selectInput = (...data) => {
  return (
    <>
      <Form.Item
        label={data[0]}
        name={data[1]}
        rules={[{ required: true, message: 'required !' }]}
      >
        {data[2] !== undefined ? selectOption(data[0], data[2]) : null}
      </Form.Item>
    </>
  )
}

const dataInput = (...data) => {
  const { maxLength } = data[2]
  return (
    <Form.Item
      label={data[0]}
      name={data[1]}
      rules={[{ required: true, message: 'required !' }]}
    >
      {maxLength ? (
        <Input
          allowClear
          placeholder={data[0]}
          showCount
          maxLength={maxLength}
        />
      ) : (
        <Input placeholder={data[0]} />
      )}
    </Form.Item>
  )
}

const selectOptions = (...data) => {
  return (
    <Form.Item
      label={data[0]}
      name={data[1]}
      rules={[{ required: true, message: 'required !' }]}
    >
      <Select
        allowClear
        showSearch
        style={{ width: '100%' }}
        placeholder="Search to Select"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? '').includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? '')
            .toLowerCase()
            .localeCompare((optionB?.label ?? '').toLowerCase())
        }
        options={data[2].map((e) => ({ value: e, label: e }))}
      />
    </Form.Item>
  )
}

const formData = []
formData.push(dataInput('name ', 'name', { maxLength: 50 }))
formData.push(dataInput('number ', 'number', { maxLength: 10 }))

const stateName = selectOptions('State', 'state', [
  'Bihar',
  'Uttar Pradesh',
  'Karnataka',
  'Other',
])
formData.push(stateName)

const city = selectOptions('City', 'city', [
  'Patna',
  'Noida',
  'Bengaluru',
  'Other',
])
formData.push(city)

const zipCode = selectOptions('Zip code ', 'zipCode', zipList)
formData.push(zipCode)

const address = dataInput('Address ', 'address ', { maxLength: 100 })
formData.push(address)

const landMark = dataInput('landMark ', 'landmark', { maxLength: 100 })
formData.push(landMark)

const subjects = ['Hindi', 'English', 'Math', 'Science', 'Computer', 'All']
const subjectsOption = selectInput(
  'Subjects for  you want to  hire teacher',
  'subjects',
  subjects,
)
formData.push(subjectsOption)
const classes = [
  'NC',
  'LKG',
  'UKG',
  ...new Array(12).fill(0).map((_, i) => i + 1 + ' class'),
]
const classesOption = selectInput(
  'for  which classes  you want to  hire',
  'classes',
  classes,
)
formData.push(classesOption)

const boards = ['CBSE', 'NCERT', 'BSEB', 'Other']
const BoardOption = selectInput('Board  of student ', 'board', boards)
formData.push(BoardOption)

const expectedFeeOption = selectOptions(
  'how much you can pay  ',
  'expectedFee',
  [
    `below 1000`,
    '1000 - 1500',
    `1000 - 2000`,
    '1500 - 2000',
    '2000 - 2500',
    '2000 - 3000',
    `3000 - 4000`,
    `4000 - 5000`,
    `more than 5000`,
  ].map((e) => e + ' Rupees '),
)
formData.push(expectedFeeOption)

const days = [
  'All days',
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const daysOption = selectInput(
  'Days you want to take classes',
  'daysOfClass',
  days,
)
formData.push(daysOption)

const Parent = () => {
  const [form] = Form.useForm()
  const { resetFields } = form
  const dispatch = useDispatch()
  const {
    lead: { add },
  } = action
  const onFinish = (values) => {
    dispatch(add({ ...values, Lead: 'parent' }))
    resetFields()
  }

  const onFinishFailed = (errorInfo) => {
    notification['error']({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      placement: 'bottom',
    })
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: true }}
      scrollToFirstError
    >
      <Divider>Parent details</Divider>
      <Row justify="space-between">
        {formData.map((e) => (
          <Col xs={{ span: 23 }} md={{ span: 11 }} lg={{ span: 7 }}>
            {e}
          </Col>
        ))}
      </Row>
      <AddField name="ExtraParent" />
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default memo(Parent)
