import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
const root = document.getElementById('root')

ReactDOM.render(<App />, root)
window.scroll(0, document.getElementById('chatBox').scrollHeight)
const input = document.getElementById("messenger");
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("submit").click();
  }
});
