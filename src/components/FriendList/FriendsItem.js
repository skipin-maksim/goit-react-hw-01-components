import React from "react";

import s from "./FriendList.module.scss";

function FriendsItem({ avatar, name, isOnline, id }) {
  const isOnlineClasses = isOnline ? s.statusOnline : s.statusNotOnline;

  return (
    <li key={id} className={s.item}>
      <span className={isOnlineClasses}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

export default FriendsItem;
