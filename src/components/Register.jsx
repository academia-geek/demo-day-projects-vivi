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
import {
  loginFacebook,
  loginGoogle,
  registerUserAsync,
} from "../redux/actions/registerAction";
import { NavbarLanding } from "./Navbar";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Nombre muy corto, mínimo 3 caracteres")
    .max(20, "Nombre muy largo, máximo 20 caracteres")
    .required("Nombre requerido"),
  email: Yup.string().email("Correo inválido").required("Correo requerido"),
  password: Yup.string()
    .min(6, "Contraseña muy corta, mínimo 6 caracteres")
    .max(20, "Contraseña muy larga, máximo 20 caracteres")
    .required("Contraseña requerida"),
  location: Yup.string()
    .min(3, "Ubicación muy corta, mínimo 3 caracteres")
    .max(20, "Ubicación muy larga, máximo 20 caracteres")
    .required("Ubicación requerida"),
});

export const Register = () => {
  const dispatch = useDispatch();
  return (
    <>
      <NavbarLanding fixed="null" />
      <div>
        <DivForm className="register">
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              location: "",
            }}
            validationSchema={RegisterSchema}
            onSubmit={(values) => {
              dispatch(
                registerUserAsync(
                  values.name,
                  values.email,
                  values.password,
                  values.location
                )
              );
            }}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <FormStyled>
                <h4 className="register">Haz parte de la familia ViVi</h4>
                <div className="mt-3">
                  <InputStyled
                    type="text"
                    name="name"
                    placeholder="Ingresa tu nombre completo"
                    onChange={handleChange}
                    value={values.name}
                  />
                  {errors.name && touched.name ? (
                    <div className="error">{errors.name}</div>
                  ) : null}
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
                  <InputStyled
                    type="text"
                    name="location"
                    placeholder="¿De dónde nos visitas?"
                    onChange={handleChange}
                    value={values.location}
                  />
                  {errors.location && touched.location ? (
                    <div className="error">{errors.location}</div>
                  ) : null}
                </div>
                <Button
                  variant="success"
                  className="mt-3 px-4 py-1"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Regístrate
                </Button>
                <FormOption className="register">
                  <span>¿Ya tienes cuenta?</span>
                  <Link to="/login">Iniciar sesión</Link>
                  <Button
                    variant="light"
                    className="mt-3 px-5 google"
                    onClick={() => dispatch(loginGoogle())}
                  >
                    <img src={google} alt="google" />
                    Regístrate con Google
                  </Button>
                  <Button
                    className="mt-3 px-5 fb"
                    onClick={() => dispatch(loginFacebook())}
                  >
                    <img src={facebook} alt="facebook" />
                    Regístrate con Facebook
                  </Button>
                </FormOption>
              </FormStyled>
            )}
          </Formik>
        </DivForm>
      </div>
    </>
  );
};
