import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMe'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const Post = ({profilePic, message, timestamp, imageName, username}) => {
    return (
      <div className="post">
        <div className="post__top">
          <Avatar className="post__avatar" src={profilePic} />
          <div className="post__topinfo">
            <h3>{username}</h3>
            <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
          </div>
        </div>

        <div className="post__bottom">
          <p>{message}</p>
          {/* image */}
        </div>

        <div className="post__options">
          <div className="post__option">
            <ThumbUpIcon />
            <p>Like</p>
          </div>
          <div className="post__option">
            <ChatBubbleOutlineIcon />
            <p>Comment</p>
          </div>
          <div className="post__option">
            <NearMeIcon />
            <p>Share</p>
          </div>
          <div className="post__option">
            <AccountCircleIcon />
            <ExpandMoreOutlined />
          </div>
        </div>
      </div>
    );
}

export default Post
