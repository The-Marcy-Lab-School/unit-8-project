import React from 'react'
import Navbar from './components/Navbar'
import Messenger from './components/Messenger'
import Chat from './components/Chat'
import {ChatProvider} from './contexts/ChatContext'


import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ChatProvider>
        <div className="mainArea">
          <Chat />
        </div>
        <Messenger />
      </ChatProvider>
    </div>
  )
}

export default App
