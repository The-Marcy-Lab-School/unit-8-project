import React from 'react'
import '../../node_modules/bulma/css/bulma.css'

const Message = (props) => {
  const StrangerColor = {
    backgroundColor: '#3DDC84'
  }
  const userColor = {
    backgroundColor: '#51a0d5'
  }
   
    return (
            <div className={props.author}>
                <div style={props.author === 'You' ? userColor : StrangerColor} className="card">
                  <div className="card-content">
                    <p className="subtitle">
                      {props.author}
                    </p>
                    <p className="title">
                      {props.message}
                    </p>
                  </div>
                </div>
            </div>
        )
}

export default Message