import React from 'react'
import { Layout } from 'antd';

import { Card } from 'react-bootstrap';
import place from "../../assets/prueba/image.png";
import place1 from "../../assets/prueba/image1.png";
import place2 from "../../assets/prueba/image2.png";
import { CardStyledCalendar, LineStyle, SiderStyle } from '../../styles/calendarStyle';
const { Sider } = Layout;

export const SiderCalendar = () => {
    const data=[
        {
            img:place,
            title:"Mina de sal de Nemocón",
            text:"En las minas de sal que están abiertas al público, se puede apreciar los increíbles espejos de agua adecuados con una hermosa iluminación."
         },
         
        {
            img:place1,
            title:"Cerro azul",
            text:"A 47 Km de San José del Guaviare ,es una montaña que sobresale entre la selva, en ella se observan una serie de pinturas rupestres que conforman un hermoso mural de color rojizo."
        },
        {
            img:place2,
            title:"Parque Nacional Natural el Turrapo",
            text:" Es una reserva natural  en el departamento de Vichada que ofrece al visitante hermosos ríos, la posibilidad de ver jaguares, tapires y animales de la región." 
        },
        {
            img:place,
            title:"Mina de sal de Nemocón g",
            text:"En las minas de sal que están abiertas al público, se puede apreciar los increíbles espejos de agua adecuados con una hermosa iluminación."
         },
         
        {
            img:place1,
            title:"Cerro azul f",
            text:"A 47 Km de San José del Guaviare ,es una montaña que sobresale entre la selva, en ella se observan una serie de pinturas rupestres que conforman un hermoso mural de color rojizo."
        },
        {
            img:place2,
            title:"Parque Nacional Natural el Turrapo b",
            text:" Es una reserva natural  en el departamento de Vichada que ofrece al visitante hermosos ríos, la posibilidad de ver jaguares, tapires y animales de la región." 
        }
    ]
  return (
   
    <SiderStyle
    className="siderStyle"
    >
     {
    data.map((p) => (
      <div key={p.title}>
      <CardStyledCalendar >
          <img src={p.img} />
          <Card.Body>
            <Card.Title>{p.title}</Card.Title>
            </Card.Body>
       </CardStyledCalendar>
       <LineStyle/>
       </div>        
    ))}
    </SiderStyle>
  
  )
}
