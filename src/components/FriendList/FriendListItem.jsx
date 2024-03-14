import clsx from "clsx"
import css from "../FriendList/FriendListItem.module.css"
const FriendListItem = props => {
  const { friend } = props;
  const isOnlineClass = friend.isOnline ? css.online : css.offline;
  return (
    <>
        <div >
            <img src={friend.avatar} alt="Avatar" width="48" />
            <p>{friend.name}</p>
        {/* {friend.isOnline ? (<p>Online</p>) : (<p>Offline</p>)} */}
            <p className={clsx({[isOnlineClass] : true})}>{friend.isOnline ? ('Online') : ('Offline')}</p>
        </div>
    </>
  )
}

export default FriendListItem