import React from 'react';



const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="message-input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="send-btn" onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default Input;