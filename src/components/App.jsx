import { Profile } from './Profile/Profile.jsx';
import user from 'jsons/user.json';

export const App = () => {
  return (
    <div
      style={{
        backgroundColor: '#e7ecf2',
        padding: '20px 0',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
