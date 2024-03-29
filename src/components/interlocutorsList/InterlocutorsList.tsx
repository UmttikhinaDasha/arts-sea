import { FC } from "react";
import InterlocutorItem from "../interlocutorItem/InterlocutorItem";
import "./InterlocutorLists.scss";
import { IUser } from "../followersMW/FollowersMW";

interface InterlocutorsListProps {
  interlocutors?: IUser[];
}

const InterlocutorsList:FC<InterlocutorsListProps> = ({interlocutors}) => {

  const renderItems = () => {
    return interlocutors?.map(user => (
      <li key={user?.id} className="interlocutor">
        <InterlocutorItem username={user?.username} avatar={user?.avatar}/>
      </li>
    ))
  }

  return (
    <ul className="interlocutors-list">
      {renderItems()}
    </ul>
  )
}

export default InterlocutorsList;