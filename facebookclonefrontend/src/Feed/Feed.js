import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender/MessageSender'
import Post from './Post/Post'
import StoryReel from './StoryReel/StoryReel'

const Feed = () => {
    return (
      <div className="feed">
        <StoryReel />
        <MessageSender />
        <Post
          profilePic="https://i.pinimg.com/474x/12/a0/f4/12a0f4398e5f7609c93327aedd7b8a0e.jpg"
          message="My first post"
          timestamp="1601493943737"
          imageName="imgName"
          username="warlock"
        />
      </div>
    );
}

export default Feed
