
import React from 'react';
import './Sidebar.css';

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';

import {SearchOutlined} from '@mui/icons-material'

import SidebarChat from './Sidebar Chat/SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>

      <div className='sidebar__header'>
        <Avatar src="https://avatars.githubusercontent.com/u/99659402?v=4" />

        <div className='sidebar__headerRight'>
          <IconButton>
              <DonutLargeIcon />
          </IconButton>
          <IconButton>
              <ChatIcon />
          </IconButton>
          <IconButton>
              <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
          <SearchOutlined />
          <input placeholder='Search or start a new chat' type="text" />
        </div>
      </div>


      <div className='sidebar__chats'>
        <SidebarChat />
      </div>


    </div>
  )
}

export default Sidebar