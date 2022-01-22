import User from './components/User/User'
import Statistics from './components/Statistics/Statistics'
import FriendList from './components/FriendList/FriendList'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import userList from './data/user.json'
import dataList from './data//data.json'
import friends from './data//friends.json'
import transactions from './data//transactions.json'

export default function App() {
    return  <div>
        <User
  avatar={userList.avatar}
  name={userList.username}
  tag={userList.tag}
  location={userList.location}
  stats={userList.stats}

        />
        <Statistics
            title="Upload stats"
            stats={dataList}
        />

        <FriendList friends={friends}
        />

        <TransactionHistory items={transactions} />;

    </div>
}




