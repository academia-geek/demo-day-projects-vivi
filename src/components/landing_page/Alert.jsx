import "antd/dist/antd.css";
import { useNavigate } from "react-router-dom";
import carro from "../../assets/coche.png";
import { BannerLanding, ButtonLanding } from "../../styles/landingStyles";

export const AlertVivi = () => {
  const navigate = useNavigate();

  return (
    <BannerLanding
      message={
        <div className="d-flex align-items-center">
          <div className="py-4">
            <h3>ViVi Empresarial</h3>
            <p>
              Conoce la mejor forma de promover el turismo de tu región, ¡únete
              a la familia ViVi!
            </p>
            <ButtonLanding onClick={() => navigate("/business")}>
              Conoce más
            </ButtonLanding>
          </div>
          <img src={carro} style={{ width: "15vw" }} />
        </div>
      }
      closable
    />
  );
};
