import React from 'react';
import { Row, Col, Card, Avatar, Button, Typography, Divider } from 'antd';
import { EnterOutlined, UserOutlined } from '@ant-design/icons';
const { Text } = Typography;

const ChatBubble = ({content, timestamp, thread, handleReply}) => {
  return (
    <Row
      justify="end"
      style={{
        margin: '2vh',
        maxWidth: '45vh'
      }}
    >
      <Col span={6}>
        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Col>
      <Col span={18}>
        <Card
          size="small"
          style={{
            width: '40vh',
          }}
        >
          <Row justify="space-around">
            <Col span={4}>
              <Text style={{ margin: 'auto 0' }} type="success" strong>Me</Text>
            </Col>
            <Col span={12}>
              <Text type="secondary" style={{ margin: 'auto' }}>
                {thread
                  ? `${thread.id.getHours()}:${thread.id.getMinutes()}`
                  : `${timestamp.getHours()}:${timestamp.getMinutes()}`
                }
              </Text>
            </Col>
          </Row>
          <Divider style={{ margin: '1vh 0' }}/>
          <Row justify="start">
            <Col span={20}>
              {thread ? thread.replies.map((t) => {
                return (
                  <>
                    {t.content}
                    <Divider />
                  </>
                )
              }) : content}
            </Col>
          </Row>
          <Row justify="end">
            <Col span={8}>
              <Button
                type="link"
                icon={<EnterOutlined />}
                onClick={() => handleReply(thread ? thread.id : timestamp)}
              />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

export default ChatBubble;
