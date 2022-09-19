import PropTypes from 'prop-types';
import { FriendList, FriendItem, IsOnline, Name } from './Friends.styled';

export default function Friends({ friends }) {
  return (
    <FriendList>
      {friends.map(e => (
        <FriendItem key={e.id}>
          <IsOnline status={e.isOnline}></IsOnline>
          <img src={e.avatar} alt="User avatar" width="48" />
          <Name>{e.name}</Name>
        </FriendItem>
      ))}
    </FriendList>
  );
}

Friends.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
