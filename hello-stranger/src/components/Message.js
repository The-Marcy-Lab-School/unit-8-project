import React from 'react'
import '../../node_modules/bulma/css/bulma.css'

const Message = (props) => {
    return (
            <div className={props.author}>
                <div className="card">
                  <div className="card-content">
                    <p className="title">
                      {props.message}
                    </p>
                    <p className="subtitle">
                      {props.author}
                    </p>
                  </div>
                </div>
            </div>
        )
}

export default Message