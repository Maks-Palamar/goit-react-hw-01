import Profile from './components/Profile'
import userData from "./userData.json"
import friends from "./friends.json"
import Friendlist from './components/FriendList'
import transactions from "./transactions.json"
import TransactionHistory from './components/TransactionHistory'
import './App.css'
import clsx from "clsx"

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
      <Friendlist friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  )
}

export default App

