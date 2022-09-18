import PropTypes from 'prop-types';
import css from './Friends.module.css';

export default function Friends({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(e => (
        <li className={css.item} key={e.id}>
          <span
            className={e.isOnline === true ? css.online : css.offline}
          ></span>
          <img
            className={css.avatar}
            src={e.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{e.name}</p>
        </li>
      ))}
    </ul>
  );
}

Friends.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
