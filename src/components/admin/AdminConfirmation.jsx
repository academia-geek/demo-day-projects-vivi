import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { confirmEmailAdmin } from "../../redux/actions/registerAction";
import { NavbarLanding } from "../Navbar";
import { DivForm, FormStyled, InputStyled } from "../../styles/loginStyles";

const AdminLoginSchema = Yup.object().shape({
  email: Yup.string().email("Correo inválido").required("Correo requerido"),
});

export const AdminConfirmation = () => {
  const dispatch = useDispatch();
  const email_user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <NavbarLanding fixed="null" />
      <DivForm className="company">
        <h2>Forma parte de ViVi e impulsa tu región</h2>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={AdminLoginSchema}
          onSubmit={(values) => {
            dispatch(confirmEmailAdmin());
          }}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <FormStyled>
              <h4>
                Hemos enviado un enlace a {email_user?.email} para confirmar tu
                cuenta
              </h4>
              <div className="mt-3">
                <InputStyled
                  type="email"
                  name="email"
                  placeholder="Ingresa tu correo para confirmar"
                  onChange={handleChange}
                  value={email_user?.email}
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
                Verificar tu correo
              </Button>
            </FormStyled>
          )}
        </Formik>
      </DivForm>
    </>
  );
};
