import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import action from '../../../rtk/actions'
import { Button, message, Row, Col } from 'antd'
import Lists from './List'
const App = () => {
  const [data, setData] = useState([])
  const [messageApi, contextHolder] = message.useMessage()
  const dispatch = useDispatch()
  const state = useSelector(({ main: { user } }) => user)
  const {
    main: { user },
  } = action

  console.log({ state })

  useEffect(() => {
    const { data, loading } = state
    let { users, message, recieved } = data
    if (!loading && recieved)
      messageApi.open({ type: 'success', content: message })
    if (loading) messageApi.open({ type: 'loading', content: `please wait` })

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
