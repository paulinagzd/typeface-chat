# README.md
## Typeface Coding Challenge - Paulina G. Davalos
## Running App
1. Install dependencies

   `npm install`

2. Start the application

   `npm start`

## Examples
#### Rendering messages
![](Screenshot%202023-08-08%20at%208.53.56.png)

### Assumptions
- Message sender being Me
- Threaded view in the same page (no pop-up)
- Unlimited threading
- Questions asked: adding design libraries and storing in localStorage

### Things I wish I added
1. A specific file for styling, everything is currently inline. It would require:
   1. Adding classNames to components
   2. Creating some `styles.css` file
2. Working unit tests
   1. I’ve been working with thorough TypeScript tests for a while; ramping up to JavaScript tests again requires more time than I should spend in the challenge. I would’ve liked to test some basic cases like:
      1. Rendering messages
      2. Rendering threads
      3. Rendering an empty container
   2. There are commented tests on the `ChatBubble.test.js` file as an example
3. Threaded View Pop-Up
   1. I developed a threaded view within the chat messages, I took some inspiration from Slack but didn’t implement an extra view.
      1. I would have liked to do that but I realized I had a different idea for threads too late along the way.
      2. It would require some sort of simple collapsible menu from *antd*, or just an extra component with the view.
      3. However, I think my approach was quite harder than the thread because it involved lots of array and object handling while re-rendering threaded messages and keeping track of the last sent threads.
4. Saving chat to localStorage
   1. After reaching out and asking this question, I decided to not save the chats to localStorage due to the array handling being an irrelevant process in the key points.
5. General folder structure
   1. I feel like it would have been nice to have a bit more structure to the folder directories but also fear that it might be too much for the amount of files in this repository.
   2. Examples of folders that could be added: hooks, styles, types (for structs), etc.
6. Timestamp tinkering
   1. Noticed the timestamp conversion does not include zeros, turning :09 minutes into :9
   2. I really like adding the moment library to edit dates and times, but for the purpose of this challenge I used pure JS.

### Design/framework decisions
I tried keeping it as simple as possible to avoid any extra frameworks and keep it almost at pure React. I decided to use [Ant Design](https://ant.design/components/overview) (design library) only to spend less time on styling while keeping components cohesive.
