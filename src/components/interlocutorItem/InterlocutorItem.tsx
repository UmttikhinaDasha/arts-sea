import { FC } from "react";

import Avatar from "../avatar/Avatar";
import "./InterlocutorItem.scss";
import { IUser } from "../followersMW/FollowersMW";


const InterlocutorItem:FC<IUser> = ({username, avatar}) => {

  return (
    <div className="interlocutor__item">
      <Avatar img={avatar}/>
      <a className="interlocutor__username" href="#">{username}</a>
    </div>
  )
}

export default InterlocutorItem;