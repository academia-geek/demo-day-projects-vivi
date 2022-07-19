import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { sendEmailAdmin } from "../../redux/actions/registerAction";
import { NavbarLanding } from "../Navbar";
import { DivForm, FormStyled, InputStyled } from "../../styles/loginStyles";
import { useState } from "react";
import Alert from "@mui/material/Alert";

const AdminLoginSchema = Yup.object().shape({
  name: Yup.string()
    .required("Nombre requerido")
    .min(4, "Nombre de la organización muy corto")
    .max(30, "Nombre de la organización muy largo"),
  email: Yup.string().email("Correo inválido").required("Correo requerido"),
  phone: Yup.string()
    .required("Teléfono requerido")
    .min(10, "Teléfono inválido")
    .max(20, "Teléfono inválido"),
});

export const AdminLogin = () => {
  const dispatch = useDispatch();
  const [confirmed, setConfirmed] = useState(false);

  return (
    <>
      <NavbarLanding fixed="null" />
      {!confirmed ? (
        <DivForm className="company">
          <h2>Forma parte de ViVi e impulsa tu región</h2>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
            }}
            validationSchema={AdminLoginSchema}
            onSubmit={(values) => {
              dispatch(sendEmailAdmin(values.name, values.email, values.phone));
              setConfirmed(true);
            }}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <FormStyled>
                <h4>Ingresa los datos de tu organización y te contactaremos</h4>
                <div className="mt-3">
                  <label>Nombre de la organización</label>
                  <InputStyled
                    type="text"
                    name="name"
                    placeholder="ViVi App"
                    onChange={handleChange}
                    value={values.name}
                  />
                  {errors.name && touched.name && (
                    <div className="text-danger">{errors.name}</div>
                  )}

                  <label>Correo electrónico</label>
                  <InputStyled
                    type="email"
                    name="email"
                    placeholder="vivi-app@vivi-b2804.firebaseapp.com"
                    onChange={handleChange}
                    value={values.email}
                  />
                  {errors.email && touched.email ? (
                    <div className="error">{errors.email}</div>
                  ) : null}

                  <label>Teléfono</label>
                  <InputStyled
                    type="tel"
                    name="phone"
                    placeholder="+57..."
                    onChange={handleChange}
                    value={values.phone}
                  />
                  {errors.phone && touched.phone ? (
                    <div className="error">{errors.phone}</div>
                  ) : null}
                </div>
                <Button
                  variant="success"
                  className="mt-3 px-4 py-1"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Enviar datos
                </Button>
              </FormStyled>
            )}
          </Formik>
        </DivForm>
      ) : (
        <>
          <DivForm className="company d-block">
            <Alert variant="filled" severity="success">
              Tu correo ha sido registrado correctamente
            </Alert>
            <FormStyled className="mt-5">
              <h4>Gracias por querer formar parte de ViVi.</h4>
              <h4>
                Te hemos enviado un correo para iniciar tu cuenta de organizador
              </h4>
            </FormStyled>
            <Button variant="warning" className="mt-3 px-4 py-1">
              Volver a la página principal
            </Button>
          </DivForm>
        </>
      )}
    </>
  );
};
