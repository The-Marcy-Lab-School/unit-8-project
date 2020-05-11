import React, {useContext} from 'react'
import {ChatContext} from '../contexts/ChatContext'
import Message from './Message'

const Chat = () => {
    const [chat] = useContext(ChatContext)

    return (
            <div id="chatBox" className="chatBox">
                {chat.map((content, index) => <Message key={index} message={content.message} author={content.author}/>)}
            </div>
        )
}

export default Chat