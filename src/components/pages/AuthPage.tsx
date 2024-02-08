import AuthForm from "../authForm/AuthForm";
import Header from "../header/Header";

const AuthPage = () => {

  return (
    <>
      <header className="header">
        <Header menuLinks={[{url:"/users/0", name:"Профиль"}, {url:"/messanger", name:"Сообщения"}]}/>
      </header>
      <main className="main">
        <AuthForm/>
      </main>
    </>
  )
}

export default AuthPage;