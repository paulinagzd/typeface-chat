import logo from './logo.svg';
import './App.css';
import ChatContainer from './components/ChatContainer'

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <div style={{
          height: '100vh',
          minWidth: '100%',
          background: '#FFF',
          zIndex: '1',
        }}>
          <ChatContainer />
        </div>
      </header>
    </div>
  );
}

export default App;
