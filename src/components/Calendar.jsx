import React from 'react';
import 'antd/dist/antd.css';

import { Calendar } from 'antd';


export const MainCalendar= () => {
  const onSelect = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return (
    <div className="site-calendar-demo-card" >
      <Calendar fullscreen={false} onSelect={onSelect}  />
    </div>
  );
};





