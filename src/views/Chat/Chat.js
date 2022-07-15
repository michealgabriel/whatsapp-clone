import { Avatar, IconButton } from '@mui/material';
import React, { useRef, useState } from 'react';
import './Chat.css';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MicIcon from '@mui/icons-material/Mic';
import axios from '../../axios/axios';

function Chat({ messages }) {

  const [inputMessage, setInputMessage] = useState("");
  const chatBodyRef = useRef(null);

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post('/whatsapp/api/messages/new', {
      message: inputMessage,
      name: "Contact User",
      timestamp: "Just now...",
      received: false
    });

    setInputMessage("");

    chatBodyRef.current.scrollIntoView();
  }

  return (
    <div className='chat'>

      <div className='chat__header'>
          <Avatar />

          <div className='chat__headerInfo'>
            <h3>WhatsApp Bot</h3>
            <p>Last seen at...</p>
          </div>

          <div className='chat__headerRight'>
            <IconButton>
                <SearchIcon />
            </IconButton>
            <IconButton>
                <AttachFileIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
          </div>
      </div>


      <div className='chat__body' ref={chatBodyRef}>
        {
          messages.map((eachMessage) => {
              return <p className={`chat__message ${eachMessage.received === false ? 'chat__owner' : ''}`}>
              <span className='chat__name'>{eachMessage.name}</span>
              {eachMessage.message}
              <span className='chat__timestamp'>{eachMessage.timestamp}</span>
              </p>
          })
        }
      </div>


      <div className='chat__footer'>
              <InsertEmoticonIcon />
              <AttachFileIcon />
          <form>
            <input value={inputMessage} onChange={e => setInputMessage(e.target.value)} placeholder='Type a message' type="text" />
            <button onClick={sendMessage} type='submit'>Send a message</button>
          </form>
              <MicIcon/>
      </div>

    </div>
  )
}

export default Chat