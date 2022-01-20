import User from './components/user/User'
import Statistics from './components/statistics/Statistics'
import FriendList from './components/friendList/FriendList'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import userList from './user.json'
import dataList from './data.json'
import friends from './friends.json'
import transactions from './transactions.json'

export default function App() {
    return  <div>
        <User
  avatar={userList.avatar}
  name={userList.username}
  tag={userList.tag}
  location={userList.location}
  followers={userList.stats.followers}
  likes={userList.stats.likes}
  views={userList.stats.views}

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




