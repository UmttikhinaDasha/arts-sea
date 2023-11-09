import { FC } from "react";

import Menu from "../menu/Menu";
import "./Header.scss";

interface HeaderProps {
  menuLinks?: string[]; 
}

const Header:FC<HeaderProps> = ({menuLinks}) => {

  return (
    <div className="header__hat">
      <div className="header__container">
        <div className="header__body">
          <a href="#" className="header__logo"  tabIndex={0}>HuntArt</a>
          <Menu links={menuLinks}/>
        </div>
      </div>        
    </div>
  )
}

export default Header;