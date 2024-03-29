import { useForm, SubmitHandler } from "react-hook-form";
import "./AuthForm.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useLoginMutation, useImQuery } from "../../features/api/authApiSlice";
import { useDispatch } from "react-redux";
import { logIn } from "../../features/auth/authSlice";
import { setMe } from "../../features/me/meSlice";
import { useState } from "react";

type Inputs = {
  username: string
  password: string
}

const AuthForm = () => {
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const [login, isFetching] = useLoginMutation();
  const dispatch = useDispatch();
  const {register, handleSubmit, formState: {errors, isSubmitSuccessful}} = useForm<Inputs>({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onChange'
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)

    try {
      const userData = await login(data).unwrap()
      dispatch(logIn({...userData}))
      setError('')
      navigate('/')
    } catch (err) {
      console.log(err)
      setError(err?.data?.detail)
    }
  };

  return (
    <div className="auth-wrapper">
      <h1>Авторизироваться:</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
        
        <div>
          <label htmlFor="username">Имя пользователя:</label>
          <input
            id="username"
            className="auth-username-input"
            type="text" 
            placeholder="Введите имя" 
            {...register( "username", {required: "Данное поле обязательно для заполнения"})}
            aria-invalid={errors.username ? "true" : "false"} 
            />
        </div>
        {errors.username?.type === "required" && <p role="alert" className="alert-msg">{errors.username.message}</p>}

        <div>
          <label htmlFor="password">Пароль:</label>
          <input
            id="password"
            className="auth-form__password-input"
            type="password" 
            placeholder="Введите пароль" 
            {...register( "password", {required: "Данное поле обязательно для заполнения"})}
            aria-invalid={errors.password ? "true" : "false"} 
            />
        </div>
        {errors.password?.type === "required" && <p role="alert" className="alert-msg">{errors.password.message}</p>}
        

        <input type="submit" className="submit-btn"/>
        {/* {isSubmitSuccessful && <p style={{textAlign: "center", margin: "10px auto", fontWeight: "700"}}>Данные успешно отправлены</p>} */}
        {/*{isFetching && <p style={{textAlign: "center", margin: "10px auto", fontWeight: "700"}}>Загрузка...</p>}*/}
        {error && <p style={{textAlign: "center", margin: "10px auto", fontWeight: "700"}}>Неверный логин или пароль</p>}
      </form>
      <NavLink to="/registration" className="auth_link">Нет профиля? <span>Зарегистрируйтесь</span></NavLink>
    </div>
  )
}

export default AuthForm;