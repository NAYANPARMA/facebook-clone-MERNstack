import React from 'react'
import Story from './Story'
import './StoryReel.css'

const StoryReel = () => {
    return (
      <div className="storyreel">
        <Story
          image="https://i.pinimg.com/originals/f7/c8/50/f7c850cb8681430ea1cf826ecd3c5b1b.jpg"
          profileSrc="https://i.pinimg.com/474x/e6/1d/24/e61d2466fb0996d2d22b72a1558ca2db.jpg"
          title="Twice"
        />
        <Story
          image="https://i.pinimg.com/originals/24/e5/3f/24e53fb4a183d6a416194395c593d800.jpg"
          profileSrc="https://practicaltyping.com/wp-content/uploads/2019/11/llawliet.jpg"
          title="L'"
        />
      </div>
    );
}

export default StoryReel
