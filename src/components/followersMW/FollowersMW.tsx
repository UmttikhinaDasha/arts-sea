import { FC, useState, useDeferredValue, useMemo } from "react";
import ModalWindow from "../modalWindow/ModalWindow";
import InterlocutorsList from "../interlocutorsList/InterlocutorsList";
import { getInterlocutors } from "../../services/ApiService";
import SearchInput from "../searchInput/SearchInput";
import "./FollowersMW.scss";


interface FollowersMWProps {
  onSetModalClose?(): void;
}

const FollowersMW:FC<FollowersMWProps> = ({onSetModalClose}) => {

  //search-block---------------------------------------------------------

  const interlocutorsData = getInterlocutors();

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
    <ModalWindow onSetModalClose={onSetModalClose}>

      <div className="followers-wrapper">
        <div className="input-wrapper" style={{border: "none"}}>
        <SearchInput  className="search__input not-absolute" 
                      placeholder="Введите Ваш запрос..." 
                      disabled={false} 
                      onSetSearchValue={onSetSearchValue} 
                      // isPopupOpen={isPopupOpen}
                      />
        </div>
        <InterlocutorsList interlocutors={searchValue.length > 0 ? foundContent : interlocutorsData}/>
      </div>
    
    </ModalWindow>
  )
}

export default FollowersMW;