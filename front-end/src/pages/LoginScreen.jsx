// Style
import "./LoginScreen.css";
import logo from "../assets/Title.png";
import LoginForm from "../components/LoginForm";

const LoginScreen = () => {
  return (
    <div className="container">
      <img src={logo} alt="logo" className="logo" />

      <LoginForm />
    </div>
  );
};

export default LoginScreen;
