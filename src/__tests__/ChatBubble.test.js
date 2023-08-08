// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import ChatBubble from '../components/ChatBubble';

// const exampleProps = {
//   content: 'Lorem Ipsum',
//   timestamp: new Date(),
// }

// test('renders chat with expected attributes', () => {
//   render(<ChatBubble {...exampleProps} />);
//   const contentText = screen.getByText(exampleProps.content);
//   const timestampText = screen.getByText(
//     `${exampleProps.timestamp.getHours()}:${exampleProps.timestamp.getMinutes()}`
//   );

//   expect(contentText).toBeInTheDocument();
//   expect(timestampText).toBeInTheDocument();
// });

// test('renders chat thread with expected attributes', () => {
//   const otherProps = {thread: {id: exampleProps.timestamp, replies: [...exampleProps]}}

//   render(<ChatBubble {...otherProps} />);
//   const contentText = screen.getByText(otherProps.thread.replies[0].content);
//   const timestampText = screen.getByText(
//     `${otherProps.thread.id.getHours()}:${otherProps.thread.id.getMinutes()}`
//   );

//   expect(contentText).toBeInTheDocument();
//   expect(timestampText).toBeInTheDocument();
// });
