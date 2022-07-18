import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  confirmEmailAdmin,
  sendEmailAdmin,
} from "../../redux/actions/registerAction";
import { NavbarLanding } from "../Navbar";
import { DivForm, FormStyled, InputStyled } from "../../styles/loginStyles";

const AdminLoginSchema = Yup.object().shape({
  email: Yup.string().email("Correo inválido").required("Correo requerido"),
});

export const AdminLogin = () => {
  const dispatch = useDispatch();
  const email = localStorage.getItem("emailForVerification");

  return (
    <>
      <NavbarLanding fixed="null" />
      <DivForm className="login">
        <h2>
          El sitio que esperabas para planear tu próxima experiencia inolvidable
        </h2>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={AdminLoginSchema}
          onSubmit={(values) => {
            email ? dispatch(confirmEmailAdmin()) : dispatch(sendEmailAdmin(values.email));
          }}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <FormStyled style={{ width: "100%" }}>
              <h4>
                Crea tu cuenta de organización y aporta tu granito de arena en
                la iniciativa ViVi
              </h4>
              <div className="mt-3">
                <InputStyled
                  type="email"
                  name="email"
                  placeholder="Ingresa el correo electrónico de tu organización"
                  onChange={handleChange}
                  value={values.email}
                />
                {errors.email && touched.email ? (
                  <div className="error">{errors.email}</div>
                ) : null}
              </div>
              <Button
                variant="success"
                className="mt-3 px-4 py-1"
                type="submit"
                onClick={handleSubmit}
              >
                Ingresar
              </Button>
            </FormStyled>
          )}
        </Formik>
      </DivForm>
    </>
  );
};
