import { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import "./UserInfoSection.scss";
// import { UseSelector } from "react-redux";
// import { selectProfile } from "../../features/me/meSlice";

interface UserInfoSectionProps {
  isMine?: boolean;
  user?: null;
  onSetModalOpen?(): void;
  onSetPublishModalOpen?(): void;
  onSetFollowersModalOpen?(): void;
  onSetProfileModalOpen?(): void;
}


const UserInfoSection:FC<UserInfoSectionProps> = ({isMine, user, onSetModalOpen, onSetPublishModalOpen, onSetFollowersModalOpen, onSetProfileModalOpen}) => {


  return (
    <div className="user__container">

      <div className="userinfosection">
        
        <div className="avatar-container">
          <div className="userinfosection__avatar-wrapper">
            <img src={user?.profile?.avatar} alt="" className="userinfosection__avatar-img" />
          </div>
          <div className="userinfosection__username">{user?.username || "Имя пользователя"}</div>
          {/* <div className="rating">
            <FontAwesomeIcon icon={faStar} className="rating__icon"/>
            <span className="rating__value">{rating}</span>
          </div> */}
          <div className="followers">
            <FontAwesomeIcon icon={faUserGroup} className="followers__icon"/>
            <span className="followers__value">{user?.followers_count || 0}</span>
          </div>
        </div>

        <div className="btns-container">
        <button className="followers-btn" onClick={onSetFollowersModalOpen}>Подписчики</button>
          <button className="followering-btn" onClick={onSetFollowersModalOpen}>Подписки</button>
          <button className="open-pricelist-btn" onClick={e => onSetModalOpen?.()}>Открыть прайс-лист</button>
          
          {isMine ? 
          <>
            <button onClick={onSetPublishModalOpen}>Опубликовать работу</button>
            <button onClick={onSetProfileModalOpen}>Редактировать профиль</button>
          </>
          :
          <button className="message-btn">Написать пользователю</button>}
          
        </div>
      
      </div>

      <div className="user__description">{user?.profile?.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</div>

    </div>
    
  )
}

export default UserInfoSection;