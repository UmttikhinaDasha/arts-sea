
import Header from "../header/Header";
import RegisterForm from "../registerForm/RegisterForm";

const RegisterPage = () => {

  return (
    <>
      <header className="header">
        <Header menuLinks={[{url:"/", name:"Главная"}, {url:"/auth", name:"Авторизация"}]}/>
      </header>
      <main className="main">
        <RegisterForm/>
      </main>
    </>
  )
}

export default RegisterPage;