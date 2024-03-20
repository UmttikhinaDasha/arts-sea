import { FC, useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ModalWindow from "../modalWindow/ModalWindow";

import { UseSelector, useSelector, useDispatch } from "react-redux";
import { selectProfile, selectUsername } from "../../features/me/meSlice";

import "./SettingProfileMW.scss";
import { useUpdateProfileMutation } from "../../features/api/authApiSlice";
import { setMe } from "../../features/me/meSlice";

interface SettingProfileMWProps {
  onSetModalClose?(): void;
}

type Inputs = {
  description: string
  avatar: File
  wallpaper: File
}

const SettingProfileMW:FC<SettingProfileMWProps> = ({onSetModalClose}) => {
  const profile = useSelector(selectProfile);
  const username = useSelector(selectUsername);
  // console.log(profile)

  const [updateProfile, isFetching] = useUpdateProfileMutation();
  const dispatch = useDispatch();

  const {register, handleSubmit, formState: {errors, isSubmitSuccessful}} = useForm<Inputs>({
    defaultValues: {
      description: profile?.description || "",
      avatar: profile?.avatar || null,
      wallpaper: profile?.wallpaper || null,
    }
  });

  const update = async (newProfile) => {
    try {
      console.log(newProfile)
      const userData = await updateProfile(newProfile).unwrap()
      console.log("userData")
      console.log(userData)
      if (userData) {
        // dispatch(setMe({...userData}))
      }
      
      // setError('')
      // navigate('/')
    } catch (err) {
      console.log("userData error")
      console.log(err)
      // setError(err?.data?.detail)
    }
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // console.log(selectedAvatar)
    // console.log(selectedWallpaper)
    // console.log(data)
    const newProfile = {
      // username,
      profile: {
        description: data.description,
        avatar: selectedAvatar,
        wallpaper: selectedWallpaper
      }
    }
    console.log(newProfile)

    // const formData = new FormData();
    // Object.keys(newProfile).forEach(key => formData.append(key, newProfile[key]));

    update(newProfile)
    
  };

  //for avatar
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const avatarPicker = useRef<HTMLInputElement | null>(null);

  const handleChangeAvatar = (e) => {
    setSelectedAvatar(e.target.files[0]);
  }

  const handlePickAvatar = () => {
    avatarPicker?.current?.click();
  }

  const { onChange, name, ref } = register('avatar'); 

  //for wallpaper
  const [selectedWallpaper, setSelectedWallpaper] = useState(null);
  const wallpaperPicker = useRef<HTMLInputElement | null>(null);

  const handleChangeWallpaper = (e) => {
    setSelectedWallpaper(e.target.files[0]);
  }

  const handlePickWallpaper = () => {
    wallpaperPicker?.current?.click();
  }

  const { onChange: onChangeWallpaper, name: nameWallpaper, ref: refWallpaper } = register('wallpaper'); 

  return (
    <ModalWindow onSetModalClose={onSetModalClose}>
      <form onSubmit={handleSubmit(onSubmit)} className="publish-form">
        <div className="publish-form__file-picker">
          <button onClick={handlePickAvatar} className="pick-file-btn" type="button">Выберите файл для аватара</button>
          <input
            type="file"
            accept="image/*, .png, .jpg, .gif, .web"
            className="hidden"
            onChange={e => {
              handleChangeAvatar(e)
              onChange(e)
            }}
            name={name}
            ref={(e) => {
              ref(e)
              avatarPicker.current = e
            }}
            aria-invalid={errors.avatar ? "true" : "false"} 
            />
          {selectedAvatar && (<p>{selectedAvatar?.name}</p>)}
        </div>
        {errors.avatar?.type === "required" && <p role="alert" className="alert-msg">{errors.avatar.message}</p>}

        <div className="publish-form__file-picker">
          <button onClick={handlePickWallpaper} className="pick-file-btn" type="button">Выберите файл для обоев</button>
          <input
            type="file"
            accept="image/*, .png, .jpg, .gif, .web"
            className="hidden"
            onChange={e => {
              handleChangeWallpaper(e)
              onChangeWallpaper(e)
            }}
            name={nameWallpaper}
            ref={(e) => {
              refWallpaper(e)
              wallpaperPicker.current = e
            }}
            aria-invalid={errors.wallpaper ? "true" : "false"} 
            />
          {selectedWallpaper && (<p>{selectedWallpaper?.name}</p>)}
        </div>
        {errors.wallpaper?.type === "required" && <p role="alert" className="alert-msg">{errors.wallpaper.message}</p>}

        <textarea
          className="publish-form__description"
          // type="text" 
          placeholder="Описание профиля..." 
          {...register("description")}
          // aria-invalid={errors.tags ? "true" : "false"} 
          />
        {/* {errors.tags && <p role="alert"  className="alert-msg">{errors.tags.message}</p>} */}
        
        
        <input type="submit" className="submit-btn"/>
        {/* {isSubmitSuccessful && <p style={{textAlign: "center", margin: "10px auto", fontWeight: "700"}}>Данные успешно отправлены</p>} */}
      </form>
    </ModalWindow>
  )
}

export default SettingProfileMW;