import "./App.css";
import userData from "../data/userData.json";
import { Profile } from "./Profile/Profile";
import friends from "../data/friends.json";
import { FriendList } from "./FriendList/FriendList";
import transactions from "../data/transactions.json";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        margin: 20,
        flexDirection: "column",
        gap: 48,
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20",
        color: "#010101",
      }}
    >
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
export default App;
