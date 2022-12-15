import React, { useState } from 'react'
import { Button, Divider, Modal, Select, Row, Col, List } from 'antd'

const parent = [
  { title: 'p How to Talk', notes: 'How you wangt You can !' },
  { title: 'p How to Talk', notes: 'How you wangt You can !' },
  { title: 'p How to Talk', notes: 'How you wangt You can !' },
  { title: 'p How to Talk', notes: 'How you wangt You can !' },
  { title: 'p How to Talk', notes: 'How you wangt You can !' },
]
const teacher = [
  { title: 't How to Talk', notes: 'How you wangt You can !' },
  { title: 't How to Talk', notes: 'How you wangt You can !' },
  { title: 't How to Talk', notes: 'How you wangt You can !' },
  { title: 't How to Talk', notes: 'How you wangt You can !' },
  { title: 't How to Talk', notes: 'How you wangt You can !' },
]

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [data, setData] = useState(parent)

  return (
    <>
      <Button
        style={{ color: '#4ed973', width: '100%' }}
        onClick={() => {
          setIsModalOpen(true)
        }}
        type="dashed"
      >
        HELP
      </Button>
      <Modal
        width={1000}
        centered
        title={
          <Select
            allowClear
            showSearch
            onChange={(e) => {
              if (e === 'teacher') setData(teacher)
              if (e === 'parent') setData(parent)
            }}
            style={{ width: '80%' }}
            placeholder="parent"
            options={['student', `teacher`, 'parent', 'other'].map((e) => ({
              value: e,
              label: e,
            }))}
          />
        }
        open={isModalOpen}
        onOk={() => {
          setIsModalOpen(false)
        }}
        onCancel={() => {
          setIsModalOpen(false)
        }}
      >
        <List
          // bordered
          loading={false}
          dataSource={data}
          renderItem={({ title, notes }, i) => (
            <List.Item key={i}>
              <Row style={{ width: '100%' }} justify="space-between">
                <Col xs={{ span: 23 }} md={{ span: 6 }} lg={{ span: 6 }}>
                  {title}
                </Col>
                <Col xs={{ span: 23 }} md={{ span: 16 }} lg={{ span: 16 }}>
                  {notes}
                </Col>
              </Row>
            </List.Item>
          )}
        />
      </Modal>
    </>
  )
}
export default App
