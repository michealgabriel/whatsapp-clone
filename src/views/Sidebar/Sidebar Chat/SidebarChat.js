import React from 'react';
import './SidebarChat.css';
import { Avatar } from '@mui/material';

function SidebarChat() {
  return (
    <div className='sidebarChat'>
        <Avatar />
        <div className='sidebarChat__info'>
            <h2>WhatsApp Bot</h2>
            <p>Type a message and press enter...</p>
        </div>
    </div>
  )
}

export default SidebarChat