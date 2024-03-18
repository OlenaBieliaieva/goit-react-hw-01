import { FriendListItem } from "./FriendListItem";
import css from "../FriendList/FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => (
        <li className={css.item} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            status={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};
