import { Alert, Button, Space, Typography } from 'antd';
import 'antd/dist/antd.css'
import carro from '../assets/coche.png'
const { Title,Text } = Typography;

export const AlertVivi = () => (
  <>
    <Alert
      message={
        <div style={{ marginLeft: "25vw", display: 'flex' }}>
          <div style={{ textAlign: "center" }}>
            <Title style={{ color: "white" }}>VIVI EMPRESARIAL</Title>
            <h6 style={{ color: "white" }}>Conoce la mejor forma de promover el turismo de tu región,unete a la familia ViVi.</h6>
            <Button type="ghost" style={{ color: "white" }} href="/business">CONOCE MÁS</Button>
          </div>
          <img src={carro} style={{ width: "10vw" }} />
        </div>
      }
      style={{ backgroundColor: "rgba(86, 82, 82, 1)", border: "none", color: 'white',fontFamily:"Raleway" }}
      closable
    />
  </>
);

