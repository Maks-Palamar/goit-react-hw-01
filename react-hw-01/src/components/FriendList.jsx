const FriendList = props => {

  return (
    <>
        <ul>
			{props.friends.map((friend) => {
                return <li key={friend.id}>
                            <div>
                                <img src={friend.avatar} alt="Avatar" width="48" />
                                <p>{friend.name}</p>
                                {friend.isOnline ? (<p>Online</p>) : (<p>Offline</p>)}
                            </div>
                        </li>;
			})}
          </ul>

    </>
  )
}

export default FriendList