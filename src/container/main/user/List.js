import { Button, Collapse, List, Row, Col, Tag, Badge } from 'antd'
import { MailOutlined, PhoneOutlined } from '@ant-design/icons'
import { FaWhatsapp } from 'react-icons/fa'
import Activity from './Activity';
import moment from 'moment'
const { Panel } = Collapse

const Lists = (data) => {
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
                  if (key === 'Image') return null
                  let value = e[key]
                  if ('TimeAtCreated' === key || 'DateOfBirth' === key)
                    value = moment(value).format(
                      'dddd, MMMM Do YYYY, h:mm:ss a',
                    )

                  if (key === 'userType' || key === 'Active' || key === 'Block')
                    value = String(value)
                  if (key === 'referredBy')
                    value = `${value.MyId},${value.FirstName} ${value.LastName}`

                  if (key === 'Mobile')
                    value = (
                      <Row justify="space-between">
                        <Col span={24}>
                          <a href={`tel:+91 ${value}`}>
                            <PhoneOutlined /> {value}
                          </a>
                        </Col>
                        <Col span={24}>
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
                        </Col>
                      </Row>
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
                         <Activity user={e} />
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

export default Lists
