import { FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import SearchField from "../searchField/SearchField";

import './Search.scss';

export interface SearchProps {
  onSetSearchValue?(value?: string): void;
  onSetIsPopupOpen?(isOpen?: boolean): void;
  foundValues?: string[] | string;
  isPopupOpen?: boolean;
}

const Search:FC<SearchProps> = ({onSetSearchValue, onSetIsPopupOpen, foundValues, isPopupOpen}) => {

  return (
    <div className="search">
      <div className="search__container">
        <SearchField onSetSearchValue={onSetSearchValue} onSetIsPopupOpen={onSetIsPopupOpen} foundValues={foundValues} isPopupOpen={isPopupOpen}/>
        <button className="filter-btn">
          <FontAwesomeIcon icon={faFilter} className="filter-icon"/>
        </button>
      </div>
    </div>
  )
}

export default Search;