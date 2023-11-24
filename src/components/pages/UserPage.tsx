import { useState, useDeferredValue} from "react";
import { useLoaderData } from "react-router-dom";

import { getUserById } from "../../services/ApiService";

import Header from "../header/Header";
import Gallery from "../gallery/Gallery";
import ArtInfoMW from "../artInfoMW/ArtInfoMW";
import Wallpaper from "../wallpaper/Wallpaper";
import UserInfoSection from "../userInfoSection/UserInfoSection";
import PublishMW from "../publishMW/PublishMW";
import PriceList from "../pricelistMW/PriselistMW";
import FollowersMW from "../followersMW/FollowersMW";

type User = {
  id: string;
  userName: string;
  followers: number[];
  following: number[];
  rating: number;
  wallpaper: string;
  arts: [{id: number, src: string}]
}

export const UserPage = () => {

  const userData = useLoaderData();
  console.log(userData.arts)

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
  

  const [priceListModalClose, setPriceListModalClose] = useState<boolean>(true);

  const onSetPriceListModalOpen = () => {
    setPriceListModalClose(false);
  }

  const onSetPriceListModalClose = () => {
    setPriceListModalClose(true);
  }


  const [publishModalClose, setPublishModalClose] = useState<boolean>(true);

  const onSetPublishModalOpen = () => {
    setPublishModalClose(false);
  }

  const onSetPublishModalClose = () => {
    setPublishModalClose(true);
  }

  const [followersModalClose, setFollowersModalClose] = useState<boolean>(true);

  const onSetFollowersModalOpen = () => {
    setFollowersModalClose(false);
  }

  const onSetFollowersModalClose = () => {
    setFollowersModalClose(true);
  }
  //end-modal-block------------------------------------------------------

  return (
    <>
      <header className="header" style={{position: "static", overflowX: "hidden"}}>
        <Header menuLinks={[{url:"/", name:"Главная"}, {url:"/messanger", name:"Сообщения"}]}/>
        <Wallpaper wallpaper={userData?.wallpaper}/>
        <UserInfoSection onSetModalOpen={onSetPriceListModalOpen} onSetPublishModalOpen={onSetPublishModalOpen} onSetFollowersModalOpen={onSetFollowersModalOpen}/>
      </header>
      <main className="main" style={{paddingTop: "0px"}}>
        <Gallery onSetModalOpen={onSetModalOpen} images={userData?.arts}/>
        {modalClose ? null : <ArtInfoMW imgSrc={debounceImgSrc} onSetModalClose={onSetModalClose}/>}
        {publishModalClose ? null : <PublishMW onSetModalClose={onSetPublishModalClose}/>}
        {priceListModalClose ? null : <PriceList onSetModalClose={onSetPriceListModalClose}/>}
        {followersModalClose ? null : <FollowersMW onSetModalClose={onSetFollowersModalClose}/>}
      </main>
    </>
  )
}

export function loader({params}) {
  const id = params?.userId;
  console.log(id);
  return getUserById(id);
}