import { Avatar, Input } from '@material-ui/core'
import React, { useState } from 'react'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import './MessageSender.css'

const MessageSender = () => {
    
    const [input, setInput] = useState('')
    const [image, setImage] = useState(null)

    const handleChange =(e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }
    const handleSubmit = () => {

    }
    return (
      <div className="messagesender">
        <div className="messagesender__top">
          <Avatar src="https://i.pinimg.com/474x/12/a0/f4/12a0f4398e5f7609c93327aedd7b8a0e.jpg" />
          <form>
            <input
              type="text"
              className="messagesender__input"
              placeholder="What's in your mind"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Input
              type="file"
              className="messagesender__fileselector"
              onChange={handleChange}
            />
            <button type="submit" onClick={handleSubmit}>
              Hidden Submit
            </button>
          </form>
        </div>
        <div className="messagesender__bottom">
          <div className="messagesender__option">
            <VideocamIcon style={{ color: "red" }} />
            <h3>Live Video</h3>
          </div>
          <div className="messagesender__option">
            <PhotoLibraryIcon style={{ color: "green" }} />
            <h3>Photo/Video</h3>
          </div>
          <div className="messagesender__option">
            <InsertEmoticonIcon style={{ color: "orange" }} />
            <h3>Feeling/Activity</h3>
          </div>
        </div>
      </div>
    );
}

export default MessageSender
