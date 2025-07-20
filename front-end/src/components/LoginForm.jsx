import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./LoginForm.css";

import mail from "../assets/mail.png";
import access from "../assets/access.png";

const LoginForm = () => {
  const navigate = useNavigate();

  const [emailFocused, setEmailFocused] = useState(false);
  const [emailValue, setEmailValue] = useState("");

  const [passwordFocused, setPasswordFocused] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const shouldHideEmailLabel = emailFocused || emailValue.trim() !== "";
  const shouldHidePasswordLabel =
    passwordFocused || passwordValue.trim() !== "";

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailValue && (passwordValue => 6)) {
      navigate("/create-product");
    } else {
      alert("Você precisa de um email e senha válidos");
    }
  };

  return (
    <div className="form_container">
      <div className="form_header">
        <h1>Acesse sua conta</h1>
        <p>Informe seu e-mail e senha para entrar</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form_label">
          <label htmlFor="email">
            <h1>E-mail</h1>
            <span className={shouldHideEmailLabel ? "fade hidden" : "fade"}>
              <img src={mail} alt="" />
              <p>Seu e-mail cadastrado</p>
            </span>
            <input
              className="form_input"
              type="email"
              name="email"
              id="email"
              value={emailValue}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              onChange={(e) => setEmailValue(e.target.value)}
              required
            />
          </label>

          <label htmlFor="password">
            <h1>Senha</h1>

            <span
              className={`form_label-pass_span fade ${
                shouldHidePasswordLabel ? "hidden" : ""
              }`}
            >
              <img src={access} alt="" />
              <p>Sua senha de acesso</p>
            </span>

            <button
              type="button"
              className="view"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            ></button>

            <input
              className="form_input"
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={passwordValue}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              onChange={(e) => setPasswordValue(e.target.value)}
              required
            />
          </label>
        </div>

        <button type="submit" className="login_button">
          <span>Acessar</span>
          <span>→</span>
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
