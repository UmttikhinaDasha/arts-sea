import AuthForm from "../authForm/AuthForm";
import Header from "../header/Header";

const AuthPage = () => {

  return (
    <>
      <header className="header">
        <Header menuLinks={[{url:"/", name:"Главная"}, {url:"/registration", name:"Регистрация"}]}/>
      </header>
      <main className="main">
        <AuthForm/>
      </main>
    </>
  )
}

export default AuthPage;