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
      <h4>Zad 01</h4>
      <Profile
        name={username}
        avatar={avatar}
        tag={tag}
        location={location}
        stats={stats}
      />

      {/*------------------------02--------------------------*/}

      <h4>Zad 02</h4>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      {/*------------------------03--------------------------*/}

      <h4>Zad 03</h4>
      <FriendList friends={friends} />

      {/*------------------------04--------------------------*/}

      <h4>Zad 04</h4>
      <TransactionHistory items={transactions} />
    </div>
  );
};
