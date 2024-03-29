import { useState, useMemo, useDeferredValue} from "react";
import { useLoaderData } from "react-router-dom";

import { getArts } from "../../services/ApiService";

import Header from "../header/Header";
import Search from "../search/Search";
import FeedsSwitcher from "../feedsSwitcher/FeedsSwitcher";
import Gallery, { IImage } from "../gallery/Gallery";
import ArtInfoMW from "../artInfoMW/ArtInfoMW";

import { useSelector } from "react-redux";
import { selectIsActive, selectId } from "../../features/me/meSlice";
import { useImQuery } from "../../features/api/authApiSlice";


import "./MainPage.scss";

const MainPage = () => {

  const isActive = !!localStorage.getItem('user')
  // console.log(`isActive: ${isActive}`)
  const me = useImQuery();
  let menuLinks;
  if (isActive) {
    const id = me?.data?.id
    // console.log(`id: ${id}`)
    menuLinks = [{url:`/users/${id}`, name:"Профиль"}, {url:"/messanger", name:"Сообщения"}, {url:"/", name:"Выход"}];
  } else {
    menuLinks = [{url:"/auth", name:"Вход"}, {url:"/registration", name:"Регистрация"}]
  }

  const imagesData:IImage[] = useLoaderData() as IImage[];
  // console.log(imagesData)

   //data-block-----------------------------------------------------------
   const tags = ['#uch', '#fantasy', '#modern', '#vampire', '#ciberpunk'];
   //end-data-block-------------------------------------------------------

   //search-block---------------------------------------------------------
   const [searchValue, setSearchValue] = useState<string>('');
   const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

   const debounceSearchValue = useDeferredValue(searchValue);

   const onSetSearchValue = (value: string) => {
     setSearchValue(value);
   }

   const onSetIsPopupOpen = (isOpen: boolean) => {
     setIsPopupOpen(isOpen);
   }

   const foundContent = useMemo(findTag, [debounceSearchValue, tags]);

   function findTag():string[] | string {
     if (debounceSearchValue === '') {
       return '';
     } else {
       return tags.filter(tag => tag.indexOf(debounceSearchValue) > -1);
     }
   }
   //end-search-block-----------------------------------------------------

  //modal-block----------------------------------------------------------
  const [modalClose, setModalClose] = useState<boolean>(true);
  const [imgSrc, setImgSrc] = useState<string>("./src/app/resources/images/default_hor.jpg"); //./src/assets/default_hor.jpg
  const debounceImgSrc = useDeferredValue(imgSrc);

  const onSetModalOpen = (imgSrc : string) => {
    setImgSrc(imgSrc);
    setModalClose(false);
  }

  const onSetModalClose = () => {
    setModalClose(true);
  }
  //end-modal-block------------------------------------------------------

  return (
    <>
      <header className="header">
        <Header menuLinks={menuLinks}/>
        <Search onSetSearchValue={onSetSearchValue}
                onSetIsPopupOpen={onSetIsPopupOpen}
                foundValues={foundContent}
                isPopupOpen={isPopupOpen}/>
        {/** feedsNames лучше вынести в константу или создать enum (ts) */}
        <FeedsSwitcher feedsNames={["новые работы", "популярное", "подписки"]}/>
      </header>
      <main className="main">
        <Gallery onSetModalOpen={onSetModalOpen} images={imagesData}/>
        {modalClose ? null : <ArtInfoMW imgSrc={debounceImgSrc} onSetModalClose={onSetModalClose}/>}
      </main>
    </>
  )
}

export function loader() {
  return getArts();
}

export default MainPage;