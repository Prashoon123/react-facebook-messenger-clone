import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['Hi', 'Hello', 'Hello Prashoon']);
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt("Please enter your name"))
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    // BEM naming convention
    <div className="app">
      <h1>Yooooo, let's build the Facebook Messenger Clone🚀</h1>
      <h2>Welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>
      {
        messages.map(message => (
          <Message text={message} />
        ))
      }
    </div>
  );
}

export default App;
