import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import logo from './assets/logo.png'
import homeIcon from './assets/home-icon.png'
import hashIcon from './assets/hash-icon.png'
import messageIcon from './assets/mail-icon.png'
import notificationIcon from './assets/bell-icon.png'
import bookmarkIcon from './assets/bookmark-icon.png'
import listIcon from './assets/file-text-icon.png'
import userIcon from './assets/user-icon.png'
import moreIcon from './assets/more-icon.png'
import avatar from './assets/avatar.png'
import points from './assets/3points.png'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Tweets from './components/Tweets';
import Search from './components/Search';


function App() {
  const [currentTab, setCurrentTab] = useState("Home");
  const [contentId, setContentId] = useState("For you");
  const [tweets, setTweets] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filteredTweets, setFilteredTweets] = useState(tweets);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (searchValue) { 
      setFilteredTweets([...tweets.filter(tweet => tweet.comment.includes(searchValue))])
    } else { 
      setFilteredTweets(tweets);
    }
  }, [searchValue])

  useEffect(() => { // connect filteredTodos with original todos
    setFilteredTweets(tweets);
  }, [tweets])

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  }

  const handleChange = (tab) => {
    setCurrentTab(prev => tab)
  }

  const handleChangeContent = (content) => {
    setContentId(prev => content)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }


  const handleAddPost = () => {
    const tweet = {
      id: {uuidv4},
      comment: inputValue
    }
    setTweets(prev => [...prev, tweet])
    setInputValue("");
  }

  const TABS = [
    {
      id: 1,
      name: "Home",
      icon: homeIcon,
      component: <p>Home</p>
    },
    {
      id: 2,
      name: "Explore",
      icon: hashIcon,
      component: <p>Explore</p>
    },
    {
      id: 3,
      name: "Notifications",
      icon: notificationIcon,
      component: <p>Notifications</p>
    },
    {
      id: 4,
      name: "Messages",
      icon: messageIcon,
      component: <p>Messages</p>
    },
    {
      id: 5,
      name: "Bookmarks",
      icon: bookmarkIcon,
      component: <p>Bookmarks</p>
    },
    {
      id: 6,
      name: "Lists",
      icon: listIcon,
      component: <p>Lists</p>
    },
    {
      id: 7,
      name: "Profile",
      icon: userIcon,
      component: <p>Profile</p>
    },
    {
      id: 8,
      name: "More",
      icon: moreIcon,
      component: <p>More</p>
    }
  ]

  const contents = [
    {
      id: 1,
      name: "For you",
      component: <p>For you</p>
    },
    {
      id: 2,
      name: "Following",
      component: <p>Following</p>
    }
  ]

  return (
    <div className="App">
      <Sidebar 
        key={TABS.id} 
        tabs={TABS} 
        logo={logo} 
        avatar={avatar} 
        points={points} 
        currentTab={currentTab} 
        handleChange={handleChange}
      />
      <div className="content-tweets">
      <Content 
        key={contents.id} 
        contents={contents} 
        currentTab={currentTab} 
        contentId={contentId} 
        handleChangeContent={handleChangeContent}
        avatar={avatar}
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleAddPost={handleAddPost}
        
      />
      {filteredTweets.map((tweet) => 
        <Tweets
          tweet={tweet} 
          key={tweet.id}
          setTweets={setTweets}
          tweets={tweets}
          contentId={contentId}
          avatar={avatar}
          currentTab={currentTab}
        />
      )}
      </div>
      <Search 
        searchValue={searchValue}
        handleSearch={handleSearch}
      />
    </div>
  )
}

export default App
