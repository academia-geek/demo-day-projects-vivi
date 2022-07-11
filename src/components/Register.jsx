import { Button } from "react-bootstrap";
import { DivForm, FormOption, FormStyled, InputStyled } from "../styles/globalStyles";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <DivForm>
      <h2>
        El sitio que esperabas para planear tu próxima experiencia inolvidable
      </h2>
      <FormStyled>
        <h4>Ingresa a tu cuenta en ViVi</h4>
        <div className="mt-3">
          <InputStyled
            type="email"
            placeholder="Ingresa tu correo electrónico"
          />
          <InputStyled type="password" placeholder="Ingresa tu contraseña" />
        </div>
        <Button variant="success" className="mt-3 px-4 py-1" type="submit">
          Ingresar
        </Button>
        <FormOption>
          <span>¿Eres nuevo usuario?</span>
          <a href="#">Regístrate</a>
          <Button variant="light" className="mt-3 px-5 google">
            <img src={google} alt="google" />
            Iniciar sesión con Google
          </Button>
          <Button className="mt-3 px-5 fb">
            <img src={facebook} alt="facebook" />
            Iniciar sesión con Facebook
          </Button>
        </FormOption>
      </FormStyled>
    </DivFO>
  );
};
