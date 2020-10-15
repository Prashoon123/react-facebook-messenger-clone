import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import headerLogo from './headerLogo.png';
import headerlogo from './YQbyhl59TWY.ico';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    
  ]);
  const [username, setUsername] = useState('');

  // useState = variable in React
  // useEffect = run code ona condition in REACT

  useEffect(() => {
    // run once when the component loads
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, [])

  useEffect(() => {
    setUsername(prompt("Please enter your name"))
  }, []) // condition

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  // if (!username) {
  //   return (
  //     <h1>Please enter a username to continue, to enter a username simply refresh this page.</h1>
  //   )
  // }

  return (
    // BEM naming convention
    <div className="app">
      <img src={headerlogo} alt="" />
      <h1>Messenger</h1>
      <h2>Welcome {username}</h2>
      <form className="app__form">
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>
      <FlipMove>
      {
        messages.map(({id, message}) => (
          <Message key={id} username={username} message={message} />
        ))
      }
      </FlipMove>
    </div>
  );
}

export default App;
