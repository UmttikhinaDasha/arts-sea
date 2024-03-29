import { FC } from "react";

import Menu from "../menu/Menu";
import "./Header.scss";
import { NavLink } from "react-router-dom";

export interface ILink{
    url: string
    name: string
}

interface HeaderProps {
  menuLinks?: ILink[];
}

const Header:FC<HeaderProps> = ({menuLinks}) => {

  return (
    <div className="header__hat">
      <div className="header__container">
        <div className="header__body">
          <NavLink to="/" className="header__logo"  tabIndex={0}>HuntArt</NavLink>
          <Menu links={menuLinks}/>
        </div>
      </div>
    </div>
  )
}

export default Header;