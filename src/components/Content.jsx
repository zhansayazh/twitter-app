import React from 'react'
import earthIcon from '../assets/earth-logo.png'
import imgIcon from '../assets/img-logo.png'
import gifIcon from '../assets/gif-logo.png'
import questionIcon from '../assets/question-logo.png'
import stickersIcon from '../assets/stickers-logo.png'
import calendarIcon from '../assets/calendar-logo.png'

import '../App.css'


export default function Content({contents, currentTab, contentId, handleChangeContent, avatar, inputValue, handleInputChange, handleAddPost, setTweets, tweets, tweet}) {
  return (
    <div>
        {currentTab === "Home" && 
        <div className="tabs-of-content"><p>Home</p>
          <div className="contents">
          {contents.map(content => (
            <div key={content.id} className={`content ${contentId === content.name && 'active1'}`} onClick={() => handleChangeContent(content.name)}>
                {content.name}
              </div>
          ))}
        </div>

        {contentId === "For you" && 
        
        <div className="post-tweet">
          <img width={48} height={48} src={avatar}/>
          <div className="input">
            <div className="input-tweet">
              <input type="text" className="input-style" onChange={handleInputChange} placeholder="What's happening?" value={inputValue} />
              <div style={{display:"flex", alignItems:"center", columnGap:"10px" }}>
                <img width={16} height={16} src={earthIcon}/>
                <p style={{color:"#1DA1F2"}}>Everyone can reply</p>
              </div>
            </div>
            <div className="tweet-button-icons">
              <div className="icons-tweet">
                <img src={imgIcon} width={19} height={19}/>
                <img src={gifIcon} width={19} height={19}/>
                <img src={questionIcon} width={19} height={19}/>
                <img src={stickersIcon} width={19} height={19}/>
                <img src={calendarIcon} width={19} height={19}/>
              </div>
              <div>
              <button className="button-tweet" onClick={handleAddPost} >Tweet</button>
              </div>
            </div>
          </div>
          
          
        </div>}
        {contentId === "Following" && <h1>Following</h1>}

        </div>
        }

        {currentTab === "Explore" && <h1>Explore</h1>}
        {currentTab === "Notifications" && <h1>Notifications</h1>}
        {currentTab === "Messages" && <h1>Messages</h1>}
        {currentTab === "Bookmarks" && <h1>Bookmarks</h1>}
        {currentTab === "Lists" && <h1>Lists</h1>}
        {currentTab === "Profile" && <h1>Profile</h1>}
        {currentTab === "More" && <h1>More</h1>}
      </div>
  )
}
