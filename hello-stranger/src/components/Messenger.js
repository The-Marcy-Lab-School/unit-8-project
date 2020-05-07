import React, {useState, useContext} from 'react'
import axios from 'axios'
import {ChatContext} from '../contexts/ChatContext'
import '../../node_modules/bulma/css/bulma.css'
const key = 'CC91zkHM9HUug3a3U7m0qbTcETA'

const Messenger = () => {
    const [message, setMessage] = useState("")
    const [chat, setChat] = useContext(ChatContext)
    
    const send = async (apiKey, userMessage) => {
        
      try {
        const response = await axios.get(`https://www.cleverbot.com/getreply?key=${apiKey}&input=${userMessage}&callback=ProcessReply&cs=MXYxCTh2MQlBdldZQkJFVkVBWEsJMUZ2MTU4ODc4NjUxMQk2NHZIZXkuCTY0aVlvIG11amVyLgk=`)
        const length = response.data.length 
        const aiResponse = JSON.parse(response.data.substring(13, length - 4)).clever_output
        setChat((chat) => [...chat, {message: userMessage, author: "You"}, {message: aiResponse, author: "Stranger"}])
      } catch (error) {
        console.error(error);
      }
        
    }
    
    return (
            <div className="messageField">
                <div className="field">
                  <div className="control">
                    <input 
                    className="input is-primary" 
                    type="text" 
                    placeholder="Say anything..."
                    onChange={(e) => setMessage(e.target.value)}
                    />
                    
                  </div>
                </div>
                <button onClick={() => send(key, message)} className="button is-primary">Send</button>
            </div>
        )
}

export default Messenger