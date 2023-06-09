import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  const { username, avatar, tag, location, stats } = user;
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/*------------------------01--------------------------*/}

      <Profile
        name={username}
        avatar={avatar}
        tag={tag}
        location={location}
        stats={stats}
      />

      {/*------------------------02--------------------------*/}

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      {/*------------------------03--------------------------*/}

      <FriendList friends={friends} />

      {/*------------------------04--------------------------*/}

      <TransactionHistory items={transactions} />
    </div>
  );
};
