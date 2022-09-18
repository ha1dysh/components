import { data, user, friends } from 'json';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import Friends from './Friends/Friends';

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
      <Statistics title="Upload stats" stats={data} />
      <Friends friends={friends} />
    </div>
  );
};
