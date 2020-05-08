import React, {useContext} from 'react'
import {ChatContext} from '../contexts/ChatContext'
import Message from './Message'
const chat = document.getElementById('chatBox')

const Chat = () => {
    const [chat] = useContext(ChatContext)
    

    return (
            <div id="chatBox" className="chatBox">
                {chat.map((content) => <Message message={content.message} author={content.author}/>)}
            </div>
        )
}

export default Chat