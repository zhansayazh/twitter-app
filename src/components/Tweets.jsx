import React from 'react'

export default function Tweets({tweet, tweets, setTweets, contentId, avatar, currentTab}) {
  const handleDelete = () => {
    setTweets(prev => tweets.filter(item => item.id !== tweet.id))
}
  return (
    <div>
      {currentTab === "Home" && contentId === "For you" && 
        <div className="tweets-style">
          <img width={48} height={48} src={avatar}/>
          <div className='post'>
            <p>Someone @Someone</p><br></br>
            <p>{tweet.comment}</p>
            
          </div>
          <button className="delete-button" onClick={handleDelete}>x</button>
        </div>
     }
    </div>
  )
}
