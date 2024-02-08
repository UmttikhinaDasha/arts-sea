import { useForm, SubmitHandler } from "react-hook-form";
import "../authForm/AuthForm.scss";
import { NavLink } from "react-router-dom";

type Inputs = {
  name: string
  email: string
  password: string
}

const RegisterForm = () => {
  const {register, handleSubmit, formState: {errors, isSubmitSuccessful}} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  };

  return (
    <div className="auth-wrapper">
      <h1>Зарегистрироваться:</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
        
        <div>
          <label htmlFor="name">Имя пользователя:</label>
          <input
            id="name"
            className="auth-form__name-input"
            type="text" 
            placeholder="Введите имя" 
            {...register( "name", {required: "Данное поле обязательно для заполнения"})}
            aria-invalid={errors.name ? "true" : "false"} 
            />
        </div>
        {errors.name?.type === "required" && <p role="alert" className="alert-msg">{errors.name.message}</p>}
        
        <div>
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
        {errors.email?.type === "required" && <p role="alert" className="alert-msg">{errors.email.message}</p>}

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
        {isSubmitSuccessful && <p style={{textAlign: "center", margin: "10px auto", fontWeight: "700"}}>Данные успешно отправлены</p>}
      </form>
      <NavLink to="/auth" className="auth_link">Уже зарегистрированы? <span>Авторизируйтесь</span></NavLink>
    </div>
  )
}

export default RegisterForm;