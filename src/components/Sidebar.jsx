import React from 'react'

export default function ({tabs, logo, avatar, points, currentTab, handleChange}) {
  return (
    <div className="sidebar">
      <div className='tabs'>
        <img className="logo" src={logo} />
        {tabs.map(tab => (
          <div key={tab.id} className={`tab ${currentTab === tab.name && 'active'}`} onClick={() => handleChange(tab.name)}><img className="icon" src={tab.icon}/>{tab.component}</div>
        ))}
        <button className="tweet-button">Tweet</button>
        </div>
        <div className="account">
          <img className="avatar" src={avatar} />
          <div className="account-info">
            <p>Someone</p>
            <p style={{opacity: 0.5, fontSize:'10px'}}>@Someone</p>
          </div>
          <img className="points" src={points}/>
        </div>
      
      </div>
  )
}
