import { Alert, Button, Space, Typography } from 'antd';
import 'antd/dist/antd.css'
import carro from '../assets/carro3.png'
const { Title,Text } = Typography;

export const AlertVivi = () => (
  <>
   
    <Alert
   
    message = {
    <div style={{display:"flex"}}>
      
      <div style={{textAlign:"right",marginLeft:"300px"}}>
    <Title style={{color:"white"}}>VIVI EMPRESARIAL</Title>
    <Text type="secondary">
      Conoce la mejor forma de promover el turismo de tu región,unete a la familia ViVi. 
    </Text>
    </div>
    <img src={carro} style={{width:"10vw"}}/>
    <Button type="ghost" style={{marginLeft:"2vw",marginTop:"40px",color:"white"}}>CONOCE MAS</Button>
    </div>
    } 
    description=
    { <div>
   
    
    </div>
  }
    style={{backgroundColor:"rgba(132,134,151)",height:"109px"}}
   
      closable
    />
   
  </>
);

