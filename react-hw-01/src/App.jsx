import Profile from './components/Profile'
import userData from "./userData.json";
import friends from "./friends.json";
import Friendlist from './components/FriendList'
import './App.css'

function App() {

  return (
    <>
      <Profile
      name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <Friendlist friends={friends}/>
    </>
  )
}

export default App

