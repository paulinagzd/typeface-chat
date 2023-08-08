import React, { useEffect, useState } from 'react';
import { SendOutlined } from '@ant-design/icons';
import { Row, Input, Button, Popover } from 'antd';
import ChatBubble from '../ChatBubble';

const ChatContainer = () => {
  const [typedMessage, setTypedMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [threading, setThreading] = useState(false);
  const [threadIndex, setThreadIndex] = useState(-1);
  const [threadedReply, setThreadedReply] = useState('');

  const handleReply = (timestamp) => {

    const ti = messages.findIndex((x) => x.id === timestamp)
    setThreadIndex(ti)

    if (!messages[ti].replies) {
      // modifying single message into thread array
      const msgs = [...messages];
      const repliedMsg = {
        ...msgs[ti],
        thread: 1,
        t_id: 1,
      }
      msgs[ti] = {id: timestamp, replies: [repliedMsg]};

      setMessages(msgs)
      setThreading(true)
      setThreadedReply(repliedMsg.content)
    } else {
      // only updating state
      const repliedMsgIndex = messages[ti].replies.length - 1
      setThreading(true)
      setThreadedReply(messages[ti].replies[repliedMsgIndex].content)
    }
  }

  useEffect(() => {
    setTypedMessage('')
  }, [messages])

  const handleChange = (e) => {
   setTypedMessage(e.target.value)
  }

  const handleSend = () => {
    const currentMessage = {
      id: new Date(),           // timestamp
      content: typedMessage,
      thread: 0,
      t_id: 0,
    }

    if (threading) {
      // updating thread and handling thread id assignment
      const msgs = [...messages];
      const lastMsg = msgs[threadIndex].replies.length - 1
      const currentMsg = {
        ...currentMessage,
        t_id: msgs[threadIndex].replies[lastMsg].t_id + 1,
      }
      msgs[threadIndex].replies = [...msgs[threadIndex].replies, currentMsg];

      // updating state
      setMessages(msgs)
      setThreadIndex(-1)
      setThreading(false)
      setThreadedReply('')
    } else {
      setMessages([...messages, currentMessage])
    }
  }

  return (
    <>
      <div
        style={{
          minHeight: '100%',
          margin: '1vh auto',
          overflowX: 'hidden',
        }}
      >
        {messages?.map(m => {
          return (
            <Row
              justify="end"
              style={{
                margin: '2vh',
              }}
            >
              <>
                { m.replies ? (
                  <ChatBubble
                    thread={m}
                    handleReply={handleReply}
                  />
                ) : (
                  <ChatBubble
                    content={m.content}
                    timestamp={m.id}
                    handleReply={handleReply}
                  />
                )}
              </>
            </Row>
        )})}
      </div>
      <Row>
        <div style={{
          height: '7vh',
          width: '100%',
          position: 'fixed',
          bottom: '0',
          background: '#f0f0f0',
          display: 'inline-flex',
        }}>
          <Popover
            content={threadedReply}
            title="Replying to"
            open={threading}
          >
            <Input
              style={{
                margin: '1vh 1vh 2vh',
                width: '90%',
              }}
              placeholder="Write your message here"
              onChange={handleChange}
              onPressEnter={handleSend}
              value={typedMessage}
            />
          </Popover>
          <Button
            style={{
              margin: '1vh 1vh 2vh',
            }}
            type="primary"
            icon={<SendOutlined />}
            disabled={typedMessage === ''}
            onClick={handleSend}
          >
            Send
          </Button>
        </div>
      </Row>
    </>
  );
}

export default ChatContainer;
