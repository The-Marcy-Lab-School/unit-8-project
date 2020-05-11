import React, {useState, useContext} from 'react'
import axios from 'axios'
import {ChatContext} from '../contexts/ChatContext'
import '../../node_modules/bulma/css/bulma.css'
const key = 'API KEY HERE'

const Messenger = () => {
    const [message, setMessage] = useState("")
    const [chat, setChat] = useContext(ChatContext)
    
    const postMessage = (userMessage, prevChat) => {
      setChat((prevChat) => [...prevChat, {message: userMessage, author: "You"}])
    }
    
    const send = async (apiKey, userMessage, prevChat) => {
        
      try {
        const response = await axios.get(`https://www.cleverbot.com/getreply?key=${apiKey}&input=${userMessage}&callback=ProcessReply&cs=MXYxCTh2MQlBdldZQkJFVkVBWEsJMUZ2MTU4ODc4NjUxMQk2NHZIZXkuCTY0aVlvIG11amVyLgk=`)
        const length = response.data.length 
        const aiResponse = JSON.parse(response.data.substring(13, length - 4)).clever_output
        setChat((prevChat) => [...prevChat, {message: aiResponse, author: "Stranger"}])
        
      } catch (error) {
        console.error(error);
      }
        
    }
    
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          
          <div className="field">
            <div className="control">
              <input 
              id="messenger"
              className="input is-primary" 
              type="text" 
              placeholder="Say anything..."
              onChange={(e) => setMessage(e.target.value)}
              />
              
            </div>
          </div>
          <button 
          id="submit"
          onClick={() => {
          postMessage(message, chat)
          send(key, message, chat)
          }} 
          className="button is-primary"
          >Send</button>
            
        </div>
      </footer>
            
        )
}

export default Messenger
