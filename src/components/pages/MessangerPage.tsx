import { useState, useDeferredValue, useMemo } from "react";
import { useLoaderData } from "react-router-dom";

import { getInterlocutors } from "../../services/ApiService";
import Header from "../header/Header";
import SearchInput from "../searchInput/SearchInput";
import InterlocutorsList from "../interlocutorsList/InterlocutorsList";
import Chat from "../chat/Chat";
import CommentsSection from "../commentsSection/CommentsSection";
import InterlocutorItem from "../interlocutorItem/InterlocutorItem";

import "./MessangerPage.scss";

export const MessangerPage = () => {
  const interlocutorsData = useLoaderData();
  console.log(interlocutorsData);

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
        <Header menuLinks={['Главная', 'Профиль']}/>
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