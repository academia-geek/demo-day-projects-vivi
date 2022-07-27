import { Col, Container, Row } from "react-bootstrap";
import {
  ButtonLanding,
  FormLanding,
  TitleLanding,
} from "../../styles/landingStyles";
import contact from "../../assets/ilustracion-soporte2.webp";
import useForm from "../../hooks/useForm";
import Swal from "sweetalert2";

export const ContactLanding = () => {
  const [formValue, handleChange, reset] = useForm({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:melisamendozamogollon@gmail.com?subject=Contacto-${formValue.subject}&body=Correo:${formValue.email}%0A%0ANombre:${formValue.name}%0A%0ATelefono:${formValue.phone}%0A%0AMensaje:${formValue.message}`;
    Swal.fire({
      title: `¡${formValue.name}, gracias por contactar a ViVi!`,
      text: "Nos comunicaremos con usted a la brevedad.",
      icon: "success",
      confirmButtonText: "Cerrar",
    });
    reset();
  };

  return (
    <section className="mb-5">
      <Container>
        <TitleLanding>
          <h2 className="text-uppercase">Contáctanos</h2>
        </TitleLanding>
        <Row>
          <Col md={6} className="d-none d-lg-block">
            <img src={contact} width={500} height={350} />
          </Col>
          <Col md={6}>
            <FormLanding onSubmit={handleSubmit}>
              <div className="form-group d-flex gap-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre y apellido"
                  name="name"
                  onChange={handleChange}
                  value={formValue.name}
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo electrónico"
                  name="email"
                  onChange={handleChange}
                  value={formValue.email}
                />
              </div>
              <div className="form-group d-flex gap-2 mt-3">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Teléfono"
                  name="phone"
                  onChange={handleChange}
                  value={formValue.phone}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Asunto"
                  name="subject"
                  onChange={handleChange}
                  value={formValue.subject}
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Mensaje"
                  name="message"
                  onChange={handleChange}
                  value={formValue.message}
                ></textarea>
              </div>
              <ButtonLanding type="submit" onClick={handleSubmit}>
                <span>Enviar</span>
              </ButtonLanding>
            </FormLanding>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
