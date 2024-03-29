import {FC, useEffect, useState, useRef} from "react";
import { NavLink } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import "./Menu.scss";

import { useDispatch } from "react-redux";
import { logOut } from "../../features/auth/authSlice";
import { deleteMe } from "../../features/me/meSlice";
import { ILink } from "../header/Header";

interface MenuProps {
  links?: ILink[];
}

const Menu:FC<MenuProps> = (props) => {

  const dispatch = useDispatch();

  const {links} = props;

  // const [isAuth, setIsAuth] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState(false);
  const burgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
   return () => clearAllBodyScrollLocks();
  }, []);

  useEffect(() => {
    if (burgerRef) {
      if (isOpen) {
        disableBodyScroll(burgerRef);
      } else {
        enableBodyScroll(burgerRef);
      }
    }
   }, [isOpen]);

  const onToggleMenu = () => {
    setIsOpen(isActive => !isActive);
  }

  const classNameActive = isOpen ?  ' active' : '';

  const renderList = () => {
    if (links?.length && links?.length > 0) {
      return (
        links?.map((link, i) => {
          if (link.name === 'Выход') {
            return <li key={i} onClick={() => {dispatch(logOut()); dispatch(deleteMe())}}>
                    <NavLink to={link.url} className="header__link">{link.name}</NavLink>
                   </li>
          } else {
            return <li key={i}>
                    <NavLink to={link.url} className="header__link">{link.name}</NavLink>
                   </li>
          }
        }
      )
        // links?.map((link, i) => (
        //   <li key={i}>
        //       <NavLink to={link.url} className="header__link">{link.name}</NavLink>
        //   </li>
        // ))
      )
    } else {
      return (
        <div>Что-то пошло не так :c</div>
      )
    }
  }

  return (
    <>
      <div className={`header__burger ${classNameActive}`}
           onClick={() => onToggleMenu()}
           ref={burgerRef}>
        <span></span>
      </div>
      <nav className={`header__menu ${classNameActive}`}>
        <ul className="header__list">
          {renderList()}
        </ul>
      </nav>
    </>
  )
}

export default Menu;