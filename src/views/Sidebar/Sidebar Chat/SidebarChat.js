import React from 'react';
import './SidebarChat.css';
import { Avatar } from '@mui/material';

function SidebarChat() {
  return (
    <div className='sidebarChat'>
        <Avatar />
        <div className='sidebarChat__info'>
            <h2>Contact Name</h2>
            <p>This was the last message sent...</p>
        </div>
    </div>
  )
}

export default SidebarChat