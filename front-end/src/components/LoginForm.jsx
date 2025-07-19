import "./LoginForm.css";

import mail from "../assets/mail.png";
import access from "../assets/access.png";

const LoginForm = () => {
  return (
    <div className="form_container">
      <div className="form_header">
        <h1>Acesse sua conta</h1>
        <p>Informe seu e-mail e senha para entrar</p>
      </div>

      <div className="form_label">
        <label htmlFor="email">
          <h1>E-mail</h1>
          <span>
            <img src={mail} alt="" />
          <p>Seu e-mail cadastrado</p>
          </span>
          <input className="form_input" type="text" name="email" id="email" />
        </label>
        <label htmlFor="password">
          <h1>Senha</h1>
          <span>
            <img src={access} alt="" />
          <p>Sua senha de acesso</p>
          </span>
          <input className="form_input" type="password" name="password" id="password" />
        </label>
      </div>
      <input type="submit" className="login_button" value="Acessar"></input>

    </div>
  );
};

export default LoginForm;
