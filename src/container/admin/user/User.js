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
  Radio,
  Divider,
} from 'antd'
import { MailOutlined, PhoneOutlined } from '@ant-design/icons'

import { FaWhatsapp } from 'react-icons/fa'
// import Menu from './Menu';
import moment from 'moment'
import Lists from './Lists.js'
const App = () => {
   const [data, setData] = useState([])
  const [messageApi, contextHolder] = message.useMessage()
  const dispatch = useDispatch()
  const state = useSelector(({ admin: { user } }) => user)
  const {
    admin: { user },
  } = action

  useEffect(() => {
    const { data } = state
    // console.log({data})
    const { users ,message ,recieved } = data
    const type = 'success'
    if(recieved)
    messageApi.open({ type, content:message })
    setData(users)
  }, [state ])

  useEffect(() => {
    dispatch(user({ info: 'sent all data' }))
  }, [user])

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


  return (
    <div style={{ padding: '50px 1% 0 1%' }}>
    
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
          dispatch(user({ info: 'sent all data' }))
        }}
      >
        refresh
      </Button>
      {contextHolder}
     <Lists data={data} />
    </div>
  )
}

export default App
