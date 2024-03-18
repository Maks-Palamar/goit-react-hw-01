import FriendListItem from "../FriendListItem/FriendListItem";
import css from "../FriendListItem/FriendListItem.module.css"

const FriendList = props => {

  return (
    <>
        <ul className={css.friendlist}>
          {props.friends && props.friends.map((friend) => {
              return <li className={css.friendItem} key={friend.id}>
                          <FriendListItem friend={friend}/>
                      </li>;
          })}
        </ul>
    </>
  )
}

export default FriendList