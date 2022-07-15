
import './App.css';
import Sidebar from './views/Sidebar/Sidebar';
import Chat from './views/Chat/Chat';
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import axios from './axios/axios';


function App() {

  // state vars
  const [messages, setMessages] = useState([]);

  // Get all chat messages -> one-time operation
  useEffect(() => {
    axios.get('/whatsapp/api/messages')
    .then(response => {
      setMessages(response.data);
    });
  }, []);

  // Get any new message -> one-time operation
  useEffect(() => {
      // Pusher Configs
      const pusher = new Pusher('45bad6741ce120f11b02', {
        cluster: 'mt1'
      });

      const channel = pusher.subscribe('messages_channel');
      channel.bind('inserted', function(newMessage) {
        // alert(newMessage);

        setMessages([...messages, newMessage]);
      });
      
      //cleanup -> unsubscribe and unbind from channel & event
      return () => {
        channel.unbind_all();
        channel.unsubscribe();
      }

  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className='app__body'>
        <Sidebar />

        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
