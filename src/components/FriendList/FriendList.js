// import PropTypes from 'prop-types';

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li>
      <span className="status">
        {isOnline ? <p>online</p> : <p>offline</p>}
      </span>
      <img src={avatar} alt="User avatar" className="avatar"></img>
      <p className="name">{name}</p>
    </li>
  );
};

export const FriendList = ({ friends }) => {
  return (
    <ul>
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
