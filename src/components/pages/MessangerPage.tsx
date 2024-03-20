import { useState, useDeferredValue, useMemo } from "react";
import { useLoaderData } from "react-router-dom";

import { getInterlocutors } from "../../services/ApiService";
import Header from "../header/Header";
import SearchInput from "../searchInput/SearchInput";
import InterlocutorsList from "../interlocutorsList/InterlocutorsList";
import Chat from "../chat/Chat";
import CommentsSection from "../commentsSection/CommentsSection";
import InterlocutorItem from "../interlocutorItem/InterlocutorItem";

import { useSelector } from "react-redux";
import { selectIsActive, selectId } from "../../features/me/meSlice";
import { useImQuery } from "../../features/api/authApiSlice";

import { NavLink, useNavigate } from "react-router-dom";

import "./MessangerPage.scss";

export const MessangerPage = () => {
  // const navigSate = useNavigate();
  // const isActive = useSelector(selectIsActive)
  // console.log(isActive)
  // const id = useSelector(selectId)
  // console.log(id)
  // const menuLinks = isActive ? [{url:`/`, name:"Главная"}, {url:`/users/${id}`, name:"Профиль"}, {url:"/", name:"Выход"}] : 
  // [{url:"/auth", name:"Вход"}, {url:"/registration", name:"Регистрация"}]

  const isActive = !!localStorage.getItem('user')
  console.log(`isActive: ${isActive}`)
  const me = useImQuery();
  let menuLinks;
  if (isActive) {
    const id = me?.data?.id
    console.log(`id: ${id}`)
    menuLinks = [{url:`/`, name:"Главная"}, {url:`/users/${id}`, name:"Профиль"}, {url:"/", name:"Выход"}];
  } else {
    menuLinks = [{url:"/auth", name:"Вход"}, {url:"/registration", name:"Регистрация"}]
    // navigate('/')
  }

  const interlocutorsData = useLoaderData();
  // console.log(interlocutorsData);

  //search-block---------------------------------------------------------
  const [searchValue, setSearchValue] = useState<string>('');

  const debounceSearchValue = useDeferredValue(searchValue);

  const onSetSearchValue = (value: string) => {
    setSearchValue(value);
  }

  const foundContent = useMemo(findUser, [debounceSearchValue]);

  function findUser():[{id?:number, username?:string, avatar?:string}] | [] {
    if (searchValue === '') {
      return [];
    } else {
      return interlocutorsData?.filter(user => user.username.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) > -1);
    }
  }
  //end-search-block-----------------------------------------------------

  return (
    <>
      <header className="header" style={{position: "static", overflowX: "hidden"}}>
        <Header menuLinks={menuLinks}/>
      </header>
      <main className="main messanger-wrapper" style={{paddingTop: "0px"}}>

        <div className="interlocutors-list-block">
          <div className="input-wrapper">
            <SearchInput  className="search__input not-absolute" 
                          placeholder="Введите Ваш запрос..." 
                          disabled={false} 
                          onSetSearchValue={onSetSearchValue} 
                          // isPopupOpen={isPopupOpen}
                          />
          </div>
          
          <InterlocutorsList interlocutors={searchValue.length > 0 ? foundContent : interlocutorsData}/>
        </div>

        <div className="messanger">
          {/* <Chat/> */}
          <InterlocutorItem username={interlocutorsData[2].username} avatar={interlocutorsData[2].avatar}/>
          <CommentsSection height="calc(80vh - 40px)" placeholder="Введите сообщение..."/>
        </div>

      </main>
    </>
  )
}

export function loader() {
  return getInterlocutors();
}