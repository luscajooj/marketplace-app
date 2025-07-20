// Style
import "./LoginScreen.css";
import LoginForm from "../components/LoginForm";
import logo from "../assets/Title.png";
import background from "../assets/Background.png";

const LoginScreen = () => {
  return (
    <div className="container">
      <img src={logo} alt="logo" className="logo" />
      <img src={background} alt="background" className="background" />

      <LoginForm />
    </div>
  );
};

export default LoginScreen;
