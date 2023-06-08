import PropTypes from 'prop-types';
import './Profile.css';

export const Profile = ({
  name = 'John Doe',
  avatar,
  tag,
  location = 'Planet Earth',
  stats: { followers, views, likes },
  // stats,
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar"></img>
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li>
          <span className="profileLabel">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="profileLabel">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="profileLabel">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.number,
};
