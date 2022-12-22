import React, { memo } from 'react'
import { List, Row, Col, Badge, Divider } from 'antd'
import { PhoneOutlined } from '@ant-design/icons'
import { FaWhatsapp } from 'react-icons/fa'
import moment from 'moment'

const getList = (data) => {
  return (
    <Row justify="space-between">
      {data.map((e, i) => {
        const keys = Object.keys(e)
        const { Lead ,user} = e
        const indx = keys.indexOf('date')
        keys.splice(indx, 1)
        keys.unshift('date')
        return (
          <Col xs={{ span: 23 }} md={{ span: 23 }} lg={{ span: 11 }}>
            <Divider />
            <Badge.Ribbon
              key={i}
              text={Lead}
              color={`#${Math.floor(100000 + Math.random() * 900000)}`}
            >
              <List
              header={`Added by ${user.FirstName} | +91${user.Mobile} `}
                size="small"
                bordered
                dataSource={keys}
                renderItem={(key) => {
                  if(key === `user`) return null;
                  let value = e[key]
                  if (key === 'number')
                    value = (
                      <>
                        <a href={`tel:+91 ${String(value)}`}>
                          <PhoneOutlined /> {String(value)}
                        </a>
                        <br />
                        <a
                          style={{ color: 'green' }}
                          href={`https://wa.me/+91${String(value)}?text=Hi `}
                          data-action="share/whatsapp/share"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <FaWhatsapp />
                          {String(value)}
                        </a>
                      </>
                    )
                  if (key === 'date')
                    value = moment(value).format(
                      'dddd, MMMM Do YYYY, h:mm:ss a',
                    )

                  if (
                    key === 'demo Date' ||
                    key === 'time' ||
                    key === 'freeTime'
                  )
                    value = String(value[0]) + '\n' + String(value[1])

                  if (key !== `number`) value = String(value)
                  return (
                    <List.Item key={String(i)}>
                      <Row
                        style={{ padding: '1%', width: '100%' }}
                        justify="space-between"
                      >
                        <Col span={7}>{key}</Col>
                        <Col span={15}>{value}</Col>
                      </Row>
                    </List.Item>
                  )
                }}
              />
            </Badge.Ribbon>
          </Col>
        )
      })}
    </Row>
  )
}

const Lists = ({ data }) => {
  //  console.log({data}, Array.isArray(data.lists))
  const client = Array.isArray(data?.lists)?data?.lists?.map(({user ,lead, date }) => {
    let obj = { ...lead, date ,user}
    if (Object.keys(obj).includes('ExtraTeacher')) {
      let val = obj['ExtraTeacher']
      delete obj['ExtraTeacher']
      let Extra = {}
      val.map(({ type, value }) => {
        Extra[type] = value
        return null
      })
      return { ...obj, ...Extra }
    }

    if (Object.keys(obj).includes('ExtraParent')) {
      let obj = { ...lead, date }
      if (Object.keys(obj).includes('ExtraParent')) {
        let val = obj['ExtraParent']
        delete obj['ExtraParent']
        let Extra = {}
        val.map(({ type, value }) => {
          Extra[type] = value
          return null
        })
        return { ...obj, ...Extra }
      }
    }
    return obj
  }):[]

  // console.log({client})
  return getList(client)
}

export default memo(Lists)
