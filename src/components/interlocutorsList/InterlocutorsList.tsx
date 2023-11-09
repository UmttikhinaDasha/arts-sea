import { FC } from "react";
import InterlocutorItem from "../interlocutorItem/InterlocutorItem";
import "./InterlocutorLists.scss";

interface InterlocutorsListProps {
  interlocutors?: [{id?:number, username?:string, avatar?:string}] | [];
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