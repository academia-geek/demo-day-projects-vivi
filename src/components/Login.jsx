import { Button } from "react-bootstrap";
import {
  DivForm,
  FormOption,
  FormStyled,
  InputStyled,
} from "../styles/loginStyles";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { loginUserAsync } from "../redux/actions/loginAction";
import { loginFacebook, loginGoogle } from "../redux/actions/registerAction";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Correo inválido").required("Correo requerido"),
  password: Yup.string()
    .min(6, "Contraseña muy corta, mínimo 6 caracteres")
    .max(20, "Contraseña muy larga, máximo 20 caracteres")
    .required("Contraseña requerida"),
});

export const Login = () => {
  const dispatch = useDispatch();

  return (
    <DivForm className="login">
      <h2>
        El sitio que esperabas para planear tu próxima experiencia inolvidable
      </h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          dispatch(loginUserAsync(values));
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <FormStyled>
            <h4>Ingresa a tu cuenta en ViVi</h4>
            <div className="mt-3">
              <InputStyled
                type="email"
                name="email"
                placeholder="Ingresa tu correo electrónico"
                onChange={handleChange}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <div className="error">{errors.email}</div>
              ) : null}
              <InputStyled
                type="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                onChange={handleChange}
                value={values.password}
              />
              {errors.password && touched.password ? (
                <div className="error">{errors.password}</div>
              ) : null}
            </div>
            <Button variant="success" className="mt-3 px-4 py-1" type="submit" onClick={handleSubmit}>
              Ingresar
            </Button>
            <FormOption>
              <span>¿Eres nuevo usuario?</span>
              <Link to="/signin">Regístrate</Link>
              <Button variant="light" className="mt-3 px-5 google" onClick={() => dispatch(loginGoogle())}>
                <img src={google} alt="google" />
                Iniciar sesión con Google
              </Button>
              <Button className="mt-3 px-5 fb" onClick={() => dispatch(loginFacebook())}>
                <img src={facebook} alt="facebook"/>
                Iniciar sesión con Facebook
              </Button>
            </FormOption>
          </FormStyled>
        )}
      </Formik>
    </DivForm>
  );
};
