import { FC } from "react";
import { getComments } from "../../services/ApiService";
import Chat from "../chat/Chat";
import "./CommentsSection.scss";

interface CommentsSectionProps {
  height?: string;
  placeholder?: string;
}

const STANDARD_HEIGHT = "506px"
const DEFAULT_PLACEHOLDER = "Введите комментарий..."

const CommentsSection:FC<CommentsSectionProps> = ({height=STANDARD_HEIGHT, placeholder=DEFAULT_PLACEHOLDER}) => {
 const YOUR_USER_NAME = 'Имя_пользователя';

  const renderInput = () => {
    return  <div className="chat__input-block">
              <input type="text" className="chat__input" placeholder={placeholder}/>
            </div>
  }

  const renderComments = () => {

    const comments = getComments();

      return (
        <ul className="chat__comments-list">
          {
            comments.map((comment) => {
              let classNames = "chat__comment";
              if (comment.username === YOUR_USER_NAME) {
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