import { Col, Container, Row } from "react-bootstrap";
import CelebrationIcon from "@mui/icons-material/Celebration";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import PublicIcon from '@mui/icons-material/Public';
import WorkIcon from "@mui/icons-material/Work";
import { Box, TitleLanding } from "../../styles/landingStyles";

export const Services = () => {
  return (
    <section className="mb-5">
      <Container>
        <TitleLanding>
          <h1 className="text-uppercase">Servicios</h1>
        </TitleLanding>
        <Row className="justify-content-center">
          <Col md={3} className="mt-5 mt-lg-0">
            <Box>
              <div className="icon">
                <CelebrationIcon />
              </div>
              <h5 className="text-center">
                Publicaciones de eventos culturales y recreativos
              </h5>
            </Box>
          </Col>
          <Col md={3} className="mt-5 mt-lg-0">
            <Box>
              <div className="icon">
                <RecordVoiceOverIcon />
              </div>
              <h5 className="text-center">
                Compartir experiencias con otros usuarios
              </h5>
            </Box>
          </Col>
          <Col md={3} className="mt-5 mt-lg-0">
            <Box>
              <div className="icon">
                <PublicIcon />
              </div>
              <h5 className="text-center">Geolocalización de lugares</h5>
            </Box>
          </Col>
          <Col md={3} className="mt-5 mt-lg-0">
            <Box>
              <div className="icon">
                <WorkIcon />
              </div>
              <h5 className="text-center">Entorno empresarial</h5>
            </Box>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
