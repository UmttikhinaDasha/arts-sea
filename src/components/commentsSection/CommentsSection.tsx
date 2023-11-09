import { FC } from "react";
import { getComments } from "../../services/ApiService";
import Chat from "../chat/Chat";
import "./CommentsSection.scss";

interface CommentsSectionProps {
  height?: string;
  placeholder?: string;
}

const CommentsSection:FC<CommentsSectionProps> = ({height="506px", placeholder="Введите комментарий..."}) => {

  const renderInput = () => {
    return  <div className="chat__input-block">
              <input type="text" className="chat__input" placeholder={placeholder}/>
            </div>
  }

  const renderComments = () => {

    const comments = getComments();

    const yoursUsername = 'Имя_пользователя';

      return (
        <ul className="chat__comments-list">
          {
            comments.map((comment) => {
              let classNames = "chat__comment";
              if (comment.username === yoursUsername) {
                classNames += " chat__comment--yours"
              }
              return (
                <li className={classNames} key={comment.id}>
                  <a className="chat__comm-author" href={comment.userPageLink}>{comment.username}</a>
                  <p className="chat__comm-content">{comment.commContent}</p>
                </li>
              )
            })
          }
        </ul>
      )
  }

  return (
    <div className="comments">
      <Chat renderInput={renderInput} renderMsgs={renderComments} height={height}/>
    </div>
  )
}

export default CommentsSection;