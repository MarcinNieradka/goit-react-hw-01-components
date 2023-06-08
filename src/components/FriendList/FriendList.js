// import PropTypes from 'prop-types';
import './FriendList.css';

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className="itemFriend">
      <span className="statusFriend">
        {isOnline ? <p>online</p> : <p>offline</p>}
      </span>
      <img src={avatar} alt="User avatar" className="friendAvatar"></img>
      <p className="name">{name}</p>
    </li>
  );
};

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};
