import { Button } from "react-bootstrap";
import { DivForm, FormOption, FormStyled, InputStyled } from "../styles/loginStyles";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <DivForm className="register">
      <h2>
        Prepárate para conocer un mundo de fantasía en esta única tierra llena de personas y paisajes inolvidables.
      </h2>
      <FormStyled>
        <h4 className="register">Haz parte de la familia ViVi</h4>
        <div className="mt-3">
          <InputStyled
            type="text"
            placeholder="Ingresa tu nombre completo"
          />
          <InputStyled
            type="email"
            placeholder="Ingresa tu correo electrónico"
          />
          <InputStyled type="password" placeholder="Ingresa tu contraseña" />
          <InputStyled type="text" placeholder="¿De dónde nos visitas?" />
        </div>
        <Button variant="success" className="mt-3 px-4 py-1" type="submit">
          Regístrate
        </Button>
        <FormOption className="register">
          <span>¿Ya tienes cuenta?</span>
          <Link to="/login">Iniciar sesión</Link>
          <Button variant="light" className="mt-3 px-5 google">
            <img src={google} alt="google" />
            Regístrate con Google
          </Button>
          <Button className="mt-3 px-5 fb">
            <img src={facebook} alt="facebook" />
            Regístrate con Facebook
          </Button>
        </FormOption>
      </FormStyled>
    </DivForm>
  );
};
