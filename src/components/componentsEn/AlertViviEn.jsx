import { Alert, Button, Space, Typography } from 'antd';
import 'antd/dist/antd.css'
// import carro from '../assets/coche.png'
const { Title,Text } = Typography;

export const AlertViviEn = () => (
  <>
    <Alert
      message={
        <div style={{ marginLeft: "25vw", display: 'flex' }}>
          <div style={{ textAlign: "center" }}>
            <Title style={{ color: "white" }}>BUSINESS VIVIL</Title>
            <h6 style={{ color: "white" }}>Know the best way to promote tourism in your region, join the ViVi family.</h6>
            <Button type="ghost" style={{ color: "white" }}>LEARN MORE</Button>
          </div>
          {/* <img src={carro} style={{ width: "10vw" }} /> */}
        </div>
      }
      style={{ backgroundColor: "rgba(86, 82, 82, 1)", border: "none", color: 'white',fontFamily:"Raleway" }}
      closable
    />
  </>
);

