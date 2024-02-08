
import Header from "../header/Header";
import RegisterForm from "../registerForm/RegisterForm";

const RegisterPage = () => {

  return (
    <>
      <header className="header">
        <Header menuLinks={[{url:"/users/0", name:"Профиль"}, {url:"/messanger", name:"Сообщения"}]}/>
      </header>
      <main className="main">
        <RegisterForm/>
      </main>
    </>
  )
}

export default RegisterPage;