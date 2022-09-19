import { data, user, friends, transactions } from 'json';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import Friends from './components/Friends/Friends';
import Transactions from 'components/Transactions/Transactions';

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
      <Transactions transactions={transactions} />
    </div>
  );
};
