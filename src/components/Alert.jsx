import { Alert, Button, Space } from 'antd';
import 'antd/dist/antd.css'


export const AlertVivi = () => (
  <>
   
    <Alert
    //   message="Conoce la mejor forma de promover el turismo de tu región,unete a la familia ViVi "
      type="warning"
      action={
        <div>
            <h1>ViVi Empresarial</h1>
            <h4> Conoce la mejor forma de promover el turismo de tu región,unete a la familia ViVi </h4>
        <Space>
         <Button size="small" type="ghost">
          Conoce mas 
          </Button>
        </Space>
        </div>
      }
      closable
    />
   
  </>
);

