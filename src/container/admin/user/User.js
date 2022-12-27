import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import action from '../../../rtk/actions'
import {
  Button,
  message,
} from 'antd'

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
          {contextHolder}
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

     <Lists data={data} />
    </div>
  )
}

export default App
