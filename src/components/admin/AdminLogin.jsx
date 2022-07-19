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
import { useEffect, useState } from "react";

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
  const email_user = JSON.parse(localStorage.getItem("user"));
  const [confirmed, setConfirmed] = useState(false);

  return (
    <>
      <NavbarLanding fixed="null" />
      <DivForm className="company">
        <h2>Forma parte de ViVi e impulsa tu región</h2>
        {!confirmed ? (
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
        ) : (
          <div className="bg-success">
            <h2>
              Gracias por registrarte, te hemos enviado un enlace para que
              puedas ingresar y formar parte de la familia ViVi
            </h2>
          </div>
        )}
      </DivForm>
    </>
  );
};
