import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import action from '../../../rtk/actions'
import {
  Button,
  message,
  Collapse,
  List,
  Row,
  Col,
  Tag,
  Badge,
  Modal,
} from 'antd'
import { MailOutlined, PhoneOutlined } from '@ant-design/icons'

import { FaWhatsapp } from 'react-icons/fa'
// import Menu from './Menu';
import moment from 'moment'
const { Panel } = Collapse

const App = () => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState([])
  const [messageApi, contextHolder] = message.useMessage()
  const dispatch = useDispatch()
  const state = useSelector(({ main: { user } }) => user)
  const {
    main: { user },
  } = action
  // console.log("1")
  console.log({ state })

  useEffect(() => {
    const { data } = state
    const { users ,message ,recieved } = data
  
    if(recieved)
     messageApi.open({ type:'success', content:message })
    
    setData(users)
  }, [state])

  useEffect(() => {
    dispatch(user())
  }, [])

  const sort = ({ type }) => {
    const newData = [...data]
    if (type === 'reverse') {
      setData(newData.reverse())
      return
    }
    if (type === 'name') {
      newData.sort(function (a, b) {
        return a.FirstName.localeCompare(b.FirstName)
      })
      setData(newData)
    }
  }

  const len = data?.length
  const data1 = len === 0 ? [] : data?.slice(0, len / 2)
  const data2 = len === 0 ? [] : data?.slice(len / 2)

  const Lists = (data) => {
    //console.log({data});

    return (
      <Collapse accordion>
        {data?.map((e, i) => {
          const { FirstName, LastName, Mobile } = e
          const keys = Object.keys(e)
          const indx = keys.indexOf('TimeAtCreated')
          keys.splice(indx, 1)
          keys.unshift('TimeAtCreated')
          return (
            <Panel
              showArrow={false}
              header={
                <Row>
                  <Col span="1"></Col>
                  <Col>
                    <Badge.Ribbon
                      key={i}
                      text={i + 1}
                      color={`#${Math.floor(100000 + Math.random() * 900000)}`}
                    ></Badge.Ribbon>
                  </Col>
                  <Col span="1"></Col>
                  <Col>
                    {
                      <Tag color="success">
                        {FirstName} {LastName}{' '}
                      </Tag>
                    }
                  </Col>
                </Row>
              }
              extra={<Tag color="geekblue"> {Mobile} </Tag>}
              key={i}
            >
              <Badge.Ribbon
                key={i}
                text={
                  <a
                    href="1"
                    style={{ color: `white` }}
                    onClick={(e) => e.preventDefault()}
                  >
                    Notes
                  </a>
                }
                color={`#${Math.floor(100000 + Math.random() * 900000)}`}
              >
                <List
                  size="small"
                  bordered
                  dataSource={keys}
                  renderItem={(key, i) => {
                    if (key === '_id' || key === '__v') return null

                    let value = e[key]
                    if ('TimeAtCreated' === key || 'DateOfBirth' === key)
                      value = moment(value).format(
                        'dddd, MMMM Do YYYY, h:mm:ss a',
                      )

                    if (
                      key === 'userType' ||
                      key === 'Active' ||
                      key === 'Block'
                    )
                      value = String(value)
                    if (key === 'referredBy')
                      value = `${value.MyId},${value.FirstName} ${value.LastName}`

                    if (key === 'Mobile')
                      value = (
                        <>
                          <a href={`tel:+91 ${value}`}>
                            <PhoneOutlined /> {value}
                          </a>
                          <br />
                          <a
                            style={{ color: 'green' }}
                            href={`https://wa.me/+91${value}?text=Hi `}
                            data-action="share/whatsapp/share"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <FaWhatsapp />
                            {value}
                          </a>
                        </>
                      )

                    if (key === 'Email')
                      value = (
                        <a href={`mailto:${value}`}>
                          <MailOutlined /> {value}
                        </a>
                      )

                    if (key === 'FirstName')
                      value = (
                        <>
                          {value}{' '}
                          <Button onClick={() => setOpen(true)}>Add</Button>
                        </>
                      )

                    return (
                      <Row key={String(i)} justify="space-between">
                        <Col span={8}>
                          <List.Item>{key}</List.Item>
                        </Col>
                        <Col span={0.2}></Col>
                        <Col span={12}>
                          <List.Item>{value}</List.Item>
                        </Col>
                      </Row>
                    )
                  }}
                />
              </Badge.Ribbon>
            </Panel>
          )
        })}
      </Collapse>
    )
  }

  return (
    <div style={{ padding: '50px 1% 0 1%' }}>
      <Modal
        title="Add"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        maxWidth={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
      <Button
        onClick={() => {
          sort({ type: 'reverse' })
        }}
      >
        reverse{' '}
      </Button>
      <Button
        onClick={() => {
          sort({ type: 'name' })
        }}
      >
        Name{' '}
      </Button>
      <Button
        onClick={() => {
          dispatch(user())
        }}
      >
        refresh
      </Button>
      {contextHolder}
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
          {Lists(data1)}
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
          {Lists(data2)}
        </Col>
      </Row>
    </div>
  )
}

export default App