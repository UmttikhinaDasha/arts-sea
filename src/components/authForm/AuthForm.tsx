import { useForm, SubmitHandler } from "react-hook-form";
import "./AuthForm.scss";
import { NavLink } from "react-router-dom";

type Inputs = {
  email: string
  password: string
}

const AuthForm = () => {
  const {register, handleSubmit, formState: {errors, isSubmitSuccessful}} = useForm<Inputs>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange'
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  };

  return (
    <div className="auth-wrapper">
      <h1>Авторизироваться:</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
        
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
      <NavLink to="/registration" className="auth_link">Нет профиля? <span>Зарегистрируйтесь</span></NavLink>
    </div>
  )
}

export default AuthForm;