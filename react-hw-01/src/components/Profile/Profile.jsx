import css from '../Profile/Profile.module.css'

const Profile = props => {

  return (
    <>
      <div className={css.profileTile}>
        <div>
            <img
                src={props.image}
                alt="User avata"
                className={css.profileImg}
            />
            <p className={css.profileName}>{props.name}</p>
            <p>@{props.tag}</p>
            <p>{props.location}</p>
        </div>

        <ul className={css.profileStats}>
            <li className={css.profileStat}>
                <span>Followers</span>
                <span>{props.stats.followers}</span>
            </li>
            <li className={css.profileStat}>
                <span>Views</span>
                <span>{props.stats.views}</span>
            </li>
            <li className={css.profileStat}>
                <span>Likes</span>
                <span>{props.stats.likes}</span>
            </li>
        </ul>
    </div>

    </>
  )
}

export default Profile