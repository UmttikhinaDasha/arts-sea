import { useForm, SubmitHandler } from "react-hook-form";
import "../authForm/AuthForm.scss";
import { NavLink, useNavigate } from "react-router-dom";
import {useRegistrationMutation} from "../../features/api/authApiSlice"
// import { signUp } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

type Inputs = {
  username: string
  // email: string
  password: string
}

const RegisterForm = () => {
  const [error, setError] = useState('');
  const [registration, {isLoading}] = useRegistrationMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {register, handleSubmit, formState: {errors, isSubmitSuccessful}} = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)

    try {
      const userData = await registration(data).unwrap()
      console.log(userData)
      // dispatch(signUp({...userData}))
      setError('')
      navigate("/auth");
    } catch (err) {
      console.log(err)
      setError(err?.data?.username)
      console.log(error)
    }
  };

  return (
    <div className="auth-wrapper">
      <h1>Зарегистрироваться:</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
        
        <div>
          <label htmlFor="username">Имя пользователя:</label>
          <input
            id="username"
            className="auth-form__name-input"
            type="text" 
            placeholder="Введите имя" 
            {...register( "username", {required: "Данное поле обязательно для заполнения"})}
            aria-invalid={errors.username ? "true" : "false"} 
            />
        </div>
        {errors.username?.type === "required" && <p role="alert" className="alert-msg">{errors.username.message}</p>}
        
        {/* <div>
          <label htmlFor="email">Электронная почта:</label>
          <input
            id="email"
            className="auth-form__email-input"
            type="email" 
            placeholder="Введите почту" 
            {...register( "email", {required: "Данное поле обязательно для заполнения"})}
            aria-invalid={errors.email ? "true" : "false"} 
            />
        </div>
        {errors.email?.type === "required" && <p role="alert" className="alert-msg">{errors.email.message}</p>} */}

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
        {isLoading && <p style={{textAlign: "center", margin: "10px auto", fontWeight: "700"}}>Загрузка...</p>}
        {error && <p style={{textAlign: "center", margin: "10px auto", fontWeight: "700"}}>{error}</p>}
      </form>
      <NavLink to="/auth" className="auth_link">Уже зарегистрированы? <span>Авторизируйтесь</span></NavLink>
    </div>
  )
}

export default RegisterForm;