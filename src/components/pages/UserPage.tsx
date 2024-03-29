import { useState, useDeferredValue, useEffect} from "react";
import { useLoaderData, useParams } from "react-router-dom";

import { getUserById } from "../../services/ApiService";

import Header from "../header/Header";
import Gallery from "../gallery/Gallery";
import ArtInfoMW from "../artInfoMW/ArtInfoMW";
import Wallpaper from "../wallpaper/Wallpaper";
import UserInfoSection from "../userInfoSection/UserInfoSection";
import PublishMW from "../publishMW/PublishMW";
import PriceList from "../pricelistMW/PriselistMW";
import FollowersMW from "../followersMW/FollowersMW";
import SettingProfileMW from "../settingProfileMW/SettingProfileMW";

import { useDispatch, useSelector } from "react-redux";
import { selectIsActive, selectId } from "../../features/me/meSlice";
import { useImQuery } from "../../features/api/authApiSlice";
import { useGetUserQuery } from "../../features/user/userApiSlice";
import { UseDispatch } from "react-redux";
import { setMe } from "../../features/me/meSlice";

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

  const dispatch = useDispatch();
  let {userId} = useParams();
  const me = useImQuery();
  // const myId = useSelector(selectId)
  // let myId = useSelector(selectId)

  const [isActive, setIsActive] = useState(!!localStorage.getItem('user'))
  const [menuLinks, setMenuLinks] = useState([{url:"/auth", name:"Вход"}, {url:"/registration", name:"Регистрация"}]);
  const [myId, setMyId] = useState(me?.data?.id)
  const [isMine, setIsMine] = useState(false)

  // if (typeof me.data != 'undefined') {
  //   // console.log('me')
  //   // console.log(me?.data)
  //   console.log('if')
  //   dispatch(setMe(me?.data))
  //   myId = me?.data?.id
  // }

  useEffect(() => {
    if (typeof me.data != 'undefined') {
      // console.log('me')
      // console.log(me?.data)
      // console.log('first useEffect')
      dispatch(setMe(me?.data))
      setMyId(me?.data?.id)
    }
  }, [])

  useEffect(() => {
    if (isActive) {
      // setMyId(me?.data?.id)
      console.log(`id: ${myId}`)
  
      if (userId == myId) {
        setIsMine(true);
        setMenuLinks([{url:`/`, name:"Главная"}, {url:"/messanger", name:"Сообщения"}, {url:"/", name:"Выход"}]);
      } else {
        setMenuLinks([{url:`/`, name:"Главная"}, {url:`/users/${myId}`, name:"Профиль"}, {url:"/messanger", name:"Сообщения"}, {url:"/", name:"Выход"}]);
      }
    } else {
      setMenuLinks([{url:"/auth", name:"Вход"}, {url:"/registration", name:"Регистрация"}])
    }
  }, [isActive])


  const {data: user, isFetching} = useGetUserQuery(userId);
  // console.log(user)

  
  const userData = useLoaderData();
  console.log(userData?.arts)

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

  const [profileModalClose, setProfileModalClose] = useState<boolean>(true);

  const onSetProfileModalOpen = () => {
    setProfileModalClose(false);
  }

  const onSetProfileModalClose = () => {
    setProfileModalClose(true);
  }
  //end-modal-block------------------------------------------------------

  return (
    <>
      <header className="header" style={{position: "static", overflowX: "hidden"}}>
        <Header menuLinks={menuLinks}/>
        <Wallpaper wallpaper={user?.profile?.wallpaper}/>
        <UserInfoSection isMine={isMine} user={user} onSetModalOpen={onSetPriceListModalOpen} onSetPublishModalOpen={onSetPublishModalOpen} onSetFollowersModalOpen={onSetFollowersModalOpen} onSetProfileModalOpen={onSetProfileModalOpen}/>
      </header>
      <main className="main" style={{paddingTop: "0px"}}>
        <Gallery onSetModalOpen={onSetModalOpen} images={userData?.arts}/>
        {modalClose ? null : <ArtInfoMW imgSrc={debounceImgSrc} onSetModalClose={onSetModalClose}/>}
        {publishModalClose ? null : <PublishMW onSetModalClose={onSetPublishModalClose}/>}
        {priceListModalClose ? null : <PriceList onSetModalClose={onSetPriceListModalClose}/>}
        {followersModalClose ? null : <FollowersMW onSetModalClose={onSetFollowersModalClose}/>}
        {profileModalClose ? null : <SettingProfileMW onSetModalClose={onSetProfileModalClose}/>}
      </main>
    </>
  )
}

export function loader({params}) {
  const id = params?.userId;
  console.log("loader " + id);

  // const { data: post, isFetching, isSuccess } = useGetUserQuery(id);
  return getUserById('2');
}