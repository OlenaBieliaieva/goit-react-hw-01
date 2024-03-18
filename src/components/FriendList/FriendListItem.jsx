import PropTypes from "prop-types";
import css from "./FriendList.module.css";
import clsx from "clsx";

export const FriendListItem = ({ status, name, avatar, variant }) => {
  const textStatus = status ? "Online" : "Offline";
  return (
    <div>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <span
        className={clsx(css[variant], {
          [css.isOnline]: status,
          [css.isOffline]: !status,
        })}
      >
        {textStatus}
      </span>
    </div>
  );
};

FriendListItem.propTypes = {
  status: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
};
